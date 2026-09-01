import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GridIcon, CalendarIcon, BookIcon, UsersIcon, AwardIcon, CompassIcon } from '../../components/icons';
import workshopItIndustry from '../../assets/images/3-academics-department-of-science-activities/workshop-it-industry.jpeg';
import conferenceGameDesign from '../../assets/images/3-academics-department-of-science-activities/conference-game-design.jpg';
import conferenceEqualOpportunity from '../../assets/images/3-academics-department-of-science-activities/conference-equal-opportunity.jpeg';
import conferenceCloudAi from '../../assets/images/3-academics-department-of-science-activities/conference-cloud-ai.jpg';
import corporateConnect from '../../assets/images/3-academics-department-of-science-activities/corporate-connect.jpeg';

const WORKSHOP = [
  {
    name: 'Workshop on Career Opportunities in the IT Industry',
    date: '19 December 2023',
    image: workshopItIndustry,
    description: "The workshop on \"Career Opportunities in the IT Industry\" held on December 19th, 2023, was a highly informative session for first-year B.Sc students of the Science Department. Facilitated by Mr. Nitin Abraham, the Centre Manager at IANT Computer Education Institute in Pune's Viman Nagar, the workshop aimed to enlighten students about the vast prospects within the IT sector, covering software development, cybersecurity, data science, and network administration.",
  },
];

const CONFERENCES = [
  {
    name: 'Seminar on Career Opportunities in Game Design and Development',
    date: '4 October 2023',
    image: conferenceGameDesign,
    description: 'A seminar on the topic "Career Opportunities in Game Design and Development" was conducted on October 4th, 2023, at 10:00 AM for first-year and second-year students of the Computer Science Department. The seminar featured Mr. Nilesh Sahasrabudhe, founder & CEO of Nordic Mojo, as the resource person, who provided an overview of the booming game design and development industry and shared his personal journey in the field.',
  },
  {
    name: 'An Equal Opportunity for All Through Various Schemes',
    date: '28 January 2025',
    image: conferenceEqualOpportunity,
    description: "The seminar titled \"An Equal Opportunity for All Through Various Schemes\" was organized by Christ College Pune's Student Development, Equal Opportunity Cell, Scholarship Cell, and Divyang Cell, featuring Dr. Ganesh Madhukar Dhawale as the speaker. The event took place on 28th January 2025 at 12:00 PM in Chavara Hall, focusing on promoting inclusivity and awareness of various equal opportunity schemes.",
  },
  {
    name: 'Guest Lecture on Cloud and AI',
    date: '8 August 2025',
    image: conferenceCloudAi,
    description: 'The Department of Computer Science organised a guest lecture on "Cloud and AI" on 8 August 2025 for TY BSc and TY BBA(CA) students. Mr. Shashank Gaikwad, Associate Director, Altera Digital Health, discussed cloud-based AI tools with live demonstrations and interaction, benefiting 98 students.',
  },
];

const CORPORATE_CONNECT = [
  {
    name: "Talk on 'Bridging the Gap — Campus to Corporate'",
    date: '26 August 2023',
    image: corporateConnect,
    description: "On August 26, 2023, Mr. Sunil Tanaji Shinde, an accomplished expert in leadership and behavioral skills, conducted a corporate talk titled 'Bridging the Gap - Campus to Corporate.' This event, orchestrated by the Department of Science, commenced at 10:00 am and was tailored for second- and third-year B.Sc. students, along with first- and second-year M.Sc. students, covering soft skills, adaptability and effective communication for a smooth transition into the corporate world.",
  },
];

const INDUSTRIAL_VISIT = [
  {
    name: 'GMRT — Giant Metrewave Radio Telescope Visit',
    date: '16 February 2024',
    description: 'On February 16, 2024, over 50 second-year students from the Department of Science embarked on an educational visit to the Giant Metrewave Radio Telescope (GMRT) in Pune. The day-long excursion, commencing at 7:00 am, included interactive sessions, guided tours, and hands-on experiences with scientists and researchers, deepening students’ understanding of radio astronomy before the group returned to college by 9:30 pm.',
  },
];

function CategorySection({ icon: Icon, title, items, emptyNote }) {
  return (
    <div>
      <h2 className="flex items-center gap-2.5 mt-12">
        <Icon className="h-6 w-6 text-cc-primary shrink-0" />
        {title}
      </h2>
      {items.length === 0 ? (
        <p className="mt-4 text-sm italic text-cc-text-muted-light">{emptyNote}</p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm">
              {item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />}
              <div className="p-5">
                <h3 className="text-base">{item.name}</h3>
                {item.date && (
                  <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wide text-cc-primary">
                    <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                    {item.date}
                  </p>
                )}
                <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DepartmentOfScienceActivitiesPage() {
  return (
    <>
      <Seo
        title="Activities — Department of Science"
        description="Workshops, conferences and seminars, corporate connect talks, and industrial visits organised by the Department of Science at Christ College, Pune, including the GMRT field visit and a guest lecture on Cloud and AI."
      />
      <PageHeader
        title="Activities"
        breadcrumbs={[
          { label: 'Department of Science', path: '/academics/department-of-science/department-page' },
          { label: 'Activities' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          Beyond academics, the Department of Science organises a range of co-curricular
          activities for students — workshops, conferences and seminars, corporate connect talks,
          and industrial visits — grouped below by category.
        </p>

        <div className="mt-10 flex flex-col gap-14">
          <CategorySection icon={BookIcon} title="Workshop" items={WORKSHOP} />
          <CategorySection
            icon={UsersIcon}
            title="Club Activities"
            items={[]}
            emptyNote="No club activities published yet."
          />
          <CategorySection icon={GridIcon} title="Conferences & Seminar" items={CONFERENCES} />
          <CategorySection icon={AwardIcon} title="Corporate Connect" items={CORPORATE_CONNECT} />
          <CategorySection
            icon={CompassIcon}
            title="Industrial Visit & Field Visit"
            items={INDUSTRIAL_VISIT}
          />
        </div>
      </section>
    </>
  );
}
