import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { UsersIcon, CalendarIcon } from '../../components/icons';
import ccsaInauguration from '../../assets/images/3-academics-department-of-science-association/ccsa-inauguration.jpg';

const EVENTS = [
  {
    name: 'CCSA Inauguration',
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
        description="The Christ College Science Association (CCSA) at the Department of Science, Christ College Pune — its 2024 inauguration and events including Icon Blitz, Engage Tech, Sarfarosh and CodexCrusade25."
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
          The Christ College Science Association (CCSA) was inaugurated on August 29, 2024 in
          Chavara Hall, with the purpose of bringing awareness of CCSA throughout the year.
          Overall development and co-curricular enrichment of students is the main motive behind
          the association, which reaffirms the department&rsquo;s commitment to fostering a
          culture of scientific inquiry and innovation.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((item) => (
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
