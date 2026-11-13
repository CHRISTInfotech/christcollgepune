import TabbedContentPage from '../../components/TabbedContentPage';
import CentreVisionMission from '../../components/CentreVisionMission';
import { DownloadIcon } from '../../components/icons';
import researchBanner from '../../assets/images/7-centres-and-cells-research-cell/research-banner.png';
import membersPdf from '../../assets/studentlife/cells/Researh cell.pdf';
import printJournalPdf from '../../assets/studentlife/cells/Content Page Of the print journal publicatiobns.pdf';

const WORKSHOPS = [
  { name: 'Sharpening Research Writing Skills', date: '10 October 2022' },
  { name: 'Research Writing Skills: Gimmicks of Problem Identification', date: '20 October 2022' },
  { name: 'Mastering the Art of Research & Publication', date: '8 April 2023' },
];

const AVISHKAR_2022_23 = [
  'College Level — AVISHKAR EXPO 2022: an Innovative Research Project Competition for students, held on 21 September 2022. 56 students participated in the exhibition.',
  'Zonal Level — AVISHKAR 2022: an Inter-University Research Project Competition held on 7 & 8 December 2022 at Pimpri Chinchwad College of Engineering, Pune and D Y Patil College of Arts, Commerce & Science, Pune. 10 students represented the college.',
  'University Level — AVISHKAR 2022: an Inter-University Research Project Competition; 1 student was selected and represented the college on 13 December 2022, held at Krida Sankul, Savitribai Phule Pune University.',
];

const AVISHKAR_2023_24 = [
  'College Level — AVISHKAR EXPO 2023: an Innovative Research Project Competition for students, organized by the Research Cell on campus on 25 September 2023. 92 students participated in the exhibition.',
  'Zonal Level — AVISHKAR 2023: an Inter-Collegiate Research Project Competition where 27 students represented the college on 27 October 2023, held at AISSMS College of Engineering Pune and Abasaheb Garware Mahavidyalaya, Akurdi, Nigdi Pradhikaran, Pune.',
];

function DocumentCard({ name, file }) {
  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
        <DownloadIcon width={20} height={20} />
      </span>
      <span>
        <span className="block font-semibold text-cc-text-heading">{name}</span>
        <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
      </span>
    </a>
  );
}

function HomeTab() {
  return (
    <>
      <h2>About Us</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The Research Cell of Christ College Pune is committed to fostering a vibrant culture of
        research, innovation and academic inquiry among faculty members and students. It strives
        to create an intellectually stimulating environment that encourages systematic
        investigation, interdisciplinary collaboration and the generation of knowledge.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The Research Cell facilitates research activities by promoting scholarly publications,
        organising research-oriented workshops, seminars, conferences and faculty development
        programmes. It also encourages faculty and students to undertake research projects,
        pursue doctoral studies, participate in academic collaborations and disseminate research
        outcomes through reputed journals and conferences.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        Through its initiatives, the Research Cell seeks to strengthen research competencies,
        promote ethical research practices and bridge the gap between academic knowledge and
        real-world challenges. It aspires to position Christ College Pune as an institution that
        values inquiry, innovation and knowledge creation as integral components of higher
        education.
      </p>

      <CentreVisionMission
        vision="To establish Christ College Pune as a centre of academic excellence and research innovation by nurturing a strong research culture that promotes intellectual curiosity, interdisciplinary collaboration, ethical inquiry and socially relevant knowledge creation."
        mission="The Research Cell of Christ College Pune aims to empower faculty members and students to pursue meaningful research by providing an enabling academic environment, strengthening research capabilities, facilitating scholarly collaborations and promoting ethical research practices. It seeks to encourage knowledge creation and the application of research to address contemporary challenges and societal needs."
      />

      <h2 className="mt-10">Members</h2>
      <DocumentCard name="Research Cell Members" file={membersPdf} />
    </>
  );
}

function ResearchActivitiesTab() {
  return (
    <div className="max-w-3xl">
      <h2>Research Activities</h2>

      <h3 className="mt-8 text-base uppercase tracking-wide text-cc-primary">
        Faculty Development Program
      </h3>
      <p className="mt-3 text-cc-text-body">
        &lsquo;Dodge the Desk Reject: Prowess of Research Writing&rsquo; — 27th June &ndash; 2nd
        July, 2022, at Christ College Pune.
      </p>

      <h3 className="mt-8 text-base uppercase tracking-wide text-cc-primary">
        Research Workshops for Faculty
      </h3>
      <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
        {WORKSHOPS.map((item) => (
          <div key={item.name} className="py-3 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <dt className="font-medium text-cc-text-heading">{item.name}</dt>
              <span className="text-xs uppercase tracking-wide text-cc-text-muted-light">{item.date}</span>
            </div>
          </div>
        ))}
      </dl>

      <h3 className="mt-8 text-base uppercase tracking-wide text-cc-primary">
        AVISHKAR — Research Project Competition
      </h3>

      <h4 className="mt-4 text-sm font-semibold text-cc-text-heading">Academic Year 2022&ndash;23</h4>
      <ul className="mt-3 flex flex-col gap-2">
        {AVISHKAR_2022_23.map((item) => (
          <li key={item} className="flex items-start gap-2 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <h4 className="mt-6 text-sm font-semibold text-cc-text-heading">Academic Year 2023&ndash;24</h4>
      <ul className="mt-3 flex flex-col gap-2">
        {AVISHKAR_2023_24.map((item) => (
          <li key={item} className="flex items-start gap-2 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PublicationsTab() {
  return (
    <div className="max-w-3xl">
      <h2>Publications</h2>
      <DocumentCard name="Print Journal" file={printJournalPdf} />
    </div>
  );
}

const EVENTS = [
  {
    name: 'Workshop on Research Writing: Introduction and Making a Conceptual Map',
    description: 'A workshop designed to familiarise participants with the fundamentals of academic research writing and the process of developing a conceptual map. The session covered details on using minor and major premise to develop the introduction chapter.',
  },
  {
    name: 'Case Writing Workshop: Developing Effective Teaching Cases',
    description: 'A workshop aimed at developing participants’ skills in writing effective teaching cases. It introduced the principles of case development, emphasising real-world business situations, problem identification, narrative development and the use of cases as an experiential teaching and learning tool.',
  },
  {
    name: 'Research Foundation and the Present Role of Libraries',
    description: 'An insightful session highlighting the importance of research foundations and the evolving role of libraries in academic research. It explored how modern libraries support researchers through digital resources, research databases, information access and scholarly knowledge dissemination.',
  },
  {
    name: 'International Conference on New Management Trends, Changes & Business Leadership Challenges in the Present Global Economic Scenario',
    date: '24–25 February 2023',
    link: 'https://drive.google.com/drive/u/2/folders/17TQNw8rjHw9hb-3obN9LPrztcDWe0jks',
  },
  {
    name: 'National Level Workshop on Data Analysis and Ethics in Research',
    link: 'https://drive.google.com/drive/folders/1Y9D__EGi8oXtbFUoUsJAIRCf3hEXiTYK',
  },
  {
    name: 'Seminar on Digital Tools for Research',
    link: 'https://drive.google.com/drive/u/2/folders/1hoZM3MzvaPWds43poRTOjJxsPXL8uZw8',
  },
  {
    name: 'Workshop on Research Paradigms',
    link: 'https://drive.google.com/drive/u/2/folders/1RFHlgM0kHEdvuA_05IOC9fSc2RnrrHxq',
  },
  {
    name: 'Workshop on Research Methodology: Concepts and Applications',
    link: 'https://drive.google.com/drive/u/0/folders/1bqAOy9R12SSv7Qgn6nyquFE63VanyWk1',
  },
  {
    name: 'Workshop on Data Analysis in Research Methodology',
    link: 'https://drive.google.com/drive/u/0/folders/1_iXbXeF8E4RlAOsNiMUaVaudjk0cT47Y',
  },
  {
    name: 'Seminar on Research Methodologies',
    link: 'https://drive.google.com/drive/u/0/folders/16EvjpY59Yl3Dph4U9unMhUrFPkxM8fti',
  },
  {
    name: 'Seminar on Research Paper Ethics',
    link: 'https://drive.google.com/drive/u/0/folders/1L5GRd4hGqTO2l0MbPAAD1JobORHO9t1L',
  },
  {
    name: 'Seminar on Presenting a Research',
    link: 'https://drive.google.com/drive/u/2/folders/1mDMynm4DuNUex-LnLF6hBTsUypHq95n8',
  },
  {
    name: 'Webinar on Research Paper Design',
    link: 'https://drive.google.com/drive/u/2/folders/1MPC0z_S3vi63Xxs-6nyUpHmQMxS9_fbl',
  },
  {
    name: 'Workshop on Writing Effective Research Papers and Research Proposals',
    link: 'https://drive.google.com/drive/u/2/folders/1mF9u2I5Q6oIZ2VkipJfxafSOkl3uzYMI',
  },
  {
    name: 'Writing Effective Research Papers and Research Proposals',
    link: 'https://drive.google.com/drive/u/2/folders/1wx9QZmB2iisyHoxws0xZs_l5LDghddB5',
  },
  {
    name: 'Webinar on Research Ethics and Plagiarism',
    link: 'https://drive.google.com/drive/u/2/folders/1L6BbVoIR-nA0mOgz2daNjSiwYotMqaaS',
  },
  {
    name: 'Seminar on Challenges of Research Paper Writing',
    link: 'https://drive.google.com/drive/u/2/folders/19XnI9JkYUSBG3S99ezZq0MbSbCXr0vPZ',
  },
  {
    name: 'Workshop on Research Methodology',
    link: 'https://drive.google.com/drive/u/2/folders/1QeTYKkOIuaxG9XLjKTez2f29iIYxCjf6',
  },
  {
    name: 'Seminar on Perceptual Mapping of Creativity — An Exploratory Approach',
    link: 'https://drive.google.com/drive/u/2/folders/1BP5Dt0OqcD3jnPw48gWBEcY0eXQnl2oq',
  },
];

function EventsTab() {
  return (
    <div className="max-w-3xl">
      <h2>Events</h2>
      <dl className="mt-6 flex flex-col divide-y divide-cc-gray-200">
        {EVENTS.map((item, index) => (
          <div key={`${item.name}-${index}`} className="py-4 first:pt-0 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <dt className="text-cc-text-body font-medium leading-relaxed">{item.name}</dt>
              {item.date && (
                <span className="mt-1 block text-xs uppercase tracking-wide text-cc-text-muted-light">{item.date}</span>
              )}
              {item.description && (
                <dd className="mt-2 text-sm text-cc-text-muted-light">{item.description}</dd>
              )}
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center rounded-cc-pill bg-cc-primary px-4 py-2 text-sm font-semibold text-cc-white transition-colors duration-[350ms] hover:bg-cc-primary-dark shadow-sm"
              >
                View Details
              </a>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function ResearchCell({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Research Cell"
      breadcrumbLabel="Research Cell"
      breadcrumbSection="Centres & Cells"
      description="The Research Cell at Christ College, Pune supervises research and development activities, fostering innovation, interdisciplinary collaboration and faculty PhD pursuits — activities, publications and events."
      tagline="Research, Innovation & Academic Inquiry"
      bannerImage={researchBanner}
      bannerAlt="A research methodology seminar session at Christ College Pune"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'research-activities', label: 'Research Activities', render: () => <ResearchActivitiesTab /> },
        { key: 'publications', label: 'Publications', render: () => <PublicationsTab /> },
        { key: 'events', label: 'Events', render: () => <EventsTab /> },
      ]}
    />
  );
}
