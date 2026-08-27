import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';

const PDF_URL =
  'https://christcollegepune.org/uploads/cmsmenu/compress_ebook_merged_compressed_20250626033851.pdf';

export default function CollegeMagazine() {
  return (
    <>
      <Seo
        title="College Magazine"
        description="View or download the Christ College, Pune college magazine, the annual student publication showcasing campus life, achievements and creative work."
      />
      <PageHeader title="College Magazine" breadcrumbs={[{ label: 'Student Life' }, { label: 'College Magazine' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto flex max-w-xl flex-col items-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-10 text-center shadow-cc-sm">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <DownloadIcon width={28} height={28} />
          </span>
          <h2 className="mt-6">College Magazine</h2>
          <p className="mt-3 text-cc-text-body">
            Read the latest edition of the Christ College, Pune college magazine, published by the
            college for its students.
          </p>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
          >
            <DownloadIcon width={18} height={18} />
            View / Download PDF
          </a>
        </div>
      </section>
    </>
  );
}
