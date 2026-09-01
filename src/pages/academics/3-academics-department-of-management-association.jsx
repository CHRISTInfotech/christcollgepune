import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { UsersIcon } from '../../components/icons';
import ccma from '../../assets/images/3-academics-department-of-management-association/ccma.jpg';

export default function DepartmentOfManagementAssociationPage() {
  return (
    <>
      <Seo
        title="Association (CCMA) — Department of Management"
        description="The Christ College Management Association (CCMA) at the Department of Management, Christ College Pune."
      />
      <PageHeader
        title="Association"
        breadcrumbs={[
          { label: 'Department of Management', path: '/academics/department-of-management/department-page' },
          { label: 'Association' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <img src={ccma} alt="CCMA — Christ College Management Association" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm" />

          <div>
            <h2 className="flex items-center gap-2.5">
              <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
              CCMA — Christ College Management Association
            </h2>
            <p className="mt-4 text-cc-text-body">
              Annually, the Christ College Management Association (CCMA) in Pune is dedicated to
              empowering students to shape their destinies. Through an array of competitions, CCMA
              enriches knowledge, hones competencies, instills life skills, and fosters values, all
              in accordance with its vision of &lsquo;Inspire, Connect, and Innovate.&rsquo;
            </p>
            <p className="mt-4 text-cc-text-body">
              Every Thursday and Saturday, the association orchestrates a variety of events
              centered around Entrepreneurship Development, Public Relations, Human Resources,
              Finance, Marketing, Quiz, and Best Managerial skills. Preliminary rounds are
              conducted at the class level, with the most promising teams advancing to the
              exhilarating semi-finals and finals, captivating a vast audience on stage.
            </p>

            <h3 className="mt-8 text-base font-bold text-cc-text-heading">CCMA 2024</h3>
            <p className="mt-3 text-cc-text-body">
              The CCMA hosts a series of intra-college competitions throughout the academic year
              spanning Entrepreneurship Development, Public Relations, Human Resources, Finance,
              Marketing, Quiz, and Best Managerial skills, giving every class the opportunity to
              compete from the preliminary rounds through to the semi-finals and finals held on
              stage in front of the department.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
