import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import equalOpportunityCellPdf from '../../assets/studentlife/cells/Equal Opportunity Cell.pdf';

const OBJECTIVES = [
  'Promoting and ensuring Diversity, Equity and Inclusion among students, teaching and non-teaching staff and all the stakeholders in the campus.',
  'Preventing perception of discriminations thus budding healthy interpersonal relationships.',
  'Facilitating a barrier free procedure/formalities for admissions/registration for students belonging to the minority category of the society.',
  'Addressing grievances of students, teachers and non-teaching staff of the minority group.',
];

const ROLES = [
  'Safeguard the interests of students without any prejudice to their caste, creed, religion, language, ethnicity, gender and disability.',
  'Establishing measures to prevent and prohibit any form of discriminations in the campus.',
  'Ensuring that no one in the campus is harassed/victimized or treated differently in any facilities provided by the campus.',
  'Ensuring that students belonging to the minority group are provided with the permitted privileges by the University.',
  'Conducting workshops and seminars to promote Diversity, Equity and Inclusion.',
  'Ensuring that the website carries a note on relevant anti-discrimination measures adopted by the institution and the punishments awarded for breach thereof for benefit of public awareness.',
  'Approve the report activities of the cell and ensure its submissions to the authorities.',
];

export default function EqualOpportunityCell() {
  return (
    <>
      <Seo
        title="Equal Opportunity Cell"
        description="The Equal Opportunity Cell at Christ College, Pune promotes diversity, equity and inclusion, safeguarding the interests of minority-group students, teaching and non-teaching staff on campus."
      />
      <PageHeader title="Equal Opportunity Cell" breadcrumbs={[{ label: 'Student Life' }, { label: 'Equal Opportunity Cell' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Objectives</h2>
          <p className="mt-4 text-cc-text-body">
            The cell&rsquo;s objectives are to supervise the efficient execution of the
            institution&rsquo;s minority group policy, to offer academic, financial, social, and
            other advice and counseling, and to promote diversity on campus.
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {OBJECTIVES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-10">Roles &amp; Responsibilities</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {ROLES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-base">Documents</h3>
          <a
            href={equalOpportunityCellPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">
                Equal Opportunity Cell / Minority / SC-ST / OBC Cell
              </span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
