import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import iqacComposition from '../../assets/iqac/iqac-composition.pdf';

export default function IqacComposition() {
  return (
    <>
      <Seo
        title="IQAC Composition"
        description="Composition of the Internal Quality Assurance Cell (IQAC) at Christ College, Pune, listing its constituted members and their roles."
      />
      <PageHeader title="IQAC Composition" breadcrumbs={[{ label: 'IQAC' }, { label: 'IQAC Composition' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Internal Quality Assurance Cell (IQAC) at Christ College, Pune is constituted as per
            NAAC guidelines, with representation from the college management, senior academic and
            administrative staff, faculty coordinators and other stakeholders. The document below
            lists the current composition of the cell.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={iqacComposition}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">IQAC Composition</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
