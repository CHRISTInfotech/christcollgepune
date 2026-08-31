import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import bbaPoCo from '../../assets/academics/programme-outcomes/bba-po-co.pdf';
import bbaCaPoCo from '../../assets/academics/programme-outcomes/bba-ca-po-co.pdf';
import bbaIbPoCo from '../../assets/academics/programme-outcomes/bba-ib-po-co.pdf';
import bscCsPoCo from '../../assets/academics/programme-outcomes/bsc-cs-po-co.pdf';
import mscCsPoCo from '../../assets/academics/programme-outcomes/msc-cs-po-co.pdf';
import baArtsPoCo from '../../assets/academics/programme-outcomes/ba-arts-po-co.pdf';
import bcomPoCo from '../../assets/academics/programme-outcomes/bcom-po-co.pdf';
import mcomPoCo from '../../assets/academics/programme-outcomes/mcom-po-co.pdf';

const DEPARTMENTS = [
  {
    name: 'Department of Management',
    documents: [
      { name: 'BBA Programme', file: bbaPoCo },
      { name: 'BBA (Computer Applications)', file: bbaCaPoCo },
      { name: 'BBA (International Business)', file: bbaIbPoCo },
    ],
  },
  {
    name: 'Department of Science',
    documents: [
      { name: 'BSc (Computer Science)', file: bscCsPoCo },
      { name: 'MSc (Computer Science)', file: mscCsPoCo },
    ],
  },
  {
    name: 'Department of Arts',
    documents: [{ name: 'BA (Economics)', file: baArtsPoCo }],
  },
  {
    name: 'Department of Commerce',
    documents: [
      { name: 'B.Com', file: bcomPoCo },
      { name: 'M.Com', file: mcomPoCo },
    ],
  },
];

export default function ProgrammeOutcomesAndCourseOutcomes() {
  return (
    <>
      <Seo
        title="Programme Outcomes & Course Outcomes"
        description="Programme Outcomes (POs) and Course Outcomes (COs) for every UG and PG programme offered by Christ College, Pune's Departments of Management, Science, Arts, and Commerce."
      />
      <PageHeader
        title="Programme Outcomes & Course Outcomes"
        breadcrumbs={[{ label: 'Academics' }, { label: 'Programme Outcomes & Course Outcomes' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>About Programme &amp; Course Outcomes</h2>
          <p className="mt-4 text-cc-text-body">
            Christ College, Pune, a Christian minority institution affiliated to the Savitribai
            Phule Pune University, defines Programme Outcomes (POs) and Course Outcomes (COs) for
            every undergraduate and postgraduate programme it offers. These outcomes describe the
            knowledge, skills, and values students are expected to demonstrate on completion of a
            programme and its constituent courses, and guide curriculum design, teaching, and
            assessment across departments.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {DEPARTMENTS.map((dept) => (
            <div key={dept.name}>
              <h3 className="text-base">{dept.name}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {dept.documents.map((doc) => (
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
          ))}
        </div>
      </section>
    </>
  );
}
