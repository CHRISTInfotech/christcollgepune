import TabbedContentPage from './TabbedContentPage';
import { UsersIcon, AcademicCapIcon, GlobeIcon, DownloadIcon } from './icons';
import councilBanner from '../assets/images/5-students-student-council/council-banner.png';
import members2223 from '../assets/studentlife/SC/Student Council Members 22-23.pdf';
import members2324 from '../assets/studentlife/SC/Student Council Members 23-24.pdf';

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
      description="The Student Council is the apex student body at Christ College, Pune, integrating academic and co-curricular life and linking students, faculty and administration. Read its role, Constitution, and member lists."
      bannerImage={councilBanner}
      bannerAlt="Student Council members of Christ College Pune on stage at a college event"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'constitution', label: 'Constitution', render: () => <ConstitutionTab /> },
        { key: 'members', label: 'Members', render: () => <MembersTab /> },
      ]}
    />
  );
}
