import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const PROGRAMMES = [
  'BA',
  'B.Com',
  'B.Sc. (Computer Science)',
  'BBA',
  'BBA (IB)',
  'BBA (CA)',
  'M.Com',
  'M.Sc. (Computer Science)',
];

const FACTS = [
  { label: 'Established', value: 'Academic year 2007–2008' },
  { label: 'Institution Type', value: 'Christian minority institution with a secular outlook' },
  { label: 'Affiliation', value: 'Savitribai Phule Pune University' },
  { label: 'Accreditation', value: 'NAAC A+ Grade' },
];

export default function History() {
  return (
    <>
      <Seo
        title="History"
        description="Christ College, Pune was established by the CMI congregation, India's first indigenous religious congregation, inspired by its founder St Kuriakose Elias Chavara. The college was founded in 2007–2008 and is NAAC accredited with an A+ grade."
      />
      <PageHeader title="History" breadcrumbs={[{ label: 'About Us', path: '/about-us/about-us' }, { label: 'History' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-cc-text-body">
              Carmelites of Mary Immaculate (CMI), the first indigenous religious congregation of
              India with a membership of over 3000, renders its service to humanity in education,
              social work, health care, and other activities, aiming at the integral development
              of society. Christ College Pune was established by the CMI congregation, which has
              a strong legacy of imparting holistic education in the primary, secondary, and
              tertiary sectors in India. The CMI congregation is managing more than 800
              educational institutions, including a university.
            </p>
            <p className="mt-4 text-cc-text-body">
              The institution is inspired by the founder of the CMI congregation, St Kuriakose
              Elias Chavara, who was a pioneer in the reformation of Kerala in the 19th century,
              primarily through his vision and initiatives in the field of education.
            </p>
          </div>

          <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <h3 className="text-base">Christ College, Pune at a Glance</h3>
            <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
              {FACTS.map((fact) => (
                <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-cc-text-heading">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-6 text-base">Programmes Offered</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {PROGRAMMES.map((programme) => (
                <li key={programme} className="flex items-center gap-2 text-sm text-cc-text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                  {programme}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
