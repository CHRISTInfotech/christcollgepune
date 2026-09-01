import TabbedContentPage from '../../components/TabbedContentPage';

const RULES_SECTIONS = [
  {
    title: 'Library Regulations',
    items: [
      'Students, teaching staff and non-teaching staff of the College are eligible for making use of the college library.',
      'Strict silence should be observed in the library.',
      'The library will be kept open on all working days from 8:30 a.m. to 4:00 p.m.',
      'Students have to keep their baggage at the baggage counter.',
      'Students have to return the library books and clear the library dues before collecting the hall tickets of the University Examination.',
      'In case of a student losing a book, the student will have to replace the book or double the amount of the book will have to be refunded.',
    ],
  },
  {
    title: 'Issue and Return of the Books',
    items: [
      'Identity card must be produced for borrowing books from the library.',
      'Students can take two books at a time using their ID cards for a period of seven days.',
      'If the student fails to return or renew the book on the due date, a fine of Rs. 2/- will be charged per day.',
    ],
  },
  {
    title: 'Reference Section',
    items: [
      'Students can take one book at a time using their identity card.',
      'The reference section will be open from 8:30 a.m. to 3:30 p.m. ID cards should be submitted for referring books.',
    ],
  },
];

const SERVICES = [
  {
    title: '1) Circulation Service',
    description:
      'The library follows an Open Access policy. You can pick a book of your choice from the shelves and may borrow or refer to it in the library.',
  },
  {
    title: '2) Reference & Referral Service',
    description:
      'The library provides the required information and reading material to the users and sometimes users are directed to external information resources as per their need.',
  },
  {
    title: '3) Internet Facility',
    description: 'The library has computer terminals to facilitate access to the digital world.',
  },
  {
    title: '4) Baggage Section',
    description: 'The baggage section is available for keeping personal belongings during library use.',
  },
  {
    title: '5) Visiting Information',
    description: 'We welcome the use of the library by our alumni for their reference.',
  },
  {
    title: '6) User Orientation',
    description: 'The library offers a user orientation programme to avail library services.',
  },
  {
    title: '7) Current Awareness Service (CAS)',
    description:
      'Teachers and students are alerted with the current information under this service. CAS is provided through e-mail. Important news, resources and the table of contents of periodicals are provided through this service.',
  },
  {
    title: '8) Periodical Section',
    description:
      'Periodical is one of the most important sources of information in the library. It carries the latest information in all fields of knowledge. The library provides many subject related periodicals to enhance the user’s knowledge base.',
  },
];

const COLLECTION = [
  { label: 'Books', value: '9,488' },
  { label: 'Periodicals', value: '15' },
  { label: 'Newspapers', value: '6' },
  { label: 'Database (E-books, E-Journal)', value: 'N-List' },
];

function AboutTab() {
  return (
    <div className="max-w-3xl">
      <h2>About the Library</h2>
      <p className="mt-4 text-cc-text-body">
        The Christ College library occupies a space of 1,975 square feet on the third floor. The
        college&rsquo;s extensive library offers the ideal setting for teachers and students to
        conduct independent study and research. In addition to subscribing to N-List, it has a
        sizable collection of books, periodicals and reference material. The library has
        subscribed to all important publications for daily information.
      </p>
      <p className="mt-4 text-cc-text-body">
        The library offers internet access, a luggage check-out station, reprography services, a
        newspaper section, and an area for periodicals. For more accessible access to the online
        world, the library has internet workstations.
      </p>
    </div>
  );
}

function RulesTab() {
  return (
    <div className="max-w-3xl">
      <h2>Library Rules</h2>
      <p className="mt-4 text-cc-text-body">
        Welcome to Christ College Library. This library is your store-house of knowledge. Kindly
        observe the following guidelines to get the best of this library for you and others.
      </p>
      {RULES_SECTIONS.map((section) => (
        <div key={section.title}>
          <h3 className="mt-8 text-base">{section.title}</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {section.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ServicesTab() {
  return (
    <div className="max-w-3xl">
      <h2>Library Services</h2>
      <dl className="mt-6 flex flex-col divide-y divide-cc-gray-200">
        {SERVICES.map((item) => (
          <div key={item.title} className="py-4 first:pt-0">
            <dt className="font-semibold text-cc-text-heading">{item.title}</dt>
            <dd className="mt-1 text-cc-text-body">{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CollectionTab() {
  return (
    <div className="max-w-3xl">
      <h2>Library Collection</h2>
      <div className="mt-6 overflow-hidden rounded-cc-lg border border-cc-gray-200">
        <table className="w-full text-left">
          <tbody>
            {COLLECTION.map((row, index) => (
              <tr key={row.label} className={index % 2 === 0 ? 'bg-cc-bg-page' : 'bg-cc-bg-surface'}>
                <th scope="row" className="px-5 py-3 font-semibold text-cc-text-heading">{row.label}</th>
                <td className="px-5 py-3 text-cc-text-body">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function LibraryAboutUs({ initialTab = 'about' }) {
  return (
    <TabbedContentPage
      pageTitle="Library"
      breadcrumbLabel="Library"
      description="The Christ College, Pune library — a 1,975 sq. ft. collection of books, periodicals and reference material with N-List access, plus library rules, services and collection statistics."
      initialTab={initialTab}
      tabs={[
        { key: 'about', label: 'About Us', render: () => <AboutTab /> },
        { key: 'rules', label: 'Library Rules', render: () => <RulesTab /> },
        { key: 'services', label: 'Library Services', render: () => <ServicesTab /> },
        { key: 'collection', label: 'Library Collection', render: () => <CollectionTab /> },
      ]}
    />
  );
}
