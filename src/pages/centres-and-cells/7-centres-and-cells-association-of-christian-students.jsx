import TabbedContentPage from '../../components/TabbedContentPage';
import ImageCarousel from '../../components/ImageCarousel';
import CentreVisionMission from '../../components/CentreVisionMission';
import { UsersIcon } from '../../components/icons';
import investiture1 from '../../assets/images/gallery/acs-investiture-ceremony/1.jpg';
import investiture2 from '../../assets/images/gallery/acs-investiture-ceremony/2.jpg';
import investiture3 from '../../assets/images/gallery/acs-investiture-ceremony/3.jpg';
import investiture4 from '../../assets/images/gallery/acs-investiture-ceremony/4.jpg';
import investiture5 from '../../assets/images/gallery/acs-investiture-ceremony/5.jpg';
import investiture6 from '../../assets/images/gallery/acs-investiture-ceremony/6.jpg';
import mass1 from '../../assets/images/gallery/acs-first-friday-holy-mass/1.jpg';
import mass2 from '../../assets/images/gallery/acs-first-friday-holy-mass/2.jpg';

const INVESTITURE_IMAGES = [investiture1, investiture2, investiture3, investiture4, investiture5, investiture6];
const MASS_IMAGES = [mass1, mass2];

const EVENTS = [
  {
    name: 'Investiture Ceremony',
    images: INVESTITURE_IMAGES,
    description: 'A ceremony to formally recognise and entrust responsibilities to the newly appointed student leaders of ACS, encouraging them to lead with faith, dedication, humility, and commitment to service.',
  },
  {
    name: 'First Friday Holy Mass',
    images: MASS_IMAGES,
    description: 'ACS organises Holy Mass on the first Friday of every month, providing students with an opportunity to deepen their faith, seek spiritual guidance, and come together in prayer and worship.',
  },
  {
    name: 'Saturday Campus Gatherings',
    description: 'Conducted every Saturday to encourage fellowship, spiritual growth, and unity among students — including prayer, Bible reflections, faith-sharing, interactive activities, and opportunities to strengthen the relationship with Christ.',
  },
];

function HomeTab() {
  return (
    <>
      <h2>About ACS</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The Association of Christian Students (ACS) at Christ College Pune is a faith-based student
        association dedicated to nurturing spiritual growth, promoting Christian values, and fostering
        unity, love, and service among students.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        Inspired by the teachings of Jesus Christ, ACS provides a platform for students to strengthen
        their faith, develop leadership qualities, and actively participate in spiritual and social
        activities. Through prayer, fellowship, worship, and community service, the association
        encourages students to become responsible individuals who contribute positively to society.
        ACS believes in faith, hope, love, compassion, and service, guiding students to live meaningful
        lives rooted in Christian principles.
      </p>

      <CentreVisionMission
        vision="To build a Christ-centred student community that grows in faith, embraces unity, inspires leadership, and serves society with love, compassion, and integrity."
        mission="To strengthen students' spiritual lives through prayer, worship and fellowship; promote Christian values, moral integrity and responsible leadership; encourage unity, mutual respect and harmony among students; inspire students to use their talents and gifts in service of others; and organise spiritual, cultural and community service activities that foster personal growth and social responsibility."
      />
    </>
  );
}

function EventsTab() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {EVENTS.map((item) => (
        <div
          key={item.name}
          className="group relative overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-cc-md"
        >
          <div className="relative">
            {item.images ? (
              <ImageCarousel images={item.images} alt={item.name} className="h-32 w-full" />
            ) : (
              <div className="h-32 w-full bg-gradient-to-br from-cc-primary to-cc-primary-deeper" />
            )}
            <span className="absolute -bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-cc-bg-card bg-cc-primary text-white shadow-cc-sm">
              <UsersIcon className="h-4 w-4" />
            </span>
          </div>
          <div className="p-4 pt-6">
            <h4 className="text-sm font-semibold leading-snug break-words">{item.name}</h4>
            <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light line-clamp-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AssociationOfChristianStudents({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Association of Christian Students"
      breadcrumbLabel="Association of Christian Students"
      breadcrumbSection="Centres & Cells"
      description="The Association of Christian Students (ACS) at Christ College, Pune is a faith-based student association nurturing spiritual growth, Christian values, and unity, love and service among students."
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'About', render: () => <HomeTab /> },
        { key: 'events', label: 'Events', render: () => <EventsTab /> },
      ]}
    />
  );
}
