import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { ChevronDownIcon, BuildingIcon, GridIcon, UsersIcon, AwardIcon, CompassIcon, AcademicCapIcon } from '../../components/icons';
import departmentBanner from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/department-banner.JPG';
import hodBijuSebastian from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/hod-biju-sebastian.png';
import events from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/events.JPG';
import association from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/association.JPG';
import activities from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/activities.JPG';
import achievementKrishna from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/achievement-krishna-chauhan.png';
import facultyPublications from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/faculty-publications.jpg';

const PROGRAMMES = {
  undergraduate: [
    { label: 'BA (Economics)', path: '/academics/department-of-arts/ba-economics' },
    { label: 'BA (English)', path: '/academics/department-of-arts/ba-english' },
    { label: 'BA (Psychology)', path: '/academics/department-of-arts/ba-psychology' },
  ],
};

const ACTIVITIES = [
  { name: 'Festivals', description: 'Department festivals and cultural celebrations.', image: events, path: '/academics/department-of-arts/festivals' },
  { name: 'CCAA', description: 'Christ College Arts Association.', image: association, path: '/academics/department-of-arts/association' },
  { name: 'Activities', description: 'Student-led activities and initiatives.', image: activities, path: '/academics/department-of-arts/activities' },
  { name: 'Faculty Publications', description: 'Research and publications by department faculty.', image: facultyPublications, path: '/academics/department-of-arts/faculty-publications' },
];

const ACHIEVEMENTS = [
  {
    name: 'Krishna Chauhan',
    programme: 'SY BA',
    description: 'Selected to the PDZSC Cricket (Men) team to participate in the Savitribai Phule Pune University Inter Zonal Championship 2024-25.',
    photo: achievementKrishna,
  },
];

export default function DepartmentOfArtsPage() {
  return (
    <>
      <Seo
        title="Department of Arts"
        description="The Department of Arts (BA) at Christ College, Pune offers BA in Economics, English and Psychology, led by HOD Mr Biju Sebastian, with a multidisciplinary curriculum, research aptitude and experiential learning."
      />
      <PageHeader
        title="Department of Arts"
        breadcrumbs={[{ label: 'Arts', path: '/academics/department-of-arts/department-index' }, { label: 'Department of Arts' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={departmentBanner}
          alt="Department of Arts"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="flex items-center gap-2.5">
              <BuildingIcon className="h-6 w-6 text-cc-primary shrink-0" />
              About the Department
            </h2>
            <p className="mt-4 text-cc-text-body">
              The Bachelor of Arts programme at Christ College Pune offers students a
              comprehensive and enriching educational experience that prepares them for diverse
              career opportunities. The programme combines strong theoretical foundations with
              practical application, enabling students to analyse, explore, and address real-life
              situations effectively.
            </p>
            <p className="mt-4 text-cc-text-body">
              With a multidisciplinary approach, the course introduces students to the core
              concepts of Economics, English, and Psychology through interactive, project-based
              learning. Emphasis is also placed on developing research aptitude, critical
              thinking, communication skills, and analytical abilities, empowering students to
              grow academically as well as professionally.
            </p>

            <h2 className="mt-10 flex items-center gap-2.5">
              <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Department Overview
            </h2>
            <p className="mt-4 text-cc-text-body">
              The Department of Arts has distinguished itself as one of the leading centers of
              learning in economics in the country. The Department has the distinction of having
              developed a unique and challenging curriculum and syllabi at the Undergraduate,
              Postgraduate, and Doctoral Research levels. Students and scholars are trained to
              analyze concrete problems with the help of conceptual frames, theoretical insights,
              and mathematical, statistical, and econometric tools, along with computer
              applications.
            </p>
            <p className="mt-4 text-cc-text-body">
              Various academic programmes offer a comprehensive package with a thrust on both
              theoretical and practical applications. Along with core courses such as
              Microeconomics, Macroeconomics, Developmental Economics, International Economics,
              Behavioural Economics, Financial Economics, Environmental Economics, Econometrics,
              and Mathematical Economics, a wide range of specialized courses, including Labour
              Economics, Public Economics, Health Economics, and Operations Research, are well
              integrated into the curriculum.
            </p>
            <p className="mt-4 text-cc-text-body">
              The emphasis on experiential learning has made Dissertation, Internship, and
              training on data analysis an integral part of the curriculum. It is a matter of
              great satisfaction that students and faculty act in unison to make the
              teaching-learning process a highly purposeful mission.
            </p>

            <h2 className="mt-10 flex items-center gap-2.5">
              <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Message from the HOD
            </h2>
            <div className="mt-4 flex items-start gap-4">
              <img
                src={hodBijuSebastian}
                alt="Mr. Biju Sebastian"
                className="h-16 w-16 shrink-0 rounded-full border border-cc-gray-200 object-cover object-top"
              />
              <div>
                <p className="font-semibold text-cc-text-heading">Mr. Biju Sebastian &ndash; Head of Department</p>
                <p className="mt-2 text-cc-text-body">
                  &ldquo;Greetings from the Department of Arts. For the BA programme, the
                  department provides Economics as the primary subject. Students study
                  Microeconomics, Macroeconomics, and Economic Development and Policy in India.
                  The department also provides a variety of soft skills. Students in the BA
                  programme can take enrichment courses in Research Methodology, Data Analysis,
                  and Fundamental Computational Techniques for Data Analysis.
                </p>
                <p className="mt-3 text-cc-text-body">
                  Because of its great usefulness and enormous demand in the labour market,
                  Economics is a perennially popular and well-regarded discipline. Fundamentally,
                  Economics is the study of evaluating alternatives and making informed decisions.
                  The programme develops critical thinking, analytical reasoning, and
                  problem-solving abilities that prepare students for both professional and
                  personal success.
                </p>
                <p className="mt-3 text-cc-text-body">
                  Employers frequently seek the skills acquired through studying Economics,
                  including decision-making, problem-solving, information gathering and
                  processing, statistical analysis, and effective written and verbal
                  communication. These competencies open up opportunities in both the public and
                  private sectors.&rdquo;
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
                &ldquo;To be a leading academic and research department in economics that generates innovative ideas and solutions to complex economic challenges facing society.&rdquo;
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-xs uppercase tracking-wide text-cc-text-muted-light flex items-center gap-1.5">
                  <AwardIcon className="h-3.5 w-3.5 text-cc-primary shrink-0" />
                  Mission
                </h4>
              <p className="mt-1 text-sm leading-relaxed text-cc-text-muted-light">
                The Department of Arts is dedicated to advancing knowledge and understanding of economics through teaching, research, and outreach.
              </p>
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
            {ACTIVITIES.map((a, index) =>
              a.path ? (
                <Link
                  key={`${a.name}-${index}`}
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
                <div key={`${a.name}-${index}`} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm">
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
            <div key={`${a.name}-${index}`} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface shadow-cc-sm">
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
    </>
  );
}
