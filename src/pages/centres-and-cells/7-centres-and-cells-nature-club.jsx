import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GlobeIcon, CompassIcon, AwardIcon } from '../../components/icons';
import banner from '../../assets/images/7-centres-and-cells-nature-club/banner.jpg';

// Activity Photos
import imgAct1 from '../../assets/centres/nature_club/activity_1.jpg';
import imgAct2 from '../../assets/centres/nature_club/activity_2.jpg';
import imgAct3 from '../../assets/centres/nature_club/activity_3.jpg';
import imgAct4 from '../../assets/centres/nature_club/activity_4.jpg';

const TABS = [
  { key: 'home', label: 'Home' },
  { key: 'activities', label: 'List of activities conducted' },
];

const OBJECTIVES = [
  'Inspire individuals to take an active role in environmental stewardship',
  'Emphasize the importance of protecting biodiversity and reducing pollution',
  'Promote adoption of eco-friendly and sustainable lifestyles',
  'Foster a sense of responsibility and global planetary stewardship',
  'Organize tree planting drives, clean-up campaigns, and educational workshops',
];

const ACTIVITIES = [
  {
    title: 'Seed Distribution at the Day of Inauguration',
    tag: 'Campus Green Initiative',
    description:
      "Christ College Pune's Nature Club kicked off the academic year with a seed distribution event, promoting green practices among students and staff.",
  },
  {
    title: 'Herbal Plants Plantation',
    tag: 'Medicinal Plantation Drive',
    description:
      'The Nature Club organized an herbal plants plantation drive, encouraging students to cultivate medicinal herbs and enhance campus greenery.',
  },
  {
    title: 'Best Out of Waste - Exhibition',
    tag: 'Sustainability & Upcycling',
    description:
      'An exhibition showcasing creative upcycling, where students transformed waste materials into useful and artistic items, promoting sustainability and innovation.',
  },
  {
    title: 'E-Poster making competition on "Water for Peace Day"',
    tag: 'Awareness & Competition',
    description:
      'In observance of "Water for Peace Day," the Nature Club led a water conservation drive, raising awareness about sustainable water use and conservation methods and also an E-poster making competition was organized and winners were awarded with exciting cash prizes.',
  },
];

const GALLERY = [
  { src: imgAct1, title: 'Seed Distribution & Plantation Drive' },
  { src: imgAct2, title: 'Herbal Plants Plantation' },
  { src: imgAct3, title: 'Best Out of Waste Exhibition Display' },
  { src: imgAct4, title: 'Water for Peace Day Celebrations' },
];

function HomeTab() {
  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="overflow-hidden rounded-2xl border border-cc-gray-200 shadow-cc-sm">
        <img
          src={banner}
          alt="Nature Club Banner"
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />
      </div>

      {/* About Us Card */}
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
          Environmental Stewardship &bull; UN SDGs
        </span>
        <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">About Us</h2>

        <div className="mt-4 space-y-4 text-cc-text-body leading-relaxed text-justify [text-align-last:left]">
          <p>
            In alignment with the 17 Sustainable Development Goals (SDGs) proposed by the United
            Nations to preserve and sustain the natural environment, Christ College is proud to
            introduce an exciting initiative: the &ldquo;Nature&rsquo;s Club.&rdquo; This
            community-driven effort aims to foster a deeper connection between people and the
            environment through a variety of engaging activities designed to sustain and preserve our
            natural surroundings.
          </p>
          <p>
            The Nature&rsquo;s Club is dedicated to inspiring individuals to take an active role in
            environmental stewardship. Members will organize tree planting drives, clean-up campaigns,
            and educational workshops. These activities are designed to emphasize the importance of
            protecting biodiversity, reducing pollution, and adopting eco-friendly lifestyles.
          </p>
          <p>
            By participating in the Nature&rsquo;s Club, members contribute not only to local
            environmental improvement but also develop a sense of responsibility and stewardship for
            the planet. Together, we can make a significant impact on preserving our natural world for
            future generations.
          </p>
        </div>
      </div>

      {/* Key Objectives */}
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <div className="flex items-center gap-2.5">
          <CompassIcon className="h-6 w-6 text-cc-primary shrink-0" />
          <h3 className="text-xl font-bold text-cc-text-heading">Key Objectives</h3>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {OBJECTIVES.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-cc-gray-100 bg-slate-50/70 p-4 text-sm text-cc-text-body"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ActivitiesTab() {
  return (
    <div className="space-y-8">
      {/* Introduction Card */}
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
          Nature Club &bull; Activities Log
        </span>
        <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">
          List of Activities Conducted
        </h2>
        <p className="mt-2 text-sm text-cc-text-body">
          Key green initiatives, campus plantation drives, competitions, and awareness campaigns
          conducted by the Nature&rsquo;s Club.
        </p>
      </div>

      {/* Activities Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {ACTIVITIES.map((act, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-xs transition-all hover:border-cc-primary hover:shadow-cc-sm"
          >
            <div>
              <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                {act.tag}
              </span>
              <h3 className="mt-3 text-lg font-bold text-cc-text-heading">
                {act.title}
              </h3>
              <p className="mt-3 text-sm text-cc-text-body leading-relaxed text-justify [text-align-last:left]">
                {act.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Gallery */}
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <h3 className="text-xl font-bold text-cc-text-heading">Activity Photographs</h3>
        <p className="mt-1 text-xs text-cc-text-muted-light">
          Glimpses of tree plantation drives, workshops, and student eco-competitions.
        </p>

        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-4">
          {GALLERY.map((photo, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-cc-gray-200 bg-slate-50 transition-all hover:border-cc-primary hover:shadow-cc-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-2.5 text-center">
                <p className="text-xs font-medium text-cc-text-heading line-clamp-1">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NatureClub() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <Seo
        title="Nature Club"
        description="The Nature Club at Christ College, Pune — an environmental initiative aligned with the UN's Sustainable Development Goals, organising tree planting, clean-up campaigns, and eco-awareness activities."
      />
      <PageHeader
        title="Nature Club"
        breadcrumbs={[{ label: 'Centres & Cells' }, { label: 'Nature Club' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-14">
        {/* Tab Strip */}
        <div className="flex flex-wrap gap-2 border-b border-cc-gray-200 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-cc-primary text-white shadow-sm'
                  : 'border border-cc-gray-200 bg-cc-bg-surface text-cc-text-body hover:border-cc-primary hover:text-cc-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'home' && <HomeTab />}
          {activeTab === 'activities' && <ActivitiesTab />}
        </div>
      </section>
    </>
  );
}
