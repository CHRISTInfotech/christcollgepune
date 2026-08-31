import PageHeader from '../../components/PageHeader';
import { ClockIcon, AcademicCapIcon, PhoneIcon, BookIcon, CheckCircleIcon, CalendarIcon, GridIcon, GlobeIcon, DownloadIcon } from '../../components/icons';
import Seo from '../../components/Seo';
import PdfViewer from '../../components/PdfViewer';
import banner from '../../assets/images/3-academics-department-of-management-bba-computer-applications/banner.jpg';
import syllabusPdf from '../../assets/acadmics/Management/bba-ca-syllabus.pdf';

const ELIGIBILITY = [
  'Passed 10+2 (Higher Secondary) or equivalent in any stream with a minimum of 40% marks.',
  'Must appear for the CET examination conducted by the Government of Maharashtra.',
];

const HIGHLIGHTS = [
  'Integrated curriculum combining management and computer applications',
  'Focus on business analytics, e-commerce, and digital transformation',
  'Exposure to information systems and technology-driven decision-making',
  'Practical learning through projects, case studies, and skill-based training',
  'Development of analytical, technical, and managerial competencies',
  'Career opportunities in IT-enabled services, digital marketing, fintech, and tech management',
  'Strong foundation for pursuing MBA, MCA, or postgraduate studies',
];

const DOCUMENTS = [
  'Printout of online admission enquiry form',
  '10th Mark Sheet (compulsory)',
  '11th and/or 12th Mark Sheet',
  'Aadhaar Card (compulsory)',
  'PAN Card / Driving Licence / Passport (if available)',
  '2 passport-size photographs, white background (compulsory)',
  'Caste Certificate (if applicable)',
  'Transfer Certificate (if available)',
  'Migration Certificate (if available)',
  'One set of photocopies of all original documents',
];

const ADMISSION_STEPS = [
  { title: 'Check Eligibility', body: 'Visit christcollegepune.org and review eligibility criteria.' },
  { title: 'Online Application', body: 'Complete the online application form with required documents and select an interview date.' },
  { title: 'Admission Counselling & Selection Interview', body: 'Attend on campus with parents and documents for a counselling session, faculty interview, and a final meeting with the Principal.' },
  { title: 'Final Selection', body: 'The selection decision is communicated the same day.' },
  { title: 'Fee Payment', body: 'Pay the admission fee within 7 working days to confirm the seat.' },
  { title: 'Document Submission', body: 'Submit all required original documents as per college guidelines.' },
  { title: 'Enrolment', body: 'Official enrolment follows completion of formalities.' },
];

export default function BbaComputerApplications() {
  return (
    <>
      <Seo
        title="BBA (Computer Applications)"
        description="BBA (Computer Applications) at Christ College, Pune integrates management education with technology, covering business analytics, information systems, e-commerce and digital business, with specializations in Finance and Human Resource Management."
      />
      <PageHeader
        title="BBA (Computer Applications)"
        breadcrumbs={[{ label: 'Department of Management', path: '/academics/department-of-management/department-page' }, { label: 'BBA (Computer Applications)' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img src={banner} alt="BBA (Computer Applications)" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="flex items-center gap-2.5">
              <BookIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Programme Overview
            </h2>
            <p className="mt-4 text-cc-text-body">
              The programme integrates management education with technological expertise for the
              digital business era. It combines core business disciplines with business
              analytics, information systems, e-commerce, and digital technologies. Students
              develop competencies in data analysis, digital platform management, and
              technology-driven business decisions.
            </p>
            <p className="mt-4 text-cc-text-body">
              &ldquo;This course aims at providing adequate understanding of the business
              management concepts&rdquo; and is &ldquo;designed to develop competent individuals
              with entrepreneurship acumen capable of applying qualitative and quantitative
              skills to provide viable solutions to business problems.&rdquo; The programme offers
              specialization options in Finance and Human Resource Management, with activities
              including add-on courses, internship programmes, mentoring sessions, and industrial
              visits.
            </p>

            <h3 className="mt-8 text-base flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-cc-primary shrink-0" />
              Programme Highlights
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-cc-text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base font-bold text-cc-text-heading flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-cc-primary" />
                Course Duration
              </h3>
              <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
                <div className="py-3 first:pt-0">
                  <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Duration</dt>
                  <dd className="mt-1 text-sm font-medium text-cc-text-heading">4 Years, Full-Time</dd>
                </div>
                <div className="py-3 last:pb-0">
                  <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Structure</dt>
                  <dd className="mt-1 text-sm font-medium text-cc-text-heading">8 Semesters</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base font-bold text-cc-text-heading flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5 text-cc-primary" />
                Eligibility
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {ELIGIBILITY.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-cc-text-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base font-bold text-cc-text-heading flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-cc-primary" />
                Admissions Contact
              </h3>
              <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
                <div className="py-3 first:pt-0"><dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">College Reception</dt><dd className="mt-1 text-sm font-medium text-cc-text-heading">7823839456</dd></div>
                <div className="py-3"><dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">College Office</dt><dd className="mt-1 text-sm font-medium text-cc-text-heading">7447727243, 7447727242</dd></div>
                <div className="py-3"><dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Office Hours</dt><dd className="mt-1 text-sm font-medium text-cc-text-heading">Mon&ndash;Fri 8:30am&ndash;4:00pm, Sat 8:30am&ndash;1:30pm</dd></div>
                <div className="py-3 last:pb-0"><dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Email</dt><dd className="mt-1 text-sm font-medium text-cc-text-heading">admission@christcollegepune.org</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="text-center mb-8 flex items-center justify-center gap-2.5">
            <DownloadIcon className="h-6 w-6 text-cc-primary shrink-0" />
            Course Syllabus
          </h2>
          <PdfViewer fileUrl={syllabusPdf} title="BBA (Computer Applications) Syllabus" />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <CalendarIcon className="h-6 w-6 text-cc-primary shrink-0" />
          Admission Process
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADMISSION_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">{index + 1}</span>
              <h3 className="mt-3 text-base">{step.title}</h3>
              <p className="mt-2 text-sm text-cc-text-muted-light">{step.body}</p>
            </li>
          ))}
        </ol>
        <h3 className="mt-10 text-base flex items-center gap-2">
          <GlobeIcon className="h-5 w-5 text-cc-primary shrink-0" />
          International / NRI / PIO Students
        </h3>
        <ol className="mt-4 flex flex-col gap-3 max-w-3xl">
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">1</span>
            <span>
              Visit the Pune University website{' '}
              <a
                href="http://www.unipune.ac.in/dept/International%20Centre/default.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cc-primary hover:underline font-semibold"
              >
                International Centre Portal
              </a>{' '}
              and navigate to the "International Centre" section.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">2</span>
            <span>Choose the program you want to apply for, whether it is Undergraduate or Postgraduate.</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">3</span>
            <span>Register for the International Student Admission by filling in the required information.</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">4</span>
            <span>Wait for a response from Pune University regarding your application status.</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">5</span>
            <span>
              Additionally, also apply directly with us by visiting our website{' '}
              <a
                href="https://christcollegepune.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cc-primary hover:underline font-semibold"
              >
                christcollegepune.org
              </a>{' '}
              and fill out the online application form with all the necessary details and submit it along with the required documents.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">6</span>
            <span>Attend any required interviews or exams as part of the admission process.</span>
          </li>
        </ol>

        <h3 className="mt-12 text-base flex items-center gap-2">
          <GridIcon className="h-5 w-5 text-cc-primary shrink-0" />
          Documents Required
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {DOCUMENTS.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-cc-text-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-cc-lg border border-cc-primary/20 bg-cc-primary/5 p-6 shadow-cc-sm">
          <h4 className="text-base font-bold text-cc-primary flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
              <path d="M12 9v4m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Notice
          </h4>
          <p className="mt-3 text-sm text-cc-text-body leading-relaxed">
            All professional courses, namely BBA, BBA (IB), and BBA (CA), require candidates to appear for the CET examination conducted by the Government of Maharashtra as part of the admission process. For more details regarding the CET examination, candidates are advised to visit the official website:{' '}
            <a
              href="https://cetcell.mahacet.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cc-primary hover:underline font-semibold"
            >
              cetcell.mahacet.org
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
