import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { UsersIcon } from '../../components/icons';
import ccca from '../../assets/images/3-academics-department-of-commerce-association/ccca.jpg';

export default function DepartmentOfCommerceAssociationPage() {
  return (
    <>
      <Seo
        title="Association (CCCA) — Department of Commerce"
        description="The Christ College Commerce Association (CCCA) at the Department of Commerce, Christ College Pune."
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
              CCCA Activities
            </h2>
            <p className="mt-4 text-cc-text-body">
              The Christ College Commerce Association (CCCA) acts as a primary vehicle for
              student-led co-curricular engagement within the department throughout the academic
              year. By organizing a continuous series of workshops, domain-specific competitions,
              guest lectures, and interactive forums, the association extends learning beyond
              traditional classroom boundaries. Its initiatives are structured to build
              foundational skills in leadership, communication, and team management, helping
              commerce students develop practical competencies, professional confidence, and
              holistic industry awareness tailored to modern business environments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
