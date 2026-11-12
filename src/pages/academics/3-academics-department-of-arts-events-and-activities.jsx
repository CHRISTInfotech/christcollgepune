import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { GridIcon, CalendarIcon } from '../../components/icons';
import ptm1 from '../../assets/images/gallery/ptm-syba-tyba/1.jpg';
import ptm2 from '../../assets/images/gallery/ptm-syba-tyba/2.jpg';
import freshers1 from '../../assets/images/gallery/freshers-day-arts/1.jpg';
import freshers2 from '../../assets/images/gallery/freshers-day-arts/2.jpg';
import freshers3 from '../../assets/images/gallery/freshers-day-arts/3.jpg';
import freshers4 from '../../assets/images/gallery/freshers-day-arts/4.jpg';
import freshers5 from '../../assets/images/gallery/freshers-day-arts/5.jpg';
import freshers6 from '../../assets/images/gallery/freshers-day-arts/6.jpg';
import beyondClassroom1 from '../../assets/images/gallery/beyond-the-classroom-odyssey/1.jpg';
import beyondClassroom2 from '../../assets/images/gallery/beyond-the-classroom-odyssey/2.jpg';
import beyondClassroom3 from '../../assets/images/gallery/beyond-the-classroom-odyssey/3.jpg';
import beyondClassroom4 from '../../assets/images/gallery/beyond-the-classroom-odyssey/4.jpg';
import industrialVisit1 from '../../assets/images/gallery/industrial-visit-don-bosco-prafulta/1.jpg';
import industrialVisit2 from '../../assets/images/gallery/industrial-visit-don-bosco-prafulta/2.jpg';
import industrialVisit3 from '../../assets/images/gallery/industrial-visit-don-bosco-prafulta/3.jpg';
import kvkVisit1 from '../../assets/images/gallery/industrial-visit-krishi-vigyan-kendra/1.jpg';

const PTM_IMAGES = [ptm1, ptm2];
const FRESHERS_IMAGES = [freshers1, freshers2, freshers3, freshers4, freshers5, freshers6];
const BEYOND_CLASSROOM_IMAGES = [beyondClassroom1, beyondClassroom2, beyondClassroom3, beyondClassroom4];
const INDUSTRIAL_VISIT_IMAGES = [industrialVisit1, industrialVisit2, industrialVisit3];
const KVK_VISIT_IMAGES = [kvkVisit1];

const EVENTS = [
  {
    name: 'Freshers’ Day',
    images: FRESHERS_IMAGES,
    description: 'A vibrant Carnival-themed Freshers’ Day was organised by the SY and TY students to warmly welcome the freshers into the college community. The celebration featured a lively atmosphere of fun, creativity, music, and camaraderie, making it a memorable beginning to their college journey.',
  },
  {
    name: 'Parent-Teacher Meeting (SYBA & TYBA)',
    images: PTM_IMAGES,
    description: 'A Parent-Teacher Meeting for SYBA and TYBA students was organised to foster meaningful interaction between parents and faculty members, providing an opportunity to discuss students’ academic progress, attendance, performance, and overall development while strengthening the partnership between parents and the institution.',
  },
  {
    name: 'Beyond the Classroom: A Cinematic Experience — Odyssey',
    images: BEYOND_CLASSROOM_IMAGES,
    description: 'A field trip to Phoenix Mall was organised for FYBA students to watch the film Odyssey, providing them with an engaging cinematic experience beyond the classroom. Following the screening, students were assigned to write film reviews, encouraging critical thinking, analytical skills, and creative expression through film appreciation.',
  },
  {
    name: 'Industrial Visit — Don Bosco Prafulta',
    images: INDUSTRIAL_VISIT_IMAGES,
    description: 'An industrial visit to Don Bosco Prafulta, Matunga, Mumbai, was organised for students of the Department of Arts under the theme “Learning Beyond the Classroom.” A special session by Dr Ajoy Fernandes, SDB, explored the interconnections between psychology, personality, economics, and professional practice, offering students valuable insights into the practical applications of classroom learning.',
  },
  {
    name: 'Industrial Visit — Krishi Vigyan Kendra',
    images: KVK_VISIT_IMAGES,
    description: 'An industrial visit to Krishi Vigyan Kendra (KVK), Baramati, was organised to provide students with practical exposure to modern agricultural practices and rural development initiatives, familiarising them with modern farming techniques, agricultural innovations, farmer training programmes, sustainable agriculture, and the role of technology in strengthening the agricultural sector.',
  },
];

export default function DepartmentOfArtsEventsAndActivitiesPage() {
  return (
    <>
      <Seo
        title="Events and Activities — Department of Arts"
        description="Events and activities organised by the Department of Arts, Christ College Pune — Freshers' Day, Parent-Teacher Meeting, Beyond the Classroom, and industrial visits."
      />
      <PageHeader
        title="Events and Activities"
        breadcrumbs={[
          { label: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
          { label: 'Events and Activities' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
          Department Events &amp; Activities
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          Beyond the core curriculum, the Department of Arts organises a range of events and
          activities — from campus celebrations and parent engagement to industrial visits and
          experiential learning trips — that enrich student life and connect classroom learning
          with the wider world.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
              <ImageCarousel images={item.images} alt={item.name} className="h-40 w-full" />
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
