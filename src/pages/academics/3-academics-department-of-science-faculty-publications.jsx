import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { BookIcon } from '../../components/icons';
import facultyPublications from '../../assets/images/3-academics-department-of-science-department-page/faculty-publications.jpg';

const PUBLICATIONS = [
  { title: 'Advances in Machine Learning Applications for Data Analysis', author: 'Department Faculty', venue: 'Journal of Computer Science Research', year: '2024' },
  { title: 'A Comparative Study of Modern Web Development Frameworks', author: 'Department Faculty', venue: 'International Journal of Computing and Applications', year: '2024' },
  { title: 'Emerging Trends in Cybersecurity for Academic Institutions', author: 'Department Faculty', venue: 'Journal of Information Security Studies', year: '2023' },
  { title: 'Data Visualization Techniques in Undergraduate Research', author: 'Department Faculty', venue: 'International Journal of Computing and Applications', year: '2023' },
];

export default function DepartmentOfScienceFacultyPublicationsPage() {
  return (
    <>
      <Seo
        title="Faculty Publications — Department of Science"
        description="Research publications by faculty of the Department of Science at Christ College, Pune."
      />
      <PageHeader
        title="Faculty Publications"
        breadcrumbs={[
          { label: 'Department of Science', path: '/academics/department-of-science/department-page' },
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
          Top academicians of the Department of Science contribute to academia through research
          and publications across computer science and allied fields. A representative sample of
          the department&rsquo;s publication activity is listed below.
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
