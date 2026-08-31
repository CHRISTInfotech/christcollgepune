import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import initiatives202223 from '../../assets/iqac/quality-initiative-2022-23.pdf';
import initiatives202122 from '../../assets/iqac/quality-initiative-2021-22.pdf';
import initiatives202021 from '../../assets/iqac/quality-initiative-2020-21.pdf';
import initiatives201920 from '../../assets/iqac/quality-initiative-2019-20.pdf';
import initiatives201819 from '../../assets/iqac/quality-initiative-2018-19.pdf';

const DOCUMENTS = [
  { name: 'IQAC Quality Initiatives 2022–23', file: initiatives202223 },
  { name: 'IQAC Quality Initiatives 2021–22', file: initiatives202122 },
  { name: 'IQAC Quality Initiatives 2020–21', file: initiatives202021 },
  { name: 'IQAC Quality Initiatives 2019–20', file: initiatives201920 },
  { name: 'IQAC Quality Initiatives 2018–19', file: initiatives201819 },
];

export default function QualityInitiative() {
  return (
    <>
      <Seo
        title="Quality Initiative"
        description="Year-wise reports on the Internal Quality Assurance Cell's quality initiatives at Christ College, Pune, covering academic, administrative and student-focused improvement activities."
      />
      <PageHeader title="Quality Initiative" breadcrumbs={[{ label: 'IQAC' }, { label: 'Quality Initiative' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            As part of its mandate to drive continuous improvement, the IQAC compiles a report of
            quality initiatives undertaken at Christ College, Pune each academic year. These reports
            document the academic, administrative and student-focused activities carried out to
            enhance institutional quality. Reports for recent academic years are listed below.
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
