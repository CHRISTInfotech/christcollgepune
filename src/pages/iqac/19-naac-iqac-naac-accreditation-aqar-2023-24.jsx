import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import aqar202324 from '../../assets/iqac/aqar-2023-24.pdf';
import aqar202122 from '../../assets/iqac/aqar-2021-22.pdf';
import aqar202021 from '../../assets/iqac/aqar-2020-21.pdf';
import aqar201920 from '../../assets/iqac/aqar-2019-20.pdf';
import aqar201819 from '../../assets/iqac/aqar-2018-19.pdf';

const DOCUMENTS = [
  { name: 'AQAR 2023–24', file: aqar202324 },
  { name: 'AQAR 2021–22', file: aqar202122 },
  { name: 'AQAR 2020–21', file: aqar202021 },
  { name: 'AQAR 2019–20', file: aqar201920 },
  { name: 'AQAR 2018–19', file: aqar201819 },
];

export default function Aqar() {
  return (
    <>
      <Seo
        title="AQAR"
        description="Annual Quality Assurance Reports (AQAR) submitted by Christ College, Pune to NAAC as part of its ongoing quality assurance process."
      />
      <PageHeader title="AQAR" breadcrumbs={[{ label: 'IQAC' }, { label: 'AQAR' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Annual Quality Assurance Report (AQAR) is submitted by the Internal Quality Assurance
            Cell (IQAC) to NAAC every year to record the quality-sustenance and quality-enhancement
            measures undertaken by the college. The AQAR documents for recent academic years are
            available below.
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
