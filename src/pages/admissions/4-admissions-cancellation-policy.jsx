import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { EnvelopeIcon, PhoneIcon } from '../../components/icons';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Adherence to Institutional Policy',
    description: 'The cancellation process will be carried out in accordance with college policy.',
  },
  {
    step: '02',
    title: 'In-Person Written Application',
    description:
      'Students must be present in person with a written application for cancellation at the college admissions office.',
  },
  {
    step: '03',
    title: 'Fee Refund Processing',
    description:
      'Refund of fees paid would take at least 7 working days to get credited to the verified student bank account.',
  },
];

export default function AdmissionsCancellationPolicy() {
  return (
    <>
      <Seo
        title="Cancellation Policy"
        description="Christ College, Pune admission cancellation policy: cancellation process, in-person written application requirements, and the 7-day fee refund timeline."
      />
      <PageHeader
        title="Cancellation Policy"
        breadcrumbs={[{ label: 'Admissions' }, { label: 'Cancellation Policy' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Main Policy & Process Content */}
          <div className="space-y-8 lg:col-span-8">
            {/* Overview Card */}
            <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
              <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
                Admissions Policy & Guidelines
              </span>
              <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">
                Admission Cancellation Policy
              </h2>
              <div className="mt-4 space-y-3 text-cc-text-body leading-relaxed">
                <p>
                  Christ College, Pune maintains a clear and structured cancellation policy for students seeking to
                  cancel their enrolled programme or admission. All requests are processed systematically to ensure
                  transparency and prompt refund settlement.
                </p>
              </div>
            </div>

            {/* Cancellation Process Highlighted Section */}
            <div className="rounded-2xl border border-cc-gray-200 bg-gradient-to-br from-cc-primary/5 via-cc-bg-surface to-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cc-primary text-white shadow-sm font-bold text-lg">
                  📋
                </span>
                <div>
                  <h3 className="text-xl font-bold text-cc-text-heading">Cancellation Process</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-cc-primary">
                    Step-by-Step Procedure
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {PROCESS_STEPS.map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 rounded-xl border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-xs transition-all duration-200 hover:border-cc-primary/40 hover:shadow-cc-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cc-primary font-bold text-white text-sm">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-cc-text-heading">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-cc-text-body">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes Box */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-5 text-sm text-amber-900">
              <div className="flex items-start gap-3">
                <span className="text-lg">ℹ️</span>
                <div>
                  <h4 className="font-bold text-amber-950">Important Notice for Applicants</h4>
                  <p className="mt-1 leading-relaxed text-amber-800">
                    Cancellation requests must be submitted directly at the college administrative office. Written
                    applications should include the original fee receipt, admission acknowledgment, and bank account
                    details for remittance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Cancellation Enquiries & Assistance */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm">
              <h3 className="text-lg font-bold text-cc-text-heading">Cancellation Enquiries</h3>
              <p className="mt-1 text-xs text-cc-text-muted-light">
                For questions regarding cancellation status, documentation, or refunds:
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cc-primary/10 text-cc-primary">
                    <EnvelopeIcon width={16} height={16} />
                  </span>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Email Support
                    </span>
                    <a
                      href="mailto:admission@christcollegepune.org"
                      className="mt-0.5 block text-xs font-semibold text-cc-primary hover:underline"
                    >
                      admission@christcollegepune.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cc-primary/10 text-cc-primary">
                    <PhoneIcon width={16} height={16} />
                  </span>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Helpline Numbers
                    </span>
                    <div className="mt-0.5 flex flex-col gap-0.5 text-xs font-semibold text-cc-text-heading">
                      <a href="tel:+917823839456" className="hover:text-cc-primary">
                        +91 7823839456
                      </a>
                      <a href="tel:+918432511907" className="hover:text-cc-primary">
                        +91 8432511907
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-cc-gray-100 pt-4 text-xs text-cc-text-muted-light">
                <p>
                  <strong className="text-cc-text-heading">Office Hours:</strong>
                  <br />
                  Monday &ndash; Friday: 9:00 AM &ndash; 4:30 PM
                  <br />
                  Saturday: 9:00 AM &ndash; 1:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
