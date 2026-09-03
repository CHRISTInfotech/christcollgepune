import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import calendar202324 from '../../assets/iqac/academic-calendar-2023-24.pdf';
import calendar202223 from '../../assets/iqac/academic-calendar-2022-23.pdf';
import calendar202122 from '../../assets/iqac/academic-calendar-2021-22.pdf';
import calendar202021 from '../../assets/iqac/academic-calendar-2020-21.pdf';
import calendar201920 from '../../assets/iqac/academic-calendar-2019-20.pdf';
import calendar201819 from '../../assets/iqac/academic-calendar-2018-19.pdf';
import calendar201718 from '../../assets/iqac/academic-calendar-2017-18.pdf';

const DOCUMENTS = [
  { name: 'Academic Calendar 2023–24', file: calendar202324 },
  { name: 'Academic Calendar 2022–23', file: calendar202223 },
  { name: 'Academic Calendar 2021–22', file: calendar202122 },
  { name: 'Academic Calendar 2020–21', file: calendar202021 },
  { name: 'Academic Calendar 2019–20', file: calendar201920 },
  { name: 'Academic Calendar 2018–19', file: calendar201819 },
  { name: 'Academic Calendar 2017–18', file: calendar201718 },
];

export default function AcademicCalendar() {
  return (
    <>
      <Seo
        title="Academic Calendar"
        description="Official Academic Calendars for Christ College, Pune across academic years 2017–18 to 2023–24, listing term dates, examination schedules, and institutional events."
      />
      <PageHeader title="Academic Calendar" breadcrumbs={[{ label: 'IQAC' }, { label: 'Academic Calendar' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Academic Calendar is published at the start of every academic year and sets out term
            dates, examination schedules, internal assessments, and key institutional events at Christ College, Pune.
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
