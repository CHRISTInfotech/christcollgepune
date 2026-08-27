import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

export default function EqualOpportunityCell() {
  return (
    <>
      <Seo
        title="Equal Opportunity Cell"
        description="The Equal Opportunity Cell at Christ College, Pune works towards equal opportunity for all students through various institutional schemes."
      />
      <PageHeader title="Equal Opportunity Cell" breadcrumbs={[{ label: 'Student Life' }, { label: 'Equal Opportunity Cell' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-2xl">
          <h2>About the Cell</h2>
          <p className="mt-4 text-cc-text-body">
            The Equal Opportunity Cell at Christ College, Pune works towards ensuring an equal
            opportunity for all students through various institutional schemes.
          </p>
          <p className="mt-4 text-sm text-cc-text-muted-light">
            The source page provides only the cell&rsquo;s name and a single referenced activity,
            &ldquo;An Equal Opportunity for All Through Various Schemes&rdquo; &mdash; no further
            descriptive text, objectives, or committee details were published there.
          </p>
        </div>
      </section>
    </>
  );
}
