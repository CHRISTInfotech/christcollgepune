import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

export default function OnlinePaymentPolicy() {
  return (
    <>
      <Seo
        title="Online Payment Policy"
        description="The Christ College, Pune online fee payment policy covering the payment process, failed transactions, technical issues, privacy and refunds."
      />
      <PageHeader title="Online Payment Policy" breadcrumbs={[{ label: 'E-Services' }, { label: 'Online Payment Policy' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Payment Process</h2>
          <p className="mt-4 text-cc-text-body">
            Users select &ldquo;Pay&rdquo; on the fee payment gateway and choose to pay using net
            banking, credit card or debit card. On successful completion of the payment,
            confirmation slips are generated for the user&rsquo;s reference.
          </p>

          <h2 className="mt-10">Failed Transactions</h2>
          <p className="mt-4 text-cc-text-body">
            If a payment is not successful for any reason, a failure status is displayed to the
            user on the payment gateway.
          </p>

          <h2 className="mt-10">Technical Issues</h2>
          <p className="mt-4 text-cc-text-body">
            If a user experiences system delays without being able to proceed to the payment
            details page, they may restart the payment process. Users who have already provided
            their card or banking details before experiencing a delay should first verify the
            status of the transaction with their bank before attempting to pay again.
          </p>

          <h2 className="mt-10">Privacy</h2>
          <p className="mt-4 text-cc-text-body">
            Any payment details provided by users are utilised only for the purpose of receiving
            payments made to the institution and are not used for any other purpose.
          </p>

          <h2 className="mt-10">Refunds</h2>
          <p className="mt-4 text-cc-text-body">
            No cancellation is permitted once a payment has been made. In the case of a duplicate
            payment, users must contact the admission/finance department with proof of the
            transaction. Refunds, where applicable, are processed within 10&ndash;15 working days.
          </p>
        </div>
      </section>
    </>
  );
}
