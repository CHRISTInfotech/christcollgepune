import TabbedContentPage from '../../components/TabbedContentPage';
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
        The Research Cell at our institution plays a pivotal role in the supervision and
        guidance of research and development activities. Our key objectives include fostering
        innovation within the academic community to contribute to academic excellence. We aim
        to facilitate interdisciplinary research collaboration, thereby enhancing the
        institution&rsquo;s research output and impact.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The Research Cell is responsible for constructing new R&amp;D and research policies for
        our institution, ensuring they align with our academic goals. It also focuses on
        building and maintaining relationships with research centers, institutions, and industry
        organizations to stay updated on research and development initiatives. The Cell actively
        encourages faculty members to pursue Ph.D. studies and guides them to advance knowledge,
        address societal needs, and stimulate innovation.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        Moreover, the Research Cell conducts research and surveys to identify entrepreneurial
        opportunities for our students, in addition to organizing events like research project
        exhibitions &amp; competitions, and business stalls. It maintains records of research
        guides within the institute and those associated with research centers of the college.
        Furthermore, the Research Cell collaborates with department heads to organize research
        conferences, workshops, seminars, and Faculty Development Programs (FDPs). It also
        motivates faculty and students to publish their research works as journals or conference
        publications, furthering our commitment to academic and research excellence.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The Research Cell stands at the forefront of academic innovation and development,
        driving the institution&rsquo;s mission to advance knowledge and contribute to societal
        progress.
      </p>

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
      description="The Research Cell at Christ College, Pune supervises research and development activities, fostering innovation, interdisciplinary collaboration and faculty PhD pursuits — activities, publications and events."
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
