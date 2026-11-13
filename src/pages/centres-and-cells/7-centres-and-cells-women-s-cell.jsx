import TabbedContentPage from '../../components/TabbedContentPage';
import ImageCarousel from '../../components/ImageCarousel';
import CentreVisionMission from '../../components/CentreVisionMission';
import { DownloadIcon, CalendarIcon, UsersIcon } from '../../components/icons';
import membersPdf from '../../assets/studentlife/cells/WOMEN CELL MEMBERS(2).pdf';
import debate1 from '../../assets/images/gallery/debate/1.jpg';
import debate2 from '../../assets/images/gallery/debate/2.jpg';
import debate3 from '../../assets/images/gallery/debate/3.jpg';
import debate4 from '../../assets/images/gallery/debate/4.jpg';
import debate5 from '../../assets/images/gallery/debate/5.jpg';
import debate6 from '../../assets/images/gallery/debate/6.jpg';
import debate7 from '../../assets/images/gallery/debate/7.jpg';
import debate8 from '../../assets/images/gallery/debate/8.jpg';
import debate9 from '../../assets/images/gallery/debate/9.jpg';
import peaceWalk1 from '../../assets/images/gallery/peace-walk-against-trafficking/1.jpg';
import peaceWalk2 from '../../assets/images/gallery/peace-walk-against-trafficking/2.jpg';
import peaceWalk3 from '../../assets/images/gallery/peace-walk-against-trafficking/3.jpg';
import peaceWalk4 from '../../assets/images/gallery/peace-walk-against-trafficking/4.jpg';
import washroom1 from '../../assets/images/gallery/washroom-hygiene-session/1.jpg';
import washroom2 from '../../assets/images/gallery/washroom-hygiene-session/2.jpg';
import washroom3 from '../../assets/images/gallery/washroom-hygiene-session/3.jpg';
import washroom4 from '../../assets/images/gallery/washroom-hygiene-session/4.jpg';
import washroom5 from '../../assets/images/gallery/washroom-hygiene-session/5.jpg';

const DEBATE_IMAGES = [debate1, debate2, debate3, debate4, debate5, debate6, debate7, debate8, debate9];
const PEACE_WALK_IMAGES = [peaceWalk1, peaceWalk2, peaceWalk3, peaceWalk4];
const WASHROOM_IMAGES = [washroom1, washroom2, washroom3, washroom4, washroom5];

const ACTIVITIES = [
  {
    name: 'Debate Competition',
    date: '14 October 2026',
    images: DEBATE_IMAGES,
    description:
      'The Women’s Cell, in collaboration with the Department of Arts, organised an intercollegiate debate competition to encourage critical thinking, articulate expression, and meaningful discussions on gender equality and social awareness. The competition provided students with a platform to express diverse perspectives, strengthen their communication skills, and engage in constructive dialogue.',
  },
  {
    name: 'Session on “Clean Spaces, Healthy Habits: Promoting Washroom Etiquette and Hygiene”',
    date: '17 July 2026',
    images: WASHROOM_IMAGES,
    description:
      'The Women’s Cell organised an awareness session on washroom etiquette and hygiene to sensitise students about maintaining cleanliness, personal hygiene, and responsible use of common washroom facilities. The session emphasised the importance of shared responsibility, hygienic practices, and consideration for others in maintaining a clean and healthy campus environment.',
  },
  {
    name: 'Peace Walk Against Trafficking',
    date: '30 July 2026',
    images: PEACE_WALK_IMAGES,
    description:
      'The Women’s Cell collaborated with Asha Care Foundation to organise a Peace Walk Against Trafficking in Persons at Pune Junction Railway Station. Students participated in the walk to raise awareness about human trafficking, promote collective responsibility, and express solidarity with the cause of protecting human rights and dignity.',
  },
  {
    name: 'Garba Party for Staff',
    date: '4 October 2022',
    description:
      'To promote pleasure and a feeling of community, the Women Cell and the Department of Science organized a Garba party for staff members, drawing staff together and fostering a new sense of camaraderie.',
  },
  {
    name: 'Project Garjana — Self-Defence Workshop',
    date: '10 November 2022',
    description:
      'A joint Women Cell and NSS Unit project, "Garjana: A Roar for Empowerment", to strengthen female students by instilling self-esteem and confidence and teaching self-defence methods to protect them from abuse. Held in cooperation with the Sambo Sports Association of Maharashtra — Mr. Kumar Ugade and his team demonstrated martial arts techniques on the open platform, teaching basic self-defence information and skills.',
  },
  {
    name: 'The Legal Framework for Women',
    date: '17 November 2022',
    description:
      'A program for female students held with the Anti-Sexual Harassment Cell, where Ms. Rutuja Purohit spoke on "The Legal Framework for Women." Dr. Priya Wahab moderated a talk on the behaviour code, encouraging students to practice good sanitation and keep the campus tidy.',
  },
  {
    name: 'Gender Equity Talk',
    date: '5 January 2023',
    description:
      "During the NSS Special Winter Camp at Bakori village, Dr. Savita Kulkarni, NSS District Coordinator, gave a special talk on 'Gender Equity', on establishing an atmosphere where both men and women can contribute equally to society and business without facing abuse or bias based on gender.",
  },
  {
    name: 'Women Empowerment Workshop',
    date: '8 January 2023',
    description:
      "During the NSS Special Winter Camp at Bakori village, a workshop on 'Women Empowerment' was held. Up-Sarpanch of Bakori village Mrs. Droupati Santosh Warghade addressed students, stating that empowering women is crucial for attaining gender equality, supporting sustainable development, and creating a more just and equitable society.",
  },
  {
    name: "International Women's Day",
    date: '8 March 2023',
    description:
      "Staff and students gathered on campus to honour International Women's Day. The college's Women Cell, Student Council, and NSS Unit organized various events to honour and recognize women while increasing consciousness about gender equality. The women's support team was recognized for their efforts in keeping the campus clean, male faculty members and students arranged entertaining activities to celebrate female employees and students, and a film was posted on the college's Instagram account thanking the women who shared their Women's Day message.",
  },
];

function AboutTab() {
  return (
    <>
      <h2>About the Cell</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body leading-relaxed">
        The Women’s Cell at Christ College strives to establish a strong foundation for gender
        sensitisation and promote an inclusive, safe, and equitable campus environment.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body leading-relaxed">
        The Cell endeavours to empower and guide female students and employees to recognise their
        potential, build confidence and establish their identity in an increasingly competitive
        environment. Comprising faculty members and student representatives, the Cell works towards
        fostering a gender-sensitive and inclusive community.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body leading-relaxed">
        Through a range of activities, awareness programmes and initiatives, the Women’s Cell
        seeks to promote women’s empowerment, encourage gender equality and create opportunities
        for the holistic development of women, both within and beyond the campus.
      </p>

      <CentreVisionMission
        vision="To foster a safe, inclusive and gender-sensitive campus that promotes women’s empowerment, equal opportunities and mutual respect."
        mission="To empower women through awareness, education and skill development initiatives; promote gender equality; ensure a supportive environment; and encourage women to realise their full potential with confidence and dignity."
      />

      <h2 className="mt-10">Documents</h2>
      <a
        href={membersPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
          <DownloadIcon width={20} height={20} />
        </span>
        <span>
          <span className="block font-semibold text-cc-text-heading">Women's Cell Committee &amp; Members</span>
          <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
        </span>
      </a>
    </>
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
            <p className="mt-1.5 flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-cc-primary">
              <CalendarIcon className="h-3 w-3 shrink-0" />
              {item.date}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light line-clamp-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function WomensCell({ initialTab = 'about' }) {
  const resolvedTab = initialTab === 'home' ? 'about' : initialTab;

  return (
    <TabbedContentPage
      pageTitle="Women's Cell"
      breadcrumbLabel="Women's Cell"
      breadcrumbSection="Centres & Cells"
      description="The Women's Cell at Christ College, Pune works towards women's empowerment and gender equality, fostering a safe, gender-sensitive campus for female students and staff — objectives, functions, members and activities."
      initialTab={resolvedTab}
      tabs={[
        { key: 'about', label: 'About', render: () => <AboutTab /> },
        { key: 'activities', label: 'Activities', render: () => <ActivitiesTab /> },
      ]}
    />
  );
}
