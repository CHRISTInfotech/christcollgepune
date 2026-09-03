import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import {
  CheckCircleIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '../../components/icons';

const CANCELLATION_STEPS = [
  {
    stepNumber: '01',
    title: 'Adherence to College Policy',
    description:
      'The cancellation process will be carried out in accordance with college policy.',
    badge: 'Institutional Regulation',
    tagColor: 'bg-purple-50 text-purple-800 border-purple-200',
  },
  {
    stepNumber: '02',
    title: 'In-Person Written Application',
    description:
      'Students must be present in person with a written application for cancellation.',
    badge: 'Mandatory Presence',
    tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    stepNumber: '03',
    title: 'Fee Refund Processing',
    description:
      'Refund of fees paid would take at least 7 working days to get credited to the bank account.',
    badge: '7 Working Days',
    tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
];

export default function AdmissionsCancellationPolicy() {
  return (
    <>
      <Seo
        title="Cancellation Policy"
        description="Official admission cancellation policy and refund procedures at Christ College, Pune."
      />
      <PageHeader
        title="Cancellation Policy"
        breadcrumbs={[{ label: 'Admissions' }, { label: 'Cancellation Policy' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Main Cancellation Policy Content */}
          <div className="space-y-8">
            {/* Overview Card */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 sm:p-8 shadow-cc-sm">
              <span className="inline-flex items-center gap-1.5 rounded-cc-pill bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
                Admissions Regulations
              </span>
              <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-cc-text-heading">
                Cancellation Policy
              </h1>
              <p className="mt-3 text-sm sm:text-base text-cc-text-body leading-relaxed">
                Christ College, Pune adheres to standard institutional and university guidelines
                governing admission cancellations and fee refunds. Students requesting a cancellation of
                enrolment must follow the prescribed procedure outlined below.
              </p>
            </div>

            {/* Cancellation Process Section */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 sm:p-8 shadow-cc-sm">
              <div className="border-b border-cc-gray-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cc-primary">
                  Official Procedure
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-bold text-cc-text-heading">
                  Cancellation Process
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {CANCELLATION_STEPS.map((item) => (
                  <div
                    key={item.stepNumber}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-xs transition-all duration-200 hover:border-cc-primary/30 hover:shadow-cc-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary text-sm font-bold text-white shadow-sm">
                      {item.stepNumber}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-cc-text-heading">
                          {item.title}
                        </h3>
                        <span
                          className={`rounded-cc-pill border px-2.5 py-0.5 text-[11px] font-semibold ${item.tagColor}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-cc-text-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Requirements Notice */}
            <div className="rounded-cc-lg border border-amber-200 bg-amber-50/60 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                  <CheckCircleIcon width={18} height={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-amber-950">
                    Important Documents to Bring for Cancellation
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-amber-900">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-700 shrink-0" />
                      <span>Formal written cancellation application signed by candidate and parent/guardian</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-700 shrink-0" />
                      <span>Original fee paid receipt issued by the College Admissions Office</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-700 shrink-0" />
                      <span>Bank account details (cancelled cheque or passbook copy) for direct electronic refund remittance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Admissions Office Contact */}
          <div className="space-y-6">
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
              <h3 className="text-base font-bold text-cc-text-heading">
                Cancellation &amp; Refund Helpdesk
              </h3>
              <p className="mt-1 text-xs text-cc-text-muted-light">
                For queries regarding cancellation documentation, verification, or refund status:
              </p>

              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-cc-text-body">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                    <PhoneIcon width={16} height={16} />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">
                      Telephone
                    </span>
                    <span className="font-semibold text-cc-text-heading">
                      +91 7823839456, 8432511907
                    </span>
                    <span className="block text-xs text-cc-text-muted-light">
                      Office: 7447727243, 7447727242
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-xs sm:text-sm text-cc-text-body">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                    <EnvelopeIcon width={16} height={16} />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">
                      Email
                    </span>
                    <a
                      href="mailto:admission@christcollegepune.org"
                      className="font-semibold text-cc-primary hover:underline"
                    >
                      admission@christcollegepune.org
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-xs sm:text-sm text-cc-text-body">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                    <ClockIcon width={16} height={16} />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">
                      Office Hours
                    </span>
                    <span className="font-medium text-cc-text-heading">
                      Mon–Fri: 8:30 AM – 4:00 PM
                    </span>
                    <span className="block text-xs text-cc-text-muted-light">
                      Sat: 8:30 AM – 1:30 PM (Closed Sundays &amp; Public Holidays)
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-xs sm:text-sm text-cc-text-body">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                    <MapPinIcon width={16} height={16} />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">
                      Office Location
                    </span>
                    <span className="text-cc-text-heading">
                      Admissions Office, Christ College Pune, 26/4A, Nagar Rd, Ramwadi, Wadgaon Sheri,
                      Pune &ndash; 411014
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
