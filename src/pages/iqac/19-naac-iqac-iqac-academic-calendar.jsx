import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import academicCalendar from '../../assets/iqac/academic-calendar-2023-24.pdf';

export default function AcademicCalendar() {
  return (
    <>
      <Seo
        title="Academic Calendar"
        description="Academic Calendar 2023–24 for Christ College, Pune, listing term dates, examinations and key institutional events for the academic year."
      />
      <PageHeader title="Academic Calendar" breadcrumbs={[{ label: 'IQAC' }, { label: 'Academic Calendar' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Academic Calendar is published at the start of every academic year and sets out term
            dates, examination schedules and key institutional events at Christ College, Pune.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={academicCalendar}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Academic Calendar 2023–24</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
