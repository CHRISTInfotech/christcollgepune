import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ExpandIcon,
} from '../../components/icons';

export default function ApplicationQueries() {
  return (
    <>
      <Seo
        title="Application Queries"
        description="Official contact details for admission queries at Christ College, Pune including reception, college office phone numbers, office timings, and email."
      />
      <PageHeader
        title="Application Queries"
        breadcrumbs={[{ label: 'Admissions' }, { label: 'Application Queries' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Main Header / Intro Card */}
        <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 sm:p-8 shadow-cc-sm">
          <span className="inline-flex items-center gap-1.5 rounded-cc-pill bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
            Admissions Helpdesk
          </span>
          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-cc-text-heading">
            Contact Details for Admission Queries
          </h1>
          <p className="mt-2 text-sm sm:text-base text-cc-text-body">
            For any admission queries you can contact us on:
          </p>
        </div>

        {/* Contact Details Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: College Reception */}
          <div className="flex flex-col justify-between rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm transition-all duration-200 hover:border-cc-primary/30 hover:shadow-md">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <PhoneIcon width={22} height={22} />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-cc-text-muted-light">
                General Enquiries
              </span>
              <h2 className="mt-1 text-lg font-bold text-cc-text-heading">
                College Reception
              </h2>
              <p className="mt-2 text-sm text-cc-text-body">
                Speak directly with the reception desk for initial admissions guidance:
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cc-gray-100">
              <a
                href="tel:7823839456"
                className="inline-flex items-center gap-2 text-lg font-bold text-cc-primary hover:underline"
              >
                <PhoneIcon width={16} height={16} />
                7823839456
              </a>
            </div>
          </div>

          {/* Card 2: College Office */}
          <div className="flex flex-col justify-between rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm transition-all duration-200 hover:border-cc-primary/30 hover:shadow-md">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <PhoneIcon width={22} height={22} />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-cc-text-muted-light">
                Administration Desk
              </span>
              <h2 className="mt-1 text-lg font-bold text-cc-text-heading">
                College Office
              </h2>
              <p className="mt-2 text-sm text-cc-text-body">
                For admission form status, documents, and procedural queries:
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cc-gray-100 flex flex-wrap items-center gap-x-4 gap-y-1">
              <a
                href="tel:7447727243"
                className="inline-flex items-center gap-1.5 text-base sm:text-lg font-bold text-cc-primary hover:underline"
              >
                7447727243
              </a>
              <span className="text-sm font-semibold text-cc-text-muted-light">or</span>
              <a
                href="tel:7447727242"
                className="inline-flex items-center gap-1.5 text-base sm:text-lg font-bold text-cc-primary hover:underline"
              >
                7447727242
              </a>
            </div>
          </div>

          {/* Card 3: Email Support */}
          <div className="flex flex-col justify-between rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm transition-all duration-200 hover:border-cc-primary/30 hover:shadow-md sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <EnvelopeIcon width={22} height={22} />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-cc-text-muted-light">
                Electronic Correspondence
              </span>
              <h2 className="mt-1 text-lg font-bold text-cc-text-heading">
                Email Id
              </h2>
              <p className="mt-2 text-sm text-cc-text-body">
                Send written queries, document clarifications, or special requests:
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cc-gray-100">
              <a
                href="mailto:admission@christcollegepune.org"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-cc-primary hover:underline break-all"
              >
                <EnvelopeIcon width={16} height={16} className="shrink-0" />
                admission@christcollegepune.org
              </a>
            </div>
          </div>
        </div>

        {/* Office Timings & Working Hours Banner */}
        <div className="mt-8 rounded-cc-lg border border-cc-gray-200 bg-white p-6 sm:p-8 shadow-cc-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <ClockIcon width={24} height={24} />
            </div>

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cc-primary">
                Working Schedule
              </span>
              <h2 className="mt-1 text-xl font-bold text-cc-text-heading">
                College Office Timings
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">
                    Weekdays
                  </span>
                  <span className="mt-1 block text-base font-bold text-cc-text-heading">
                    Monday to Friday
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-cc-primary">
                    8:30 AM to 4:00 PM
                  </span>
                </div>

                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">
                    Weekend
                  </span>
                  <span className="mt-1 block text-base font-bold text-cc-text-heading">
                    Saturday
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-cc-primary">
                    8:30 AM to 1:30 PM
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-cc-md border-l-4 border-cc-warning bg-amber-50/70 p-3.5 text-xs sm:text-sm text-amber-900">
                <strong>Please Note:</strong> Office remains closed on Sundays, government holidays
                and any special events.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Location & Online Admission Portal Card */}
        <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-cc-lg border border-cc-gold/40 bg-gradient-to-br from-cc-primary to-cc-primary-dark p-8 text-white shadow-cc flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-cc-pill bg-cc-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-gold-light border border-cc-gold/40">
                Online Portal
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Submit Online Application
              </h3>
              <p className="mt-2 text-sm text-cc-text-light/90 leading-relaxed">
                Ready to apply? Applications for all UG and PG programmes are submitted through the
                official Linways admissions portal.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://christcollegepune.linways.com/v4/adm-applicant/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-cc-pill bg-cc-gold px-6 py-3 text-sm font-bold text-cc-primary-dark shadow hover:bg-cc-gold-light transition-colors"
              >
                Go to Linways Application Portal
                <ExpandIcon width={16} height={16} />
              </a>
            </div>
          </div>

          <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <MapPinIcon width={20} height={20} />
              </div>
              <h3 className="mt-3 text-base font-bold text-cc-text-heading">
                Campus Location
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-cc-text-body leading-relaxed">
                Christ College Pune
                <br />
                26/4A, Nagar Rd, Ramwadi, Wadgaon Sheri,
                <br />
                Pune, Maharashtra &ndash; 411014
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-cc-gray-100 text-xs text-cc-text-muted-light">
              <span>Affiliated to Savitribai Phule Pune University (SPPU)</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
