import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { fadeInUp, staggerContainer, staggerItem } from '../motion/variants';
import { emphasis } from '../motion/transitions';
import { AcademicCapIcon, BuildingIcon, UsersIcon, CompassIcon, BriefcaseIcon, AwardIcon, SparklesIcon, LightbulbIcon, BookIcon, GridIcon, SearchIcon, CheckCircleIcon } from '../components/icons';
import galleryEvents from '../data/gallery-events.json';
import bannerVideo from '../assets/home/bannerViedo.mp4';
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

// All real event photos from the Gallery page's own image set, with exact event names
const galleryPhotoModules = import.meta.glob('../assets/images/gallery/*/*.jpg', { eager: true, import: 'default' });

const eventBySlug = {};
for (const ev of galleryEvents) {
  eventBySlug[ev.slug] = ev;
}

const ALL_GALLERY_PHOTOS = [];
for (const [path, url] of Object.entries(galleryPhotoModules)) {
  const match = path.match(/gallery\/([^/]+)\/(\d+)\.jpg$/);
  if (!match) continue;
  const [, slug, num] = match;
  const ev = eventBySlug[slug];
  ALL_GALLERY_PHOTOS.push({
    src: url,
    slug,
    num: Number(num),
    name: ev ? ev.name : slug.replace(/-/g, ' ').toUpperCase(),
    department: ev?.department || null,
  });
}

function pickRandomPhotos(pool, count) {
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// Sequence that alternates across the 4x2 grid non-adjacently for organic realism
const SLOT_SEQUENCE = [0, 5, 2, 7, 3, 1, 6, 4];

function RotatingGallery({ count = 8, intervalMs = 2300 }) {
  const [photos, setPhotos] = useState(() => pickRandomPhotos(ALL_GALLERY_PHOTOS, count));
  const [activeSlot, setActiveSlot] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const stepRef = useRef(0);

  useEffect(() => {
    if (ALL_GALLERY_PHOTOS.length <= count) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const id = setInterval(() => {
      if (isHovered) return;

      // Select next slot in sequence to change one by one
      const targetSlot = SLOT_SEQUENCE[stepRef.current % SLOT_SEQUENCE.length];
      stepRef.current += 1;

      setPhotos((currentPhotos) => {
        const usedSrcs = new Set(currentPhotos.map((p) => p.src));
        // Find an unused photo from pool
        const available = ALL_GALLERY_PHOTOS.filter((p) => !usedSrcs.has(p.src));
        const newPhoto =
          available.length > 0
            ? available[Math.floor(Math.random() * available.length)]
            : ALL_GALLERY_PHOTOS[Math.floor(Math.random() * ALL_GALLERY_PHOTOS.length)];

        const nextPhotos = [...currentPhotos];
        nextPhotos[targetSlot] = newPhoto;
        return nextPhotos;
      });

      setActiveSlot(targetSlot);
    }, intervalMs);

    return () => clearInterval(id);
  }, [count, intervalMs, isHovered]);

  return (
    <div
      className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {photos.map((photo, index) => {
        const isSlotActive = activeSlot === index;
        return (
          <Link
            key={index}
            to={`/media-and-gallery/gallery?event=${photo.slug}`}
            style={{ perspective: 1200 }}
            className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-md backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-cc-gold hover:shadow-2xl hover:shadow-black/70 hover:rounded-3xl"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={photo.src}
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  rotateY: 15,
                  filter: 'blur(3px) brightness(1.15)',
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  filter: 'blur(0px) brightness(1)',
                }}
                exit={{
                  opacity: 0,
                  scale: 1.06,
                  rotateY: -15,
                  filter: 'blur(3px) brightness(0.85)',
                }}
                transition={{
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full"
              >
                <img
                  src={photo.src}
                  alt={photo.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle camera flash sheen effect when photo flips */}
            <AnimatePresence>
              {isSlotActive && (
                <motion.div
                  key={`flash-${photo.src}`}
                  initial={{ x: '-100%', opacity: 0.65 }}
                  animate={{ x: '220%', opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                  className="pointer-events-none absolute inset-y-0 w-3/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"
                  aria-hidden="true"
                />
              )}
            </AnimatePresence>

            {/* Bottom vignette & hover event name overlay with direct gallery link */}
            <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              {photo.department && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-cc-gold drop-shadow-sm">
                  Dept. of {photo.department}
                </span>
              )}
              <h4 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug drop-shadow-md">
                {photo.name}
              </h4>
              <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-cc-gold drop-shadow-sm">
                View in Gallery
                <span aria-hidden="true">&rarr;</span>
              </span>
            </div>

            {/* Subtle border ring on hover */}
            <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl transition-all duration-300 group-hover:rounded-3xl border border-transparent group-hover:border-cc-gold/60" />
          </Link>
        );
      })}
    </div>
  );
}

const TICKER_ANNOUNCEMENTS = [
  {
    id: 'admissions-2026',
    badge: 'NEW',
    text: 'Admissions to Undergraduate (UG) & Postgraduate (PG) Programmes for Academic Year 2026-27 are now open.',
    actionText: 'Apply Now',
    path: '/admissions/online-application-instructions',
  },
  {
    id: 'naac-grade',
    badge: 'NEW',
    text: "CHRIST College Pune is Re-accredited with 'A+' Grade by NAAC (CGPA 3.39 on a 4-point scale).",
    actionText: 'Learn More',
    path: '/naac/naac-accreditation',
  },
  {
    id: 'hostel-campus',
    badge: 'NEW',
    text: 'Modern campus facilities, well-equipped science & computer labs, and expansive digital library resources.',
    actionText: 'Explore Campus',
    path: '/campus-life/campus/labs',
  },
  {
    id: 'placements-cpcg',
    badge: 'NEW',
    text: 'Placement & Career Guidance (CPCG) drives underway for final year students with reputed corporate partners.',
    actionText: 'Explore Now',
    path: '/students/placement-and-career-guidance',
  },
  {
    id: 'instructions',
    badge: 'NEW',
    text: 'Check step-by-step instructions and guidelines for online application submission.',
    actionText: 'Read Instructions',
    path: '/admissions/online-application-instructions',
  },
];

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
    overview: '/academics/department-of-arts/department-page',
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
  {
    image: campusLifeImg,
    icon: BuildingIcon,
    label: 'Campus Life',
    tag: 'Student Experience',
    path: '/students/campus-life-student-life',
    description: 'Vibrant campus environment, student clubs, modern amenities, and holistic development opportunities.',
  },
  {
    image: councilImg,
    icon: UsersIcon,
    label: 'Student Council (SC)',
    tag: 'Leadership & Voice',
    path: '/students/student-council',
    description: 'Democratic student body fostering leadership, organizing flagship events, and voicing student perspectives.',
  },
  {
    image: nssImg,
    icon: CompassIcon,
    label: 'National Service Scheme (NSS)',
    tag: 'Community Outreach',
    path: '/students/national-service-scheme/about-us',
    description: 'Instilling civic responsibility, social service, blood donation drives, and nation-building initiatives.',
  },
  {
    image: cpcgImg,
    icon: BriefcaseIcon,
    label: 'Placement & Career Guidance (CPCG)',
    tag: 'Career & Corporate',
    path: '/students/placement-and-career-guidance',
    description: 'Bridging talent with leading corporate recruiters, career counseling, and industry-oriented training.',
  },
  {
    image: sportsImg,
    icon: AwardIcon,
    label: 'Physical Education & Sports',
    tag: 'Athletics & Fitness',
    path: '/students/physical-education',
    description: 'State-of-the-art sports facilities, competitive tournaments, coaching in basketball, football, and athletics.',
  },
  {
    image: culturalsImg,
    icon: SparklesIcon,
    label: 'Co-curricular & Cultural Activities',
    tag: 'Arts & Culture',
    path: '/students/co-curricular-and-cultural-activities',
    description: 'Celebrating creativity with grand annual cultural festivals, drama, music, dance, and literary forums.',
  },
];

const CAMPUS_FACILITIES = [
  {
    label: 'Labs',
    icon: LightbulbIcon,
    path: '/campus-life/campus/labs',
    image: facilityLabsImg,
    description:
      "College labs are an essential part of a student's academic journey, providing access to specialized equipment, resources, and technology to facilitate learning and research in specific fields. They offer a unique opportunity for students to apply theoretical knowledge, gain practical skills, and conduct experiments and research that deepen their understanding of the subject matter. With dedicated spaces, knowledgeable staff, and the latest equipment and software, college labs provide an immersive learning experience that prepares students for success in their careers.",
  },
  {
    label: 'Library',
    icon: BookIcon,
    path: '/campus-life/campus/library',
    image: facilityLibraryImg,
    description:
      "College libraries are a treasure trove of knowledge and information, offering students access to a vast collection of books, journals, and other academic resources. They provide a quiet and peaceful environment for studying, researching, and learning, with dedicated study spaces and resources to support students' academic pursuits. College libraries also offer access to electronic databases, online journals, and e-books, providing students with the latest research and information in their field of study. With dedicated librarians and staff, college libraries provide guidance and support to students, helping them locate and evaluate information, and develop their research skills. They offer an environment that encourages exploration, collaboration, and critical thinking, helping students to develop the skills they need to succeed in their studies and beyond.",
  },
  {
    label: 'IT Services',
    icon: GridIcon,
    path: '/campus-life/campus/it-services',
    image: facilityItServicesImg,
    description:
      'The Office of IT Services provides comprehensive support across our campus network, ensuring that every corner of our institution benefits from a digitally integrated environment. Our IT services are pivotal in streamlining campus life, from the admission process to online classes, live event streaming, Enterprise Resource Planning (ERP), library services, learning management systems, and campus-wide Wi-Fi connectivity. With meticulous attention to detail, our team ensures that our campus infrastructure operates smoothly and without disruptions.',
  },
  {
    label: 'Academics',
    icon: AcademicCapIcon,
    path: '/campus-life/campus/academics',
    image: facilityAcademicsImg,
    description:
      'CHRIST College Pune places a strong emphasis on academics as the cornerstone of holistic development within a dynamic societal context. Our academic programs are meticulously designed to foster intellectual curiosity and critical thinking among our students. We offer a diverse array of disciplines and provide access to state-of-the-art resources and dedicated faculty members who inspire and mentor. Our commitment to academics goes beyond traditional learning; we aim to equip our students with the knowledge, skills, and values needed to excel in their chosen fields and to make a meaningful impact on society. Through rigorous curricula, research opportunities, and a strong sense of social responsibility, we ensure that our graduates are well-prepared to contribute effectively to the ever-changing world around them.',
  },
  {
    label: 'Play Ground',
    icon: AwardIcon,
    path: '/campus-life/campus/play-ground',
    image: facilityPlaygroundImg,
    description:
      "The College playground is an important part of campus life, providing students with a space to exercise, play sports, socialize, and de-stress. It's a great place to meet new people, form connections, and develop teamwork skills. It serves as a gathering place for social interaction and community building. It provides a space for outdoor sports and activities like Basketball, Volleyball, and Soccer. Having access to a well-maintained and safe college playground enhances the overall college experience and contribute to students' physical and mental well-being.",
  },
  {
    label: 'Research Facilities',
    icon: SearchIcon,
    path: '/campus-life/campus/research-facilities',
    image: facilityResearchImg,
    description:
      'It aims at establishing world-class research facilities and to serve societal needs as learned members. This is deliberately attained through excellence in passion-driven research which caters to the global needs and technology transfer by uniting researchers for the betterment of humanity.',
  },
  {
    label: 'Recreational Areas',
    icon: SparklesIcon,
    path: '/campus-life/campus/recreational-areas',
    image: facilityRecreationalImg,
    description:
      'Our expansive campus features a wide range of appealing locations, from peaceful alcoves and lush, shaded groves to lively pavilions, all of which serve as venues for creative thinking, conversations, and celebratory gatherings. These adaptable spaces allow for everything from informal discussions to dance and music practises. Moreover, our Student Cultural Association Room is a designated location for students to organise cultural events and artistic performances, enhancing the cultural fabric of our campus community and nurturing innovation.',
  },
  {
    label: 'Health and Wellness',
    icon: CheckCircleIcon,
    path: '/campus-life/campus/health-and-wellness',
    image: facilityHealthImg,
    description:
      "At CHRIST College Pune, we are fully dedicated to both the holistic development and well-being of our students. Our Center for Holistic Development, in conjunction with the Health & Wellness Center, is equipped with compassionate professionals who ensure students' emotional and physical health concerns are handled confidentially and with the utmost dignity. We understand that a healthy body and sound mind are fundamental to students' academic and personal success, guiding them towards comprehensive development and well-being.",
  },
];

function HeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLoadingNotice, setShowLoadingNotice] = useState(false);

  useEffect(() => {
    // If video hasn't started playing within 400ms, display the loading status
    const timer = setTimeout(() => {
      setShowLoadingNotice(true);
    }, 400);

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (query.matches) {
      clearTimeout(timer);
      return undefined;
    }

    const video = videoRef.current;
    if (video) {
      if (!video.paused && video.readyState >= 3) {
        setIsPlaying(true);
        clearTimeout(timer);
      }
      video.play().catch(() => {});
    }

    return () => clearTimeout(timer);
  }, []);

  const handlePlaying = () => {
    setIsPlaying(true);
  };

  const isReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#3b0409] via-[#610912] to-[#1e0205] flex flex-col justify-end">
      {/* Ambient campus backdrop photo with soft blend while video loads/buffers */}
      <img
        src={facilityAcademicsImg}
        alt="Christ College Pune Campus"
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
          isPlaying ? 'opacity-0' : 'opacity-25 mix-blend-overlay'
        }`}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-10" />

      {/* Video element */}
      {!isReducedMotion && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          src={bannerVideo}
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={handlePlaying}
          onCanPlayThrough={handlePlaying}
          onWaiting={() => setShowLoadingNotice(true)}
          aria-hidden="true"
        />
      )}

      {/* Institutional text & loading status container */}
      <div className="relative z-20 p-5 sm:p-7 md:p-8 flex flex-col items-start justify-end max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/40 border border-cc-gold/40 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-cc-gold backdrop-blur-md shadow-sm">
          <SparklesIcon className="h-3.5 w-3.5 text-cc-gold" />
          <span>Christ College Pune &bull; Estd. 2007</span>
        </div>

        <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
          Shaping Minds, Building Character
        </h2>



        {/* Loading notice displayed if video is loading/buffering */}
        {!isPlaying && showLoadingNotice && !isReducedMotion && (
          <div className="mt-3.5 inline-flex items-center gap-2.5 rounded-full bg-black/60 border border-white/20 px-3.5 py-1.5 text-xs font-medium text-amber-200 backdrop-blur-md shadow-md animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>Campus video is loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}

function CampusFacilitiesSection() {
  return (
    <section className="bg-cc-bg-surface py-16">
      <motion.div
        className="mx-auto max-w-[1200px] px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem} className="mx-auto max-w-2xl text-center">
          <h2>Campus Facilities</h2>
          <p className="mt-3 text-cc-text-muted-light">
            A well-equipped infrastructure to promote the academic, research, and cultural pursuits of CHRIST College Pune. An equal opportunity learning environment for every Christite.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAMPUS_FACILITIES.map((facility) => {
            const Icon = facility.icon || BuildingIcon;
            return (
              <motion.div key={facility.path} variants={staggerItem}>
                <div
                  className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-cc-lg shadow-cc-sm transition-all duration-[350ms] hover:-translate-y-1 hover:shadow-cc"
                >
                  <img
                    src={facility.image}
                    alt={facility.label}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    loading="lazy"
                  />

                  {/* Icon badge at top-left */}
                  <span className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-cc-md bg-cc-primary-deeper/90 text-white shadow-cc-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <Icon className="h-4 w-4" />
                  </span>

                  {/* Gradient vignette so label is always readable before hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                  <span className="relative z-10 p-4 font-semibold text-cc-text-light transition-opacity duration-300 group-hover:opacity-0">
                    {facility.label}
                  </span>

                  {/* Existing Student Life hover overlay: rich brand gradient overlay on hover */}
                  <span className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-cc-primary-deeper/95 via-cc-primary/90 to-cc-primary-dark/95 opacity-0 transition-opacity duration-[350ms] group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="font-bold text-white text-base">
                      {facility.label}
                    </span>
                    <span className="mt-2 text-xs text-white/85 line-clamp-5 leading-relaxed">
                      {facility.description}
                    </span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
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

      {/* MIT-Style Announcement Marquee Bar
      <div className="w-full border-y border-slate-200 bg-white py-2 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="w-full overflow-hidden">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="5"
            onMouseEnter={(e) => e.currentTarget.stop()}
            onMouseLeave={(e) => e.currentTarget.start()}
            className="flex items-center text-[13px] sm:text-sm font-medium text-slate-700 select-none cursor-pointer"
          >
            {TICKER_ANNOUNCEMENTS.map((item) => (
              <span key={item.id} className="inline-flex items-center mr-10 sm:mr-14">
                <span className="font-bold text-[#e53935] uppercase text-xs tracking-wider mr-2">
                  {item.badge}
                </span>
                <span className="text-slate-800">
                  {item.text}
                </span>
                <span className="ml-2 font-bold text-[#d32f2f] inline-flex items-center gap-0.5">
                  {item.actionText}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </span>
            ))}
          </marquee>
        </div>
      </div>
      */}

      <motion.section
        className="bg-cc-bg-card px-4 py-6 md:px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={emphasis}
      >
        <div className="grid gap-4">
          <div className="relative flex aspect-[16/9] flex-col justify-end overflow-hidden rounded-cc-lg bg-gradient-to-br from-[#3b0409] via-[#610912] to-[#1e0205] shadow-inner sm:aspect-[21/9] lg:aspect-[2.2/1]">
            <HeroVideo />
          </div>

          {/* Admissions sidebar card
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

            <div className="mt-4 flex items-center justify-between rounded-cc-md bg-cc-bg-card p-4">
              <p className="text-sm font-semibold text-cc-text-heading">News &amp; Announcements</p>
              <Link
                to="/news-and-events/campus-news-events/campus"
                className="text-xs font-semibold text-cc-primary hover:text-cc-primary-dark"
              >
                View All
              </Link>
            </div>
          </aside>
          */}
        </div>
      </motion.section>

      <motion.section
        id="departments"
        className="mx-auto max-w-[1200px] scroll-mt-[calc(var(--header-height)+var(--space-4))] px-6 pt-6 pb-16"
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
              className="flex flex-col overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm transition-shadow duration-[350ms] hover:shadow-cc"
            >
              <Link to={dept.overview} className="group relative block aspect-[4/3] overflow-hidden">
                <span className="absolute inset-x-0 top-0 z-10 h-1 bg-[image:var(--gradient-gold)]" />
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="h-full w-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-105"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
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

      <section className="bg-cc-bg-card py-16">
        <motion.div
          className="mx-auto max-w-[1200px] px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="mx-auto max-w-2xl text-center">
            <h2>Student Life</h2>
            <p className="mt-3 text-cc-text-muted-light">
              Campus experience beyond the classroom — societies, service, sport, and holistic personal growth.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STUDENT_LIFE_LINKS.map((item) => {
              const Icon = item.icon || CompassIcon;
              return (
                <motion.div key={item.path} variants={staggerItem}>
                  <Link
                    to={item.path}
                    className="group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-xl border border-slate-200/80 bg-slate-900 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:rounded-3xl"
                  >
                    {/* Full-bleed Background Image: visible unhovered and stays clearly visible through the translucent gradient on hover */}
                    <img
                      src={item.image}
                      alt={item.label}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      loading="lazy"
                    />

                    {/* Permanent subtle dark bottom vignette so title is crisp and readable */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-700 group-hover:opacity-40" />

                    {/* Top-Left Floating Icon Badge */}
                    <span className="absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-cc-primary/90 text-white shadow-md backdrop-blur-sm transition-all duration-700 ease-out group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    {/* Smooth Left-Sweep Gradient Overlay: reduced speed (700ms) and translucent so the underlying image remains visible like Campus Facilities */}
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 z-10 w-0 bg-gradient-to-r from-[#610912]/80 via-[#7d101b]/75 to-[#45050b]/80 backdrop-blur-[0.5px] transition-[width] duration-700 ease-out group-hover:w-full"
                      aria-hidden="true"
                    />

                    {/* Card Title cleanly anchored at bottom */}
                    <div className="relative z-20 p-5">
                      <h3 className="text-lg font-bold text-white transition-all duration-700 ease-out group-hover:text-cc-gold group-hover:translate-x-1.5">
                        {item.label}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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

          <RotatingGallery />

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
