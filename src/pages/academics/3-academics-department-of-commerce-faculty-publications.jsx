import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import CategorySection from '../../components/CategorySection';
import { GridIcon, AwardIcon } from '../../components/icons';

const SEMINARS = [
  {
    name: 'Seminar on NSE Investment Awareness Programme',
    description: 'Valuable insights into financial markets, safe investing practices, and early financial planning were provided to FY and SY students through the NSE Investment Awareness Programme. Complex financial concepts were simplified and effectively explained by Ms Jyoti Agarwal through an interactive and engaging approach. Greater awareness of responsible investing and investor protection was fostered, and essential financial knowledge was imparted to the participants.',
  },
  {
    name: 'Financial Awareness and Career Knowledge',
    description: 'Unique Academy conducted a highly informative and enlightening for commerce students. It successfully enhanced students’ understanding of compounding in the stock market and introduced them to various professional courses. The session motivated students to plan their careers strategically and develop financial discipline. Overall, the seminar was a valuable learning experience that contributed to students’ academic and professional growth.',
  },
  {
    name: 'Seminar on Importance of Professional Certifications in Finance and Accounting',
    description: 'The session on “Importance of Professional Certifications in Finance and Accounting” by Mr Siddhant Sonawane introduced students to certifications like ACCA, CMA US, CFA, CA, and CS. The session highlighted their global recognition, career opportunities, and relevance in today’s competitive job market. Students gained insights into industry readiness, specialised skills, and the importance of continuous learning for successful careers in finance and accounting.',
  },
  {
    name: 'Session on Technical Trading',
    description: 'The Introduction to Technical Trading session by Mrs Sandeep Kaur introduced students to the basics of trading and technical analysis. Students learned about candlestick charts, bullish and bearish markets, chart reading, and identifying market trends such as uptrends and downtrends. Through interactive discussions and real-time examples, the session provided practical knowledge of how traders analyse markets and make informed decisions, building a strong foundation in financial trading concepts.',
  },
];

const CORPORATE_CONNECT = [
  {
    name: 'Bridging Campus Dreams to Corporate Reality',
    description: '‘Bridging Campus Dreams to Corporate Reality’ seminar was a highly impactful event that successfully met its objective of guiding students toward corporate readiness. Mr Shivam Warade’s expertise, combined with his practical advice, inspired students to reflect on their academic journey and prepare proactively for their careers.',
  },
  {
    name: 'Bridging Academics and Industry',
    description: 'A highly informative and inspiring seminar provided the TY BCom students with a clearer understanding of how to integrate academic learning with real world applications. Dr Sapna Mane’s practical insights motivated students to focus on continuous self-improvement, skill enhancement, and adaptability to meet industry standards. The session successfully raised awareness about the importance of being industry-ready in today’s competitive environment.',
  },
  {
    name: 'Session on Resume Building',
    description: 'The Department of Commerce and the Centre for Placements and Career Guidance organised a Resume Building Workshop for TY BCom students. Mr Akhil Paul guided students on ATS-friendly resumes, resume formats, industry expectations, LinkedIn, personal branding, and interview readiness. The interactive session helped students understand effective resume writing and prepare confidently for future career opportunities.',
  },
  {
    name: 'CET Awareness Session for MBA Aspirants',
    description: 'Dr Misba Kadri as the resource person from Poona Institute of Management Studies (PIMS) conducted a session on CET for MBA aspirants. The session covered exam details, eligibility, syllabus, application process, specialisations, and career opportunities, helping students understand admissions and preparation strategies clearly.',
  },
  {
    name: 'Career Guidance for MBA Aspirants',
    description: 'Mr Noel had conducted a session for Bcom students where he explained in detail about careers after pursuing MBA and what are the benefits and exam preparation route for all students. It was highly engaging and an informative session.',
  },
];

export default function DepartmentOfCommerceFacultyPublicationsPage() {
  return (
    <>
      <Seo
        title="Seminars/ Corporate Connect — Department of Commerce"
        description="Seminars and corporate connect sessions from the Department of Commerce at Christ College, Pune, including the NSE Investment Awareness Programme, professional certifications in finance, technical trading, resume building, and MBA career guidance."
      />
      <PageHeader
        title="Seminars/ Corporate Connect"
        breadcrumbs={[
          { label: 'Department of Commerce', path: '/academics/department-of-commerce/department-page' },
          { label: 'Seminars/ Corporate Connect' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-14">
          <CategorySection icon={GridIcon} title="Seminar" items={SEMINARS} />
          <CategorySection icon={AwardIcon} title="Corporate Connect" items={CORPORATE_CONNECT} />
        </div>
      </section>
    </>
  );
}
