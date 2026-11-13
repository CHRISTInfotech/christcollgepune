import TabbedContentPage from '../../components/TabbedContentPage';
import ImageCarousel from '../../components/ImageCarousel';
import CentreVisionMission from '../../components/CentreVisionMission';
import { AwardIcon, CompassIcon, UsersIcon } from '../../components/icons';
import teamPhoto from '../../assets/images/7-centres-and-cells-scholarship-support-cell/team.jpg';
import achieversSpotlight1 from '../../assets/images/gallery/achievers-spotlight-2026/1.jpg';
import achieversSpotlight2 from '../../assets/images/gallery/achievers-spotlight-2026/2.jpg';
import achieversSpotlight3 from '../../assets/images/gallery/achievers-spotlight-2026/3.jpg';
import achieversSpotlight4 from '../../assets/images/gallery/achievers-spotlight-2026/4.jpg';
import achieversSpotlight5 from '../../assets/images/gallery/achievers-spotlight-2026/5.jpg';
import achieversSpotlight6 from '../../assets/images/gallery/achievers-spotlight-2026/6.jpg';
import awarenessSession1 from '../../assets/images/gallery/scholarship-awareness-session/1.jpg';

const ACHIEVERS_SPOTLIGHT_IMAGES = [achieversSpotlight1, achieversSpotlight2, achieversSpotlight3, achieversSpotlight4, achieversSpotlight5, achieversSpotlight6];
const AWARENESS_SESSION_IMAGES = [awarenessSession1];

const EVENTS = [
  {
    name: 'Achievers Spotlight 2026',
    images: ACHIEVERS_SPOTLIGHT_IMAGES,
    description: 'A special initiative recognising students for their achievements in academics, attendance, research, innovation, entrepreneurship, cultural activities, and sports — organised to encourage academic excellence and holistic student development.',
  },
  {
    name: 'Scholarship Awareness Session',
    images: AWARENESS_SESSION_IMAGES,
    description: 'An awareness session conducted for students covering the National Scholarship Portal, MahaDBT, Savitribai Phule Pune University, PMC Scholarships and other financial assistance schemes, guiding them through eligibility and application procedures.',
  },
];

const SCHEMES = [
  'Government of India scholarship schemes',
  'Government of Maharashtra scholarship schemes',
  'AICTE scholarship schemes',
  'Savitribai Phule Pune University (SPPU) scholarships',
  'MahaDBT',
  'PMC (Pune Municipal Corporation) Scholarships',
  'National Scholarship Portal',
  'Institutional scholarships and financial support for deserving and meritorious students',
];

const TEAM = [
  { name: 'Ms Angeline Peter', role: 'Coordinator' },
  { name: 'Mrs Preeti Brahmane', role: 'Member' },
  { name: 'Mrs Rasila Walhekar', role: 'Member' },
  { name: 'Mrs Seema Mane', role: 'Member' },
  { name: 'Mr Sudhir Sawant', role: 'Member' },
];

function HomeTab() {
  return (
    <>
      <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
        Scholarships &bull; Financial Assistance &bull; Student Support
      </span>
      <h2 className="mt-2">About the Cell</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body leading-relaxed">
        The <strong>Scholarship Support Cell</strong> of Christ College Pune has been consistently
        working towards creating awareness about scholarships, financial assistance schemes, and
        student support initiatives, with the objective of promoting inclusive education and
        empowering deserving students. The team actively guides students through scholarship
        application procedures, assists in document verification, and ensures the smooth
        implementation of government and institutional scholarship schemes.
      </p>

      <CentreVisionMission
        vision="To promote inclusive education by ensuring equal access to scholarship opportunities and empowering students to achieve academic excellence."
        mission="To create scholarship awareness, provide guidance and assistance in accessing financial aid, and support deserving and meritorious students through student-centric initiatives that encourage holistic development."
      />

      <div className="mt-10 rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
            <AwardIcon className="h-5 w-5" />
          </span>
          <h3 className="text-xl font-bold text-cc-text-heading">Scholarship Schemes Covered</h3>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {SCHEMES.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-cc-gray-100 bg-slate-50/70 p-4 text-sm text-cc-text-body transition-colors hover:border-cc-primary/30"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
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
          <h3 className="text-xl font-bold text-cc-text-heading">The Team</h3>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <img
            src={teamPhoto}
            alt="Scholarship Support Cell team members at Christ College Pune"
            className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-xs"
          />
          <ul className="flex flex-col gap-3">
            {TEAM.map((member) => (
              <li
                key={member.name}
                className="flex items-center justify-between rounded-xl border border-cc-gray-100 bg-slate-50/70 p-4 text-sm"
              >
                <span className="font-semibold text-cc-text-heading">{member.name}</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-cc-primary">{member.role}</span>
              </li>
            ))}
          </ul>
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
              <AwardIcon className="h-4 w-4" />
            </span>
          </div>
          <div className="p-4 pt-6">
            <h4 className="text-sm font-semibold leading-snug break-words">{item.name}</h4>
            <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light line-clamp-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ScholarshipSupportCell({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Scholarship Support Cell"
      breadcrumbLabel="Scholarship Support Cell"
      breadcrumbSection="Centres & Cells"
      description="The Scholarship Support Cell at Christ College, Pune creates awareness about scholarships and financial assistance schemes, guiding students through application procedures and document verification."
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'About', render: () => <HomeTab /> },
        { key: 'events', label: 'Events', render: () => <EventsTab /> },
      ]}
    />
  );
}
