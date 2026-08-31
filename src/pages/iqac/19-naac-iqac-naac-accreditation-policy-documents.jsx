import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import policyDocuments from '../../assets/iqac/policy-documents.pdf';

export default function PolicyDocuments() {
  return (
    <>
      <Seo
        title="Policy Documents"
        description="Consolidated policy documents of Christ College, Pune, covering academic, administrative and quality-related institutional policies."
      />
      <PageHeader title="Policy Documents" breadcrumbs={[{ label: 'IQAC' }, { label: 'Policy Documents' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            Christ College, Pune maintains a consolidated set of institutional policies covering
            academic, administrative and quality-related matters, updated periodically by the IQAC.
            The current compilation is available below.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={policyDocuments}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Policy Documents</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
