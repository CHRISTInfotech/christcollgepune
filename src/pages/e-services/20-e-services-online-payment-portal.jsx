import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { GlobeIcon } from '../../components/icons';

export default function OnlinePaymentPortal() {
  const paymentUrl = 'https://feebook.southindianbank.com/FeeBookUser/org?id=984';

  return (
    <>
      <Seo
        title="Online Payment Portal"
        description="Pay your Christ College, Pune fees online through the college's secure fee payment gateway using net banking, credit card or debit card."
      />
      <PageHeader title="Online Payment Portal" breadcrumbs={[{ label: 'E-Services' }, { label: 'Online Payment Portal' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Pay Your Fees Online</h2>
          <p className="mt-4 text-cc-text-body">
            Christ College, Pune provides a secure online fee payment gateway so that students can
            pay their college fees from anywhere, at any time. Payments can be made using net
            banking, credit card or debit card, and a confirmation slip is generated on successful
            payment for your reference.
          </p>
        </div>

        <div className="mt-8 flex max-w-2xl flex-col items-center justify-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-12 text-center shadow-cc-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <GlobeIcon width={32} height={32} />
          </div>

          <h3 className="mt-6 text-xl font-bold text-cc-text-heading">Fee Payment Gateway</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cc-text-muted-light">
            This link opens the college&rsquo;s official online fee payment gateway, hosted by South
            Indian Bank.
          </p>

          <div className="mt-8 flex w-full justify-center">
            <a
              href={paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light shadow-cc-sm transition-all hover:bg-cc-primary-hover hover:shadow-cc-md"
            >
              Pay Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-sm text-cc-text-muted-light">
          For details on the payment process, failed transactions, refunds and privacy of payment
          information, please read the{' '}
          <Link to="/e-services/online-payment-policy" className="text-cc-primary hover:underline">
            Online Payment Policy
          </Link>
          .
        </p>
      </section>
    </>
  );
}
