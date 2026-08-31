import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GlobeIcon, ExpandIcon } from '../../components/icons';

export default function ImportantCirculars() {
  return (
    <>
      <Seo
        title="Important Circulars"
        description="Important examination circulars issued to colleges affiliated with Savitribai Phule Pune University, including Christ College, Pune."
      />
      <PageHeader title="Important Circulars" breadcrumbs={[{ label: 'Examination' }, { label: 'Important Circulars' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto max-w-xl rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-10 text-center shadow-cc-sm">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <GlobeIcon width={26} height={26} />
          </span>
          <h2 className="mt-6">Savitribai Phule Pune University Circulars</h2>
          <p className="mt-4 text-cc-text-body">
            As a college affiliated with the Savitribai Phule Pune University, Christ College,
            Pune follows examination circulars issued directly by the University. The complete,
            regularly updated list of active circulars &mdash; covering examination schedules,
            forms, and procedural notices applicable to all affiliated colleges &mdash; is
            published on the University&rsquo;s own circulars portal.
          </p>
          <a
            href="http://collegecirculars.unipune.ac.in/Important%20Circulars/Forms/Active%20Circulars.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
          >
            View Active Circulars
            <ExpandIcon width={16} height={16} />
          </a>
        </div>
      </section>
    </>
  );
}
