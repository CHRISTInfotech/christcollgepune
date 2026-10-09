import DepartmentTemplate from '../../components/DepartmentTemplate';
import departmentBanner from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/department-banner.JPG';
import hodBijuSebastian from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/hod-biju-sebastian.png';
import events from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/events.JPG';
import association from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/association.JPG';
import activities from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/activities.JPG';
import achievementKrishna from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/achievement-krishna-chauhan.png';
import facultyPublications from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/faculty-publications.jpg';
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
  { name: 'CCAA', description: 'Christ College Arts Association.', image: association, path: '/academics/department-of-arts/association' },
  { name: 'Conference/Workshop/Exhibitions', description: 'Student-led activities and initiatives.', image: activities, path: '/academics/department-of-arts/activities' },
  { name: 'Seminars/ Corporate Connect', description: 'Research and publications by department faculty.', image: facultyPublications, path: '/academics/department-of-arts/seminars-and-corporate-connect' },
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
      vision="To be a leading academic and research department in economics that generates innovative ideas and solutions to complex economic challenges facing society."
      mission="The Department of Arts is dedicated to advancing knowledge and understanding of economics through teaching, research, and outreach."
      hod={{
        name: 'Mr. Biju Sebastian',
        title: 'Head of Department',
        image: hodBijuSebastian,
        messageParagraphs: [
          'Greetings from the Department of Arts. For the BA programme, the department provides Economics as the primary subject. Students study Microeconomics, Macroeconomics, and Economic Development and Policy in India. The department also provides a variety of soft skills. Students in the BA programme can take enrichment courses in Research Methodology, Data Analysis, and Fundamental Computational Techniques for Data Analysis.',
          'Because of its great usefulness and enormous demand in the labour market, Economics is a perennially popular and well-regarded discipline. Fundamentally, Economics is the study of evaluating alternatives and making informed decisions. The programme develops critical thinking, analytical reasoning, and problem-solving abilities that prepare students for both professional and personal success.',
          'Employers frequently seek the skills acquired through studying Economics, including decision-making, problem-solving, information gathering and processing, statistical analysis, and effective written and verbal communication. These competencies open up opportunities in both the public and private sectors.',
        ],
      }}
      activities={ACTIVITIES}
      achievements={ACHIEVEMENTS}
      testimonials={TESTIMONIALS}
    />
  );
}
