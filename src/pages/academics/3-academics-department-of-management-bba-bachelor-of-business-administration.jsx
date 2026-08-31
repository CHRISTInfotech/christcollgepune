import PageHeader from '../../components/PageHeader';
import { ClockIcon, AcademicCapIcon, PhoneIcon, BookIcon, CheckCircleIcon, CalendarIcon, GridIcon, GlobeIcon, DownloadIcon } from '../../components/icons';
import Seo from '../../components/Seo';
import PdfViewer from '../../components/PdfViewer';
import banner from '../../assets/images/3-academics-department-of-management-bba-bachelor-of-business-administration/banner.JPG';
import syllabusPdf from '../../assets/acadmics/Management/bba-syllabus.pdf';

const ELIGIBILITY = [
  'Passed 10+2 (Higher Secondary) or equivalent in any stream with a minimum of 40% marks.',
  'Must appear for the CET examination conducted by the Government of Maharashtra.',
];

const HIGHLIGHTS = [
  'Comprehensive coverage of Marketing, Finance, HR, Operations, and Entrepreneurship',
  'Industry-oriented curriculum aligned with current business trends',
  'Internships, live projects, case studies, and practical workshops',
  'Focus on leadership, communication, and decision-making skills',
  'Placement training and corporate readiness support',
  'Foundation for MBA and competitive examinations',
  'Innovation and entrepreneurial mindset encouragement',
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
  'Photocopies of all original documents',
];

const ADMISSION_STEPS = [
  { title: 'Check Eligibility', body: 'Visit christcollegepune.org and review eligibility criteria.' },
  { title: 'Online Application', body: 'Complete the online application form with required documents and select an interview date.' },
  { title: 'Admission Counselling & Selection Interview', body: 'Attend on campus with parents and documents for a counselling session and faculty interview.' },
  { title: 'Final Selection', body: 'The selection decision is communicated the same day.' },
  { title: 'Fee Payment', body: 'Pay the admission fee within 7 working days to confirm the seat.' },
  { title: 'Document Submission', body: 'Submit all required original documents as per college guidelines.' },
  { title: 'Enrolment', body: 'Official enrolment follows completion of formalities.' },
];

export default function BbaBachelorOfBusinessAdministration() {
  return (
    <>
      <Seo
        title="BBA (Bachelor of Business Administration)"
        description="BBA at Christ College, Pune develops entrepreneurial and managerial skills across Marketing, Finance, HR, Operations and Entrepreneurship, with specializations in Finance and Human Resource Management."
      />
      <PageHeader
        title="BBA (Bachelor of Business Administration)"
        breadcrumbs={[{ label: 'Department of Management', path: '/academics/department-of-management/department-page' }, { label: 'BBA (Bachelor of Business Administration)' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img src={banner} alt="BBA (Bachelor of Business Administration)" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="flex items-center gap-2.5">
              <BookIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Programme Overview
            </h2>
            <p className="mt-4 text-cc-text-body">
              The Bachelor of Business Administration (BBA) programme at Christ College Pune is
              designed to provide students with a strong academic foundation in management while
              equipping them with the practical skills required in today's competitive business
              environment. The programme blends core business knowledge with experiential learning
              to ensure students develop leadership abilities, analytical thinking, communication
              skills, and strong ethical values. With a focus on industry readiness and holistic
              development, the BBA programme prepares graduates for successful corporate careers,
              entrepreneurial ventures, and advanced academic pursuits such as an MBA and other
              professional courses.
            </p>
            <p className="mt-4 text-cc-text-body">
              This programme aims to provide a comprehensive understanding of business management
              concepts. It is designed to develop competent professionals with entrepreneurial
              acumen who are capable of applying qualitative and quantitative skills to deliver
              viable solutions to business challenges. The curriculum also fosters sensitivity
              toward social, ethical, and sustainability issues. Offering specializations in
              Finance and Human Resource Management, the department provides a rich blend of academic
              and co-curricular activities, including add-on courses, internship programmes,
              mentoring and guidance sessions, and industrial visits.
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
          <PdfViewer fileUrl={syllabusPdf} title="BBA (Bachelor of Business Administration) Syllabus" />
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
