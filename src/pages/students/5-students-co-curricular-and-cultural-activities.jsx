import TabbedContentPage from '../../components/TabbedContentPage';
import { UsersIcon, AwardIcon, CompassIcon, BookIcon, CheckCircleIcon } from '../../components/icons';
import culturalsBanner from '../../assets/home/culturals.jpg';

const PILLARS = [
  {
    icon: AwardIcon,
    title: 'Artistic Excellence',
    description:
      'Provides an expansive stage for students to discover, nurture, and showcase creative talents in music, dance, drama, visual arts, and literature.',
  },
  {
    icon: UsersIcon,
    title: 'Cultural Diversity',
    description:
      'Celebrates multicultural harmony, indigenous regional traditions, and international heritage through vibrant festivals and ethnic celebrations.',
  },
  {
    icon: CompassIcon,
    title: 'Leadership & Team Building',
    description:
      'Empowers student coordinators with hands-on event management, team leadership, budget administration, and stage production experience.',
  },
];

const MAJOR_FESTS = [
  {
    name: 'Chrysalis',
    category: 'Mega Annual Cultural Fest',
    description:
      'The crown jewel of college fests, Chrysalis divides the student body into thematic competing houses, featuring multi-day competitions across music, choreography, drama, and fine arts.',
  },
  {
    name: 'Aaghaz',
    category: 'Talent Hunt & Fresher Welcome',
    description:
      'An exuberant platform welcoming incoming batches, designed to spot budding artistic talent across first-year undergraduate and postgraduate programs.',
  },
  {
    name: 'Bhasha Utsav (Ethnic Day)',
    category: 'Traditional & Heritage Celebration',
    description:
      'A colorful celebration of Indian linguistic and cultural diversity where students and faculty wear traditional attire, perform regional folk arts, and celebrate unity.',
  },
  {
    name: 'Gloria',
    category: 'Christmas Carol Fest',
    description:
      'An annual musical celebration bringing the campus community together in harmony through festive choral performances and spiritual carols.',
  },
  {
    name: 'Reel It',
    category: 'Filmmaking & Short Video Contest',
    description:
      'A modern creative competition challenging student filmmakers and visual storytellers to produce impactful short films and reels.',
  },
  {
    name: 'POV (Point of View)',
    category: 'Photography Competition',
    description:
      'Encourages amateur and passionate photographers to capture compelling campus and societal perspectives through creative lenswork.',
  },
  {
    name: 'Artscape',
    category: 'Visual & Fine Arts Exhibition',
    description:
      'A curated showcase of student paintings, digital illustrations, posters, sketches, and handicrafts.',
  },
  {
    name: 'Trill of the Quill',
    category: 'Literary & Debate Championship',
    description:
      'An intellectually invigorating contest featuring parliamentary debates, extempore speeches, creative writing, and poetry slams.',
  },
];

const CLUBS = [
  {
    name: 'Music & Choir Ensemble',
    description: 'Nurtures vocalists and instrumentalists across classical, western, and contemporary genres.',
  },
  {
    name: 'Dance Troupe',
    description: 'Choreographs and performs classical, folk, and contemporary western dance routines for college events and outstation fests.',
  },
  {
    name: 'Theatre & Dramatics Society',
    description: 'Focuses on stage plays, street plays (Nukkad Natak), scriptwriting, and theatrical production.',
  },
  {
    name: 'Literary & Debating Club',
    description: 'Organizes quizzes, debates, book discussions, and creative writing workshops.',
  },
  {
    name: 'Fine Arts & Design Club',
    description: 'Handles event decoration, stage aesthetics, digital design, and fine arts exhibitions.',
  },
];

function OverviewTab() {
  return (
    <>
      <div className="max-w-3xl">
        <h2>Co-curricular &amp; Cultural Life</h2>
        <p className="mt-4 text-cc-text-body">
          At Christ College Pune, co-curricular engagement is central to our philosophy of holistic education.
          We believe that intellectual growth is profoundly enriched through creative expression, artistic exploration,
          and vibrant cultural celebrations.
        </p>
        <p className="mt-4 text-cc-text-body">
          Our dynamic calendar of cultural festivals, inter-departmental competitions, fine arts exhibitions,
          and literary gatherings ensures that the campus remains a spirited hub of creativity, collaboration,
          and joyous camaraderie throughout the academic year.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <pillar.icon width={22} height={22} />
            </span>
            <h3 className="mt-4 text-base">{pillar.title}</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">{pillar.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function FestsTab() {
  return (
    <div>
      <div className="max-w-3xl">
        <h2>Flagship Cultural Events &amp; Festivals</h2>
        <p className="mt-4 text-cc-text-body">
          Explore the annual festivals organized by our students that define the Christite spirit and cultural energy.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {MAJOR_FESTS.map((fest) => (
          <div
            key={fest.name}
            className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm transition-all duration-[350ms] hover:border-cc-primary hover:shadow-cc"
          >
            <span className="inline-block rounded-cc-pill bg-cc-primary/10 px-3 py-0.5 text-xs font-semibold text-cc-primary">
              {fest.category}
            </span>
            <h3 className="mt-3 text-lg font-bold text-cc-text-heading">{fest.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cc-text-muted-light">{fest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClubsTab() {
  return (
    <div className="max-w-3xl">
      <h2>Cultural Clubs &amp; Societies</h2>
      <p className="mt-4 text-cc-text-body">
        Students have the opportunity to join specialized artistic clubs to hone their passions under the guidance
        of experienced faculty advisors and senior student mentors.
      </p>

      <div className="mt-8 flex flex-col divide-y divide-cc-gray-200 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
        {CLUBS.map((club) => (
          <div key={club.name} className="py-4 first:pt-0 last:pb-0">
            <h3 className="text-base font-bold text-cc-text-heading">{club.name}</h3>
            <p className="mt-1 text-sm text-cc-text-muted-light">{club.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-cc-lg border border-cc-primary/20 bg-cc-primary/5 p-6">
        <h3 className="text-base font-bold text-cc-primary">Inter-Collegiate Representation</h3>
        <p className="mt-2 text-sm leading-relaxed text-cc-text-body">
          College cultural teams regularly represent Christ College Pune in prestigious university, state,
          and national level cultural fests, winning accolades in music, choreography, debate, and theatre.
        </p>
      </div>
    </div>
  );
}

export default function CoCurricularAndCulturalActivities({ initialTab = 'overview' }) {
  return (
    <TabbedContentPage
      pageTitle="Co-curricular &amp; Cultural Activities"
      description="Discover cultural life at Christ College Pune - from flagship festivals like Chrysalis, Aaghaz, and Bhasha Utsav to student arts clubs, music ensembles, and theatre."
      bannerImage={culturalsBanner}
      bannerAlt="Students performing in cultural festivities at Christ College Pune"
      initialTab={initialTab}
      tabs={[
        { key: 'overview', label: 'Overview', render: () => <OverviewTab /> },
        { key: 'fests', label: 'Festivals & Events', render: () => <FestsTab /> },
        { key: 'clubs', label: 'Clubs & Societies', render: () => <ClubsTab /> },
      ]}
    />
  );
}
