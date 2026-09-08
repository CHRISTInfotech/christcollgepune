import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import CategorySection from '../../components/CategorySection';
import { GridIcon, BookIcon, CompassIcon } from '../../components/icons';
import busyMinds from '../../assets/images/3-academics-department-of-arts-activities/busy-minds.jpg';
import aspireThinkCreateInspire from '../../assets/images/3-academics-department-of-arts-activities/aspire-think-create-inspire.jpg';
import ecomania24 from '../../assets/images/3-academics-department-of-arts-activities/ecomania-24.png';
import businessConclave from '../../assets/images/3-academics-department-of-arts-activities/business-conclave.jpg';
import udaan2025 from '../../assets/images/3-academics-department-of-arts-activities/udaan-2025.jpeg';
import econVibe from '../../assets/images/3-academics-department-of-arts-activities/econ-vibe.png';
import entrepreneurshipDevelopment from '../../assets/images/3-academics-department-of-arts-activities/entrepreneurship-development.jpg';
import financialLiteracy from '../../assets/images/3-academics-department-of-arts-activities/financial-literacy.jpg';
import garjanaMartialArts from '../../assets/images/3-academics-department-of-arts-activities/garjana-martial-arts.jpg';
import infosysHinjewadi from '../../assets/images/3-academics-department-of-arts-activities/infosys-hinjewadi.jpg';
import parleGFactory from '../../assets/images/3-academics-department-of-arts-activities/parle-g-factory.jpg';
import aspireExpo1 from '../../assets/images/3-academics-department-of-arts-activities-aspire-expo/aspire-expo-1.jpg';
import aspireExpo2 from '../../assets/images/3-academics-department-of-arts-activities-aspire-expo/aspire-expo-2.jpg';
import aspireExpo3 from '../../assets/images/3-academics-department-of-arts-activities-aspire-expo/aspire-expo-3.jpg';
import aspireExpo4 from '../../assets/images/3-academics-department-of-arts-activities-aspire-expo/aspire-expo-4.jpg';
import aspireExpo5 from '../../assets/images/3-academics-department-of-arts-activities-aspire-expo/aspire-expo-5.jpg';
import aspireExpo6 from '../../assets/images/3-academics-department-of-arts-activities-aspire-expo/aspire-expo-6.jpg';
import aspireExpo7 from '../../assets/images/3-academics-department-of-arts-activities-aspire-expo/aspire-expo-7.jpg';
import aspireExpo8 from '../../assets/images/3-academics-department-of-arts-activities-aspire-expo/aspire-expo-8.jpg';
import digitalSkills1 from '../../assets/images/gallery/digital-skills-workshop-canva/1.jpg';
import digitalSkills2 from '../../assets/images/gallery/digital-skills-workshop-canva/2.jpg';
import digitalSkills3 from '../../assets/images/gallery/digital-skills-workshop-canva/3.jpg';
import digitalSkills4 from '../../assets/images/gallery/digital-skills-workshop-canva/4.jpg';
import digitalSkills5 from '../../assets/images/gallery/digital-skills-workshop-canva/5.jpg';

const ASPIRE_EXPO_IMAGES = [aspireExpo1, aspireExpo2, aspireExpo3, aspireExpo4, aspireExpo5, aspireExpo6, aspireExpo7, aspireExpo8];
const DIGITAL_SKILLS_IMAGES = [digitalSkills1, digitalSkills2, digitalSkills3, digitalSkills4, digitalSkills5];

const ACTIVITY = [
  {
    name: 'Aspire Expo',
    images: ASPIRE_EXPO_IMAGES,
    description: 'The Aspire Expo, organised by the Department of Arts in collaboration with the NSS Unit, Department of Science, and Centre for Environment and Climate Change, provided a creative platform for students to raise awareness about pressing societal issues through posters and digital comic strips on themes such as environmental sustainability, mental health, and gender equality.',
  },
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
  {
    name: 'Symposium — "Mission Si\' Today: Religions Journeying Together for Peace"',
    description: 'Students participated in the International Symposium on "Mission Si\' Today: Religions Journeying Together for Peace," organised by Ishvani Kendra, Pune, as part of its Golden Jubilee celebrations, bringing together scholars, academicians, and religious leaders to explore the role of religions in fostering peace, dialogue, and mutual understanding in contemporary society.',
  },
];

const WORKSHOP = [
  {
    name: 'Workshop on Digital Skills — Canva',
    images: DIGITAL_SKILLS_IMAGES,
    description: 'A Digital Storytelling Workshop by Dr Priya Wahab provided hands-on Canva training, enabling students to explore creative storytelling and visual design through engaging digital comics.',
  },
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

export default function DepartmentOfArtsActivitiesPage() {
  return (
    <>
      <Seo
        title="Conference/Workshop/Exhibitions — Department of Arts"
        description="Conferences, workshops, exhibitions and industrial visits organised by the Department of Arts at Christ College, Pune."
      />
      <PageHeader
        title="Conference/Workshop/Exhibitions"
        breadcrumbs={[
          { label: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
          { label: 'Conference/Workshop/Exhibitions' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          Beyond academics, the Department of Arts organises a range of conferences, workshops,
          exhibitions and industrial visits for students, grouped below by category.
        </p>

        <div className="mt-10 flex flex-col gap-14">
          <CategorySection icon={GridIcon} title="Activity" items={ACTIVITY} />
          <CategorySection icon={BookIcon} title="Workshop" items={WORKSHOP} />
          <CategorySection icon={CompassIcon} title="Industrial Visit" items={INDUSTRIAL_VISIT} />
        </div>
      </section>
    </>
  );
}
