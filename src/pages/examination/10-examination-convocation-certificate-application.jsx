import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GlobeIcon, ExpandIcon } from '../../components/icons';

export default function ConvocationCertificateApplication() {
  return (
    <>
      <Seo
        title="Convocation Certificate Application"
        description="Apply online for your regular convocation degree certificate through Savitribai Phule Pune University's Certificate Section portal."
      />
      <PageHeader
        title="Convocation Certificate Application"
        breadcrumbs={[{ label: 'Examination' }, { label: 'Convocation Certificate Application' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto max-w-xl rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-10 text-center shadow-cc-sm">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <GlobeIcon width={26} height={26} />
          </span>
          <h2 className="mt-6">Apply for Your Convocation Degree Certificate</h2>
          <p className="mt-4 text-cc-text-body">
            Graduates of Christ College, Pune receive their degree certificates through the
            Savitribai Phule Pune University&rsquo;s Certificate Section, which handles all regular
            convocation degree certificate applications online. Applications are accepted as per
            the University&rsquo;s notified convocation dates, with a prescribed fee (currently
            &#8377;310 for non-professional and &#8377;410 for professional degrees; late fees may
            apply after the notified window).
          </p>
          <a
            href="https://www.unipune.ac.in/university_files/certificatesection.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
          >
            Apply for Convocation Certificate
            <ExpandIcon width={16} height={16} />
          </a>
        </div>
      </section>
    </>
  );
}
