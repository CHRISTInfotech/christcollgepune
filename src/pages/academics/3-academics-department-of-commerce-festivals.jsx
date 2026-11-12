import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { GridIcon } from '../../components/icons';
import desafio from '../../assets/images/3-academics-department-of-commerce-festivals/desafio.jpg';
import ecomania23 from '../../assets/images/3-academics-department-of-commerce-festivals/ecomania-23.jpg';
import comclave23 from '../../assets/images/3-academics-department-of-commerce-festivals/comclave-23.jpg';
import comclave26_1 from '../../assets/images/gallery/comclave-26/1.jpg';
import comclave26_2 from '../../assets/images/gallery/comclave-26/2.jpg';
import comclave26_3 from '../../assets/images/gallery/comclave-26/3.jpg';
import comclave26_4 from '../../assets/images/gallery/comclave-26/4.jpg';
import comclave26_5 from '../../assets/images/gallery/comclave-26/5.jpg';
import comclave26_6 from '../../assets/images/gallery/comclave-26/6.jpg';
import comclave26_7 from '../../assets/images/gallery/comclave-26/7.jpg';
import comclave26_8 from '../../assets/images/gallery/comclave-26/8.jpg';
import desafio2026_1 from '../../assets/images/gallery/desafio-2026/1.jpg';
import desafio2026_2 from '../../assets/images/gallery/desafio-2026/2.jpg';
import desafio2026_3 from '../../assets/images/gallery/desafio-2026/3.jpg';
import desafio2026_4 from '../../assets/images/gallery/desafio-2026/4.jpg';
import desafio2026_5 from '../../assets/images/gallery/desafio-2026/5.jpg';
import desafio2026_6 from '../../assets/images/gallery/desafio-2026/6.jpg';

const COMCLAVE_26_IMAGES = [comclave26_1, comclave26_2, comclave26_3, comclave26_4, comclave26_5, comclave26_6, comclave26_7, comclave26_8];
const DESAFIO_2026_IMAGES = [desafio2026_1, desafio2026_2, desafio2026_3, desafio2026_4, desafio2026_5, desafio2026_6];

const FESTIVALS = [
  {
    name: "COMCLAVE '26 — The Business of Being Unbeatable",
    images: COMCLAVE_26_IMAGES,
    description: "An intra-departmental fest conducted by the Department of Commerce in collaboration with CHRIST (Deemed to be University), Pune Lavasa Campus. The event featured four engaging competitions — Boardroom Challenge, Campus Shark Tank, Kahoot Alpha Hunt, and Case Crafting Challenge — designed to develop students' strategic thinking, entrepreneurship, problem-solving, teamwork, leadership, and business awareness, giving students an opportunity to apply classroom learning to practical business challenges.",
  },
  {
    name: 'DeSafio 2026',
    images: DESAFIO_2026_IMAGES,
    description: "The Department of Commerce organised DeSafio 2026, an intercollegiate commerce fest that brought together undergraduate and postgraduate students from various colleges. The fest provided a platform to showcase their intellectual, analytical, and creative abilities through events such as Dalaal Street, The Indictment, Last Vault, Game Theory, and BGMI Battleground Royale, testing participants' financial knowledge, strategic thinking, teamwork, and decision-making skills while promoting healthy competition and experiential learning.",
  },
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
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
              {item.images ? (
                <ImageCarousel images={item.images} alt={item.name} className="h-40 w-full" />
              ) : (
                item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
              )}
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
