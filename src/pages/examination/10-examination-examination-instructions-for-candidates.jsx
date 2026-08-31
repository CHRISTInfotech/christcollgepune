import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import instructionsPdf from '../../assets/examination/examination-instructions-for-candidates.pdf';

export default function ExaminationInstructionsForCandidates() {
  return (
    <>
      <Seo
        title="Examination Instructions for Candidates"
        description="Official instructions for candidates appearing for examinations at Christ College, Pune, covering conduct, documents, and permitted materials in the examination hall."
      />
      <PageHeader
        title="Examination Instructions for Candidates"
        breadcrumbs={[{ label: 'Examination' }, { label: 'Instructions for Candidates' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Instructions for Candidates</h2>
          <p className="mt-4 text-cc-text-body">
            All candidates appearing for internal and university examinations at Christ College,
            Pune are required to read and follow the official examination instructions covering
            reporting time, seating arrangements, identification requirements, and prohibited
            materials in the examination hall. Download the complete instructions below.
          </p>

          <div className="mt-6">
            <a
              href={instructionsPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary sm:max-w-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <DownloadIcon width={20} height={20} />
              </span>
              <span>
                <span className="block font-semibold text-cc-text-heading">Examination Instructions for Candidates</span>
                <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
