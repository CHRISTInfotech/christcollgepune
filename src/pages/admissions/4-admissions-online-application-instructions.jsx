import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import {
  CheckCircleIcon,
  GlobeIcon,
  ExpandIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  DownloadIcon,
} from '../../components/icons';
import admissionBrochureImg from '../../assets/admissions/admission-brochure.jpg';

export default function OnlineApplicationInstructions() {
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  return (
    <>
      <Seo
        title="Instructions for Online Application Form"
        description="Official step-by-step instructions and guidelines for submitting the online application form for undergraduate and postgraduate admissions at Christ College, Pune."
      />
      <PageHeader
        title="Instructions for Online Application Form"
        breadcrumbs={[{ label: 'Admissions' }, { label: 'Instructions for Online Application Form' }]}
      />

      {/* Main Container */}
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Admission Open Announcement Banner */}
        <div className="relative overflow-hidden rounded-cc-lg border border-cc-gold/30 bg-gradient-to-r from-cc-primary-dark via-cc-primary to-cc-primary-dark p-6 sm:p-8 text-cc-text-light shadow-cc">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-cc-pill bg-cc-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-gold-light border border-cc-gold/40">
                <span className="h-2 w-2 rounded-full bg-cc-gold animate-pulse" />
                Admissions Open 2026–2027
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                ADMISSIONS FOR THE ACADEMIC YEAR 2026–2027 ARE OPEN
              </h1>
              <p className="text-sm sm:text-base text-cc-text-light/90 max-w-2xl">
                Please read all instructions and eligibility criteria carefully before filling out your online application form.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://christcollegepune.linways.com/v4/adm-applicant/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-cc-pill bg-cc-gold px-6 py-3 text-sm font-bold text-cc-primary-dark shadow hover:bg-cc-gold-light transition-all duration-200"
              >
                Apply Online Now
                <ExpandIcon width={16} height={16} />
              </a>
              <button
                type="button"
                onClick={() => setShowBrochureModal(true)}
                className="inline-flex items-center justify-center gap-2 rounded-cc-pill border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all duration-200"
              >
                View Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Essential Core Prerequisites */}
        <div className="mt-10 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-cc-text-heading">
            Instructions for Submission of Online Application Form
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cc-text-body">
            All prospective applicants must review and adhere to the following mandatory guidelines:
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-cc-md border border-cc-gray-200 bg-white p-5 shadow-cc-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <GlobeIcon width={20} height={20} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-cc-text-heading">Online Mode Only</h3>
              <p className="mt-2 text-sm text-cc-text-body leading-relaxed">
                Candidates must apply online only through the official college portal at{' '}
                <a
                  href="https://christcollegepune.org"
                  className="font-medium text-cc-primary hover:underline"
                >
                  christcollegepune.org
                </a>
                . No offline or other means of application will be accepted.
              </p>
            </div>

            <div className="rounded-cc-md border border-cc-gray-200 bg-white p-5 shadow-cc-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <CheckCircleIcon width={20} height={20} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-cc-text-heading">Check Eligibility</h3>
              <p className="mt-2 text-sm text-cc-text-body leading-relaxed">
                Candidates must thoroughly review the programme-specific eligibility criteria and prerequisites before submitting an application.
              </p>
            </div>

            <div className="rounded-cc-md border border-cc-gray-200 bg-white p-5 shadow-cc-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <CalendarIcon width={20} height={20} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-cc-text-heading">One-Time Registration</h3>
              <p className="mt-2 text-sm text-cc-text-body leading-relaxed">
                All applicants must create a one-time registration ID to apply for the programme of their choice through the Linways Admissions Portal.
              </p>
            </div>
          </div>
        </div>

        {/* Step by Step Application Guide */}
        <div className="mt-14">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-cc-primary">Step-by-Step Procedure</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-cc-text-heading">
              Application Process Workflow
            </h2>
            <p className="mt-2 text-sm text-cc-text-body">
              Follow these four structured steps to successfully complete and submit your application.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {/* Step 1 */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 sm:p-8 shadow-cc-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cc-primary text-white text-sm font-bold">
                  1
                </span>
                <h3 className="text-xl font-bold text-cc-text-heading">
                  Procedure to Register as a New Applicant
                </h3>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">
                    1. One-Time Registration
                  </span>
                  <p className="text-sm text-cc-text-body">
                    This registration allows you to apply for only <strong>one programme</strong> using the Registration ID.
                  </p>
                </div>

                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">
                    2. Fill in Your Details
                  </span>
                  <p className="text-sm text-cc-text-body">
                    Enter your name exactly as per your <strong>Class 12th admit card / marksheet</strong>. Provide a valid email ID, active mobile number, and WhatsApp contact number for all official communications.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-cc-md border-l-4 border-cc-warning bg-amber-50/70 p-4 text-sm text-cc-text-body">
                <p>
                  <strong>Important:</strong> Your username and password will be sent to you at your registered email ID. Ensure all data is accurate before submission, as you <strong>cannot edit personal information later</strong>. Click on the <strong>&lsquo;Register&rsquo;</strong> button to complete the registration.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 sm:p-8 shadow-cc-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cc-primary text-white text-sm font-bold">
                  2
                </span>
                <h3 className="text-xl font-bold text-cc-text-heading">
                  Procedure to Login
                </h3>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">
                    1. Login with Your Credentials
                  </span>
                  <p className="text-sm text-cc-text-body">
                    Log in using the official link{' '}
                    <a
                      href="https://christcollegepune.linways.com/v4/adm-applicant/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-cc-primary hover:underline break-all"
                    >
                      https://christcollegepune.linways.com/v4/adm-applicant/login
                    </a>{' '}
                    with your registered email ID and password. Enter them correctly in the respective fields.
                  </p>
                </div>

                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">
                    2. Forgot Password Recovery
                  </span>
                  <p className="text-sm text-cc-text-body">
                    If you forgot your password, click on the <strong>&lsquo;Forgot Password&rsquo;</strong> button on the portal and follow the password reset steps sent to your email.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 sm:p-8 shadow-cc-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cc-primary text-white text-sm font-bold">
                  3
                </span>
                <h3 className="text-xl font-bold text-cc-text-heading">
                  Steps to Fill Out Personal Information in the Application Form
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    1
                  </span>
                  <div>
                    <span className="font-semibold text-cc-text-heading">Select the Programme:</span>{' '}
                    <span className="text-sm text-cc-text-body">
                      Choose the programme to which you want to apply. All candidates must meet the programme-specific eligibility criteria (detailed on our website).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    2
                  </span>
                  <div>
                    <span className="font-semibold text-cc-text-heading">Photograph Specifications:</span>{' '}
                    <span className="text-sm text-cc-text-body">
                      Upload a formal passport-style photo (<strong>3.5 cm &times; 4.5 cm, formal dress with plain background, not more than 100 KB</strong>).
                    </span>
                    <div className="mt-2 rounded-cc-md border-l-4 border-cc-error bg-red-50/70 p-3 text-xs text-red-900">
                      <strong>Warning:</strong> Photos with non-plain backgrounds or taken with casual mobile devices / selfies will result in the immediate rejection of the application.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    3
                  </span>
                  <div>
                    <span className="font-semibold text-cc-text-heading">Personal Information:</span>{' '}
                    <span className="text-sm text-cc-text-body">
                      Fill in your personal details, sports achievements (if any), and extracurricular accomplishments (if any).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    4
                  </span>
                  <div>
                    <span className="font-semibold text-cc-text-heading">Parent / Guardian Information:</span>{' '}
                    <span className="text-sm text-cc-text-body">
                      Provide current and permanent residential addresses along with full parent and guardian contact information.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    5
                  </span>
                  <div>
                    <span className="font-semibold text-cc-text-heading">Educational Details:</span>{' '}
                    <span className="text-sm text-cc-text-body">
                      Fill in your academic history and upload clear scanned copies of your Class 10 and Class 11 final reports, or your Class 12 admit card / marksheet.
                    </span>
                    <div className="mt-2 rounded-cc-md border-l-4 border-cc-error bg-red-50/70 p-3 text-xs text-red-900">
                      <strong>Rejection Notice:</strong> Applications with missing mark cards or unclear scanned copies will be rejected and termed as <strong>&ldquo;Not Eligible&rdquo;</strong>.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    6
                  </span>
                  <div>
                    <span className="font-semibold text-cc-text-heading">Review Your Application:</span>{' '}
                    <span className="text-sm text-cc-text-body">
                      Review all entered information thoroughly. Once submitted, details cannot be corrected, so verify every section carefully before final submission.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    7
                  </span>
                  <div>
                    <span className="font-semibold text-cc-text-heading">Selection Process Date:</span>{' '}
                    <span className="text-sm text-cc-text-body">
                      Choose the appropriate date for the selection process based on the programme you are applying for. <strong>No requests for date changes will be entertained.</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    8
                  </span>
                  <div>
                    <span className="font-semibold text-cc-text-heading">Mandatory Fields:</span>{' '}
                    <span className="text-sm text-cc-text-body">
                      The application cannot be submitted without completing all mandatory fields marked with an asterisk (*).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                    9
                  </span>
                  <div>
                    <span className="font-semibold text-cc-text-heading">Save Progress:</span>{' '}
                    <span className="text-sm text-cc-text-body">
                      Applicants must save the information as they proceed from page to page to avoid loss of data.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 sm:p-8 shadow-cc-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cc-primary text-white text-sm font-bold">
                  4
                </span>
                <h3 className="text-xl font-bold text-cc-text-heading">
                  Application Fee Payment
                </h3>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">1. Payment Methods</span>
                  <p className="text-sm text-cc-text-body">
                    You can pay using Net Banking, Credit Card, Debit Card, or any UPI payment gateway.
                  </p>
                </div>

                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">2. Non-Refundable</span>
                  <p className="text-sm text-cc-text-body">
                    Once the application number is generated, the application registration fee <strong>cannot be refunded</strong>.
                  </p>
                </div>

                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">3. Secure Payment</span>
                  <p className="text-sm text-cc-text-body">
                    Ensure you are on the secure encrypted payment gateway before entering sensitive financial details.
                  </p>
                </div>

                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">4. Application Number</span>
                  <p className="text-sm text-cc-text-body">
                    An application number is auto-generated immediately after successful payment of the application fee.
                  </p>
                </div>

                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">5. Payment Failure Policy</span>
                  <p className="text-sm text-cc-text-body">
                    In case of technical payment failure, no application number is generated. Any deducted amount will be auto-refunded within <strong>15 business days</strong>.
                  </p>
                </div>

                <div className="rounded-cc-md bg-cc-bg-surface p-4 border border-cc-gray-200">
                  <span className="font-semibold text-cc-text-heading block mb-1">6. Printing the Application</span>
                  <p className="text-sm text-cc-text-body">
                    A copy of the filled application form can be printed anytime from your portal login until the selection process is complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applicants Must Note (9 Key Sections) */}
        <div className="mt-16">
          <div className="border-b border-cc-gray-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cc-primary">Mandatory Guidelines</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-cc-text-heading">
              Applicants Must Note
            </h2>
            <p className="mt-1 text-sm text-cc-text-body">
              Crucial information regarding selection, document verification, deadlines, and college policies.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* 1. Selection Process */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
              <div className="flex items-center gap-3 border-b border-cc-gray-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-sm font-bold text-cc-primary">
                  1
                </span>
                <h3 className="text-base font-bold text-cc-text-heading">Selection Process</h3>
              </div>
              <p className="mt-3 text-sm text-cc-text-body">
                The comprehensive selection procedure consists of three stages:
              </p>
              <ul className="mt-3 space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-cc-text-body">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" />
                  <span><strong>Counselling Session:</strong> Overview of the programme structure and expectations.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-cc-text-body">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" />
                  <span><strong>Panel Interview:</strong> Evaluating subject knowledge, general awareness, communication skills, and aptitude.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-cc-text-body">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" />
                  <span><strong>Interview with the Principal:</strong> The candidate <em>must be accompanied by their parents or guardian</em>.</span>
                </li>
              </ul>
            </div>

            {/* 2. Documents to be brought for Verification */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
              <div className="flex items-center gap-3 border-b border-cc-gray-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-sm font-bold text-cc-primary">
                  2
                </span>
                <h3 className="text-base font-bold text-cc-text-heading">Documents for Verification</h3>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-cc-text-body">
                Bring <strong>original documents</strong> and a full set of <strong>black-and-white photocopies (Xerox)</strong>:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-cc-text-body">
                <li className="flex items-center gap-2 rounded bg-cc-bg-surface p-2 border border-cc-gray-200">
                  <CheckCircleIcon width={14} height={14} className="text-cc-primary shrink-0" />
                  <span>Printed Online Admission Form</span>
                </li>
                <li className="flex items-center gap-2 rounded bg-cc-bg-surface p-2 border border-cc-gray-200">
                  <CheckCircleIcon width={14} height={14} className="text-cc-primary shrink-0" />
                  <span>10th Mark Sheet (Compulsory)</span>
                </li>
                <li className="flex items-center gap-2 rounded bg-cc-bg-surface p-2 border border-cc-gray-200">
                  <CheckCircleIcon width={14} height={14} className="text-cc-primary shrink-0" />
                  <span>11th / 12th Marksheet (If available)</span>
                </li>
                <li className="flex items-center gap-2 rounded bg-cc-bg-surface p-2 border border-cc-gray-200">
                  <CheckCircleIcon width={14} height={14} className="text-cc-primary shrink-0" />
                  <span>Aadhaar Card (Compulsory)</span>
                </li>
                <li className="flex items-center gap-2 rounded bg-cc-bg-surface p-2 border border-cc-gray-200">
                  <CheckCircleIcon width={14} height={14} className="text-cc-primary shrink-0" />
                  <span>2 Passport Photos (Plain BG)</span>
                </li>
                <li className="flex items-center gap-2 rounded bg-cc-bg-surface p-2 border border-cc-gray-200">
                  <CheckCircleIcon width={14} height={14} className="text-cc-primary shrink-0" />
                  <span>Caste Certificate (If applicable)</span>
                </li>
                <li className="flex items-center gap-2 rounded bg-cc-bg-surface p-2 border border-cc-gray-200">
                  <CheckCircleIcon width={14} height={14} className="text-cc-primary shrink-0" />
                  <span>Transfer Certificate (TC)</span>
                </li>
                <li className="flex items-center gap-2 rounded bg-cc-bg-surface p-2 border border-cc-gray-200">
                  <CheckCircleIcon width={14} height={14} className="text-cc-primary shrink-0" />
                  <span>Migration Certificate (If available)</span>
                </li>
              </ul>
            </div>

            {/* 3. Admission Process */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
              <div className="flex items-center gap-3 border-b border-cc-gray-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-sm font-bold text-cc-primary">
                  3
                </span>
                <h3 className="text-base font-bold text-cc-text-heading">Admission Process &amp; International Candidates</h3>
              </div>
              <ul className="mt-3 space-y-2.5 text-sm text-cc-text-body">
                <li>
                  <strong>Provisional Admission:</strong> All admissions are strictly provisional and subject to Christ College and Savitribai Phule Pune University (SPPU) regulations.
                </li>
                <li>
                  <strong>Fee Payment Window:</strong> Selected candidates must complete fee payment within <strong>7 working days</strong> after the selection process using the provided link.
                </li>
                <li>
                  <strong>International / NRI / PIO Students:</strong> As per SPPU guidelines, Foreign National, NRI, and PIO candidates must apply through the university portal at{' '}
                  <a
                    href="http://www.unipune.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cc-primary font-medium hover:underline"
                  >
                    unipune.ac.in
                  </a>{' '}
                  under the International Centre and follow the mandated procedure.
                </li>
              </ul>
            </div>

            {/* 4. Document Submission */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
              <div className="flex items-center gap-3 border-b border-cc-gray-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-sm font-bold text-cc-primary">
                  4
                </span>
                <h3 className="text-base font-bold text-cc-text-heading">Document Submission Deadline</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-cc-text-body">
                <li>All mandatory documents must be submitted for physical verification.</li>
                <li>
                  All pending original documents must be submitted on or before <strong>July 31st</strong> or as officially announced by the Office of Admissions for the academic year 2026–2027.
                </li>
                <li className="text-red-700 font-medium">
                  Failure to submit pending documents within the stipulated time will result in the immediate termination of admission.
                </li>
              </ul>
            </div>

            {/* 5. Commencement of Academic Year */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
              <div className="flex items-center gap-3 border-b border-cc-gray-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-sm font-bold text-cc-primary">
                  5
                </span>
                <h3 className="text-base font-bold text-cc-text-heading">Commencement of Academic Year</h3>
              </div>
              <p className="mt-3 text-sm text-cc-text-body leading-relaxed">
                The exact start date for the academic year 2026–2027 will be formally communicated to all admitted candidates through their registered email ID and WhatsApp number.
              </p>
            </div>

            {/* 6. Caution */}
            <div className="rounded-cc-lg border border-red-200 bg-red-50/40 p-6 shadow-cc-sm">
              <div className="flex items-center gap-3 border-b border-red-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-800">
                  6
                </span>
                <h3 className="text-base font-bold text-red-900">Caution: Anti-Fraud Advisory</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-red-950">
                <li>
                  The college <strong>does not authorize any third party, agent, or consultant</strong> to conduct the selection process or offer admissions.
                </li>
                <li>
                  Beware of unauthorized SMS, phone calls, or emails promising guaranteed admission.
                </li>
              </ul>
            </div>

            {/* 7. Bank Loan Assistance */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
              <div className="flex items-center gap-3 border-b border-cc-gray-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-sm font-bold text-cc-primary">
                  7
                </span>
                <h3 className="text-base font-bold text-cc-text-heading">Bank Loan Assistance</h3>
              </div>
              <p className="mt-3 text-sm text-cc-text-body leading-relaxed">
                Admitted students can request an official recommendation letter for education loans from recognized banks by presenting their original fee-paid receipt to the Office of Admissions.
              </p>
            </div>

            {/* 8. Laptop Requirement */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
              <div className="flex items-center gap-3 border-b border-cc-gray-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-sm font-bold text-cc-primary">
                  8
                </span>
                <h3 className="text-base font-bold text-cc-text-heading">Laptop Requirement</h3>
              </div>
              <p className="mt-3 text-sm text-cc-text-body leading-relaxed">
                Admitted students may need to purchase a personal laptop meeting specified hardware configurations if required by their respective academic department.
              </p>
            </div>

            {/* 9. Final Decision */}
            <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm md:col-span-2">
              <div className="flex items-center gap-3 border-b border-cc-gray-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-sm font-bold text-cc-primary">
                  9
                </span>
                <h3 className="text-base font-bold text-cc-text-heading">Final Decision</h3>
              </div>
              <p className="mt-3 text-sm text-cc-text-body leading-relaxed">
                Student allotment in the programme of their choice shall be at the sole discretion of the Management. <strong>The decision of the Admission Committee is final and binding.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Admission Brochure Display / Action Section */}
        <div className="mt-16 rounded-cc-lg border border-cc-gray-200 bg-white p-6 sm:p-8 shadow-cc-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-cc-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cc-primary">Official Publication</span>
              <h2 className="text-xl sm:text-2xl font-bold text-cc-text-heading">
                Admission Brochure 2026–2027
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={admissionBrochureImg}
                download="Christ_College_Pune_Admission_Brochure.jpg"
                className="inline-flex items-center gap-2 rounded-cc-pill border border-cc-gray-200 bg-cc-bg-surface px-4 py-2 text-xs font-semibold text-cc-text-heading hover:bg-cc-gray-100 transition-colors"
              >
                <DownloadIcon width={14} height={14} />
                Download Brochure
              </a>
              <button
                type="button"
                onClick={() => setShowBrochureModal(true)}
                className="inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-4 py-2 text-xs font-semibold text-white hover:bg-cc-primary-dark transition-colors"
              >
                <ExpandIcon width={14} height={14} />
                View Full Size
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowBrochureModal(true)}
              className="group relative block overflow-hidden rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface focus:outline-none focus:ring-2 focus:ring-cc-primary"
            >
              <img
                src={admissionBrochureImg}
                alt="Christ College Pune Admission Brochure 2026-2027"
                className="max-h-[500px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-cc-pill bg-white/90 px-4 py-2 text-xs font-semibold text-cc-primary shadow">
                  Click to Expand Brochure
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Modal for Full Size Brochure */}
        {showBrochureModal && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setShowBrochureModal(false)}
          >
            <div
              className="relative max-h-[90vh] max-w-5xl overflow-auto rounded-cc-lg bg-white p-2 sm:p-4 shadow-cc"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-cc-gray-200">
                <h3 className="text-sm sm:text-base font-bold text-cc-text-heading">
                  Christ College Pune &mdash; Admission Brochure 2026–2027
                </h3>
                <button
                  type="button"
                  onClick={() => setShowBrochureModal(false)}
                  className="rounded-full p-1.5 text-cc-text-muted-light hover:bg-cc-gray-100 hover:text-cc-text-heading"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>
              <div className="mt-4 flex justify-center">
                <img
                  src={admissionBrochureImg}
                  alt="Full Admission Brochure"
                  className="max-h-[75vh] w-auto object-contain rounded"
                />
              </div>
            </div>
          </div>
        )}

        {/* Final Apply CTA & Helpdesk Bar */}
        <div className="mt-16 grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <div className="rounded-cc-lg border border-cc-gold/40 bg-gradient-to-br from-cc-primary to-cc-primary-dark p-8 text-white shadow-cc flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-cc-pill bg-cc-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-gold-light border border-cc-gold/40">
                Online Portal
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Ready to Submit Your Application?
              </h3>
              <p className="mt-2 text-sm text-cc-text-light/90 leading-relaxed">
                Ensure you have all required soft copies of documents and photograph specifications ready before launching the Linways application form.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://christcollegepune.linways.com/v4/adm-applicant/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-cc-pill bg-cc-gold px-7 py-3 text-sm font-bold text-cc-primary-dark shadow hover:bg-cc-gold-light transition-colors"
              >
                Go to Linways Application Portal
                <ExpandIcon width={16} height={16} />
              </a>
            </div>
          </div>

          <div className="rounded-cc-lg border border-cc-gray-200 bg-white p-6 shadow-cc-sm">
            <h3 className="text-base font-bold text-cc-text-heading">Admissions Helpdesk</h3>
            <p className="mt-1 text-xs text-cc-text-muted-light">
              For any questions regarding instructions, eligibility, or technical payment assistance:
            </p>

            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-cc-text-body">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <PhoneIcon width={16} height={16} />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">Phone Contacts</span>
                  <span className="font-semibold text-cc-text-heading">7823839456, 8432511907</span>
                  <span className="block text-xs text-cc-text-muted-light">Office: 7447727243, 7447727242</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-cc-text-body">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <EnvelopeIcon width={16} height={16} />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">Email</span>
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
                  <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">Office Hours</span>
                  <span className="font-medium text-cc-text-heading">Mon–Fri: 8:30 AM – 4:00 PM</span>
                  <span className="block text-xs text-cc-text-muted-light">Sat: 8:30 AM – 1:30 PM (Closed Sundays &amp; Public Holidays)</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-cc-text-body">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <MapPinIcon width={16} height={16} />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-cc-text-muted-light">Campus Address</span>
                  <span className="text-cc-text-heading">26/4A, Nagar Rd, Ramwadi, Wadgaon Sheri, Pune, Maharashtra 411014</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
