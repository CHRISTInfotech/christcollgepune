import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import researchBanner from '../../assets/images/7-centres-and-cells-research-cell/research-banner.png';

const ACTIVITIES = [
  'Research project exhibitions and competitions',
  'Business stalls',
  'Research conferences, workshops and seminars',
  'Faculty Development Programmes (FDPs)',
  'Motivating faculty and students to publish in journals and conferences',
];

export default function ResearchCell() {
  return (
    <>
      <Seo
        title="Research Cell"
        description="The Research Cell at Christ College, Pune supervises research and development activities, fostering innovation, interdisciplinary collaboration and faculty PhD pursuits."
      />
      <PageHeader title="Research Cell" breadcrumbs={[{ label: 'Student Life' }, { label: 'Research Cell' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={researchBanner}
          alt="A research methodology seminar session at Christ College Pune"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10">
          <h2>About the Cell</h2>
          <p className="mt-4 text-cc-text-body">
            The Research Cell plays a pivotal role in the supervision and guidance of research
            and development activities at Christ College, Pune. Its key objectives include
            fostering innovation within the academic community, facilitating interdisciplinary
            research collaboration, and enhancing the institution&rsquo;s research output and
            impact.
          </p>
          <p className="mt-4 text-cc-text-body">
            The Research Cell is responsible for constructing new R&amp;D and research policies
            aligned with the institution&rsquo;s academic goals. It builds and maintains
            relationships with research centres, institutions, and industry organisations, and
            actively encourages faculty members to pursue Ph.D. studies and advance knowledge to
            address societal needs.
          </p>
          <p className="mt-4 text-cc-text-body">
            The Cell also conducts research and surveys to identify entrepreneurial
            opportunities for students, maintains records of research guides and associated
            researchers, and collaborates with department heads to organise conferences,
            workshops, seminars and Faculty Development Programmes.
          </p>

          <h3 className="mt-8 text-base">Activities</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {ACTIVITIES.map((item) => (
              <li key={item} className="flex items-center gap-2 text-cc-text-body">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
