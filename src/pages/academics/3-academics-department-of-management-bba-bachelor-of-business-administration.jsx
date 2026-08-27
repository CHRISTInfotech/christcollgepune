import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import banner from '../../assets/images/3-academics-department-of-management-bba-bachelor-of-business-administration/banner.JPG';
import courseImage from '../../assets/images/3-academics-department-of-management-bba-bachelor-of-business-administration/course-image.JPG';

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
            <h2>Programme Overview</h2>
            <p className="mt-4 text-cc-text-body">
              The programme aims to provide adequate understanding of business management
              concepts and develop competent individuals with entrepreneurship acumen. It
              emphasizes applying qualitative and quantitative skills to solve business problems
              while creating awareness of social, ethical, and sustainability issues. Students can
              specialize in Finance and Human Resource Management.
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
              appear for the CET examination conducted by the Government of Maharashtra.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <img src={courseImage} alt="BBA students" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover" />
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
            International/NRI/PIO students must apply through the Pune University portal at{' '}
            <a href="http://www.unipune.ac.in/dept/International%20Centre/default.htm" className="text-cc-primary hover:underline">
              unipune.ac.in &ndash; International Centre
            </a>{' '}
            and complete the college admission process.
          </p>
        </div>
      </section>
    </>
  );
}
