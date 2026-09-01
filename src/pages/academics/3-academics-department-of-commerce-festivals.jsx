import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GridIcon } from '../../components/icons';
import desafio from '../../assets/images/3-academics-department-of-commerce-festivals/desafio.jpg';
import ecomania23 from '../../assets/images/3-academics-department-of-commerce-festivals/ecomania-23.jpg';
import comclave23 from '../../assets/images/3-academics-department-of-commerce-festivals/comclave-23.jpg';

const FESTIVALS = [
  {
    name: 'DeSafio',
    image: desafio,
    description: "On the 16th of February 2024, the Department of Commerce at Christ College Pune hosted the highly anticipated Inter-Collegiate Fest, DeSafio Comfest 24. This extravaganza was a confluence of intellect, creativity, and skill, bringing together students from various institutions who showcased their prowess in commerce-related domains. The event lineup was captivating, with diverse competitions designed to challenge and inspire participants, underlining the significance of a multidisciplinary approach in today's dynamic business landscape.",
  },
  {
    name: "ECOMANIA '23",
    image: ecomania23,
    description: "Organized by CHRIST (Deemed to be University) Pune, Lavasa Campus, in collaboration with the Department of Arts and the Department of Commerce at Christ College Pune, ECOMANIA '23 was a vibrant intra-college economics fest held on October 6, 2023. Through engaging activities like Econ-Quest and Word Wizz Challenge, students from various academic programs showcased their passion and understanding of economic concepts, culminating in the triumph of team 'Smithians' as the winners.",
  },
  {
    name: "Comclave'23",
    image: comclave23,
  },
];

export default function DepartmentOfCommerceFestivalsPage() {
  return (
    <>
      <Seo
        title="Festivals — Department of Commerce"
        description="Festivals organised by the Department of Commerce at Christ College, Pune, including DeSafio and ECOMANIA '23."
      />
      <PageHeader
        title="Festivals"
        breadcrumbs={[
          { label: 'Department of Commerce', path: '/academics/department-of-commerce/department-page' },
          { label: 'Festivals' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
          Department Festivals
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          The Department of Commerce at Christ College, Pune organises inter-collegiate fests and
          economics festivals throughout the academic year, giving students a platform to
          showcase their skills across commerce-related domains.
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
