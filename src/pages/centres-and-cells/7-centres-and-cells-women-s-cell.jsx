import TabbedContentPage from '../../components/TabbedContentPage';
import { DownloadIcon } from '../../components/icons';
import membersPdf from '../../assets/studentlife/cells/WOMEN CELL MEMBERS(2).pdf';

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
    <div className="max-w-3xl">
      <h2>Activities Conducted</h2>
      <dl className="mt-6 flex flex-col divide-y divide-cc-gray-200">
        {ACTIVITIES.map((item) => (
          <div key={item.name} className="py-4 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <dt className="font-semibold text-cc-text-heading">{item.name}</dt>
              <span className="text-xs uppercase tracking-wide text-cc-text-muted-light">{item.date}</span>
            </div>
            <dd className="mt-1 text-sm text-cc-text-muted-light">{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function WomensCell({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Women's Cell"
      breadcrumbLabel="Women's Cell"
      description="The Women's Cell at Christ College, Pune works towards women's empowerment and gender equality, fostering a safe, gender-sensitive campus for female students and staff — objectives, functions, members and activities."
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'activities', label: 'Activities', render: () => <ActivitiesTab /> },
      ]}
    />
  );
}
