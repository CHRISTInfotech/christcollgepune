import { useCallback, useEffect, useRef, useState } from 'react';
import { DownloadIcon, ShareIcon, ExpandIcon, CollapseIcon } from './icons';

/**
 * Embeds a same-origin PDF using the browser's own PDF viewer (which already
 * provides page navigation, zoom and print in its native toolbar), wrapped in
 * a branded toolbar for Share, Download and Fullscreen.
 *
 * Only works for same-origin files — a PDF served cross-origin with
 * `X-Frame-Options: SAMEORIGIN` (as on christcollegepune.org's uploads) cannot
 * be framed here, so those files must be downloaded into `src/assets` and
 * imported as local modules rather than linked by remote URL.
 */
export default function PdfViewer({ fileUrl, title }) {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === containerRef.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

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

      <iframe
        src={fileUrl}
        title={title}
        className={isFullscreen ? 'w-full flex-1' : 'h-[80vh] w-full'}
      />
    </div>
  );
}
