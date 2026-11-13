import TabbedContentPage from '../../components/TabbedContentPage';
import CentreVisionMission from '../../components/CentreVisionMission';
import iprcBanner from '../../assets/images/7-centres-and-cells-intellectual-property-rights-cell/iprc-banner.png';

const OBJECTIVES = [
  'To create awareness about IPRs, especially Patents / Copyright.',
  'To enable Patents / Copyright searches.',
  'To guide inventors in respect of patenting their inventions.',
  'To setup IP Cell at Universities and Engineering Colleges.',
  'To promote a better understanding of IPR.',
];

const MISSION_POINTS = [
  { title: 'Creating Awareness', description: 'Promote awareness and understanding of Intellectual Property Rights, their importance, legal provisions and relevance among students and faculty members.' },
  { title: 'Encouraging Innovation', description: 'Foster creativity, originality and innovative thinking by providing an enabling environment for students and faculty to develop and explore new ideas.' },
  { title: 'Promoting Intellectual Property Protection', description: 'Educate and guide individuals on the identification, protection, registration and management of intellectual property, including patents, copyrights, trademarks and industrial designs.' },
  { title: 'Supporting Research and Development', description: 'Encourage research-oriented activities and assist in identifying intellectual property emerging from academic projects, research work and innovative initiatives.' },
  { title: 'Building Industry and Institutional Collaborations', description: 'Facilitate interactions with legal professionals, industry experts, research organisations and academic institutions to strengthen IPR knowledge and practical exposure.' },
];

function HomeTab() {
  return (
    <>
      <h2>About Us</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The Intellectual Property Rights (IPR) Cell of Christ College Pune is established with
        the objective of fostering a culture of innovation, creativity, research and
        intellectual property awareness among students and faculty members. The Cell serves as
        a platform to promote understanding of Intellectual Property Rights and their
        significance in protecting and encouraging original ideas, innovations, inventions and
        creative works.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        In an era driven by knowledge, technology and innovation, understanding intellectual
        property has become essential for academic and professional growth. The IPR Cell
        endeavours to create awareness about various forms of intellectual property, including
        patents, copyrights, trademarks and industrial designs, while educating the academic
        community about their legal frameworks, registration procedures, protection mechanisms
        and practical applications.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body">
        The Cell aspires to bridge the gap between knowledge and its practical application by
        nurturing an environment where originality is valued, creativity is encouraged and
        intellectual contributions are recognised and protected.
      </p>

      <CentreVisionMission
        vision="To establish a vibrant ecosystem of innovation, creativity and research by fostering intellectual property awareness and promoting a culture that values, protects and encourages original ideas and intellectual contributions."
        mission={MISSION_POINTS}
      />

      <div className="mt-10 max-w-2xl">
        <h2>Objectives</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {OBJECTIVES.map((item) => (
            <li key={item} className="flex items-start gap-2 text-cc-text-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
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

export default function IntellectualPropertyRightsCell({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Intellectual Property Rights Cell"
      breadcrumbLabel="Intellectual Property Rights Cell"
      breadcrumbSection="Centres & Cells"
      description="The Intellectual Property Rights Cell at Christ College, Pune fosters innovation, creativity and research by promoting awareness of patents, copyrights, trademarks and industrial designs among students and faculty."
      tagline="Patents • Copyright • Innovation Awareness"
      bannerImage={iprcBanner}
      bannerAlt="Christ (Deemed to be University) campus building at Lavasa, Pune"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'events', label: 'Events', render: () => <EventsTab /> },
      ]}
    />
  );
}
