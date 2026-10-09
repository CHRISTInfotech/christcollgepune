import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { GridIcon, BookIcon, UsersIcon, AwardIcon, CompassIcon, GlobeIcon, CalendarIcon } from '../../components/icons';
import successBlueprint1 from '../../assets/images/gallery/success-blueprint-interview-attitude/1.jpg';
import successBlueprint2 from '../../assets/images/gallery/success-blueprint-interview-attitude/2.jpg';
import successBlueprint3 from '../../assets/images/gallery/success-blueprint-interview-attitude/3.jpg';
import investorAwareness1 from '../../assets/images/gallery/investor-awareness-session/1.jpg';
import investorAwareness2 from '../../assets/images/gallery/investor-awareness-session/2.jpg';
import investorAwareness3 from '../../assets/images/gallery/investor-awareness-session/3.jpg';
import cybersecurityCareers1 from '../../assets/images/gallery/cybersecurity-careers-beyond/1.jpg';
import cybersecurityCareers2 from '../../assets/images/gallery/cybersecurity-careers-beyond/2.jpg';
import cybersecurityCareers3 from '../../assets/images/gallery/cybersecurity-careers-beyond/3.jpg';
import cybersecurityCareers4 from '../../assets/images/gallery/cybersecurity-careers-beyond/4.jpg';
import healthyRelationships1 from '../../assets/images/gallery/healthy-interpersonal-relationships/1.jpg';
import healthyRelationships2 from '../../assets/images/gallery/healthy-interpersonal-relationships/2.jpg';
import healthyRelationships3 from '../../assets/images/gallery/healthy-interpersonal-relationships/3.jpg';
import healthyRelationships4 from '../../assets/images/gallery/healthy-interpersonal-relationships/4.jpg';
import healthyRelationships5 from '../../assets/images/gallery/healthy-interpersonal-relationships/5.jpg';
import canAiBeCreative1 from '../../assets/images/gallery/can-ai-be-creative/1.jpg';
import canAiBeCreative2 from '../../assets/images/gallery/can-ai-be-creative/2.jpg';
import canAiBeCreative3 from '../../assets/images/gallery/can-ai-be-creative/3.jpg';
import canAiBeCreative4 from '../../assets/images/gallery/can-ai-be-creative/4.jpg';
import canAiBeCreative5 from '../../assets/images/gallery/can-ai-be-creative/5.jpg';
import christmasCarnival from '../../assets/images/3-academics-department-of-management-activities/christmas-carnival.jpg';
import internationalWomensDay from '../../assets/images/3-academics-department-of-management-activities/international-womens-day-panel-discussion.jpg';
import manifest25 from '../../assets/images/3-academics-department-of-management-activities/manifest-25.jpg';
import workshopLeanCanvas from '../../assets/images/3-academics-department-of-management-activities/workshop-on-lean-canvas.jpg';
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
import webinarDemystify from '../../assets/images/3-academics-department-of-management-activities/demystify-what-when-and-how-of-research.jpg';
import webinarIndianBanking from '../../assets/images/3-academics-department-of-management-activities/indian-banking-sector.jpg';
import sulaWines from '../../assets/images/3-academics-department-of-management-activities/sula-wines-nashik.jpg';

const ACTIVITY = [
  {
    name: "International Women's Day — Panel Discussion",
    date: '8 March',
    image: internationalWomensDay,
    description: 'Christ College Pune\'s Department of Management held a panel discussion on International Women\'s Day titled "Unleashing the Power of Women: Breaking Barriers, Redefining Success, and Inspiring the Next Generation." Moderated by Dr. Stanny Dias, the discussion featured accomplished panelists including Ms. Rekha Rosario (Infosys BPM Ltd.), Ms. Dhun Patel (Therefore Design), Ms. Anjor Wagle (SLB), Dr. Archana Gaur (ALARD University) and Dr. Shruti Shah, who shared insights on workplace inclusivity, career growth, financial independence, and mentorship.',
  },
  {
    name: 'Eco Bazaar',
    date: '21 February 2025',
    description: 'The Eco Bazaar 2025, held at Christ College, Pune, aimed to promote sustainable living through eco-friendly products made from natural, recycled, or biodegradable materials. Students showcased their creativity and entrepreneurship with products like tree stick photo frames, cloth tote bags, and tea bag lanterns, alongside food stalls offering sustainable options. The event provided hands-on experience in sustainability, business management, and communication.',
  },
  {
    name: "Manifest '25",
    date: '21 February 2025',
    image: manifest25,
    description: "Manifest'25 was successfully organized by Christ College Pune, providing an intercollegiate platform for students to showcase their skills in HR, Finance, Marketing, Business Analytics, Auction, e-sports, and more. The event saw participation from six prestigious colleges with 62 participants, fostering intellectual engagement and healthy competition. MIT WPU emerged as the winner, with Christ University, Lavasa as the runner-up.",
  },
  {
    name: 'Christmas Carnival',
    date: '2024–25',
    image: christmasCarnival,
    description: 'Christmas Carnival 2024–25 was a vibrant celebration of joy, unity, and generosity at Christ College. The event brought together the college community and children from a local orphanage, creating a heartwarming festive atmosphere. Highlights included student-run stalls, cultural performances, and sweets distribution. Charity drives like "Handful of Rice" and "Woolen Clothes" added meaning to the celebration by supporting those in need.',
  },
  {
    name: 'PTA Meet',
    description: 'The PTA meeting at Christ College began with invitations sent via email and phone calls by class in-charges. The Principal, Fr. Dr. Arun Anthony Chully CMI, welcomed parents, stressing the importance of parental involvement in students\' education. A departmental presentation by HoD Mrs. Deepa Sujith highlighted students\' academic performance and areas for improvement, followed by an interactive Q&A session addressing concerns on exam preparation and student progress.',
  },
];

const WORKSHOP = [
  {
    name: 'CET Crash Course 2026',
    date: '21–26 April 2026',
    description: 'The Department of Management, Christ College Pune, organized the CET Crash Course 2026 from 21 to 26 April 2026 to prepare students for the MAH BBA/BCA/BMS/BBM CET examination. The intensive programme covered English Language, Reasoning, General Knowledge, Computer Awareness, and examination strategies through focused sessions and practice. Students also participated in a full-length mock CET followed by answer discussion, doubt-solving, and time-management guidance. The course strengthened students’ conceptual understanding, problem-solving abilities, exam readiness, and confidence for the entrance examination.',
  },
  {
    name: 'Career Carnival – 2026',
    date: '24 February 2026',
    description: 'The Department of Commerce organized “Career Carnival – 2026” on 24 February 2026, featuring a Mock Interview Drive designed to bridge the gap between academic learning and corporate expectations. Students participated in simulated technical and behavioural interview rounds based on roles in data analytics and finance, followed by personalized feedback to identify areas for improvement. The activity provided practical exposure to professional communication, problem-solving, corporate etiquette, and ethical decision-making. The event enhanced students’ career readiness and confidence while encouraging continuous professional development.',
  },
  {
    name: 'Can AI Be Creative?',
    date: '10 February 2026',
    images: [canAiBeCreative1, canAiBeCreative2, canAiBeCreative3, canAiBeCreative4, canAiBeCreative5],
    description: 'The Department of Management organized a workshop on “Can AI Be Creative? Democratizing AI Resources – Exploring AI’s Role in Art, Media, and Intellectual Property” on 10 February 2026. The session introduced students to the creative applications of Artificial Intelligence in generating images, videos, text, and other digital content. Students participated in hands-on activities to distinguish AI-generated content from human-created content and explored tools such as DALL·E, Midjourney, Runway ML, Canva AI, and Adobe Firefly. The workshop also encouraged critical thinking about the ethical and intellectual property implications of AI while highlighting its potential as a collaborative tool for creativity and innovation.',
  },
  {
    name: 'SPPU Startup Talk Series — Conversation with Young Entrepreneurs',
    date: '9 February 2026',
    description: 'Christ College – Pune, in association with Nirmiti Startup and Innovation Centre and IQAC, organized an interactive session under the SPPU Startup Talk Series titled “Conversation with Young Entrepreneurs” on 9 February 2026. The session featured Mr. Bapu Shivaji Narute, an entrepreneur and founder of Manashanti Chaibar, who shared his entrepreneurial journey and experiences. He discussed practical aspects of entrepreneurship, including prototyping, fundraising, revenue models, networking, mentorship, and resilience. The session inspired students to identify real-life problems as business opportunities and encouraged them to explore entrepreneurship with innovation and purpose.',
  },
  {
    name: 'Healthy Interpersonal Relationships Among Young Adults',
    date: '3 December 2025',
    images: [healthyRelationships1, healthyRelationships2, healthyRelationships3, healthyRelationships4, healthyRelationships5],
    description: 'The Department of Management, in association with the Centre for Health and Wellness, organized a workshop on “Healthy Interpersonal Relationships Among Young Adults” on 3 December 2025 at Chavara Hall. The session was led by Dr. Ivan Netto, Senior Consultant Psychiatrist, who addressed emotional boundaries, self-awareness, empathy, effective communication, and conflict resolution. Through real-life examples and interactive discussions, students gained practical insights into building balanced and supportive relationships. The workshop promoted emotional well-being, emotional intelligence, and healthy interpersonal skills among young adults.',
  },
  {
    name: 'Cybersecurity Careers & Beyond: Shaping Tomorrow’s Tech Talent',
    date: '19 November 2025',
    images: [cybersecurityCareers1, cybersecurityCareers2, cybersecurityCareers3, cybersecurityCareers4],
    description: 'The Department of Computer Science, in collaboration with the Department of Management, organized a guest lecture titled “Cybersecurity Careers & Beyond: Shaping Tomorrow’s Tech Talent” on 19 November 2025. The session was led by Mr. Pradipto Chakrabarty, Country Head – CompTIA (India), who shared industry insights on cybersecurity, digital transformation, and emerging career opportunities. Students gained an understanding of global certifications, career pathways, and the role of cybersecurity in addressing digital risks and technical challenges. The session encouraged students to explore cybersecurity as a promising career option and strengthened their awareness of industry expectations.',
  },
  {
    name: 'Investor Awareness Session',
    date: '17 November 2025',
    images: [investorAwareness1, investorAwareness2, investorAwareness3],
    description: 'The NCDEX Investor Awareness Session was conducted on 17 November 2025 in collaboration with Krisha Foundation and coordinated by Prof. Aaditya Sharma to enhance financial literacy and awareness of commodity markets among students and faculty. The session covered commodity exchanges, derivatives, futures contracts, online commodity trading, price discovery, and regulatory frameworks. Participants gained insights into investor protection, grievance redressal mechanisms, and career opportunities in commodity trading and financial analytics. The interactive session and Q&A helped participants develop a better understanding of responsible financial decision-making and the role of commodity markets in the Indian economy.',
  },
  {
    name: 'Safeguard Yourself from Frauds & Scams',
    date: '30 September 2025',
    description: 'The Department of Management, in collaboration with Krisha Foundation, organized a session on “How to Safeguard Yourself from Frauds & Scams” on 30 September 2025 for SYBBA and TYBBA Finance students. The session was conducted by Ms. Ashwini Kulkarni, SEBI-Certified Securities Market Trainer, who discussed common online frauds, cybercriminal tactics, and digital safety measures. Through practical examples and interactive discussions, students learned to identify suspicious activities and protect their personal and financial information. The session enhanced students’ awareness of digital threats and equipped them with essential skills for safe online practices.',
  },
  {
    name: 'The Success Blueprint: Interview & Attitude Essentials',
    date: '29 July 2025',
    images: [successBlueprint1, successBlueprint2, successBlueprint3],
    description: 'The Department of Management organized a guest lecture on “The Success Blueprint: Interview & Attitude Essentials” on 29 July 2025 at Chavara Hall, coordinated by Ms. Wilma Dias. The session was led by Mr. Dinesh Acharya, Founder, SRD Consultants, who shared practical insights on interview preparation, communication, confidence, body language, and professional attitude. The session emphasized the importance of self-awareness, adaptability, and creating a positive first impression during interviews. It enhanced students’ career readiness and encouraged them to develop effective professional skills and behaviours.',
  },
  {
    name: 'My Journey of Driving Change — From Engineering to Digital Transformation',
    description: 'The Department of Management organized a workshop titled “My Journey of Driving Change – From Engineering to Digital Transformation”, coordinated by Dr. Leena Sanu and Dr. Stanny Dias. The session was led by Mr. Shivhari G., Senior Specialist in Data Science and AI/MLOps, who shared his career journey from engineering to advanced digital technologies. He highlighted the importance of curiosity, continuous learning, internships, practical projects, and adapting to emerging technologies such as AI and Data Science. The workshop also introduced students to tools and platforms including Microsoft 365 Copilot, Google ADK, GitHub, and HackerRank, motivating them to build digital portfolios and strengthen their career readiness.',
  },
  {
    name: 'Workshop on Lean Canvas',
    image: workshopLeanCanvas,
    description: 'Christ College Pune organized a Lean Canvas Workshop for final-year BBA (IB) students to introduce them to the Lean Canvas methodology — a one-page business plan framework. Facilitated by Kajari Mitra, CEO of BBNGO, the session covered the nine key components of the Lean Canvas, helping students deconstruct and validate business ideas and gain practical skills to analyze business concepts.',
  },
];

const SEMINAR = [
  {
    name: 'Seminar on Transforming Challenges into Opportunities: The Future of Business',
    date: '4 March 2025',
    image: seminarTransformingChallenges,
    description: 'Organized with NIRMITI, this seminar by Prof. Gururaj Dangare focused on entrepreneurship, strategic planning, and government schemes such as the Nidhi Prayas Scheme, MCED, and MSME & Export Assistance, along with a Vada Pav business case study demonstrating effective marketing techniques.',
  },
  {
    name: 'Seminar on Empowering Tomorrow: Developing Essential Skills for a Brighter Future',
    date: '16 February 2024',
    description: 'Mr. Vinay M. Dave, Placement Officer at Navjeevan Lokvikas Sanstha, conducted a seminar equipping students with essential skills such as communication, leadership, and problem-solving. He also introduced Udaan, a Bajaj Finserv-powered programme offering technical, theoretical, and practical knowledge.',
  },
  {
    name: 'Seminar on Investment Banking',
    date: '13 February 2024',
    image: seminarInvestmentBanking,
    description: 'Mr. Bhimesh Mishra, Associate Director at UBS, conducted a seminar titled "Career Options in Investment Banking," covering diverse career paths from corporate finance to mergers and acquisitions and the significance of professional certifications such as the Chartered Institute for Securities & Investment (CISI).',
  },
  {
    name: 'Seminar on Reskilling and Upskilling for the Future Workforce',
    date: '31 January 2024',
    image: seminarReskilling,
    description: 'Mr. George Cardoz, Head of HR and Talent Acquisition at Forbes Marshall, led a seminar on preparing for the evolving job market, covering emerging industry trends, the impact of advancing technologies, self-assessment, and personalized career-advancement plans.',
  },
  {
    name: 'Seminar on an Introduction to Business Analytics',
    date: '23 January 2024',
    description: 'Mr. Deepak Luthra from the Boston Institute of Analytics conducted a seminar on data analytics, covering its applications, significance, and impact across industries, the latest trends and tools, and potential career paths in the field.',
  },
  {
    name: 'Seminar on Career Planning & Career Development',
    date: '4 January 2024',
    description: 'The Department of Management hosted a seminar on "Career Planning and Career Development" conducted by Habbinsons, experts in career guidance. Participants explored self-assessment, goal setting, skill development, and networking strategies, along with current job-market trends and emerging career opportunities.',
  },
  {
    name: 'Seminar — MoneyTree: Financial Literacy Campaign',
    date: '25 October 2023',
    image: seminarMoneytree,
    description: 'Organized jointly with the Department of Arts and Commerce and Christ University, Lavasa, this seminar promoted financial literacy among students, covering budgeting, saving, investment options, and financial planning for the future.',
  },
  {
    name: 'Seminar on Building a Better LinkedIn Profile for Increased Visibility',
    date: '19 October 2023',
    image: seminarLinkedin,
    description: 'The Department of Management hosted a seminar on optimizing LinkedIn profiles, featuring Prof. Sonal Raul, Assistant Professor of Finance at ITM Business School, Kharghar. The session equipped second- and third-year students with strategies for effective networking, showcasing achievements, and leveraging LinkedIn for career advancement.',
  },
  {
    name: 'Seminar on Industry Trends and Graduate Proficiencies',
    date: '17 October 2023',
    image: seminarIndustryTrends,
    description: 'Mr. Majid Ali Khan, a Global HR and Talent Leader, delivered a corporate talk for second-year students on industry trends projected for 2025 and beyond, emphasizing proficiencies such as Artificial Intelligence, Data Analytics, Cloud Data Engineering, FinOps, and Digital Marketing alongside essential human skills like analytical thinking and adaptability.',
  },
  {
    name: 'Seminar on the Companies Act, 2013',
    date: '13 October 2023',
    image: seminarCompaniesAct,
    description: 'The Department of Management organized a guest lecture on the Companies Act, 2013, conducted by Assistant Professor Siju Mathew, covering the background and objectives of the Act, company formation procedures, and the Memorandum and Articles of Association (MOA and AOA).',
  },
  {
    name: 'Seminar — T.I.M.E.: Building Your Professional Identity',
    date: '12 October 2023',
    image: seminarTime,
    description: 'Mr. Rahul Mahabir, Director of T.I.M.E. Jaipur, Pune & Jodhpur Centre, conducted a Career Guidance Programme on building a professional identity.',
  },
  {
    name: 'Seminar on Higher Education Prospects',
    date: '21 September 2023',
    image: seminarHigherEducation,
    description: 'Christ College Pune, in collaboration with Y-axis, organized a seminar conducted by Mr. Allan Dass offering guidance on opportunities for higher education abroad, selecting the right course, college and country, common application mistakes, and part-time work and post-study employment options.',
  },
  {
    name: 'Seminar on Diversities in Cross-Cultural HR',
    date: '14 September 2023',
    image: seminarDiversitiesHr,
    description: 'The Department of Management hosted a seminar on "Diversities in Cross Cultural HR" featuring Ms. Rinku Nagpal, Senior Manager of Talent Acquisition at Hitachi Vantara, exploring the challenges and opportunities in HR management when dealing with diverse cultural backgrounds within organizations.',
  },
  {
    name: 'Seminar on Empowering Young Minds: Turn Your Passion into a Successful Business',
    date: '13 September 2023',
    image: seminarEmpoweringYoungMinds,
    description: 'Mr. Anirudh Pole led a corporate talk covering visualization and gratitude, excellence through discipline, willingness to change and self-challenge, and the importance of confidence, body language, and communication for success.',
  },
  {
    name: 'Seminar on Healthcare Career Diversity: Exploring Job Opportunities',
    date: '28 August 2023',
    image: seminarHealthcare,
    description: 'Dr. Kshama Patne led a guest lecture introducing students to the myriad opportunities available in the healthcare sector, encouraging them to explore potential career paths in this dynamic field.',
  },
  {
    name: 'Seminar on Mind Algorithms: Computational Thinking, Computing and Programming Excellence',
    date: '19 August 2023',
    image: seminarMindAlgorithm,
    description: 'An online guest lecture by Mr. Prashant Joshi covered computing and related fields, aiming to develop a computational mindset and understand the importance of logic in programming for future computation such as AI and ML.',
  },
  {
    name: 'Seminar on the Supply Chain Management of the Mumbai Dabbawalas',
    date: '17 August 2023',
    image: seminarDabbawala,
    description: 'Mr. Ritesh Andhre, spokesperson of the Nutan Mumbai Tiffin Box Supplier Charity Trust, engaged students with real-life anecdotes and statistics on how the Dabbawalas manage to deliver over 200,000 lunch boxes across Mumbai with remarkable precision and accuracy.',
  },
  {
    name: 'Seminar on Enterprise Inception: Building Your Business',
    date: '5 August 2023',
    image: seminarEnterpriseInception,
    description: 'C S Akash Binoy, a Practicing Company Secretary from Akash Binoy and Associates, conducted a seminar providing aspiring entrepreneurs with insights into the foundational aspects of starting and growing a successful enterprise, underscoring ethical practices, compliance, and strategic planning.',
  },
  {
    name: 'Seminar: Education — Yesterday, Today and Tomorrow, an Exploration of Influence & Persuasion',
    date: '27–28 July 2023',
    image: seminarEducation,
    description: 'The Habbinson\'s team, under Mr. Adnan Siddiqui (Founder and CEO), conducted a session at Chavara Hall exploring the evolution of education over time and the role of influence and persuasion in shaping educational practices, encouraging students to envision a future where education is inclusive and technologically advanced.',
  },
  {
    name: 'Seminar on HR in the Digital Age',
    image: seminarHrDigitalAge,
    description: 'Mr. Noel Saji Paul, Manager of HRMS Administration, HR Operations, and Compliance at Bajaj Auto Ltd., conducted a seminar for HR-specialization students covering HRMS cloud, connected systems, harassment reporting tools, and SAP HCM through a presentation and live demos.',
  },
];

const WEBINAR = [
  {
    name: 'Webinar on the Indian Banking Sector',
    date: '18 October 2023',
    image: webinarIndianBanking,
    description: 'Mr. C. D. Simon, a retired General Manager from Federal Bank, delivered a webinar on emerging trends, challenges, opportunities, and the evolving landscape of banking in India, including regulatory frameworks and the role of technology.',
  },
  {
    name: 'Webinar — Demystifying What, When and How of Research',
    date: '31 August 2023',
    image: webinarDemystify,
    description: 'Ms. Virangi Shah Patel, CS and Research Associate from IIM Ahmedabad, conducted a webinar providing undergraduate students with a clear understanding of the fundamental aspects of research, its practical applications, and potential career paths.',
  },
];

const FIELD_VISIT = [
 
  {
    name: 'Industry Visit — KVK Baramati',
    date: '20 January 2025',
    description: 'Christ College Pune organized an industry visit to KVK Baramati for TYBBA-IB and TYBBA-CA students to gain practical exposure to agricultural innovations and rural development initiatives. Students explored research fields, soil-testing labs, horticulture, and animal husbandry units, learning about sustainable farming practices and modern technologies like AI and IoT in agriculture.',
  },
  
  {
    name: 'Sula Wines, Nashik',
    date: '6 October 2023',
    image: sulaWines,
    description: 'The industrial visit to Sula Vineyards in Nashik was an informative experience for 85 students from TYBBA and TYBBA-IB, accompanied by two faculty members. Students learned about grape farming, the wine-making process, the different types of wines produced, and the supply chain, marketing and selling processes involved in the wine industry.',
  },
];

const CORPORATE_CONNECT = [
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

function CategorySection({ icon: Icon, title, items }) {
  return (
    <div>
      <h2 className="flex items-center gap-2.5 mt-12">
        <Icon className="h-6 w-6 text-cc-primary shrink-0" />
        {title}
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
            {item.images ? (
              <ImageCarousel images={item.images} alt={item.name} />
            ) : (
              item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
            )}
            <div className="p-5">
              <h3 className="text-base break-words">{item.name}</h3>
              {item.date && (
                <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wide text-cc-primary">
                  <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                  {item.date}
                </p>
              )}
              {item.description && <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DepartmentOfManagementActivitiesPage() {
  return (
    <>
      <Seo
        title="Activities — Department of Management"
        description="Activities, workshops, seminars, webinars, industrial visits and corporate connect sessions organised by the Department of Management at Christ College, Pune."
      />
      <PageHeader
        title="Activities"
        breadcrumbs={[
          { label: 'Department of Management', path: '/academics/department-of-management/department-page' },
          { label: 'Activities' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          Beyond academics, the Department of Management organises a wide range of co-curricular
          activities for students — activities, workshops, seminars, webinars, industrial and
          field visits, and corporate connect sessions — grouped below by category.
        </p>

        <div className="mt-10 flex flex-col gap-14">
          <CategorySection icon={UsersIcon} title="Activity" items={ACTIVITY} />
          <CategorySection icon={BookIcon} title="Workshop" items={WORKSHOP} />
          <CategorySection icon={GridIcon} title="Seminar" items={SEMINAR} />
          <CategorySection icon={GlobeIcon} title="Webinar" items={WEBINAR} />
          <CategorySection icon={CompassIcon} title="Industrial / Field Visits" items={FIELD_VISIT} />
          <CategorySection icon={AwardIcon} title="Corporate Connect" items={CORPORATE_CONNECT} />
        </div>
      </section>
    </>
  );
}
