import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import departmentBanner from '../../assets/images/3-academics-department-of-management-department-page/department-banner.jpg';
import hodDeepaSujith from '../../assets/images/3-academics-department-of-management-department-page/hod-deepa-sujith.png';
import fiesta from '../../assets/images/3-academics-department-of-management-department-page/fiesta.png';
import ccma from '../../assets/images/3-academics-department-of-management-department-page/ccma.png';
import corporateConnect from '../../assets/images/3-academics-department-of-management-department-page/corporate-connect.JPG';
import campusUpdates from '../../assets/images/3-academics-department-of-management-department-page/campus-updates.JPG';
import facultyPublications from '../../assets/images/3-academics-department-of-management-department-page/faculty-publications.jpg';
import testimonialAdesh from '../../assets/images/3-academics-department-of-management-department-page/testimonial-adesh-ghisare.jpg';
import testimonialNived from '../../assets/images/3-academics-department-of-management-department-page/testimonial-nived-menon.jpeg';

const PROGRAMMES = [
  { label: 'BBA (Computer Applications)', path: '/academics/department-of-management/bba-computer-applications' },
  { label: 'BBA (Bachelor of Business Administration)', path: '/academics/department-of-management/bba-bachelor-of-business-administration' },
  { label: 'BBA (International Business)', path: '/academics/department-of-management/bba-international-business' },
];

const ACTIVITIES = [
  { name: 'Fiesta', description: 'The department’s annual festival.', image: fiesta },
  { name: 'CCMA', description: 'Christ College Management Association.', image: ccma },
  { name: 'Corporate Connect', description: 'Industry engagement through talks, visits and internships.', image: corporateConnect },
  { name: 'Campus Updates', description: 'Newsletter and department activity updates.', image: campusUpdates },
  { name: 'Faculty Publications', description: 'Research and publications by department faculty.', image: facultyPublications },
];

const TESTIMONIALS = [
  { name: 'Adesh Ghisare', programme: 'BBA (International Business), 2020–2023', photo: testimonialAdesh, quote: 'I had the privilege of pursuing my BBA in International Business at Christ College Pune, and my experience was nothing short of extraordinary.' },
  { name: 'Nived P Menon', programme: 'BBA (International Business), 2021–2024', photo: testimonialNived, quote: 'My time at Christ College Pune has been an amazing journey. The BBA International Business programme gave me a strong foundation.' },
];

export default function DepartmentOfManagementPage() {
  return (
    <>
      <Seo
        title="Department of Management"
        description="The Department of Management at Christ College, Pune offers BBA, BBA (International Business) and BBA (Computer Applications), led by HOD Ms Deepa Sujith, combining management theory with internships, corporate talks and business tech fests."
      />
      <PageHeader
        title="Department of Management"
        breadcrumbs={[{ label: 'Management', path: '/academics/department-index/management' }, { label: 'Department of Management' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={departmentBanner}
          alt="Department of Management"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2>About the Department</h2>
            <p className="mt-4 text-cc-text-body">
              The Management Department equips graduates with foundational knowledge in
              management theory and practice across multiple specializations. Programmes include
              BBA, BBA (International Business), and BBA (Computer Application), designed to
              prepare students for careers in the private sector, entrepreneurship, or graduate
              studies. The department emphasizes combining theoretical knowledge with practical
              experience through internships, field visits, corporate talks, and business tech
              fests.
            </p>

            <h2 className="mt-10">Message from the HOD</h2>
            <div className="mt-4 flex items-start gap-4">
              <img src={hodDeepaSujith} alt="Ms. Deepa Sujith" className="h-16 w-16 shrink-0 rounded-full border border-cc-gray-200 object-cover" />
              <div>
                <p className="font-semibold text-cc-text-heading">Ms. Deepa Sujith &ndash; Head of Department</p>
                <p className="mt-2 text-cc-text-body">
                  The department welcomes students to &ldquo;a distinctive environment for
                  imparting business and technical studies.&rdquo; Faculty members bring extensive
                  expertise and research aptitude. The department integrates value-added and
                  skill enhancement courses to make students &ldquo;industry ready&rdquo; while
                  developing them as &ldquo;competent professionals who make meaningful and
                  innovative contributions to society.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <h3 className="text-base">Vision &amp; Mission</h3>
            <p className="mt-3 text-sm font-semibold italic text-cc-primary">
              &ldquo;To develop leaders of intellectual and ethical excellence who serve business
              and society at large.&rdquo;
            </p>
            <p className="mt-3 text-sm text-cc-text-muted-light">
              &ldquo;To holistically develop competent business leaders and technical experts of
              tomorrow who imbibe in them a spirit of inquiry and innovation and exhibit
              professional excellence, remaining socially responsible and morally upright.&rdquo;
            </p>

            <h3 className="mt-6 text-base">Programmes Offered</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {PROGRAMMES.map((p) => (
                <li key={p.label}>
                  <a href={p.path} className="flex items-center gap-2 text-sm text-cc-text-body hover:text-cc-primary hover:underline">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="text-center">Facilities &amp; Activities</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((a) => (
              <div key={a.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm">
                <img src={a.image} alt={a.name} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-base">{a.name}</h3>
                  <p className="mt-1 text-sm text-cc-text-muted-light">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-center">Student Testimonials</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 shadow-cc-sm">
              <div className="flex items-center gap-4">
                <img src={t.photo} alt={t.name} className="h-14 w-14 shrink-0 rounded-full border border-cc-gray-200 object-cover" />
                <div>
                  <p className="font-semibold text-cc-text-heading">{t.name}</p>
                  <p className="text-xs text-cc-text-muted-light">{t.programme}</p>
                </div>
              </div>
              <p className="mt-4 text-sm italic text-cc-text-muted-light">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
