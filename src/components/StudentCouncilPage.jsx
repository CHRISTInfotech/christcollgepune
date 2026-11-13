import TabbedContentPage from './TabbedContentPage';
import ImageCarousel from './ImageCarousel';
import CentreVisionMission from './CentreVisionMission';
import { UsersIcon, AcademicCapIcon, GlobeIcon, DownloadIcon } from './icons';
import councilBanner from '../assets/images/5-students-student-council/council-banner.png';
import members2223 from '../assets/studentlife/SC/Student Council Members 22-23.pdf';
import members2324 from '../assets/studentlife/SC/Student Council Members 23-24.pdf';
import cresita1 from '../assets/images/gallery/cresita/1.jpg';
import cresita2 from '../assets/images/gallery/cresita/2.jpg';
import cresita3 from '../assets/images/gallery/cresita/3.jpg';
import cresita4 from '../assets/images/gallery/cresita/4.jpg';
import cresita5 from '../assets/images/gallery/cresita/5.jpg';
import cresita6 from '../assets/images/gallery/cresita/6.jpg';
import teachersDay1 from '../assets/images/gallery/teachers-day-sc/1.jpg';
import teachersDay2 from '../assets/images/gallery/teachers-day-sc/2.jpg';
import teachersDay3 from '../assets/images/gallery/teachers-day-sc/3.jpg';
import teachersDay4 from '../assets/images/gallery/teachers-day-sc/4.jpg';
import teachersDay5 from '../assets/images/gallery/teachers-day-sc/5.jpg';
import teachersDay6 from '../assets/images/gallery/teachers-day-sc/6.jpg';
import leadership1 from '../assets/images/gallery/leadership-training-workshop/1.jpg';
import leadership2 from '../assets/images/gallery/leadership-training-workshop/2.jpg';
import leadership3 from '../assets/images/gallery/leadership-training-workshop/3.jpg';
import leadership4 from '../assets/images/gallery/leadership-training-workshop/4.jpg';
import leadership5 from '../assets/images/gallery/leadership-training-workshop/5.jpg';
import leadership6 from '../assets/images/gallery/leadership-training-workshop/6.jpg';

const CRESITA_IMAGES = [cresita1, cresita2, cresita3, cresita4, cresita5, cresita6];
const TEACHERS_DAY_IMAGES = [teachersDay1, teachersDay2, teachersDay3, teachersDay4, teachersDay5, teachersDay6];
const LEADERSHIP_IMAGES = [leadership1, leadership2, leadership3, leadership4, leadership5, leadership6];

const ACTIVITIES = [
  {
    name: 'Investiture Ceremony',
    description: 'The formal ceremony marking the formation of the new Student Council, where incoming members take charge from the outgoing council for the academic year.',
  },
  {
    name: 'Independence Day',
    description: 'The Student Council organises the Independence Day flag-hoisting and cultural programme on campus, marking the occasion with patriotic fervour.',
  },
  {
    name: "Teacher's Day",
    images: TEACHERS_DAY_IMAGES,
    description: "Students came together to celebrate and honour their teachers through performances, tributes and a programme organised by the Student Council to mark Teacher's Day.",
  },
  {
    name: 'Crescita — Inter Junior College Fest',
    images: CRESITA_IMAGES,
    description: 'An inter-junior-college fest organised by the Student Council, bringing together junior college students from across the city for a day of competitions and cultural events.',
  },
  {
    name: 'Leadership Training Workshop',
    images: LEADERSHIP_IMAGES,
    description: 'A workshop for Student Council members and class representatives focused on building leadership, communication and event-management skills.',
  },
  {
    name: 'Joy of Giving',
    description: 'A charity drive organised by the Student Council collecting essentials and contributions for underprivileged communities, encouraging students towards social responsibility.',
  },
  {
    name: 'Daksh',
    description: 'A Student Council initiative aimed at skill-building and student development, organised on campus for the student community.',
  },
  {
    name: 'Voters Awareness Programme',
    description: 'An awareness programme encouraging students to register as voters and understand the importance of civic and electoral participation.',
  },
];

const MISSION_POINTS = [
  { title: 'Empower Leadership', description: 'Nurture confident, accountable and proactive leaders equipped to lead with vision, integrity and purpose.' },
  { title: 'Unlock Potential', description: 'Discover, develop and amplify students’ talents, strengths and capabilities through diverse opportunities and experiences.' },
  { title: 'Foster Excellence', description: 'Cultivate creativity, innovation, collaboration and a relentless pursuit of excellence.' },
  { title: 'Champion Engagement', description: 'Inspire active participation, inclusivity and meaningful contributions to campus life and society.' },
  { title: 'Drive Transformation', description: 'Instil values of responsibility, resilience, empathy and social commitment to shape changemakers beyond the classroom.' },
];

const PILLARS = [
  {
    icon: UsersIcon,
    title: 'Student-Led',
    description:
      'The apex student body of the college, responsible for the welfare of students and the smooth functioning of all activities and student bodies — a body of the students, by the students and for the students.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Academic + Co-Curricular Bridge',
    description:
      'Integrates the academic and co-curricular spheres of student life, linking the out-of-class experience to the academic mission of the Institute.',
  },
  {
    icon: GlobeIcon,
    title: 'Collaborative Partnership',
    description:
      'Collaborates with students, faculty, administrators, and other partners both inside and outside the Christ College Pune community to improve the quality of student life and learning.',
  },
];

const OBJECTIVES = [
  'To act as a link between the student, teachers and management',
  'To bring social awareness amongst students by conducting society-based activities',
  'To achieve the goal of personality development of the students',
  'To strengthen relationships among students through various healthy practices',
  'To organize educational and recreational activities for students',
  "To participate in developing the institute's educational projects and to promote it to students",
  'To organize an activity to recognise the efforts of students involved in organizing institute activities',
];

const MEMBER_LISTS = [
  { year: '2023 – 24', file: members2324 },
  { year: '2022 – 23', file: members2223 },
];

function HomeTab() {
  return (
    <>
      <div className="max-w-3xl">
        <h2>About the Council</h2>
        <p className="mt-4 text-cc-text-body">
          The Student Council is the apex body of the college which is responsible for the
          welfare of students in the college by ensuring the smooth functioning of all the
          activities and student bodies. It is a body of the students, by the students and
          for the students.
        </p>
        <p className="mt-4 text-cc-text-body">
          It integrates the academic and co-curricular spheres of students&rsquo; lives,
          linking the out-of-class experience to the academic mission of the Institute and
          incorporating students&rsquo; intellectual, public service, and leadership interests
          with their future aspirations. It collaborates with students, faculty,
          administrators, and other partners both inside and outside of the Christ College
          Pune community to ease and complement the quality of life and learning for students.
        </p>
      </div>

      <CentreVisionMission
        vision="To ignite the spirit of leadership, cultivate a culture of excellence and empower a generation of visionary, resilient and socially responsible individuals who inspire change, challenge conventions and shape the future."
        mission={MISSION_POINTS}
      />

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
    </>
  );
}

function ConstitutionTab() {
  return (
    <div className="max-w-3xl">
      <h2>Composition</h2>
      <p className="mt-4 text-cc-text-body">
        The Student Council comprises student representatives chosen from all Undergraduate
        (UG) and Postgraduate (PG) programmes of the College. The Student Council is the apex
        student body, and the number of members may vary every academic year based on the new
        programmes and cells introduced by the College. The Student Council also includes one
        representative each from the Department of Physical Education, Student Cultural
        Association (SCA), Women&rsquo;s Cell and National Service Scheme (NSS), nominated by
        the Directors/Coordinators of the respective Centres or Offices.
      </p>
      <p className="mt-4 text-cc-text-body">
        The Student Council acts as a responsible and collaborative body contributing to the
        council&rsquo;s Vision, Mission, Core Values, and Graduate Attributes. It refrains
        from being an association or a bargaining agency of the students.
      </p>

      <h2 className="mt-10">Objectives</h2>
      <ul className="mt-4 flex flex-col gap-2">
        {OBJECTIVES.map((item) => (
          <li key={item} className="flex items-start gap-2 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-10">Member Nomination Procedure &amp; Tenure</h2>
      <p className="mt-4 text-cc-text-body">
        Any student fulfilling the eligibility criteria &mdash; such as academic performance,
        participation in departmental events and activities, holistic skills, and general
        standing &mdash; is eligible to apply for the council. The application form is
        submitted to the Student Council Director. The Faculty Coordinators of the Student
        Council then review the applications and interview the candidates; based on the
        personal interview and other achievements, two candidates are selected to represent
        the Council from each class.
      </p>
      <p className="mt-4 text-cc-text-body">
        The normal membership tenure is one year and is renewable based on fresh nomination.
        Nomination of senior students to the Council of the ensuing year takes place in May
        every year, while nominations of first-year students take place in September every
        year. At the end of every year, the incumbent Student Council hands over its functions
        to the new Student Council during the Investiture Ceremony.
      </p>
    </div>
  );
}

function ActivitiesTab() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {ACTIVITIES.map((item) => (
        <div
          key={item.name}
          className="group relative overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-cc-md"
        >
          <div className="relative">
            {item.images ? (
              <ImageCarousel images={item.images} alt={item.name} className="h-32 w-full" />
            ) : (
              <div className="h-32 w-full bg-gradient-to-br from-cc-primary to-cc-primary-deeper" />
            )}
            <span className="absolute -bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-cc-bg-card bg-cc-primary text-white shadow-cc-sm">
              <UsersIcon className="h-4 w-4" />
            </span>
          </div>
          <div className="p-4 pt-6">
            <h4 className="text-sm font-semibold leading-snug break-words">{item.name}</h4>
            <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light line-clamp-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MembersTab() {
  return (
    <div className="max-w-3xl">
      <h2>Member Lists</h2>
      <p className="mt-4 text-cc-text-body">
        Student Council member lists by academic year, published as PDF documents.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {MEMBER_LISTS.map((item) => (
          <a
            key={item.year}
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Academic Year {item.year}</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function StudentCouncilPage({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Student Council"
      breadcrumbSection="Centres & Cells"
      description="The Student Council is the apex student body at Christ College, Pune, integrating academic and co-curricular life and linking students, faculty and administration. Read its role, Constitution, and member lists."
      bannerImage={councilBanner}
      bannerAlt="Student Council members of Christ College Pune on stage at a college event"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'activities', label: 'Activities', render: () => <ActivitiesTab /> },
        { key: 'constitution', label: 'Constitution', render: () => <ConstitutionTab /> },
        { key: 'members', label: 'Members', render: () => <MembersTab /> },
      ]}
    />
  );
}
