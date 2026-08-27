import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import stChavara from '../../assets/images/2-about-us-founder/st-chavara.jpg';

const FACTS = [
  { label: 'Born', value: '1805, Kainakary, Kerala' },
  { label: 'Entered Seminary', value: '1818' },
  { label: 'Ordained a Priest', value: '1829' },
  { label: 'Founded the CMI Congregation', value: '1831' },
  { label: 'Canonized', value: '23 November 2014, Rome, by Pope Francis' },
];

export default function Founder() {
  return (
    <>
      <Seo
        title="Founder"
        description="Christ College, Pune draws its inspiration from St Kuriakose Elias Chavara (1805-1871), founder of the Carmelites of Mary Immaculate (CMI) congregation and an educationalist and social reformer of 19th century South India, canonized by Pope Francis in 2014."
      />
      <PageHeader title="Founder" breadcrumbs={[{ label: 'About Us', path: '/about-us/about-us' }, { label: 'Founder' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2>St Kuriakose Elias Chavara</h2>
            <p className="mt-4 text-cc-text-body">
              CHRIST (Deemed to be University) emerged from the educational vision of St
              Kuriakose Elias Chavara (1805&ndash;1871), described as &ldquo;an educationalist and
              a social reformer of the nineteenth century South India.&rdquo; During his formative
              years, Kuriakose attended village school studying languages and elementary sciences
              before entering seminary in 1818 and receiving ordination in 1829.
            </p>
            <p className="mt-4 text-cc-text-body">
              He established the Carmelites of Mary Immaculate (CMI) congregation in 1831 with
              aims to serve marginalized and underprivileged populations. The congregation has
              expanded to include more than 3000 priests serving globally. Pope Francis canonized
              St Chavara on 23 November 2014 in Rome. The CMI congregation continues delivering
              services across education, social work, healthcare and other sectors focused on the
              integral development of society.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src={stChavara}
              alt="St Kuriakose Elias Chavara, founder of the CMI congregation"
              className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
            />

            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base">At a Glance</h3>
              <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                    <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">{fact.label}</dt>
                    <dd className="mt-1 text-sm font-medium text-cc-text-heading">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 shadow-cc-sm">
              <span className="mb-4 h-1 w-10 rounded-full bg-[image:var(--gradient-gold)]" aria-hidden="true" />
              <h3>Vision</h3>
              <p className="mt-3 text-sm font-semibold italic text-cc-primary">Enlighten to Excel</p>
            </div>

            <div className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 shadow-cc-sm">
              <span className="mb-4 h-1 w-10 rounded-full bg-[image:var(--gradient-gold)]" aria-hidden="true" />
              <h3>Mission</h3>
              <p className="mt-3 text-sm text-cc-text-muted-light">
                As a C.M.I. Educational Institution, the college regards education as integral to
                the formation of the human person for the fulfillment of his/her individual and
                social responsibilities. The college aims at forming leaders who are
                intellectually competent, spiritually mature, morally upright, psychologically
                integrated, physically healthy and socially responsible, individuals who are open
                to grow and champion the cause of justice, love, truth and peace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
