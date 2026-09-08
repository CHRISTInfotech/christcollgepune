import DepartmentTemplate from '../../components/DepartmentTemplate';
import departmentBanner from '../../assets/images/3-academics-department-of-management-department-page/department-banner.jpg';
import hodDeepaSujith from '../../assets/images/3-academics-department-of-management-department-page/hod-deepa-sujith.png';
import fiesta from '../../assets/images/3-academics-department-of-management-department-page/fiesta.png';
import ccma from '../../assets/images/3-academics-department-of-management-department-page/ccma.png';
import corporateConnect from '../../assets/images/3-academics-department-of-management-department-page/corporate-connect.JPG';
import campusUpdates from '../../assets/images/3-academics-department-of-management-department-page/campus-updates.JPG';
import facultyPublications from '../../assets/images/3-academics-department-of-management-department-page/faculty-publications.jpg';
import { getTestimonialsByDepartment } from '../../data/testimonials';

const PROGRAMMES = [
  { title: 'BBA (Bachelor of Business Administration)', level: 'Undergraduate', path: '/academics/department-of-management/bba-bachelor-of-business-administration' },
  { title: 'BBA (International Business)', level: 'Undergraduate', path: '/academics/department-of-management/bba-international-business' },
  { title: 'BBA (Computer Applications)', level: 'Undergraduate', path: '/academics/department-of-management/bba-computer-applications' },
];

const ABOUT_PARAGRAPHS = [
  'The Management Department of Christ College Pune seeks to equip graduates with a solid foundation in management theory and practice in order to help them succeed in a variety of disciplines. Graduates of the BBA, BBA (International Business), and BBA (Computer Application) programmes at Christ College Pune will be well-prepared to succeed in the fast-paced and constantly changing business world, whether they choose to pursue careers in the private sector, launch their own businesses, or continue their education in graduate school.',
  'Technology is becoming increasingly crucial in the dynamic modern corporate world. To prepare students for the challenges of the future, it is essential for educational institutions to offer top-notch management education in this context.',
  'Recognizing this need, Christ College Pune established the Management department with the objective of giving students the expertise and knowledge necessary to achieve success. Christ College Pune’s Management department has rapidly become a preeminent hub for management education at the undergraduate level. The department strives to equip students to become successful entrepreneurs, researchers, and scientists through a variety of courses and possibilities for experiential learning.',
  'The modern business world is constantly changing, and technology plays an increasingly important role. In this environment, it’s crucial for educational institutions to provide high-quality management education to prepare students for the challenges of the future. Christ College Pune recognizes this need and established its Management department with the aim of providing students with the skills and knowledge they need to succeed.',
  'Since its founding, the management department at Christ College Pune has quickly emerged as a leading center for management studies at the undergraduate level. The department is committed to providing students with a comprehensive education that combines theoretical knowledge with practical experience. Through a range of courses and opportunities for experiential learning, the department aims to prepare students to become effective entrepreneurs, researchers, and consultants who can make positive contributions to society.',
  'By providing students with a strong foundation in management theory and practice, Christ College Pune’s Management department aims to prepare graduates for success in a variety of fields. Whether they choose to pursue careers in the private sector, start their own businesses, or continue their studies in graduate school, graduates of the BBA, BBA (International Business), and BBA (Computer Application) programs at Christ College Pune will be well-equipped to thrive in the fast-paced and constantly evolving world of business.',
];

const ACTIVITIES = [
  { name: 'Fests', description: 'Annual business and management festival showcasing student talents.', image: fiesta, path: '/academics/department-of-management/festivals' },
  { name: 'CCMA', description: 'Christ College Management Association - student-led events and workshops.', image: ccma, path: '/academics/department-of-management/association' },
  { name: 'Conference/Workshop/Exhibitions', description: 'Industry engagement through talks, visits and internships.', image: corporateConnect, path: '/academics/department-of-management/activities' },
  { name: 'Newsletter', description: 'Department newsletter — Eloquence.', image: campusUpdates, path: '/academics/department-of-management/newsletter' },
  { name: 'Seminars/ Corporate Connect', description: 'Research and publications by department faculty.', image: facultyPublications, path: '/academics/department-of-management/seminars-and-corporate-connect' },
];

const TESTIMONIALS = getTestimonialsByDepartment('management');

export default function DepartmentOfManagementPage() {
  return (
    <DepartmentTemplate
      seoTitle="Department of Management"
      seoDescription="The Department of Management at Christ College, Pune offers BBA, BBA (International Business) and BBA (Computer Applications), led by HOD Ms Deepa Sujith, combining management theory with internships, corporate talks and business tech fests."
      departmentName="Department of Management"
      breadcrumbs={[{ label: 'Department of Management' }]}
      bannerImage={departmentBanner}
      programmes={PROGRAMMES}
      aboutParagraphs={ABOUT_PARAGRAPHS}
      vision="Our vision is to develop leaders of intellectual and ethical excellence who serve business and society at large."
      mission="Our mission is to holistically develop competent business leaders and technical experts of tomorrow who imbibe in them a spirit of inquiry and innovation and exhibit professional excellence remaining socially responsible and morally upright."
      hod={{
        name: 'Ms. Deepa Sujith',
        title: 'Head of Department',
        image: hodDeepaSujith,
        messageParagraphs: [
          'A hearty welcome to the Department of Management, Christ College - Pune which provides a distinctive environment for imparting business and technical studies. Offering programs in Business Administration, International Business, and Computer Applications. The Department aims to uphold the motto of the institution Enlighten to Excel through the dedicated efforts of dynamic and committed faculty who hold extensive expertise and a blend of knowledge in various domains, with intrinsic research aptitude. Imparting quality education and nurturing students to excel in their respective disciplines.',
          'We provide practical experiential, participative, and intellectual learning experiences through internships, field visits, corporate talks, business tech fests, seminars, and much more. Integrating value-added, certificate, and skill enhancement courses into our programs we aim to equip our students to meet the needs of the contemporary business world and make them industry ready.',
          'We cultivate an attitude of confidence, commitment, and responsibility in our students while holistically developing them to be competent professionals who make meaningful and innovative contributions to society. I cordially invite you to join us on an exciting academic journey of enriching your knowledge and enhancing your personality.',
        ],
      }}
      activities={ACTIVITIES}
      testimonials={TESTIMONIALS}
    />
  );
}
