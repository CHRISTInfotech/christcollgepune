import TabbedContentPage from '../../components/TabbedContentPage';
import nirmitiBanner from '../../assets/images/7-centres-and-cells-nirmiti-start-up-and-innovation-centre/nirmiti-banner.png';
import nirmitiLogo from '../../assets/studentlife/cells/Innovation  Centre.jpg';

const EVENTS = [
  {
    name: 'Workshops Activity Name: Practical Entrepreneurship',
    link: 'https://drive.google.com/drive/u/2/folders/1DsQv-kRVwnHsGrLf304b4gCIQifcebkd',
  },
  {
    name: 'One Week Workshop On BOULANGERIE PRODUCTION AND MANAGEMENT',
    link: 'https://drive.google.com/drive/u/2/folders/16IxBIIG_Q3-Qto5WiHnn5i3ZHqSbqQQ6',
  },
  {
    name: 'Entrepreneurship Development Programme Entrepreneurship- A career option for graduates',
    link: 'https://drive.google.com/drive/u/2/folders/1UJn54KQ8pSOyd0D1XE0V-_2R_c8vliYl',
  },
  {
    name: 'Workshop on Entrepreneurship and Start ups',
    link: 'https://drive.google.com/drive/u/2/folders/1-gaWutARRy9XCaVPTa3CHWlQnExYtAdt',
  },
  {
    name: 'Workshop on DEVELOPMENT OF ENTREPRENUERS',
    link: 'https://drive.google.com/drive/u/2/folders/1Ln9QOf8Jxnwsh3mHHEvlrKQdT45rmOKm',
  },
  {
    name: 'Workshop on Entrepreneurship Development Training Programme',
    link: 'https://drive.google.com/drive/u/2/folders/1H1AREvRqxFvJ98IFWAi3CuZjfcvWkRNs',
  },
  {
    name: 'Corporate talk on Dimensions of Organisational culture and its impact on Change Management',
    link: 'https://drive.google.com/drive/u/2/folders/1l7JEH7Up6454RD7cGC2DOrww709YrtS6',
  },
  {
    name: 'Workshop on Enhancing Entreprenurship Skills for Buisness Communication',
    link: 'https://drive.google.com/drive/u/2/folders/1aWFDjcRlUdC0kKTA990Nk3asmW3HEd-O',
  },
  {
    name: 'Webinar on , “Design Your Life: Transform Through Entrepreneurship”',
    link: 'https://drive.google.com/drive/u/0/folders/1HfsBI2H-KA5MNzkJxppxY19jS1QIDKwL',
  },
  {
    name: 'Workshops on Entrepreneurship Development Training Programme',
    link: 'https://drive.google.com/drive/u/0/folders/1yXqVVzYw8qloxcGdizx1fs9DSa68QvV_',
  },
  {
    name: 'Seminar on Licensing and Legal Formalities of Starting a Business Enterprise',
    link: 'https://drive.google.com/drive/u/2/folders/1-7rSpXo6Dblk-zT-u7DpleZnCe2SNLbx',
  },
  {
    name: 'Busiminds',
    link: 'https://drive.google.com/drive/u/2/folders/1P75MVvENh5ROTjOZ8a9AAThcq_cwKggd',
  },
  {
    name: 'Vyapaar 2022',
    link: 'https://drive.google.com/drive/u/0/folders/1odFDxfh8ElQS672_9LCduJ6BggrFdORl',
  },
  {
    name: 'Workshop on Developing Entrepreneurial mindset',
    link: 'https://drive.google.com/drive/u/0/folders/1xAWRwdHri4d9isqE-M-Qp-v7eolEkNXJ',
  },
  {
    name: 'Workshop on ‘E-commerce and Entrepreneurship Development’',
    link: 'https://drive.google.com/drive/u/2/folders/1wlFcJwG_TQeSPg7j95TCCW3qYNQL4yBD',
  },
  {
    name: 'Workshop on Entrepreneurship & Innovation',
    link: 'https://drive.google.com/drive/u/2/folders/1fLpk8KcL69dIzaVjpOI6arJaTEvQcvNA',
  },
  {
    name: 'Workshops on IT in SUPPLY CHAIN MANAGEMENT',
    link: 'https://drive.google.com/drive/u/2/folders/1Ya0cZWQVqm2tRvPe8h8DAl8uqDKQ-KfP',
  },
  {
    name: 'Workshop on “Entrepreneurship Skill, Attitude and Behaviour Development”',
    link: 'https://drive.google.com/drive/u/2/folders/1r46l1QLxppXzp_wbMRggbhwqsyimTv7d',
  },
  {
    name: 'Workshop on Entrepreneurship',
    link: 'https://drive.google.com/drive/u/2/folders/1o3TL7D0pWy3g4pflXXbBxqH4IKWtIYpE',
  },
  {
    name: 'Workshop on Business Plan',
    link: 'https://drive.google.com/drive/u/2/folders/1Ny8L90qSHJlYSp_pQKN9g9GFxyxVH2Fj',
  },
  {
    name: 'Workshop on Supply Chain Management',
    link: 'https://drive.google.com/drive/u/2/folders/18Rci1JK4hK8QGiPJmjdzchgiJtEi4yJ2',
  },
];

function HomeTab() {
  return (
    <>
      <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wide text-cc-primary">
        Launched 3 December 2022
      </span>
      <h2>Introduction & About Us</h2>
      <p className="mt-4 text-cc-text-body">
        Welcome to Nirmiti, the cutting-edge Startup and Innovation Center launched by Christ College Pune on December 3rd, 2022. As a pivotal milestone in Christ College's 15-year journey, Nirmiti Center embodies our commitment to fostering innovation and empowering the entrepreneurial spirit among students. At Nirmiti Center, we recognize the power of innovative ideas and their potential to transform into groundbreaking ventures. Our mission is to provide a nurturing environment that encourages students to explore their creativity and turn their visionary concepts into reality. We firmly believe in promoting innovation without bias, creating a space where all young minds can thrive.
      </p>
      <p className="mt-4 text-cc-text-body">
        Nirmiti is more than just a center; it's a catalyst for change. We understand the importance of staying abreast of in-trend products and technologies. Through Nirmiti, we aim to channelize the efforts of our students, guiding them towards the creation of ventures that resonate with contemporary market demands. Our center serves as vibrant hubs for networking, offering students the unique opportunity to connect with fellow entrepreneurs, seasoned professionals, and potential investors. These connections are invaluable, providing avenues for collaboration, mentorship, and exposure. By fostering these relationships, we empower our students to access funding, gain visibility, and discover new business prospects.
      </p>

      <h2 className="mt-10">Vision</h2>
      <p className="mt-4 text-cc-text-body">
        To inspire and equip students with the skills, mindset, and network to pursue their entrepreneurial passions and create innovative solutions for the world’s most pressing problems.
      </p>

      <h2 className="mt-10">Mission</h2>
      <p className="mt-4 text-cc-text-body">
        To foster a culture of creativity and collaboration among students, faculty, and industry partners, and to provide them with the resources, guidance, and opportunities to develop and implement innovative solutions for real-world challenges.
      </p>
    </>
  );
}

function EventsTab() {
  return (
    <div className="max-w-3xl">
      <h2>Events</h2>
      <dl className="mt-6 flex flex-col divide-y divide-cc-gray-200">
        {EVENTS.map((item, index) => (
          <div key={`${item.name}-${index}`} className="py-4 first:pt-0 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <dt className="text-cc-text-body font-medium leading-relaxed">{item.name}</dt>
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center rounded-cc-pill bg-cc-primary px-4 py-2 text-sm font-semibold text-cc-white transition-colors duration-[350ms] hover:bg-cc-primary-dark shadow-sm"
              >
                View Details
              </a>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}

function LogoTab() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-start">
      <div className="w-full md:w-1/3 shrink-0">
        <img
          src={nirmitiLogo}
          alt="Nirmiti Logo representing innovation aspects"
          className="w-full max-w-sm rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-4 shadow-cc-sm object-contain"
        />
      </div>
      <div className="flex-1">
        <h2>About the Nirmiti Logo</h2>
        <p className="mt-4 text-cc-text-body leading-relaxed">
          The logo of Nirmiti represents the various aspects of the innovation process and the values of the center.
        </p>
        <ul className="mt-6 flex flex-col gap-4">
          <li className="flex items-start gap-3 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span><strong>Root at the Bottom:</strong> Symbolizes the depth and foundation of the ideas, as well as the connection to the earth and nature.</span>
          </li>
          <li className="flex items-start gap-3 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span><strong>Rocket:</strong> Represents the inspiration and motivation that drives the students to pursue their passions and create innovative solutions.</span>
          </li>
          <li className="flex items-start gap-3 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span><strong>Blue Wheel:</strong> Signifies the idea itself, as well as the cycle of learning and improvement.</span>
          </li>
          <li className="flex items-start gap-3 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span><strong>Yellow Part of the Wheel:</strong> Depicts the society and the impact that the ideas have on the world.</span>
          </li>
          <li className="flex items-start gap-3 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span><strong>Dotted Line:</strong> Shows the pathway to the brighter future ahead, representing hope and optimism.</span>
          </li>
          <li className="flex items-start gap-3 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span><strong>Rupee Sign:</strong> Indicates the funding and support that the center provides to the students.</span>
          </li>
          <li className="flex items-start gap-3 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span><strong>Brain & Face:</strong> Formed by the combination of the elements, suggesting the creativity and intelligence of the students, as well as the human and emotional aspects of innovation.</span>
          </li>
          <li className="flex items-start gap-3 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span><strong>Leaves:</strong> Symbolize the possibilities and opportunities to get global and have a wider scope.</span>
          </li>
        </ul>
        <p className="mt-6 text-cc-text-body leading-relaxed">
          The logo uses a modern and sleek font that matches the style and tone of the center, which is dynamic, professional, and friendly. The logo also uses a vibrant and contrasting color scheme that reflects the energy and diversity of the center and its students.
        </p>
      </div>
    </div>
  );
}

export default function NirmitiStartUpAndInnovationCentre({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Nirmiti Start-Up and Innovation Centre"
      breadcrumbLabel="Nirmiti Start-Up and Innovation Centre"
      description="Nirmiti, the Start-Up and Innovation Centre at Christ College, Pune, launched on 3 December 2022, cultivates student entrepreneurship, mentorship and networking with investors."
      bannerImage={nirmitiBanner}
      bannerAlt="Award ceremony on stage at a Nirmiti Start-Up and Innovation Centre event"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'events', label: 'Events', render: () => <EventsTab /> },
        { key: 'logo', label: 'Logo', render: () => <LogoTab /> },
      ]}
    />
  );
}
