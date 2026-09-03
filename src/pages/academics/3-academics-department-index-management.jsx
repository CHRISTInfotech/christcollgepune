import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import bbaProgramme from '../../assets/images/3-academics-department-index-management/bba-programme.png';
import { getTestimonialsByDepartment } from '../../data/testimonials';

const TESTIMONIALS = getTestimonialsByDepartment('management');

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
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row mb-10">
            <h2 className="text-center sm:text-left">Student Testimonials</h2>
            <Link
              to="/academics/student-testimonials"
              className="inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2 text-xs font-semibold text-white shadow-cc-xs transition-colors hover:bg-cc-primary-dark"
            >
              View All Testimonials &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
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
