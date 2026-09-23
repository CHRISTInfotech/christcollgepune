import DepartmentTemplate from '../../components/DepartmentTemplate';
import departmentBanner from '../../assets/images/3-academics-department-of-science-department-page/department-banner.JPG';
import hodNilimaShingate from '../../assets/images/3-academics-department-of-science-department-page/hod-nilima-shingate.jpg';
import events from '../../assets/images/3-academics-department-of-science-department-page/events.JPG';
import ccsa from '../../assets/images/3-academics-department-of-science-department-page/ccsa.jpg';
import clubActivities from '../../assets/images/3-academics-department-of-science-department-page/club-activities.JPG';
import facultyPublications from '../../assets/images/3-academics-department-of-science-department-page/faculty-publications.jpg';
import achievementSandesh from '../../assets/images/3-academics-department-of-science-department-page/achievement-sandesh-waghmare.jpg';
import achievementBharat1 from '../../assets/images/3-academics-department-of-science-department-page/achievement-bharat-singh-rajpurohit-1.png';
import achievementDouglas from '../../assets/images/3-academics-department-of-science-department-page/achievement-douglas-fernandes.png';
import achievementRiddhi from '../../assets/images/3-academics-department-of-science-department-page/achievement-bhorde-riddhi.jpg';
import achievementBharat2 from '../../assets/images/3-academics-department-of-science-department-page/achievement-bharat-singh-rajpurohit-2.png';
import achievementSiddhi from '../../assets/images/3-academics-department-of-science-department-page/achievement-bhorde-siddhi.jpg';
import achievementMritunjay from '../../assets/images/3-academics-department-of-science-department-page/achievement-mritunjay-singh.png';
import achievementAditya from '../../assets/images/3-academics-department-of-science-department-page/achievement-walte-aditya.png';
import { getTestimonialsByDepartment } from '../../data/testimonials';

const PROGRAMMES = [
  { title: 'BSc (Bachelor of Computer Science)', level: 'Undergraduate', path: '/academics/department-of-science/bsc-bachelor-of-computer-science' },
  { title: 'BSc (Data Science)', level: 'Undergraduate', path: '/academics/department-of-science/bsc-data-science' },
  { title: 'MSc (Master of Computer Science)', level: 'Postgraduate', path: '/academics/department-of-science/msc-master-of-computer-science' },
];

const ABOUT_PARAGRAPHS = [
  'The Department of Science at Christ College, established in 2007, is committed to delivering high-quality education in the field of Computer science. The department offers undergraduate (B.Sc. in Computer Science), (B.Sc. Data Science) and postgraduate (M.Sc. in Computer Science) programs designed to equip students with a strong academic foundation and practical skills. Our dedicated and highly qualified faculty members create an intellectually stimulating environment, utilizing innovative teaching approaches such as project-based learning and experiential learning. These methods enhance student engagement and foster a deeper understanding of the subject matter.',
  'The department is equipped with state-of-the-art laboratories for each course, offering students abundant opportunities for practical, hands-on learning. Beyond academics, we also organize a wide range of co-curricular and extracurricular activities that foster the holistic development of our students, ensuring they are well-prepared for both professional and personal success.',
  'The B.Sc. (Computer Science) and (Data Science) is a well-structured four-year degree (Honours) program offered by the Faculty of Science and Technology. The primary objective of these courses are to equip students with the knowledge and skills necessary for careers in problem-solving using computer science and technology or to pursue advanced studies and research in the field.',
  'The curriculum integrates core Computer Science subjects alongside foundational courses in Mathematics, Electronics, and Statistics, providing a comprehensive understanding of computing sciences. This approach ensures students develop both the theoretical knowledge and the practical problem-solving skills required to excel in the rapidly evolving field of computer science.',
  'The department shapes future innovators by providing a comprehensive education in computer science, equipping students with the knowledge, skills, and problem-solving abilities necessary for success in the field. It advances the field by contributing to the ongoing progress of computer science through cutting-edge technologies and applications, and makes an impact by utilizing computing technology to serve the community and industry partners, addressing real-world challenges and promoting practical solutions.',
];

const ACTIVITIES = [
  { name: 'Fests', description: 'Department festivals and technical fests held throughout the academic year.', image: events, path: '/academics/department-of-science/festivals' },
  { name: 'CCSA', description: 'Christ College Science Association (CCSA) and its events.', image: ccsa, path: '/academics/department-of-science/association' },
  { name: 'Conference/Workshop/Exhibitions', description: 'Workshops, seminars, corporate talks and field visits organised by the department.', image: clubActivities, path: '/academics/department-of-science/activities' },
  { name: 'Seminars/ Corporate Connect', description: 'Research and publications by department faculty.', image: facultyPublications, path: '/academics/department-of-science/seminars-and-corporate-connect' },
];

const ACHIEVEMENTS = [
  { title: 'Sandesh Waghmare', programme: 'SY MSc Computer Science', description: '61st rank globally in the Cyber Apocalypse CTF 2025 – Tales from Eldoria, organized by Hack The Box.', photo: achievementSandesh },
  { title: 'Bharat Singh Rajpurohit', programme: 'SY BSc Computer Science', description: 'First position in the "C Champion" competition at HV Desai College’s Desai Karandak event.', photo: achievementBharat1 },
  { title: 'Douglas Fernandes', programme: 'SY BSc Computer Science', description: 'First position in the "C Champion" competition at HV Desai College’s Desai Karandak event.', photo: achievementDouglas },
  { title: 'Bhorde Riddhi', description: '"Startup Winner" at AMC Hackathon 2K25 under the "Innovative Idea/Startup Vision" category.', photo: achievementRiddhi },
  { title: 'Bharat Singh Rajpurohit', programme: 'SY BSc Computer Science', description: 'Winner of BugBundy, a time-based error detection competition on Java code.', photo: achievementBharat2 },
  { title: 'Bhorde Siddhi', description: '"Startup Winner" at AMC Hackathon 2K25 under the "Innovative Idea/Startup Vision" category.', photo: achievementSiddhi },
  { title: 'Mritunjay Singh', description: '"Startup Winner" at AMC Hackathon 2K25 under the "Innovative Idea/Startup Vision" category.', photo: achievementMritunjay },
  { title: 'Walte Aditya', description: '"Startup Winner" at AMC Hackathon 2K25 under the "Innovative Idea/Startup Vision" category.', photo: achievementAditya },
];

const TESTIMONIALS = getTestimonialsByDepartment('science');

export default function DepartmentOfSciencePage() {
  return (
    <DepartmentTemplate
      seoTitle="Department of Science"
      seoDescription="The Department of Science (Computer Science) at Christ College, Pune, established in 2007, offers BSc Computer Science, BSc Data Science and MSc Computer Science, led by HOD Mrs Nilima Shingate, with project-based learning and state-of-the-art labs."
      departmentName="Department of Science"
      breadcrumbs={[{ label: 'Department of Science' }]}
      bannerImage={departmentBanner}
      programmes={PROGRAMMES}
      aboutParagraphs={ABOUT_PARAGRAPHS}
      vision="To be a recognized leader in delivering exceptional technical education, fostering a research-driven environment, and equipping students with the cutting-edge skills and practical experience needed to thrive in the ever-evolving computing industry and academia. Our ultimate goal is to contribute to societal progress by producing highly skilled graduates who make meaningful contributions to the field."
      mission="Shaping future innovators, advancing the field, and making an impact through computing technology that serves our community and industry partners."
      hod={{
        name: 'Mrs. Nilima Shingate',
        title: 'Head of Department',
        image: hodNilimaShingate,
        messageParagraphs: [
          'Welcome to the Department of Science at Christ College, Pune. In 2007, we established our department with the vision of producing academically, morally, and ethically sound IT professionals. As interest in Computer Science has grown, we have expanded our expertise and proficiency to advance our students. Our department has consistently focused on equipping students with the essential social skills required to thrive in the fast-evolving landscape of IT and research.',
          'Our curriculum is designed to provide comprehensive technological knowledge, enhance problem-solving abilities, inspire innovation, and nurture a passion for research. To stay aligned with current trends, the curriculum is regularly updated to reflect the latest advancements in science and technology. MSc in Computer Science was introduced to bridge the gap between academic knowledge and industry needs.',
          'The program covers a wide range of topics, including operating systems, networks, object-oriented programming, and data analysis. By the time students complete their education, they are well-prepared for a seamless transition into the workforce.',
        ],
      }}
      activities={ACTIVITIES}
      achievements={ACHIEVEMENTS}
      testimonials={TESTIMONIALS}
    />
  );
}
