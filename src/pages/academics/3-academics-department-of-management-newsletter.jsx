import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import eloquence from '../../assets/academics/management-newsletter/eloquence.pdf';
import eloquenceVolume2 from '../../assets/academics/management-newsletter/eloquence-volume-2.pdf';

const NEWSLETTERS = [
  { name: 'Eloquence', file: eloquence },
  { name: 'Eloquence (Volume II)', file: eloquenceVolume2 },
];

export default function DepartmentOfManagementNewsletterPage() {
  return (
    <>
      <Seo
        title="Newsletter — Department of Management"
        description="Eloquence, the newsletter of the Department of Management at Christ College, Pune."
      />
      <PageHeader
        title="Newsletter"
        breadcrumbs={[
          { label: 'Department of Management', path: '/academics/department-of-management/department-page' },
          { label: 'Newsletter' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Eloquence</h2>
          <p className="mt-4 text-cc-text-body">
            Eloquence is the newsletter published by the Department of Management at Christ
            College, Pune, showcasing department activities, events and student contributions.
            Download the editions below.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <div className="mt-4 flex flex-col gap-4 sm:max-w-md">
            {NEWSLETTERS.map((doc) => (
              <a
                key={doc.name}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                  <DownloadIcon width={20} height={20} />
                </span>
                <span>
                  <span className="block font-semibold text-cc-text-heading">{doc.name}</span>
                  <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
