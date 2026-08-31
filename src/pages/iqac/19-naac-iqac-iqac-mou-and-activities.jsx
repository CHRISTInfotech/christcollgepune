import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import mouPoonaCollege from '../../assets/iqac/mou-poona-college.pdf';
import mouSagitech from '../../assets/iqac/mou-sagitech.pdf';
import mouSacredHeartCollege from '../../assets/iqac/mou-sacred-heart-college.pdf';
import mouStBerchmansCollege from '../../assets/iqac/mou-st-berchmans-college.pdf';
import mouHematite from '../../assets/iqac/mou-hematite.pdf';
import mouDataScienceLab from '../../assets/iqac/mou-data-science-lab.pdf';
import mouRubicon from '../../assets/iqac/mou-rubicon.pdf';

const DOCUMENTS = [
  { name: 'MoU — St. Berchmans College', file: mouStBerchmansCollege },
  { name: 'MoU — Rubicon', file: mouRubicon },
  { name: 'MoU — Hematite', file: mouHematite },
  { name: 'MoU — Poona College', file: mouPoonaCollege },
  { name: 'MoU — Data Science Lab', file: mouDataScienceLab },
  { name: 'MoU — Sagitech', file: mouSagitech },
  { name: 'MoU — Sacred Heart College', file: mouSacredHeartCollege },
];

export default function MouAndActivities() {
  return (
    <>
      <Seo
        title="MoU and Activities"
        description="Memorandums of Understanding (MoUs) signed by Christ College, Pune with academic and industry partners, and the activities conducted under them."
      />
      <PageHeader title="MoU and Activities" breadcrumbs={[{ label: 'IQAC' }, { label: 'MoU and Activities' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            Christ College, Pune enters into Memorandums of Understanding (MoUs) with academic
            institutions and industry partners to support student exchange, internships, guest
            lectures, joint research and collaborative activities. MoUs signed during the 2023–24
            academic year are listed below; similar records of MoUs are maintained for earlier
            academic years from 2018–19 onward.
          </p>
          <p className="mt-4 text-cc-text-body">
            Activities conducted under these collaborations during 2023–24 have included guest
            lectures, career-guidance sessions, an international webinar, a one-day workshop on
            human values, and student-led events such as an international conference and a
            technical hackathon.
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
