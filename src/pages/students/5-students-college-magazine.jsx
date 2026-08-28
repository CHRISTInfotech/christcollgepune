import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
export default function CollegeMagazine() {
  const driveUrl = 'https://drive.google.com/file/d/1HWTNpKHvOIG29_W8KLpZIZofIfQeaaeS/view?usp=sharing';

  return (
    <>
      <Seo
        title="College Magazine"
        description="Read or download the Christ College, Pune college magazine, the annual student publication showcasing campus life, achievements and creative work."
      />
      <PageHeader title="College Magazine" breadcrumbs={[{ label: 'Student Life' }, { label: 'College Magazine' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-sm text-cc-text-body">
          Read the latest edition of the Christ College, Pune college magazine, published by the
          college for its students.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-12 text-center shadow-cc-sm max-w-2xl mx-auto">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>

          <h3 className="mt-6 text-xl font-bold text-cc-text-heading">College Magazine</h3>
          <p className="mt-3 text-sm text-cc-text-muted-light max-w-md leading-relaxed">
            The file size of this edition is very large (~125 MB) and exceeds the limit for inline browser preview.
            Please open the file in a new tab to view or download it directly from Google Drive.
          </p>

          <div className="mt-8 flex w-full justify-center">
            <a
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light shadow-cc-sm transition-all hover:bg-cc-primary-hover hover:shadow-cc-md"
            >
              Open in a New Tab
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
        </div>
      </section>
    </>
  );
}
