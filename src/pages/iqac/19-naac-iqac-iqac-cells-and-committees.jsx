import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import iqacCell from '../../assets/iqac/cell-iqac.pdf';
import collegeDevelopmentCouncil from '../../assets/iqac/cell-college-development-council.pdf';
import divyangCell from '../../assets/iqac/cell-divyang.pdf';
import antiSexualHarassmentIc from '../../assets/iqac/cell-anti-sexual-harassment-ic.pdf';
import antiRaggingCommittee from '../../assets/iqac/cell-anti-ragging.pdf';
import equalOpportunityCommittee from '../../assets/iqac/cell-equal-opportunity.pdf';
import grievanceCell from '../../assets/iqac/cell-grievance.pdf';
import nirmitiCell from '../../assets/iqac/cell-nirmiti.pdf';
import studentDevelopmentCommittee from '../../assets/iqac/cell-student-development-committee.pdf';

const DOCUMENTS = [
  { name: 'Internal Quality Assurance Cell', file: iqacCell },
  { name: 'College Development Council', file: collegeDevelopmentCouncil },
  { name: 'Divyang Cell', file: divyangCell },
  { name: 'Anti Sexual Harassment – IC Committee', file: antiSexualHarassmentIc },
  { name: 'Anti-Ragging Committee', file: antiRaggingCommittee },
  { name: 'Equal Opportunity Committee', file: equalOpportunityCommittee },
  { name: 'Grievance Cell', file: grievanceCell },
  { name: 'Nirmiti Entrepreneurship Cell', file: nirmitiCell },
  { name: 'Student Development Committee', file: studentDevelopmentCommittee },
];

export default function CellsAndCommittees() {
  return (
    <>
      <Seo
        title="Cells and Committees"
        description="Statutory and quality-related cells and committees constituted at Christ College, Pune, including IQAC, the College Development Council, Anti-Ragging, Grievance and other committees."
      />
      <PageHeader title="Cells and Committees" breadcrumbs={[{ label: 'IQAC' }, { label: 'Cells and Committees' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            In line with UGC and NAAC requirements, Christ College, Pune has constituted a number of
            statutory and quality-related cells and committees to support governance, student
            welfare and institutional quality. The constitution documents for each are listed below.
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
