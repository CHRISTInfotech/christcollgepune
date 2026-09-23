import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import CategorySection from '../../components/CategorySection';
import { GridIcon, AwardIcon } from '../../components/icons';
import conferenceGameDesign from '../../assets/images/3-academics-department-of-science-activities/conference-game-design.jpg';
import conferenceEqualOpportunity from '../../assets/images/3-academics-department-of-science-activities/conference-equal-opportunity.jpeg';
import conferenceCloudAi from '../../assets/images/3-academics-department-of-science-activities/conference-cloud-ai.jpg';
import corporateConnect from '../../assets/images/3-academics-department-of-science-activities/corporate-connect.jpeg';
import futureProof1 from '../../assets/images/gallery/future-proof-yourself/1.jpg';
import futureProof2 from '../../assets/images/gallery/future-proof-yourself/2.jpg';
import futureProof3 from '../../assets/images/gallery/future-proof-yourself/3.jpg';
import futureProof4 from '../../assets/images/gallery/future-proof-yourself/4.jpg';
import futureProof5 from '../../assets/images/gallery/future-proof-yourself/5.jpg';
import higherEd1 from '../../assets/images/gallery/higher-education-opportunity/1.jpg';
import higherEd2 from '../../assets/images/gallery/higher-education-opportunity/2.jpg';
import higherEd3 from '../../assets/images/gallery/higher-education-opportunity/3.jpg';
import higherEd4 from '../../assets/images/gallery/higher-education-opportunity/4.jpg';
import higherEd5 from '../../assets/images/gallery/higher-education-opportunity/5.jpg';
import pythonProg1 from '../../assets/images/gallery/python-programming-data-analytics/1.jpg';
import pythonProg2 from '../../assets/images/gallery/python-programming-data-analytics/2.jpg';
import pythonProg3 from '../../assets/images/gallery/python-programming-data-analytics/3.jpg';
import pythonProg4 from '../../assets/images/gallery/python-programming-data-analytics/4.jpg';

const FUTURE_PROOF_IMAGES = [futureProof1, futureProof2, futureProof3, futureProof4, futureProof5];
const HIGHER_ED_IMAGES = [higherEd1, higherEd2, higherEd3, higherEd4, higherEd5];
const PYTHON_PROG_IMAGES = [pythonProg1, pythonProg2, pythonProg3, pythonProg4];

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
    name: 'Conclave — BIZ-TECH',
    date: '20 September 2025',
    description: "The Department of Computer Science organised a conclave with the theme “BIZ-TECH” on September 20, 2025, from 10:00 AM to 12:30 PM in Chavara Hall, witnessing enthusiastic participation from students and faculty members of the Computer Science and Commerce departments. The conclave featured a panel of distinguished industry experts — Mr Gopal Parasnis, Mr Preetam Virkud, Mr Deepak Kandhare, Mr Sandeep Parande, and Mr Joy George — who shared insights on bridging the gap between academia and industry, focusing on emerging technologies, business transformation, and the evolving skillsets required for career success. Through engaging discussions and real-world case studies, the panellists emphasised the importance of adaptability, innovation, and ethical practices in the tech-driven business world, and were felicitated by the Head of the Department, Mrs. Nilima Shingate. The conclave aimed to help students identify key emerging technologies and their impact on business transformation, understand the importance of soft skills, adaptability and ethical digital practices, and gain insight into industry expectations. As a result, the 220 students who benefited gained practical insights into emerging technologies, security, and industry expectations; enhanced awareness of ethical digital practices and career readiness; and stronger engagement, critical thinking and confidence in navigating real-world tech challenges.",
  },
  {
    name: 'Future Proof Yourself — Grooming, Goals and Employability',
    date: 'AI Skilling for the Next Generation',
    images: FUTURE_PROOF_IMAGES,
    description: "An AI skilling session for the next generation, organised in collaboration with the ASSOCHAM Foundation for Corporate Social Responsibility (AFCSR), Shooting Stars Foundation, and IBM SkillsBuild. The session was conducted by Kunal Pagariya, a Pune-based software professional with over 15 years of industry experience, currently a Software Development Specialist at Amdocs since 2016, with earlier roles as a Software Engineer at Avaya (2010–2016), Cybermedia Software (2009–2010), and Cisco. He holds a Master of Science in Computer Science from Nowrosjee Wadia College (2007–2009), with a skill set spanning Java, C, Perl, C++, and Linux across application and system-level programming.",
  },
  {
    name: 'Session on Higher Education Opportunities & Pathways',
    date: '17 July 2026',
    images: HIGHER_ED_IMAGES,
    description: 'The Department of Science, Christ College, Pune, organised a session on "Higher Education Opportunities & Pathways" on 17 July 2026 at 10:50 a.m. in the Seminar Hall, conducted by Mr. Hardik Pandey from Yes Germany to create awareness about higher education opportunities in Germany. Mr. Pandey provided valuable information on universities, scholarships, eligibility, visa procedures, language requirements, admission processes, and post-study career opportunities, and guided students on selecting courses, preparing SOPs, scholarships, and building strong academic profiles. The interactive session included a discussion on admissions, accommodation, living expenses, and employment opportunities, concluding with a vote of thanks.',
  },
  {
    name: 'Python Programming for Data Analytics',
    date: '2 September 2026',
    images: PYTHON_PROG_IMAGES,
    description: 'The Department of Computer Science, Christ College, Pune, in association with TechBodhi Solutions, organised a seminar on "Python Programming for Data Analytics" on 2 September 2026 from 1:00 p.m. to 2:00 p.m., conducted by Mr. Mahendra Kamble, Director of TMoksha Technologies and Partner at TechBodhi Solutions. The seminar introduced students to Python programming, Data Analytics, and Artificial Intelligence — the speaker demonstrated Python code and its applications in data analysis and explained how AI can enhance productivity, giving students practical awareness of emerging technologies.',
  },
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
        description="Seminars and corporate connect sessions from the Department of Science at Christ College, Pune, including the BIZ-TECH Conclave, Future Proof Yourself, Higher Education Opportunities & Pathways, and Python Programming for Data Analytics."
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
