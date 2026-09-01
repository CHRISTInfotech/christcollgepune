import TabbedContentPage from '../../components/TabbedContentPage';
import { UsersIcon, CompassIcon, AwardIcon, BuildingIcon, BookIcon, GlobeIcon, MapPinIcon } from '../../components/icons';
import campusLifeBanner from '../../assets/home/campusLife_20260716095700.jpg';
import cafeteriaImg from '../../assets/home/CampusFacilitiesRecreationalAreas.jpg';
import libraryImg from '../../assets/home/CampusFacilitiesLibrary.jpg';
import sportsImg from '../../assets/home/CampusFacilitiesPlayground.jpg';
import labsImg from '../../assets/home/CampusFacilitiesLab.jpg';
import healthImg from '../../assets/home/CampusFacilitiesHealthandWlniness.jpg';
import itImg from '../../assets/home/CampusFacilitiesITService.png';

const PILLARS = [
  {
    icon: UsersIcon,
    title: 'Holistic Community',
    description:
      'A welcoming, diverse, and inclusive multicultural campus that fosters lifelong friendships, personal growth, and strong ethical values.',
  },
  {
    icon: CompassIcon,
    title: 'Dynamic Student Engagement',
    description:
      'From clubs, leadership councils, and cultural fests to sports championships, life at Christ College is constantly vibrant and engaging.',
  },
  {
    icon: AwardIcon,
    title: 'Nurturing & Safe Environment',
    description:
      'Comprehensive student support including personal faculty mentorship, wellness counselling, anti-ragging oversight, and health services.',
  },
];

const CAMPUS_SPACES = [
  {
    title: 'Modern Library & Digital Information Centre',
    description:
      'A serene, expansive repository of academic knowledge housing thousands of reference books, peer-reviewed journals, e-books, and digital database access.',
    image: libraryImg,
    tag: 'Academic Hub',
  },
  {
    title: 'State-of-the-Art IT & Science Laboratories',
    description:
      'Equipped with advanced computing hardware, high-speed campus network, and scientific instrumentation for hands-on experimentation and research.',
    image: labsImg,
    tag: 'Practical Learning',
  },
  {
    title: 'Sports Grounds & Fitness Facilities',
    description:
      'Extensive sports infrastructure supporting basketball, football, volleyball, cricket, badminton, and indoor games for holistic physical fitness.',
    image: sportsImg,
    tag: 'Athletics & Recreation',
  },
  {
    title: 'Recreational Pavilions & Green Spaces',
    description:
      'Shaded groves, open-air seating alcoves, and amphitheatre spaces where students collaborate, socialize, and conduct artistic rehearsals.',
    image: cafeteriaImg,
    tag: 'Social Life',
  },
  {
    title: 'Health, Wellness & Counselling Centre',
    description:
      'Dedicated on-campus mental health support, emotional counselling, first-aid medical response, and regular wellness workshops.',
    image: healthImg,
    tag: 'Well-being',
  },
  {
    title: 'High-Tech Digital Campus & IT Network',
    description:
      'Campus-wide Wi-Fi connectivity, smart classrooms, Orbis ERP integration, and seamless digital access for students and faculty.',
    image: itImg,
    tag: 'Digital Infrastructure',
  },
];

const STUDENT_EXPERIENCES = [
  {
    title: 'Vibrant Cultural Life',
    description:
      'Annual cultural extravaganzas such as Chrysalis, Aaghaz, Bhasha Utsav (Ethnic Day), and Gloria bring energy, diversity, and artistic flair to campus.',
  },
  {
    title: 'Leadership & Student Governance',
    description:
      'The Student Council and various cell committees offer real leadership platforms to represent peers, drive initiatives, and organize major college festivals.',
  },
  {
    title: 'Community Outreach & Service',
    description:
      'Through the National Service Scheme (NSS) and social awareness cells, students actively participate in rural camps, blood donation drives, and environmental conservation.',
  },
  {
    title: 'Mentorship & Career Preparation',
    description:
      'One-on-one faculty mentoring sessions, corporate workshops, resume building bootcamps, and placement guidance prepare students for top career opportunities.',
  },
];

function OverviewTab() {
  return (
    <>
      <div className="max-w-3xl">
        <h2>Life at Christ College Pune</h2>
        <p className="mt-4 text-cc-text-body">
          At Christ College Pune, education extends far beyond traditional lecture halls. Campus life is
          an inspiring blend of rigorous academics, thriving cultural celebrations, competitive athletics,
          meaningful community service, and personalized mentorship. We create an ecosystem where every student
          is encouraged to explore their passions, build leadership qualities, and achieve their fullest potential.
        </p>
        <p className="mt-4 text-cc-text-body">
          Surrounded by scenic greenery and modern infrastructure, the campus provides a safe, welcoming,
          and intellectually stimulating space where students from diverse cultural backgrounds come together to
          learn, create, and excel.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <pillar.icon width={22} height={22} />
            </span>
            <h3 className="mt-4 text-base">{pillar.title}</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">{pillar.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-cc-lg border border-cc-primary/20 bg-cc-primary/5 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-cc-primary">The Christite Experience</h3>
        <p className="mt-2 text-sm leading-relaxed text-cc-text-body">
          Being a Christite means embracing excellence in character, intellect, and social responsibility.
          With a balanced focus on academic rigor, moral values, extracurricular passions, and professional readiness,
          students graduate not only with a degree, but as well-rounded, ethical, and empathetic global citizens.
        </p>
      </div>
    </>
  );
}

function FacilitiesTab() {
  return (
    <div>
      <div className="max-w-3xl">
        <h2>Campus Infrastructure &amp; Spaces</h2>
        <p className="mt-4 text-cc-text-body">
          Our purpose-built campus provides students with state-of-the-art facilities designed to enrich
          both their academic journey and their everyday campus experience.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CAMPUS_SPACES.map((space) => (
          <div
            key={space.title}
            className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface shadow-cc-sm transition-all duration-[350ms] hover:shadow-cc"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={space.image}
                alt={space.title}
                className="h-full w-full object-cover transition-transform duration-[350ms] hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-3 top-3 rounded-cc-pill bg-cc-primary/90 px-3 py-1 text-xs font-semibold text-cc-white backdrop-blur-sm">
                {space.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold text-cc-text-heading">{space.title}</h3>
              <p className="mt-2 text-sm text-cc-text-muted-light">{space.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentExperienceTab() {
  return (
    <div className="max-w-3xl">
      <h2>Student Life &amp; Development</h2>
      <p className="mt-4 text-cc-text-body">
        A diverse range of extracurricular avenues, student-led initiatives, and supportive committees empower
        every student to find their voice and make meaningful contributions.
      </p>

      <div className="mt-8 flex flex-col gap-6">
        {STUDENT_EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.title}
            className="flex items-start gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cc-primary text-sm font-bold text-cc-white">
              {idx + 1}
            </span>
            <div>
              <h3 className="text-base font-bold text-cc-text-heading">{exp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cc-text-body">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
        <h3 className="text-base font-bold text-cc-text-heading flex items-center gap-2">
          <BuildingIcon className="h-5 w-5 text-cc-primary" />
          Campus Support Cells
        </h3>
        <p className="mt-2 text-sm text-cc-text-muted-light">
          Christ College operates dedicated student welfare bodies including the Anti-Ragging Cell,
          Equal Opportunity Cell, Grievance Redressal Cell, Internal Complaints Committee (ICC),
          and Electoral Literacy Club to ensure a safe, supportive, and empowering environment.
        </p>
      </div>
    </div>
  );
}

export default function CampusLifeStudentLife({ initialTab = 'overview' }) {
  return (
    <TabbedContentPage
      pageTitle="Campus Life"
      description="Experience student life at Christ College Pune - where academic rigor, vibrant cultural fests, sports championships, and holistic student support create an unforgettable college journey."
      bannerImage={campusLifeBanner}
      bannerAlt="Students gathered and enjoying campus life at Christ College Pune"
      initialTab={initialTab}
      tabs={[
        { key: 'overview', label: 'Overview', render: () => <OverviewTab /> },
        { key: 'facilities', label: 'Facilities & Spaces', render: () => <FacilitiesTab /> },
        { key: 'student-experience', label: 'Student Experience', render: () => <StudentExperienceTab /> },
      ]}
    />
  );
}
