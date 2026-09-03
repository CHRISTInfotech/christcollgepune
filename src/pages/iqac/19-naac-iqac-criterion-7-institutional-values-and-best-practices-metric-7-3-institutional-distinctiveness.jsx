import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import institutionalDistinctiveness from '../../assets/iqac/institutional-distinctiveness.pdf';
import culturalActivityReport from '../../assets/iqac/cultural-activity-report.pdf';
import aaghaazVideo from '../../assets/iqac/aaghaaz-cultural-pursuits.mp4';

const DOCUMENTS = [
  { name: 'Institutional Distinctiveness', file: institutionalDistinctiveness },
  { name: 'Cultural Activity Report', file: culturalActivityReport },
];

const COMMITTEES = [
  'Literary — plans, designs, and implements all literary and debating events',
  'Art — responsible for planning, designing, and executing art-related exhibitions',
  'Stage — oversees planning, choreography, and performance coordination for stage events',
  'Media & Creative — maintains photography, videography, and social media coverage',
  'Emcee — prepares anchors and hosts for formal and informal college functions',
  'Hospitality — attends to visiting dignitaries, resource persons, and judges',
  'Records — compiles documentation and reports for institutional archives',
  'Auditorium — manages acoustics, lighting, and auditorium protocol during events',
];

export default function Metric73InstitutionalDistinctiveness() {
  return (
    <>
      <Seo
        title="Institutional Distinctiveness"
        description="NAAC Criterion 7.3 Institutional Distinctiveness of Christ College, Pune: the campus as a vibrant hub of art, culture, and creative expression led by the Student Cultural Association."
      />
      <PageHeader
        title="Institutional Distinctiveness"
        breadcrumbs={[{ label: 'IQAC' }, { label: 'Institutional Distinctiveness' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            Under NAAC Criterion 7.3, Christ College, Pune identifies its institutional distinctiveness
            in transforming the campus into a vibrant <strong>Hub of Art and Culture</strong>. In harmony
            with the college motto &lsquo;Enlighten to Excel&rsquo;, the institution provides an ecosystem
            that nurtures individual student talents, building confidence, leadership, and intercultural harmony.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {DOCUMENTS.map((doc) => (
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

          <h3 className="mt-12 text-base">Cultural Pursuits &mdash; AAGHAAZ</h3>
          <p className="mt-2 text-sm text-cc-text-body">
            Watch highlights of the Student Cultural Association (SCA) showcasing student artistic expression and talent at Christ College, Pune.
          </p>
          <div className="mt-4 overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-black shadow-cc-sm">
            <video
              controls
              preload="metadata"
              className="w-full aspect-video"
              src={aaghaazVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-12 space-y-8">
            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h4 className="font-semibold text-cc-text-heading text-base">
                Student Cultural Association (SCA) Structure
              </h4>
              <p className="mt-2 text-sm text-cc-text-body leading-relaxed">
                The Student Cultural Association operates as a student-driven, faculty-mentored body coordinating flagship initiatives such as <strong>Aaghaaz</strong> (annual talent hunt across 30 events), <strong>Bhasha Utsav</strong> (linguistic diversity festival), <strong>Gloria</strong> (music and choir showcase), and <strong>Chrysalis</strong> (inter-department cultural festival).
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {COMMITTEES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-cc-text-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
