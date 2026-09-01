import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { UsersIcon, CalendarIcon } from '../../components/icons';
import ccaaInauguration from '../../assets/images/3-academics-department-of-arts-association/inauguration-of-ccaa.jpg';

const EVENTS = [
  {
    name: 'Inauguration of CCAA',
    image: ccaaInauguration,
    description: 'The inauguration of the Christ College Arts Association (CCAA) at Christ College Pune was a momentous event that took place in the prestigious Chavara Hall. The atmosphere was filled with excitement and anticipation as students, faculty, and distinguished guests gathered to celebrate the birth of this vibrant cultural platform. With its mission to promote and nurture artistic talent, CCAA promises to be a beacon of creativity within the college community. The inauguration ceremony was marked by inspiring speeches, captivating performances, and a strong sense of unity among all present, setting the stage for a flourishing arts and culture scene at Christ College Pune.',
  },
];

export default function DepartmentOfArtsAssociationPage() {
  return (
    <>
      <Seo
        title="Association (CCAA) — Department of Arts"
        description="The Christ College Arts Association (CCAA) at the Department of Arts, Christ College Pune, and its inauguration in Chavara Hall."
      />
      <PageHeader
        title="Association"
        breadcrumbs={[
          { label: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
          { label: 'Association' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
          CCAA — Christ College Arts Association
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          The Christ College Arts Association (CCAA) was inaugurated in Chavara Hall with a
          mission to promote and nurture artistic talent within the college community. The
          association serves as a vibrant cultural platform, fostering unity, creativity and a
          flourishing arts and culture scene at Christ College, Pune.
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
