import DepartmentTemplate from '../../components/DepartmentTemplate';
import departmentBanner from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/department-banner.JPG';
import hodBijuSebastian from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/hod-biju-sebastian.png';
import events from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/events.JPG';
import association from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/association.JPG';
import activities from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/activities.JPG';
import achievementKrishna from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/achievement-krishna-chauhan.png';
import facultyPublications from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/faculty-publications.jpg';
import eventsAndActivities from '../../assets/images/gallery/aspire-expo/1.jpg';
import { getTestimonialsByDepartment } from '../../data/testimonials';

const PROGRAMMES = [
  { title: 'BA (Economics)', level: 'Undergraduate', path: '/academics/department-of-arts/ba-economics' },
  { title: 'BA (English)', level: 'Undergraduate', path: '/academics/department-of-arts/ba-english' },
  { title: 'BA (Psychology)', level: 'Undergraduate', path: '/academics/department-of-arts/ba-psychology' },
];

const ABOUT_PARAGRAPHS = [
  'The Department of Arts at Christ College, Pune, offers a vibrant and multidisciplinary learning environment through its Bachelor of Arts (B.A.) programme under the National Education Policy (NEP) framework of Savitribai Phule Pune University (SPPU). With English, Psychology, and Economics as its core disciplines, the department provides students with a well-rounded education that integrates knowledge, creativity, critical inquiry, and practical application.',
  'The B.A. programme is designed to foster intellectual curiosity, independent thinking, and a deeper understanding of society and human experiences. Through a balanced combination of theoretical foundations and experiential learning, students are encouraged to explore diverse perspectives, analyse real-world situations, and develop the skills necessary to navigate an evolving academic and professional landscape.',
  'The three disciplines offer distinctive yet interconnected avenues of learning. Economics equips students with the ability to understand economic systems, interpret data, and examine contemporary socio-economic issues. English nurtures proficiency in language and communication while fostering an appreciation of literature, culture, and critical thought. Psychology introduces students to the study of human behaviour, cognition, emotions, and interpersonal relationships, enabling them to develop a deeper understanding of individuals and society.',
  'In keeping with the vision of NEP, the department places emphasis on multidisciplinary learning, skill development, research aptitude, and the practical application of knowledge. Interactive classroom teaching, project-based learning, presentations, discussions, assignments, and other academic activities encourage students to become active participants in the teaching-learning process. These approaches help strengthen communication, analytical reasoning, problem-solving, creativity, and collaboration.',
  'The department is committed to nurturing academic excellence alongside holistic development. Students are encouraged to engage in research-oriented activities, community initiatives, co-curricular programmes, and opportunities that connect classroom learning with real-life experiences. The integration of discipline-specific knowledge with transferable skills prepares learners for diverse career pathways, higher education, competitive examinations, and lifelong learning.',
  'At the Department of Arts, Economics, English, and Psychology come together to create an inclusive and intellectually stimulating academic community. Through the dedicated efforts of faculty and students, the department strives to cultivate responsible, confident, and socially aware individuals who can contribute meaningfully to society.',
  'The Department of Arts — fostering knowledge, nurturing minds, and empowering futures.',
];

const ACTIVITIES = [
  { name: 'Fests', description: 'Department festivals and cultural celebrations.', image: events, path: '/academics/department-of-arts/festivals' },
  { name: 'CCAA', description: 'Christ College Arts Association', image: association, path: '/academics/department-of-arts/association' },
  { name: 'Conference/Workshop/Exhibitions', description: 'Conferences, workshops and exhibitions organised by the department.', image: activities, path: '/academics/department-of-arts/activities' },
  { name: 'Seminars/ Corporate Connect', description: 'Industry seminars and guest talks connecting students with the corporate world.', image: facultyPublications, path: '/academics/department-of-arts/seminars-and-corporate-connect' },
  { name: 'Events and Activities', description: 'Department events, activities and photo highlights.', image: eventsAndActivities, path: '/academics/department-of-arts/events-and-activities' },
];

const ACHIEVEMENTS = [
  {
    name: 'Krishna Chauhan',
    programme: 'SY BA',
    description: 'Selected to the PDZSC Cricket (Men) team to participate in the Savitribai Phule Pune University Inter Zonal Championship 2024-25.',
    photo: achievementKrishna,
  },
];

const TESTIMONIALS = getTestimonialsByDepartment('arts');

export default function DepartmentOfArtsPage() {
  return (
    <DepartmentTemplate
      seoTitle="Department of Arts"
      seoDescription="The Department of Arts (BA) at Christ College, Pune offers BA in Economics, English and Psychology, led by HOD Mr Biju Sebastian, with a multidisciplinary curriculum, research aptitude and experiential learning."
      departmentName="Department of Arts"
      breadcrumbs={[{ label: 'Department of Arts' }]}
      bannerImage={departmentBanner}
      programmes={PROGRAMMES}
      aboutParagraphs={ABOUT_PARAGRAPHS}
      vision="To foster intellectually curious, socially responsible and compassionate individuals through the study of language, literature and human behaviour."
      mission="To provide a holistic learning environment that promotes critical thinking, effective communication, psychological understanding, creativity and social awareness, empowering students to become confident individuals and responsible global citizens."
      hod={{
        name: 'Mr. Biju Sebastian',
        title: 'Head of Department',
        image: hodBijuSebastian,
        messageParagraphs: [
          'Welcome to the Department of Arts at Christ College, Pune!',
          'The Department of Arts is committed to providing a dynamic and enriching learning environment that encourages intellectual curiosity, critical thinking, creativity, and holistic development. Through our Bachelor of Arts (BA) programme, which brings together English, Psychology, and Economics under the National Education Policy (NEP) framework of Savitribai Phule Pune University, we strive to equip students with the knowledge, skills, and perspectives necessary to thrive in an increasingly complex and interconnected world.',
          'Each discipline offers unique opportunities for learning and growth. English fosters effective communication, literary appreciation, and cultural understanding; Psychology deepens our understanding of human behaviour and mental processes; and Economics develops analytical reasoning and informed decision-making through the study of economic systems and contemporary socio-economic issues. Together, these disciplines provide a strong foundation for academic advancement, professional growth, and responsible citizenship.',
          'We place great emphasis on experiential learning, research aptitude, skill development, and the practical application of knowledge. Through interactive teaching, presentations, projects, discussions, and co-curricular activities, our students are encouraged to develop essential competencies such as communication, problem-solving, collaboration, and independent thinking.',
          'With the support of our dedicated faculty, we strive to create an inclusive and stimulating environment that empowers students to explore their potential, pursue academic and professional excellence, and become responsible citizens. We are committed to shaping confident, compassionate, and socially conscious individuals prepared to make a meaningful contribution to society.',
        ],
      }}
      activities={ACTIVITIES}
      achievements={ACHIEVEMENTS}
      testimonials={TESTIMONIALS}
    />
  );
}
