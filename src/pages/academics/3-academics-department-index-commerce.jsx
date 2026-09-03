import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import departmentBanner from '../../assets/images/3-academics-department-index-commerce/department-banner.JPG';
import { getTestimonialsByDepartment } from '../../data/testimonials';

const TESTIMONIALS = getTestimonialsByDepartment('commerce');

export default function DepartmentIndexCommerce() {
  return (
    <>
      <Seo
        title="Commerce"
        description="Overview of the Department of Commerce at Christ College, Pune, offering the three-year B.Com programme, with testimonials from B.Com graduates."
      />
      <PageHeader title="Department of Commerce" breadcrumbs={[{ label: 'Department of Commerce' }]} />

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
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row mb-10">
            <h2 className="text-center sm:text-left">Student Testimonials</h2>
            <Link
              to="/academics/student-testimonials"
              className="inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2 text-xs font-semibold text-white shadow-cc-xs transition-colors hover:bg-cc-primary-dark"
            >
              View All Testimonials &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
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
