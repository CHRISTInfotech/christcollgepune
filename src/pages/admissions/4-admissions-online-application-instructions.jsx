import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

export default function OnlineApplicationInstructions() {
  return (
    <>
      <Seo
        title="Instructions for Online Application Form"
        description="Step-by-step instructions for registering on and completing the online application form for admission to Christ College, Pune."
      />
      <PageHeader
        title="Instructions for Online Application Form"
        breadcrumbs={[{ label: 'Admissions' }, { label: 'Instructions for Online Application Form' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Registration &amp; Login</h2>
          <p className="mt-4 text-cc-text-body">
            New applicants must first create a one-time registration on the college&rsquo;s
            official admissions portal. Registration requires your name (exactly as per your Class
            12 documents), a valid email address, mobile number, and WhatsApp contact number. Your
            username and password will be sent to your registered email ID &mdash; use these
            credentials to log in and access the application form.
          </p>

          <h3 className="mt-8 text-base">Completing the Application Form</h3>
          <p className="mt-3 text-cc-text-body">
            After logging in, select your desired programme and confirm that you meet the
            eligibility requirements. You will need to upload a formal photograph measuring 3.5cm
            x 4.5cm (under 100kb) with a plain background, along with the following details:
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              'Personal details and academic/co-curricular achievements',
              'Parent/guardian information with addresses',
              'Educational history with scanned copies of Class 10 and Class 11/12 marksheets',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-4 text-sm text-cc-text-body">
            Once submitted, the details cannot be corrected, so ensure everything is accurate
            before submitting the form.
          </p>

          <h3 className="mt-8 text-base">Payment &amp; Selection Process</h3>
          <p className="mt-3 text-cc-text-body">
            Application fees are processed through net banking, credit card, debit card, or UPI.
            The fee is non-refundable once the application number is generated. Selection follows
            a counselling session, a panel interview, and a principal&rsquo;s interview (parents
            are required to be present).
          </p>

          <h3 className="mt-8 text-base">Documents Required for Verification</h3>
          <p className="mt-3 text-cc-text-body">
            Shortlisted candidates must bring originals along with photocopies of their marksheets,
            Aadhaar card, passport-size photographs, transfer certificate, caste certificate (if
            applicable), and migration certificate (if applicable).
          </p>
          <p className="mt-4 text-cc-text-body">
            Selected candidates must complete fee payment within 7 working days of selection to
            confirm their seat, and submit all pending original documents by 31st July.
          </p>
        </div>
      </section>
    </>
  );
}
