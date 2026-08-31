import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import cellMembersListPdf from '../../assets/examination/exam-cell-members-list.pdf';

export default function ExaminationCellMembersList() {
  return (
    <>
      <Seo
        title="Examination Cell Members List"
        description="List of members of the Examination Cell at Christ College, Pune, responsible for conducting internal and university examinations."
      />
      <PageHeader
        title="Examination Cell Members List"
        breadcrumbs={[{ label: 'Examination' }, { label: 'Examination Cell Members List' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Examination Cell Members</h2>
          <p className="mt-4 text-cc-text-body">
            The Examination Cell at Christ College, Pune is responsible for the smooth conduct of
            internal assessments and university examinations. The complete list of Examination Cell
            members is available for download below.
          </p>

          <div className="mt-6">
            <a
              href={cellMembersListPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary sm:max-w-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <DownloadIcon width={20} height={20} />
              </span>
              <span>
                <span className="block font-semibold text-cc-text-heading">Examination Cell Members List</span>
                <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
