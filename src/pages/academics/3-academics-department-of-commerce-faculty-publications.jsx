import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { BookIcon } from '../../components/icons';
import facultyPublications from '../../assets/images/3-academics-department-of-commerce-department-page/faculty-publications.jpg';

const PUBLICATIONS = [
  { title: 'Trends in Corporate Financial Reporting Practices', author: 'Department Faculty', venue: 'Journal of Commerce and Financial Studies', year: '2024' },
  { title: 'Impact of Digital Taxation Policies on Small Businesses', author: 'Department Faculty', venue: 'International Journal of Accounting and Finance', year: '2024' },
  { title: 'Analysis of Investment Behaviour Among Young Professionals', author: 'Department Faculty', venue: 'Journal of Commerce and Financial Studies', year: '2023' },
  { title: 'Sustainability Reporting in Contemporary Business', author: 'Department Faculty', venue: 'International Journal of Accounting and Finance', year: '2023' },
];

export default function DepartmentOfCommerceFacultyPublicationsPage() {
  return (
    <>
      <Seo
        title="Faculty Publications — Department of Commerce"
        description="Research publications by faculty of the Department of Commerce at Christ College, Pune."
      />
      <PageHeader
        title="Faculty Publications"
        breadcrumbs={[
          { label: 'Department of Commerce', path: '/academics/department-of-commerce/department-page' },
          { label: 'Faculty Publications' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img src={facultyPublications} alt="Faculty Publications" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm" />

        <h2 className="mt-10 flex items-center gap-2.5">
          <BookIcon className="h-6 w-6 text-cc-primary shrink-0" />
          Research & Publications
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          Top academicians of the Department of Commerce contribute to academia through research
          and publications in accounting, finance, and commerce. A representative sample of the
          department&rsquo;s publication activity is listed below.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PUBLICATIONS.map((p) => (
            <div key={p.title} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-5 shadow-cc-sm">
              <h3 className="text-base">{p.title}</h3>
              <p className="mt-2 text-sm text-cc-text-muted-light">
                {p.author} &middot; {p.venue} &middot; {p.year}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
