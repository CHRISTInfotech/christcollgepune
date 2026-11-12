import TabbedContentPage from '../../components/TabbedContentPage';
import ImageCarousel from '../../components/ImageCarousel';
import CentreVisionMission from '../../components/CentreVisionMission';
import { DownloadIcon, CalendarIcon, UsersIcon } from '../../components/icons';
import committeePdf from '../../assets/studentlife/cells/Anti- Sexual Harrassment Cell.pdf';
import poshStaff1 from '../../assets/images/gallery/posh-awareness-staff/1.jpg';
import poshStaff2 from '../../assets/images/gallery/posh-awareness-staff/2.jpg';
import poshStaff3 from '../../assets/images/gallery/posh-awareness-staff/3.jpg';
import poshStaff4 from '../../assets/images/gallery/posh-awareness-staff/4.jpg';
import poshStaff5 from '../../assets/images/gallery/posh-awareness-staff/5.jpg';
import poshStudents1 from '../../assets/images/gallery/posh-awareness-students/1.jpg';
import poshStudents2 from '../../assets/images/gallery/posh-awareness-students/2.jpg';
import poshStudents3 from '../../assets/images/gallery/posh-awareness-students/3.jpg';
import poshStudents4 from '../../assets/images/gallery/posh-awareness-students/4.jpg';
import poshStudents5 from '../../assets/images/gallery/posh-awareness-students/5.jpg';
import poshStudents6 from '../../assets/images/gallery/posh-awareness-students/6.jpg';

const POSH_STAFF_IMAGES = [poshStaff1, poshStaff2, poshStaff3, poshStaff4, poshStaff5];
const POSH_STUDENTS_IMAGES = [poshStudents1, poshStudents2, poshStudents3, poshStudents4, poshStudents5, poshStudents6];

const SESSIONS = [
  {
    name: 'POSH Awareness Session for Teaching and Non-Teaching Staff',
    date: 'September 2026',
    images: POSH_STAFF_IMAGES,
    description: 'An awareness session on the Prevention of Sexual Harassment (POSH) Act, 2013, was organised in September 2026 for teaching and non-teaching staff in collaboration with IQAC. The session focused on sensitising employees about workplace rights, responsibilities, complaint redressal procedures, and the importance of fostering a safe, respectful, and harassment-free work environment.',
  },
  {
    name: 'POSH Awareness Session for Students',
    date: 'October 2026',
    images: POSH_STUDENTS_IMAGES,
    description: 'An awareness session on the Prevention of Sexual Harassment (POSH) Act, 2013, was organised in October 2026 for students. The session aimed to educate students about different forms of sexual harassment, their rights, available support and reporting mechanisms, and the importance of gender sensitivity, mutual respect, and creating a safe and inclusive campus environment.',
  },
];

function HomeTab() {
  return (
    <>
      <h2>About the Cell</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The Anti-Sexual Harassment Cell was constituted under the aegis of the Women&rsquo;s
        Cell in the session 2024-25. The Anti-Sexual Harassment Cell at Christ College Pune
        operates as the Internal Complaints Committee (ICC) in accordance with the Sexual
        Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. It
        works on the guidelines of the Act, which also provides a mechanism for the redressal
        of complaints, with the Internal Complaints Committee on Sexual Harassment functioning
        as its executive body.
      </p>

      <CentreVisionMission
        vision="To nurture a safe, inclusive, and respectful institutional environment free from sexual harassment, where every individual is treated with dignity, equality, and respect."
        mission="To prevent and address sexual harassment through proactive education, fair and confidential redressal mechanisms, robust support systems, and strict adherence to the POSH Act, 2013."
      />

      <h2 className="mt-10">Documents</h2>
      <a
        href={committeePdf}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
          <DownloadIcon width={20} height={20} />
        </span>
        <span>
          <span className="block font-semibold text-cc-text-heading">Anti-Sexual Harassment Cell Committee</span>
          <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
        </span>
      </a>
    </>
  );
}

function SessionsTab() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {SESSIONS.map((item) => (
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
            <p className="mt-1.5 flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-cc-primary">
              <CalendarIcon className="h-3 w-3 shrink-0" />
              {item.date}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light line-clamp-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AntiSexualHarassmentCell({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Anti-Sexual Harassment Cell"
      breadcrumbLabel="Anti-Sexual Harassment Cell"
      breadcrumbSection="Centres & Cells"
      description="The Anti-Sexual Harassment Cell at Christ College, Pune operates as the Internal Complaints Committee under the POSH Act, 2013, working to create a safe, harassment-free environment through awareness sessions and a confidential complaint mechanism."
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'About', render: () => <HomeTab /> },
        { key: 'sessions', label: 'Sessions & Seminars', render: () => <SessionsTab /> },
      ]}
    />
  );
}
