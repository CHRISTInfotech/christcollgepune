import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import { ChevronDownIcon, BuildingIcon, GridIcon, UsersIcon, AwardIcon, CompassIcon, AcademicCapIcon } from '../../components/icons';
import departmentBanner from '../../assets/images/3-academics-department-of-commerce-department-page/department-banner.JPG';
import hodDeepaSujith from '../../assets/images/3-academics-department-of-commerce-department-page/hod-deepa-sujith.jpg';
import desafio from '../../assets/images/3-academics-department-of-commerce-department-page/desafio.jpg';
import ccca from '../../assets/images/3-academics-department-of-commerce-department-page/ccca.jpg';
import webinar from '../../assets/images/3-academics-department-of-commerce-department-page/webinar.jpg';
import facultyPublications from '../../assets/images/3-academics-department-of-commerce-department-page/faculty-publications.jpg';

const PROGRAMMES = {
  undergraduate: ['BCom (Bachelor of Commerce)'],
  postgraduate: ['MCom (Master of Commerce)'],
};

const ACTIVITIES = [
  { name: 'Festivals', description: 'Department festival and competition showcasing student skills and creativity.', image: desafio, path: '/academics/department-of-commerce/festivals' },
  { name: 'CCCA', description: 'Christ College Commerce Association - organizes workshops, seminars, competitions, and cultural events.', image: ccca, path: '/academics/department-of-commerce/association' },
  { name: 'Activities', description: 'Interactive webinars and guest lectures from industry and academic experts.', image: webinar, path: '/academics/department-of-commerce/activities' },
  { name: 'Faculty Publications', description: 'Scholarly research publications contributing to advanced academic knowledge.', image: facultyPublications, path: '/academics/department-of-commerce/faculty-publications' },
];

const TESTIMONIALS = [
  {
    name: 'Vaishnavi Nair',
    programme: 'B.Com, 2021–2024',
    photo: 'https://christcollegepune.org/uploads/testimonial/medium/1242487989_2025-03-12_10-12-15.JPG',
    quote: 'The college fostered a sense of community that made every student feel valued. The vibrant campus life, along with the many extracurricular opportunities, helped me develop essential soft skills like communication.'
  },
  {
    name: 'Cijo Antu Athiyundhan',
    programme: 'B.Com, 2021–2024',
    photo: 'https://christcollegepune.org/uploads/testimonial/medium/713274653_2025-03-12_09-44-57.jpg',
    quote: 'The professors were not only experts in their fields but also mentors who genuinely cared about my growth.'
  },
  {
    name: 'Alfred Jaisemon',
    programme: 'B.Com, 2021–2024',
    photo: 'https://christcollegepune.org/uploads/testimonial/medium/2098072834_2025-03-12_09-31-37.jpg',
    quote: 'My journey at Christ College, Pune, has been nothing short of extraordinary. The college provided a holistic learning experience that nurtured my academic knowledge, critical thinking, and leadership skills.'
  },
];

export default function DepartmentOfCommercePage() {
  return (
    <>
      <Seo
        title="Department of Commerce"
        description="The Department of Commerce at Christ College, Pune, established in 2007, is dedicated to nurturing future business leaders with academically rigorous accounting and finance education."
      />
      <PageHeader
        title="Department of Commerce"
        breadcrumbs={[{ label: 'Department of Commerce' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={departmentBanner}
          alt="Department of Commerce"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="flex items-center gap-2.5">
              <BuildingIcon className="h-6 w-6 text-cc-primary shrink-0" />
              About the Department
            </h2>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              Department of Commerce at Christ College Pune stands as a beacon of excellence in education, dedicated to nurturing tomorrow’s business leaders and professionals. Established with a mission to impart quality education in commerce and allied fields, we are proud to be a dynamic and student-centered department that integrates academics with holistic development.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              Our department is driven by a singular vision: to empower students with the knowledge, skills, and values needed to excel in an ever-evolving world. We aim to create a learning environment where academics meet innovation, and where students are encouraged to think critically, act ethically, and contribute meaningfully to society. Our focused curriculum, with diversity in our specialization, equips students with a robust understanding of financial management, costing techniques, and strategic decision-making.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              Our faculty comprises a diverse group of experienced educators who bring a blend of traditional teaching excellence and modern methodologies. Their unwavering commitment ensures that students receive the guidance and mentorship needed to thrive academically and personally. At the heart of our department lies a commitment to our students. We believe in tailoring education to meet individual needs, nurturing their strengths, and addressing their challenges.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              The Christ College Commerce Association (CCCA) is the soul of our department. It organizes a wide array of activities—ranging from workshops and seminars to competitions and cultural events—that foster teamwork, leadership, and creative thinking. These platforms empower students to explore their passions, hone their skills, and engage with peers who share similar interests.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              We believe education is more than just academic achievement; it is about shaping individuals who are capable of making a positive impact on the world. Opportunities to give back to society and instill values of empathy and responsibility. Our department strives to create a space where students grow intellectually, socially, and emotionally. The Department of Commerce exists to bridge the gap between academia and the professional world. We aim to produce graduates who are confident, competent, and ready to lead in the fields of commerce, finance, and business.
            </p>

            <h2 className="mt-12 flex items-center gap-2.5">
              <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Department Overview
            </h2>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              Welcome to the Commerce Department at Christ College, Pune, where excellence in education meets the holistic development of our students. Rooted in a legacy of academic distinction, our department is dedicated to shaping well-rounded individuals who excel both academically and personally.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              With diverse areas of specialization, we aim to provide students with a solid foundation in core commerce concepts and practical applications. Our curriculum is designed to keep pace with evolving industry trends, ensuring that our students are well-prepared for their professional journeys.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              Our diverse team of faculty members brings a blend of experience, expertise, and innovation. Comprising educators from various age groups, our staff is passionate about imparting knowledge and inspiring students to reach their potential. They ensure a supportive and engaging learning environment, fostering both academic and personal growth.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              We place students at the heart of everything we do. Our teaching methodologies are tailored to meet the varied learning needs of our students, encouraging active participation, critical thinking, and creativity. The Christ College Commerce Association (CCCA) is the vibrant hub of our department's co-curricular activities. CCCA organizes a wide range of events, workshops, competitions, and guest lectures throughout the year, providing students with opportunities to showcase their talents, develop leadership skills, and network with industry professionals. Our department hosts several student-led clubs that cater to diverse interests and skills, including budding financial analysts, stock market enthusiasts, innovation and startup culture advocates, and subject knowledge quizzes.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
              At Christ College, we believe in nurturing students beyond academics. To ensure their all-round development, we focus on:
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 pl-6 list-disc text-cc-text-body">
              <li><strong>Soft Skill Training</strong> – To build communication, teamwork, and problem-solving abilities.</li>
              <li><strong>Industry Exposure</strong> – Through internships, industrial visits, and expert sessions.</li>
              <li><strong>Cultural and Sports Activities</strong> – Encouraging participation in various cultural programs and sports to promote a healthy mind and body.</li>
              <li><strong>Community Engagement</strong> – Instilling social responsibility through community service initiatives.</li>
            </ul>

            <h2 className="mt-12 flex items-center gap-2.5">
              <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Message from the HOD
            </h2>
            <div className="mt-4 flex items-start gap-4">
              <img
                src={hodDeepaSujith}
                alt="Mrs. Deepa Sujith"
                className="h-16 w-16 shrink-0 rounded-full border border-cc-gray-200 object-cover object-top"
              />
              <div>
                <p className="font-semibold text-cc-text-heading">Mrs. Deepa Sujith &ndash; HOD, I/C</p>
                <p className="mt-2 text-cc-text-body leading-relaxed text-justify">
                  Welcome to the Department of Commerce at Christ College, Pune—a center of excellence where education meets transformation. Established in 2007 with the B. Com program and expanded in 2010 with the introduction of the M. Com program, the department has continually evolved as a hub of academic and professional excellence. Our mission is to offer top-quality education and training that shapes careers for a sustainable and dynamic corporate world. By providing academically rigorous and professionally relevant teaching in accounting and finance, we prepare our students to excel in their careers while equipping them to tackle life’s challenges with confidence.
                </p>
                <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
                  We go beyond conventional academics by offering a range of value-added programs designed to enhance expertise and skills in various dimensions. Whether through group mentoring, personalized guidance, or opportunities for collaborative research and publications, our department is committed to nurturing every student’s potential and transforming them into impeccable professionals. At Christ, we believe in pushing boundaries, inspiring students to exceed their own expectations, and setting the foundation for a bright future.
                </p>
                <p className="mt-4 text-cc-text-body leading-relaxed text-justify">
                  Our greatest strength lies in our experienced and dedicated faculty—a diverse and dynamic team committed to empowering students to explore their capabilities, transform their lives, and achieve success through innovative teaching-learning processes. Their unwavering commitment has been instrumental in the department earning recognition and accolades, reflecting the quality and impact of our efforts. On behalf of the Department of Commerce, I extend a warm welcome to all vibrant and aspiring students. We invite you to join us on this transformative journey of learning, growth, and success as we strive to become a premier centre of excellence in education.
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
                &ldquo;Cultivating leaders, shaping futures &ndash; empowering minds, creating excellence.&rdquo;
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-xs uppercase tracking-wide text-cc-text-muted-light flex items-center gap-1.5">
                <AwardIcon className="h-3.5 w-3.5 text-cc-primary shrink-0" />
                Mission
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-cc-text-muted-light">
                &ldquo;To educate and train students in finance and accounting, instilling strong analytical skills, ethical values, and leadership qualities while fostering innovation, research and community engagement to prepare them for successful careers and contributing to society.&rdquo;
              </p>
            </div>

            <h3 className="mt-6 text-base font-bold text-cc-text-heading flex items-center gap-2">
              <AcademicCapIcon className="h-5 w-5 text-cc-primary shrink-0" />
              Programmes Offered
            </h3>
              <p className="mt-3 text-xs uppercase tracking-wide text-cc-text-muted-light">Undergraduate</p>
              <ul className="mt-2 flex flex-col gap-2">
                <li>
                  <Link
                    to="/academics/department-of-commerce/bcom-bachelor-of-commerce"
                    className="group flex items-center justify-between gap-2 rounded-cc-md border border-cc-gray-200 bg-cc-bg-page px-4 py-2.5 text-sm font-medium text-cc-text-body shadow-cc-sm transition-colors hover:border-cc-primary hover:bg-cc-primary/5 hover:text-cc-primary"
                  >
                    BCom (Bachelor of Commerce)
                    <ChevronDownIcon
                      width={14}
                      height={14}
                      className="-rotate-90 shrink-0 text-cc-text-muted-light transition-colors group-hover:text-cc-primary"
                    />
                  </Link>
                </li>
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wide text-cc-text-muted-light">Postgraduate</p>
              <ul className="mt-2 flex flex-col gap-2">
                <li>
                  <Link
                    to="/academics/department-of-commerce/mcom-master-of-commerce"
                    className="group flex items-center justify-between gap-2 rounded-cc-md border border-cc-gray-200 bg-cc-bg-page px-4 py-2.5 text-sm font-medium text-cc-text-body shadow-cc-sm transition-colors hover:border-cc-primary hover:bg-cc-primary/5 hover:text-cc-primary"
                  >
                    MCom (Master of Commerce)
                    <ChevronDownIcon
                      width={14}
                      height={14}
                      className="-rotate-90 shrink-0 text-cc-text-muted-light transition-colors group-hover:text-cc-primary"
                    />
                  </Link>
                </li>
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
            {ACTIVITIES.map((a) =>
              a.path ? (
                <Link
                  key={a.name}
                  to={a.path}
                  className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm transition-colors hover:border-cc-primary"
                >
                  <img src={a.image} alt={a.name} className="h-40 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-base">{a.name}</h3>
                    <p className="mt-1 text-sm text-cc-text-muted-light">{a.description}</p>
                  </div>
                </Link>
              ) : (
                <div key={a.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm">
                  <img src={a.image} alt={a.name} className="h-40 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-base">{a.name}</h3>
                    <p className="mt-1 text-sm text-cc-text-muted-light">{a.description}</p>
                  </div>
                </div>
              )
            )}
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

