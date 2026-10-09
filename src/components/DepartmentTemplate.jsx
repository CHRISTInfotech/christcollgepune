import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from './Seo';
import TestimonialCarousel from './TestimonialCarousel';
import { getFacultyByDepartment } from '../data/faculty';
import {
  ChevronRightIcon,
  ChevronDownIcon,
  BuildingIcon,
  GridIcon,
  UsersIcon,
  AwardIcon,
  CompassIcon,
  AcademicCapIcon,
  BookIcon,
  ClockIcon,
  CheckCircleIcon,
  BriefcaseIcon,
  SparklesIcon,
  DocumentTextIcon,
  QuoteIcon,
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon,
  TargetIcon,
  LightbulbIcon,
} from './icons';

// Splits prose into sentences without breaking on single-letter abbreviations
// like "B. Com" or "M. Com". Those periods are masked out before splitting
// (rather than just excluded from the split pattern) so the text around them
// isn't silently dropped, then restored once the sentences are split.
function splitSentences(text) {
  const PLACEHOLDER = String.fromCharCode(0);
  const masked = text.replace(/\b([A-Z])\.(?=\s)/g, `$1${PLACEHOLDER}`);
  const matches = masked.match(/[^.!?]+[.!?]+(?=\s|$)|[^.!?]+$/g) || [masked];
  return matches
    .map((s) => s.split(PLACEHOLDER).join('.').trim())
    .filter(Boolean);
}

// Shows only the first few sentences of a paragraph set, with a Read more /
// Show less toggle that reveals the full paragraphs.
function ExpandableText({ paragraphs = [], sentenceLimit = 3, quote = false, className = '', boldLastParagraph = false }) {
  const [expanded, setExpanded] = useState(false);
  const sentences = splitSentences(paragraphs.join(' '));
  const preview = sentences.slice(0, sentenceLimit).join(' ');
  const hasMore = sentences.length > sentenceLimit;
  const wrap = (text) => (quote ? <>&ldquo;{text}&rdquo;</> : text);

  return (
    <>
      <div className={className}>
        {expanded
          ? paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={boldLastParagraph && idx === paragraphs.length - 1 ? 'font-bold text-cc-primary' : undefined}
              >
                {wrap(para)}
              </p>
            ))
          : <p>{wrap(preview)}</p>}
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex self-start items-center gap-1 rounded-full bg-cc-primary/10 px-2.5 py-1 text-[11px] font-bold text-cc-primary hover:bg-cc-primary hover:text-white transition-all shadow-xs"
        >
          <span>{expanded ? 'Show less' : 'Read more'}</span>
          <ChevronDownIcon className={`h-2.5 w-2.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}
    </>
  );
}

// Vision/Mission card: icon + heading, statement below, nothing else.
function VisionMissionCard({ title, icon: Icon, statement }) {
  return (
    <div className="group rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card p-6 sm:p-7 shadow-cc-sm transition-all duration-300 hover:-translate-y-1 hover:border-cc-primary/50 hover:shadow-cc">
      <div className="flex items-center gap-3">
        <Icon className="h-8 w-8 text-cc-gold shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
        <h3 className="text-2xl font-semibold text-cc-primary">{title}</h3>
      </div>
      <p className="mt-3 text-sm sm:text-base text-cc-text-body leading-relaxed">{statement}</p>
    </div>
  );
}

// 3D Flip Card for Student Achievements:
// Front side shows the full image (full width and height without cropping).
// Hovering (or tapping) flips the card to reveal the full achievement details.
function AchievementFlipCard({ achievement }) {
  const [flipped, setFlipped] = useState(false);
  const title = achievement.title || achievement.name;

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`${title} achievement card - hover or press enter to flip`}
      onClick={() => setFlipped((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((prev) => !prev);
        }
      }}
      style={{ aspectRatio: '877 / 483' }}
      className={`flip-card-container group relative w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-gold rounded-cc-lg ${
        flipped ? 'is-flipped' : ''
      }`}
    >
      <div className="flip-card-inner rounded-cc-lg shadow-cc-sm transition-transform duration-500 group-hover:shadow-cc">
        {/* Front Face: Full Width & Height Image */}
        <div className="flip-card-front rounded-cc-lg overflow-hidden border border-cc-gray-200 bg-white shadow-cc-xs flex items-center justify-center">
          {achievement.photo ? (
            <img
              src={achievement.photo}
              alt={title}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-cc-primary via-[#133880] to-[#081534] p-5 text-center text-white">
              <span className="text-4xl mb-2">{achievement.badge || '🏆'}</span>
              <h4 className="text-base font-bold">{title}</h4>
              {achievement.programme && (
                <p className="text-xs text-cc-gold mt-1">{achievement.programme}</p>
              )}
            </div>
          )}
        </div>

        {/* Back Face: Full Achievement Details */}
        <div className="flip-card-back rounded-cc-lg overflow-hidden border-2 border-cc-gold/60 bg-gradient-to-br from-[#0c2356] via-cc-primary to-[#081534] p-4 sm:p-5 text-white shadow-cc flex flex-col justify-center text-left">
          <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
            {title}
          </h4>
          {achievement.programme && (
            <span className="mt-1 inline-block text-[11px] font-semibold text-cc-gold">
              {achievement.programme}
            </span>
          )}

          <div className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-100 overflow-y-auto max-h-[140px] sm:max-h-[170px] pr-1">
            {achievement.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DepartmentTemplate({
  seoTitle,
  seoDescription,
  departmentName,
  breadcrumbs = [],
  bannerImage,
  newsTickerText,
  programmes = [],
  aboutParagraphs = [],
  vision,
  mission,
  hod = {},
  activities = [],
  achievements = [],
  testimonials = [],
  faculty = null,
  extraSections = null,
}) {
  const [activeSection, setActiveSection] = useState('courses');
  const observerRef = useRef(null);

  const departmentFaculty = faculty && faculty.length > 0
    ? faculty
    : getFacultyByDepartment(departmentName);

  // Define sidebar navigation items with dedicated icon badges
  const navItems = [
    { id: 'courses', label: 'Programmes Offered', icon: AcademicCapIcon, count: programmes.length },
    { id: 'about', label: 'About Department', icon: BuildingIcon },
    (vision || mission) ? { id: 'vision', label: 'Vision & Mission', icon: CompassIcon } : null,
    hod.name ? { id: 'hod-message', label: 'Message from HoD', icon: UsersIcon } : null,
    activities.length > 0 ? { id: 'activities', label: 'Activities & Events', icon: GridIcon, count: activities.length } : null,
    achievements.length > 0 ? { id: 'achievements', label: 'Student Achievements', icon: AwardIcon, count: achievements.length } : null,
    testimonials.length > 0 ? { id: 'testimonials', label: 'Student Testimonials', icon: UsersIcon, count: testimonials.length } : null,
    departmentFaculty.length > 0 ? { id: 'faculty', label: 'Department Faculty', icon: UsersIcon, count: departmentFaculty.length } : null,
  ].filter(Boolean);

  // ScrollSpy with IntersectionObserver
  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '-15% 0px -65% 0px',
      threshold: 0.1,
    });

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [navItems]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -90; // offset for sticky header
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-cc-bg-page text-cc-text-body">
      <Seo title={seoTitle || departmentName} description={seoDescription} />

      {breadcrumbs.length > 0 && (
        <div className="bg-cc-gold py-2">
          <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10 xl:px-12">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-cc-primary-deeper">
                <li>
                  <Link to="/" className="flex items-center gap-1 text-cc-primary-deeper hover:text-cc-primary-dark hover:underline">
                    <HomeIcon width={14} height={14} />
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <li key={crumb.path ?? crumb.label + index} className="flex items-center gap-2">
                      <span aria-hidden="true">/</span>
                      {crumb.path && !isLast ? (
                        <Link to={crumb.path} className="text-cc-primary-deeper hover:text-cc-primary-dark hover:underline">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="font-semibold text-cc-primary-deeper" aria-current={isLast ? 'page' : undefined}>
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      )}

      {/* Main Wide-Span Container */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-8">

        {/* Hero Banner with animated entrance */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 flex min-h-[240px] sm:min-h-[290px] flex-col items-center justify-center overflow-hidden rounded-cc-lg text-center shadow-cc-sm"
        >
          <img
            src={bannerImage}
            alt={departmentName}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          {/* Dual layered gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-cc-primary-deeper/95 via-cc-primary/88 to-cc-primary-dark/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/50" />

          <div className="relative z-10 w-full max-w-full px-6 py-10">
            <h1 className="whitespace-nowrap text-[clamp(0.75rem,3.8vw,3.25rem)] font-extrabold tracking-wide uppercase text-white drop-shadow-md [text-align-last:center]">
              {departmentName}
            </h1>
          </div>
        </motion.header>

        {/* News Ticker Bar with Live Pulse Sheen */}
        {newsTickerText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8 flex items-center gap-3.5 rounded-cc-md border border-cc-gray-200 border-l-4 border-l-cc-gold bg-cc-bg-card px-4 py-3 shadow-cc-xs"
          >
            <span className="shrink-0 rounded bg-gradient-to-r from-cc-gold to-cc-gold-dark px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-cc-primary-deeper shadow-xs flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cc-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cc-primary"></span>
              </span>
              News &amp; Events
            </span>
            <div className="group relative overflow-hidden text-xs sm:text-sm font-medium text-cc-text-body">
              <div className="animate-ticker flex w-max whitespace-nowrap group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                <span className="pr-16">{newsTickerText}</span>
                <span className="pr-16" aria-hidden="true">{newsTickerText}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile Section Selection Pills (sticky on small viewports) */}
        <div className="lg:hidden sticky top-[72px] z-20 mb-6 -mx-4 px-4 py-2.5 bg-cc-bg-card/95 backdrop-blur-md border-y border-cc-gray-200 overflow-x-auto no-scrollbar flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${isActive
                    ? 'bg-cc-primary text-white shadow-xs'
                    : 'bg-cc-gray-100 text-cc-text-body hover:bg-cc-gray-200'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Main Two-Column Layout Grid (MIT Style Sticky Sidebar + Full Content Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-8 xl:gap-10 items-start">

          {/* Left Sidebar Navigation (Fixed / Sticky throughout the entire page scroll) */}
          <aside className="hidden lg:block sticky top-24 self-start space-y-4 max-h-[calc(100vh-7rem)] overflow-y-auto no-scrollbar">
            <div className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">

              {/* Sidebar Header */}
              <div className="bg-gradient-to-r from-cc-primary to-cc-primary-dark px-5 py-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BuildingIcon className="h-4 w-4 text-cc-gold" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Department Menu
                  </span>
                </div>
                <span className="h-2 w-2 rounded-full bg-cc-gold animate-ping" />
              </div>

              {/* MIT-style Stacked Tabs */}
              <nav className="p-2 space-y-1.5" aria-label="Department sections">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`group flex items-center justify-between px-3.5 py-3 text-sm font-medium rounded-cc-sm transition-all duration-200 ${isActive
                          ? 'border-l-4 border-l-cc-gold bg-cc-primary/8 text-cc-primary font-bold shadow-xs pl-4'
                          : 'text-cc-text-body hover:bg-cc-bg-surface hover:text-cc-primary hover:translate-x-1'
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${isActive
                              ? 'bg-cc-primary text-white shadow-xs'
                              : 'bg-cc-gray-100 text-cc-text-muted-light group-hover:bg-cc-primary/10 group-hover:text-cc-primary'
                            }`}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                        </span>
                        <span>{item.label}</span>
                      </span>

                      <div className="flex items-center gap-1.5">
                        {item.count !== undefined && (
                          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${isActive ? 'bg-cc-primary/15 text-cc-primary' : 'bg-cc-gray-100 text-cc-text-muted-light'
                            }`}>
                            {item.count}
                          </span>
                        )}
                        <ChevronRightIcon
                          className={`h-4 w-4 shrink-0 transition-transform ${isActive
                              ? 'text-cc-primary translate-x-1'
                              : 'text-cc-text-muted-light/50 group-hover:text-cc-primary group-hover:translate-x-1'
                            }`}
                        />
                      </div>
                    </a>
                  );
                })}
              </nav>

              {/* Sidebar Quick Action / Direct Course Links */}
              {programmes.length > 0 && (
                <div className="border-t border-cc-gray-200 bg-cc-bg-surface/80 p-4">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <BookIcon className="h-3.5 w-3.5 text-cc-primary" />
                    <p className="text-[11px] font-bold tracking-wider uppercase text-cc-text-muted-light">
                      Degree Programmes
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {programmes.map((prog, idx) => (
                      <Link
                        key={idx}
                        to={prog.path}
                        className="group flex items-center justify-between rounded-cc-sm px-2.5 py-2 text-xs font-medium text-cc-text-body bg-white border border-cc-gray-200/80 hover:border-cc-primary/40 hover:bg-cc-primary/5 hover:text-cc-primary transition-all duration-150"
                      >
                        <span className="truncate">{prog.title}</span>
                        <span className="text-cc-text-muted-light group-hover:text-cc-primary group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Department Helpdesk Info Box */}
              <div className="p-4 bg-gradient-to-br from-cc-primary/5 to-cc-gold/10 border-t border-cc-gray-200">
                <p className="text-[11px] font-bold uppercase tracking-wider text-cc-primary mb-1.5 flex items-center gap-1.5">
                  <PhoneIcon className="h-3.5 w-3.5 text-cc-primary" />
                  Department Admissions
                </p>
                <p className="text-xs text-cc-text-body leading-relaxed mb-3">
                  Have questions about syllabus, eligibility, or admissions?
                </p>
                <Link
                  to="/admissions/contact-us"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-cc-pill bg-cc-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-cc-primary-dark transition-colors shadow-xs"
                >
                  <EnvelopeIcon className="h-3.5 w-3.5" />
                  <span>Enquire Now</span>
                </Link>
              </div>

            </div>
          </aside>

          {/* Right Main Content (All sections inside main so the sidebar stays fixed beside them) */}
          <main className="min-w-0 space-y-12">

            {/* 1. Courses / Programmes Offered Section */}
            <motion.section
              id="courses"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 relative overflow-hidden rounded-cc-lg border border-cc-gray-200 p-5 sm:p-7"
            >
              {bannerImage && (
                <>
                  <img
                    src={bannerImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-cc-bg-card/95" />
                </>
              )}

              <div className="relative mb-6 flex items-end justify-between border-b border-cc-gray-200 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-8 rounded-full bg-cc-gold" />
                    <span className="h-1.5 w-4 rounded-full bg-cc-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cc-gold-dark">
                      Curriculum &amp; Academics
                    </span>
                  </div>
                  <h2 className="mt-1 flex items-center gap-2.5 text-2xl sm:text-3xl font-extrabold text-cc-text-heading">
                    <AcademicCapIcon className="h-7 w-7 text-cc-primary shrink-0" />
                    Programmes Offered
                  </h2>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-cc-primary bg-cc-primary/10 px-3 py-1 rounded-full">
                  <CheckCircleIcon className="h-3.5 w-3.5 text-cc-primary" />
                  SPPU &amp; NEP Aligned
                </span>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programmes.map((prog, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="group flex flex-col overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-xs transition-all duration-300 hover:shadow-cc hover:border-cc-primary/50"
                  >
                    {prog.image && (
                      <div className="relative h-44 w-full overflow-hidden bg-cc-gray-100">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 rounded-full bg-cc-primary px-3 py-1 text-[11px] font-bold text-white shadow-xs backdrop-blur-xs">
                            <AcademicCapIcon className="h-3 w-3" />
                            {prog.level || 'Degree'}
                          </span>
                        </div>
                        {prog.duration && (
                          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-xs">
                            <ClockIcon className="h-3 w-3 text-cc-gold" />
                            <span>{prog.duration}</span>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-cc-primary group-hover:text-cc-primary-dark transition-colors">
                        {prog.title}
                      </h3>
                      {prog.subtitle && (
                        <p className="mt-1 text-xs font-semibold text-cc-gold-dark flex items-center gap-1">
                          <SparklesIcon className="h-3 w-3 shrink-0" />
                          <span>{prog.subtitle}</span>
                        </p>
                      )}
                      {prog.description && (
                        <p className="mt-2.5 text-xs text-cc-text-body line-clamp-3 leading-relaxed">
                          {prog.description}
                        </p>
                      )}

                      {/* Course Features List */}
                      <div className="mt-4 pt-3 border-t border-cc-gray-100 flex flex-wrap gap-2 text-[11px] text-cc-text-muted-light">
                        <span className="inline-flex items-center gap-1 bg-cc-gray-100 px-2.5 py-0.5 rounded-full font-medium">
                          <DocumentTextIcon className="h-3 w-3 text-cc-primary" />
                          Choice-Based Credit
                        </span>
                        <span className="inline-flex items-center gap-1 bg-cc-gray-100 px-2.5 py-0.5 rounded-full font-medium">
                          <BriefcaseIcon className="h-3 w-3 text-cc-primary" />
                          Industry Training
                        </span>
                      </div>

                      <div className="mt-auto pt-5">
                        <Link
                          to={prog.path}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-cc-pill bg-cc-gray-100 px-4 py-2.5 text-xs font-bold text-cc-primary transition-all group-hover:bg-cc-primary group-hover:text-white group-hover:shadow-sm"
                        >
                          <span>Explore Syllabus &amp; Details</span>
                          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 2. About the Department Section (Full Width) */}
            <motion.section
              id="about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card p-6 sm:p-8 shadow-cc-xs"
            >
              <div className="border-b border-cc-gray-200 pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-1 w-6 rounded-full bg-cc-gold" />
                  <span className="h-1 w-3 rounded-full bg-cc-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cc-gold-dark">
                    Overview
                  </span>
                </div>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-cc-primary">
                  <BuildingIcon className="h-6 w-6 text-cc-primary shrink-0" />
                  About the Department
                </h3>
              </div>

              <ExpandableText
                paragraphs={aboutParagraphs}
                sentenceLimit={3}
                boldLastParagraph
                className="mt-5 flex-1 text-sm sm:text-base text-cc-text-body leading-relaxed text-justify space-y-4"
              />
            </motion.section>

            {/* 3. Vision & Mission Cards (Placed directly after About Us) */}
            {(vision || mission) && (
              <motion.section
                id="vision"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28"
              >
                <div className="mb-6 flex items-center justify-between border-b border-cc-gray-200 pb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-1.5 w-8 rounded-full bg-cc-gold" />
                      <span className="h-1.5 w-4 rounded-full bg-cc-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-cc-gold-dark">
                        Guiding Philosophy
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-cc-text-heading flex items-center gap-2.5">
                      <CompassIcon className="h-7 w-7 text-cc-primary shrink-0" />
                      Vision &amp; Mission
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {vision && (
                    <VisionMissionCard title="Vision" icon={LightbulbIcon} statement={vision} />
                  )}

                  {mission && (
                    <VisionMissionCard title="Mission" icon={TargetIcon} statement={mission} />
                  )}
                </div>
              </motion.section>
            )}

            {/* 4. Message from HoD */}
            {hod.name && (
              <motion.section
                id="hod-message"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28 relative overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card p-6 sm:p-7 shadow-cc-xs"
              >
                {/* Background Watermark Quote Icon */}
                <QuoteIcon className="absolute right-4 top-4 h-24 w-24 text-cc-gray-100 opacity-60 pointer-events-none -z-0" />

                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                  <div className="flex flex-col items-center shrink-0">
                    {hod.image ? (
                      <div className="relative">
                        <img
                          src={hod.image}
                          alt={hod.name}
                          className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover object-top border-4 border-white ring-4 ring-cc-primary/20 shadow-cc-sm"
                        />
                        <span className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-cc-gold text-cc-primary-deeper shadow-xs">
                          <AwardIcon className="h-4 w-4" />
                        </span>
                      </div>
                    ) : (
                      <div className="flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-gradient-to-br from-cc-primary to-cc-primary-dark text-3xl font-extrabold text-white shadow-cc-sm">
                        {hod.name.slice(0, 2)}
                      </div>
                    )}
                    <p className="mt-3 text-center font-extrabold text-cc-text-heading text-base">{hod.name}</p>
                    <p className="text-center text-xs text-cc-text-muted-light font-medium">{hod.title || 'Head of Department'}</p>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 border-b border-cc-gray-200 pb-3">
                      <div>
                        <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                          <span className="h-1 w-6 rounded-full bg-cc-gold" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-cc-gold-dark">
                            Leadership
                          </span>
                        </div>
                        <h3 className="text-xl font-extrabold text-cc-primary mt-0.5">
                          Message from the Head of Department
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-bold text-cc-primary">
                        <CheckCircleIcon className="h-3.5 w-3.5 text-cc-primary" />
                        Department HoD
                      </span>
                    </div>

                    <ExpandableText
                      paragraphs={hod.messageParagraphs || (hod.message ? [hod.message] : [])}
                      sentenceLimit={3}
                      quote
                      className="mt-3 space-y-2 text-xs sm:text-sm text-cc-text-body leading-relaxed text-justify italic"
                    />
                  </div>
                </div>
              </motion.section>
            )}

            {/* 5. Department Activities & Events (inside main so sidebar stays fixed alongside) */}
            {activities.length > 0 && (
              <motion.section
                id="activities"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28"
              >
                <div className="mb-6 border-b border-cc-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-1.5 w-8 rounded-full bg-cc-gold" />
                    <span className="h-1.5 w-4 rounded-full bg-cc-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cc-gold-dark">
                      Campus Life &amp; Co-Curricular
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-cc-primary flex items-center gap-2.5">
                    <GridIcon className="h-7 w-7 text-cc-primary shrink-0" />
                    Department Activities &amp; Events
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {activities.map((act, index) => {
                    const CardWrapper = act.path ? Link : 'div';
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="flex"
                      >
                        <CardWrapper
                          to={act.path}
                          className="group flex flex-1 flex-col overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-xs transition-all duration-300 hover:shadow-cc hover:border-cc-primary"
                        >
                          <div className="relative h-40 w-full overflow-hidden bg-cc-gray-100">
                            <img
                              src={act.image}
                              alt={act.name}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>
                          <div className="flex flex-1 flex-col p-4 text-center sm:text-left">
                            <h4 className="text-sm font-bold text-cc-primary group-hover:text-cc-primary-dark transition-colors break-words">
                              {act.name}
                            </h4>
                            <p className="mt-1.5 text-xs text-cc-text-muted-light line-clamp-2 leading-relaxed">
                              {act.description}
                            </p>
                            {act.path && (
                              <div className="mt-auto pt-3 flex items-center justify-between text-xs font-bold text-cc-primary border-t border-cc-gray-100">
                                <span>Explore Details</span>
                                <span className="transition-transform group-hover:translate-x-1.5">&rarr;</span>
                              </div>
                            )}
                          </div>
                        </CardWrapper>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            )}

            {/* 6. Student Achievements Grid */}
            {achievements.length > 0 && (
              <motion.section
                id="achievements"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28"
              >
                <div className="mb-6 border-b border-cc-gray-200 pb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-1.5 w-8 rounded-full bg-cc-gold" />
                    <span className="h-1.5 w-4 rounded-full bg-cc-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cc-gold-dark">
                      Student Excellence
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-cc-primary flex items-center gap-2.5">
                    <AwardIcon className="h-7 w-7 text-cc-primary shrink-0" />
                    Student Achievements &amp; Laurels
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {achievements.map((ach, idx) => (
                    <AchievementFlipCard key={idx} achievement={ach} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* 7. Student Testimonials */}
            {testimonials.length > 0 && (
              <motion.section
                id="testimonials"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28"
              >
                <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-cc-gray-200 pb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-1 w-6 rounded-full bg-cc-gold" />
                      <span className="h-1 w-3 rounded-full bg-cc-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-cc-gold-dark">
                        Voices of Christites
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-cc-primary flex items-center gap-2.5">
                      <UsersIcon className="h-7 w-7 text-cc-primary shrink-0" />
                      Student &amp; Alumni Testimonials
                    </h2>
                  </div>
                  <Link
                    to="/academics/student-testimonials"
                    className="inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2 text-xs font-bold text-white shadow-cc-xs hover:bg-cc-primary-dark transition-all shrink-0 hover:shadow-sm"
                  >
                    <span>View All Testimonials</span>
                    <span>&rarr;</span>
                  </Link>
                </div>

                <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
                  <TestimonialCarousel testimonials={testimonials} />
                </div>
              </motion.section>
            )}

            {/* 8. Department Faculty */}
            {departmentFaculty.length > 0 && (
              <motion.section
                id="faculty"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28"
              >
                <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-cc-gray-200 pb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-1 w-6 rounded-full bg-cc-gold" />
                      <span className="h-1 w-3 rounded-full bg-cc-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-cc-gold-dark">
                        Academic Mentors
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-cc-primary flex items-center gap-2.5">
                      <UsersIcon className="h-7 w-7 text-cc-primary shrink-0" />
                      Faculty Members
                    </h2>
                  </div>
                  <Link
                    to="/about-us/faculty"
                    className="inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2 text-xs font-bold text-white shadow-cc-xs hover:bg-cc-primary-dark transition-all shrink-0 hover:shadow-sm"
                  >
                    <span>View All Faculty</span>
                    <span>&rarr;</span>
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                  {departmentFaculty.map((member, idx) => (
                    <motion.div
                      key={member.name}
                      whileHover={{ y: -5, transition: { duration: 0.25 } }}
                      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:border-cc-gold/60 hover:shadow-lg"
                    >
                      {/* Photo Box Container (Matching reference structure with neutral portrait backdrop) */}
                      <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-slate-100/90 flex items-end justify-center">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                          style={{ objectFit: 'cover', objectPosition: 'top' }}
                          loading="lazy"
                        />
                      </div>

                      {/* Content block: Left-aligned, font size reduced by 2px */}
                      <div className="flex flex-1 flex-col items-start justify-between p-3 sm:p-3.5 text-left">
                        <div className="w-full text-left">
                          <h3 className="font-serif text-[12px] sm:text-[13px] font-bold tracking-wide uppercase text-cc-primary group-hover:text-cc-primary-dark transition-colors line-clamp-2 leading-snug text-left">
                            {member.name}
                          </h3>
                          <p className="mt-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-cc-gold-dark text-left">
                            {departmentName.replace(/^Department of\s+/i, '').trim()}
                          </p>
                          {member.specialization && (
                            <p className="mt-1.5 text-[10px] sm:text-[11px] text-slate-500 font-normal leading-relaxed line-clamp-2 text-left">
                              Specialization: {member.specialization}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Thin vertical amber/gold divider line on right side for 5-column alignment */}
                      {(idx + 1) % 5 !== 0 && (
                        <span
                          className="hidden lg:block absolute -right-2 top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-transparent via-cc-gold/45 to-transparent pointer-events-none"
                          aria-hidden="true"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {extraSections}

          </main>
        </div>

      </div>

    </div>
  );
}
