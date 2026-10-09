import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { GridIcon, CalendarIcon } from '../../components/icons';
import manifestOnline from '../../assets/images/3-academics-department-of-management-festivals/manifest-2024-national-level-intercollegiate-biztech-fest-on.png';
import manifestBiztech from '../../assets/images/3-academics-department-of-management-festivals/manifest-2024-biztech-fest.jpg';
import marketSquare from '../../assets/images/3-academics-department-of-management-festivals/market-square.jpg';
import mindMasters from '../../assets/images/3-academics-department-of-management-festivals/mind-masters.jpg';
import marketSquareManifest2026_1 from '../../assets/images/gallery/market-square-manifest-2026/1.jpg';
import marketSquareManifest2026_2 from '../../assets/images/gallery/market-square-manifest-2026/2.jpg';
import tatva2025_1 from '../../assets/images/gallery/tatva-2025/1.jpg';
import tatva2025_2 from '../../assets/images/gallery/tatva-2025/2.jpg';
import pulse2025_1 from '../../assets/images/gallery/pulse-2025/1.jpg';
import pulse2025_2 from '../../assets/images/gallery/pulse-2025/2.jpg';
import fiesta2025_1 from '../../assets/images/gallery/fiesta-2025/1.jpg';
import fiesta2025_2 from '../../assets/images/gallery/fiesta-2025/2.jpg';

const FESTIVALS = [
  {
    name: 'Market Square & Manifest 2026',
    date: '28 February 2026',
    images: [marketSquareManifest2026_1, marketSquareManifest2026_2],
    description: 'The Department of Management, Christ College–Pune, organized Market Square 2026 and Manifest 2026 on 28 February 2026 to promote experiential learning and managerial skills. Market Square recreated a marketplace inspired by the historic Silk Route, providing students with practical experience in entrepreneurship, pricing, marketing, sales, and customer interaction. Manifest 2026, themed “Capital Royale – Decision Defines Dominance,” attracted over 125 students from 11 colleges, featuring competitions in HR, finance, marketing, business analytics, auctions, MUN, and e-sports. Both events encouraged healthy competition and strengthened students’ strategic thinking, creativity, leadership, teamwork, and decision-making abilities. They successfully connected classroom learning with real-world business and management practices.',
  },
  {
    name: 'TATVA 2025',
    date: '26 November 2025',
    images: [tatva2025_1, tatva2025_2],
    description: 'The Department of Management, Christ College–Pune, organized TATVA 2025 on 26 November 2025 as an experiential learning initiative showcasing India’s rich intellectual and cultural heritage. Students presented 16 stalls covering philosophy, science, mathematics, medicine, architecture, commerce, arts, and sustainable living through creative exhibits and demonstrations. The activity enhanced students’ research, creativity, communication, teamwork, and presentation skills while promoting appreciation of Indian Knowledge Systems.',
  },
  {
    name: 'PULSE 2025',
    date: '10 September 2025',
    images: [pulse2025_1, pulse2025_2],
    description: 'The Department of Management, in association with the Centre for Sustainable Development and Empower Charitable Trust, organized PULSE 2025 on 10 September 2025. The event brought together youth from colleges across Pune to promote sustainability, constitutional values, and responsible citizenship through cultural and intellectual activities. Competitions such as debates, business idea pitches, street plays, and eco-friendly creative events encouraged innovation, critical thinking, teamwork, and social awareness. The programme enhanced students’ understanding of the SDGs and inspired them to contribute towards sustainable nation-building.',
  },
  {
    name: 'Fiesta 2025',
    date: '29–30 August 2025',
    images: [fiesta2025_1, fiesta2025_2],
    description: 'The Department of Management organized Fiesta 2025 on 29 and 30 August 2025, providing students with a platform to showcase their managerial, analytical, creative, and leadership skills. The two-day fest featured competitions such as Brand Buzz, Marketing 360, FinQuest, Ignitia, Analytica Unplugged, and Management Maze. The event promoted experiential learning, teamwork, problem-solving, decision-making, and healthy competition among students.',
  },
  {
    name: 'Manifest 2024 — National Level Intercollegiate Biztech Fest (Online)',
    date: '8 February 2024',
    image: manifestOnline,
    description: "MANIFEST 2024, the Annual Business and Technology Fest orchestrated by the Department of Management, Christ College Pune, unfolded on February 8th, 2024, with an impressive turnout of 10 colleges participating online. This flagship event provided a dynamic platform for students to exhibit their talents and hone their competitive edge across a diverse array of events including Gaming, Marketing, Finance, HR, Best Management Team, and Supply Chain Management. MANIFEST 2024 stood as a testament to the organizers' commitment to fostering talent and innovation, leaving participants inspired and equipped for future endeavors in the dynamic landscape of business and technology.",
  },
  {
    name: 'Manifest 2024 — Biztech Fest',
    date: '9 February 2024',
    image: manifestBiztech,
    description: "The Department of Management at Christ College Pune successfully hosted MANIFEST '24, the Annual Business and Technology Fest, on February 9th. With participation from 11 colleges across Pune and Lavasa, the event provided a vibrant platform for students to showcase their talents and foster competitive spirit. Through six distinct events including Best Management Team, Marketing, Business Analytics, Finance, HR, Programming, Supply Chain Management, Gaming, Best Manager, and Auction, participants were challenged to apply their managerial and technological abilities in diverse scenarios.",
  },
  {
    name: 'Market Square',
    date: '9 February 2024',
    image: marketSquare,
    description: 'Market Square 2024 unfolded as a captivating convergence of brilliance and opportunity on February 9th. This year\'s event showcased a diverse range of experiences, including the Budding Brilliance Inter College Business Pitching Event, the Weaves of India Exhibition celebrating India\'s cultural heritage, and the TricknTreat Food & Game Stall. With each class managing three stalls, Market Square 2024 epitomized collaboration, creativity, and community engagement, leaving a lasting impression on all who attended.',
  },
  {
    name: 'Xllenz 2024',
    date: '12–13 January 2024',
    description: "The collaborative efforts of the students from the Department of Management at Christ College Pune, in conjunction with Christ Deemed to be University Lavasa, resulted in the successful organization of Xellenz'24. Spanning across January 12th and 13th, 2024, this fest catered specifically to MBA students at Christ Deemed to be University, Lavasa. With the participation of 36 dedicated students who visited the Lavasa campus, Xellenz'24 featured a comprehensive lineup of 8 diverse events, including Finance, Marketing, HR, Best Manager, Best Management Team, Business Analytics, Supply Chain Management, and an engaging IPL Auction.",
  },
  {
    name: 'Fiesta',
    date: '27–28 October 2023',
    description: "The collaboration between the Department of Management, Christ University Lavasa, and Christ College Pune culminated in a dynamic two-day biz-tech fest on October 27th and 28th, 2023. This fest featured eight diverse events, including Best Manager, Best Management Team, Finance, Marketing, Business Analytics, Human Resource, Treasure Hunt, and Business Quiz. Participants were challenged to demonstrate both practical acumen and theoretical knowledge to excel in each competition.",
  },
  {
    name: 'Mind Masters',
    date: '26 September 2023',
    image: mindMasters,
    description: 'Mind Masters, the ultimate business quiz challenge, attracted participants from esteemed institutions such as Christ University Lavasa, BMCC, Marathwada Mitramandal, Symbiosis, and more, hosted by the Department of Management, Christ College Pune on the 26th of September, 2023. The competition unfolded through four exhilarating rounds — corporate identity, current affairs and general knowledge, finance/marketing/HR, and a treasure hunt finale — with a prize pool of ₹5,000 and ₹3,000 for the first and second positions respectively.',
  },
  {
    name: 'Cipher',
    description: "The Management Department at Christ College, Pune, orchestrated a successful series of events, showcasing students' talents and fostering healthy competition. The Textathon event emphasized text-related skills, fair play, and cross-department interaction, exemplifying the college's commitment to holistic development. Pixel Prodigy witnessed creative AI content generation, while Labyrinth Unraveling provided a challenging platform for problem-solving and creativity. Reach Revolution tested technological understanding and user-friendliness, and Strategem-X promoted entrepreneurship and innovation.",
  },
  {
    name: 'Crescita',
    description: "The Management Department at Christ College, Pune, orchestrated a successful series of events, showcasing students' talents and fostering healthy competition. The Textathon event emphasized text-related skills, fair play, and cross-department interaction, exemplifying the college's commitment to holistic development. Pixel Prodigy witnessed creative AI content generation, while Labyrinth Unraveling provided a challenging platform for problem-solving and creativity. Reach Revolution tested technological understanding and user-friendliness, and Strategem-X promoted entrepreneurship and innovation.",
  },
];

export default function DepartmentOfManagementFestivalsPage() {
  return (
    <>
      <Seo
        title="Festivals — Department of Management"
        description="Festivals organised by the Department of Management at Christ College, Pune, including Market Square & Manifest 2026, TATVA 2025, PULSE 2025, Fiesta 2025, Manifest, Market Square, Xllenz, Mind Masters, Cipher and Crescita."
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
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
              {item.images ? (
                <ImageCarousel images={item.images} alt={item.name} />
              ) : (
                item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
              )}
              <div className="p-5">
                <h3 className="text-base break-words">{item.name}</h3>
                {item.date && (
                  <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wide text-cc-primary">
                    <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                    {item.date}
                  </p>
                )}
                {item.description && <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
