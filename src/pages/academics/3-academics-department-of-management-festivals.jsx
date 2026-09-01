import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GridIcon } from '../../components/icons';
import manifestOnline from '../../assets/images/3-academics-department-of-management-festivals/manifest-2024-national-level-intercollegiate-biztech-fest-on.png';
import manifestBiztech from '../../assets/images/3-academics-department-of-management-festivals/manifest-2024-biztech-fest.jpg';
import marketSquare from '../../assets/images/3-academics-department-of-management-festivals/market-square.jpg';
import mindMasters from '../../assets/images/3-academics-department-of-management-festivals/mind-masters.jpg';

const FESTIVALS = [
  {
    name: 'Fiesta',
    description: "The collaboration between the Department of Management, Christ University Lavasa, and Christ College Pune culminated in a dynamic two-day biz-tech fest on October 27th and 28th, 2023. This fest featured eight diverse events, including Best Manager, Best Management Team, Finance, Marketing, Business Analytics, Human Resource, Treasure Hunt, and Business Quiz. Participants were challenged to demonstrate both practical acumen and theoretical knowledge to excel in each competition.",
  },
  {
    name: 'Cipher',
    description: "The Management Department at Christ College, Pune, orchestrated a successful series of events, showcasing students' talents and fostering healthy competition. The Textathon event emphasized text-related skills, fair play, and cross-department interaction, exemplifying the college's commitment to holistic development. Pixel Prodigy witnessed creative AI content generation, while Labyrinth Unraveling provided a challenging platform for problem-solving and creativity. Reach Revolution tested technological understanding and user-friendliness, and Strategem-X promoted entrepreneurship and innovation.",
  },
  {
    name: 'Manifest 2024 — National Level Intercollegiate Biztech Fest (Online)',
    image: manifestOnline,
    description: "MANIFEST 2024, the Annual Business and Technology Fest orchestrated by the Department of Management, Christ College Pune, unfolded on February 8th, 2024, with an impressive turnout of 10 colleges participating online. This flagship event provided a dynamic platform for students to exhibit their talents and hone their competitive edge across a diverse array of events including Gaming, Marketing, Finance, HR, Best Management Team, and Supply Chain Management. MANIFEST 2024 stood as a testament to the organizers' commitment to fostering talent and innovation, leaving participants inspired and equipped for future endeavors in the dynamic landscape of business and technology.",
  },
  {
    name: 'Manifest 2024 — Biztech Fest',
    image: manifestBiztech,
    description: "The Department of Management at Christ College Pune successfully hosted MANIFEST '24, the Annual Business and Technology Fest, on February 9th. With participation from 11 colleges across Pune and Lavasa, the event provided a vibrant platform for students to showcase their talents and foster competitive spirit. Through six distinct events including Best Management Team, Marketing, Business Analytics, Finance, HR, Programming, Supply Chain Management, Gaming, Best Manager, and Auction, participants were challenged to apply their managerial and technological abilities in diverse scenarios.",
  },
  {
    name: 'Market Square',
    image: marketSquare,
    description: 'Market Square 2024 unfolded as a captivating convergence of brilliance and opportunity on February 9th. This year\'s event showcased a diverse range of experiences, including the Budding Brilliance Inter College Business Pitching Event, the Weaves of India Exhibition celebrating India\'s cultural heritage, and the TricknTreat Food & Game Stall. With each class managing three stalls, Market Square 2024 epitomized collaboration, creativity, and community engagement, leaving a lasting impression on all who attended.',
  },
  {
    name: 'Crescita',
    description: "The Management Department at Christ College, Pune, orchestrated a successful series of events, showcasing students' talents and fostering healthy competition. The Textathon event emphasized text-related skills, fair play, and cross-department interaction, exemplifying the college's commitment to holistic development. Pixel Prodigy witnessed creative AI content generation, while Labyrinth Unraveling provided a challenging platform for problem-solving and creativity. Reach Revolution tested technological understanding and user-friendliness, and Strategem-X promoted entrepreneurship and innovation.",
  },
  {
    name: 'Xllenz 2024',
    description: "The collaborative efforts of the students from the Department of Management at Christ College Pune, in conjunction with Christ Deemed to be University Lavasa, resulted in the successful organization of Xellenz'24. Spanning across January 12th and 13th, 2024, this fest catered specifically to MBA students at Christ Deemed to be University, Lavasa. With the participation of 36 dedicated students who visited the Lavasa campus, Xellenz'24 featured a comprehensive lineup of 8 diverse events, including Finance, Marketing, HR, Best Manager, Best Management Team, Business Analytics, Supply Chain Management, and an engaging IPL Auction.",
  },
  {
    name: 'Mind Masters',
    image: mindMasters,
    description: 'Mind Masters, the ultimate business quiz challenge, attracted participants from esteemed institutions such as Christ University Lavasa, BMCC, Marathwada Mitramandal, Symbiosis, and more, hosted by the Department of Management, Christ College Pune on the 26th of September, 2023. The competition unfolded through four exhilarating rounds — corporate identity, current affairs and general knowledge, finance/marketing/HR, and a treasure hunt finale — with a prize pool of ₹5,000 and ₹3,000 for the first and second positions respectively.',
  },
];

export default function DepartmentOfManagementFestivalsPage() {
  return (
    <>
      <Seo
        title="Festivals — Department of Management"
        description="Festivals organised by the Department of Management at Christ College, Pune, including Fiesta, Cipher, Manifest, Market Square, Crescita, Xllenz and Mind Masters."
      />
      <PageHeader
        title="Festivals"
        breadcrumbs={[
          { label: 'Department of Management', path: '/academics/department-of-management/department-page' },
          { label: 'Festivals' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
          Department Festivals
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          The Department of Management at Christ College, Pune organises biz-tech fests and
          inter-collegiate festivals throughout the academic year, giving students a platform to
          showcase their skills across management-related domains.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FESTIVALS.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm">
              {item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />}
              <div className="p-5">
                <h3 className="text-base">{item.name}</h3>
                {item.description && <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
