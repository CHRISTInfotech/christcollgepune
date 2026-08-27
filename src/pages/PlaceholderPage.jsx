import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';

export default function PlaceholderPage({ title, breadcrumbs }) {
  return (
    <>
      <Seo title={title} />
      <PageHeader title={title} breadcrumbs={breadcrumbs} />
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <p className="text-cc-text-muted-light">
          Placeholder page — real content for this route is filled in during the
          content extraction pass.
        </p>
      </div>
    </>
  );
}
