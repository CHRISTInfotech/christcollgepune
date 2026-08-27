import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import athleticsBanner from '../../assets/images/5-students-physical-education/athletics-banner.png';

export default function PhysicalEducation() {
  return (
    <>
      <Seo
        title="Physical Education & Sports"
        description="The Department of Physical Education and Sports at Christ College, Pune nurtures students' mental, social and emotional development through sport, teamwork and healthy competition."
      />
      <PageHeader title="Physical Education & Sports" breadcrumbs={[{ label: 'Student Life' }, { label: 'Physical Education' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={athleticsBanner}
          alt="College basketball teams and staff posing together on the court"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10">
          <h2>About the Department</h2>
          <p className="mt-4 text-cc-text-body">
            The Department of Physical Education is a nurturing ground that promotes
            students&rsquo; mental, social, and emotional development through physical education
            and sports. The department aims to develop a comprehensive outlook in individuals
            &mdash; a strong civic position, moral qualities, a sense of responsibility, and the
            ability to successfully socialise and use physical activity to protect their health
            and support their professional pursuits.
          </p>

          <h3 className="mt-8 text-base">Vision</h3>
          <p className="mt-3 text-cc-text-body">
            A comprehensive Physical Education and Sports programme dedicated to creating an
            environment that allows students to understand and display cooperative social
            skills, teamwork, peer interaction, leadership, sportsmanship, positive attitude,
            self-esteem, and enjoyment &mdash; enabling students to shift their outlook on life
            towards positive thinking and healthy criticism.
          </p>

          <h3 className="mt-8 text-base">Mission</h3>
          <p className="mt-3 text-cc-text-body">
            Physical education and sports provide opportunities to develop qualities such as
            cooperation, respect for others, loyalty, sportsmanship and self-confidence &mdash;
            qualities that help a student become a good citizen.
          </p>
        </div>
      </section>
    </>
  );
}
