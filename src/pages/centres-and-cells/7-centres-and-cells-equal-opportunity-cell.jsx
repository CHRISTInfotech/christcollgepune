import TabbedContentPage from '../../components/TabbedContentPage';
import ImageCarousel from '../../components/ImageCarousel';
import CentreVisionMission from '../../components/CentreVisionMission';
import { DownloadIcon, CompassIcon, CheckCircleIcon, UsersIcon } from '../../components/icons';
import banner from '../../assets/images/centres_banners/equal_opportunity_banner.jpg';
import equalOpportunityCellPdf from '../../assets/studentlife/cells/Equal Opportunity Cell.pdf';
import bridgingTheGap1 from '../../assets/images/gallery/bridging-the-gap-eoc/1.jpg';
import bridgingTheGap2 from '../../assets/images/gallery/bridging-the-gap-eoc/2.jpg';
import bridgingTheGap3 from '../../assets/images/gallery/bridging-the-gap-eoc/3.jpg';
import bridgingTheGap4 from '../../assets/images/gallery/bridging-the-gap-eoc/4.jpg';
import bridgingTheGap5 from '../../assets/images/gallery/bridging-the-gap-eoc/5.jpg';

const BRIDGING_THE_GAP_IMAGES = [bridgingTheGap1, bridgingTheGap2, bridgingTheGap3, bridgingTheGap4, bridgingTheGap5];

const EVENTS = [
  {
    name: 'Bridging the Gap: Empowerment Through Development Schemes',
    images: BRIDGING_THE_GAP_IMAGES,
    description: 'A session organised by the Equal Opportunity Cell to create awareness about government development schemes aimed at empowering students from marginalised and underrepresented communities.',
  },
];

const OBJECTIVES = [
  'Promoting and ensuring Diversity, Equity, and Inclusion among students, teaching and non-teaching staff, and all stakeholders across campus.',
  'Preventing perception of discrimination and cultivating healthy, supportive interpersonal relationships.',
  'Facilitating barrier-free procedures and formalities for admissions/registration for students belonging to marginalized and minority categories.',
  'Addressing grievances of students, teachers, and non-teaching staff belonging to minority and backward groups with fairness and empathy.',
];

const ROLES = [
  'Safeguard the interests of all students without any prejudice to their caste, creed, religion, language, ethnicity, gender, or disability.',
  'Establish comprehensive measures to prevent and prohibit any form of discrimination within campus premises.',
  'Ensure that no individual on campus is harassed, victimized, or treated differently in accessing any educational or recreational facilities.',
  'Ensure that students belonging to minority groups are provided with all statutory and university-permitted privileges and scholarships.',
  'Conduct awareness workshops, sensitization programs, and seminars promoting Diversity, Equity, and Inclusion (DEI).',
  'Ensure clear public notice of anti-discrimination policies, institutional guidelines, and grievance redressal workflows.',
  'Review and approve periodic cell activity reports and submit compliance records to institutional and university authorities.',
];

function HomeTab() {
  return (
    <>
      <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
        Diversity &bull; Equity &bull; Inclusion
      </span>
      <h2 className="mt-2">About the Cell</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body leading-relaxed">
        The <strong>Equal Opportunity Cell (EOC)</strong> at Christ College, Pune is established to oversee
        the effective implementation of policies and programmes for disadvantaged and minority groups, to provide
        guidance and counselling with respect to academic, financial, social and other matters, and to enhance
        the diversity and inclusive culture of the college community.
      </p>

      <CentreVisionMission
        vision="Equal Opportunity Cell (EOC) is established to aid and advise students belonging to marginalised sections including the Scheduled Castes (SC), Scheduled Tribes (ST), Other Backwards Classes (OBC), women and minority communities, etc."
        mission="The EOC acts as a counselling and guidance centre for students belonging to marginalised sections, providing support in academic, financial, and personal matters. The cell organises seminars, workshops, conferences, symposiums, and exhibitions from time to time to create awareness and empower students from marginalised and underrepresented communities educationally and culturally."
      />

      <div className="mt-10 rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
            <CompassIcon className="h-5 w-5" />
          </span>
          <h3 className="text-xl font-bold text-cc-text-heading">Key Objectives</h3>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {OBJECTIVES.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-cc-gray-100 bg-slate-50/70 p-4 text-sm text-cc-text-body transition-colors hover:border-cc-primary/30"
            >
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
            <UsersIcon className="h-5 w-5" />
          </span>
          <h3 className="text-xl font-bold text-cc-text-heading">Roles &amp; Responsibilities</h3>
        </div>

        <ul className="mt-6 flex flex-col gap-3">
          {ROLES.map((role, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-cc-gray-100 bg-slate-50/70 p-4 text-sm text-cc-text-body"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              <span>{role}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <h3 className="text-xl font-bold text-cc-text-heading">Policy Documents</h3>
        <p className="mt-1 text-xs text-cc-text-muted-light">
          Official guidelines, committee notifications, and regulatory framework.
        </p>

        <div className="mt-6">
          <a
            href={equalOpportunityCellPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex max-w-md items-center gap-4 rounded-xl border border-cc-gray-200 bg-white p-5 shadow-cc-xs transition-all hover:border-cc-primary hover:shadow-cc-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <div>
              <span className="block font-semibold text-cc-text-heading text-sm">
                Equal Opportunity Cell / Minority / SC-ST / OBC Cell
              </span>
              <span className="block text-xs text-cc-text-muted-light">View / Download PDF</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

function EventsTab() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {EVENTS.map((item) => (
        <div
          key={item.name}
          className="group relative overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-cc-md"
        >
          <div className="relative">
            <ImageCarousel images={item.images} alt={item.name} className="h-32 w-full" />
            <span className="absolute -bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-cc-bg-card bg-cc-primary text-white shadow-cc-sm">
              <UsersIcon className="h-4 w-4" />
            </span>
          </div>
          <div className="p-4 pt-6">
            <h4 className="text-sm font-semibold leading-snug break-words">{item.name}</h4>
            {item.description && (
              <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light line-clamp-4">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EqualOpportunityCell({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Equal Opportunity Cell"
      breadcrumbLabel="Equal Opportunity Cell"
      breadcrumbSection="Centres & Cells"
      description="The Equal Opportunity Cell at Christ College, Pune promotes diversity, equity and inclusion, safeguarding the interests of minority-group students, teaching and non-teaching staff on campus."
      bannerImage={banner}
      bannerAlt="Equal Opportunity Cell"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'About', render: () => <HomeTab /> },
        { key: 'events', label: 'Events', render: () => <EventsTab /> },
      ]}
    />
  );
}
