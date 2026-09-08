import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import CategorySection from '../../components/CategorySection';
import { GridIcon } from '../../components/icons';
import ecoManiaFest from '../../assets/images/3-academics-department-of-arts-festivals/eco-mania-economics-fest.jpg';
import ecomania2025_1 from '../../assets/images/gallery/ecomania-2025/1.jpg';
import ecomania2025_2 from '../../assets/images/gallery/ecomania-2025/2.jpg';
import ecomania2025_3 from '../../assets/images/gallery/ecomania-2025/3.jpg';
import ecomania2025_4 from '../../assets/images/gallery/ecomania-2025/4.jpg';
import ecomania2025_5 from '../../assets/images/gallery/ecomania-2025/5.jpg';
import ecomania2025_6 from '../../assets/images/gallery/ecomania-2025/6.jpg';
import ecomania2025_7 from '../../assets/images/gallery/ecomania-2025/7.jpg';
import ecomania2025_8 from '../../assets/images/gallery/ecomania-2025/8.jpg';
import ecomania2025_9 from '../../assets/images/gallery/ecomania-2025/9.jpg';
import ecomania2025_10 from '../../assets/images/gallery/ecomania-2025/10.jpg';
import udaan2026_1 from '../../assets/images/gallery/udaan-2026/1.jpg';
import udaan2026_2 from '../../assets/images/gallery/udaan-2026/2.jpg';
import udaan2026_3 from '../../assets/images/gallery/udaan-2026/3.jpg';
import udaan2026_4 from '../../assets/images/gallery/udaan-2026/4.jpg';
import udaan2026_5 from '../../assets/images/gallery/udaan-2026/5.jpg';
import udaan2026_6 from '../../assets/images/gallery/udaan-2026/6.jpg';
import udaan2026_7 from '../../assets/images/gallery/udaan-2026/7.jpg';
import udaan2026_8 from '../../assets/images/gallery/udaan-2026/8.jpg';
import udaan2026_9 from '../../assets/images/gallery/udaan-2026/9.jpg';
import udaan2026_10 from '../../assets/images/gallery/udaan-2026/10.jpg';

const ECOMANIA_2025_IMAGES = [
  ecomania2025_1, ecomania2025_2, ecomania2025_3, ecomania2025_4, ecomania2025_5,
  ecomania2025_6, ecomania2025_7, ecomania2025_8, ecomania2025_9, ecomania2025_10,
];

const UDAAN_2026_IMAGES = [
  udaan2026_1, udaan2026_2, udaan2026_3, udaan2026_4, udaan2026_5, udaan2026_6, udaan2026_7, udaan2026_8, udaan2026_9, udaan2026_10,
];

const FESTIVALS = [
  {
    name: "Udaan '26",
    subtitle: 'Inter-Collegiate Fest',
    images: UDAAN_2026_IMAGES,
    description: "Udaan '26 witnessed enthusiastic participation from around 450 students representing institutions across the globe, celebrating creativity and talent. The event was a grand success, setting a benchmark, efficiently coordinated by Dr Priya Wahab with strong support from the faculty team and HoD Mr Baiju Sebastian. The fest was inaugurated by Rev Fr James Thayyil, followed by an inspiring address by Rev Dr Arun Antony Chully. Chief Guest Ms Ruby Kumari and Guest of Honour Mr Tarun Mittal added value with their insights. Events such as Nritya, Sajja, Natya, Kavya, Drishya, and Swara showcased diverse artistic expressions, with MIT ADT University emerging as the overall champion.",
  },
  {
    name: 'ECOMANIA',
    subtitle: 'Intra-Department Fest',
    images: ECOMANIA_2025_IMAGES,
    description: "Ecomania '25, organised by the Department of Arts, in collaboration with the Department of Statistics and Data Science, CHRIST (Deemed to be University), Pune Lavasa Campus. This intra-departmental economics fest provided BA students with a dynamic platform to apply theoretical knowledge in practical and creative ways. The event was coordinated by Ms Merin Varghese and Dr Manjula Gaur.",
  },
  {
    name: 'Udan 2024',
    date: '1 March 2024',
    description: 'Udaan 2024, the intercollegiate fest organized by the Department of Arts at Christ College Pune, was a resounding success, drawing participation from 412 students representing approximately 50 colleges. The fest encompassed a diverse range of competitions, like Dance, Street Play, Mini MUN, Poetry recitation, Quiz, Rangoli making, Photo Collage and BGMI, providing a platform for students to exhibit their skills and passions. The event not only fostered healthy competition but also facilitated meaningful interactions and exchange of ideas among students from different academic institutions, serving as a melting pot of cultures, ideologies, and perspectives.',
  },
  {
    name: 'Eco Mania Economics Fest',
    image: ecoManiaFest,
    description: 'The Economics Fest, "Eco-Mania," conducted by the students of CHRIST (Deemed to be University) Lavasa Campus was a dynamic and successful event. It provided students and enthusiasts with a platform to engage in debates, seminars, and exhibitions focused on various economic topics. The fest encouraged critical thinking, creativity, and knowledge sharing, and served as a testament to the importance of promoting economic literacy and encouraging the study of economics.',
  },
];

export default function DepartmentOfArtsFestivalsPage() {
  return (
    <>
      <Seo
        title="Fests — Department of Arts"
        description="Fests organised by the Department of Arts at Christ College, Pune, including Udaan '26, ECOMANIA, and the Eco Mania Economics Fest."
      />
      <PageHeader
        title="Fests"
        breadcrumbs={[
          { label: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
          { label: 'Fests' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          The Department of Arts at Christ College, Pune organises intercollegiate fests and
          economics festivals throughout the academic year, giving students a platform to
          showcase their creativity, cultural talents and knowledge of economics.
        </p>

        <div className="mt-10">
          <CategorySection icon={GridIcon} title="Fests" items={FESTIVALS} />
        </div>
      </section>
    </>
  );
}
