import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const POINTS = [
  {
    title: 'Eligibility',
    body: 'Basic eligibility for the programme is a pass at the +2 level from any recognized Board in India.',
  },
  {
    title: 'No Capitation or Donation',
    body: 'The College does not collect any type of capitation or donation other than the fee mentioned on the website. Fees remain fixed for the first three years of a programme, though students should expect periodic, modest increases to account for rising operational costs in subsequent batches.',
  },
  {
    title: 'Application Accuracy',
    body: 'Incomplete or incorrect applications may be rejected. Original mark sheets should not be mailed to the college; scanned copies must be submitted through the online application portal instead.',
  },
  {
    title: 'Provisional Admission',
    body: 'Admission granted to any candidate is provisional and contingent upon continued compliance with college rules and regulations.',
  },
  {
    title: 'Laptop Requirement',
    body: 'Students enrolled in programmes that require a laptop for coursework will need to arrange one independently.',
  },
  {
    title: 'Bank Loan Recommendation Letters',
    body: 'Students seeking an education loan can obtain a recommendation letter from the Admissions Office by presenting their original fee receipt.',
  },
  {
    title: 'Decision of the Admission Committee',
    body: 'The decision of the Admission Committee on all matters relating to admission is final and binding; applicants cannot claim ignorance of the terms and conditions as justification for any procedural failure.',
  },
];

export default function MiscellaneousInformation() {
  return (
    <>
      <Seo
        title="Miscellaneous Information"
        description="Additional admissions information for Christ College, Pune covering eligibility, fees, document submission, provisional admission, and the Admission Committee's decision-making authority."
      />
      <PageHeader title="Miscellaneous Information" breadcrumbs={[{ label: 'Admissions' }, { label: 'Miscellaneous Information' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Additional Admissions Information</h2>
          <div className="mt-6 flex flex-col gap-6">
            {POINTS.map((point) => (
              <div key={point.title}>
                <h3 className="text-base">{point.title}</h3>
                <p className="mt-2 text-cc-text-body">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
