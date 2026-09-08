import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import CategorySection from '../../components/CategorySection';
import { GridIcon, AwardIcon } from '../../components/icons';
import conferenceGameDesign from '../../assets/images/3-academics-department-of-science-activities/conference-game-design.jpg';
import conferenceEqualOpportunity from '../../assets/images/3-academics-department-of-science-activities/conference-equal-opportunity.jpeg';
import conferenceCloudAi from '../../assets/images/3-academics-department-of-science-activities/conference-cloud-ai.jpg';
import corporateConnect from '../../assets/images/3-academics-department-of-science-activities/corporate-connect.jpeg';

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

export default function DepartmentOfScienceFacultyPublicationsPage() {
  return (
    <>
      <Seo
        title="Seminars/ Corporate Connect — Department of Science"
        description="Seminars, corporate connect sessions and faculty publications from the Department of Science at Christ College, Pune."
      />
      <PageHeader
        title="Seminars/ Corporate Connect"
        breadcrumbs={[
          { label: 'Department of Science', path: '/academics/department-of-science/department-page' },
          { label: 'Seminars/ Corporate Connect' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-14">
          <CategorySection icon={GridIcon} title="Conferences & Seminar" items={CONFERENCES} />
          <CategorySection icon={AwardIcon} title="Corporate Connect" items={CORPORATE_CONNECT} />
        </div>
      </section>
    </>
  );
}
