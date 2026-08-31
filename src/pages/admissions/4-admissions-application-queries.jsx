import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ExpandIcon } from '../../components/icons';

export default function ApplicationQueries() {
  return (
    <>
      <Seo
        title="Application Queries"
        description="Contact details for admissions queries at Christ College, Pune, including office hours, phone numbers, email, and the online application portal."
      />
      <PageHeader title="Application Queries" breadcrumbs={[{ label: 'Admissions' }, { label: 'Application Queries' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2>Have a Question About Your Application?</h2>
            <p className="mt-4 text-cc-text-body">
              For any queries regarding undergraduate or postgraduate admissions &mdash; eligibility,
              application status, fee payment, or document requirements &mdash; the Admissions
              Office at Christ College, Pune can be reached during office hours below. Applicants
              may also reach out via the college&rsquo;s social media channels (Facebook, YouTube,
              LinkedIn, Instagram) for general queries.
            </p>

            <div className="mt-6 rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-4 text-sm text-cc-text-body">
              <span className="font-semibold text-cc-text-heading">Office Hours: </span>
              Monday&ndash;Friday 8:30am&ndash;4:00pm, Saturday 8:30am&ndash;1:30pm. Closed Sundays,
              government holidays, and special events.
            </div>

            <a
              href="https://christcollegepune.linways.com/v4/adm-applicant/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
            >
              Go to Application Portal
              <ExpandIcon width={16} height={16} />
            </a>
          </div>

          <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <h3 className="text-base">Admissions Contact</h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <PhoneIcon width={18} height={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-cc-text-muted-light">College Reception</span>
                  <span className="block text-sm font-medium text-cc-text-heading">7823839456</span>
                  <span className="mt-1 block text-xs uppercase tracking-wide text-cc-text-muted-light">College Office</span>
                  <span className="block text-sm font-medium text-cc-text-heading">7447727243, 7447727242</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <EnvelopeIcon width={18} height={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-cc-text-muted-light">Email</span>
                  <span className="block text-sm font-medium text-cc-text-heading">admission@christcollegepune.org</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <MapPinIcon width={18} height={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-cc-text-muted-light">Address</span>
                  <span className="block text-sm font-medium text-cc-text-heading">26/4A, Nagar Rd, Ramwadi, Wadgaon Sheri, Pune, Maharashtra 411014</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
