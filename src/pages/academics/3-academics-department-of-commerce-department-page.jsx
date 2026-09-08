import DepartmentTemplate from '../../components/DepartmentTemplate';
import departmentBanner from '../../assets/images/3-academics-department-of-commerce-department-page/department-banner.JPG';
import hodDeepaSujith from '../../assets/images/3-academics-department-of-commerce-department-page/hod-deepa-sujith.jpg';
import desafio from '../../assets/images/3-academics-department-of-commerce-department-page/desafio.jpg';
import ccca from '../../assets/images/3-academics-department-of-commerce-department-page/ccca.jpg';
import webinar from '../../assets/images/3-academics-department-of-commerce-department-page/webinar.jpg';
import facultyPublications from '../../assets/images/3-academics-department-of-commerce-department-page/faculty-publications.jpg';
import { getTestimonialsByDepartment } from '../../data/testimonials';

const PROGRAMMES = [
  { title: 'BCom (Bachelor of Commerce)', level: 'Undergraduate', path: '/academics/department-of-commerce/bcom-bachelor-of-commerce' },
  { title: 'MCom (Master of Commerce)', level: 'Postgraduate', path: '/academics/department-of-commerce/mcom-master-of-commerce' },
];

const ABOUT_PARAGRAPHS = [
  'Department of Commerce at Christ College Pune stands as a beacon of excellence in education, dedicated to nurturing tomorrow’s business leaders and professionals. Established with a mission to impart quality education in commerce and allied fields, we are proud to be a dynamic and student-centered department that integrates academics with holistic development.',
  'Our department is driven by a singular vision: to empower students with the knowledge, skills, and values needed to excel in an ever-evolving world. We aim to create a learning environment where academics meet innovation, and where students are encouraged to think critically, act ethically, and contribute meaningfully to society. Our focused curriculum, with diversity in our specialization, equips students with a robust understanding of financial management, costing techniques, and strategic decision-making.',
  'Our faculty comprises a diverse group of experienced educators who bring a blend of traditional teaching excellence and modern methodologies. Their unwavering commitment ensures that students receive the guidance and mentorship needed to thrive academically and personally. At the heart of our department lies a commitment to our students. We believe in tailoring education to meet individual needs, nurturing their strengths, and addressing their challenges.',
  'The Christ College Commerce Association (CCCA) is the soul of our department. It organizes a wide array of activities—ranging from workshops and seminars to competitions and cultural events—that foster teamwork, leadership, and creative thinking. These platforms empower students to explore their passions, hone their skills, and engage with peers who share similar interests.',
  'We believe education is more than just academic achievement; it is about shaping individuals who are capable of making a positive impact on the world. Opportunities to give back to society and instill values of empathy and responsibility. Our department strives to create a space where students grow intellectually, socially, and emotionally. The Department of Commerce exists to bridge the gap between academia and the professional world. We aim to produce graduates who are confident, competent, and ready to lead in the fields of commerce, finance, and business.',
  'Welcome to the Commerce Department at Christ College, Pune, where excellence in education meets the holistic development of our students. Rooted in a legacy of academic distinction, our department is dedicated to shaping well-rounded individuals who excel both academically and personally.',
  'With diverse areas of specialization, we aim to provide students with a solid foundation in core commerce concepts and practical applications. Our curriculum is designed to keep pace with evolving industry trends, ensuring that our students are well-prepared for their professional journeys.',
  'Our diverse team of faculty members brings a blend of experience, expertise, and innovation. Comprising educators from various age groups, our staff is passionate about imparting knowledge and inspiring students to reach their potential. They ensure a supportive and engaging learning environment, fostering both academic and personal growth.',
  'We place students at the heart of everything we do. Our teaching methodologies are tailored to meet the varied learning needs of our students, encouraging active participation, critical thinking, and creativity. The Christ College Commerce Association (CCCA) is the vibrant hub of our department’s co-curricular activities. CCCA organizes a wide range of events, workshops, competitions, and guest lectures throughout the year, providing students with opportunities to showcase their talents, develop leadership skills, and network with industry professionals. Our department hosts several student-led clubs that cater to diverse interests and skills, including budding financial analysts, stock market enthusiasts, innovation and startup culture advocates, and subject knowledge quizzes.',
  'At Christ College, we believe in nurturing students beyond academics. To ensure their all-round development, we focus on soft skill training to build communication, teamwork and problem-solving abilities; industry exposure through internships, industrial visits and expert sessions; cultural and sports activities encouraging participation in various programs to promote a healthy mind and body; and community engagement, instilling social responsibility through community service initiatives.',
];

const ACTIVITIES = [
  { name: 'Fests', description: 'Department festival and competition showcasing student skills and creativity.', image: desafio, path: '/academics/department-of-commerce/festivals' },
  { name: 'CCCA', description: 'Christ College Commerce Association - organizes workshops, seminars, competitions, and cultural events.', image: ccca, path: '/academics/department-of-commerce/association' },
  { name: 'Conference/Workshop/Exhibitions', description: 'Interactive webinars and guest lectures from industry and academic experts.', image: webinar, path: '/academics/department-of-commerce/activities' },
  { name: 'Seminars/ Corporate Connect', description: 'Scholarly research publications contributing to advanced academic knowledge.', image: facultyPublications, path: '/academics/department-of-commerce/seminars-and-corporate-connect' },
];

const TESTIMONIALS = getTestimonialsByDepartment('commerce');

export default function DepartmentOfCommercePage() {
  return (
    <DepartmentTemplate
      seoTitle="Department of Commerce"
      seoDescription="The Department of Commerce at Christ College, Pune, established in 2007, is dedicated to nurturing future business leaders with academically rigorous accounting and finance education."
      departmentName="Department of Commerce"
      breadcrumbs={[{ label: 'Department of Commerce' }]}
      bannerImage={departmentBanner}
      programmes={PROGRAMMES}
      aboutParagraphs={ABOUT_PARAGRAPHS}
      vision="Cultivating leaders, shaping futures – empowering minds, creating excellence."
      mission="To educate and train students in finance and accounting, instilling strong analytical skills, ethical values, and leadership qualities while fostering innovation, research and community engagement to prepare them for successful careers and contributing to society."
      hod={{
        name: 'Mrs. Deepa Sujith',
        title: 'HOD, I/C',
        image: hodDeepaSujith,
        messageParagraphs: [
          'Welcome to the Department of Commerce at Christ College, Pune—a center of excellence where education meets transformation. Established in 2007 with the B. Com program and expanded in 2010 with the introduction of the M. Com program, the department has continually evolved as a hub of academic and professional excellence. Our mission is to offer top-quality education and training that shapes careers for a sustainable and dynamic corporate world. By providing academically rigorous and professionally relevant teaching in accounting and finance, we prepare our students to excel in their careers while equipping them to tackle life’s challenges with confidence.',
          'We go beyond conventional academics by offering a range of value-added programs designed to enhance expertise and skills in various dimensions. Whether through group mentoring, personalized guidance, or opportunities for collaborative research and publications, our department is committed to nurturing every student’s potential and transforming them into impeccable professionals. At Christ, we believe in pushing boundaries, inspiring students to exceed their own expectations, and setting the foundation for a bright future.',
          'Our greatest strength lies in our experienced and dedicated faculty—a diverse and dynamic team committed to empowering students to explore their capabilities, transform their lives, and achieve success through innovative teaching-learning processes. Their unwavering commitment has been instrumental in the department earning recognition and accolades, reflecting the quality and impact of our efforts. On behalf of the Department of Commerce, I extend a warm welcome to all vibrant and aspiring students. We invite you to join us on this transformative journey of learning, growth, and success as we strive to become a premier centre of excellence in education.',
        ],
      }}
      activities={ACTIVITIES}
      testimonials={TESTIMONIALS}
    />
  );
}
