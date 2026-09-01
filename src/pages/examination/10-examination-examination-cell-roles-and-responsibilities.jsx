import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const ROLES = [
  'To follow the rules and regulations laid down by the Savitribai Phule Pune University pertaining to examination and evaluation work.',
  'The College Examination Officer will work as custodian during the Theory exams of the Savitribai Phule Pune University.',
  'To deliver a high quality examination and assessment system, i.e. efficient, fair and accessible.',
];

const RESPONSIBILITIES = [
  'Guide the exam section to conduct the University exams smoothly as per the regulations laid down by the University.',
  'Execute the work related to various circulars received from the University within the stipulated time limit.',
  'Guide and orient students appearing for University examinations.',
  'Monitor the financial support received from the University and the expenditure incurred thereof, and submit the audited report to the University from time to time.',
  'Monitor the exam stationery received from the University and maintain records of its use, submitting the report of the same to the University.',
  'Report any malpractices during the examination, if any, to the University.',
  'Guide and monitor the conduct of practical and theory exams as per the schedule of University examinations.',
  'Execute the orders/circulars received from the Controller of Examinations (SPPU) on time and take necessary action.',
  'Determine procedures for the conduct and supervision of examinations.',
  'Assign responsibilities to all college staff for examination-related work.',
  'Allot assessment work to the respective teachers.',
  'Print examination question papers and provide examination materials for college-level examinations.',
  'Determine procedures to enable the review and appeal of examination results at the request of candidates.',
  'Notify graduate and post-graduate students about filling the convocation form and conducting the Convocation Ceremony.',
];

export default function ExaminationCellRolesAndResponsibilities() {
  return (
    <>
      <Seo
        title="Examination Cell – Roles & Responsibilities"
        description="Roles and responsibilities of the Office of Examination at Christ College, Pune, in line with Savitribai Phule Pune University regulations."
      />
      <PageHeader
        title="Examination Cell – Roles & Responsibilities"
        breadcrumbs={[{ label: 'Examination' }, { label: 'Roles & Responsibilities' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Office of Examination</h2>
          <p className="mt-4 text-cc-text-body">
            The Office of Examination at Christ College, Pune follows the rules and regulations
            laid down by Savitribai Phule Pune University for examination and evaluation work. The
            College Examination Officer acts as custodian during university theory examinations
            and works to deliver a high quality examination and assessment system that is
            efficient, fair and accessible.
          </p>

          <h3 className="mt-8 text-base">Role</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {ROLES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-base">Responsibilities</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {RESPONSIBILITIES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
