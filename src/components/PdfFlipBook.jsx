import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { DownloadIcon, ShareIcon, ExpandIcon, CollapseIcon, ChevronDownIcon } from './icons';

GlobalWorkerOptions.workerSrc = workerSrc;

const RENDER_SCALE = 1.5;
const PREFETCH_AHEAD = 4;

const FlipPage = forwardRef(function FlipPage({ pageNumber, imageSrc }, ref) {
  return (
    <div ref={ref} className="flex h-full w-full items-center justify-center bg-white">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`Page ${pageNumber}`}
          className="h-full w-full select-none object-contain"
          draggable={false}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs text-cc-text-muted-light">
          Loading page {pageNumber}&hellip;
        </div>
      )}
    </div>
  );
});

export default function PdfFlipBook({ fileUrl, title }) {
  const containerRef = useRef(null);
  const bookRef = useRef(null);
  const pdfRef = useRef(null);
  const renderingRef = useRef(new Set());

  const [numPages, setNumPages] = useState(0);
  const [pageImages, setPageImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [aspect, setAspect] = useState(1.414);
  const [bookWidth, setBookWidth] = useState(320);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getDocument({ url: fileUrl })
      .promise.then(async (pdf) => {
        if (cancelled) return;
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        const firstPage = await pdf.getPage(1);
        const viewport = firstPage.getViewport({ scale: 1 });
        if (!cancelled) setAspect(viewport.height / viewport.width);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [fileUrl]);

  const renderPage = useCallback(async (pageNumber) => {
    if (!pdfRef.current) return;
    if (renderingRef.current.has(pageNumber)) return;
    renderingRef.current.add(pageNumber);
    try {
      const page = await pdfRef.current.getPage(pageNumber);
      const viewport = page.getViewport({ scale: RENDER_SCALE });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      await page.render({ canvasContext: ctx, viewport }).promise;
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      setPageImages((prev) => (prev[pageNumber] ? prev : { ...prev, [pageNumber]: dataUrl }));
    } catch {
      /* skip a page that fails to render rather than breaking the whole book */
    } finally {
      renderingRef.current.delete(pageNumber);
    }
  }, []);

  useEffect(() => {
    if (!numPages) return;
    setPageImages((prev) => {
      const start = Math.max(1, currentPage - 1);
      const end = Math.min(numPages, currentPage + PREFETCH_AHEAD);
      for (let p = start; p <= end; p += 1) {
        if (!prev[p]) renderPage(p);
      }
      return prev;
    });
  }, [currentPage, numPages, renderPage]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 640;
      setBookWidth(Math.max(180, Math.min(480, Math.floor(width / 2) - 8)));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === containerRef.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const handleFlip = useCallback((e) => {
    setCurrentPage(e.data + 1);
  }, []);

  const goPrev = useCallback(() => bookRef.current?.pageFlip()?.flipPrev(), []);
  const goNext = useCallback(() => bookRef.current?.pageFlip()?.flipNext(), []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current?.requestFullscreen?.();
    }
  }, []);

  const handleShare = useCallback(async () => {
    const shareUrl = new URL(fileUrl, window.location.href).href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
      } catch {
        /* user dismissed the share sheet */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  }, [fileUrl, title]);

  if (loadError) {
    return (
      <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-10 text-center">
        <p className="text-cc-text-body">This document couldn&rsquo;t be previewed in the browser.</p>
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2.5 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
        >
          <DownloadIcon width={18} height={18} />
          View / Download PDF
        </a>
      </div>
    );
  }

  const bookHeight = Math.round(bookWidth * aspect);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface ${
        isFullscreen ? 'flex h-full flex-col' : ''
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cc-gray-200 px-4 py-3">
        <p className="font-semibold text-cc-text-heading">{title}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 rounded-cc-pill border border-cc-gray-300 px-3 py-1.5 text-sm font-medium text-cc-text-body transition-colors hover:border-cc-primary hover:text-cc-primary"
          >
            <ShareIcon width={16} height={16} />
            {copied ? 'Link copied' : 'Share'}
          </button>
          <a
            href={fileUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-cc-pill border border-cc-gray-300 px-3 py-1.5 text-sm font-medium text-cc-text-body transition-colors hover:border-cc-primary hover:text-cc-primary"
          >
            <DownloadIcon width={16} height={16} />
            Download
          </a>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 rounded-cc-pill border border-cc-gray-300 px-3 py-1.5 text-sm font-medium text-cc-text-body transition-colors hover:border-cc-primary hover:text-cc-primary"
          >
            {isFullscreen ? <CollapseIcon width={16} height={16} /> : <ExpandIcon width={16} height={16} />}
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
      </div>

      <div className={`flex items-center justify-center bg-cc-bg-page py-8 ${isFullscreen ? 'flex-1' : ''}`}>
        {numPages > 0 ? (
          <HTMLFlipBook
            ref={bookRef}
            width={bookWidth}
            height={bookHeight}
            size="fixed"
            minWidth={180}
            maxWidth={600}
            minHeight={260}
            maxHeight={900}
            showCover
            drawShadow
            flippingTime={500}
            maxShadowOpacity={0.4}
            onFlip={handleFlip}
            className="mx-auto"
          >
            {Array.from({ length: numPages }, (_, i) => i + 1).map((n) => (
              <FlipPage key={n} pageNumber={n} imageSrc={pageImages[n]} />
            ))}
          </HTMLFlipBook>
        ) : (
          <p className="text-sm text-cc-text-muted-light">Loading document&hellip;</p>
        )}
      </div>

      {numPages > 0 && (
        <div className="flex items-center justify-center gap-4 border-t border-cc-gray-200 py-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentPage <= 1}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-cc-gray-300 text-cc-text-body transition-colors hover:border-cc-primary hover:text-cc-primary disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous page"
          >
            <ChevronDownIcon className="rotate-90" />
          </button>
          <span className="rounded-cc-pill bg-cc-bg-page px-3 py-1 text-sm text-cc-text-muted-light">
            {currentPage} / {numPages}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={currentPage >= numPages}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-cc-gray-300 text-cc-text-body transition-colors hover:border-cc-primary hover:text-cc-primary disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next page"
          >
            <ChevronDownIcon className="-rotate-90" />
          </button>
        </div>
      )}
    </div>
  );
}
