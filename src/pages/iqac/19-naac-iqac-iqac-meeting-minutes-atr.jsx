import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import minutes202223 from '../../assets/iqac/meeting-minutes-2022-23.pdf';
import minutes202122 from '../../assets/iqac/meeting-minutes-2021-22.pdf';
import minutes202021 from '../../assets/iqac/meeting-minutes-2020-21.pdf';
import minutes201920 from '../../assets/iqac/meeting-minutes-2019-20.pdf';
import minutes201819 from '../../assets/iqac/meeting-minutes-2018-19.pdf';

const DOCUMENTS = [
  { name: 'IQAC Meeting Minutes 2022–23', file: minutes202223 },
  { name: 'IQAC Meeting Minutes 2021–22', file: minutes202122 },
  { name: 'IQAC Meeting Minutes 2020–21', file: minutes202021 },
  { name: 'IQAC Meeting Minutes 2019–20', file: minutes201920 },
  { name: 'IQAC Meeting Minutes 2018–19', file: minutes201819 },
];

export default function MeetingMinutesAtr() {
  return (
    <>
      <Seo
        title="Meeting Minutes / ATR"
        description="Minutes of IQAC meetings and Action Taken Reports (ATR) at Christ College, Pune, recording quality-related decisions and their follow-up across academic years."
      />
      <PageHeader title="Meeting Minutes / ATR" breadcrumbs={[{ label: 'IQAC' }, { label: 'Meeting Minutes / ATR' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            The Internal Quality Assurance Cell (IQAC) meets periodically to review the college&rsquo;s
            quality initiatives, record decisions and track the Action Taken Report (ATR) on
            previously identified action points. Minutes of these meetings, by academic year, are
            listed below.
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
        </div>
      </section>
    </>
  );
}
