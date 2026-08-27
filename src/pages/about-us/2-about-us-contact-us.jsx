import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeIcon } from '../../components/icons';

const CONTACT_DETAILS = [
  {
    icon: MapPinIcon,
    label: 'Address',
    value: '26/4A, Nagar Rd, Ramwadi, Wadgaon Sheri, Pune, Maharashtra 411014',
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+91 7823839456, 8432511907',
    href: 'tel:+917823839456',
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'admission@christcollegepune.org',
    href: 'mailto:admission@christcollegepune.org',
  },
  {
    icon: GlobeIcon,
    label: 'Website',
    value: 'www.christcollegepune.org',
    href: 'https://www.christcollegepune.org',
  },
];

export default function ContactUs() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact details for Christ College, Pune — address, phone numbers, email and website for admissions and general enquiries."
      />
      <PageHeader title="Contact Us" breadcrumbs={[{ label: 'About Us', path: '/about-us/about-us' }, { label: 'Contact Us' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <h2 className="text-xl">Get in Touch</h2>
            <dl className="mt-6 flex flex-col gap-5">
              {CONTACT_DETAILS.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                    <item.icon width={20} height={20} />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">{item.label}</dt>
                    {item.href ? (
                      <dd className="mt-1">
                        <a href={item.href} className="font-medium text-cc-text-heading hover:text-cc-primary hover:underline">
                          {item.value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="mt-1 font-medium text-cc-text-heading">{item.value}</dd>
                    )}
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 shadow-cc-sm">
            <span className="mb-4 h-1 w-10 rounded-full bg-[image:var(--gradient-gold)]" aria-hidden="true" />
            <h3>Vision &amp; Mission</h3>
            <p className="mt-3 text-sm font-semibold italic text-cc-primary">Enlighten to Excel</p>
            <p className="mt-3 text-sm text-cc-text-muted-light">
              As a C.M.I. Educational Institution, the college regards education as integral to
              the formation of the human person for the fulfillment of his/her individual and
              social responsibilities. The college aims at forming leaders who are intellectually
              competent, spiritually mature, morally upright, psychologically integrated,
              physically healthy and socially responsible, individuals who are open to grow and
              champion the cause of justice, love, truth and peace.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
