import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import departmentBanner from '../../assets/images/3-academics-department-index-commerce/department-banner.JPG';

const TESTIMONIALS = [
  {
    name: 'Vaishnavi Nair',
    programme: 'B.Com, 2021–2024',
    quote: 'The faculty and staff were always approachable and supportive, creating a nurturing environment for learning.',
  },
  {
    name: 'Cijo Antu Athiyundhan',
    programme: 'B.Com, 2021–2024',
    quote: 'The college provided me with a strong academic foundation, exceptional guidance, and an atmosphere that fostered both personal and professional growth.',
  },
  {
    name: 'Alfred Jaisemon',
    programme: 'B.Com, 2021–2024',
    quote: 'My journey at Christ College, Pune, has been nothing short of extraordinary — a holistic learning experience that nurtured my academic knowledge.',
  },
];

export default function DepartmentIndexCommerce() {
  return (
    <>
      <Seo
        title="Commerce"
        description="Overview of the Department of Commerce at Christ College, Pune, offering the three-year B.Com programme, with testimonials from B.Com graduates."
      />
      <PageHeader title="Commerce" breadcrumbs={[{ label: 'Academics' }, { label: 'Commerce' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <img
            src={departmentBanner}
            alt="Department of Commerce"
            className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
          />
          <div>
            <h2>Department of Commerce</h2>
            <p className="mt-4 text-cc-text-body">
              The Department of Commerce offers the BCom (Bachelor of Commerce), a three-year
              undergraduate programme at Christ College, Pune.
            </p>
            <a
              href="/academics/department-of-commerce/department-page"
              className="mt-6 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2.5 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
            >
              Visit the Department of Commerce
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="text-center">Student Testimonials</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 shadow-cc-sm">
                <p className="font-semibold text-cc-text-heading">{t.name}</p>
                <p className="text-xs text-cc-text-muted-light">{t.programme}</p>
                <p className="mt-4 text-sm italic text-cc-text-muted-light">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
