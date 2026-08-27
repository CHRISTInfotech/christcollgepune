import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import banner from '../../assets/images/3-academics-department-of-management-bba-international-business/banner.JPG';
import courseImage from '../../assets/images/3-academics-department-of-management-bba-international-business/course-image.JPG';

const HIGHLIGHTS = [
  'Specialized focus on international trade and global business practices',
  'Curriculum covering global marketing, foreign exchange, and international finance',
  'Exposure to cross-cultural management and global leadership concepts',
  'Industry-oriented learning through projects, case studies, and internships',
  'Development of strategic and analytical skills for global markets',
  'Career preparation for multinational corporations and global enterprises',
  'Strong foundation for higher education in International Business and Global Management',
];

const DOCUMENTS = [
  'Printout of online admission enquiry form',
  '10th Mark Sheet (compulsory)',
  '11th and/or 12th Mark Sheet',
  'Aadhaar Card (compulsory)',
  'PAN Card / Driving Licence / Passport',
  '2 passport-size photographs (white background)',
  'Caste Certificate (if applicable)',
  'Transfer / Migration Certificates',
  'Photocopies of all original documents',
];

export default function BbaInternationalBusiness() {
  return (
    <>
      <Seo
        title="BBA (International Business)"
        description="BBA (International Business) at Christ College, Pune gives students a global outlook, managerial and entrepreneurial skills, and cross-cultural exposure to international trade, global marketing and finance."
      />
      <PageHeader
        title="BBA (International Business)"
        breadcrumbs={[{ label: 'Department of Management', path: '/academics/department-of-management/department-page' }, { label: 'BBA (International Business)' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img src={banner} alt="BBA (International Business)" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2>Programme Overview</h2>
            <p className="mt-4 text-cc-text-body">
              The programme aims to &ldquo;provide a global outlook and exposure to
              students&rdquo; while equipping them with &ldquo;managerial and entrepreneurial
              skills along with various theoretical and practical aspects of international
              business.&rdquo; It seeks to develop cross-cultural attitudes and &ldquo;ethical and
              social consciousness in the students.&rdquo;
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

            <h3 className="mt-8 text-base">Career Prospects</h3>
            <p className="mt-3 text-cc-text-body">
              The programme prepares students for careers in the global business environment,
              with opportunities in multinational corporations, export-import firms, and
              international consulting, while laying a strong foundation for higher studies.
            </p>

            <p className="mt-6 rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-4 text-sm text-cc-text-body">
              All professional courses, namely BBA, BBA (IB), and BBA (CA), require candidates to
              appear for the CET examination conducted by the Government of Maharashtra.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <img src={courseImage} alt="BBA (International Business) students" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover" />
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
          <h3 className="text-base">Documents Required</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {DOCUMENTS.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
