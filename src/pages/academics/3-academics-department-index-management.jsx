import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import bbaProgramme from '../../assets/images/3-academics-department-index-management/bba-programme.png';
import testimonialAdesh from '../../assets/images/3-academics-department-index-management/testimonial-adesh-ghisare.jpg';
import testimonialNived from '../../assets/images/3-academics-department-index-management/testimonial-nived-menon.jpeg';

const TESTIMONIALS = [
  {
    name: 'Adesh Ghisare',
    programme: 'BBA (International Business), 2020–2023',
    photo: testimonialAdesh,
    quote:
      'I had the privilege of pursuing my BBA in International Business at Christ College Pune, and my experience was nothing short of extraordinary.',
  },
  {
    name: 'Nived P Menon',
    programme: 'BBA (International Business), 2021–2024',
    photo: testimonialNived,
    quote:
      'My time at Christ College Pune has been an amazing journey. The BBA International Business programme gave me a strong foundation.',
  },
];

export default function DepartmentIndexManagement() {
  return (
    <>
      <Seo
        title="Management"
        description="Overview of the Department of Management at Christ College, Pune, offering the BBA programme, with student testimonials from the BBA (International Business) course."
      />
      <PageHeader title="Department of Management" breadcrumbs={[{ label: 'Department of Management' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <img
            src={bbaProgramme}
            alt="Management (BBA) programme"
            className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
          />
          <div>
            <h2>Department of Management</h2>
            <p className="mt-4 text-cc-text-body">
              The Department of Management offers the Management (BBA &ndash; Bachelor of
              Business Administration) programme at Christ College, Pune.
            </p>
            <a
              href="/academics/department-of-management/department-page"
              className="mt-6 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2.5 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
            >
              Visit the Department of Management
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="text-center">Student Testimonials</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 shadow-cc-sm">
                <div className="flex items-center gap-4">
                  <img src={t.photo} alt={t.name} className="h-14 w-14 shrink-0 rounded-full border border-cc-gray-200 object-cover" />
                  <div>
                    <p className="font-semibold text-cc-text-heading">{t.name}</p>
                    <p className="text-xs text-cc-text-muted-light">{t.programme}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm italic text-cc-text-muted-light">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
