import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const CRITERIA = [
  'Extended Profile',
  'Criterion 1 – Curricular Aspects',
  'Criterion 2 – Teaching, Learning & Evaluation',
  'Criterion 3 – Research, Innovation and Extension',
  'Criterion 4 – Infrastructure and Learning Resources',
  'Criterion 5 – Student Support and Progression',
  'Criterion 6 – Governance, Leadership and Management',
  'Criterion 7 – Institutional Values and Best Practices',
];

export default function DvvClarification() {
  return (
    <>
      <Seo
        title="DVV Clarification"
        description="Data Validation and Verification (DVV) clarification documents submitted by Christ College, Pune to NAAC, organised by criteria."
      />
      <PageHeader title="DVV Clarification" breadcrumbs={[{ label: 'NAAC' }, { label: 'DVV Clarification' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            As part of the NAAC accreditation process, Christ College, Pune submits Data Validation
            and Verification (DVV) clarification documents in response to queries raised by NAAC on
            the quantitative and qualitative metrics of its Self Study Report. These clarifications
            are organised under the following NAAC criteria:
          </p>

          <ul className="mt-4 flex flex-col gap-2">
            {CRITERIA.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
