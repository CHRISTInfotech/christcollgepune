import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import electoralClubPdf from '../../assets/studentlife/cells/Electro club.pdf';

const ROLES = [
  'Educate students about the electoral process, the importance of voting, and the functioning of democratic institutions',
  'Facilitate voter registration drives to ensure eligible students are registered to vote',
  'Encourage and motivate students to cast their votes in local, state and national elections',
  'Keep students informed about current political issues, candidates and election dates',
  'Coordinate community service projects related to civic engagement',
];

export default function ElectoralLiteracyClub() {
  return (
    <>
      <Seo
        title="Electoral Literacy Club"
        description="The Electoral Literacy Club at Christ College, Pune promotes civic engagement, electoral awareness and responsible citizenship among students through voter education and registration drives."
      />
      <PageHeader title="Electoral Literacy Club" breadcrumbs={[{ label: 'Student Life' }, { label: 'Electoral Literacy Club' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>About the Club</h2>
          <p className="mt-4 text-cc-text-body">
            The Electoral Literacy Club promotes civic engagement, awareness about the electoral
            process, and responsible citizenship among students.
          </p>

          <h3 className="mt-8 text-base">Roles &amp; Responsibilities</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {ROLES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={electoralClubPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Electoral Literacy Club</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
