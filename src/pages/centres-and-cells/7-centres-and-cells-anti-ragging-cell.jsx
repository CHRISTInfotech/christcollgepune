import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import antiRaggingCellPdf from '../../assets/studentlife/cells/Anti- Ragging Cell.pdf';
import antiRaggingFormPdf from '../../assets/studentlife/cells/Anti-Ragging Undertaking Form.pdf';

const DOCUMENTS = [
  { name: 'Anti-Ragging Cell', file: antiRaggingCellPdf },
  { name: 'Anti-Ragging Form', file: antiRaggingFormPdf },
];

const OBJECTIVES = [
  'Ensure discipline amongst students in the classrooms and within the college campus',
  'Improve senior-junior relations',
  'Support the holistic development of students',
  'Continuously monitor the behaviour of students',
  "Take preventive measures to maintain a 'Ragging Free Campus'",
  'Educate students about UGC guidelines, cell measures and consequences of ragging',
];

export default function AntiRaggingCell() {
  return (
    <>
      <Seo
        title="Anti-Ragging Cell"
        description="The Anti-Ragging Cell at Christ College, Pune was established as per UGC regulations to maintain a ragging-free campus, with an Anti-Ragging Squad and regular awareness programmes."
      />
      <PageHeader title="Anti-Ragging Cell" breadcrumbs={[{ label: 'Student Life' }, { label: 'Anti-Ragging Cell' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>About the Cell</h2>
          <p className="mt-4 text-cc-text-body">
            Ragging is a social evil causing an ill effect on the student community, with
            psychological and physical effects on a student. The menace of ragging, which corrodes
            the spirit of education, needs to be curbed. Christ College, Pune has established the
            Anti-Ragging Cell as per the regulations of the University Grants Commission to
            maintain a ragging-free campus.
          </p>
          <p className="mt-4 text-cc-text-body">
            The Anti-Ragging Cell ensures discipline amongst students in the classrooms and within
            the college campus. The aim is to improve senior-junior relations and make the college
            a better place for the holistic development of students. For this purpose, an
            Anti-Ragging Squad has also been formed to continuously monitor the behaviour of
            students and take preventive measures to maintain a &lsquo;Ragging Free Campus&rsquo;.
          </p>
          <p className="mt-4 text-cc-text-body">
            Awareness programmes are conducted regularly by the cell to educate students about UGC
            guidelines on curbing the menace of ragging, measures taken by the cell, consequences
            of ragging, and punishments for those found guilty.
          </p>

          <h3 className="mt-8 text-base">Objectives</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {OBJECTIVES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

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
