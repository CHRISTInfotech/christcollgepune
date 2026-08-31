import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GlobeIcon } from '../../components/icons';

export default function ExaminationTimeTableExternal() {
  const portalUrl = 'http://collegecirculars.unipune.ac.in/sites/examdocs/MARAPR%202025/Forms/AllItems.aspx';

  return (
    <>
      <Seo
        title="Examination Time Table"
        description="Access examination time tables published by Savitribai Phule Pune University for Christ College, Pune's affiliated programmes."
      />
      <PageHeader title="Examination Time Table" breadcrumbs={[{ label: 'Examination' }, { label: 'Examination Time Table' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-12 text-center shadow-cc-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <GlobeIcon width={32} height={32} />
          </div>

          <h3 className="mt-6 text-xl font-bold text-cc-text-heading">Examination Time Table</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cc-text-muted-light">
            This link opens Savitribai Phule Pune University&rsquo;s official examination
            circulars portal, where examination time tables for affiliated programmes are
            published.
          </p>

          <div className="mt-8 flex w-full justify-center">
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light shadow-cc-sm transition-all hover:bg-cc-primary-hover hover:shadow-cc-md"
            >
              Open Examination Time Table
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
