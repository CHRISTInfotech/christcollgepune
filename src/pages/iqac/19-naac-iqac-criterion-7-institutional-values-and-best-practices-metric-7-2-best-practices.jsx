import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import bestPractice1 from '../../assets/iqac/best-practice-1.pdf';
import bestPractice2 from '../../assets/iqac/best-practice-2.pdf';

const DOCUMENTS = [
  { name: 'Best Practice 1 — An Exemplar of Whole Person Development', file: bestPractice1 },
  { name: 'Best Practice 2 — Youth Sensitisation & Community Upliftment', file: bestPractice2 },
];

export default function Metric72BestPractices() {
  return (
    <>
      <Seo
        title="Metric 7.2 – Best Practices"
        description="NAAC Criterion 7.2 Best Practices at Christ College, Pune: Whole Person Development and Youth Sensitisation & Community Upliftment."
      />
      <PageHeader
        title="Metric 7.2 – Best Practices"
        breadcrumbs={[{ label: 'IQAC' }, { label: 'Metric 7.2 – Best Practices' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            Under NAAC Criterion 7 (Institutional Values and Best Practices), Christ College, Pune
            has documented two best practices that reflect the institution&rsquo;s distinctive
            approach to student formation and community engagement.
          </p>

          <h3 className="mt-8 text-base">
            Best Practice 1: An Exemplar of Whole Person Development — Unleashing Potential and
            Nurturing Excellence
          </h3>
          <p className="mt-4 text-cc-text-body">
            With the emergence of artificial intelligence and other disruptive technologies, the
            demands placed on graduates entering the world of work have changed considerably. In
            response, Christ College has articulated a set of graduate attributes covering
            knowledge, skills, attitudes, values and habits, aimed at providing a whole-person
            education to every student.
          </p>
          <p className="mt-4 text-cc-text-body">
            The practice follows a four-phased approach called ADER — Analyze, Design, Execute and
            Review — that involves all academic departments, centres, associations, committees and
            clubs of the college. The objectives of the practice are to:
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              'Develop students as whole persons by nurturing their intellectual, physical, professional, psychological, social and spiritual capacities for their future career and personal life',
              'Enhance holistic growth as articulated in the graduate attributes of the college, aligned with future skills identified by the World Economic Forum',
              'Instil resilience and confidence among students in the face of a volatile, uncertain and complex world',
              'Inculcate divergent thinking and creativity through holistic, discovery-based, discussion-based and analysis-based learning',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-base">
            Best Practice 2: Youth Sensitisation & Involvement in Community Upliftment
          </h3>
          <p className="mt-4 text-cc-text-body">
            As a mission-driven institution, Christ College, Pune educates, encourages and empowers
            students to make a substantial impact on society through awareness and community
            engagement activities. The objectives of this practice are to inculcate social
            sensitivity within the student community and to create a social impact in local
            underprivileged and marginalised communities.
          </p>
          <p className="mt-4 text-cc-text-body">
            Student volunteers lead activities such as the Anti-Tobacco Day Pledge Drive, a World
            AIDS Day street play conducted in partnership with the NGO Sarva Seva Sangh, awareness
            rallies on &lsquo;Say No to Alcohol &amp; Drugs&rsquo;, traffic safety and cleanliness,
            and participation in the &lsquo;Har Ghar Tiranga&rsquo; campaign, in which students
            contributed 450 photographs to a Guinness World Record attempt at Savitribai Phule Pune
            University on 15 August 2022. Students have also organised Unity Day and Constitution
            Day programmes to promote constitutional values and national integration.
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
        </div>
      </section>
    </>
  );
}
