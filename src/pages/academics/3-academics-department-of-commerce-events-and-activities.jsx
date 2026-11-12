import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { GridIcon } from '../../components/icons';
import mouTally1 from '../../assets/images/gallery/mou-tally-addon-course/1.jpg';

const MOU_TALLY_IMAGES = [mouTally1];

const EVENTS = [
  {
    name: 'MOU-Based Online Add-on Course on Tally (Computerised Accounting) in Collaboration with YTDS',
    images: MOU_TALLY_IMAGES,
    description: 'The Department of Commerce, Christ College, Pune, in collaboration with YTDS, organised an Online Add-on Course on Tally (Computerised Accounting) for SY and TY B.Com. students. The course provided practical training in ledger creation, voucher entries, inventory management, and other essential accounting functions using Tally software. Through interactive sessions and regular assessments, students gained hands-on experience in digital accounting, bridging the gap between theoretical knowledge and industry practices. The initiative enhanced students’ technical competencies, digital literacy, and employability skills.',
  },
  {
    name: 'Online Certificate Course – Personality Development',
    description: 'The Department of Commerce encouraged SYBCOM students to participate in an online certificate course on “Personality Development” as part of their skill development and continuous learning. The activity provided students with an opportunity to enhance their personal and professional skills beyond the prescribed curriculum. The initiative encouraged self-learning, confidence building, continuous development, and the acquisition of additional certifications to support students’ academic and future career growth.',
  },
];

export default function DepartmentOfCommerceEventsAndActivitiesPage() {
  return (
    <>
      <Seo
        title="Events and Activities — Department of Commerce"
        description="Events and activities organised by the Department of Commerce, Christ College Pune — online and add-on courses including Tally and Personality Development."
      />
      <PageHeader
        title="Events and Activities"
        breadcrumbs={[
          { label: 'Department of Commerce', path: '/academics/department-of-commerce/department-page' },
          { label: 'Events and Activities' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
          Department Events &amp; Activities
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          Beyond the core curriculum, the Department of Commerce organises online and add-on
          courses that build practical, industry-relevant skills alongside the regular academic
          programme.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
              {item.images && <ImageCarousel images={item.images} alt={item.name} className="h-40 w-full" />}
              <div className="p-5">
                <h3 className="text-base">{item.name}</h3>
                <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
