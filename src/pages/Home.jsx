import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { fadeInUp, staggerContainer, staggerItem } from '../motion/variants';
import { emphasis } from '../motion/transitions';
import { AcademicCapIcon, AwardIcon } from '../components/icons';
import bannerVideo from '../assets/home/bannerViedo.mp4';
import naacSealImg from '../assets/home/naac-a-plus-seal.jpg';
import artsImg from '../assets/home/ArtsDept.jpg';
import commerceImg from '../assets/home/commerceDept.jpg';
import managementImg from '../assets/home/ManagementDept.jpg';
import scienceImg from '../assets/home/ScienceDept.jpg';
import campusLifeImg from '../assets/home/campusLife_20260716095700.jpg';
import cpcgImg from '../assets/home/cpcg.jpg';
import culturalsImg from '../assets/home/culturals.jpg';
import councilImg from '../assets/images/5-students-student-council/council-banner.png';
import nssImg from '../assets/home/nss.jpg';
import sportsImg from '../assets/home/sports.jpg';
import facilityLabsImg from '../assets/home/CampusFacilitiesLab.jpg';
import facilityLibraryImg from '../assets/home/CampusFacilitiesLibrary.jpg';
import facilityItServicesImg from '../assets/home/CampusFacilitiesITService.png';
import facilityAcademicsImg from '../assets/home/CampusFacilitiesAcadmics.jpg';
import facilityPlaygroundImg from '../assets/home/CampusFacilitiesPlayground.jpg';
import facilityResearchImg from '../assets/home/CampusFacilitiesResearch.jpg';
import facilityRecreationalImg from '../assets/home/CampusFacilitiesRecreationalAreas.jpg';
import facilityHealthImg from '../assets/home/CampusFacilitiesHealthandWlniness.jpg';
import gallery1 from '../assets/home/gallery1.jpg';
import gallery2 from '../assets/home/gallery2.jpg';
import gallery3 from '../assets/home/gallery3.jpg';
import gallery4 from '../assets/home/gallery4.jpg';
import gallery5 from '../assets/home/gallery5.jpg';
import gallery6 from '../assets/home/gallery6.jpg';
import gallery7 from '../assets/home/gallery7.jpg';
import gallery8 from '../assets/home/gallery8.jpg';

const GALLERY_IMAGES = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

const ADMISSION_LINKS = [
  { label: 'Application Form for UG', path: '/admissions/application-form-for-ug' },
  { label: 'Application Form for PG', path: '/admissions/application-form-for-pg' },
  { label: 'Instructions for Application Form', path: '/admissions/online-application-instructions' },
];

const DEPARTMENTS = [
  {
    title: 'Commerce',
    image: commerceImg,
    overview: '/academics/department-of-commerce/department-page',
    programmes: [
      { label: 'BCom (Bachelor of Commerce)', path: '/academics/department-of-commerce/bcom-bachelor-of-commerce' },
      { label: 'MCom (Master of Commerce)', path: '/academics/department-of-commerce/mcom-master-of-commerce' },
    ],
  },
  {
    title: 'Science',
    image: scienceImg,
    overview: '/academics/department-of-science/department-page',
    programmes: [
      { label: 'MSc (Master of Computer Science)', path: '/academics/department-of-science/msc-master-of-computer-science' },
      { label: 'BSc (Bachelor of Computer Science)', path: '/academics/department-of-science/bsc-bachelor-of-computer-science' },
      { label: 'BSc (Data Science)', path: '/academics/department-of-science/bsc-data-science' },
    ],
  },
  {
    title: 'Arts',
    image: artsImg,
    overview: '/academics/department-of-arts/department-index',
    programmes: [
      { label: 'BA (Economics)', path: '/academics/department-of-arts/ba-economics' },
      { label: 'BA (English)', path: '/academics/department-of-arts/ba-english' },
      { label: 'BA (Psychology)', path: '/academics/department-of-arts/ba-psychology' },
    ],
  },
  {
    title: 'Management',
    image: managementImg,
    overview: '/academics/department-of-management/department-page',
    programmes: [
      { label: 'BBA (Computer Applications)', path: '/academics/department-of-management/bba-computer-applications' },
      { label: 'BBA (Bachelor of Business Administration)', path: '/academics/department-of-management/bba-bachelor-of-business-administration' },
      { label: 'BBA (International Business)', path: '/academics/department-of-management/bba-international-business' },
    ],
  },
];

const STUDENT_LIFE_LINKS = [
  { image: campusLifeImg, label: 'Campus Life', path: '/students/campus-life-student-life' },
  { image: councilImg, label: 'Student Council (SC)', path: '/students/student-council' },
  { image: nssImg, label: 'National Service Scheme (NSS)', path: '/students/national-service-scheme/about-us' },
  { image: cpcgImg, label: 'Placement & Career Guidance (CPCG)', path: '/students/placement-and-career-guidance' },
  { image: sportsImg, label: 'Physical Education & Sports', path: '/students/physical-education' },
  { image: culturalsImg, label: 'Co-curricular & Cultural Activities', path: '/students/co-curricular-and-cultural-activities' },
];

const CAMPUS_FACILITIES = [
  {
    label: 'Labs',
    path: '/campus-life/campus/labs',
    image: facilityLabsImg,
    description:
      "College labs are an essential part of a student's academic journey, providing access to specialized equipment, resources, and technology to facilitate learning and research in specific fields. They offer a unique opportunity for students to apply theoretical knowledge, gain practical skills, and conduct experiments and research that deepen their understanding of the subject matter. With dedicated spaces, knowledgeable staff, and the latest equipment and software, college labs provide an immersive learning experience that prepares students for success in their careers.",
  },
  {
    label: 'Library',
    path: '/campus-life/campus/library',
    image: facilityLibraryImg,
    description:
      "College libraries are a treasure trove of knowledge and information, offering students access to a vast collection of books, journals, and other academic resources. They provide a quiet and peaceful environment for studying, researching, and learning, with dedicated study spaces and resources to support students' academic pursuits. College libraries also offer access to electronic databases, online journals, and e-books, providing students with the latest research and information in their field of study. With dedicated librarians and staff, college libraries provide guidance and support to students, helping them locate and evaluate information, and develop their research skills. They offer an environment that encourages exploration, collaboration, and critical thinking, helping students to develop the skills they need to succeed in their studies and beyond.",
  },
  {
    label: 'IT Services',
    path: '/campus-life/campus/it-services',
    image: facilityItServicesImg,
    description:
      'The Office of IT Services provides comprehensive support across our campus network, ensuring that every corner of our institution benefits from a digitally integrated environment. Our IT services are pivotal in streamlining campus life, from the admission process to online classes, live event streaming, Enterprise Resource Planning (ERP), library services, learning management systems, and campus-wide Wi-Fi connectivity. With meticulous attention to detail, our team ensures that our campus infrastructure operates smoothly and without disruptions.',
  },
  {
    label: 'Academics',
    path: '/campus-life/campus/academics',
    image: facilityAcademicsImg,
    description:
      'CHRIST College Pune places a strong emphasis on academics as the cornerstone of holistic development within a dynamic societal context. Our academic programs are meticulously designed to foster intellectual curiosity and critical thinking among our students. We offer a diverse array of disciplines and provide access to state-of-the-art resources and dedicated faculty members who inspire and mentor. Our commitment to academics goes beyond traditional learning; we aim to equip our students with the knowledge, skills, and values needed to excel in their chosen fields and to make a meaningful impact on society. Through rigorous curricula, research opportunities, and a strong sense of social responsibility, we ensure that our graduates are well-prepared to contribute effectively to the ever-changing world around them.',
  },
  {
    label: 'Play Ground',
    path: '/campus-life/campus/play-ground',
    image: facilityPlaygroundImg,
    description:
      "The College playground is an important part of campus life, providing students with a space to exercise, play sports, socialize, and de-stress. It's a great place to meet new people, form connections, and develop teamwork skills. It serves as a gathering place for social interaction and community building. It provides a space for outdoor sports and activities like Basketball, Volleyball, and Soccer. Having access to a well-maintained and safe college playground enhances the overall college experience and contribute to students' physical and mental well-being.",
  },
  {
    label: 'Research Facilities',
    path: '/campus-life/campus/research-facilities',
    image: facilityResearchImg,
    description:
      'It aims at establishing world-class research facilities and to serve societal needs as learned members. This is deliberately attained through excellence in passion-driven research which caters to the global needs and technology transfer by uniting researchers for the betterment of humanity.',
  },
  {
    label: 'Recreational Areas',
    path: '/campus-life/campus/recreational-areas',
    image: facilityRecreationalImg,
    description:
      'Our expansive campus features a wide range of appealing locations, from peaceful alcoves and lush, shaded groves to lively pavilions, all of which serve as venues for creative thinking, conversations, and celebratory gatherings. These adaptable spaces allow for everything from informal discussions to dance and music practises. Moreover, our Student Cultural Association Room is a designated location for students to organise cultural events and artistic performances, enhancing the cultural fabric of our campus community and nurturing innovation.',
  },
  {
    label: 'Health and Wellness',
    path: '/campus-life/campus/health-and-wellness',
    image: facilityHealthImg,
    description:
      "At CHRIST College Pune, we are fully dedicated to both the holistic development and well-being of our students. Our Center for Holistic Development, in conjunction with the Health & Wellness Center, is equipped with compassionate professionals who ensure students' emotional and physical health concerns are handled confidentially and with the utmost dignity. We understand that a healthy body and sound mind are fundamental to students' academic and personal success, guiding them towards comprehensive development and well-being.",
  },
];

function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (query.matches) return;
    videoRef.current?.play().catch(() => { });
  }, []);

  // Skip autoplay entirely for users who've asked for reduced motion - the
  // gradient background alone still reads fine without the video layer.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src={bannerVideo}
      muted
      loop
      playsInline
      aria-hidden="true"
    />
  );
}

function CampusFacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CAMPUS_FACILITIES[activeIndex];

  return (
    <motion.section
      className="mx-auto max-w-[1200px] px-6 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={staggerItem} className="mx-auto max-w-2xl text-center">
        <h2>Campus Facilities</h2>
        <p className="mt-3 text-cc-text-muted-light">
          A well-equipped infrastructure to promote the academic and cultural activities of CHRIST is one of our primary accomplishments. An attempt to provide equal opportunity for each and every Christite is the idea behind this unique feature of our campus.
        </p>
      </motion.div>

      <motion.div variants={staggerItem} className="mt-8 flex flex-wrap justify-center gap-3">
        {CAMPUS_FACILITIES.map((facility, index) => (
          <button
            key={facility.path}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            className={`rounded-cc-pill border px-4 py-2 text-sm font-medium transition-colors duration-[350ms] ${index === activeIndex
                ? 'border-cc-primary bg-cc-primary text-cc-white'
                : 'border-cc-gray-300 text-cc-text-body hover:border-cc-primary hover:text-cc-primary'
              }`}
          >
            {facility.label}
          </button>
        ))}
      </motion.div>

      <motion.div variants={staggerItem} className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-cc-lg shadow-cc-sm">
          <img
            src={active.image}
            alt={active.label}
            className="aspect-[4/3] h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3>{active.label}</h3>
          <p className="mt-4 text-cc-text-muted-light">{active.description}</p>
          <Link
            to={active.path}
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cc-primary hover:text-cc-primary-dark"
          >
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Christ College Pune - a NAAC-accredited institution offering undergraduate and postgraduate programmes in commerce, science, arts, and management, with a focus on academic excellence and holistic student development."
      />
      <h1 className="sr-only">Christ College Pune - Shaping Minds, Building Character</h1>

      <motion.section
        className="bg-cc-bg-page px-4 py-6 md:px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={emphasis}
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_240px] lg:items-start">
          <div className="relative flex aspect-[21/9] flex-col justify-end overflow-hidden rounded-cc-lg bg-[image:var(--gradient-hero)] sm:aspect-[3/1] lg:aspect-[2.6/1]">
            <HeroVideo />
          </div>

          <aside className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-4">
            <div className="flex items-center gap-3 border-b border-cc-gray-200 pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-cc-md bg-cc-primary/10 text-cc-primary">
                <AcademicCapIcon width={20} height={20} />
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-xs uppercase tracking-wide text-cc-text-muted-light">Admissions</p>
                  <span className="rounded-full bg-cc-primary/10 px-2 py-0.5 text-[10px] font-bold text-cc-primary">
                    NAAC A+
                  </span>
                </div>
                <p className="font-semibold text-cc-text-heading">2026-27</p>
              </div>
            </div>

            <ul className="flex flex-col divide-y divide-cc-gray-200">
              {ADMISSION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center justify-between gap-3 py-3 text-sm text-cc-text-body transition-colors duration-[350ms] hover:text-cc-primary"
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between rounded-cc-md bg-cc-bg-page p-4">
              <p className="text-sm font-semibold text-cc-text-heading">News &amp; Announcements</p>
              <Link
                to="/news-and-events/campus-news-events/campus"
                className="text-xs font-semibold text-cc-primary hover:text-cc-primary-dark"
              >
                View All
              </Link>
            </div>
          </aside>
        </div>
      </motion.section>

      {/* Simple & Elegant NAAC Accreditation Strip */}
      <section className="mx-auto max-w-[1200px] px-4 md:px-6 py-2">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface px-4 py-2.5 shadow-cc-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <AwardIcon width={14} height={14} />
            </span>
            <p className="text-xs sm:text-sm text-cc-text-body">
              <span className="font-semibold text-cc-text-heading">NAAC Accredited &lsquo;A+&rsquo; Grade</span>
              <span className="mx-2 text-cc-gray-300 hidden sm:inline">&bull;</span>
              <span className="text-cc-text-muted-light hidden sm:inline">Affiliated to Savitribai Phule Pune University (SPPU)</span>
              <span className="mx-2 text-cc-gray-300 hidden md:inline">&bull;</span>
              <span className="text-cc-text-muted-light hidden md:inline">AICTE Approved</span>
            </p>
          </div>
          <Link
            to="/naac-iqac/naac-accreditation/naac-certificate-cycle-2"
            className="inline-flex items-center gap-1 text-xs font-semibold text-cc-primary transition-colors hover:text-cc-primary-dark hover:underline"
          >
            NAAC Certificate &rarr;
          </Link>
        </div>
      </section>

      <motion.section
        id="departments"
        className="mx-auto max-w-[1200px] scroll-mt-[calc(var(--header-height)+var(--space-4))] px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="mx-auto text-center">
          <h2>Academic Departments</h2>
          <p className="mt-3 text-cc-text-muted-light">
            Undergraduate and postgraduate programmes across commerce, science, the arts, and management.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DEPARTMENTS.map((dept) => (
            <motion.div
              key={dept.title}
              variants={staggerItem}
              className="flex flex-col overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm transition-shadow duration-[350ms] hover:shadow-cc"
            >
              <Link to={dept.overview} className="group relative block aspect-[4/3] overflow-hidden">
                <span className="absolute inset-x-0 top-0 z-10 h-1 bg-[image:var(--gradient-gold)]" />
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="h-full w-full object-cover transition-transform duration-[350ms] group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base uppercase tracking-wide">{dept.title}</h3>
                <ul className="mt-4 flex flex-1 flex-col gap-1.5">
                  {dept.programmes.map((programme) => (
                    <li key={programme.path}>
                      <Link
                        to={programme.path}
                        className="group inline-flex items-center gap-1 text-xs text-cc-text-muted-light transition-colors duration-[350ms] hover:text-cc-primary"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-cc-gray-300 transition-colors duration-[350ms] group-hover:bg-cc-primary" />
                        <span className="transition-transform duration-[350ms] group-hover:translate-x-0.5">
                          {programme.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={dept.overview}
                  className="mt-5 inline-flex items-center justify-center gap-1 rounded-cc-pill bg-cc-primary px-4 py-2 text-sm font-semibold text-cc-white transition-colors duration-[350ms] hover:bg-cc-primary-dark"
                >
                  Explore Department
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="bg-cc-bg-surface">
        <motion.div
          className="mx-auto max-w-[1200px] px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <h2>Student Life</h2>
          <p className="mt-3 max-w-2xl text-cc-text-muted-light">
            Campus experience beyond the classroom - societies, service, sport, and support.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STUDENT_LIFE_LINKS.map((item) => (
              <motion.div key={item.path} variants={staggerItem}>
                <Link
                  to={item.path}
                  className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-cc-lg shadow-cc-sm transition-all duration-[350ms] hover:-translate-y-0.5 hover:shadow-cc"
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[350ms] group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />
                  <span className="relative p-4 font-medium text-cc-text-light">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <CampusFacilitiesSection />

      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] px-6 py-14">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-cc-gold">Gallery</h2>
            <Link
              to="/media-and-gallery/gallery"
              className="flex items-center gap-2 text-sm font-semibold text-cc-gold underline-offset-4 hover:underline"
            >
              <span className="h-4 w-0.5 rounded-full bg-cc-gold" aria-hidden="true" />
              Show all Gallery
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {GALLERY_IMAGES.map((src, index) => (
              <div key={src} className="aspect-[8/5] overflow-hidden rounded-cc-md">
                <img
                  src={src}
                  alt={`Campus gallery photo ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-[350ms] hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/media-and-gallery/gallery"
              className="inline-block rounded-cc-pill bg-cc-primary-light px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cc-text-light transition-colors duration-[350ms] hover:bg-cc-primary"
            >
              View All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
