import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
export default function CollegeMagazine() {
  const driveUrl = 'https://drive.google.com/file/d/1HWTNpKHvOIG29_W8KLpZIZofIfQeaaeS/view?usp=sharing';
  const embedUrl = 'https://drive.google.com/file/d/1HWTNpKHvOIG29_W8KLpZIZofIfQeaaeS/preview';

  return (
    <>
      <Seo
        title="College Magazine"
        description="Read or download the Christ College, Pune college magazine, the annual student publication showcasing campus life, achievements and creative work."
      />
      <PageHeader title="College Magazine" breadcrumbs={[{ label: 'Student Life' }, { label: 'College Magazine' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <p className="max-w-2xl text-sm text-cc-text-body">
            Read the latest edition of the Christ College, Pune college magazine, published by the
            college for its students.
          </p>
          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-4 py-2 text-sm font-semibold text-cc-text-light shadow-cc-sm transition-all hover:bg-cc-primary-hover hover:shadow-cc-md"
          >
            Open in Google Drive
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <div className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface shadow-cc-sm">
          <iframe
            src={embedUrl}
            title="Christ College Pune Magazine"
            className="h-[80vh] w-full border-0"
            allow="autoplay"
          />
        </div>
      </section>
    </>
  );
}
