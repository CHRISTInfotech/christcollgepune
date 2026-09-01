import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GridIcon, CalendarIcon, BookIcon, UsersIcon, AwardIcon, CompassIcon } from '../../components/icons';
import busyMinds from '../../assets/images/3-academics-department-of-arts-activities/busy-minds.jpg';
import aspireThinkCreateInspire from '../../assets/images/3-academics-department-of-arts-activities/aspire-think-create-inspire.jpg';
import ecomania24 from '../../assets/images/3-academics-department-of-arts-activities/ecomania-24.png';
import businessConclave from '../../assets/images/3-academics-department-of-arts-activities/business-conclave.jpg';
import udaan2025 from '../../assets/images/3-academics-department-of-arts-activities/udaan-2025.jpeg';
import sessionUpsc from '../../assets/images/3-academics-department-of-arts-activities/session-upsc.jpg';
import understandingMarkets from '../../assets/images/3-academics-department-of-arts-activities/understanding-markets.jpg';
import unfoldingOfEducation from '../../assets/images/3-academics-department-of-arts-activities/unfolding-of-education.jpg';
import econVibe from '../../assets/images/3-academics-department-of-arts-activities/econ-vibe.png';
import entrepreneurshipDevelopment from '../../assets/images/3-academics-department-of-arts-activities/entrepreneurship-development.jpg';
import financialLiteracy from '../../assets/images/3-academics-department-of-arts-activities/financial-literacy.jpg';
import garjanaMartialArts from '../../assets/images/3-academics-department-of-arts-activities/garjana-martial-arts.jpg';
import infosysHinjewadi from '../../assets/images/3-academics-department-of-arts-activities/infosys-hinjewadi.jpg';
import parleGFactory from '../../assets/images/3-academics-department-of-arts-activities/parle-g-factory.jpg';
import careerGuidanceSession from '../../assets/images/3-academics-department-of-arts-activities/career-guidance-session.jpg';
import edwiseInternational from '../../assets/images/3-academics-department-of-arts-activities/edwise-international.jpg';
import tradeTheory from '../../assets/images/3-academics-department-of-arts-activities/trade-theory.jpg';

const ACTIVITY = [
  {
    name: 'Busy Minds',
    date: '14 October',
    image: busyMinds,
    description: "The event Busy Minds was a collaborative initiative of Dept. of Management and Dept. of Arts for the students of FYBBA and FYBBA(IB), held at 11:15 am in commemorating National Innovation Day. The event was held at the college's Ground floor with numerous students who presented their creative and innovative business ideas. Rev Fr Dr Arun Antony CMI and Mr. Joy Kokat were the guests of honour for the event.",
  },
  {
    name: 'Aspire-Think-Create-Inspire',
    image: aspireThinkCreateInspire,
    description: "The 'Aspire-Think-Create-Inspire' exhibition, organized by the National Service Scheme (NSS), was a multidisciplinary showcase that aimed to illuminate the profound realms of human values and social ethics. This event bore the objectives of raising awareness, stimulating critical thinking, inspiring creative expression, and fostering community engagement. The exhibition featured an array of exhibits, interactive workshops, creative expression zones, and guest speakers, designed to facilitate exploration and understanding of ethics and values.",
  },
  {
    name: "Ecomania '24",
    image: ecomania24,
    description: "The Department of Arts, Christ College Pune, hosted a spectacular economics departmental fest, 'Ecomania '24,' in conjunction with the Department of Data Science, CHRIST (Deemed to be University) Pune Lavasa Campus. The fest included a series of engaging and intellectually stimulating activities, encompassing a wide array of events like Econ-Quest, EconMind, Christ Tank, Picto-nomics, Quid Pro Quo and various other activity-based competitions like decoration and club theme presentation. The students displayed remarkable passion, energy, and a strong understanding of economic concepts throughout the fest.",
  },
  {
    name: 'Business Conclave',
    date: '20 September 2024',
    image: businessConclave,
    description: "The Business Conclave showcased the department's focus on preparing students for the corporate world. Organized in collaboration with BNI, this event featured insightful discussions and presentations. Esteemed industry professionals shared their expertise, offering students valuable perspectives on entrepreneurship, innovation, and networking. The Conclave was praised for its professional organization and the depth of knowledge it imparted to attendees.",
  },
  {
    name: 'UDAAN 2025',
    date: '7 March 2025',
    image: udaan2025,
    description: "Udaan 2025, an intercollegiate fest organized by the Department of Arts, Christ College Pune, was a resounding success, attracting 850+ participants from over 50 colleges. The events included Nritya, a group dance competition; Sajja, a fashion show; Natya, a street play competition; Drishya, an online collage-making competition; Kavya, a poetry recitation competition; and Jigyasa, a quiz competition. The participants demonstrated exceptional talent, dedication, and teamwork, and the performances enthralled the audience throughout the fest.",
  },
];

const SEMINAR = [
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

const WORKSHOP = [
  {
    name: 'Econ Vibe',
    date: '19 November 2024',
    image: econVibe,
    description: 'Continuing its outreach efforts, the department conducted Econ Vibe, a Campus Connect Program, at Vidyankur Junior College. This program aimed to build connections with junior college students through interactive sessions and resource-sharing activities. The initiative fostered collaboration and inspired younger students to explore opportunities in higher education.',
  },
  {
    name: 'Entrepreneurship Development Training Program',
    image: entrepreneurshipDevelopment,
    description: "Prof. Santosh Lal's Entrepreneurship Development Training Program was an inspiring and practical workshop. Prof. Lal's expertise and interactive teaching style made complex concepts accessible. Participants learned key entrepreneurship skills and collaborated on business projects, fostering a supportive entrepreneurial community and equipping attendees with the knowledge and confidence to pursue their entrepreneurial goals.",
  },
  {
    name: 'Financial Literacy — Mutual Funds Invest-Verse Program',
    image: financialLiteracy,
    description: 'The Financial Literacy Workshop on "Mutual Funds Investment" conducted in collaboration with NSE Academy at Chavara Hall was an informative and enlightening event, playing a pivotal role in enhancing participants’ understanding of mutual funds and investment strategies. The workshop featured experts from NSE Academy who shared their insights on mutual funds, investment principles, and risk management, giving participants valuable insights into building a diversified investment portfolio.',
  },
  {
    name: 'Garjana — Martial Arts Self-Defence Training for Girls',
    date: '20 & 21 April 2023',
    image: garjanaMartialArts,
    description: 'The "Garjana - Martial Arts – Self-Defence Training for Girls" workshop was an empowering and enriching event organized by the Women Cell and NSS in association with the Sports Sambo Association Maharashtra and Department of Arts. Facilitated by martial arts experts Kumar Ugade and Sejal Singh, this workshop aimed to equip girls with valuable self-defence skills, conducted at Chavara Hall, focusing on building physical strength, enhancing mental resilience, and imparting strategies to handle challenging situations effectively.',
  },
];

const INDUSTRIAL_VISIT = [
  {
    name: 'Infosys, Hinjewadi',
    date: '28 January 2023',
    image: infosysHinjewadi,
    description: "The industrial visit to Infosys, which included an insightful campus tour at Hinjewadi, was a valuable and enriching experience, providing students a firsthand look at the inner workings of one of the leading IT companies in the world. Students explored Infosys' state-of-the-art facilities, cutting-edge technologies, and innovative workspaces, and engaged in meaningful discussions with Infosys professionals about the company's culture, work ethics, and the latest developments in the IT industry.",
  },
  {
    name: 'Parle-G Factory, Mavel',
    image: parleGFactory,
    description: "The industrial visit to the Parle-G factory was organised with a core focus on enriching students' comprehension of production methodologies, quality assurance protocols, and the overarching operational dynamics within one of India's prominent biscuit manufacturing entities. By facilitating this excursion, the primary goal was to seamlessly connect theoretical teachings with tangible experiences in the realm of food manufacturing.",
  },
];

const GUEST_LECTURE = [
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

export default function DepartmentOfArtsActivitiesPage() {
  return (
    <>
      <Seo
        title="Activities — Department of Arts"
        description="Activities, seminars, workshops, industrial visits and guest lectures organised by the Department of Arts at Christ College, Pune."
      />
      <PageHeader
        title="Activities"
        breadcrumbs={[
          { label: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
          { label: 'Activities' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          Beyond academics, the Department of Arts organises a range of co-curricular activities
          for students — activities, seminars, workshops, industrial visits, and guest lectures —
          grouped below by category.
        </p>

        <div className="mt-10 flex flex-col gap-14">
          <CategorySection icon={GridIcon} title="Activity" items={ACTIVITY} />
          <CategorySection icon={UsersIcon} title="Seminar" items={SEMINAR} />
          <CategorySection icon={BookIcon} title="Workshop" items={WORKSHOP} />
          <CategorySection icon={CompassIcon} title="Industrial Visit" items={INDUSTRIAL_VISIT} />
          <CategorySection icon={AwardIcon} title="Guest Lecture" items={GUEST_LECTURE} />
        </div>
      </section>
    </>
  );
}
