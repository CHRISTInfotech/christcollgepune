import TabbedContentPage from '../../components/TabbedContentPage';
import { UsersIcon, AwardIcon, CompassIcon, BookIcon, BuildingIcon, EnvelopeIcon, PhoneIcon, CheckCircleIcon } from '../../components/icons';
import cpcgBanner from '../../assets/home/cpcg.jpg';

const PILLARS = [
  {
    icon: UsersIcon,
    title: 'Career Facilitation',
    description:
      'Acts as a vital bridge between rigorous academic education and the dynamic corporate world, preparing students for impactful careers.',
  },
  {
    icon: AwardIcon,
    title: 'Industry Readiness',
    description:
      'Conducts specialized workshops, mock interviews, aptitude bootcamps, and soft-skills training to maximize corporate employability.',
  },
  {
    icon: CompassIcon,
    title: 'Diverse Career Pathways',
    description:
      'Facilitates high-value internships, campus recruitment drives, industry mentorship, and guidance for premier postgraduate admissions.',
  },
];

const OBJECTIVES = [
  'To equip students with contemporary industry-relevant skills, professional etiquette, and analytical competencies.',
  'To bridge the gap between academic theory and practical corporate expectations through regular guest lectures and industrial visits.',
  'To conduct rigorous pre-placement training including aptitude testing, resume writing, group discussions, and mock interviews.',
  'To foster enduring partnerships with leading multinational corporations, financial institutions, and IT enterprises.',
  'To ensure fair, transparent, and merit-based recruitment opportunities for all eligible final-year students.',
  'To offer personalized career counselling and guidance for competitive examinations and global higher education.',
];

const PLACEMENT_PROCESS = [
  {
    step: '1',
    title: 'Registration & Orientation',
    desc: 'Students register with CPCG at the start of the academic year and attend the placement orientation detailing policies, expectations, and industry trends.',
  },
  {
    step: '2',
    title: 'Pre-Placement Training',
    desc: 'Intensive training covering quantitative aptitude, logical reasoning, verbal ability, domain-specific technical skills, and behavioral interview coaching.',
  },
  {
    step: '3',
    title: 'Recruitment Drives',
    desc: 'On-campus and virtual hiring drives featuring pre-placement presentations, screening assessments, technical interviews, and HR discussions.',
  },
  {
    step: '4',
    title: 'Offer & Onboarding',
    desc: 'Issuance of formal offer letters, post-selection debriefing, and transition support for smooth onboarding into corporate roles.',
  },
];

const PROMINENT_RECRUITERS = [
  'Tata Consultancy Services (TCS)',
  'Infosys Technologies',
  'Barclays',
  'ICICI Bank',
  'Mphasis',
  'WNS Global Services',
  'CDK Global',
  'TIAA',
  'Cognizant',
  'Wipro',
  'Tech Mahindra',
  'Capgemini',
];

const CPCG_TEAM = [
  { name: 'Mr. Bitto Benny', role: 'CPCG Coordinator' },
  { name: 'Mr. Siju Mathew', role: 'Placement Team Member' },
  { name: 'Mr. Biju Sebastian', role: 'Placement Team Member' },
  { name: 'Ms. Rasila Walhekar', role: 'Placement Team Member' },
  { name: 'Ms. Priyadarshini Yadav', role: 'Placement Team Member' },
];

function AboutTab() {
  return (
    <>
      <div className="max-w-3xl">
        <h2>Centre for Placement &amp; Career Guidance (CPCG)</h2>
        <p className="mt-4 text-cc-text-body">
          The Centre for Placement and Career Guidance (CPCG) at Christ College Pune serves as the central
          department dedicated to steering students toward fulfilling career paths. CPCG believes in nurturing
          the potential within each student, transforming their academic knowledge into professional excellence.
        </p>
        <p className="mt-4 text-cc-text-body">
          Through continuous industry collaboration, comprehensive skill development bootcamps, and individual
          mentoring, CPCG ensures that our graduates enter the corporate world as skilled, ethical, and adaptable
          professionals ready to make meaningful contributions.
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

      <div className="mt-10 max-w-3xl">
        <h2>Key Objectives</h2>
        <ul className="mt-4 flex flex-col gap-2.5">
          {OBJECTIVES.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-cc-text-body">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-cc-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function ProcessTab() {
  return (
    <div className="max-w-3xl">
      <h2>Placement Process &amp; Policy</h2>
      <p className="mt-4 text-cc-text-body">
        CPCG follows a structured, transparent, and student-centric placement protocol designed to provide
        equal opportunities to all eligible candidates across commerce, science, arts, and management streams.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {PLACEMENT_PROCESS.map((p) => (
          <div key={p.step} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cc-primary text-sm font-bold text-cc-white">
              {p.step}
            </span>
            <h3 className="mt-4 text-base font-bold text-cc-text-heading">{p.title}</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12">Eligibility Guidelines</h2>
      <div className="mt-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
        <ul className="flex flex-col gap-2 text-sm text-cc-text-body">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span>Open to all final-year undergraduate and postgraduate students with satisfactory academic standing.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span>Participation in mandatory pre-placement training modules and attendance requirements.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span>Strict adherence to the college's non-discrimination policy and professional code of conduct.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function RecruitersTab() {
  return (
    <div>
      <div className="max-w-3xl">
        <h2>Prominent Corporate Partners &amp; Recruiters</h2>
        <p className="mt-4 text-cc-text-body">
          Christ College Pune has built enduring recruitment associations with leading multinational corporations,
          technology leaders, banking institutions, and consulting firms across India.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {PROMINENT_RECRUITERS.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 text-center shadow-cc-sm transition-all duration-[350ms] hover:border-cc-primary hover:shadow-cc"
          >
            <span className="text-sm font-semibold text-cc-text-heading">{name}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl rounded-cc-lg border border-cc-primary/20 bg-cc-primary/5 p-6">
        <h3 className="text-base font-bold text-cc-primary">Industry Exposure &amp; Internships</h3>
        <p className="mt-2 text-sm leading-relaxed text-cc-text-body">
          Along with final placements, CPCG actively coordinates summer and semester internships, giving students
          valuable exposure to real-world corporate dynamics, project deliverables, and live problem-solving.
        </p>
      </div>
    </div>
  );
}

function TeamTab() {
  return (
    <div className="max-w-3xl">
      <h2>CPCG Team &amp; Contact</h2>
      <p className="mt-4 text-cc-text-body">
        The Placement Cell is managed by dedicated faculty coordinators and student placement representatives
        who assist students at every stage of the recruitment journey.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {CPCG_TEAM.map((member) => (
          <div key={member.name} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
            <h3 className="text-base font-bold text-cc-text-heading">{member.name}</h3>
            <p className="mt-1 text-sm text-cc-primary font-medium">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
        <h3 className="text-base font-bold text-cc-text-heading">Placement Office Contact</h3>
        <div className="mt-4 flex flex-col gap-3 text-sm text-cc-text-body">
          <p className="flex items-center gap-2">
            <BuildingIcon className="h-5 w-5 text-cc-primary shrink-0" />
            <span>Centre for Placement and Career Guidance, Christ College Pune</span>
          </p>
          <p className="flex items-center gap-2">
            <EnvelopeIcon className="h-5 w-5 text-cc-primary shrink-0" />
            <span>placement@christcollegepune.org</span>
          </p>
          <p className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-cc-primary shrink-0" />
            <span>+91 7447727242 / 7447727243</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PlacementAndCareerGuidance({ initialTab = 'about' }) {
  return (
    <TabbedContentPage
      pageTitle="Placement &amp; Career Guidance"
      description="The Centre for Placement and Career Guidance (CPCG) at Christ College Pune bridges academic learning and the corporate world through skill workshops, internships, and campus recruitment drives."
      bannerImage={cpcgBanner}
      bannerAlt="Placement and Career Guidance sessions at Christ College Pune"
      initialTab={initialTab}
      tabs={[
        { key: 'about', label: 'About CPCG', render: () => <AboutTab /> },
        { key: 'process', label: 'Placement Process', render: () => <ProcessTab /> },
        { key: 'recruiters', label: 'Recruiters & Partners', render: () => <RecruitersTab /> },
        { key: 'team', label: 'Team & Contact', render: () => <TeamTab /> },
      ]}
    />
  );
}
