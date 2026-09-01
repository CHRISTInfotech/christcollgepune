import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GridIcon } from '../../components/icons';

export default function DepartmentOfCommerceActivitiesPage() {
  return (
    <>
      <Seo
        title="Activities — Department of Commerce"
        description="Webinars and other co-curricular activities organised by the Department of Commerce at Christ College, Pune."
      />
      <PageHeader
        title="Activities"
        breadcrumbs={[
          { label: 'Department of Commerce', path: '/academics/department-of-commerce/department-page' },
          { label: 'Activities' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          Beyond academics, the Department of Commerce organises co-curricular activities for
          students, grouped below by category.
        </p>

        <div className="mt-10">
          <h2 className="flex items-center gap-2.5">
            <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
            Webinar
          </h2>
          <p className="mt-4 text-sm italic text-cc-text-muted-light">
            No webinars published yet.
          </p>
        </div>
      </section>
    </>
  );
}
