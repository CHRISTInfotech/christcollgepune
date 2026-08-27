import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import banner from '../../assets/images/3-academics-department-of-management-bba-computer-applications/banner.jpg';
import courseImage from '../../assets/images/3-academics-department-of-management-bba-computer-applications/course-image.jpg';

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
            <h2>Programme Overview</h2>
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

            <h3 className="mt-8 text-base">Programme Highlights</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-cc-text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-4 text-sm text-cc-text-body">
              All professional courses, namely BBA, BBA (IB), and BBA (CA), require candidates to
              appear for the CET examination conducted by the Government of Maharashtra as part
              of the admission process.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <img src={courseImage} alt="BBA (Computer Applications) students" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover" />
            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base">Admissions Contact</h3>
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
          <h2>Admission Process</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADMISSION_STEPS.map((step, index) => (
              <li key={step.title} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-5 shadow-cc-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">{index + 1}</span>
                <h3 className="mt-3 text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-cc-text-muted-light">{step.body}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 text-base">Documents Required</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {DOCUMENTS.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-base">International / NRI / PIO Students</h3>
          <p className="mt-3 text-sm text-cc-text-body">
            Foreign National, NRI and PIO students must apply through the Pune University portal
            at{' '}
            <a href="http://www.unipune.ac.in/" className="text-cc-primary hover:underline">www.unipune.ac.in</a>
            {' '}(International Centre section &ndash; choose Undergraduate or Postgraduate
            programme, then register for International Student Admission) in addition to
            completing the college admission process at{' '}
            <a href="https://christcollegepune.org/" className="text-cc-primary hover:underline">christcollegepune.org</a>.
          </p>
        </div>
      </section>
    </>
  );
}
