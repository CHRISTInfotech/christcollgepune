import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import statutoryDeclarationPdf from '../../assets/rti/statutory-declaration-under-rti-act.pdf';

export default function StatutoryDeclarationUnderRtiAct() {
  return (
    <>
      <Seo
        title="Statutory Declaration under RTI Act"
        description="Christ College, Pune's Statutory Declaration under Section 4(1)(b) of the Right to Information Act, 2005 — download the official document."
      />
      <PageHeader title="Statutory Declaration under RTI Act" breadcrumbs={[{ label: 'RTI' }, { label: 'Statutory Declaration under RTI Act' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Statutory Declaration under RTI Act</h2>
          <p className="mt-4 text-cc-text-body">
            As required under the Right to Information Act, 2005, Christ College, Pune publishes
            its statutory declaration setting out institutional information for public disclosure.
            Download the complete document below.
          </p>

          <div className="mt-6">
            <a
              href={statutoryDeclarationPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary sm:max-w-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <DownloadIcon width={20} height={20} />
              </span>
              <span>
                <span className="block font-semibold text-cc-text-heading">Statutory Declaration under RTI Act</span>
                <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
