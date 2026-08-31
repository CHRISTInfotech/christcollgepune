import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

export default function AdmissionsCancellationPolicy() {
  return (
    <>
      <Seo
        title="Cancellation Policy"
        description="Christ College, Pune's admission cancellation policy: procedure for requesting cancellation, and the fee refund timeline."
      />
      <PageHeader title="Cancellation Policy" breadcrumbs={[{ label: 'Admissions' }, { label: 'Cancellation Policy' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Admission Cancellation Policy</h2>
          <p className="mt-4 text-cc-text-body">
            The cancellation process at Christ College, Pune is carried out in accordance with
            college policy. Students seeking to cancel their admission must appear in person at
            the college and submit a written application for cancellation &mdash; cancellation
            requests are not accepted over email or phone.
          </p>
          <p className="mt-4 text-cc-text-body">
            Once the cancellation application is processed, the refund of fees paid would take at
            least 7 working days to get credited to the student&rsquo;s bank account.
          </p>

          <div className="mt-8 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <h3 className="text-base">Cancellation Enquiries</h3>
            <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
              <div className="py-3 first:pt-0">
                <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Email</dt>
                <dd className="mt-1 text-sm font-medium text-cc-text-heading">admission@christcollegepune.org</dd>
              </div>
              <div className="py-3 last:pb-0">
                <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Phone</dt>
                <dd className="mt-1 text-sm font-medium text-cc-text-heading">7823839456, 8432511907</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
