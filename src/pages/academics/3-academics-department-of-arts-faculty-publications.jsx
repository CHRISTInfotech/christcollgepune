import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { BookIcon } from '../../components/icons';
import facultyPublications from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/faculty-publications.jpg';

const PUBLICATIONS = [
  { title: 'Perspectives on Contemporary Indian Economic Policy', author: 'Department Faculty', venue: 'Journal of Social Sciences and Humanities', year: '2024' },
  { title: 'Language and Identity in Postcolonial Literature', author: 'Department Faculty', venue: 'International Review of Arts and Literature', year: '2024' },
  { title: 'Cognitive Behavioural Approaches in Modern Psychology', author: 'Department Faculty', venue: 'Journal of Social Sciences and Humanities', year: '2023' },
  { title: 'Social Dimensions of Behavioural Economics', author: 'Department Faculty', venue: 'International Review of Arts and Literature', year: '2023' },
];

export default function DepartmentOfArtsFacultyPublicationsPage() {
  return (
    <>
      <Seo
        title="Faculty Publications — Department of Arts"
        description="Research publications by faculty of the Department of Arts at Christ College, Pune."
      />
      <PageHeader
        title="Faculty Publications"
        breadcrumbs={[
          { label: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
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
          Top academicians of the Department of Arts contribute to academia through research and
          publications across economics, English, and psychology. A representative sample of the
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
