import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import nirmitiBanner from '../../assets/images/7-centres-and-cells-nirmiti-start-up-and-innovation-centre/nirmiti-banner.png';

export default function NirmitiStartUpAndInnovationCentre() {
  return (
    <>
      <Seo
        title="Nirmiti Start-Up and Innovation Centre"
        description="Nirmiti, the Start-Up and Innovation Centre at Christ College, Pune, launched on 3 December 2022, cultivates student entrepreneurship, mentorship and networking with investors."
      />
      <PageHeader title="Nirmiti Start-Up and Innovation Centre" breadcrumbs={[{ label: 'Student Life' }, { label: 'Nirmiti Start-Up and Innovation Centre' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={nirmitiBanner}
          alt="Award ceremony on stage at a Nirmiti Start-Up and Innovation Centre event"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wide text-cc-primary">
            Launched 3 December 2022
          </span>
          <h2>About Nirmiti</h2>
          <p className="mt-4 text-cc-text-body">
            Welcome to Nirmiti, the Start-Up and Innovation Centre launched by Christ College,
            Pune. As a pivotal milestone in the college&rsquo;s journey, the Nirmiti Centre
            embodies its commitment to fostering innovation and empowering the entrepreneurial
            spirit among students.
          </p>
          <p className="mt-4 text-cc-text-body">
            At the Nirmiti Centre, the power of innovative ideas and their potential to
            transform into groundbreaking ventures is recognised. The mission is to provide a
            nurturing environment that encourages students to explore their creativity and turn
            their visionary concepts into reality &mdash; promoting innovation without bias, in
            a space where all young minds can thrive.
          </p>
          <p className="mt-4 text-cc-text-body">
            The centre serves as a vibrant hub for networking, offering students the opportunity
            to connect with fellow entrepreneurs, seasoned professionals, and potential
            investors &mdash; providing avenues for collaboration, mentorship, funding access,
            visibility, and new business prospects.
          </p>

          <h3 className="mt-8 text-base">Vision</h3>
          <p className="mt-3 text-cc-text-body">
            To inspire and equip students with the skills, mindset, and network to pursue their
            entrepreneurial passions and create innovative solutions for the world&rsquo;s most
            pressing problems.
          </p>

          <h3 className="mt-8 text-base">Mission</h3>
          <p className="mt-3 text-cc-text-body">
            To foster a culture of creativity and collaboration among students, faculty, and
            industry partners, and to provide them with the resources, guidance, and
            opportunities to develop and implement innovative solutions for real-world
            challenges.
          </p>
        </div>
      </section>
    </>
  );
}
