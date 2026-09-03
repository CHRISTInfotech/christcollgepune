import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import { ChevronDownIcon, BuildingIcon, GridIcon, UsersIcon, AwardIcon, CompassIcon, AcademicCapIcon } from '../../components/icons';
import departmentBanner from '../../assets/images/3-academics-department-of-science-department-page/department-banner.JPG';
import hodNilimaShingate from '../../assets/images/3-academics-department-of-science-department-page/hod-nilima-shingate.jpg';
import events from '../../assets/images/3-academics-department-of-science-department-page/events.JPG';
import ccsa from '../../assets/images/3-academics-department-of-science-department-page/ccsa.jpg';
import clubActivities from '../../assets/images/3-academics-department-of-science-department-page/club-activities.JPG';
import facultyPublications from '../../assets/images/3-academics-department-of-science-department-page/faculty-publications.jpg';
import testimonialAbith from '../../assets/images/3-academics-department-of-science-department-page/testimonial-abith-k-sunil.png';
import testimonialJuliet from '../../assets/images/3-academics-department-of-science-department-page/testimonial-juliet-jenny.png';
import testimonialKirti from '../../assets/images/3-academics-department-of-science-department-page/testimonial-kirti-nikam.jpg';
import achievementSandesh from '../../assets/images/3-academics-department-of-science-department-page/achievement-sandesh-waghmare.jpg';
import achievementBharat1 from '../../assets/images/3-academics-department-of-science-department-page/achievement-bharat-singh-rajpurohit-1.png';
import achievementDouglas from '../../assets/images/3-academics-department-of-science-department-page/achievement-douglas-fernandes.png';
import achievementRiddhi from '../../assets/images/3-academics-department-of-science-department-page/achievement-bhorde-riddhi.jpg';
import achievementBharat2 from '../../assets/images/3-academics-department-of-science-department-page/achievement-bharat-singh-rajpurohit-2.png';
import achievementSiddhi from '../../assets/images/3-academics-department-of-science-department-page/achievement-bhorde-siddhi.jpg';
import achievementMritunjay from '../../assets/images/3-academics-department-of-science-department-page/achievement-mritunjay-singh.png';
import achievementAditya from '../../assets/images/3-academics-department-of-science-department-page/achievement-walte-aditya.png';

const PROGRAMMES = {
  undergraduate: [
    { label: 'BSc (Bachelor of Computer Science)', path: '/academics/department-of-science/bsc-bachelor-of-computer-science' },
    { label: 'BSc (Data Science)', path: '/academics/department-of-science/bsc-data-science' },
  ],
  postgraduate: [
    { label: 'MSc (Master of Computer Science)', path: '/academics/department-of-science/msc-master-of-computer-science' },
  ],
};

const MISSION_POINTS = [
  { title: 'Shaping Future Innovators', description: 'Providing students with a comprehensive education in computer science, equipping them with the knowledge, skills, and problem-solving abilities necessary for success in the field.' },
  { title: 'Advancing the Field', description: 'Contributing to the ongoing progress of computer science by developing cutting-edge technologies and applications and fostering innovation.' },
  { title: 'Making an Impact', description: 'Utilizing computing technology to serve our community and industry partners, addressing real-world challenges and promoting practical solutions.' },
];

const ACTIVITIES = [
  { name: 'Festivals', description: 'Department festivals and technical fests held throughout the academic year.', image: events, path: '/academics/department-of-science/festivals' },
  { name: 'CCSA', description: 'Christ College Science Association (CCSA) and its events.', image: ccsa, path: '/academics/department-of-science/association' },
  { name: 'Activities', description: 'Workshops, seminars, corporate talks and field visits organised by the department.', image: clubActivities, path: '/academics/department-of-science/activities' },
  { name: 'Faculty Publications', description: 'Research and publications by department faculty.', image: facultyPublications, path: '/academics/department-of-science/faculty-publications' },
];

const ACHIEVEMENTS = [
  {
    name: 'Sandesh Waghmare',
    programme: 'SY MSc Computer Science',
    description: '61st rank globally in the Cyber Apocalypse CTF 2025 – Tales from Eldoria, organized by Hack The Box.',
    photo: achievementSandesh,
  },
  {
    name: 'Bharat Singh Rajpurohit',
    programme: 'SY BSc Computer Science',
    description: 'First position in the "C Champion" competition at HV Desai College’s Desai Karandak event.',
    photo: achievementBharat1,
  },
  {
    name: 'Douglas Fernandes',
    programme: 'SY BSc Computer Science',
    description: 'First position in the "C Champion" competition at HV Desai College’s Desai Karandak event.',
    photo: achievementDouglas,
  },
  {
    name: 'Bhorde Riddhi',
    description: '"Startup Winner" at AMC Hackathon 2K25 under the "Innovative Idea/Startup Vision" category.',
    photo: achievementRiddhi,
  },
  {
    name: 'Bharat Singh Rajpurohit',
    programme: 'SY BSc Computer Science',
    description: 'Winner of BugBundy, a time-based error detection competition on Java code.',
    photo: achievementBharat2,
  },
  {
    name: 'Bhorde Siddhi',
    description: '"Startup Winner" at AMC Hackathon 2K25 under the "Innovative Idea/Startup Vision" category.',
    photo: achievementSiddhi,
  },
  {
    name: 'Mritunjay Singh',
    description: '"Startup Winner" at AMC Hackathon 2K25 under the "Innovative Idea/Startup Vision" category.',
    photo: achievementMritunjay,
  },
  {
    name: 'Walte Aditya',
    description: '"Startup Winner" at AMC Hackathon 2K25 under the "Innovative Idea/Startup Vision" category.',
    photo: achievementAditya,
  },
];

const TESTIMONIALS = [
  {
    name: 'Abith K Sunil',
    programme: 'BSc Computer Science',
    photo: testimonialAbith,
    quote: 'I am immensely grateful for my journey at Christ College Pune, where I pursued my Bachelor of Science in Computer Science. The college provided an excellent academic environment, well-structured curriculum, and state-of-the-art facilities that enhanced my learning experience. The faculty members were highly knowledgeable and supportive, always encouraging us to think critically and apply our knowledge practically.',
  },
  {
    name: 'Juliet Jenny',
    programme: 'BSc Computer Science',
    photo: testimonialJuliet,
    quote: 'I am grateful for my enriching academic journey at Christ College Pune, where I completed my BSc in Computer Science. The college provided a strong foundation with its excellent faculty, well-structured curriculum, and practical learning opportunities. Beyond academics, the supportive environment and co-curricular activities helped shape my skills and confidence.',
  },
  {
    name: 'Kirti Nikam',
    programme: 'BCA & MCA',
    photo: testimonialKirti,
    quote: 'My time at Christ College, Pune, in the Department of Computer Science was a transformative experience that shaped both my personal and professional growth. Completing my Bachelor of Computer Applications (BCA) and Master of Computer Applications (MCA) here provided me with a solid foundation in computer science. The faculty members played a pivotal role in my development.',
  },
];

export default function DepartmentOfSciencePage() {
  return (
    <>
      <Seo
        title="Department of Science"
        description="The Department of Science (Computer Science) at Christ College, Pune, established in 2007, offers BSc Computer Science, BSc Data Science and MSc Computer Science, led by HOD Mrs Nilima Shingate, with project-based learning and state-of-the-art labs."
      />
      <PageHeader
        title="Department of Science"
        breadcrumbs={[{ label: 'Department of Science' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={departmentBanner}
          alt="Department of Science"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="flex items-center gap-2.5">
              <BuildingIcon className="h-6 w-6 text-cc-primary shrink-0" />
              About the Department
            </h2>
            <p className="mt-4 text-cc-text-body">
              The Department of Science at Christ College, established in 2007, is committed to
              delivering high-quality education in the field of science. The department offers
              undergraduate (B.Sc. in Computer Science) and postgraduate (M.Sc. in Computer
              Science) programs designed to equip students with a strong academic foundation and
              practical skills. Our dedicated and highly qualified faculty members create an
              intellectually stimulating environment, utilizing innovative teaching approaches
              such as project-based learning and experiential learning. These methods enhance
              student engagement and foster a deeper understanding of the subject matter.
            </p>
            <p className="mt-4 text-cc-text-body">
              The department is equipped with state-of-the-art laboratories for each course,
              offering students abundant opportunities for practical, hands-on learning. Beyond
              academics, we also organize a wide range of co-curricular and extracurricular
              activities that foster the holistic development of our students, ensuring they are
              well-prepared for both professional and personal success.
            </p>

            <h2 className="mt-10 flex items-center gap-2.5">
              <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Department Overview
            </h2>
            <p className="mt-4 text-cc-text-body">
              The B.Sc. (Computer Science) is a well-structured four-year degree (Honours)
              program offered by the Faculty of Science and Technology. The primary objective of
              this course is to equip students with the knowledge and skills necessary for
              careers in problem-solving using computer science and technology or to pursue
              advanced studies and research in the field.
            </p>
            <p className="mt-4 text-cc-text-body">
              The curriculum integrates core Computer Science subjects alongside foundational
              courses in Mathematics, Electronics, and Statistics, providing a comprehensive
              understanding of computing sciences. This approach ensures students develop both
              the theoretical knowledge and the practical problem-solving skills required to
              excel in the rapidly evolving field of computer science.
            </p>

            <h2 className="mt-10 flex items-center gap-2.5">
              <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Message from the HOD
            </h2>
            <div className="mt-4 flex items-start gap-4">
              <img
                src={hodNilimaShingate}
                alt="Mrs. Nilima Shingate"
                className="h-16 w-16 shrink-0 rounded-full border border-cc-gray-200 object-cover object-top"
              />
              <div>
                <p className="font-semibold text-cc-text-heading">Mrs. Nilima Shingate &ndash; Head of Department</p>
                <p className="mt-2 text-cc-text-body">
                  &ldquo;Welcome to the Department of Science at Christ College, Pune. In 2007, we
                  established our department with the vision of producing academically, morally,
                  and ethically sound IT professionals. As interest in Computer Science has grown,
                  we have expanded our expertise and proficiency to advance our students. Our
                  department has consistently focused on equipping students with the essential
                  social skills required to thrive in the fast-evolving landscape of IT and
                  research.
                </p>
                <p className="mt-3 text-cc-text-body">
                  Our curriculum is designed to provide comprehensive technological knowledge,
                  enhance problem-solving abilities, inspire innovation, and nurture a passion for
                  research. To stay aligned with current trends, the curriculum is regularly
                  updated to reflect the latest advancements in science and technology. The MSc in
                  Computer Science was introduced to bridge the gap between academic knowledge and
                  industry needs.
                </p>
                <p className="mt-3 text-cc-text-body">
                  The program covers a wide range of topics, including operating systems,
                  networks, object-oriented programming, and data analysis. By the time students
                  complete their education, they are well-prepared for a seamless transition into
                  the workforce.&rdquo;
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
                &ldquo;To be a recognized leader in delivering exceptional technical education, fostering a research-driven environment, and equipping students with the cutting-edge skills and practical experience needed to thrive in the ever-evolving computing industry and academia. Our ultimate goal is to contribute to societal progress by producing highly skilled graduates who make meaningful contributions to the field.&rdquo;
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-xs uppercase tracking-wide text-cc-text-muted-light flex items-center gap-1.5">
                  <AwardIcon className="h-3.5 w-3.5 text-cc-primary shrink-0" />
                  Mission
                </h4>
              <ul className="mt-2 flex flex-col gap-3">
                {MISSION_POINTS.map((m) => (
                  <li key={m.title} className="text-sm text-cc-text-muted-light">
                    <span className="font-semibold text-cc-text-heading">{m.title}:</span> {m.description}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-6 text-base font-bold text-cc-text-heading flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5 text-cc-primary shrink-0" />
                Programmes Offered
              </h3>
            <p className="mt-3 text-xs uppercase tracking-wide text-cc-text-muted-light">Undergraduate</p>
            <ul className="mt-2 flex flex-col gap-2">
              {PROGRAMMES.undergraduate.map((p) => (
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
            <p className="mt-4 text-xs uppercase tracking-wide text-cc-text-muted-light">Postgraduate</p>
            <ul className="mt-2 flex flex-col gap-2">
              {PROGRAMMES.postgraduate.map((p) => (
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
              <AwardIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Our Achievements
            </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a, index) => (
            <div key={`${a.name}-${index}`} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm">
              <img src={a.photo} alt={a.name} className="aspect-[16/9] w-full object-cover" />
              <div className="p-5">
                <h3 className="text-base">{a.name}</h3>
                {a.programme && <p className="text-xs uppercase tracking-wide text-cc-primary">{a.programme}</p>}
                <p className="mt-2 text-sm text-cc-text-muted-light">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="text-center flex items-center justify-center gap-2.5">
              <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Student Testimonials
            </h2>
          <div className="mt-10">
            <TestimonialCarousel testimonials={TESTIMONIALS} />
          </div>
        </div>
      </section>
    </>
  );
}
