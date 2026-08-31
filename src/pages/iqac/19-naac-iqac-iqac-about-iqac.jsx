import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const FUNCTIONS = [
  'Establishing criteria and benchmarks for various academic and administrative activities',
  'Formulating and refining institutional policies aligned with quality goals',
  'Collecting feedback from students, faculty, parents, employers and community members',
  'Collaborating with departments to review and enhance curricula and add specialised programmes',
  'Organising faculty development programmes, training, seminars and workshops',
  'Fostering research and scholarly activity across the institution',
  'Conducting internal audits to assess compliance and identify areas for improvement',
  'Ensuring adequate resources and support for teaching and learning initiatives',
];

export default function AboutIqac() {
  return (
    <>
      <Seo
        title="About IQAC"
        description="About the Internal Quality Assurance Cell (IQAC) at Christ College, Pune — established July 2016 to drive continuous, proactive improvement in the institution's academic and administrative quality."
      />
      <PageHeader title="About IQAC" breadcrumbs={[{ label: 'IQAC' }, { label: 'About IQAC' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Internal Quality Assurance Cell</h2>
          <p className="mt-4 text-cc-text-body">
            The Internal Quality Assurance Cell (IQAC) at Christ College, Pune was established on
            2 July 2016. The primary responsibility of the IQAC is to develop a framework that
            enables deliberate, uniform and proactive enhancement in the overall functioning of the
            college.
          </p>
          <p className="mt-4 text-cc-text-body">
            The college&rsquo;s overarching vision, &lsquo;Enlighten to Excel&rsquo;, and its
            mission of forming leaders who are intellectually competent, spiritually mature,
            morally upright and socially responsible, guide the IQAC&rsquo;s work of building a
            consistent and sustainable culture of quality across academics and administration.
          </p>
          <p className="mt-4 text-cc-text-body">
            The cell aims to create a structure for the continuous improvement of institutional
            performance through innovative approaches that enhance staff effectiveness and student
            experience, while maintaining quality standards and coordinating quality-related
            activities across the campus.
          </p>

          <h3 className="mt-8 text-base">Key Functions</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {FUNCTIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-base">Contact</h3>
          <p className="mt-4 text-cc-text-body">
            Email:{' '}
            <a
              href="mailto:iqac@christcollegepune.org"
              className="text-cc-primary hover:underline"
            >
              iqac@christcollegepune.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
