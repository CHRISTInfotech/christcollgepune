import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import loaReport from '../../assets/aicte/LOA-Report-24-25.pdf';
import eoaReport from '../../assets/aicte/EOA-Report-25-26.pdf';

const DOCUMENTS = [
  { name: 'Letter of Approval (LOA) 2024-25', file: loaReport },
  { name: 'Extension of Approval (EOA) 2025-26', file: eoaReport },
];

export default function EssentialDocuments() {
  return (
    <>
      <Seo
        title="Essential Documents"
        description="AICTE essential documents for Christ College, Pune, including the Letter of Approval (LOA) 2024-25 and Extension of Approval (EOA) 2025-26."
      />
      <PageHeader title="Essential Documents" breadcrumbs={[{ label: 'AICTE' }, { label: 'Essential Documents' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            As required under All India Council for Technical Education (AICTE) norms, Christ
            College, Pune publishes its essential approval documents here for reference by
            students, parents and the public.
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
