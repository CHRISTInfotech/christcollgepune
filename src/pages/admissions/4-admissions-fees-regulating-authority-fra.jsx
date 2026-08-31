import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import fraPdf from '../../assets/admissions/fees-regulating-authority-fra.pdf';

export default function FeesRegulatingAuthorityFra() {
  return (
    <>
      <Seo
        title="Fees Regulating Authority (FRA)"
        description="Fee structure of Christ College, Pune as approved by the Fees Regulating Authority (FRA), Government of Maharashtra."
      />
      <PageHeader title="Fees Regulating Authority (FRA)" breadcrumbs={[{ label: 'Admissions' }, { label: 'Fees Regulating Authority (FRA)' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Fees Regulating Authority (FRA)</h2>
          <p className="mt-4 text-cc-text-body">
            The fee structure of Christ College, Pune for its professional programmes is approved
            by the Fees Regulating Authority (FRA), a statutory body constituted by the Government
            of Maharashtra to regulate fees charged by unaided professional educational
            institutions in the state. Download the approved fee structure document below.
          </p>

          <div className="mt-6">
            <a
              href={fraPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary sm:max-w-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <DownloadIcon width={20} height={20} />
              </span>
              <span>
                <span className="block font-semibold text-cc-text-heading">Fees Regulating Authority (FRA)</span>
                <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
