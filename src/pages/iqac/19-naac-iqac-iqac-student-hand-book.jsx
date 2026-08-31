import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import studentHandbook from '../../assets/iqac/student-handbook-2023-24.pdf';

export default function StudentHandBook() {
  return (
    <>
      <Seo
        title="Student Handbook"
        description="Student Handbook 2023–24 for Christ College, Pune, covering academic regulations, codes of conduct, facilities and support services for enrolled students."
      />
      <PageHeader title="Student Handbook" breadcrumbs={[{ label: 'IQAC' }, { label: 'Student Handbook' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Student Handbook is issued each academic year and serves as a comprehensive guide
            for students, covering academic regulations, examination procedures, codes of conduct,
            campus facilities and the support services available at Christ College, Pune.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={studentHandbook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Student Handbook 2023–24</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
