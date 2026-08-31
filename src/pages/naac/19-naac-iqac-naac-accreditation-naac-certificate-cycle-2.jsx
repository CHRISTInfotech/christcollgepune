import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import naacCertificateCycle2 from '../../assets/naac/naac-certificate-cycle-2.pdf';

export default function NaacCertificateCycle2() {
  return (
    <>
      <Seo
        title="NAAC Certificate – Cycle 2"
        description="View or download the NAAC accreditation certificate awarded to Christ College, Pune in Cycle 2."
      />
      <PageHeader title="NAAC Certificate – Cycle 2" breadcrumbs={[{ label: 'NAAC' }, { label: 'NAAC Certificate – Cycle 2' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The certificate below records the accreditation awarded to Christ College, Pune by the
            National Assessment and Accreditation Council (NAAC) in Cycle 2.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={naacCertificateCycle2}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">NAAC Certificate – Cycle 2</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
