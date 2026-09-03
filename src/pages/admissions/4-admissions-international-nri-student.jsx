import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import {
  GlobeIcon,
  ExpandIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
  CheckCircleIcon,
} from '../../components/icons';

const ADMISSION_STEPS = [
  {
    stepNumber: '01',
    title: 'Visit Pune University International Centre',
    description: (
      <>
        Visit the Pune University website{' '}
        <a
          href="http://www.unipune.ac.in/dept/International%20Centre/default.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-cc-primary underline hover:text-cc-primary-dark"
        >
          http://www.unipune.ac.in/dept/International%20Centre/default.htm
        </a>{' '}
        and navigate to the &ldquo;International Centre&rdquo; section.
      </>
    ),
    badge: 'Step 1: SPPU Portal',
  },
  {
    stepNumber: '02',
    title: 'Choose the Programme',
    description:
      'Choose the program you want to apply for, whether it is Undergraduate or Postgraduate.',
    badge: 'Step 2: Selection',
  },
  {
    stepNumber: '03',
    title: 'Register for International Student Admission',
    description:
      'Register for the International Student Admission by filling in the required information on the university portal.',
    badge: 'Step 3: Registration',
  },
  {
    stepNumber: '04',
    title: 'Await Pune University Status',
    description:
      'Wait for a response from Pune University regarding your application status and verification.',
    badge: 'Step 4: University Response',
  },
  {
    stepNumber: '05',
    title: 'Apply Directly with Christ College, Pune',
    description: (
      <>
        Additionally, also apply directly with us by visiting our website{' '}
        <a
          href="https://christcollegepune.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-cc-primary underline hover:text-cc-primary-dark"
        >
          https://christcollegepune.org/
        </a>{' '}
        and fill out the online application form with all the necessary details and submit it along
        with the required documents.
      </>
    ),
    badge: 'Step 5: College Application',
  },
  {
    stepNumber: '06',
    title: 'Attend Required Interviews or Exams',
    description:
      'Attend any required interviews or exams as part of the admission process.',
    badge: 'Step 6: Evaluation',
  },
];

export default function InternationalNriStudent() {
  return (
    <>
      <Seo
        title="International / NRI Student"
        description="Official guidelines and admission steps for International, NRI, and PIO candidates applying to Christ College, Pune in coordination with Savitribai Phule Pune University."
      />
      <PageHeader
        title="International / NRI Student"
        breadcrumbs={[{ label: 'Admissions' }, { label: 'International / NRI Student' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Intro Hero Card */}
        <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 sm:p-8 shadow-cc-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-cc-pill bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
                <GlobeIcon width={14} height={14} />
                Global Admissions
              </span>
              <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-cc-text-heading">
                International / NRI Student Admission
              </h1>
              <p className="mt-3 text-sm sm:text-base text-cc-text-body leading-relaxed">
                Christ College, Pune welcomes candidates from across the globe under the
                International, Non-Resident Indian (NRI), and Person of Indian Origin (PIO) categories.
                All candidates must complete university-level registration with Savitribai Phule Pune
                University (SPPU) as well as direct application with Christ College, Pune.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                href="http://www.unipune.ac.in/dept/International%20Centre/default.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2.5 text-xs font-semibold text-white hover:bg-cc-primary-dark transition-colors shadow-sm"
              >
                SPPU International Centre
                <ExpandIcon width={14} height={14} />
              </a>
              <a
                href="https://christcollegepune.linways.com/v4/adm-applicant/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-cc-pill border border-cc-primary bg-white px-5 py-2.5 text-xs font-semibold text-cc-primary hover:bg-cc-bg-surface transition-colors"
              >
                College Application Portal
                <ExpandIcon width={14} height={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Step-by-Step Procedure */}
        <div className="mt-12">
          <div className="border-b border-cc-gray-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cc-primary">
              Application Workflow
            </span>
            <h2 className="mt-1 text-2xl font-bold text-cc-text-heading">
              Steps for Admission Process
            </h2>
            <p className="mt-1 text-sm text-cc-text-body">
              Follow these sequential instructions to complete both the university and college formalities.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {ADMISSION_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm transition-all duration-200 hover:border-cc-primary/30 hover:shadow-md"
              >
                <div className="flex items-center gap-4 shrink-0">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cc-primary/10 text-base font-bold text-cc-primary">
                    {step.stepNumber}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-cc-text-heading">
                      {step.title}
                    </h3>
                    <span className="rounded-cc-pill bg-cc-bg-surface border border-cc-gray-200 px-2.5 py-0.5 text-[11px] font-medium text-cc-text-muted-light">
                      {step.badge}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-cc-text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Guidelines & Checklist */}
        <div className="mt-12 rounded-cc-lg border border-cc-gold/40 bg-amber-50/50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cc-gold/20 text-cc-primary">
              <CheckCircleIcon width={22} height={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-cc-text-heading">
                Important Information for International &amp; NRI Applicants
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-cc-text-body leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" />
                  <span>
                    <strong>Dual Registration Mandatory:</strong> Candidates must register through the
                    Savitribai Phule Pune University International Centre portal as well as the Christ
                    College Pune admissions system.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" />
                  <span>
                    <strong>Document Verification:</strong> Keep valid passport, student visa / PIO card,
                    and certified English translations of high school / degree certificates ready for
                    submission.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" />
                  <span>
                    <strong>Provisional Admission:</strong> Final admission is strictly contingent upon
                    eligibility confirmation issued by Savitribai Phule Pune University.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action & Admissions Helpdesk */}
        <div className="mt-12 grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <div className="rounded-cc-lg border border-cc-gold/40 bg-gradient-to-br from-cc-primary to-cc-primary-dark p-8 text-white shadow-cc flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-cc-pill bg-cc-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-gold-light border border-cc-gold/40">
                Online Application
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Begin Your Application
              </h3>
              <p className="mt-2 text-sm text-cc-text-light/90 leading-relaxed">
                First register on the Pune University International Centre portal, and then proceed to
                fill out your direct application with Christ College, Pune.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="http://www.unipune.ac.in/dept/International%20Centre/default.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-cc-pill bg-white px-5 py-3 text-xs font-bold text-cc-primary-dark shadow hover:bg-cc-gray-100 transition-colors"
              >
                Visit Pune University Portal
                <ExpandIcon width={14} height={14} />
              </a>
              <a
                href="https://christcollegepune.linways.com/v4/adm-applicant/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-cc-pill bg-cc-gold px-5 py-3 text-xs font-bold text-cc-primary-dark shadow hover:bg-cc-gold-light transition-colors"
              >
                Apply Directly at Christ College
                <ExpandIcon width={14} height={14} />
              </a>
            </div>
          </div>

          <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
            <h3 className="text-base font-bold text-cc-text-heading">Admissions Contact</h3>
            <p className="mt-1 text-xs text-cc-text-muted-light">
              Admissions Office assistance for International and NRI applicants:
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
                    Mon–Fri: 8:30 AM – 4:00 PM | Sat: 8:30 AM – 1:30 PM (IST)
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-cc-text-body">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <MapPinIcon width={16} height={16} />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">
                    Address
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
