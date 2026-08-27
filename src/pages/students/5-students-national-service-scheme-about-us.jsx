import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const AIMS = [
  'Understand the community in which they work',
  'Understand themselves in relation to their community',
  'Identify the needs and problems of the community and involve them in problem-solving',
  'Develop among themselves a sense of social and civic responsibility',
  'Utilise their knowledge in finding practical solutions to individual and community problems',
  'Develop competence required for group-living and sharing of responsibilities',
  'Gain skills in mobilising community participation',
  'Acquire leadership qualities and democratic attitudes',
  'Develop capacity to meet emergencies and natural disasters',
  'Practise national integration and social harmony',
];

export default function NationalServiceSchemeAboutUs() {
  return (
    <>
      <Seo
        title="National Service Scheme - About Us"
        description="The National Service Scheme (NSS) at Christ College, Pune operates under the motto 'Not Me But You', developing students' social and civic responsibility through community service."
      />
      <PageHeader title="National Service Scheme" breadcrumbs={[{ label: 'Student Life' }, { label: 'National Service Scheme' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wide text-cc-primary">
          Motto: &ldquo;Not Me But You&rdquo;
        </span>
        <h2>About NSS</h2>
        <p className="mt-4 text-cc-text-body">
          The National Service Scheme (NSS) at Christ College, Pune is a student volunteer
          organisation that channels the energy of young students into constructive community
          service, building social awareness and a spirit of service beyond the self.
        </p>

        <h3 className="mt-8 text-base">Aims of NSS</h3>
        <ul className="mt-4 flex flex-col gap-2">
          {AIMS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-cc-text-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
