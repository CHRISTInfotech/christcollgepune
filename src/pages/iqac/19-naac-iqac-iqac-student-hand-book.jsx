import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import handbook202324 from '../../assets/iqac/student-handbook-2023-24.pdf';
import handbook202223 from '../../assets/iqac/student-handbook-2022-23.pdf';
import handbook202122 from '../../assets/iqac/student-handbook-2021-22.pdf';
import handbook202021 from '../../assets/iqac/student-handbook-2020-21.pdf';
import handbook201920 from '../../assets/iqac/student-handbook-2019-20.pdf';
import handbook201819 from '../../assets/iqac/student-handbook-2018-19.pdf';
import handbook201718 from '../../assets/iqac/student-handbook-2017-18.pdf';

const DOCUMENTS = [
  { name: 'Student Handbook 2023–24', file: handbook202324 },
  { name: 'Student Handbook 2022–23', file: handbook202223 },
  { name: 'Student Handbook 2021–22', file: handbook202122 },
  { name: 'Student Handbook 2020–21', file: handbook202021 },
  { name: 'Student Handbook 2019–20', file: handbook201920 },
  { name: 'Student Handbook 2018–19', file: handbook201819 },
  { name: 'Student Handbook 2017–18', file: handbook201718 },
];

export default function StudentHandBook() {
  return (
    <>
      <Seo
        title="Student Handbook"
        description="Student Handbooks for Christ College, Pune across academic years, covering academic regulations, codes of conduct, facilities, and support services for enrolled students."
      />
      <PageHeader title="Student Handbook" breadcrumbs={[{ label: 'IQAC' }, { label: 'Student Handbook' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Student Handbook is issued each academic year and serves as a comprehensive guide
            for students, covering academic regulations, examination procedures, codes of conduct,
            campus facilities, and the support services available at Christ College, Pune.
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
