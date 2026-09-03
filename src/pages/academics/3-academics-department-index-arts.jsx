import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import departmentBanner from '../../assets/images/3-academics-department-index-arts/department-banner.jpg';
import baProgramme from '../../assets/images/3-academics-department-index-arts/ba-programme.png';

export default function DepartmentIndexArts() {
  return (
    <>
      <Seo
        title="Arts"
        description="Overview of the Department of Arts at Christ College, Pune, offering the BA programme at the Pune New Campus, with student achievements in sport."
      />
      <PageHeader title="Department of Arts" breadcrumbs={[{ label: 'Department of Arts' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <img
            src={departmentBanner}
            alt="Department of Arts"
            className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
          />
          <div>
            <h2>Department of Arts</h2>
            <p className="mt-4 text-cc-text-body">
              The Department of Arts at Christ College, Pune offers undergraduate education
              focused on developing intellectually competent and socially responsible
              individuals.
            </p>
            <h3 className="mt-6 text-base">Programmes Offered</h3>
            <div className="mt-3 flex items-center gap-4">
              <img
                src={baProgramme}
                alt="BA (Bachelor of Arts) programme"
                className="h-16 w-16 rounded-cc-md border border-cc-gray-200 object-cover"
              />
              <p className="text-sm text-cc-text-body">BA (Bachelor of Arts) &ndash; offered at the Pune New Campus</p>
            </div>
            <a
              href="/academics/department-of-arts/ba-department-programme-page"
              className="mt-6 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2.5 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
            >
              Visit the BA Programme Page
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="text-center">Our Achievements</h2>
          <div className="mx-auto mt-10 max-w-2xl rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 text-center shadow-cc-sm">
            <p className="text-sm text-cc-text-body">
              <span className="font-semibold text-cc-text-heading">Krishna Chauhan</span> (SYBA)
              &ndash; Selected to the PDZSC Cricket (Men) team to participate in the Savitribai
              Phule Pune University Inter Zonal Championship 2024&ndash;25.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
