import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { Link } from 'react-router-dom';
import councilBanner from '../../assets/images/5-students-student-council/council-banner.png';

export default function StudentCouncil() {
  return (
    <>
      <Seo
        title="Student Council"
        description="The Student Council is the apex student body at Christ College, Pune, integrating academic and co-curricular life and linking students, faculty and administration. Read its role and view the Constitution."
      />
      <PageHeader title="Student Council" breadcrumbs={[{ label: 'Student Life' }, { label: 'Student Council' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={councilBanner}
          alt="Student Council members of Christ College Pune on stage at a college event"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10">
          <h2>About the Council</h2>
          <p className="mt-4 text-cc-text-body">
            The Student Council is the apex body of the college which is responsible for the
            welfare of students in the college by ensuring the smooth functioning of all the
            activities and student bodies. It is a body of the students, by the students and
            for the students.
          </p>
          <p className="mt-4 text-cc-text-body">
            It integrates the academic and co-curricular spheres of students&rsquo; lives,
            linking the out-of-class experience to the academic mission of the Institute and
            incorporating students&rsquo; intellectual, public service, and leadership interests
            with their future aspirations. It collaborates with students, faculty,
            administrators, and other partners both inside and outside of the Christ College
            Pune community to ease and complement the quality of life and learning for students.
          </p>

          <Link
            to="/students/student-council/constitution"
            className="mt-6 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2.5 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
          >
            Read the Constitution
          </Link>
        </div>
      </section>
    </>
  );
}
