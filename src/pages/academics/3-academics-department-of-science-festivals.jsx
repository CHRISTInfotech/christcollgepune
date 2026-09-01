import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GridIcon, CalendarIcon } from '../../components/icons';
import alumniMeet from '../../assets/images/3-academics-department-of-science-festivals/alumni-meet.jpg';
import electronicsExpo from '../../assets/images/3-academics-department-of-science-festivals/electronics-expo.jpg';
import crescita22 from '../../assets/images/3-academics-department-of-science-festivals/crescita-22.jpg';
import mathletics from '../../assets/images/3-academics-department-of-science-festivals/mathletics.jpg';
import mathematicsExpo from '../../assets/images/3-academics-department-of-science-festivals/mathematics-expo.png';
import streetPlay from '../../assets/images/3-academics-department-of-science-festivals/street-play.png';
import systemSphere from '../../assets/images/3-academics-department-of-science-festivals/system-sphere.jpg';
import technotsav2024 from '../../assets/images/3-academics-department-of-science-festivals/technotsav-2024.jpg';

const FESTIVALS = [
  {
    name: 'Technotsav 2024',
    date: '14 & 15 February 2024',
    image: technotsav2024,
    description: "Welcome to Technotsav 2024, hosted by Christ College - Pune, Department of Science on 14th and 15th of February 2024, where innovation meets inspiration! Technotsav 2024 isn't just an event; it's an immersive journey into the boundless realms of technology and innovation, spanning across two exhilarating days. Events included Logic Loop, Code De Basanti, ElectroQuest, Pi-Rates, Nritya Abhay, and a Game Gauntlet (PUBG & Freefire Edition).",
  },
  {
    name: 'Alumni Meet',
    date: '17 February 2024',
    image: alumniMeet,
    description: 'The Department of Science organized an Alumni Meet on February 17, 2024, at 9:00 am, providing a platform for former students to share their valuable insights and experiences in the corporate world. The event aimed to bridge the gap between current students and alumni, fostering a sense of community and offering valuable guidance for future career paths. The alumni, representing diverse industries and roles, narrated their personal journeys since graduating from the department.',
  },
  {
    name: 'Mathematics Expo',
    date: '31 January 2024',
    image: mathematicsExpo,
    description: 'The Mathematics Exhibition, named MATHEMATICS EXPO, held on January 31, 2024, by the first and second-year students of the Department of Science was a remarkable showcase of mathematical prowess. The event was inaugurated by Dr Fr Arun Antony Chully CMI, the esteemed principal of the college. The exhibition was strategically divided into four distinct zones, including a Programming Zone featuring projects such as graphs and trends in social media, image compression techniques, a calculator using Python, and Google Page Ranking algorithms.',
  },
  {
    name: 'Electronics Expo',
    date: '30 January 2024',
    image: electronicsExpo,
    description: "The Electronics Exhibition held on January 30, 2024, by the first and second-year students of the Department of Science was a captivating display of technological innovation. The event was graced by the presence of Dr. Fr. Arun Antony Chully CMI, the principal of the college, who inaugurated the exhibition. The exhibition showcased a wide array of projects ranging from basic electronic circuits to more advanced applications, including electronic gadgets and innovative circuit designs.",
  },
  {
    name: 'System Sphere Exhibition',
    date: '12 January 2024',
    image: systemSphere,
    description: 'The exhibition, named SYSTEM SPHERE, organized by B.Sc (CS) students of the Science Department on January 12, 2024, showcased an impressive array of charts, still models, and working models centered around Database Management Systems (DBMS) and Operating Systems (OS). The event commenced with a formal inauguration by the college principal, Dr Fr Arun Antony Chully CMI, who highlighted the significance of bridging classroom learning with real-world scenarios.',
  },
  {
    name: 'Mathletics — Unleash your inner mathlete',
    date: '9 January 2024',
    image: mathletics,
    description: 'The Department of Science hosted an exhilarating mathematics quiz event, "Mathletics - Unleash your inner mathlete," on January 9th, 2024, at 2:00 PM, organized to commemorate National Mathematics Day, celebrated on December 22nd. Students from various disciplines showcased their mathematical prowess, engaging in a riveting competition that tested their problem-solving skills through challenging equations, rapid-fire rounds, and intriguing mathematical puzzles.',
  },
  {
    name: 'Street Play on Computer Security',
    date: '30 November 2022',
    image: streetPlay,
    description: 'The Computer Science Department performed a street play on Computer Security Day, themed around computer theft, to invoke proper knowledge regarding the usage and security of personal data. The actors were applauded by the audience, and the play concluded with the quote, "SECURE DATA BE SAFE."',
  },
  {
    name: 'CRESCITA 22',
    date: '18 November 2022',
    image: crescita22,
    description: "Junior Inter-Collegiate Fest CRESCITA 22 was organized by the Student Council of Christ College, Pune for junior colleges across Pune, with a total of 8 teams participating. The event consisted of two rounds — “Guess Answer” and “Hunt Round” — where each team was provided a set of paragraphs and questions to crack for points, followed by a clue-based hunt round.",
  },
];

export default function DepartmentOfScienceFestivalsPage() {
  return (
    <>
      <Seo
        title="Festivals — Department of Science"
        description="Festivals and technical fests organised by the Department of Science at Christ College, Pune, including Technotsav 2024, Alumni Meet, Mathematics Expo, Electronics Expo, System Sphere Exhibition, Mathletics, Street Play on Computer Security and CRESCITA 22."
      />
      <PageHeader
        title="Festivals"
        breadcrumbs={[
          { label: 'Department of Science', path: '/academics/department-of-science/department-page' },
          { label: 'Festivals' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
          Department Festivals
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          The Department of Science at Christ College, Pune organises a variety of festivals and
          exhibitions throughout the academic year — from technology fests and expos to quizzes
          and street plays — giving students a platform to showcase their creativity, technical
          skills and problem-solving abilities.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FESTIVALS.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm">
              {item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />}
              <div className="p-5">
                <h3 className="text-base">{item.name}</h3>
                {item.date && (
                  <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wide text-cc-primary">
                    <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                    {item.date}
                  </p>
                )}
                <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
