import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import bestPractice1 from '../../assets/iqac/best-practice-1.pdf';
import bestPractice2 from '../../assets/iqac/best-practice-2.pdf';

const DOCUMENTS = [
  { name: 'Best Practice 1 — Whole Person Development', file: bestPractice1 },
  { name: 'Best Practice 2 — Community Upliftment', file: bestPractice2 },
];

export default function Metric72BestPractices() {
  return (
    <>
      <Seo
        title="Best Practices"
        description="NAAC Criterion 7.2 Best Practices at Christ College, Pune: Whole Person Development and Youth Sensitisation & Community Upliftment."
      />
      <PageHeader
        title="Best Practices"
        breadcrumbs={[{ label: 'IQAC' }, { label: 'Best Practices' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            Under NAAC Criterion 7 (Institutional Values and Best Practices), Christ College, Pune
            has institutionalised two core best practices reflecting the college&rsquo;s commitment to
            whole-person student formation and proactive community engagement.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {DOCUMENTS.map((doc) => (
              <a
                key={doc.name}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <DownloadIcon width={20} height={20} />
                </span>
                <span>
                  <span className="block font-semibold text-cc-text-heading">{doc.name}</span>
                  <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h4 className="font-semibold text-cc-text-heading text-base">
                Best Practice 1: An Exemplar of Whole Person Development — Unleashing Potential and Nurturing Excellence
              </h4>
              <p className="mt-3 text-sm text-cc-text-body leading-relaxed">
                Christ College has articulated a set of graduate attributes covering knowledge, skills, attitudes, values,
                and habits aimed at providing a whole-person education. The practice follows a four-phased approach called
                ADER (Analyze, Design, Execute, Review) involving all academic departments, centres, and student clubs.
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {[
                  'Nurturing intellectual, physical, professional, psychological, social, and spiritual capacities.',
                  'Aligning student skills with global competencies identified by the World Economic Forum.',
                  'Inculcating divergent thinking and creativity through holistic discovery and discussion-based learning.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-cc-text-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h4 className="font-semibold text-cc-text-heading text-base">
                Best Practice 2: Youth Sensitisation & Involvement in Community Upliftment
              </h4>
              <p className="mt-3 text-sm text-cc-text-body leading-relaxed">
                Educates, encourages, and empowers students to create social impact through awareness and outreach
                initiatives in underprivileged communities. Activities include Anti-Tobacco drives, World AIDS Day street
                plays with Sarva Seva Sangh, substance-abuse prevention rallies, traffic safety drives, and constitutional
                awareness programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
