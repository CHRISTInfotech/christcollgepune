import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import peerTeamReport from '../../assets/naac/peer-team-report.pdf';

export default function PeerTeamReport() {
  return (
    <>
      <Seo
        title="Peer Team Report"
        description="View or download the NAAC Peer Team Report prepared following the assessment visit to Christ College, Pune."
      />
      <PageHeader title="Peer Team Report" breadcrumbs={[{ label: 'NAAC' }, { label: 'Peer Team Report' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Peer Team Report below was prepared by the NAAC assessment team following their
            visit to Christ College, Pune.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={peerTeamReport}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Peer Team Report</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
