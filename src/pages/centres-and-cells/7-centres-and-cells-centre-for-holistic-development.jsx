import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import chdBanner from '../../assets/images/7-centres-and-cells-centre-for-holistic-development/chd-banner.jpg';

export default function CentreForHolisticDevelopment() {
  return (
    <>
      <Seo
        title="Centre for Holistic Development"
        description="The Centre for Holistic Development at Christ College, Pune offers counselling and support for students' personal, academic and emotional well-being, nurturing mind, body and spirit."
      />
      <PageHeader title="Centre for Holistic Development" breadcrumbs={[{ label: 'Student Life' }, { label: 'Centre for Holistic Development' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={chdBanner}
          alt="Photo collage of student community service and wellness activities"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10">
          <h2>About the Centre</h2>
          <p className="mt-4 text-cc-text-body">
            Welcome to the Centre for Holistic Development, where the college believes in
            nurturing the mind, body and spirit to create a harmonious and balanced life. It is
            a dedicated space where students&rsquo; personal growth and well-being take centre
            stage. At Christ College, education is understood as more than academic excellence
            &mdash; it is about nurturing individuals into well-rounded, confident, and
            resilient beings.
          </p>
          <p className="mt-4 text-cc-text-body">
            The centre&rsquo;s counsellor is available to provide a compassionate listening ear,
            offer guidance, and extend comfort to students grappling with a diverse array of
            personal, academic, or emotional challenges. A key focus is on students who may have
            faced obstacles in realising their full potential due to motivational factors or
            other challenges; the centre works to develop remedial systems that help these
            students overcome their barriers and excel academically and personally.
          </p>

          <h3 className="mt-8 text-base">Vision</h3>
          <p className="mt-3 text-cc-text-body">
            A world where every individual achieves holistic well-being, fostering a harmonious
            global community.
          </p>

          <h3 className="mt-8 text-base">Mission</h3>
          <p className="mt-3 text-cc-text-body">
            To empower individuals to lead fulfilling and purpose-driven lives by providing
            comprehensive programmes and resources that encompass all aspects of well-being.
          </p>
        </div>
      </section>
    </>
  );
}
