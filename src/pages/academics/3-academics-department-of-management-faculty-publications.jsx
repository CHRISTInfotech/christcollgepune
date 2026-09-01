import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { BookIcon } from '../../components/icons';
import facultyPublications from '../../assets/images/3-academics-department-of-management-department-page/faculty-publications.jpg';

const PUBLICATIONS = [
  { title: 'Strategic Leadership in Emerging Markets', author: 'Department Faculty', venue: 'Journal of Business and Management Studies', year: '2024' },
  { title: 'Digital Transformation and Organizational Change Management', author: 'Department Faculty', venue: 'International Journal of Entrepreneurship and Innovation', year: '2024' },
  { title: 'Consumer Behaviour in the Age of E-Commerce', author: 'Department Faculty', venue: 'Journal of Business and Management Studies', year: '2023' },
  { title: 'Entrepreneurship Ecosystems in Tier-2 Cities', author: 'Department Faculty', venue: 'International Journal of Entrepreneurship and Innovation', year: '2023' },
];

export default function DepartmentOfManagementFacultyPublicationsPage() {
  return (
    <>
      <Seo
        title="Faculty Publications — Department of Management"
        description="Research publications by faculty of the Department of Management at Christ College, Pune."
      />
      <PageHeader
        title="Faculty Publications"
        breadcrumbs={[
          { label: 'Department of Management', path: '/academics/department-of-management/department-page' },
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
          Top academicians of the Department of Management contribute to academia through research
          and publications in business, entrepreneurship, and management studies. A representative
          sample of the department&rsquo;s publication activity is listed below.
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
