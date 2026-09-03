import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GlobeIcon, ExpandIcon } from '../../components/icons';

export default function DuplicateDegreeCertificate() {
  return (
    <>
      <Seo
        title="Duplicate Degree Certificate"
        description="Apply online for a duplicate degree certificate through Savitribai Phule Pune University's Certificate Section portal."
      />
      <PageHeader title="Duplicate Degree Certificate" breadcrumbs={[{ label: 'Examination' }, { label: 'Duplicate Degree Certificate' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto max-w-xl rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-10 text-center shadow-cc-sm">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <GlobeIcon width={26} height={26} />
          </span>
          <h2 className="mt-6">Apply for a Duplicate Degree Certificate</h2>
          <p className="mt-4 text-cc-text-body">
            If your original degree certificate is lost, damaged, or otherwise unavailable,
            graduates of Christ College, Pune can apply for a duplicate degree certificate online
            through the Savitribai Phule Pune University&rsquo;s Certificate Section portal. As per
            the University&rsquo;s notified fee structure, a duplicate degree certificate currently
            costs &#8377;600 for non-professional and &#8377;800 for professional degrees.
          </p>
          <a
            href="https://www.unipune.ac.in/university_files/certificatesection.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
          >
            Apply for Duplicate Certificate
            <ExpandIcon width={16} height={16} />
          </a>
        </div>
      </section>
    </>
  );
}
