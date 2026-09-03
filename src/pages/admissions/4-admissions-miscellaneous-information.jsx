import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import {
  CheckCircleIcon,
  ExpandIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
} from '../../components/icons';

const MISC_POINTS = [
  {
    number: '01',
    title: 'Basic Eligibility',
    text: 'Basic eligibility for the programme is a pass at the +2 level from any recognized Board in India.',
    category: 'Eligibility',
    tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  {
    number: '02',
    title: 'No Capitation or Donation',
    text: 'The College does not collect any type of Capitation / Donation other than the fee mentioned on the website.',
    category: 'Fair Admissions',
    tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  {
    number: '03',
    title: 'Accuracy of Application',
    text: 'If the Application is incomplete or incorrect, the College Management has the right to reject it.',
    category: 'Verification',
    tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    number: '04',
    title: 'Original Mark Cards Notice',
    text: 'Kindly do not send any original mark cards through post or courier.',
    category: 'Document Safety',
    tagColor: 'bg-red-50 text-red-800 border-red-200',
  },
  {
    number: '05',
    title: 'Provisional Admission Status',
    text: 'All selected candidates must note that admission is provisional and subject to College rules.',
    category: 'College Regulations',
    tagColor: 'bg-purple-50 text-purple-800 border-purple-200',
  },
  {
    number: '06',
    title: 'Compliance with Guidelines',
    text: 'Ignorance of the Terms, Conditions, and Guidelines will not be considered as an excuse for non-fulfilment of any stipulated process.',
    category: 'Policy Compliance',
    tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    number: '07',
    title: 'Periodic Nominal Fee Revision',
    text: 'It is to be noted that though the fee is fixed for 1 to 3 years, there will be a periodic nominal increase to meet the rise in costs.',
    category: 'Fee Structure',
    tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  {
    number: '08',
    title: 'Timely Payment of Fees',
    text: 'Fees should be paid within the stipulated date for the first year and followed for other years.',
    category: 'Payment Deadline',
    tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  {
    number: '09',
    title: 'Personal Laptop Requirement',
    text: 'All those admitted to the programme will have to purchase a laptop at their own cost if required for the programme.',
    category: 'Academic Equipment',
    tagColor: 'bg-gray-50 text-gray-800 border-gray-200',
  },
  {
    number: '10',
    title: 'Bank Loan Recommendation Letter',
    text: 'Admitted students who wish to avail Bank Loan will be provided a recommendation letter on request by presenting the original fee paid receipt to the Office of Admissions.',
    category: 'Financial Assistance',
    tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  {
    number: '11',
    title: 'Authority of Admission Committee',
    text: 'The decision of the Admission Committee is final and binding.',
    category: 'Final Authority',
    tagColor: 'bg-cc-primary/10 text-cc-primary border-cc-primary/30',
  },
];

export default function MiscellaneousInformation() {
  return (
    <>
      <Seo
        title="Miscellaneous Information"
        description="Key terms, conditions, eligibility requirements, and institutional guidelines for admissions to Christ College, Pune."
      />
      <PageHeader
        title="Miscellaneous Information"
        breadcrumbs={[{ label: 'Admissions' }, { label: 'Miscellaneous Information' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Intro Header Card */}
        <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-cc-primary">
            Admissions Guidelines
          </span>
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-cc-text-heading">
            Miscellaneous Information &amp; Important Instructions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-cc-text-body max-w-3xl leading-relaxed">
            Prospective applicants and parents are advised to read and understand the following
            essential terms, fee policies, eligibility standards, and regulatory guidelines prior to
            and following admission to Christ College, Pune.
          </p>
        </div>

        {/* 11 Policy Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MISC_POINTS.map((point) => (
            <div
              key={point.number}
              className="flex flex-col justify-between rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm transition-all duration-200 hover:border-cc-primary/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-cc-gray-200/80 pb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    {point.number}
                  </span>
                  <span
                    className={`rounded-cc-pill border px-2.5 py-0.5 text-[11px] font-semibold ${point.tagColor}`}
                  >
                    {point.category}
                  </span>
                </div>

                <h2 className="mt-4 text-base font-bold text-cc-text-heading">
                  {point.title}
                </h2>

                <p className="mt-2 text-sm text-cc-text-body leading-relaxed">
                  {point.text}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cc-gray-100 flex items-center gap-1.5 text-xs text-cc-text-muted-light">
                <CheckCircleIcon width={14} height={14} className="text-cc-primary shrink-0" />
                <span>Official College Regulation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights / Summary Strip */}
        <div className="mt-10 rounded-cc-lg border border-cc-gold/40 bg-amber-50/50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cc-gold/20 text-cc-primary">
              <CheckCircleIcon width={24} height={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-cc-text-heading">
                Important Reminder for Applicants &amp; Parents
              </h3>
              <p className="mt-1 text-sm text-cc-text-body leading-relaxed">
                Ignorance of the Terms, Conditions, and Guidelines will not be considered as an
                excuse for non-fulfilment of any stipulated process. Ensure that fee payments, document
                verifications, and portal submissions are completed strictly within designated timelines.
              </p>
            </div>
          </div>
        </div>

        {/* Application CTA and Helpdesk Banner */}
        <div className="mt-12 grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <div className="rounded-cc-lg border border-cc-gold/40 bg-gradient-to-br from-cc-primary to-cc-primary-dark p-8 text-white shadow-cc flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-cc-pill bg-cc-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-gold-light border border-cc-gold/40">
                Admissions Portal
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Submit Your Application
              </h3>
              <p className="mt-2 text-sm text-cc-text-light/90 leading-relaxed">
                Register on the official Linways admissions portal to choose your undergraduate or
                postgraduate programme and complete your online application form.
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

          <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
            <h3 className="text-base font-bold text-cc-text-heading">Admissions Helpdesk</h3>
            <p className="mt-1 text-xs text-cc-text-muted-light">
              For any clarification regarding fees, bank loan recommendation letters, or college rules:
            </p>

            <ul className="mt-4 space-y-3">
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
                    Mon–Fri: 8:30 AM – 4:00 PM | Sat: 8:30 AM – 1:30 PM
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-cc-text-body">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <MapPinIcon width={16} height={16} />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">
                    Campus Address
                  </span>
                  <span className="text-cc-text-heading">
                    26/4A, Nagar Rd, Ramwadi, Wadgaon Sheri, Pune, Maharashtra 411014
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
