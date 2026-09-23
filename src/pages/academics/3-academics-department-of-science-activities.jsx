import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import CategorySection from '../../components/CategorySection';
import { BookIcon, UsersIcon, CompassIcon } from '../../components/icons';
import workshopItIndustry from '../../assets/images/3-academics-department-of-science-activities/workshop-it-industry.jpeg';
import aiml1 from '../../assets/images/gallery/aiml-workshop-learn-build-apply/1.jpg';
import aiml2 from '../../assets/images/gallery/aiml-workshop-learn-build-apply/2.jpg';
import aiml3 from '../../assets/images/gallery/aiml-workshop-learn-build-apply/3.jpg';
import aiml4 from '../../assets/images/gallery/aiml-workshop-learn-build-apply/4.jpg';
import aiml5 from '../../assets/images/gallery/aiml-workshop-learn-build-apply/5.jpg';
import aiml6 from '../../assets/images/gallery/aiml-workshop-learn-build-apply/6.jpg';
import aiml7 from '../../assets/images/gallery/aiml-workshop-learn-build-apply/7.jpg';
import aiml8 from '../../assets/images/gallery/aiml-workshop-learn-build-apply/8.jpg';
import aiml9 from '../../assets/images/gallery/aiml-workshop-learn-build-apply/9.jpg';

const AIML_WORKSHOP_IMAGES = [aiml1, aiml2, aiml3, aiml4, aiml5, aiml6, aiml7, aiml8, aiml9];

const WORKSHOP = [
  {
    name: 'National Workshop on AI & ML — "Learn, Build, Apply"',
    date: '11 & 12 March 2026',
    images: AIML_WORKSHOP_IMAGES,
    description: "The Department of Computer Science, Christ College organised a Two-Day National Workshop on Artificial Intelligence and Machine Learning titled \"Learn, Build, Apply\" on 11th and 12th March 2026, funded by Savitribai Phule Pune University, Pune. The workshop aimed to give participants — faculty members, research scholars, and students — a comprehensive blend of conceptual understanding and hands-on experience in AI and ML, focusing on real-world applications and practical implementation. Its objectives were to build a strong conceptual understanding of AI/ML fundamentals; provide hands-on experience designing, building and evaluating AI/ML models; expose participants to real-world applications and industry trends; enhance analytical, problem-solving and research skills through practical case studies; and promote ethical awareness and responsible use of AI technologies. The organising committee comprised Chief Patron Dr. Fr. Arun Chully, CMI; Organising Secretary Mrs. Nilima Gaikwad; and Convenors Mrs. Nisha More and Mrs. Rasila Walhekar. Speakers included Dr Samiksha Shukla (HoD, Department of CSE-Cyber Security & Head of Research, Dayananda Sagar Academy of Technology and Management, Bangalore), Mr Gopal Parasnis (Head of Transformation, Innovation, and Domain Consulting for the Banking Industry Vertical, Tech Mahindra), Mr Kunal Pagariya (Software Technical Expert, Amdocs India Pvt. Ltd., with expertise in software architecture, Java, Python, Cloud, DevOps, Deep Learning and GenAI Agents), Ms Rupali Memane (Assistant Professor, University of People), Dr Sulaxan Jadhav (Assistant Professor, Symbiosis School of Economics), and Dr Vijayalaxmi (Associate Professor, Christ University, Lavasa).",
  },
  {
    name: 'Workshop on Career Opportunities in the IT Industry',
    date: '19 December 2023',
    image: workshopItIndustry,
    description: "The workshop on \"Career Opportunities in the IT Industry\" held on December 19th, 2023, was a highly informative session for first-year B.Sc students of the Science Department. Facilitated by Mr. Nitin Abraham, the Centre Manager at IANT Computer Education Institute in Pune's Viman Nagar, the workshop aimed to enlighten students about the vast prospects within the IT sector, covering software development, cybersecurity, data science, and network administration.",
  },
];

const INDUSTRIAL_VISIT = [
  {
    name: 'GMRT — Giant Metrewave Radio Telescope Visit',
    date: '16 February 2024',
    description: 'On February 16, 2024, over 50 second-year students from the Department of Science embarked on an educational visit to the Giant Metrewave Radio Telescope (GMRT) in Pune. The day-long excursion, commencing at 7:00 am, included interactive sessions, guided tours, and hands-on experiences with scientists and researchers, deepening students’ understanding of radio astronomy before the group returned to college by 9:30 pm.',
  },
];

export default function DepartmentOfScienceActivitiesPage() {
  return (
    <>
      <Seo
        title="Conference/Workshop/Exhibitions — Department of Science"
        description="Workshops and industrial visits organised by the Department of Science at Christ College, Pune, including the National Workshop on AI & ML and the GMRT field visit."
      />
      <PageHeader
        title="Conference/Workshop/Exhibitions"
        breadcrumbs={[
          { label: 'Department of Science', path: '/academics/department-of-science/department-page' },
          { label: 'Conference/Workshop/Exhibitions' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          Beyond academics, the Department of Science organises a range of co-curricular
          activities for students — workshops and industrial visits — grouped below by category.
          For conferences, seminars and corporate connect talks, see the{' '}
          <a href="/academics/department-of-science/seminars-and-corporate-connect" className="text-cc-primary hover:underline">
            Seminars/ Corporate Connect
          </a>{' '}
          page.
        </p>

        <div className="mt-10 flex flex-col gap-14">
          <CategorySection icon={BookIcon} title="Workshop" items={WORKSHOP} />
          <CategorySection
            icon={UsersIcon}
            title="Club Activities"
            items={[]}
            emptyNote="No club activities published yet."
          />
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
