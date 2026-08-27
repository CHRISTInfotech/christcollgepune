import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import aboutUsImg from '../../assets/aboutus/aboutus.png';

const VALUES = ['Faith in God', 'Moral Uprightness', 'Social Responsibility', 'Pursuit of Excellence'];

export default function AboutUs() {
  return (
    <>
      <Seo
        title="About Us"
        description="Christ College, Pune is an initiative of the Carmel Vidya Bhavan Trust, established by the Carmelites of Mary Immaculate (CMI), inspired by the legacy of Saint Chavara."
      />
      <PageHeader title="About Us" breadcrumbs={[{ label: 'About Us' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-8  lg:items-center">

          <div>
            <p className="text-cc-text-body">
              Christ College, Pune, represents an esteemed initiative by the Carmel Vidya Bhavan
              Trust, established by the Carmelites of Mary Immaculate (CMI), India&apos;s
              pioneering indigenous religious congregation. The institution draws profound
              inspiration from Saint Chavara, a visionary whose multifaceted legacy spans
              education, social reform, communication, cultural development, and spiritual
              formation.
            </p>
            <p className="mt-4 text-cc-text-body">
              Anchored in this rich intellectual and cultural tradition, Christ College is
              committed to providing an education that surpasses distinctions of religion, caste,
              or creed. The college&apos;s faculty, deeply committed and academically
              distinguished, ensure that students receive an education that is comprehensive and
              attuned to contemporary advancements within their respective disciplines. This
              integrative approach seeks to cultivate individuals of moral integrity and
              intellectual rigor, equipping them to make substantive contributions to society and
              engage thoughtfully with the complexities of the modern world.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2>Mission, Vision &amp; Values</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
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

            <div className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 shadow-cc-sm">
              <span className="mb-4 h-1 w-10 rounded-full bg-[image:var(--gradient-gold)]" aria-hidden="true" />
              <h3>Vision</h3>
              <p className="mt-3 text-sm font-semibold italic text-cc-primary">Enlighten to Excel</p>
              <p className="mt-3 text-sm text-cc-text-muted-light">
                The attainment of true knowledge makes one enlightened so that one can lead
                oneself and others on the path of truth and achieve intellectual and ethical
                excellence.
              </p>
            </div>

            <div className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 shadow-cc-sm">
              <span className="mb-4 h-1 w-10 rounded-full bg-[image:var(--gradient-gold)]" aria-hidden="true" />
              <h3>Values</h3>
              <p className="mt-3 text-sm text-cc-text-muted-light">
                The values our students imbibe are an integral part of their personal growth. As
                part of our value clarification, we have prioritized our core values as follows
                and they help us all in conflict resolution.
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {VALUES.map((value) => (
                  <li key={value} className="flex items-center gap-2 text-sm text-cc-text-body">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
