import TabbedContentPage from '../../components/TabbedContentPage';

const RULES_SECTIONS = [
  {
    title: 'Library Regulations',
    items: [
      'Students, teaching staff and non-teaching Staff of the College are eligible for making use of the college library.',
      'Strict silence should be observed in the library.',
      'The library will be kept open on all working days from 8:30 a.m. to 4:00 p.m.',
      'Students have to keep their baggage at baggage counter.',
      'Students have to return the library books & clear the library dues before collecting the hall tickets of the University Examination.',
      'In case of a student losing a book, the student will have to replace the book or double the amount of the book will have to be refunded.',
    ],
  },
  {
    title: 'Issue and Return of the Books',
    items: [
      'Identity Card must be produced for borrowing books from the library.',
      'Students can take Two Books at a time using their ID Cards for a period of seven days.',
      'If the student fails to return or renew the book on the due date, a fine of Rs. 2/- will be charged per day.',
    ],
  },
  {
    title: 'Reference Section',
    items: [
      'Students can take one book at a time using their identity card.',
      'Reference section will be open from 8:30 a.m. to 3:30 p.m. ID cards should be submitted for referring books.',
    ],
  },
];

const SERVICES = [
  {
    number: '1',
    title: 'Circulation Service',
    description:
      'The library follows an Open Access policy. You can pick a book of your choice from the shelves and may borrow or refer to it in the library.',
  },
  {
    number: '2',
    title: 'Reference & Referral Service',
    description:
      'The library provides the required information and reading material to the users and sometimes users are directed to the external information resources as per their need.',
  },
  {
    number: '3',
    title: 'Internet Facility',
    description: 'The library has computer terminals to facilitate access to the digital world.',
  },
  {
    number: '4',
    title: 'Baggage Section',
    description: 'The Baggage section is available for keeping of personal belongings during library use.',
  },
  {
    number: '5',
    title: 'Visiting Information',
    description: 'We welcome the use of the library by our alumni for their reference.',
  },
  {
    number: '6',
    title: 'User Orientation',
    description: 'The Library offers user orientation program to avail library services.',
  },
  {
    number: '7',
    title: 'Current Awareness Service (CAS)',
    description:
      'Teachers and students are alerted with the current information under this service. CAS is provided through e-mail. Important news, resources, table of content of periodicals are provided through this service.',
  },
  {
    number: '8',
    title: 'Periodical Section',
    description:
      'Periodical is one of the most important sources of information in the library. It carries the latest information in all fields of knowledge. Library provides many subject related periodicals to enhance user’s knowledge base.',
  },
];

const COLLECTION_STATS = [
  {
    label: 'Books',
    value: '9,488',
    icon: '📚',
    detail: 'Textbooks, reference volumes, general literature & academic titles',
  },
  {
    label: 'Periodicals',
    value: '15',
    icon: '📰',
    detail: 'National & international academic journals and subject magazines',
  },
  {
    label: 'Newspapers',
    value: '6',
    icon: '🗞️',
    detail: 'Leading English, Marathi, and national daily editions',
  },
  {
    label: 'Database (E-books, E-Journal)',
    value: 'N-List',
    icon: '💻',
    detail: 'INFLIBNET national digital consortium with lakhs of e-books & e-journals',
  },
];

function HomeTab({ goToTab }) {
  return (
    <div className="space-y-8">
      {/* About Us Card */}
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
          Academic Knowledge Hub &bull; 3rd Floor
        </span>
        <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">About Us</h2>
        <div className="mt-4 space-y-4 text-cc-text-body leading-relaxed text-justify [text-align-last:left]">
          <p>
            The Christ College library occupies a space of <strong>1975 square feet on the third floor</strong>. The
            college&rsquo;s extensive library offers the ideal setting for teachers and students to conduct independent
            study and research. In addition to subscribing to <strong>N-List</strong>, it has a sizable library of
            books, periodicals, and reference material. The library has subscribed to all important publications for
            daily information.
          </p>
          <p>
            The library offers internet access, a luggage check-out station, reprography services, a newspaper, and an
            area for periodicals. For more accessible access to the online world, the library has internet
            workstations.
          </p>
        </div>
      </div>

      {/* Vision Card */}
      <div className="rounded-2xl border border-cc-gray-200 bg-gradient-to-br from-cc-primary/5 via-cc-bg-surface to-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cc-primary text-white shadow-sm font-bold text-lg">
            🌟
          </span>
          <div>
            <h3 className="text-xl font-bold text-cc-text-heading">Vision</h3>
            <p className="text-xs font-medium uppercase tracking-wider text-cc-primary">
              Mission &amp; Service Commitment
            </p>
          </div>
        </div>
        <p className="mt-4 text-base font-medium leading-relaxed text-cc-text-heading">
          &ldquo;The library is committed to fulfil the mission of the SPPU and institute to enhance the quality of
          teaching and learning through updated resources and services.&rdquo;
        </p>
      </div>

      {/* Quick Access Action Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => goToTab('rules')}
          className="group rounded-xl border border-cc-gray-200 bg-cc-bg-surface p-5 text-left shadow-cc-xs transition-all hover:-translate-y-0.5 hover:border-cc-primary hover:shadow-cc-sm"
        >
          <span className="text-2xl">📜</span>
          <h4 className="mt-2 text-sm font-bold text-cc-text-heading group-hover:text-cc-primary">
            Library Rules &rarr;
          </h4>
          <p className="mt-1 text-xs text-cc-text-muted-light">Regulations, timings, and issue policies</p>
        </button>

        <button
          type="button"
          onClick={() => goToTab('services')}
          className="group rounded-xl border border-cc-gray-200 bg-cc-bg-surface p-5 text-left shadow-cc-xs transition-all hover:-translate-y-0.5 hover:border-cc-primary hover:shadow-cc-sm"
        >
          <span className="text-2xl">⚡</span>
          <h4 className="mt-2 text-sm font-bold text-cc-text-heading group-hover:text-cc-primary">
            Library Services &rarr;
          </h4>
          <p className="mt-1 text-xs text-cc-text-muted-light">Open access, CAS, reference &amp; digital lab</p>
        </button>

        <button
          type="button"
          onClick={() => goToTab('collection')}
          className="group rounded-xl border border-cc-gray-200 bg-cc-bg-surface p-5 text-left shadow-cc-xs transition-all hover:-translate-y-0.5 hover:border-cc-primary hover:shadow-cc-sm"
        >
          <span className="text-2xl">📊</span>
          <h4 className="mt-2 text-sm font-bold text-cc-text-heading group-hover:text-cc-primary">
            Library Collection &rarr;
          </h4>
          <p className="mt-1 text-xs text-cc-text-muted-light">9,488+ books, periodicals &amp; N-List database</p>
        </button>
      </div>
    </div>
  );
}

function RulesTab() {
  return (
    <div className="space-y-8">
      {/* Intro Box */}
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
          Code of Conduct &amp; Borrowing Norms
        </span>
        <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">Library Rules</h2>
        <p className="mt-4 text-cc-text-body leading-relaxed">
          Welcome to Christ College Library. This Library is your store-house of knowledge. Kindly observe the
          following guidelines to get the best of this Library for you and the others.
        </p>
      </div>

      {/* Rules Sections */}
      <div className="grid gap-6 md:grid-cols-1">
        {RULES_SECTIONS.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-7"
          >
            <h3 className="text-lg font-bold text-cc-primary sm:text-xl">{section.title}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-lg bg-slate-50/70 p-3 text-sm text-cc-text-body">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-cc-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesTab() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
          Reader Facilities &amp; Academic Assistance
        </span>
        <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">Library Services</h2>
        <p className="mt-2 text-sm text-cc-text-muted-light">
          Comprehensive services provided to empower teaching, learning, and scholarly research.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            className="flex flex-col justify-between rounded-xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-cc-primary/50 hover:shadow-cc-md"
          >
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cc-primary font-bold text-white text-xs">
                  {service.number}
                </span>
                <h3 className="text-base font-bold text-cc-text-heading">{service.title}</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-cc-text-body">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectionTab() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
          Holdings &amp; Digital Resources
        </span>
        <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">Library Collection</h2>
        <p className="mt-2 text-sm text-cc-text-muted-light">
          An extensive collection of print and digital scholarly resources catering to Arts, Science, Commerce, and
          Management disciplines.
        </p>
      </div>

      {/* Collection Stats Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {COLLECTION_STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm transition-all hover:border-cc-primary/40 hover:shadow-cc-md"
          >
            <span className="text-3xl">{stat.icon}</span>
            <span className="mt-3 block text-2xl font-extrabold text-cc-primary">{stat.value}</span>
            <h4 className="mt-1 text-sm font-bold text-cc-text-heading">{stat.label}</h4>
            <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light">{stat.detail}</p>
          </div>
        ))}
      </div>

      {/* Summary Table */}
      <div className="overflow-hidden rounded-2xl border border-cc-gray-200 bg-cc-bg-surface shadow-cc-xs">
        <div className="bg-slate-50 px-6 py-4 border-b border-cc-gray-200">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">Collection Breakdown</h3>
        </div>
        <table className="w-full text-left">
          <tbody>
            {COLLECTION_STATS.map((row, index) => (
              <tr
                key={row.label}
                className={`border-b border-cc-gray-100 last:border-b-0 ${
                  index % 2 === 0 ? 'bg-cc-bg-surface' : 'bg-slate-50/50'
                }`}
              >
                <th scope="row" className="px-6 py-4 text-sm font-semibold text-cc-text-heading">
                  {row.label}
                </th>
                <td className="px-6 py-4 text-sm font-bold text-cc-primary">{row.value}</td>
                <td className="px-6 py-4 text-xs text-cc-text-muted-light hidden sm:table-cell">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function LibraryAboutUs({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Library"
      breadcrumbLabel="Library"
      breadcrumbSection="Centres &amp; Cells"
      description="The Christ College, Pune Library occupies 1975 sq. ft. on the 3rd floor, featuring 9488+ books, N-List digital databases, periodicals, and comprehensive student support services."
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: (goToTab) => <HomeTab goToTab={goToTab} /> },
        { key: 'rules', label: 'Library Rules', render: () => <RulesTab /> },
        { key: 'services', label: 'Library Services', render: () => <ServicesTab /> },
        { key: 'collection', label: 'Library Collection', render: () => <CollectionTab /> },
      ]}
    />
  );
}
