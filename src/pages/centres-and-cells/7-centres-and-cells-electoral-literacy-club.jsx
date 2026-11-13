import TabbedContentPage from '../../components/TabbedContentPage';
import CentreVisionMission from '../../components/CentreVisionMission';
import { DownloadIcon } from '../../components/icons';
import electoralClubPdf from '../../assets/studentlife/cells/Electro club.pdf';

const ROLES = [
  'Educate students about the electoral process, the importance of voting, and the functioning of democratic institutions',
  'Facilitate voter registration drives to ensure eligible students are registered to vote',
  'Encourage and motivate students to cast their votes in local, state and national elections',
  'Keep students informed about current political issues, candidates and election dates',
  'Coordinate community service projects related to civic engagement',
];

function HomeTab() {
  return (
    <div className="max-w-3xl">
      <h2>About the Club</h2>
      <p className="mt-4 text-cc-text-body">
        The club provides a platform for students to understand the significance of voting,
        electoral rights, democratic institutions and the functioning of the electoral system.
        Through voter registration drives, awareness campaigns, interactive sessions,
        competitions and collaborative initiatives, the club encourages students to become
        informed and responsible citizens.
      </p>
      <p className="mt-4 text-cc-text-body">
        The ELC actively works towards bridging the gap between electoral awareness and actual
        participation by educating students about voter registration procedures, the importance
        of ethical voting and their constitutional rights and responsibilities. It also
        encourages students to spread electoral awareness within their families and communities.
      </p>
      <p className="mt-4 text-cc-text-body">
        By cultivating critical thinking, civic responsibility and active democratic
        participation, the Electoral Literacy Club strives to nurture an informed generation
        that values democracy and contributes constructively to nation-building.
      </p>

      <CentreVisionMission
        vision="To nurture informed, responsible and empowered citizens who actively participate in strengthening India’s democratic values and electoral processes."
        mission="To promote electoral awareness and encourage informed voting; facilitate voter registration, especially among first-time voters; educate students about their electoral rights and responsibilities; and encourage ethical voting and active democratic participation."
      />

      <h3 className="mt-10 text-base">Roles &amp; Responsibilities</h3>
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
  );
}

function EventsTab() {
  return (
    <div className="max-w-3xl">
      <h2>Events</h2>
      <p className="mt-4 text-sm italic text-cc-text-muted-light">No events published yet.</p>
    </div>
  );
}

export default function ElectoralLiteracyClub({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Electoral Literacy Club"
      breadcrumbLabel="Electoral Literacy Club"
      breadcrumbSection="Centres & Cells"
      description="The Electoral Literacy Club at Christ College, Pune promotes civic engagement, electoral awareness and responsible citizenship among students through voter education and registration drives."
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'events', label: 'Events', render: () => <EventsTab /> },
      ]}
    />
  );
}
