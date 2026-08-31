import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import feedbackAnalysis from '../../assets/iqac/feedback-analysis-2023-24.pdf';

export default function FeedbackAnalysis() {
  return (
    <>
      <Seo
        title="Feedback Analysis"
        description="Feedback Analysis Report 2023–24 for Christ College, Pune, summarising stakeholder feedback collected from students, faculty, parents, alumni and employers."
      />
      <PageHeader title="Feedback Analysis" breadcrumbs={[{ label: 'IQAC' }, { label: 'Feedback Analysis' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The IQAC collects and analyses feedback from students, faculty, parents, alumni and
            employers as part of its quality assurance process. The Feedback Analysis Report for
            2023–24 is available below.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={feedbackAnalysis}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Feedback Analysis Report 2023–24</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
