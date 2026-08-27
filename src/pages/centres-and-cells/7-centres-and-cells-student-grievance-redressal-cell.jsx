import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const OBJECTIVES = [
  'Ensure a harmonious campus environment for all staff members and students',
  'Provide equal opportunities for individuals to express their grievances without hindrance',
  'Facilitate a hassle-free mechanism for reporting and resolving grievances',
  'Contribute to the overall well-being and positive atmosphere of the institution',
  'Proactively work to prevent discrimination and ensure equitable treatment for all',
];

const FUNCTIONS = [
  'Receive and document grievances from students, faculty, and staff concerning academic and administrative matters',
  'Ensure strict confidentiality of grievance details and the identities of those reporting concerns',
  'Thoroughly assess and analyse grievances to determine their validity and scope',
  'Maintain open and effective communication with complainants throughout the resolution process',
  'Initiate timely and appropriate actions to address and resolve grievances, coordinating with relevant college departments',
  'Continuously review and recommend improvements to institutional policies and procedures',
  'Maintain comprehensive records of all grievances',
];

export default function StudentGrievanceRedressalCell() {
  return (
    <>
      <Seo
        title="Student Grievance Redressal Cell"
        description="The Student Grievance Redressal Cell at Christ College, Pune addresses academic and administrative grievances, including a dedicated mechanism for SC/ST students per UGC directives."
      />
      <PageHeader title="Student Grievance Redressal Cell" breadcrumbs={[{ label: 'Student Life' }, { label: 'Student Grievance Redressal Cell' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2>About the Cell</h2>
        <p className="mt-4 text-cc-text-body">
          Christ College, Pune places the utmost importance on the well-being and advancement
          of its students, staff members, and stakeholders. To uphold this commitment, the
          college has established a Student Grievance Cell at the institutional level. This
          committee is dedicated to addressing grievances, whether they pertain to academic or
          administrative matters.
        </p>
        <p className="mt-4 text-cc-text-body">
          In alignment with UGC directives aimed at preventing caste-based discrimination in
          higher education, the college has also integrated a complaint-lodging mechanism on
          its website specifically for SC/ST students and staff members. The Student Grievance
          Cell plays a pivotal role in ensuring the effectiveness of this initiative.
        </p>
        <p className="mt-4 text-cc-text-body">
          The core mission of the Grievance Redressal Committee is to serve as a link between
          students and the institution. Students are encouraged to submit their grievances
          directly to the committee coordinator, or through grievance boxes placed across the
          campus. The committee convenes as needed, promptly addressing grievances and taking
          appropriate action for their resolution.
        </p>

        <h3 className="mt-8 text-base">Objectives</h3>
        <ul className="mt-4 flex flex-col gap-2">
          {OBJECTIVES.map((item) => (
            <li key={item} className="flex items-start gap-2 text-cc-text-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-base">Functions</h3>
        <ul className="mt-4 flex flex-col gap-2">
          {FUNCTIONS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-cc-text-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
