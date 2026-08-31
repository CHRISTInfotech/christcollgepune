import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const STEPS = [
  {
    title: 'University Registration',
    body: 'Visit the Savitribai Phule Pune University International Centre website to explore the programmes recognized for international/NRI admission.',
  },
  {
    title: 'Programme Selection',
    body: 'Choose between undergraduate or postgraduate programmes at Christ College, Pune aligned with your academic goals.',
  },
  {
    title: 'Initial Registration',
    body: 'Register for International Student Admission with the University by filling in the required information.',
  },
  {
    title: 'Await University Feedback',
    body: 'Wait to hear back from Savitribai Phule Pune University regarding your eligibility as an international/NRI candidate.',
  },
  {
    title: 'Apply Directly with the College',
    body: 'Apply directly with Christ College, Pune by visiting the college website and completing the online application form with all necessary details.',
  },
  {
    title: 'Interview / Assessment',
    body: "Participate in any interview or assessment required as part of the college's admission process.",
  },
];

export default function InternationalNriStudent() {
  return (
    <>
      <Seo
        title="International / NRI Student"
        description="Admission process for International, NRI, and PIO students applying to Christ College, Pune, including Savitribai Phule Pune University registration and college application steps."
      />
      <PageHeader title="International / NRI Student" breadcrumbs={[{ label: 'Admissions' }, { label: 'International / NRI Student' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2>Admission Process for International / NRI Students</h2>
            <p className="mt-4 text-cc-text-body">
              Christ College, Pune, a C.M.I. Educational Institution affiliated to the Savitribai
              Phule Pune University, welcomes International, NRI, and PIO students who wish to
              pursue undergraduate or postgraduate programmes at the college. The admission process
              for this category runs alongside registration with the University&rsquo;s
              International Centre.
            </p>

            <ol className="mt-6 flex flex-col gap-5">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base">{step.title}</h3>
                    <p className="mt-1 text-sm text-cc-text-body">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm text-cc-text-body">
              For the University&rsquo;s International Centre portal, visit{' '}
              <a
                href="http://www.unipune.ac.in/dept/International%20Centre/default.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cc-primary hover:underline"
              >
                unipune.ac.in &ndash; International Centre
              </a>
              .
            </p>
          </div>

          <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <h3 className="text-base">Admissions Contact</h3>
            <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
              <div className="py-3 first:pt-0">
                <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Address</dt>
                <dd className="mt-1 text-sm font-medium text-cc-text-heading">26/4A, Nagar Rd, Ramwadi, Wadgaon Sheri, Pune, Maharashtra 411014</dd>
              </div>
              <div className="py-3">
                <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Phone</dt>
                <dd className="mt-1 text-sm font-medium text-cc-text-heading">7823839456, 8432511907</dd>
              </div>
              <div className="py-3 last:pb-0">
                <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Email</dt>
                <dd className="mt-1 text-sm font-medium text-cc-text-heading">admission@christcollegepune.org</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
