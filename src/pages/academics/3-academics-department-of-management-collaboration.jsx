import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import collaborationBanner from '../../assets/images/3-academics-department-of-management-collaboration/collaboration-banner.jpg';

export default function DepartmentOfManagementCollaboration() {
  return (
    <>
      <Seo
        title="Collaboration"
        description="Collaboration overview for the Department of Management at Christ College, Pune, linking through to programme-wise collaboration details for BBA and MBA."
      />
      <PageHeader
        title="Collaboration"
        breadcrumbs={[{ label: 'Department of Management', path: '/academics/department-of-management/department-page' }, { label: 'Collaboration' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={collaborationBanner}
          alt="Department of Management collaborations"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10 max-w-2xl">
          <h2>Collaborations</h2>
          <p className="mt-4 text-cc-text-body">
            The Department of Management maintains collaborations organized by programme. Details
            for each are listed separately:
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-2 text-cc-text-body">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              BBA Collaborations
            </li>
            <li className="flex items-center gap-2 text-cc-text-body">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              MBA Collaborations
            </li>
          </ul>
          <p className="mt-4 text-sm text-cc-text-muted-light">
            The source page did not list individual partner organizations, purposes, or dates
            &mdash; only the two programme-wise collaboration sections above.
          </p>
        </div>
      </section>
    </>
  );
}
