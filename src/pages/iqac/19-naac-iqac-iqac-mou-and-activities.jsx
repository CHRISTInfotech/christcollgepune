import { useState, useMemo } from 'react';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon, CalendarIcon } from '../../components/icons';

// Bulk-load all MoU PDF documents and Activity Report PDFs across all academic years (2018–19 through 2023–24)
const mouFiles = import.meta.glob('../../assets/iqac/mou-by-year/*/*.pdf', {
  eager: true,
  import: 'default',
});

const activityReports = import.meta.glob('../../assets/iqac/mou-by-year/*/reports/*.pdf', {
  eager: true,
  import: 'default',
});

// Rich metadata for identified activity reports extracted from official documents
const ACTIVITY_META = {
  // 2023-24
  'career-guidance-4-jan-2024': {
    name: 'Career Planning and Career Development',
    date: '4 January 2024',
    category: 'Career Guidance',
    department: 'Department of Management',
    partner: 'Habbinsons',
    coordinator: 'Ms. Deepa Sujith',
    description:
      'A comprehensive career guidance program equipping students with essential tools for career planning, resume writing, and interview techniques.',
  },
  'report-22-mar-2024': {
    name: 'Exploring Global Horizons — Charting Your Path Abroad',
    date: '22 March 2024',
    category: 'Student Exchange',
    department: 'Department of Management',
    resourcePerson: 'Ms. Vaishnavi Bhadouria',
    coordinator: 'Ms. Deepa Sujith & Ms. Anjali Joy',
    description:
      'An orientation session under the Student Exchange Program providing valuable insights into studying abroad and international academic pathways.',
  },
  'human-values-workshop-24-feb-2024': {
    name: 'Integrating Human Values in the Workplace',
    date: '24 February 2024',
    category: 'University Workshop',
    department: 'NSS & Department of Arts',
    partner: 'Savitribai Phule Pune University',
    description:
      'A university-level one-day workshop sponsored by SPPU, fostering ethical awareness, human dignity, and professional integrity in workplace environments.',
  },
  'international-webinar-12-jul-2023': {
    name: 'International Webinar — Talk Series 4',
    date: '12 July 2023',
    category: 'Webinar',
    department: 'Department of Arts',
    partner: 'De Paul College (Mysore) & Don Bosco College (Wayanad)',
    resourcePerson: 'Dr. Basilio Monteiro',
    coordinator: 'Dr. Priya Wahab',
    description:
      'Organised by the Department of Arts in collaboration with De Paul College and Don Bosco College, discussing global communication and cultural perspectives.',
  },
  'guest-lecture-12-feb-2024': {
    name: 'Guest Lecture — Career Options in Economics',
    date: '12 February 2024',
    category: 'Guest Lecture',
    department: 'Department of Arts',
    resourcePerson: 'Mr. Krishna Kanta Roy',
    coordinator: 'Mrs. Merin K. Varghese',
    description:
      'An expert session highlighting diverse career opportunities in economics across academia, finance, research, and corporate sectors.',
  },
  'ecomania-report-6-oct-2023': {
    name: "Ecomania '23",
    date: '6 October 2023',
    category: 'Department Fest',
    department: 'Department of Arts & Commerce',
    partner: 'CHRIST (Deemed to be University) Pune Lavasa Campus',
    coordinator: 'Mrs. Merin K. Varghese',
    description:
      'Economics departmental fest featuring Econ-Quest, Word Wizz Challenge, C-Suite Showdown, Econ-Cipher, and Product Innovation.',
  },
  'international-conference-12-feb-2024': {
    name: 'International Virtual Conference on Commerce, Trade and Sustainable Development',
    date: '12 February 2024',
    category: 'Conference',
    department: 'Department of Arts',
    partner: 'St. Aloysius College, Elthuruth',
    description:
      'An international conference bringing together global researchers and scholars to deliberate on commerce, trade, and sustainable development.',
  },
  'cipher-2-0-21-oct-2023': {
    name: 'Cipher 2.0',
    date: '21 October 2023',
    category: 'Technical Fest',
    department: 'Department of Computer Science',
    description:
      'Inter-collegiate technical fest and problem-solving competition exploring algorithms, cybersecurity, and emerging computational trends.',
  },

  // 2022-23
  'report-4': {
    name: 'Industrial Visit — CG Marketing Pvt. Ltd.',
    date: '8 May 2023',
    category: 'Industrial Visit',
    department: 'Department of Management',
    coordinator: 'Mr. Santosh Lal',
    description:
      'Practical industrial exposure for Second Year BBA (IB) students to observe warehouse operations, inbound logistics, and supply chain management.',
  },
  'report-8': {
    name: 'Live Software Project — M.Sc. Computer Science',
    date: '2 May 2023',
    category: 'Live Project',
    department: 'Department of Computer Science',
    coordinator: 'Mrs. Nilima Shingate',
    description:
      'Implementation and review of semester live software development industry projects for M.Sc. Computer Science students.',
  },
  'report-10': {
    name: 'Seminar — Quality Assurance and its Importance',
    date: '4 October 2022',
    category: 'Seminar',
    department: 'IQAC',
    resourcePerson: 'Dr. Jose John CMI',
    coordinator: 'Mrs. Deepa Sujith',
    description:
      'Comprehensive seminar examining institutional quality parameters, standards, and continuous enhancement mechanisms in higher education.',
  },
  'report-14': {
    name: 'Workshop & Industrial Visit',
    date: '5 May 2023',
    category: 'Workshop & Visit',
    department: 'Department of Science',
    resourcePerson: 'Ms. Nisha More & Ms. Pooja Khedkar',
    description:
      'Experiential science workshop and field visit designed to bridge theoretical concepts with real-world scientific applications.',
  },
  'report-18': {
    name: 'Seminar — Career as a Data Analyst',
    date: '7 January 2023',
    category: 'Seminar',
    department: 'Department of Computer Science',
    partner: "St. Xavier's College, Mumbai",
    resourcePerson: 'Mr. Roy Thomas',
    coordinator: 'Mrs. Nilima Shingate',
    description:
      'Interactive session exploring essential analytical tools, data storytelling, and career trajectories in data analytics.',
  },
  'report-20': {
    name: 'Training Program — Advanced Excel, PowerPoint & Word',
    date: '7 November 2022',
    category: 'Skill Training',
    partner: 'ExcelR (Everyday Learning Program)',
    description:
      'A 30-hour intensive skill enhancement program covering advanced spreadsheet modeling, professional presentations, and document design.',
  },

  // 2021-22
  'report-23': {
    name: 'E-Waste Collection & Awareness Drive',
    date: '23–28 May 2022',
    category: 'Environmental Initiative',
    department: 'National Service Scheme (NSS)',
    partner: 'Threco Recycling LLP',
    coordinator: 'Dr. Priya Wahab',
    description:
      'Community-wide e-waste collection drive educating students on digital electronic hazards and successfully recycling 318.9 kg of electronic waste.',
  },
  'report-24': {
    name: 'Alumni Portal Engagement and Maintenance',
    category: 'Institutional Support',
    partner: 'Almashines Technologies Pvt. Ltd.',
    description:
      'Collaborative technical initiative supporting alumni platform engagement, database management, and active community outreach.',
  },
  'report-26': {
    name: 'Business Quiz Competition — Rajagiri NBQ',
    date: '11 August 2021',
    category: 'Competition',
    department: 'Department of Commerce',
    partner: 'Rajagiri Business School, Kochi',
    resourcePerson: 'Mr. George Panakkal',
    coordinator: 'Mrs. Jiji Johnson',
    description:
      'Competitive offline quiz round testing corporate acumen, management awareness, and business problem-solving among Commerce students.',
  },

  // 2020-21
  'report-28': {
    name: 'Research Series-1: Responsibility & Accountability to Our Common Home',
    category: 'Research Monograph',
    partner: 'Written Words, Delhi',
    coordinator: 'Dr. Thomas Karimundackal SJ & Dr. Sony Chundattu CMI (Eds.)',
    description:
      'Academic research volume focusing on environmental ethics, sustainability, and moral accountability towards preserving ecological balance.',
  },
  'report-29': {
    name: 'Research Series-2: Ecological Crises and Responses',
    category: 'Research Monograph',
    partner: 'Written Words, Delhi',
    coordinator: 'Dr. Sony Chundattu CMI (Author)',
    description:
      'Scholarly monograph examining scientific and spiritual dimensions of environmental stewardship, planetary health, and sustainable coexistence.',
  },
  'report-30': {
    name: 'Research Series-3: Empowered Women Ennobled Humans',
    category: 'Research Monograph',
    partner: 'Written Words, Delhi',
    coordinator: 'Dr. Thomas Karimundackal SJ & Dr. Sony Chundattu CMI (Eds.)',
    description:
      'Research anthology addressing gender equity, female leadership, and progressive strategies for social empowerment.',
  },

  // 2019-20
  'report-32': {
    name: 'Workshop — Career Guidance and Skill Development',
    date: '7 February 2020',
    category: 'Workshop',
    department: 'Department of Commerce',
    partner: 'World Craft, Pune',
    resourcePerson: 'Dr. Bina Paul',
    coordinator: 'Mrs. Jiji Johnson',
    description:
      'Interactive skill building workshop focused on career choices, management competence, and strategic professional readiness.',
  },
  'report-33': {
    name: 'Seminar — Career Guidance Programme',
    date: '26 August 2019',
    category: 'Seminar',
    department: 'Department of Commerce',
    partner: 'Financial Planning Academy',
    resourcePerson: 'Mr. Tushar Kant Garg',
    coordinator: 'Mrs. Jiji Johnson',
    description:
      'Orientation seminar outlining career opportunities in financial planning, competitive examinations, and wealth management.',
  },
  'report-36': {
    name: 'Guest Lecture — Series and Sequences in Business Mathematics',
    date: '14 September 2019',
    category: 'Guest Lecture',
    department: 'Department of Commerce',
    partner: 'ACCA',
    resourcePerson: 'Mr. Sushil Sawant',
    coordinator: 'Mrs. Jiji Johnson',
    description:
      'Specialized quantitative session clarifying foundational concepts of arithmetic and geometric sequences for commerce applications.',
  },

  // 2018-19
  'report-38': {
    name: 'National Student Exchange Programme',
    date: 'Academic Year 2018–19',
    category: 'Student Exchange',
    partner: 'The Bhopal School of Social Sciences (BSSS), Bhopal',
    coordinator: 'Dr. Sony Chundattu CMI, Mrs. Leena Sanu, Dr. Priya Wahab, Mrs. Deepa Sujith',
    description:
      'Cross-cultural academic exchange hosting students and faculty from Bhopal, featuring communication workshops, heritage visits, and joint learning.',
  },
  'report-40': {
    name: 'Tally Computer-Based Accounting Course',
    date: '8 March 2019',
    category: 'Certification Course',
    department: 'Department of Commerce',
    partner: 'Mejorar Solutions',
    coordinator: 'Mrs. Jiji Johnson',
    description:
      'Comprehensive computer-based accounting course and certification in Tally ERP for commerce undergraduates.',
  },
  'report-41': {
    name: 'Seminar — Skills of Communication',
    date: '7 December 2018',
    category: 'Seminar',
    department: 'Department of Commerce',
    partner: 'ACCA',
    resourcePerson: 'Mr. Merin Varghese',
    coordinator: 'Mrs. Jiji Johnson',
    description:
      'Professional communication session for BBA, BBM, and B.Com students highlighting corporate dialogue, presentation, and workplace articulation.',
  },
  'report-42': {
    name: 'Business Quiz Competition — Rajagiri NBQ',
    date: '11 August 2018',
    category: 'Competition',
    department: 'Department of Commerce',
    partner: 'Rajagiri Business School, Kochi',
    resourcePerson: 'Mr. George Panakkal',
    coordinator: 'Mrs. Jiji Johnson',
    description:
      'Departmental competition exposing students to corporate current affairs and business problem-solving.',
  },
};

// Helper function to get the imported file URL for an MoU
function getMouFile(yearFolder, filename) {
  const targetKey = `../../assets/iqac/mou-by-year/${yearFolder}/${filename}`;
  return mouFiles[targetKey] || '';
}

// Master configuration for all academic years, including all 34 MoUs from 2018 to 2024
const YEARS = [
  {
    year: '2023–24',
    folder: '2023-24',
    documents: [
      { name: 'Poona College of Arts, Science and Commerce', filename: 'poona-college.pdf' },
      { name: 'Sagitech Technologies', filename: 'sagitech.pdf' },
      { name: 'Sacred Heart College (Autonomous)', filename: 'sacred-heart-college.pdf' },
      { name: 'St. Berchmans College (Autonomous)', filename: 'st-berchmans-college.pdf' },
      { name: 'Hematite Infotech', filename: 'hematite.pdf' },
      { name: 'Data Science Lab', filename: 'data-science-lab.pdf' },
      { name: 'Rubicon Skill Development Pvt. Ltd.', filename: 'rubicon.pdf' },
    ],
  },
  {
    year: '2022–23',
    folder: '2022-23',
    documents: [
      { name: 'Sagitec Solutions', filename: 'sagitech.pdf' },
      { name: 'Poona College of Arts, Science and Commerce', filename: 'poona-college.pdf' },
      { name: 'Shri Swami Samarth Enterprises', filename: 'shri-swami-samarth.pdf' },
      { name: 'CYDA (Centre for Youth Development & Activities)', filename: 'cyda.pdf' },
      { name: 'St. Francis De Sales College', filename: 'st-francis-de-sales.pdf' },
      { name: 'St. Berchmans College', filename: 'st-berchmans.pdf' },
      { name: 'Foresight', filename: 'foresight.pdf' },
      { name: 'ExcelR Solutions', filename: 'exceir-solutions.pdf' },
      { name: 'Rubicon Skill Development', filename: 'rubicon-skill.pdf' },
      { name: 'Sacred Heart College', filename: 'sacred-heart-college.pdf' },
      { name: 'Hematite Infotech', filename: 'hematite.pdf' },
      { name: 'Data Science Lab', filename: 'data-science.pdf' },
    ],
  },
  {
    year: '2021–22',
    folder: '2021-22',
    documents: [
      { name: 'Rajagiri Business School (RBS), Kochi', filename: 'rbs-kochi.pdf' },
      { name: 'Threco Recycling LLP', filename: 'threco-recycling.pdf' },
      { name: 'Almashines Technologies Pvt. Ltd.', filename: 'almashines.pdf' },
    ],
  },
  {
    year: '2020–21',
    folder: '2020-21',
    documents: [
      { name: 'Written Words — Research Series 01', filename: 'written-words-01.pdf' },
      { name: 'Written Words — Research Series 02', filename: 'written-words-02.pdf' },
      { name: 'Written Words — Research Series 03', filename: 'written-words-03.pdf' },
    ],
  },
  {
    year: '2019–20',
    folder: '2019-20',
    documents: [
      { name: 'DATRI Blood Stem Cell Donors Registry', filename: 'datri-blood.pdf' },
      { name: 'Association of Chartered Certified Accountants (ACCA)', filename: 'acca.pdf' },
      { name: 'Financial Planning Academy', filename: 'financial-plan.pdf' },
      { name: 'ISD Project', filename: 'isd-project.pdf' },
      { name: 'International Skill Development Corporation (ISDC)', filename: 'isdc.pdf' },
      { name: 'ISDC Project', filename: 'isdc-project.pdf' },
      { name: 'Word Craft / World Craft, Pune', filename: 'word-craft.pdf' },
    ],
  },
  {
    year: '2018–19',
    folder: '2018-19',
    documents: [
      { name: 'Association of Chartered Certified Accountants (ACCA)', filename: 'acca.pdf' },
      { name: 'The Bhopal School of Social Sciences (BSSS)', filename: 'bhopal-school.pdf' },
    ],
  },
];

function activitiesForYear(yearFolder) {
  return Object.entries(activityReports)
    .filter(([path]) => path.includes(`/mou-by-year/${yearFolder}/reports/`))
    .map(([path, file], index) => {
      const filename = path.split('/').pop().replace('.pdf', '');
      const meta = ACTIVITY_META[filename];
      const numMatch = filename.match(/^report-(\d+)$/);
      return {
        id: filename,
        name: meta?.name || (numMatch ? `Activity Report #${numMatch[1]}` : 'Activity Report'),
        date: meta?.date || undefined,
        category: meta?.category || undefined,
        department: meta?.department || undefined,
        partner: meta?.partner || undefined,
        coordinator: meta?.coordinator || undefined,
        resourcePerson: meta?.resourcePerson || undefined,
        description: meta?.description || undefined,
        file,
        sortKey: numMatch ? Number(numMatch[1]) : 1000 + index,
      };
    })
    .sort((a, b) => a.sortKey - b.sortKey);
}

function DocCard({ name, file }) {
  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cc-primary hover:shadow-cc-md"
    >
      <div className="flex items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary transition-colors group-hover:bg-cc-primary group-hover:text-white">
          <DownloadIcon width={20} height={20} />
        </span>
        <div>
          <span className="block font-semibold text-cc-text-heading transition-colors group-hover:text-cc-primary">
            {name}
          </span>
          <span className="block text-xs font-medium text-cc-text-muted-light">Official MoU Document • PDF</span>
        </div>
      </div>
      <span className="shrink-0 text-xs font-semibold text-cc-primary opacity-0 transition-opacity group-hover:opacity-100">
        View &rarr;
      </span>
    </a>
  );
}

function ActivityCard({ name, date, category, department, partner, coordinator, resourcePerson, description, file }) {
  return (
    <div className="flex flex-col justify-between rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cc-primary/50 hover:shadow-cc-md">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          {category && (
            <span className="inline-block rounded-full bg-cc-primary/10 px-2.5 py-0.5 text-xs font-semibold text-cc-primary">
              {category}
            </span>
          )}
          {department && (
            <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
              {department}
            </span>
          )}
        </div>

        <h4 className="mt-2.5 text-base font-semibold leading-snug text-cc-text-heading">{name}</h4>

        {date && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-cc-primary">
            <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
            {date}
          </p>
        )}

        {partner && (
          <p className="mt-2 text-xs font-medium text-slate-600">
            <span className="font-semibold text-slate-800">Partner:</span> {partner}
          </p>
        )}

        {resourcePerson && (
          <p className="mt-1 text-xs text-slate-600">
            <span className="font-semibold text-slate-800">Resource Person:</span> {resourcePerson}
          </p>
        )}

        {coordinator && (
          <p className="mt-1 text-xs text-slate-600">
            <span className="font-semibold text-slate-800">Coordinator:</span> {coordinator}
          </p>
        )}

        {description && <p className="mt-2.5 text-sm leading-relaxed text-cc-text-muted-light">{description}</p>}
      </div>

      <div className="mt-4 pt-3 border-t border-cc-gray-100">
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cc-primary transition-colors hover:text-cc-primary-dark hover:underline"
        >
          <DownloadIcon width={14} height={14} />
          View / Download Report PDF
        </a>
      </div>
    </div>
  );
}

export default function MouAndActivities() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState('all'); // 'all', 'mous', 'activities'

  // Pre-calculate all data per year with resolved files
  const yearsData = useMemo(() => {
    return YEARS.map((group) => {
      const documents = group.documents
        .map((doc) => ({
          name: doc.name,
          file: getMouFile(group.folder, doc.filename),
        }))
        .filter((doc) => Boolean(doc.file));

      const activities = activitiesForYear(group.folder);

      return {
        ...group,
        documents,
        activities,
      };
    });
  }, []);

  // Summary counts
  const totalMous = useMemo(() => yearsData.reduce((acc, y) => acc + y.documents.length, 0), [yearsData]);
  const totalActivities = useMemo(() => yearsData.reduce((acc, y) => acc + y.activities.length, 0), [yearsData]);

  // Filtered data based on search, active year tab, and type filter
  const filteredYearsData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return yearsData
      .filter((group) => selectedYear === 'all' || group.folder === selectedYear)
      .map((group) => {
        let filteredDocs = group.documents;
        let filteredActs = group.activities;

        if (activeType === 'activities') {
          filteredDocs = [];
        } else if (activeType === 'mous') {
          filteredActs = [];
        }

        if (query) {
          filteredDocs = filteredDocs.filter((doc) => doc.name.toLowerCase().includes(query));
          filteredActs = filteredActs.filter(
            (act) =>
              act.name.toLowerCase().includes(query) ||
              (act.date && act.date.toLowerCase().includes(query)) ||
              (act.category && act.category.toLowerCase().includes(query)) ||
              (act.department && act.department.toLowerCase().includes(query)) ||
              (act.partner && act.partner.toLowerCase().includes(query)) ||
              (act.coordinator && act.coordinator.toLowerCase().includes(query)) ||
              (act.resourcePerson && act.resourcePerson.toLowerCase().includes(query)) ||
              (act.description && act.description.toLowerCase().includes(query))
          );
        }

        return {
          ...group,
          documents: filteredDocs,
          activities: filteredActs,
        };
      })
      .filter((group) => group.documents.length > 0 || group.activities.length > 0);
  }, [yearsData, selectedYear, searchQuery, activeType]);

  return (
    <>
      <Seo
        title="MoU and Activities"
        description="Memorandums of Understanding (MoUs) signed by Christ College, Pune with academic and industry partners from 2018 to 2024, and collaborative activity reports conducted under them."
      />
      <PageHeader title="MoU and Activities" breadcrumbs={[{ label: 'IQAC' }, { label: 'MoU and Activities' }]} />

      <section className="mx-auto max-w-[1240px] px-6 py-14">
        {/* Intro Section */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-cc-text-heading sm:text-3xl">
              Collaborations, MoUs & Activity Reports
            </h2>
            <p className="mt-3 text-cc-text-body leading-relaxed">
              Christ College, Pune enters into Memorandums of Understanding (MoUs) with esteemed academic
              institutions, industry leaders, and research organizations to foster student exchange programs,
              internships, joint research initiatives, guest lectures, and experiential workshops. All MoUs signed from
              2018–19 through 2023–24 and the comprehensive activity reports conducted under these collaborations are
              detailed below.
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 gap-3 lg:col-span-4">
            <div className="rounded-cc-lg border border-cc-primary/20 bg-gradient-to-br from-cc-primary/5 to-transparent p-4 text-center">
              <span className="block text-3xl font-extrabold text-cc-primary">{totalMous}</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-cc-text-heading">
                Signed MoUs
              </span>
            </div>
            <div className="rounded-cc-lg border border-cc-primary/20 bg-gradient-to-br from-cc-primary/5 to-transparent p-4 text-center">
              <span className="block text-3xl font-extrabold text-cc-primary">{totalActivities}</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-cc-text-heading">
                Activity Reports
              </span>
            </div>
            <div className="rounded-cc-lg border border-slate-200 bg-cc-bg-surface p-3.5 text-center">
              <span className="block text-2xl font-bold text-slate-800">6</span>
              <span className="mt-0.5 block text-xs text-slate-500">Academic Years</span>
            </div>
            <div className="rounded-cc-lg border border-slate-200 bg-cc-bg-surface p-3.5 text-center">
              <span className="block text-2xl font-bold text-slate-800">100%</span>
              <span className="mt-0.5 block text-xs text-slate-500">Documented Reports</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-10 rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Year Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedYear('all')}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedYear === 'all'
                    ? 'bg-cc-primary text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Years ({yearsData.length})
              </button>
              {yearsData.map((y) => (
                <button
                  key={y.folder}
                  type="button"
                  onClick={() => setSelectedYear(y.folder)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    selectedYear === y.folder
                      ? 'bg-cc-primary text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {y.year}
                </button>
              ))}
            </div>

            {/* Content Type Filter */}
            <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => setActiveType('all')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  activeType === 'all' ? 'bg-white font-semibold text-cc-primary shadow-xs' : 'text-slate-600'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setActiveType('mous')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  activeType === 'mous' ? 'bg-white font-semibold text-cc-primary shadow-xs' : 'text-slate-600'
                }`}
              >
                MoUs Only
              </button>
              <button
                type="button"
                onClick={() => setActiveType('activities')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  activeType === 'activities' ? 'bg-white font-semibold text-cc-primary shadow-xs' : 'text-slate-600'
                }`}
              >
                Activities Only
              </button>
            </div>
          </div>

          {/* Search Field */}
          <div className="mt-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, partner institution, department, coordinator, or keyword..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-cc-text-heading placeholder-slate-400 transition-colors focus:border-cc-primary focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Results List by Year */}
        <div className="mt-12 flex flex-col gap-14">
          {filteredYearsData.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">
              <p className="text-base font-semibold text-slate-700">No MoUs or activities match your criteria.</p>
              <p className="mt-1 text-xs text-slate-500">Try adjusting your search query or selecting another year.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedYear('all');
                  setSearchQuery('');
                  setActiveType('all');
                }}
                className="mt-4 rounded-full bg-cc-primary px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-cc-primary-dark"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredYearsData.map((group) => (
              <div key={group.year} className="scroll-mt-24" id={`year-${group.folder}`}>
                {/* Year Header Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cc-gray-200 pb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-cc-text-heading sm:text-2xl">Academic Year {group.year}</h3>
                    <span className="rounded-full bg-cc-primary/10 px-3 py-0.5 text-xs font-semibold text-cc-primary">
                      {group.documents.length} MoUs • {group.activities.length} Activities
                    </span>
                  </div>
                </div>

                {/* MoUs Section */}
                {group.documents.length > 0 && (
                  <div className="mt-6">
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-600">
                      <span>Memorandums of Understanding (MoUs)</span>
                      <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        {group.documents.length}
                      </span>
                    </h4>
                    <div className="mt-3.5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {group.documents.map((doc) => (
                        <DocCard key={doc.name} name={doc.name} file={doc.file} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Activity Reports Section */}
                {group.activities.length > 0 && (
                  <div className="mt-8">
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-600">
                      <span>Collaborative Activity Reports</span>
                      <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        {group.activities.length}
                      </span>
                    </h4>
                    <div className="mt-3.5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {group.activities.map((activity) => (
                        <ActivityCard key={activity.id} {...activity} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
