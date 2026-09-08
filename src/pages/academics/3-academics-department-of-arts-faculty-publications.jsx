import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import CategorySection from '../../components/CategorySection';
import { UsersIcon, AwardIcon } from '../../components/icons';
import sessionUpsc from '../../assets/images/3-academics-department-of-arts-activities/session-upsc.jpg';
import understandingMarkets from '../../assets/images/3-academics-department-of-arts-activities/understanding-markets.jpg';
import unfoldingOfEducation from '../../assets/images/3-academics-department-of-arts-activities/unfolding-of-education.jpg';
import careerGuidanceSession from '../../assets/images/3-academics-department-of-arts-activities/career-guidance-session.jpg';
import edwiseInternational from '../../assets/images/3-academics-department-of-arts-activities/edwise-international.jpg';
import tradeTheory from '../../assets/images/3-academics-department-of-arts-activities/trade-theory.jpg';
import climate1 from '../../assets/images/gallery/observed-climate-change-seminar/1.jpg';
import climate2 from '../../assets/images/gallery/observed-climate-change-seminar/2.jpg';
import climate3 from '../../assets/images/gallery/observed-climate-change-seminar/3.jpg';
import climate4 from '../../assets/images/gallery/observed-climate-change-seminar/4.jpg';
import climate5 from '../../assets/images/gallery/observed-climate-change-seminar/5.jpg';
import climate6 from '../../assets/images/gallery/observed-climate-change-seminar/6.jpg';
import ielts1 from '../../assets/images/gallery/ielts-training-session/1.jpg';
import ielts2 from '../../assets/images/gallery/ielts-training-session/2.jpg';
import ielts3 from '../../assets/images/gallery/ielts-training-session/3.jpg';
import ielts4 from '../../assets/images/gallery/ielts-training-session/4.jpg';
import ielts5 from '../../assets/images/gallery/ielts-training-session/5.jpg';
import ielts6 from '../../assets/images/gallery/ielts-training-session/6.jpg';
import ielts7 from '../../assets/images/gallery/ielts-training-session/7.jpg';
import ielts8 from '../../assets/images/gallery/ielts-training-session/8.jpg';
import careerGuidanceSeyona1 from '../../assets/images/gallery/career-guidance-session-alumna/1.jpg';
import careerGuidanceSeyona2 from '../../assets/images/gallery/career-guidance-session-alumna/2.jpg';

const CLIMATE_IMAGES = [climate1, climate2, climate3, climate4, climate5, climate6];
const IELTS_IMAGES = [ielts1, ielts2, ielts3, ielts4, ielts5, ielts6, ielts7, ielts8];
const CAREER_GUIDANCE_SEYONA_IMAGES = [careerGuidanceSeyona1, careerGuidanceSeyona2];

const SEMINAR = [
  {
    name: "Seminar on 'Observed Climate Change over the Indian Region'",
    images: CLIMATE_IMAGES,
    description: 'A seminar by Dr O. P. Sreejith, Scientist and Head, Climate Monitoring and Prediction, IMD Pune, explored observed climate change in India, highlighting rising temperatures, changing rainfall patterns, and extreme weather events while emphasising sustainable environmental action.',
  },
  {
    name: 'Training Session on IELTS',
    images: IELTS_IMAGES,
    description: 'A session on IELTS was organised on campus, with Dr Ruby Kumari guiding students on effective preparation strategies and key skills required to excel in the examination.',
  },
  {
    name: 'Session on Preparing for the UPSC Exam',
    date: '22 October',
    image: sessionUpsc,
    description: 'The department partnered with IQRA to organize two major events in October. On 16th October, IQRA conducted a Scholarship Entrance Examination for GS Prelims and Mains (UPSC/PCS), offering students a chance to prepare for competitive exams. On 22nd October, a session on preparing for the UPSC exam was held, providing students with strategies and tips for cracking one of the nation’s most challenging examinations.',
  },
  {
    name: 'Understanding the Markets in the Modern Microeconomic Scenario',
    image: understandingMarkets,
    description: "In today's rapidly changing economic landscape, a profound comprehension of individual markets is indispensable for various stakeholders, including businesses, policymakers, and economists. This session served as a comprehensive exploration into the realm of modern microeconomics markets, unveiling the intricate workings and influences that define them. The insights gleaned from the session furnished invaluable guidance for informed decision-making, strategic formulation, and effective market navigation.",
  },
  {
    name: 'Unfolding of Education',
    image: unfoldingOfEducation,
    description: 'The guest session on "Unfolding of Education" was enlightening, delving into innovative pedagogical approaches. Dr. Bhupesh Chintamani discussed the evolution of traditional education towards flexible, adaptive models, emphasizing personalized learning and skill development, and highlighted the significance of technology in democratizing education. The session underscored the importance of fostering critical thinking, creativity, and adaptability in learners to navigate the complexities of the modern world.',
  },
];

const CORPORATE_CONNECT = [
  {
    name: 'Career Guidance Session — Alumna Seyona Alex',
    images: CAREER_GUIDANCE_SEYONA_IMAGES,
    description: 'Session with Alumna Seyona Alex offered students insights on confidence, creativity, teamwork, and leadership for career readiness.',
  },
  {
    name: 'Career Guidance Session',
    date: '30 July 2024',
    image: careerGuidanceSession,
    description: 'Mrs. Ruby Kumari conducted a career guidance session for students, covering topics such as career planning, skill development, and navigating the job market. Students appreciated the practical advice and motivational insights shared by Mrs. Kumari, making the session a significant step towards their professional growth.',
  },
  {
    name: 'Edwise International',
    date: '23 September 2024',
    image: edwiseInternational,
    description: 'A guest lecture by Edwise International was conducted, led by Subhash Pol, focusing on international scholarship programs and the opportunities available to students pursuing higher education abroad. This session was particularly valuable for students aspiring to global academic excellence, providing critical information about scholarships, application processes, and eligibility criteria.',
  },
  {
    name: 'Trade Theory in the Modern Times',
    date: '20 April 2023',
    image: tradeTheory,
    description: 'The guest lecture on "Trade Theory in the Modern Times", conducted by Ms. Pooja Dinesh Thakur, was a thought-provoking and informative session hosted at Chavara Hall, providing attendees with valuable insights into the dynamics of international trade in contemporary contexts. Pooja Dinesh Thakur delved into complex trade concepts, economic models, and current trade trends, making them accessible and comprehensible to the audience.',
  },
];

export default function DepartmentOfArtsFacultyPublicationsPage() {
  return (
    <>
      <Seo
        title="Seminars/ Corporate Connect — Department of Arts"
        description="Seminars, corporate connect sessions and faculty publications from the Department of Arts at Christ College, Pune."
      />
      <PageHeader
        title="Seminars/ Corporate Connect"
        breadcrumbs={[
          { label: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
          { label: 'Seminars/ Corporate Connect' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-14">
          <CategorySection icon={UsersIcon} title="Seminar" items={SEMINAR} />
          <CategorySection icon={AwardIcon} title="Corporate Connect" items={CORPORATE_CONNECT} />
        </div>
      </section>
    </>
  );
}
