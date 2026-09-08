import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

export default function DepartmentOfCommerceFacultyPublicationsPage() {
  return (
    <>
      <Seo
        title="Seminars/ Corporate Connect — Department of Commerce"
        description="Seminars and corporate connect sessions from the Department of Commerce at Christ College, Pune."
      />
      <PageHeader
        title="Seminars/ Corporate Connect"
        breadcrumbs={[
          { label: 'Department of Commerce', path: '/academics/department-of-commerce/department-page' },
          { label: 'Seminars/ Corporate Connect' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-sm italic text-cc-text-muted-light">
          No seminars or corporate connect sessions published yet.
        </p>
      </section>
    </>
  );
}
