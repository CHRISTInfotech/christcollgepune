import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import selfStudyReport from '../../assets/naac/self-study-report-ssr.pdf';

export default function SelfStudyReportSsr() {
  return (
    <>
      <Seo
        title="Self Study Report (SSR)"
        description="View or download the Self Study Report (SSR) submitted by Christ College, Pune for NAAC Cycle 2 accreditation."
      />
      <PageHeader title="Self Study Report (SSR)" breadcrumbs={[{ label: 'NAAC' }, { label: 'Self Study Report (SSR)' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Self Study Report (SSR) below was submitted by Christ College, Pune to the National
            Assessment and Accreditation Council (NAAC) as part of its Cycle 2 accreditation
            process.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={selfStudyReport}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Self Study Report (SSR)</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
