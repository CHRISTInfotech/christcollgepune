import testimonialAdesh from '../assets/images/3-academics-department-index-management/testimonial-adesh-ghisare.jpg';
import testimonialNived from '../assets/images/3-academics-department-index-management/testimonial-nived-menon.jpeg';
import testimonialAbith from '../assets/images/3-academics-department-of-science-department-page/testimonial-abith-k-sunil.png';
import testimonialJuliet from '../assets/images/3-academics-department-of-science-department-page/testimonial-juliet-jenny.png';
import testimonialKirti from '../assets/images/3-academics-department-of-science-department-page/testimonial-kirti-nikam.jpg';
import testimonialKrishna from '../assets/images/3-academics-department-of-arts-ba-department-programme-page/achievement-krishna-chauhan.png';

export const DEPARTMENTS = [
  { key: 'all', label: 'All Departments' },
  { key: 'commerce', label: 'Commerce', name: 'Department of Commerce', path: '/academics/department-of-commerce/department-page' },
  { key: 'management', label: 'Management', name: 'Department of Management', path: '/academics/department-of-management/department-page' },
  { key: 'science', label: 'Science', name: 'Department of Science', path: '/academics/department-of-science/department-page' },
  { key: 'arts', label: 'Arts', name: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
];

export const TESTIMONIALS_DATA = [
  // --- Department of Commerce ---
  {
    id: 'comm-1',
    department: 'commerce',
    departmentName: 'Department of Commerce',
    departmentPath: '/academics/department-of-commerce/department-page',
    name: 'Vaishnavi Nair',
    programme: 'B.Com, 2021–2024',
    photo: 'https://christcollegepune.org/uploads/testimonial/medium/1242487989_2025-03-12_10-12-15.JPG',
    quote: 'The college fostered a sense of community that made every student feel valued. The vibrant campus life, along with the many extracurricular opportunities, helped me develop essential soft skills like communication.'
  },
  {
    id: 'comm-2',
    department: 'commerce',
    departmentName: 'Department of Commerce',
    departmentPath: '/academics/department-of-commerce/department-page',
    name: 'Cijo Antu Athiyundhan',
    programme: 'B.Com, 2021–2024',
    photo: 'https://christcollegepune.org/uploads/testimonial/medium/713274653_2025-03-12_09-44-57.jpg',
    quote: 'The professors were not only experts in their fields but also mentors who genuinely cared about my growth.'
  },
  {
    id: 'comm-3',
    department: 'commerce',
    departmentName: 'Department of Commerce',
    departmentPath: '/academics/department-of-commerce/department-page',
    name: 'Alfred Jaisemon',
    programme: 'B.Com, 2021–2024',
    photo: 'https://christcollegepune.org/uploads/testimonial/medium/2098072834_2025-03-12_09-31-37.jpg',
    quote: 'My journey at Christ College, Pune, has been nothing short of extraordinary. The college provided a holistic learning experience that nurtured my academic knowledge, critical thinking, and leadership skills.'
  },

  // --- Department of Management ---
  {
    id: 'mgmt-1',
    department: 'management',
    departmentName: 'Department of Management',
    departmentPath: '/academics/department-of-management/department-page',
    name: 'Adesh Ghisare',
    programme: 'BBA (International Business), 2020–2023',
    photo: testimonialAdesh,
    quote: 'I had the privilege of pursuing my BBA in International Business at Christ College Pune, and my experience was nothing short of extraordinary.'
  },
  {
    id: 'mgmt-2',
    department: 'management',
    departmentName: 'Department of Management',
    departmentPath: '/academics/department-of-management/department-page',
    name: 'Nived P Menon',
    programme: 'BBA (International Business), 2021–2024',
    photo: testimonialNived,
    quote: 'My time at Christ College Pune has been an amazing journey. The BBA International Business programme gave me a strong foundation.'
  },
  {
    id: 'mgmt-3',
    department: 'management',
    departmentName: 'Department of Management',
    departmentPath: '/academics/department-of-management/department-page',
    name: 'Rohan Kulkarni',
    programme: 'BBA (Computer Applications), 2021–2024',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces',
    quote: 'The Department of Management bridged the gap between classroom theory and real corporate realities. Through business fests, corporate guest lectures, and internship mentorship, I built strong managerial and technical problem-solving capabilities.'
  },

  // --- Department of Science ---
  {
    id: 'sci-1',
    department: 'science',
    departmentName: 'Department of Science',
    departmentPath: '/academics/department-of-science/department-page',
    name: 'Abith K Sunil',
    programme: 'BSc Computer Science',
    photo: testimonialAbith,
    quote: 'I am immensely grateful for my journey at Christ College Pune, where I pursued my Bachelor of Science in Computer Science. The college provided an excellent academic environment, well-structured curriculum, and state-of-the-art facilities that enhanced my learning experience. The faculty members were highly knowledgeable and supportive, always encouraging us to think critically and apply our knowledge practically.'
  },
  {
    id: 'sci-2',
    department: 'science',
    departmentName: 'Department of Science',
    departmentPath: '/academics/department-of-science/department-page',
    name: 'Juliet Jenny',
    programme: 'BSc Computer Science',
    photo: testimonialJuliet,
    quote: 'I am grateful for my enriching academic journey at Christ College Pune, where I completed my BSc in Computer Science. The college provided a strong foundation with its excellent faculty, well-structured curriculum, and practical learning opportunities. Beyond academics, the supportive environment and co-curricular activities helped shape my skills and confidence.'
  },
  {
    id: 'sci-3',
    department: 'science',
    departmentName: 'Department of Science',
    departmentPath: '/academics/department-of-science/department-page',
    name: 'Kirti Nikam',
    programme: 'BCA & MCA',
    photo: testimonialKirti,
    quote: 'My time at Christ College, Pune, in the Department of Computer Science was a transformative experience that shaped both my personal and professional growth. Completing my Bachelor of Computer Applications (BCA) and Master of Computer Applications (MCA) here provided me with a solid foundation in computer science. The faculty members played a pivotal role in my development.'
  },

  // --- Department of Arts ---
  {
    id: 'arts-1',
    department: 'arts',
    departmentName: 'Department of Arts',
    departmentPath: '/academics/department-of-arts/ba-department-programme-page',
    name: 'Krishna Chauhan',
    programme: 'SY BA (Economics)',
    photo: testimonialKrishna,
    quote: 'Studying in the Department of Arts has broadened my perspective tremendously. The interdisciplinary focus between economics, psychology, and literature enables us to critically analyze societal challenges while excelling academically and in university sports championships.'
  },
  {
    id: 'arts-2',
    department: 'arts',
    departmentName: 'Department of Arts',
    departmentPath: '/academics/department-of-arts/ba-department-programme-page',
    name: 'Sarah Mathews',
    programme: 'BA (English), 2021–2024',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces',
    quote: 'The Department of Arts provides an intellectually stimulating environment with exceptional faculty mentorship. Through literary seminars, debate forums, and research papers, I developed strong analytical thinking and leadership capabilities.'
  },
  {
    id: 'arts-3',
    department: 'arts',
    departmentName: 'Department of Arts',
    departmentPath: '/academics/department-of-arts/ba-department-programme-page',
    name: 'Ananya Deshmukh',
    programme: 'BA (Psychology), 2021–2024',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces',
    quote: 'Christ College provided a transformative academic journey. The faculty in the Arts department nurture empathy and analytical depth, preparing us to engage meaningfully with societal challenges and career opportunities.'
  }
];

export function getTestimonialsByDepartment(departmentKey) {
  if (!departmentKey || departmentKey === 'all') {
    return TESTIMONIALS_DATA;
  }
  return TESTIMONIALS_DATA.filter((t) => t.department === departmentKey);
}
