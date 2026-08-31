import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import banner from '../../assets/images/3-academics-department-of-management-new-campus-bba-page-duplicate-current-variant/banner.JPG';

const ELIGIBILITY = [
  'Passed 10+2 (Higher Secondary) or equivalent in any stream with a minimum of 40% marks.',
  'Must appear for the CET examination conducted by the Government of Maharashtra.',
];

const DOCUMENTS = [
  'Printout of online admission enquiry form',
  '10th Mark Sheet',
  '11th / 12th Mark Sheets',
  'Aadhaar Card',
  'PAN Card / Driving Licence / Passport',
  '2 passport photos (white background)',
  'Caste Certificate (if applicable)',
  'Transfer / Migration Certificates',
  'Photocopies of all documents',
];

export default function NewCampusBbaDuplicateVariant() {
  return (
    <>
      <Seo
        title="BBA (Bachelor of Business Administration) — New Campus"
        description="A legacy/duplicate URL variant of the BBA (Bachelor of Business Administration) programme page for Christ College Pune's New Campus, mirroring the Main Campus BBA course content."
      />
      <PageHeader
        title="BBA (Bachelor of Business Administration) — New Campus"
        breadcrumbs={[{ label: 'Department of Management', path: '/academics/department-of-management/department-page' }, { label: 'New Campus BBA' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-8 rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-4 text-sm text-cc-text-muted-light">
          This page is a legacy/duplicate URL variant of the BBA programme page indexed under the
          New Campus URL path on the old site. It mirrors the{' '}
          <a href="/academics/department-of-management/bba-bachelor-of-business-administration" className="text-cc-primary hover:underline">
            BBA (Bachelor of Business Administration)
          </a>{' '}
          course content.
        </div>

        <img src={banner} alt="BBA (Bachelor of Business Administration), New Campus" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2>Programme Overview</h2>
            <p className="mt-4 text-cc-text-body">
              The programme aims to provide understanding of business management concepts and
              develop competent individuals with entrepreneurship skills. It emphasizes
              qualitative and quantitative problem-solving approaches while addressing social,
              ethical and sustainability issues. Specializations offered include Finance and
              Human Resource Management, supplemented by add-on courses, internships, mentoring,
              and industrial visits.
            </p>

            <p className="mt-6 rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-4 text-sm text-cc-text-body">
              CET examination (Government of Maharashtra) is mandatory for admission.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base">Course Duration</h3>
              <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
                <div className="py-3 first:pt-0">
                  <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Duration</dt>
                  <dd className="mt-1 text-sm font-medium text-cc-text-heading">3 Years, Full-Time</dd>
                </div>
                <div className="py-3 last:pb-0">
                  <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Structure</dt>
                  <dd className="mt-1 text-sm font-medium text-cc-text-heading">6 Semesters</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base">Eligibility</h3>
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
