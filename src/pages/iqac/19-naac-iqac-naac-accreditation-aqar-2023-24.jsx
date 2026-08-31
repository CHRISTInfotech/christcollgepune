import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import aqar202324 from '../../assets/iqac/aqar-2023-24.pdf';

export default function Aqar202324() {
  return (
    <>
      <Seo
        title="AQAR 2023–24"
        description="Annual Quality Assurance Report (AQAR) 2023–24 submitted by Christ College, Pune to NAAC as part of its ongoing quality assurance process."
      />
      <PageHeader title="AQAR 2023–24" breadcrumbs={[{ label: 'IQAC' }, { label: 'AQAR 2023–24' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Annual Quality Assurance Report (AQAR) is submitted by the IQAC to NAAC every year to
            record the quality-sustenance and quality-enhancement measures undertaken by the
            college. The AQAR for the academic year 2023–24 is available below.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={aqar202324}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">AQAR 2023–24</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
