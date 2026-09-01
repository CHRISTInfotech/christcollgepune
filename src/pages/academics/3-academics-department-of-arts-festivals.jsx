import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GridIcon, CalendarIcon } from '../../components/icons';
import ecoManiaFest from '../../assets/images/3-academics-department-of-arts-festivals/eco-mania-economics-fest.jpg';

const FESTIVALS = [
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
        title="Festivals — Department of Arts"
        description="Festivals organised by the Department of Arts at Christ College, Pune, including the intercollegiate fest Udan 2024 and the Eco Mania Economics Fest."
      />
      <PageHeader
        title="Festivals"
        breadcrumbs={[
          { label: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
          { label: 'Festivals' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
          Department Festivals
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          The Department of Arts at Christ College, Pune organises intercollegiate fests and
          economics festivals throughout the academic year, giving students a platform to
          showcase their creativity, cultural talents and knowledge of economics.
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
