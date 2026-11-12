import TabbedContentPage from '../../components/TabbedContentPage';
import ImageCarousel from '../../components/ImageCarousel';
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

const FUNCTIONS = [
  'Address and prevent various forms of harassment, including sexual harassment.',
  "Raise awareness for equal opportunities regardless of gender.",
  'Offer counselling and support for female students and staff facing challenges.',
  "Organize awareness programs and seminars on women's rights, self-defense, and more.",
  'Work to establish a safe and discrimination-free environment.',
  "Advocate for women's rights and work on policy changes to address gender-related concerns.",
  'Investigate and take action on complaints (if any) related to gender discrimination and harassment.',
  "Focus on women's health and mental well-being through programs and awareness.",
  'Recognize and celebrate the achievements of female members.',
  "Promote awareness about women's rights and gender sensitivity.",
];

const ACTIVITIES = [
  {
    name: 'Debate — "Clash of Minds"',
    date: '14 October 2026',
    images: DEBATE_IMAGES,
    description: 'A debate competition organised by the Women\'s Cell and the Department of Arts, engaging students in a spirited exchange of ideas and sharpening their critical thinking and public speaking skills.',
  },
  {
    name: 'Peace Walk Against Trafficking',
    date: 'July 2026',
    images: PEACE_WALK_IMAGES,
    description: 'Staff and students joined a public peace walk held on Anti-Human Trafficking Day to raise awareness against human trafficking and show solidarity with survivors, carrying placards calling to stop trafficking and win back humanity.',
  },
  {
    name: 'Clean Spaces, Healthy Habits: Promoting Washroom Etiquette and Hygiene',
    date: '17 July 2026',
    images: WASHROOM_IMAGES,
    description: 'A session for students on washroom etiquette and menstrual hygiene, covering the use of sanitary napkin vending machines installed across campus and promoting healthy, respectful shared spaces.',
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

function HomeTab() {
  return (
    <>
      <h2>Women's Cell</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        Women&rsquo;s Empowerment and Gender Equality are significant for the upliftment and
        advancement of our nation. The Women Cell at Christ College works to establish a strong
        foundation for gender sensitization. The Cell strives to empower and guide female
        students and employees to identify their potential and to assist them in showing their
        stance in a competitive environment. The Cell has faculty and student representatives as
        its members and works to create a gender-sensitized community. It has been organizing
        various activities to uplift women and promote gender equality within and outside the
        campus.
      </p>

      <h2 className="mt-10">Objective</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The main objective of a Women&rsquo;s Cell is to create a safe and supportive environment
        for female students and staff. The Cell works to promote gender equality, prevent
        harassment, provide support, organize awareness programs, and address women&rsquo;s
        issues on campus.
      </p>

      <h2 className="mt-10">Functions</h2>
      <ul className="mt-4 flex max-w-3xl flex-col gap-2">
        {FUNCTIONS.map((item) => (
          <li key={item} className="flex items-start gap-2 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-10">Members</h2>
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
          <span className="block font-semibold text-cc-text-heading">Women's Cell Members</span>
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

export default function WomensCell({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Women's Cell"
      breadcrumbLabel="Women's Cell"
      breadcrumbSection="Centres & Cells"
      description="The Women's Cell at Christ College, Pune works towards women's empowerment and gender equality, fostering a safe, gender-sensitive campus for female students and staff — objectives, functions, members and activities."
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'activities', label: 'Activities', render: () => <ActivitiesTab /> },
      ]}
    />
  );
}
