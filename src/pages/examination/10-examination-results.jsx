import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GlobeIcon, ExpandIcon } from '../../components/icons';

export default function ExaminationResults() {
  return (
    <>
      <Seo
        title="Examination Results"
        description="Access examination results for Christ College, Pune students through the Savitribai Phule Pune University Online Result Display System."
      />
      <PageHeader title="Results" breadcrumbs={[{ label: 'Examination' }, { label: 'Results' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto max-w-xl rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-10 text-center shadow-cc-sm">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <GlobeIcon width={26} height={26} />
          </span>
          <h2 className="mt-6">University Result Display System</h2>
          <p className="mt-4 text-cc-text-body">
            As Christ College, Pune is affiliated with the Savitribai Phule Pune University,
            examination results for all UG and PG programmes &mdash; including B.A., B.Sc., B.Com.,
            BBA, M.A., M.Sc., and M.Com. &mdash; are published on the University&rsquo;s Online
            Result Display System. Results are released programme-wise for the Summer and Winter
            examination sessions as per the University&rsquo;s notified schedule.
          </p>
          <a
            href="https://onlineresults.unipune.ac.in/Result/Dashboard/Default"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
          >
            Check Results
            <ExpandIcon width={16} height={16} />
          </a>
        </div>
      </section>
    </>
  );
}
