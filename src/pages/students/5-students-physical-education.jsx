import TabbedContentPage from '../../components/TabbedContentPage';
import PdfViewer from '../../components/PdfViewer';
import { UsersIcon, AwardIcon, CompassIcon, BookIcon, BuildingIcon, EnvelopeIcon } from '../../components/icons';
import athleticsBanner from '../../assets/images/5-students-physical-education/athletics-banner.png';
import dinupChandran from '../../assets/images/2-about-us-faculty/dinup-chandran.png';
import sagarDhikale from '../../assets/images/2-about-us-faculty/sagar-dhikale.png';
import basketballCourts from '../../assets/studentlife/sports/basketball.png';
import cricketGround from '../../assets/studentlife/sports/cricket.png';
import footballGround from '../../assets/studentlife/sports/football.jpg';
import achievementsPdf from '../../assets/studentlife/sports/Achievements-Overview (2)_compressed.pdf';

const PILLARS = [
  {
    icon: UsersIcon,
    title: 'Holistic Development',
    description:
      'A nurturing ground that promotes students’ mental, social, and emotional development through physical education and sports.',
  },
  {
    icon: AwardIcon,
    title: 'Leadership & Teamwork',
    description:
      'Builds cooperative social skills, teamwork, peer interaction, leadership, sportsmanship and self-esteem through a comprehensive sports programme.',
  },
  {
    icon: CompassIcon,
    title: 'Good Citizenship',
    description:
      'Develops cooperation, respect for others, loyalty, sportsmanship and self-confidence — qualities that help a student become a good citizen.',
  },
];

const TEAM = [
  { name: 'Mr. Dinup Chandran', role: 'Director of Physical Education & Sports', photo: dinupChandran },
  { name: 'Mr. Sagar Dhikale', role: 'Director of Physical Education & Sports', photo: sagarDhikale },
];

const ACTIVITIES = [
  {
    name: 'Explorador',
    description:
      '‘Explorador’ is an intra-collegiate talent sports fest that explores and identifies talents in students through various sports. This platform allows students to develop their talents and skills in their favourite sport(s), encouraging them to reflect on their interests, values, and strengths.',
  },
  {
    name: 'Chrisliga Junior',
    description:
      'Chrisliga Junior is an inter-collegiate football and basketball championship where top junior colleges from across Pune compete, providing students with a platform to showcase their skills and sportsmanship.',
  },
  {
    name: 'Chrisliga',
    description:
      'Chrisliga Sports Fest is a premier inter-collegiate championship featuring football, cricket, volleyball, and basketball. Open to Universities and Colleges across Pune, the event provides a competitive platform for student athletes to showcase their talent, foster teamwork, and promote sportsmanship.',
  },
  {
    name: 'Chrysalis',
    description:
      'Chrysalis is an intra-collegiate sports fest featuring a diverse range of sports and games, fostering inter-departmental competition. It provides all students with the opportunity to showcase their talents, cultivate team spirit, and challenge their limits.',
  },
  {
    name: 'Olympism',
    description:
      'Olympism is an event organized to celebrate the Paris Olympics 2024, featuring dynamic activities including a flash mob dance performance and an engaging quiz competition — honoring the Olympic legacy while inspiring teamwork and excellence.',
  },
  {
    name: 'FIFA Mania',
    description:
      'In 2022, Christ College Pune organized "FIFA Mania", an event celebrating the FIFA World Cup. Football enthusiasts selected and promoted their favourite national teams within the campus, with various football-related mini-games enhancing the festive atmosphere.',
  },
];

const FACILITIES = [
  { name: 'Basketball Courts', photo: basketballCourts },
  { name: 'Cricket Ground', photo: cricketGround },
  { name: 'Football Ground', photo: footballGround },
];

const TEAM_ACHIEVEMENTS = [
  {
    sport: 'Football',
    items: [
      'Runners up at Savitribai Phule Pune University PDSC Inter-Collegiate Football Championship',
      'Winners at SPF Football Championship',
      'Runners up at Raisoni Inter-Collegiate Sports Carnival',
      'Winners at Chrisliga Inter-Collegiate Sports Tournament',
      'Winners at Symbiosis Inter-Collegiate Tournament',
    ],
  },
  {
    sport: 'Cricket',
    items: ['Runners up at Inter Parish Cricket Tournament'],
  },
  {
    sport: 'Basketball',
    items: ['Winners at Inter-seminary Chavara Cup 2022-23'],
  },
  {
    sport: 'Volleyball',
    items: ['Runners up in Chrisliga 2022-23'],
  },
];

const INDIVIDUAL_ACHIEVEMENTS = [
  'Vivian Bhosale (SY M.Com) and Vedant Mutkekar (SY B.Com) — 2 players selected to University Men’s Football Team to participate in the All India and West Zone Inter University Championship 2022-23 held at Jabalpur, MP.',
  'Vedant Mutkekar (SY B.Com), Pranay Dhage (TY B.Com) and Vivian Bhosale (SY M.Com) — 3 players selected to PDSC to participate in the Pune University Inter-Zone Football Tournament.',
  'Vivian Bhosale (Football) and Sejal Singh (Martial Arts) — winners of the Christ College Best Player of The Year award.',
];

function HomeTab() {
  return (
    <>
      <h2>About the Department</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The Physical Education Department is a nurturing ground that promotes students&rsquo;
        mental, social, and emotional development through physical education and sports. The
        department also aims to develop a comprehensive outlook of an individual with a strong
        civic position, moral qualities, sense of responsibility, an independent, initiative,
        tolerant person who is able to successfully socialize and to use different forms of
        physical education and sports in daily life to protect his or her own health and promote
        effective professional activities.
      </p>

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

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <BookIcon width={22} height={22} />
            </span>
            <h2 className="mt-0">Vision</h2>
          </div>
          <p className="mt-4 text-sm text-cc-text-muted-light">
            Comprehensive Physical Education and Sports program is dedicated to creating an
            environment that allows students to understand and to display cooperative social
            skills, teamwork, peer interaction, leadership, sportsmanship, positive attitude,
            self-esteem, and enjoyment. To enable students, change their attitude towards life
            like positive thinking, healthy criticism etc.
          </p>
        </div>

        <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <BuildingIcon width={22} height={22} />
            </span>
            <h2 className="mt-0">Mission</h2>
          </div>
          <p className="mt-4 text-sm text-cc-text-muted-light">
            Physical education and sports provide opportunities to develop qualities such as
            cooperation, respect to others, loyalty, sportsmanship and self-confidence. These
            qualities help a student to make him / her a good citizen.
          </p>
        </div>
      </div>

      <h2 className="mt-10">Reach Us</h2>
      <a
        href="mailto:sports@christcollegepune.org"
        className="mt-4 inline-flex items-center gap-3 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface px-5 py-3 transition-colors hover:border-cc-primary"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
          <EnvelopeIcon width={18} height={18} />
        </span>
        <span>
          <span className="block text-xs uppercase tracking-wide text-cc-text-muted-light">Email</span>
          <span className="block font-medium text-cc-primary">sports@christcollegepune.org</span>
        </span>
      </a>
    </>
  );
}

function OurTeamTab() {
  return (
    <div>
      <h2>Our Team</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((person) => (
          <div key={person.name} className="flex flex-col items-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 text-center shadow-cc-sm">
            <img
              src={person.photo}
              alt={person.name}
              className="h-24 w-24 rounded-full border border-cc-gray-200 object-cover object-top"
            />
            <p className="mt-4 font-semibold text-cc-text-heading">{person.name}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-cc-primary">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivitiesTab() {
  return (
    <div>
      <h2>Activities</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {ACTIVITIES.map((activity) => (
          <div key={activity.name} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <h3 className="text-base uppercase tracking-wide text-cc-primary">{activity.name}</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SportsFacilitiesTab() {
  return (
    <div>
      <h2>Sports Facilities</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.map((facility) => (
          <div key={facility.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface shadow-cc-sm">
            <img src={facility.photo} alt={facility.name} className="aspect-[4/3] w-full object-cover" />
            <p className="p-4 text-center font-semibold text-cc-text-heading">{facility.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AchievementsTab() {
  return (
    <div>
      <h2>Achievements</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {TEAM_ACHIEVEMENTS.map((group) => (
          <div key={group.sport} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <AwardIcon width={18} height={18} />
              </span>
              <h3 className="text-base uppercase tracking-wide text-cc-primary">{group.sport}</h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-cc-text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <UsersIcon width={18} height={18} />
          </span>
          <h3 className="text-base uppercase tracking-wide text-cc-primary">Individual Achievements 2022-23</h3>
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {INDIVIDUAL_ACHIEVEMENTS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-cc-text-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mt-10 text-base uppercase tracking-wide text-cc-primary">Full Achievements Overview</h3>
      <div className="mt-4">
        <PdfViewer fileUrl={achievementsPdf} title="Achievements Overview" />
      </div>
    </div>
  );
}

export default function PhysicalEducation({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Physical Education & Sports"
      breadcrumbLabel="Physical Education"
      description="The Department of Physical Education and Sports at Christ College, Pune nurtures students' mental, social and emotional development through sport, teamwork and healthy competition — team, activities, facilities and achievements."
      bannerImage={athleticsBanner}
      bannerAlt="College basketball teams and staff posing together on the court"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'our-team', label: 'Our Team', render: () => <OurTeamTab /> },
        { key: 'activities', label: 'Activities', render: () => <ActivitiesTab /> },
        { key: 'sports-facilities', label: 'Sports Facilities', render: () => <SportsFacilitiesTab /> },
        { key: 'achievements', label: 'Achievements', render: () => <AchievementsTab /> },
      ]}
    />
  );
}
