import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { UsersIcon, SparklesIcon, AcademicCapIcon, CheckCircleIcon, CompassIcon, SearchIcon, GridIcon } from '../../components/icons';

// Centre & Cell Thumbnail Images
import imgIqac from '../../assets/centres/thumbs/iqac.png';
import imgHealth from '../../assets/centres/thumbs/centre_for_health_and_wellness.jpg';
import imgNature from '../../assets/centres/thumbs/nature_club.png';
import imgNirmiti from '../../assets/centres/thumbs/nirmiti_start_up_and_innovation_centre.png';
import imgResearch from '../../assets/centres/thumbs/research_cell.png';
import imgChd from '../../assets/centres/thumbs/centre_for_holistic_development.png';
import imgMou from '../../assets/centres/thumbs/mou.png';
import imgCdm from '../../assets/centres/thumbs/centre_for_digital__media.png';
import imgSca from '../../assets/centres/thumbs/student_cultural_association.png';
import imgNss from '../../assets/centres/thumbs/national_service_scheme.png';
import imgLibrary from '../../assets/centres/thumbs/library.png';
import imgSc from '../../assets/centres/thumbs/student_council.png';
import imgSports from '../../assets/centres/thumbs/physical__education.png';
import imgIprc from '../../assets/centres/thumbs/intellectual_property_rights_cell.png';
import imgEoc from '../../assets/centres/thumbs/equal_opportunity_cell.jpg';
import imgScholarship from '../../assets/centres/thumbs/scholarship_support_cell.jpg';
import imgWomens from '../../assets/centres/thumbs/womens_cell.png';
import imgAntiRagging from '../../assets/centres/thumbs/anti_ragging_cell.png';
import imgAshc from '../../assets/centres/thumbs/anti_sexual_harassment_cell.png';
import imgElc from '../../assets/centres/thumbs/electoral_literacy_club.png';
import imgSgrc from '../../assets/centres/thumbs/student_grievance_redressal_cell.png';

const CATEGORIES = [
  {
    title: 'Academics & Research',
    icon: AcademicCapIcon,
    items: [
      { name: 'IQAC', tagline: 'Quality assurance & accreditation', image: imgIqac, path: '/naac-iqac/iqac/about-iqac' },
      { name: 'Research Cell', tagline: 'Research, innovation & publications', image: imgResearch, path: '/centres-and-cells/research-cell' },
      { name: 'Nirmiti Start Up and Innovation Centre', tagline: 'Startup incubation & entrepreneurship', image: imgNirmiti, path: '/centres-and-cells/nirmiti-start-up-and-innovation-centre' },
      { name: 'Intellectual Property Rights Cell', tagline: 'Patents, copyright & IP awareness', image: imgIprc, path: '/centres-and-cells/intellectual-property-rights-cell' },
      { name: 'MoU and Activities', tagline: 'Institutional collaborations & partnerships', image: imgMou, path: '/naac-iqac/iqac/mou-and-activities' },
      { name: 'Centre For Digital Media', tagline: 'Branding, media & communications', image: imgCdm, path: '/centres-and-cells/centre-for-digital-media' },
      { name: 'Library', tagline: 'Books, journals & digital resources', image: imgLibrary, path: '/centres-and-cells/library/about-us' },
    ],
  },
  {
    title: 'Student Welfare & Safety',
    icon: CheckCircleIcon,
    items: [
      { name: 'Centre For Health and Wellness', tagline: 'Counselling & preventive healthcare', image: imgHealth, path: '/centres-and-cells/centre-for-health-and-wellness/activities' },
      { name: 'Centre for Holistic Development', tagline: 'Holistic student development & counselling', image: imgChd, path: '/centres-and-cells/centre-for-holistic-development' },
      { name: 'Scholarship Support Cell', tagline: 'Scholarships & financial assistance', image: imgScholarship, path: '/centres-and-cells/scholarship-support-cell' },
      { name: 'Equal Opportunity Cell', tagline: 'Diversity, equity & inclusion', image: imgEoc, path: '/centres-and-cells/equal-opportunity-cell' },
      { name: "Women's Cell", tagline: "Women's safety, equity & empowerment", image: imgWomens, path: '/centres-and-cells/women-s-cell' },
      { name: 'Anti-Ragging Cell', tagline: 'Ragging-free campus initiatives', image: imgAntiRagging, path: '/centres-and-cells/anti-ragging-cell' },
      { name: 'Anti-Sexual Harassment Cell', tagline: 'POSH Act compliance & redressal', image: imgAshc, path: '/centres-and-cells/anti-sexual-harassment-cell' },
      { name: 'Student Grievance Redressal Cell', tagline: 'Academic & administrative grievances', image: imgSgrc, path: '/centres-and-cells/student-grievance-redressal-cell' },
      { name: 'Electoral Literacy Club', tagline: 'Voter awareness & civic engagement', image: imgElc, path: '/centres-and-cells/electoral-literacy-club' },
    ],
  },
  {
    title: 'Student Life & Activities',
    icon: CompassIcon,
    items: [
      { name: 'Student Council', tagline: 'Apex student representative body', image: imgSc, path: '/students/student-council' },
      { name: 'Student Cultural Association', tagline: 'Cultural & co-curricular activities', image: imgSca, path: '/students/student-cultural-association' },
      { name: 'Clubs & Societies', tagline: 'Literary, creative & academic clubs', icon: SparklesIcon, path: '/centres-and-cells/clubs-and-societies' },
      { name: 'National Service Scheme', tagline: 'Community service & social responsibility', image: imgNss, path: '/students/national-service-scheme/about-us' },
      { name: 'Physical Education & Sports', tagline: 'Sports, fitness & tournaments', image: imgSports, path: '/students/physical-education' },
      { name: 'Nature Club', tagline: 'Environmental stewardship & sustainability', image: imgNature, path: '/centres-and-cells/nature-club' },
      { name: 'Association of Christian Students', tagline: 'Faith & spiritual community', icon: UsersIcon, path: '/centres-and-cells/association-of-christian-students' },
    ],
  },
];

const TOTAL_COUNT = CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

function CentreCard({ name, tagline, image, icon: Icon, path, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index, 6) * 0.04, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        to={path}
        className="group flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card p-4 shadow-cc-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cc-primary hover:shadow-cc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary focus-visible:ring-offset-2"
      >
        <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cc-primary to-cc-primary-deeper p-1 shadow-cc-xs">
          <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2">
            {Icon ? (
              <Icon className="h-7 w-7 text-cc-primary" aria-hidden="true" />
            ) : (
              <img src={image} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-contain" />
            )}
          </span>
        </span>
        <span className="min-w-0">
          <span className="block font-semibold leading-snug text-cc-text-heading transition-colors group-hover:text-cc-primary">
            {name}
          </span>
          <span className="mt-0.5 block text-xs leading-snug text-cc-text-muted-light">{tagline}</span>
        </span>
      </Link>
    </motion.div>
  );
}

export default function CentresIndex() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const normalizedQuery = query.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    return CATEGORIES.filter((c) => activeCategory === 'All' || c.title === activeCategory)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (item) =>
            !normalizedQuery ||
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.tagline.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [activeCategory, normalizedQuery]);

  const resultCount = visibleCategories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <>
      <Seo
        title="Centres & Cells"
        description="Directory of all centres, cells and committees at Christ College, Pune — IQAC, Research Cell, Library, Student Council, NSS, Nirmiti Start Up and Innovation Centre, Women's Cell and more."
      />
      <PageHeader breadcrumbs={[{ label: 'Centres & Cells' }, { label: 'Centres Index' }]} />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="relative overflow-hidden bg-[image:var(--gradient-hero)]"
      >
        <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/5" aria-hidden="true" />
        <div className="pointer-events-none absolute right-24 bottom-0 h-24 w-24 rounded-full bg-white/5" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 py-12 sm:py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl">
            Centres &amp; Cells
          </h1>
          <p className="mt-2 max-w-2xl text-sm font-semibold uppercase tracking-wide text-cc-gold sm:text-base">
            Academics, Research, Wellness &amp; Student Life — All in One Place
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-white/90">
            <span className="flex items-center gap-2 text-sm">
              <GridIcon className="h-4 w-4 text-cc-gold" aria-hidden="true" />
              <strong className="font-bold text-white">{TOTAL_COUNT}</strong> centres &amp; cells
            </span>
            <span className="flex items-center gap-2 text-sm">
              <CompassIcon className="h-4 w-4 text-cc-gold" aria-hidden="true" />
              <strong className="font-bold text-white">{CATEGORIES.length}</strong> categories
            </span>
          </div>
        </div>
      </motion.div>

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body leading-relaxed">
          Christ College, Pune hosts a wide network of centres, cells and committees supporting
          academics, research, student welfare and campus life. Search or filter the directory
          below to find what you need.
        </p>

        {/* Search + Filter bar */}
        <div className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative flex-1 sm:max-w-xs">
              <span className="sr-only">Search centres and cells</span>
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cc-text-muted-light" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search centres & cells…"
                className="w-full rounded-cc-pill border border-cc-gray-300 bg-cc-bg-card py-2 pl-9 pr-4 text-sm text-cc-text-body placeholder:text-cc-text-muted-light focus:border-cc-primary focus:outline-none focus:ring-2 focus:ring-cc-primary/20"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {['All', ...CATEGORIES.map((c) => c.title)].map((title) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => setActiveCategory(title)}
                  aria-pressed={activeCategory === title}
                  className={`rounded-cc-pill border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                    activeCategory === title
                      ? 'border-cc-primary bg-cc-primary text-white'
                      : 'border-cc-gray-300 bg-cc-bg-card text-cc-text-body hover:border-cc-primary hover:text-cc-primary'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {normalizedQuery && (
          <p className="mt-6 text-sm text-cc-text-muted-light">
            {resultCount} {resultCount === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
          </p>
        )}

        {resultCount === 0 ? (
          <div className="mt-10 rounded-cc-lg border border-dashed border-cc-gray-300 bg-cc-bg-surface p-10 text-center">
            <p className="text-cc-text-body">No centres or cells match your search.</p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setActiveCategory('All');
              }}
              className="mt-3 text-sm font-semibold text-cc-primary hover:underline"
            >
              Clear search &amp; filters
            </button>
          </div>
        ) : (
          visibleCategories.map((category, catIndex) => (
            <div key={category.title} className={catIndex === 0 ? 'mt-10' : 'mt-14'}>
              <h2 className="flex items-center gap-2.5">
                <category.icon className="h-6 w-6 shrink-0 text-cc-primary" aria-hidden="true" />
                {category.title}
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, index) => (
                  <CentreCard key={item.name} {...item} index={index} />
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}
