import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';

const PDF_URL =
  'https://christcollegepune.org/uploads/cmsmenu/Students%20Insurance%202026-27_20260819101408.pdf';

export default function StudentsInsurance202627() {
  return (
    <>
      <Seo
        title="Students Insurance 2026-27"
        description="View or download the Christ College, Pune Students Insurance 2026-27 document covering the student insurance scheme for the academic year."
      />
      <PageHeader title="Students Insurance 2026-27" breadcrumbs={[{ label: 'Student Life' }, { label: 'Students Insurance 2026-27' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto flex max-w-xl flex-col items-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-10 text-center shadow-cc-sm">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <DownloadIcon width={28} height={28} />
          </span>
          <h2 className="mt-6">Students Insurance 2026-27</h2>
          <p className="mt-3 text-cc-text-body">
            View the details of the student insurance scheme for the 2026&ndash;27 academic year
            at Christ College, Pune.
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
