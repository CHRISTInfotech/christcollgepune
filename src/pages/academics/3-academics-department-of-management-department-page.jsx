import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { ChevronDownIcon, BuildingIcon, GridIcon, UsersIcon, AwardIcon, CompassIcon, AcademicCapIcon } from '../../components/icons';
import TestimonialCarousel from '../../components/TestimonialCarousel';
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
            <h2 className="flex items-center gap-2.5">
              <BuildingIcon className="h-6 w-6 text-cc-primary shrink-0" />
              About the Department
            </h2>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              The Management Department of Christ College Pune seeks to equip graduates with a solid foundation in management theory and practice in order to help them succeed in a variety of disciplines. Graduates of the BBA, BBA (International Business), and BBA (Computer Application) programmes at Christ College Pune will be well-prepared to succeed in the fast-paced and constantly changing business world, whether they choose to pursue careers in the private sector, launch their own businesses, or continue their education in graduate school.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              Technology is becoming increasingly crucial in the dynamic modern corporate world. To prepare students for the challenges of the future, it is essential for educational institutions to offer top-notch management education in this context.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              Recognizing this need, Christ College Pune established the Management department with the objective of giving students the expertise and knowledge necessary to achieve success. Christ College Pune's Management department has rapidly become a preeminent hub for management education at the undergraduate level. The department strives to equip students to become successful entrepreneurs, researchers, and scientists through a variety of courses and possibilities for experiential learning.
            </p>

            <h2 className="mt-10 flex items-center gap-2.5">
              <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Department Overview
            </h2>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              The modern business world is constantly changing, and technology plays an increasingly important role. In this environment, it's crucial for educational institutions to provide high-quality management education to prepare students for the challenges of the future. Christ College Pune recognizes this need and established its Management department with the aim of providing students with the skills and knowledge they need to succeed.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              Since its founding, the management department at Christ College Pune has quickly emerged as a leading center for management studies at the undergraduate level. The department is committed to providing students with a comprehensive education that combines theoretical knowledge with practical experience. Through a range of courses and opportunities for experiential learning, the department aims to prepare students to become effective entrepreneurs, researchers, and consultants who can make positive contributions to society.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              By providing students with a strong foundation in management theory and practice, Christ College Pune's Management department aims to prepare graduates for success in a variety of fields. Whether they choose to pursue careers in the private sector, start their own businesses, or continue their studies in graduate school, graduates of the BBA, BBA (International Business), and BBA (Computer Application) programs at Christ College Pune will be well-equipped to thrive in the fast-paced and constantly evolving world of business.
            </p>

            <h2 className="mt-10 flex items-center gap-2.5">
              <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Message from the HOD
            </h2>
            <div className="mt-4 flex items-start gap-4">
              <img src={hodDeepaSujith} alt="Ms. Deepa Sujith" className="h-16 w-16 shrink-0 rounded-full border border-cc-gray-200 object-cover" />
              <div>
                <p className="font-semibold text-cc-text-heading">Ms. Deepa Sujith &ndash; Head of Department</p>
                <p className="mt-2 text-cc-text-body leading-relaxed text-justify">
                  A hearty welcome to the Department of Management, Christ College - Pune which provides a distinctive environment for imparting business and technical studies. Offering programs in Business Administration, International Business, and Computer Applications. The Department aims to uphold the motto of the institution Enlighten to Excel through the dedicated efforts of dynamic and committed faculty who hold extensive expertise and a blend of knowledge in various domains, with intrinsic research aptitude. Imparting quality education and nurturing students to excel in their respective disciplines.
                </p>
                <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
                  We provide practical experiential, participative, and intellectual learning experiences through internships, field visits, corporate talks, business tech fests, seminars, and much more. Integrating value-added, certificate, and skill enhancement courses into our programs we aim to equip our students to meet the needs of the contemporary business world and make them industry ready.
                </p>
                <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
                  We cultivate an attitude of confidence, commitment, and responsibility in our students while holistically developing them to be competent professionals who make meaningful and innovative contributions to society. I cordially invite you to join us on an exciting academic journey of enriching your knowledge and enhancing your personality.
                </p>
                <p className="mt-4 font-semibold text-cc-text-heading">
                  Wishing you all the best in your academic and professional endeavours!
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <div>
              <h4 className="text-xs uppercase tracking-wide text-cc-text-muted-light flex items-center gap-1.5">
                  <CompassIcon className="h-3.5 w-3.5 text-cc-primary shrink-0" />
                  Vision
                </h4>
              <p className="mt-1 text-sm font-semibold italic text-cc-primary">
                &ldquo;Our vision is to develop leaders of intellectual and ethical excellence who serve business and society at large.&rdquo;
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-xs uppercase tracking-wide text-cc-text-muted-light flex items-center gap-1.5">
                  <AwardIcon className="h-3.5 w-3.5 text-cc-primary shrink-0" />
                  Mission
                </h4>
              <p className="mt-1 text-sm leading-relaxed text-cc-text-muted-light">
                &ldquo;Our mission is to holistically develop competent business leaders and technical experts of tomorrow who imbibe in them a spirit of inquiry and innovation and exhibit professional excellence remaining socially responsible and morally upright.&rdquo;
              </p>
            </div>

            <h3 className="mt-6 text-base font-bold text-cc-text-heading flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5 text-cc-primary shrink-0" />
                Programmes Offered
              </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {PROGRAMMES.map((p) => (
                <li key={p.label}>
                  <Link
                    to={p.path}
                    className="group flex items-center justify-between gap-2 rounded-cc-md border border-cc-gray-200 bg-cc-bg-page px-4 py-2.5 text-sm font-medium text-cc-text-body shadow-cc-sm transition-colors hover:border-cc-primary hover:bg-cc-primary/5 hover:text-cc-primary"
                  >
                    {p.label}
                    <ChevronDownIcon
                      width={14}
                      height={14}
                      className="-rotate-90 shrink-0 text-cc-text-muted-light transition-colors group-hover:text-cc-primary"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="text-center flex items-center justify-center gap-2.5">
              <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Facilities & Activities
            </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        <h2 className="text-center flex items-center justify-center gap-2.5">
              <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Student Testimonials
            </h2>
        <div className="mt-10">
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </section>
    </>
  );
}
