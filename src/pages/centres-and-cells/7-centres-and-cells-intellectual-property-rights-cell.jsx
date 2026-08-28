import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import iprcBanner from '../../assets/images/7-centres-and-cells-intellectual-property-rights-cell/iprc-banner.png';

const OBJECTIVES = [
  'To create awareness about IPRs, especially Patents / Copyright.',
  'To enable Patents / Copyright searches.',
  'To guide inventors in respect of patenting their inventions.',
  'To setup IP Cell at Universities and Engineering Colleges.',
  'To promote a better understanding of IPR.',
];

export default function IntellectualPropertyRightsCell() {
  return (
    <>
      <Seo
        title="Intellectual Property Rights Cell"
        description="The Intellectual Property Rights Cell at Christ College, Pune creates awareness about patents and copyright, and guides inventors on patenting their inventions."
      />
      <PageHeader title="Intellectual Property Rights Cell" breadcrumbs={[{ label: 'Student Life' }, { label: 'Intellectual Property Rights Cell' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={iprcBanner}
          alt="Christ (Deemed to be University) campus building at Lavasa, Pune"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10 max-w-2xl">
          <h2>Objectives</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {OBJECTIVES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
