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
  'The Department of Commerce at Christ College offers undergraduate and postgraduate programmes in BCom and MCom, focusing on building strong foundations in finance, accounting, and business management. The department emphasizes analytical thinking, ethical practices, and practical exposure through seminars, workshops, industrial visits, and corporate interactions. By integrating academic knowledge with real world applications, the department nurtures students to become competent professionals and responsible leaders. Through a blend of academic excellence, skill development, and value based education, the department continues to prepare students for dynamic careers in commerce, finance, entrepreneurship, and higher research.',
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
      vision="Cultivating leaders, shaping futures, empowering minds, creating excellence."
      mission="To educate and train students in finance and accounting, instilling strong analytical skills, ethical values, and leadership qualities while fostering innovation research and qualities community engagement to prepare them for successful careers and contributing to society."
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
