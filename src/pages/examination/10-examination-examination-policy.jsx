import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import examinationPolicyPdf from '../../assets/examination/examination-policy.pdf';

export default function ExaminationPolicy() {
  return (
    <>
      <Seo
        title="Examination Policy"
        description="The official Examination Policy document of Christ College, Pune governing the conduct of internal and university examinations."
      />
      <PageHeader title="Examination Policy" breadcrumbs={[{ label: 'Examination' }, { label: 'Examination Policy' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Examination Policy</h2>
          <p className="mt-4 text-cc-text-body">
            Christ College, Pune&rsquo;s Examination Policy sets out the rules and procedures
            governing the conduct of internal assessments and university examinations, the
            responsibilities of the Examination Cell, and the standards of conduct expected of
            students appearing for examinations. Download the complete policy document below.
          </p>

          <div className="mt-6">
            <a
              href={examinationPolicyPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary sm:max-w-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <DownloadIcon width={20} height={20} />
              </span>
              <span>
                <span className="block font-semibold text-cc-text-heading">Examination Policy</span>
                <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
