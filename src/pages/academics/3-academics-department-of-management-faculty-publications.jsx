import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import CategorySection from '../../components/CategorySection';
import { GridIcon, AwardIcon } from '../../components/icons';
import seminarLinkedin from '../../assets/images/3-academics-department-of-management-activities/seminar-on-building-a-better-linkedin-profile-for-increased-.jpg';
import seminarCompaniesAct from '../../assets/images/3-academics-department-of-management-activities/seminar-on-companies-act-2013.png';
import seminarDiversitiesHr from '../../assets/images/3-academics-department-of-management-activities/seminar-on-diversities-in-cross-cultural-hr.jpg';
import seminarEducation from '../../assets/images/3-academics-department-of-management-activities/seminar-on-education-yesterday-today-and-tomorrow-an-explana.jpg';
import seminarEnterpriseInception from '../../assets/images/3-academics-department-of-management-activities/seminar-on-enterprise-inception-building-your-business.jpg';
import seminarHealthcare from '../../assets/images/3-academics-department-of-management-activities/seminar-on-healthcare-career-diversity-exploring-job-opportu.png';
import seminarHigherEducation from '../../assets/images/3-academics-department-of-management-activities/seminar-on-higher-education-prospects.jpg';
import seminarIndustryTrends from '../../assets/images/3-academics-department-of-management-activities/seminar-on-industry-trends-and-graduate-proficiencies.jpg';
import seminarInvestmentBanking from '../../assets/images/3-academics-department-of-management-activities/seminar-on-investment-banking.jpg';
import seminarMindAlgorithm from '../../assets/images/3-academics-department-of-management-activities/seminar-on-mind-algorithm-computational-thinking-computing-a.jpg';
import seminarMoneytree from '../../assets/images/3-academics-department-of-management-activities/seminar-on-moneytree-financial-literacy-campaign.jpg';
import seminarReskilling from '../../assets/images/3-academics-department-of-management-activities/seminar-on-reskilling-and-upskilling-for-future-workforce.jpg';
import seminarEmpoweringYoungMinds from '../../assets/images/3-academics-department-of-management-activities/seminar-on-empowering-young-minds-turn-your-passion-into-suc.jpg';
import seminarHrDigitalAge from '../../assets/images/3-academics-department-of-management-activities/seminar-on-topic-hr-in-digital-age.jpg';
import seminarTransformingChallenges from '../../assets/images/3-academics-department-of-management-activities/seminar-on-transforming-challenges-into-opportunities-the-fu.jpg';
import seminarDabbawala from '../../assets/images/3-academics-department-of-management-activities/seminar-on-the-supply-chain-management-of-mumbai-dabbawala.jpg';
import seminarTime from '../../assets/images/3-academics-department-of-management-activities/seminar-on-t-i-m-e-building-your-professional-identity.jpg';
import samriddhi1 from '../../assets/images/gallery/samriddhi-investor-awareness/1.jpg';
import samriddhi2 from '../../assets/images/gallery/samriddhi-investor-awareness/2.jpg';
import samvaad1 from '../../assets/images/gallery/samvaad-2025/1.jpg';
import samvaad2 from '../../assets/images/gallery/samvaad-2025/2.jpg';

const SEMINAR = [
  {
    name: 'Seminar on Building a Better LinkedIn Profile for Increased Visibility',
    date: '19 October 2023',
    image: seminarLinkedin,
    description: 'The Department of Management hosted a seminar on optimizing LinkedIn profiles, featuring Prof. Sonal Raul, Assistant Professor of Finance at ITM Business School, Kharghar. The session equipped second- and third-year students with strategies for effective networking, showcasing achievements, and leveraging LinkedIn for career advancement.',
  },
  {
    name: 'Seminar on Career Planning & Career Development',
    date: '4 January 2024',
    description: 'The Department of Management hosted a seminar on "Career Planning and Career Development" conducted by Habbinsons, experts in career guidance. Participants explored self-assessment, goal setting, skill development, and networking strategies, along with current job-market trends and emerging career opportunities.',
  },
  {
    name: 'Seminar on the Companies Act, 2013',
    date: '13 October 2023',
    image: seminarCompaniesAct,
    description: 'The Department of Management organized a guest lecture on the Companies Act, 2013, conducted by Assistant Professor Siju Mathew, covering the background and objectives of the Act, company formation procedures, and the Memorandum and Articles of Association (MOA and AOA).',
  },
  {
    name: 'Seminar on Diversities in Cross-Cultural HR',
    date: '14 September 2023',
    image: seminarDiversitiesHr,
    description: 'The Department of Management hosted a seminar on "Diversities in Cross Cultural HR" featuring Ms. Rinku Nagpal, Senior Manager of Talent Acquisition at Hitachi Vantara, exploring the challenges and opportunities in HR management when dealing with diverse cultural backgrounds within organizations.',
  },
  {
    name: 'Seminar: Education — Yesterday, Today and Tomorrow, an Exploration of Influence & Persuasion',
    date: '27–28 July 2023',
    image: seminarEducation,
    description: 'The Habbinson\'s team, under Mr. Adnan Siddiqui (Founder and CEO), conducted a session at Chavara Hall exploring the evolution of education over time and the role of influence and persuasion in shaping educational practices, encouraging students to envision a future where education is inclusive and technologically advanced.',
  },
  {
    name: 'Seminar on Empowering Tomorrow: Developing Essential Skills for a Brighter Future',
    date: '16 February 2024',
    description: 'Mr. Vinay M. Dave, Placement Officer at Navjeevan Lokvikas Sanstha, conducted a seminar equipping students with essential skills such as communication, leadership, and problem-solving. He also introduced Udaan, a Bajaj Finserv-powered programme offering technical, theoretical, and practical knowledge.',
  },
  {
    name: 'Seminar on Enterprise Inception: Building Your Business',
    date: '5 August 2023',
    image: seminarEnterpriseInception,
    description: 'C S Akash Binoy, a Practicing Company Secretary from Akash Binoy and Associates, conducted a seminar providing aspiring entrepreneurs with insights into the foundational aspects of starting and growing a successful enterprise, underscoring ethical practices, compliance, and strategic planning.',
  },
  {
    name: 'Seminar on Healthcare Career Diversity: Exploring Job Opportunities',
    date: '28 August 2023',
    image: seminarHealthcare,
    description: 'Dr. Kshama Patne led a guest lecture introducing students to the myriad opportunities available in the healthcare sector, encouraging them to explore potential career paths in this dynamic field.',
  },
  {
    name: 'Seminar on Higher Education Prospects',
    date: '21 September 2023',
    image: seminarHigherEducation,
    description: 'Christ College Pune, in collaboration with Y-axis, organized a seminar conducted by Mr. Allan Dass offering guidance on opportunities for higher education abroad, selecting the right course, college and country, common application mistakes, and part-time work and post-study employment options.',
  },
  {
    name: 'Seminar on Industry Trends and Graduate Proficiencies',
    date: '17 October 2023',
    image: seminarIndustryTrends,
    description: 'Mr. Majid Ali Khan, a Global HR and Talent Leader, delivered a corporate talk for second-year students on industry trends projected for 2025 and beyond, emphasizing proficiencies such as Artificial Intelligence, Data Analytics, Cloud Data Engineering, FinOps, and Digital Marketing alongside essential human skills like analytical thinking and adaptability.',
  },
  {
    name: 'Seminar on Investment Banking',
    date: '13 February 2024',
    image: seminarInvestmentBanking,
    description: 'Mr. Bhimesh Mishra, Associate Director at UBS, conducted a seminar titled "Career Options in Investment Banking," covering diverse career paths from corporate finance to mergers and acquisitions and the significance of professional certifications such as the Chartered Institute for Securities & Investment (CISI).',
  },
  {
    name: 'Seminar on Mind Algorithms: Computational Thinking, Computing and Programming Excellence',
    date: '19 August 2023',
    image: seminarMindAlgorithm,
    description: 'An online guest lecture by Mr. Prashant Joshi covered computing and related fields, aiming to develop a computational mindset and understand the importance of logic in programming for future computation such as AI and ML.',
  },
  {
    name: 'Seminar — MoneyTree: Financial Literacy Campaign',
    date: '25 October 2023',
    image: seminarMoneytree,
    description: 'Organized jointly with the Department of Arts and Commerce and Christ University, Lavasa, this seminar promoted financial literacy among students, covering budgeting, saving, investment options, and financial planning for the future.',
  },
  {
    name: 'Seminar on Reskilling and Upskilling for the Future Workforce',
    date: '31 January 2024',
    image: seminarReskilling,
    description: 'Mr. George Cardoz, Head of HR and Talent Acquisition at Forbes Marshall, led a seminar on preparing for the evolving job market, covering emerging industry trends, the impact of advancing technologies, self-assessment, and personalized career-advancement plans.',
  },
  {
    name: 'Seminar on Empowering Young Minds: Turn Your Passion into a Successful Business',
    date: '13 September 2023',
    image: seminarEmpoweringYoungMinds,
    description: 'Mr. Anirudh Pole led a corporate talk covering visualization and gratitude, excellence through discipline, willingness to change and self-challenge, and the importance of confidence, body language, and communication for success.',
  },
  {
    name: 'Seminar on HR in the Digital Age',
    image: seminarHrDigitalAge,
    description: 'Mr. Noel Saji Paul, Manager of HRMS Administration, HR Operations, and Compliance at Bajaj Auto Ltd., conducted a seminar for HR-specialization students covering HRMS cloud, connected systems, harassment reporting tools, and SAP HCM through a presentation and live demos.',
  },
  {
    name: 'Seminar on Transforming Challenges into Opportunities: The Future of Business',
    date: '4 March 2025',
    image: seminarTransformingChallenges,
    description: 'Organized with NIRMITI, this seminar by Prof. Gururaj Dangare focused on entrepreneurship, strategic planning, and government schemes such as the Nidhi Prayas Scheme, MCED, and MSME & Export Assistance, along with a Vada Pav business case study demonstrating effective marketing techniques.',
  },
  {
    name: 'Seminar on the Supply Chain Management of the Mumbai Dabbawalas',
    date: '17 August 2023',
    image: seminarDabbawala,
    description: 'Mr. Ritesh Andhre, spokesperson of the Nutan Mumbai Tiffin Box Supplier Charity Trust, engaged students with real-life anecdotes and statistics on how the Dabbawalas manage to deliver over 200,000 lunch boxes across Mumbai with remarkable precision and accuracy.',
  },
  {
    name: 'Seminar — T.I.M.E.: Building Your Professional Identity',
    date: '12 October 2023',
    image: seminarTime,
    description: 'Mr. Rahul Mahabir, Director of T.I.M.E. Jaipur, Pune & Jodhpur Centre, conducted a Career Guidance Programme on building a professional identity.',
  },
  {
    name: 'Seminar on an Introduction to Business Analytics',
    date: '23 January 2024',
    description: 'Mr. Deepak Luthra from the Boston Institute of Analytics conducted a seminar on data analytics, covering its applications, significance, and impact across industries, the latest trends and tools, and potential career paths in the field.',
  },
];

const CORPORATE_CONNECT = [
  {
    name: 'SPPU Startup Talk Series — Conversation with Young Entrepreneurs',
    date: '9 February 2026',
    description: 'The Department of Management, in association with Nirmiti Startup and Innovation Centre and IQAC, Christ College Pune, organized an interactive session under the SPPU Startup Talk Series – “Conversation with Young Entrepreneurs” on 9th February 2026. The session featured Mr. Bapu Shivaji Narute, an entrepreneur and founder of Manashanti Chaibar, who shared his inspiring journey from a school teacher to a successful entrepreneur. Students gained practical insights into identifying business opportunities, prototyping, fundraising, revenue models, networking, and entrepreneurial resilience. The session encouraged students to develop an entrepreneurial mindset and view everyday challenges as opportunities for innovation and sustainable business creation.',
  },
  {
    name: 'Finance Unfiltered: Insider Perspectives on Careers',
    date: '23 January 2026',
    description: 'The Department of Management, Christ College Pune, organized the Corporate Talk “Finance Unfiltered: Insider Perspectives on Careers” on 23rd January 2026, offering students valuable exposure to the finance and consulting sectors. Industry professionals Mr. Tejas Mahesh Shinde, Financial Analyst at BNY, and Mr. Akshay Chemte, Associate Consultant at Infosys Ltd., shared practical insights on career opportunities, industry expectations, professional skills, and corporate culture. The interactive session enabled students to understand career pathways and the transition from academics to the corporate world. The programme successfully bridged the gap between classroom learning and industry requirements while motivating students to make informed career choices.',
  },
  {
    name: 'SAMVAAD ’2025',
    date: '13 September 2025',
    images: [samvaad1, samvaad2],
    description: 'The Department of Management, Christ College Pune, organized SAMVAAD ’2025 on 13th September 2025, focusing on the theme “Future-Ready Managers: Integrating Business Functions for Tomorrow’s Challenges.” The industry–academia interaction featured distinguished experts from Quick Heal, OpenGov Inc., Marsh McLennan, and ProMiles Management Consulting, who shared valuable insights on leadership, innovation, risk management, technology, and entrepreneurship. The programme enabled students to connect academic learning with industry expectations while developing strategic thinking, analytical, communication, and employability skills. SAMVAAD ’25 successfully strengthened industry–institute collaboration and inspired students to become adaptable and future-ready management professionals.',
  },
  {
    name: 'Business Voices – Future Leaders Lab 1.0',
    date: '23 August 2025',
    description: 'The Department of Management, Christ College Pune, in collaboration with BNI Foundation, organized Business Voices – Future Leaders Lab 1.0 on 23rd August 2025. The session, “Level Up Your Voice! Expression with Clarity and Respect,” was facilitated by Clinical Psychologist and Psychotherapist Ms. Poorva Sahasrabudhe, focusing on confident, empathetic, and effective communication. Students explored active listening, emotional regulation, assertive communication, and techniques to overcome stage fear and communication anxiety. The interactive session empowered students to express themselves with greater clarity, confidence, and respect, strengthening essential skills for personal and professional success.',
  },
  {
    name: 'NSE-Supported Investor Awareness Programme — Samriddhi: Important Aspects of Active Investing',
    date: '20 August 2025',
    images: [samriddhi1, samriddhi2],
    description: 'The Department of Management, Christ College Pune, organized an NSE-Supported Investor Awareness Programme, “Samriddhi: Important Aspects of Active Investing,” on 20th August 2025 for SY and TY students. The session was conducted by Ms. Jyoti Agarwal, SEBI SMART Trainer & Financial Professional, in association with Krisha Foundation. The programme provided students with practical insights into capital markets, active investing, risk management, investor protection, and safe investment practices. With 143 students participating, the session successfully enhanced financial literacy and encouraged students to adopt disciplined and informed approaches to long-term wealth creation.',
  },
  {
    name: 'IndusInd Bank Visit',
    date: '22 January 2025',
    description: 'Christ College Pune organized an industrial visit to IndusInd Bank\'s Magarpatta branch for TY BBA and SY BBA students, accompanied by Prof. Bitto Benny and Prof. Siju. Students explored customer service, cash handling, and loan processing, with a Q&A session with branch head Mr. Mehul Soni covering digitalization, career opportunities, and the role of the RBI.',
  },
  {
    name: 'Orientation on the Foundation of the Pune Management Association Student Chapter',
    date: '10 January 2024',
    description: 'Mr. Rahul Joshi conducted a seminar giving students a comprehensive understanding of the objectives and activities of the Pune Management Association (PMA) Student Chapter, highlighting events, workshops, and initiatives to develop leadership qualities, industry insights, and managerial acumen.',
  },

];

export default function DepartmentOfManagementFacultyPublicationsPage() {
  return (
    <>
      <Seo
        title="Seminars/ Corporate Connect — Department of Management"
        description="Seminars and corporate connect sessions organised by the Department of Management at Christ College, Pune, including SAMVAAD '2025, the Samriddhi investor awareness programme, Business Voices – Future Leaders Lab, and the SPPU Startup Talk Series."
      />
      <PageHeader
        title="Seminars/ Corporate Connect"
        breadcrumbs={[
          { label: 'Department of Management', path: '/academics/department-of-management/department-page' },
          { label: 'Seminars/ Corporate Connect' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-14">
          <CategorySection icon={GridIcon} title="Seminar" items={SEMINAR} />
          <CategorySection icon={AwardIcon} title="Corporate Connect" items={CORPORATE_CONNECT} />
        </div>
      </section>
    </>
  );
}
