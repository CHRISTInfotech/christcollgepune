import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import report202425 from '../../assets/iqac/annual-report-2024-25.pdf';
import report202324 from '../../assets/iqac/annual-report-2023-24.pdf';
import report202223 from '../../assets/iqac/annual-report-2022-23.pdf';
import report202122 from '../../assets/iqac/annual-report-2021-22.pdf';
import report202021 from '../../assets/iqac/annual-report-2020-21.pdf';
import report201920 from '../../assets/iqac/annual-report-2019-20.pdf';
import report201819 from '../../assets/iqac/annual-report-2018-19.pdf';

const DOCUMENTS = [
  { name: 'Annual Report 2024–25', file: report202425 },
  { name: 'Annual Report 2023–24', file: report202324 },
  { name: 'Annual Report 2022–23', file: report202223 },
  { name: 'Annual Report 2021–22', file: report202122 },
  { name: 'Annual Report 2020–21', file: report202021 },
  { name: 'Annual Report 2019–20', file: report201920 },
  { name: 'Annual Report 2018–19', file: report201819 },
];

export default function AnnualReports() {
  return (
    <>
      <Seo
        title="Annual Reports"
        description="Official Annual Reports of Christ College, Pune across academic years 2018–19 through 2024–25, summarising academic, co-curricular, and administrative activities."
      />
      <PageHeader title="Annual Reports" breadcrumbs={[{ label: 'IQAC' }, { label: 'Annual Reports' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            Christ College, Pune publishes an Annual Report each academic year, summarising its
            academic, co-curricular, extension, and administrative activities. Reports for the
            academic years 2018&ndash;19 through 2024&ndash;25 are available below.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {DOCUMENTS.map((doc) => (
              <a
                key={doc.name}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <DownloadIcon width={20} height={20} />
                </span>
                <span>
                  <span className="block font-semibold text-cc-text-heading">{doc.name}</span>
                  <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
