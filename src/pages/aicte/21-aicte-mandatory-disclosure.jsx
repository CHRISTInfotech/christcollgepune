import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

export default function MandatoryDisclosure() {
  return (
    <>
      <Seo
        title="Mandatory Disclosure"
        description="AICTE mandatory disclosure information for Christ College, Pune will be published on this page once available."
      />
      <PageHeader title="Mandatory Disclosure" breadcrumbs={[{ label: 'AICTE' }, { label: 'Mandatory Disclosure' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The mandatory disclosure details required under AICTE norms will be published on this
            page once available.
          </p>
        </div>
      </section>
    </>
  );
}
