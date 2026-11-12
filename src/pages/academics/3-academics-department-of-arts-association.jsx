import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { UsersIcon, CalendarIcon } from '../../components/icons';
import ccaaInauguration from '../../assets/images/3-academics-department-of-arts-association/inauguration-of-ccaa.jpg';
import spandan1 from '../../assets/images/gallery/spandan/1.jpg';
import spandan2 from '../../assets/images/gallery/spandan/2.jpg';
import spandan3 from '../../assets/images/gallery/spandan/3.jpg';
import spandan4 from '../../assets/images/gallery/spandan/4.jpg';
import spandan5 from '../../assets/images/gallery/spandan/5.jpg';
import spandan6 from '../../assets/images/gallery/spandan/6.jpg';

const SPANDAN_IMAGES = [spandan1, spandan2, spandan3, spandan4, spandan5, spandan6];

const EVENTS = [
  {
    name: 'Inauguration of CCAA',
    image: ccaaInauguration,
    description: 'The inauguration of the Christ College Arts Association (CCAA) at Christ College Pune was a momentous event that took place in the prestigious Chavara Hall. The atmosphere was filled with excitement and anticipation as students, faculty, and distinguished guests gathered to celebrate the birth of this vibrant cultural platform. With its mission to promote and nurture artistic talent, CCAA promises to be a beacon of creativity within the college community. The inauguration ceremony was marked by inspiring speeches, captivating performances, and a strong sense of unity among all present, setting the stage for a flourishing arts and culture scene at Christ College Pune.',
  },
  {
    name: 'Spandan — Campus Connect Programme',
    images: SPANDAN_IMAGES,
    description: 'SPANDAN – Campus Connect Programme, an outreach initiative was conducted at four junior colleges: Stella Maris Junior College, St. Felix Junior College, Don Bosco Junior College and St. Arnold’s Junior College. The programme featured interactive activities, quizzes, creative competitions and team-based engagements conducted by the department’s student clubs. It provided junior college students with an opportunity to showcase their talents, enhance their confidence and experience collaborative learning. The initiative also helped Christ College students develop their leadership, communication and organisational skills while fostering meaningful connections with the wider student community.',
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
          The <strong>Christ College Arts Association (CCAA)</strong> is a vibrant student association of the
          Department of Arts, fostering creativity, collaboration, intellectual engagement, and
          holistic development. BA students are divided into four groups, namely <strong>Shakespeareans,
          Freudians, Aristotelians, and Smithians</strong>, each promoting team spirit and active
          participation. Weekly activities, competitions, discussions, and interactive sessions
          encourage critical thinking, communication skills, leadership, and experiential
          learning, making academic engagement enriching and enjoyable.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
              {item.images ? (
                <ImageCarousel images={item.images} alt={item.name} className="h-40 w-full" />
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
                <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
