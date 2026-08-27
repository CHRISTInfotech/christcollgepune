import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

export default function AntiSexualHarassmentCell() {
  return (
    <>
      <Seo
        title="Anti-Sexual Harassment Cell"
        description="The Anti-Sexual Harassment Cell at Christ College, Pune works to create a safe, harassment-free environment for students, faculty and staff through policy, awareness campaigns and a confidential complaint mechanism."
      />
      <PageHeader title="Anti-Sexual Harassment Cell" breadcrumbs={[{ label: 'Student Life' }, { label: 'Anti-Sexual Harassment Cell' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>About the Cell</h2>
          <p className="mt-4 text-cc-text-body">
            The Anti-Sexual Harassment Cell at Christ College, Pune is a crucial initiative that
            works towards creating a safe and harassment-free environment for students, faculty,
            and staff. The cell is dedicated to preventing sexual harassment and misconduct, and
            ensures that the college environment is free from harassment and all members feel safe
            and supported.
          </p>
          <p className="mt-4 text-cc-text-body">
            The cell is responsible for implementing policies and guidelines aimed at preventing
            sexual harassment, and ensures that the college&rsquo;s policies on sexual harassment
            are kept up to date and in line with legal requirements. It conducts awareness
            campaigns, training sessions, and workshops to educate students, faculty, and staff
            about the various forms of sexual harassment and how to report incidents.
          </p>
          <p className="mt-4 text-cc-text-body">
            The cell also works towards creating a safe and supportive environment for those who
            report incidents of harassment, ensuring that their identities are protected and that
            they are not victimized further.
          </p>

          <h3 className="mt-8 text-base">Composition &amp; Complaint Handling</h3>
          <p className="mt-4 text-cc-text-body">
            The Anti-Sexual Harassment Cell consists of a group of members, including faculty,
            staff, and student representatives, trained to handle complaints of sexual harassment,
            investigate incidents, and take appropriate action against the perpetrator. The cell is
            also responsible for creating a complaint mechanism that is easily accessible to
            students, faculty, and staff, and works with local authorities, NGOs, and other
            organisations to build a wider understanding of the issue and ensure appropriate
            preventive measures are taken.
          </p>
        </div>
      </section>
    </>
  );
}
