import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import strategicPlan from '../../assets/iqac/strategic-plan.pdf';

export default function StrategicPlan() {
  return (
    <>
      <Seo
        title="Strategic Plan"
        description="Strategic Plan of Christ College, Pune, outlining the institution's long-term academic, infrastructural and quality-development goals."
      />
      <PageHeader title="Strategic Plan" breadcrumbs={[{ label: 'IQAC' }, { label: 'Strategic Plan' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Strategic Plan sets out the long-term academic, infrastructural and quality
            development goals of Christ College, Pune, and guides the priorities of the IQAC and the
            college administration.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={strategicPlan}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Strategic Plan</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
