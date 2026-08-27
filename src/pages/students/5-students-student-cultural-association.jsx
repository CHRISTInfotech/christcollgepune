import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import scaBanner from '../../assets/images/5-students-student-cultural-association/sca-banner.png';

export default function StudentCulturalAssociation() {
  return (
    <>
      <Seo
        title="Student Cultural Association"
        description="The Student Cultural Association (SCA) at Christ College, Pune is a platform for holistic development through dance, music, literature and theatre, giving students space to showcase their talents."
      />
      <PageHeader title="Student Cultural Association" breadcrumbs={[{ label: 'Student Life' }, { label: 'Student Cultural Association' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={scaBanner}
          alt="Students performing on stage at a Student Cultural Association event"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10">
          <h2>About SCA</h2>
          <p className="mt-4 text-cc-text-body">
            The Student Cultural Association (SCA) is a platform dedicated to fostering holistic
            development among students at Christ College, Pune. Aligned with the
            college&rsquo;s vision and mission, SCA aims to empower Christites by offering
            opportunities for personal growth and transformation.
          </p>
          <p className="mt-4 text-cc-text-body">
            Embracing a wide array of artistic expressions, such as dance, music, literature,
            and theatre, the Student Cultural Association recognizes the inherent beauty in all
            art forms. It wholeheartedly encourages students to step forward and showcase their
            talents, fostering an environment of creativity and self-improvement on campus.
          </p>
        </div>
      </section>
    </>
  );
}
