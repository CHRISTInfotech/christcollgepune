import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const OBJECTIVES = [
  'To act as a link between the student, teachers and management',
  'To bring social awareness amongst students by conducting society-based activities',
  'To achieve the goal of personality development of the students',
  'To strengthen relationships among students through various healthy practices',
  'To organize educational and recreational activities for students',
  "To participate in developing the institute's educational projects and to promote it to students",
  'To organize an activity to recognise the efforts of students involved in organizing institute activities',
];

export default function StudentCouncilConstitution() {
  return (
    <>
      <Seo
        title="Student Council Constitution"
        description="The Constitution of the Student Council at Christ College, Pune — composition, seven stated objectives, member nomination procedure and one-year tenure."
      />
      <PageHeader
        title="Constitution"
        breadcrumbs={[
          { label: 'Student Life' },
          { label: 'Student Council', path: '/students/student-council' },
          { label: 'Constitution' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Composition</h2>
          <p className="mt-4 text-cc-text-body">
            The Student Council comprises student representatives chosen from all Undergraduate
            (UG) and Postgraduate (PG) programmes of the College. The Student Council is the apex
            student body, and the number of members may vary every academic year based on the new
            programmes and cells introduced by the College. The Student Council also includes one
            representative each from the Department of Physical Education, Student Cultural
            Association (SCA), Women&rsquo;s Cell and National Service Scheme (NSS), nominated by
            the Directors/Coordinators of the respective Centres or Offices.
          </p>
          <p className="mt-4 text-cc-text-body">
            The Student Council acts as a responsible and collaborative body contributing to the
            council&rsquo;s Vision, Mission, Core Values, and Graduate Attributes. It refrains
            from being an association or a bargaining agency of the students.
          </p>

          <h2 className="mt-10">Objectives</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {OBJECTIVES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-10">Member Nomination Procedure &amp; Tenure</h2>
          <p className="mt-4 text-cc-text-body">
            Any student fulfilling the eligibility criteria &mdash; such as academic performance,
            participation in departmental events and activities, holistic skills, and general
            standing &mdash; is eligible to apply for the council. The application form is
            submitted to the Student Council Director. The Faculty Coordinators of the Student
            Council then review the applications and interview the candidates; based on the
            personal interview and other achievements, two candidates are selected to represent
            the Council from each class.
          </p>
          <p className="mt-4 text-cc-text-body">
            The normal membership tenure is one year and is renewable based on fresh nomination.
            Nomination of senior students to the Council of the ensuing year takes place in May
            every year, while nominations of first-year students take place in September every
            year. At the end of every year, the incumbent Student Council hands over its functions
            to the new Student Council during the Investiture Ceremony.
          </p>
        </div>
      </section>
    </>
  );
}
