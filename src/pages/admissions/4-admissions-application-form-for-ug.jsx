import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GlobeIcon, ExpandIcon } from '../../components/icons';

export default function ApplicationFormForUg() {
  return (
    <>
      <Seo
        title="Application Form for UG"
        description="Apply online for undergraduate programmes at Christ College, Pune through the college's official admissions portal."
      />
      <PageHeader title="Application Form for UG" breadcrumbs={[{ label: 'Admissions' }, { label: 'Application Form for UG' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto max-w-xl rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-10 text-center shadow-cc-sm">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <GlobeIcon width={26} height={26} />
          </span>
          <h2 className="mt-6">Undergraduate Application Portal</h2>
          <p className="mt-4 text-cc-text-body">
            Applications for all undergraduate programmes at Christ College, Pune &mdash; including
            BBA, BBA (Computer Applications), BBA (International Business), BSc (Computer Science),
            BA, and B.Com &mdash; are submitted online through the college&rsquo;s official
            admissions portal. Register with your name, email, and mobile number to receive your
            login credentials, then complete the application form and upload the required
            documents.
          </p>
          <a
            href="https://christcollegepune.linways.com/v4/adm-applicant/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
          >
            Apply for UG Admission
            <ExpandIcon width={16} height={16} />
          </a>
          <p className="mt-6 text-sm text-cc-text-muted-light">
            For queries, contact the Admissions Office at admission@christcollegepune.org or
            7823839456.
          </p>
        </div>
      </section>
    </>
  );
}
