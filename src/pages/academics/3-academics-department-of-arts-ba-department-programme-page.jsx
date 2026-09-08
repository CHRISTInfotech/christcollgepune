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
  'The Bachelor of Arts programme at Christ College Pune offers students a comprehensive and enriching educational experience that prepares them for diverse career opportunities. The programme combines strong theoretical foundations with practical application, enabling students to analyse, explore, and address real-life situations effectively.',
  'With a multidisciplinary approach, the course introduces students to the core concepts of Economics, English, and Psychology through interactive, project-based learning. Emphasis is also placed on developing research aptitude, critical thinking, communication skills, and analytical abilities, empowering students to grow academically as well as professionally.',
  'The Department of Arts has distinguished itself as one of the leading centers of learning in economics in the country. The Department has the distinction of having developed a unique and challenging curriculum and syllabi at the Undergraduate, Postgraduate, and Doctoral Research levels. Students and scholars are trained to analyze concrete problems with the help of conceptual frames, theoretical insights, and mathematical, statistical, and econometric tools, along with computer applications.',
  'Various academic programmes offer a comprehensive package with a thrust on both theoretical and practical applications. Along with core courses such as Microeconomics, Macroeconomics, Developmental Economics, International Economics, Behavioural Economics, Financial Economics, Environmental Economics, Econometrics, and Mathematical Economics, a wide range of specialized courses, including Labour Economics, Public Economics, Health Economics, and Operations Research, are well integrated into the curriculum.',
  'The emphasis on experiential learning has made Dissertation, Internship, and training on data analysis an integral part of the curriculum. It is a matter of great satisfaction that students and faculty act in unison to make the teaching-learning process a highly purposeful mission.',
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
