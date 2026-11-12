import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { UsersIcon, CalendarIcon } from '../../components/icons';
import ccca from '../../assets/images/3-academics-department-of-commerce-association/ccca.jpg';
import textbookTamasha1 from '../../assets/images/gallery/textbook-tamasha-ccca/1.jpg';
import textbookTamasha2 from '../../assets/images/gallery/textbook-tamasha-ccca/2.jpg';
import textbookTamasha3 from '../../assets/images/gallery/textbook-tamasha-ccca/3.jpg';
import treasureHunt1 from '../../assets/images/gallery/treasure-hunt-ccca/1.jpg';
import treasureHunt2 from '../../assets/images/gallery/treasure-hunt-ccca/2.jpg';

const TEXTBOOK_TAMASHA_IMAGES = [textbookTamasha1, textbookTamasha2, textbookTamasha3];
const TREASURE_HUNT_IMAGES = [treasureHunt1, treasureHunt2];

const EVENTS = [
  {
    name: 'Textbook Tamasha',
    images: TEXTBOOK_TAMASHA_IMAGES,
    description: 'An engaging student activity, "Textbook Tamasha," was arranged for Commerce students, aiming at promoting creativity, teamwork, and experiential learning. The event provided students with an opportunity to explore academic concepts through fun-filled and interactive activities, encouraging active participation, collaboration, and learning beyond traditional classroom methods.',
  },
  {
    name: 'Treasure Hunt',
    images: TREASURE_HUNT_IMAGES,
    description: 'Treasure Hunt activity was conducted to encourage teamwork, problem-solving, logical thinking, and collaboration among students. The activity involved solving clues and completing challenges to discover hidden treasures, creating an atmosphere of excitement, friendly competition, and active participation.',
  },
];

export default function DepartmentOfCommerceAssociationPage() {
  return (
    <>
      <Seo
        title="Association (CCCA) — Department of Commerce"
        description="The Christ College Commerce Association (CCCA) at the Department of Commerce, Christ College Pune — Textbook Tamasha, Treasure Hunt and other co-curricular activities."
      />
      <PageHeader
        title="Association"
        breadcrumbs={[
          { label: 'Department of Commerce', path: '/academics/department-of-commerce/department-page' },
          { label: 'Association' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <img src={ccca} alt="CCCA — Christ College Commerce Association" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm" />

          <div>
            <h2 className="flex items-center gap-2.5">
              <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
              About CCCA
            </h2>
            <p className="mt-4 text-cc-text-body">
              The Christ College Commerce Association (CCCA) plays a vital role in encouraging
              student participation beyond the classroom. Throughout the academic year, the
              association organised various activities such as workshops, competitions, guest
              lectures, and interactive sessions aimed at enhancing students&rsquo; knowledge of
              commerce and business practices. These activities provided a platform for students
              to showcase their talents, develop leadership abilities, and improve teamwork and
              communication skills. By actively engaging students in meaningful co-curricular
              initiatives, CCCA contributed significantly to their holistic development and helped
              them gain practical exposure relevant to the dynamic world of commerce.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="flex items-center gap-2.5">
            <CalendarIcon className="h-6 w-6 text-cc-primary shrink-0" />
            CCCA Activities
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
                <ImageCarousel images={item.images} alt={item.name} className="h-40 w-full" />
                <div className="p-5">
                  <h3 className="text-base">{item.name}</h3>
                  <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
