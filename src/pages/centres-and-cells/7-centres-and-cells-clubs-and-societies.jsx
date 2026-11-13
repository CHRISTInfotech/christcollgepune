import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import CentreVisionMission from '../../components/CentreVisionMission';
import { VideoIcon, BuildingIcon } from '../../components/icons';
import logo from '../../assets/images/7-centres-and-cells-clubs-and-societies/logo.jpg';
import lyrica1 from '../../assets/images/gallery/club-lyrica/1.jpg';
import inkspire1 from '../../assets/images/gallery/club-inkspire/1.jpg';
import litloom1 from '../../assets/images/gallery/club-litloom/1.jpg';
import mathverse1 from '../../assets/images/gallery/club-mathverse/1.jpg';
import pixelora1 from '../../assets/images/gallery/club-pixelora/1.jpg';
import quiztoria1 from '../../assets/images/gallery/club-quiztoria/1.jpg';
import rhetorix1 from '../../assets/images/gallery/club-rhetorix/1.jpg';
import shutterbugs1 from '../../assets/images/gallery/club-shutterbugs/1.jpg';
import finsmart1 from '../../assets/images/gallery/club-finsmart/1.jpg';

const CLUBS = [
  { name: 'Lyrica', tagline: 'The Poetry Club', category: 'Literary', image: lyrica1, path: '/centres-and-cells/clubs-and-societies/lyrica' },
  { name: 'Inkspire', tagline: "The Writer's Forum", category: 'Literary', image: inkspire1, path: '/centres-and-cells/clubs-and-societies/inkspire' },
  { name: 'LitLoom', tagline: "The Readers' Circle", category: 'Literary', image: litloom1, path: '/centres-and-cells/clubs-and-societies/litloom' },
  { name: 'MathVerse', tagline: 'The Math Club', category: 'Academic', image: mathverse1, path: '/centres-and-cells/clubs-and-societies/mathverse' },
  { name: 'Pixelora', tagline: "The Designer's Club", category: 'Visual Arts', image: pixelora1, path: '/centres-and-cells/clubs-and-societies/pixelora' },
  { name: 'Quiztoria', tagline: 'The Quiz Club', category: 'Academic', image: quiztoria1, path: '/centres-and-cells/clubs-and-societies/quiztoria' },
  { name: 'Rhetorix', tagline: 'The Debate Club — Dept. of Arts', category: 'Literary', image: rhetorix1, path: '/centres-and-cells/clubs-and-societies/rhetorix' },
  { name: 'Shutterbugs', tagline: 'The Photography Club', category: 'Visual Arts', image: shutterbugs1, path: '/centres-and-cells/clubs-and-societies/shutterbugs' },
  { name: 'Theatre Club', tagline: 'Acting, drama & stage performance', category: 'Performing Arts', icon: VideoIcon, path: '/centres-and-cells/clubs-and-societies/theatre' },
  { name: 'Heritage Club', tagline: 'Dept. of Management', category: 'Department Club', icon: BuildingIcon, path: '/centres-and-cells/clubs-and-societies/heritage' },
  { name: 'FinSmart Club', tagline: 'Dept. of Commerce', category: 'Department Club', image: finsmart1, path: '/centres-and-cells/clubs-and-societies/finsmart' },
];

export default function ClubsAndSocieties() {
  return (
    <>
      <Seo
        title="Clubs & Societies"
        description="Christ College, Pune's student clubs and societies — Lyrica, Inkspire, LitLoom, MathVerse, Pixelora, Quiztoria, Rhetorix, Shutterbugs, Theatre Club, Heritage Club and FinSmart Club — platforms for creative, literary, artistic and intellectual growth."
      />
      <PageHeader breadcrumbs={[{ label: 'Centres & Cells' }, { label: 'Clubs & Societies' }]} />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="relative overflow-hidden"
      >
        <div className="relative flex min-h-[240px] items-end sm:min-h-[300px]">
          <img src={logo} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cc-primary-deeper/95 via-cc-primary-deeper/70 to-cc-primary-deeper/30" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-10 sm:py-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl">
              Clubs &amp; Societies
            </h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold uppercase tracking-wide text-cc-gold sm:text-base">
              Explore, Create, Belong
            </p>
          </div>
        </div>
      </motion.div>

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>About Clubs &amp; Societies</h2>
          <p className="mt-4 text-cc-text-body leading-relaxed">
            Clubs and Societies at Christ College, Pune, offer a vibrant, student-driven
            platform to explore interests, nurture talents, and encourage innovation. Comprising
            academic and cultural clubs, they bring together like-minded students to share
            ideas, collaborate, and turn their interests into meaningful initiatives. Managed by
            students under the guidance of faculty coordinators, the clubs organise various
            activities, competitions, workshops, and events at both club and college levels.
          </p>
        </div>

        <CentreVisionMission
          vision="To foster a vibrant, inclusive, and student-driven campus culture that nurtures talents, encourages innovation, and empowers students to become confident, creative, and responsible leaders."
          mission="To provide a platform for students to explore their interests and showcase their talents through academic and cultural clubs; to encourage like-minded students to collaborate, exchange ideas, and organise engaging activities and college-wide events; to develop leadership, teamwork, communication, creativity, and organisational skills through active student participation; and to promote inclusivity, innovation, and holistic development by transforming students’ ideas into meaningful experiences."
        />

        <h2 className="mt-14">All Clubs &amp; Societies</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLUBS.map(({ name, tagline, category, image, icon: Icon, path }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.04, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                to={path}
                className="group focus-visible:ring-cc-primary relative block overflow-hidden rounded-cc-lg border border-cc-gray-200 shadow-cc-sm transition-shadow duration-300 hover:shadow-cc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cc-primary-deeper">
                  {Icon ? (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cc-primary to-cc-primary-deeper">
                      <Icon className="h-14 w-14 text-white/90" aria-hidden="true" />
                    </div>
                  ) : (
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <span className="absolute left-3 top-3 rounded-cc-pill bg-cc-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-cc-primary-deeper shadow-xs">
                    {category}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block text-lg font-bold text-white drop-shadow-sm">{name}</span>
                    <span className="block text-xs font-medium text-white/80">{tagline}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
