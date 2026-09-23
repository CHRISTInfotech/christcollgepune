import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { UsersIcon, CalendarIcon } from '../../components/icons';
import ccsaInauguration from '../../assets/images/3-academics-department-of-science-association/ccsa-inauguration.jpg';
import ccsa2026_1 from '../../assets/images/gallery/ccsa-inauguration-2026/1.jpg';
import ccsa2026_2 from '../../assets/images/gallery/ccsa-inauguration-2026/2.jpg';
import ccsa2026_3 from '../../assets/images/gallery/ccsa-inauguration-2026/3.jpg';
import ccsa2026_4 from '../../assets/images/gallery/ccsa-inauguration-2026/4.jpg';
import aarambh1 from '../../assets/images/gallery/aarambh-2026/1.jpg';
import aarambh2 from '../../assets/images/gallery/aarambh-2026/2.jpg';
import aarambh3 from '../../assets/images/gallery/aarambh-2026/3.jpg';
import aarambh4 from '../../assets/images/gallery/aarambh-2026/4.jpg';
import aarambh5 from '../../assets/images/gallery/aarambh-2026/5.jpg';
import aarambh6 from '../../assets/images/gallery/aarambh-2026/6.jpg';
import aarambh7 from '../../assets/images/gallery/aarambh-2026/7.jpg';
import aarambh8 from '../../assets/images/gallery/aarambh-2026/8.jpg';
import aarambh9 from '../../assets/images/gallery/aarambh-2026/9.jpg';
import aarambh10 from '../../assets/images/gallery/aarambh-2026/10.jpg';
import aarambh11 from '../../assets/images/gallery/aarambh-2026/11.jpg';
import freshers1 from '../../assets/images/gallery/freshers-day-2026/1.jpg';
import freshers2 from '../../assets/images/gallery/freshers-day-2026/2.jpg';
import freshers3 from '../../assets/images/gallery/freshers-day-2026/3.jpg';
import freshers4 from '../../assets/images/gallery/freshers-day-2026/4.jpg';
import freshers5 from '../../assets/images/gallery/freshers-day-2026/5.jpg';
import freshers6 from '../../assets/images/gallery/freshers-day-2026/6.jpg';
import freshers7 from '../../assets/images/gallery/freshers-day-2026/7.jpg';

const CCSA_INAUGURATION_2026_IMAGES = [ccsa2026_1, ccsa2026_2, ccsa2026_3, ccsa2026_4];
const AARAMBH_2026_IMAGES = [aarambh1, aarambh2, aarambh3, aarambh4, aarambh5, aarambh6, aarambh7, aarambh8, aarambh9, aarambh10, aarambh11];
const FRESHERS_DAY_2026_IMAGES = [freshers1, freshers2, freshers3, freshers4, freshers5, freshers6, freshers7];

const EVENTS = [
  {
    name: 'CCSA Inauguration',
    date: '21 August 2026',
    images: CCSA_INAUGURATION_2026_IMAGES,
    description: 'The Christ College Science Association (CCSA) was inaugurated on August 21, 2026 in Chavara Hall, with the purpose of bringing awareness of CCSA throughout the year. Overall development and co-curricular enrichment of students is the main motive behind the association, which reaffirms the department’s commitment to fostering a culture of scientific inquiry and innovation.',
  },
  {
    name: 'AARAMBH — Orientation for SYBCS',
    date: '29 June 2026',
    images: AARAMBH_2026_IMAGES,
    description: 'Christ College – Pune, organized AARAMBH 2026, the Second Year Orientation Programme, on 29 June 2026 for the students of the academic year 2026–2027. The programme was conducted to welcome the second-year students and prepare them for the upcoming academic year. The special guest for the event was Mr. Kunal Pagariya, Software Technical Expert at Amdocs India Pvt. Ltd., who shared valuable insights on the importance of technical knowledge, career planning, professional ethics, and continuous learning. He encouraged students to focus on building strong technical skills, communication abilities, teamwork, and problem-solving skills to succeed in the IT industry, and also highlighted the importance of internships, certifications, and staying updated with emerging technologies. The orientation programme inspired students to approach their second year with confidence, dedication, and a clear vision for their future careers.',
  },
  {
    name: "Freshers' Day",
    date: '8 August 2026',
    images: FRESHERS_DAY_2026_IMAGES,
    description: 'A Freshers’ Day celebration was organised on 8 August 2026 at 11:00 a.m. to welcome the First Year B.Sc. Computer Science and Data Science students (and FY M.Sc. CS). The event followed the vibrant theme "Disco × Main Character Energy," with students dressed creatively to reflect the theme. The programme began with a prayer song, followed by welcome addresses by Rev. Fr. and Ms. Nilima Ma’am. Dance performances by the Second and Third Year students and a lively band performance added to the excitement. The highlight was the Freshers’ Title Competition, featuring the titles Mr. Main Character Energy and Ms. Main Character Energy, along with six special titles, including a ramp walk and Q&A round, judged by Ms. Wilma Dias and Ms. Swati Jadhav. The celebration concluded with the prize distribution, where all the winners were felicitated.',
  },
  {
    name: 'Code Chase',
  },
  {
    name: 'AI Got Talent',
  },
  {
    name: 'CCSA Inauguration (2024)',
    date: '29 August 2024',
    image: ccsaInauguration,
    description: 'The Inauguration of Christ College Science Association (CCSA) was held on August 29, 2024 in Chavara Hall at 11:00 am. The purpose of this event was to bring awareness of CCSA throughout the year — overall development and co-curricular enrichment of students is the main motive behind the association. The inauguration was not just the beginning of a new academic year for the association but also a reaffirmation of the college’s commitment to fostering a culture of scientific inquiry and innovation.',
  },
  {
    name: 'Event 01: Icon Blitz',
    date: '13 September 2024',
    description: 'The CCSA hosted an engaging activity titled "Icon Blitz" on September 13, 2024, held in Hall No. 29 and 31 at 10:00 am, organized by the CCSA head coordinators. The idea of the competition was to encourage participants to design logos that represented their team’s name. Winners: 1st place — FX-tra, 2nd place — Zennox, 3rd place — Snapdragon.',
  },
  {
    name: 'Event 02: Engage Tech',
    date: '30 September 2024',
    description: 'Engage Tech was the event held on September 30, 2024 in the multipurpose hall at 1:15 pm, organized by team Snapdragon. The event was designed to explore the impact of technological advancements on communication, language learning and digital literacy, highlighting the symbiotic relationship between English and technology. Winners: 1st place — Athlon, 2nd place — Neoverse, 3rd place — FX-tra.',
  },
  {
    name: 'Event 03: Sarfarosh',
    date: '9 November 2024',
    description: 'CCSA hosted an online event, "Sarfarosh," on November 9, 2024 at 10:45 am, hosted by team Ryzen. It featured a powerful voiceover of a renowned military movie, and the objective was to encourage discussions and questions about the themes depicted, fostering critical thinking. Winners: 1st place — Snapdragon, 2nd place — Zennox, 3rd place — Neoverse.',
  },
  {
    name: 'Event 04: CodexCrusade25',
    date: '10 January 2025',
    description: 'CodexCrusade25, an event organised by team Athlon on January 10, 2025 in Hall No. 27 at 12:30 pm, was a perfect blend of coding and quiz. The event offered students a thrilling opportunity to showcase their coding expertise, foster innovative thinking, and use their programming knowledge to tackle problem-solving challenges. Winners: 1st place — Snapdragon, 2nd place — Neoverse, 3rd place — Zennox.',
  },
];

export default function DepartmentOfScienceAssociationPage() {
  return (
    <>
      <Seo
        title="Association (CCSA) — Department of Science"
        description="The Christ College Science Association (CCSA) at the Department of Science, Christ College Pune — its 2026 inauguration, AARAMBH orientation, Freshers' Day, Code Chase, AI Got Talent, and past events including Icon Blitz, Engage Tech, Sarfarosh and CodexCrusade25."
      />
      <PageHeader
        title="Association"
        breadcrumbs={[
          { label: 'Department of Science', path: '/academics/department-of-science/department-page' },
          { label: 'Association' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
          CCSA — Christ College Science Association
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          The Christ College Science Association (CCSA) was inaugurated on August 21, 2026 in
          Chavara Hall, with the purpose of bringing awareness of CCSA throughout the year.
          Overall development and co-curricular enrichment of students is the main motive behind
          the association, which reaffirms the department&rsquo;s commitment to fostering a
          culture of scientific inquiry and innovation.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
              {item.images ? (
                <ImageCarousel images={item.images} alt={item.name} />
              ) : (
                item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
              )}
              <div className="p-5">
                <h3 className="text-base">{item.name}</h3>
                {item.date && (
                  <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wide text-cc-primary">
                    <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                    {item.date}
                  </p>
                )}
                {item.description && (
                  <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
