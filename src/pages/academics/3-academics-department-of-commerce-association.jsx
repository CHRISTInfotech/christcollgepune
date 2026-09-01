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
              CCCA — Christ College Commerce Association
            </h2>
            <p className="mt-4 text-cc-text-body">
              The Christ College Commerce Association (CCCA) is a vital platform for commerce
              students to extend their academic knowledge beyond classrooms and immerse themselves
              in real-life corporate scenarios. Throughout the year, CCCA hosts various
              activities, offering students opportunities to showcase their talents, enhance
              analytical and decision-making skills, and bridge the gap between theory and
              practice.
            </p>
            <p className="mt-4 text-cc-text-body">
              The regular meetings and engaging activities, such as presentations, group
              discussions, debates, and competitions, contribute significantly to the overall
              development of students. These activities focus on improving academic and creative
              writing proficiency, communication skills, and personality development.
            </p>
            <p className="mt-4 text-cc-text-body">
              The scope of the association includes organizing workshops and seminars on
              commerce-related topics, conducting events and competitions to promote interest and
              understanding among students, and providing networking opportunities with
              professionals in the field.
            </p>
            <p className="mt-4 text-cc-text-body">
              The series of events conducted by CCCA — such as &ldquo;Synergy in Action,&rdquo;
              &ldquo;Puzzle Verse,&rdquo; &ldquo;Amazing Amble,&rdquo; and &ldquo;Shark
              Tank,&rdquo; among many others — demonstrate the association&rsquo;s commitment to
              fostering collaboration, critical thinking, creativity, and problem-solving skills
              among its members, ranging from financial simulations to strategic problem-solving
              and verbal challenges.
            </p>
            <p className="mt-4 text-cc-text-body">
              In essence, the Christ College Commerce Association plays a crucial role in shaping
              the career prospects of commerce students, providing them with a holistic learning
              experience and preparing them for success in the dynamic field of commerce.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
