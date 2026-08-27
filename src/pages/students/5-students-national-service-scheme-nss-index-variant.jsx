import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import nccBanner from '../../assets/images/5-students-national-service-scheme-nss-index-variant/nss-banner.png';

const VALUES = [
  'Patriotic commitment to the nation',
  'Respect for diversity and constitutional values',
  'A spirit of community service',
  'Healthy lifestyle choices',
  'Honesty and self-sacrifice',
];

export default function NationalServiceSchemeNssIndexVariant() {
  return (
    <>
      <Seo
        title="NCC"
        description="Christ College, Pune hosts the Army Wing of the National Cadet Corps (36 Maharashtra Battalion NCC) under the motto 'Unity and Discipline', training cadets in drill, adventure activities and community service."
      />
      <PageHeader
        title="NCC"
        breadcrumbs={[
          { label: 'Student Life' },
          { label: 'National Service Scheme', path: '/students/national-service-scheme/about-us' },
          { label: 'NCC' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={nccBanner}
          alt="NCC cadets standing to attention beside the flagpole at Christ College Pune"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10 max-w-2xl">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wide text-cc-primary">
            Motto: &ldquo;Unity and Discipline&rdquo;
          </span>
          <h2>National Cadet Corps (NCC)</h2>
          <p className="mt-4 text-cc-text-body">
            Christ College, Pune hosts the Army Wing of the National Cadet Corps, open to both male
            and female students, affiliated with the 36 Maharashtra Battalion NCC. The programme
            trains cadets to develop character, commandership, discipline, leadership, a secular
            outlook, and a spirit of adventure.
          </p>
          <p className="mt-4 text-cc-text-body">
            Training components include regular parades, drill, map reading, weapon and firing
            training, obstacle courses, military theory, and social service, alongside adventure
            activities such as parasailing, horse riding, rock climbing, mountaineering, and
            expeditions.
          </p>

          <h3 className="mt-8 text-base">Core Values</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {VALUES.map((item) => (
              <li key={item} className="flex items-center gap-2 text-cc-text-body">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-4 text-sm text-cc-text-muted-light">
            This page is indexed on the college website under the Student Life &rarr; National
            Service Scheme menu, but its content on the live site covers the NCC (National Cadet
            Corps) programme rather than NSS.
          </p>
        </div>
      </section>
    </>
  );
}
