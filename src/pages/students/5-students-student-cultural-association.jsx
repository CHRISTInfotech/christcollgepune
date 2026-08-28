import TabbedContentPage from '../../components/TabbedContentPage';
import { UsersIcon, CompassIcon, AwardIcon } from '../../components/icons';
import scaBanner from '../../assets/images/5-students-student-cultural-association/sca-banner.png';

const PILLARS = [
  {
    icon: UsersIcon,
    title: 'Creative Platform',
    description:
      'A student-run body that provides a platform for showcasing one’s talents and nurturing their skills.',
  },
  {
    icon: CompassIcon,
    title: 'Curricular & Extra-Curricular',
    description: 'Looks after both the curricular and extra-curricular activities conducted on campus.',
  },
  {
    icon: AwardIcon,
    title: 'Vibrant Campus Life',
    description:
      'Keeps the campus abuzz with departmental, inter-departmental, intra-college and inter-college events.',
  },
];

const KEY_BENEFITS = [
  'Representation of the University in outstation fests.',
  'Development of team building skills.',
  'Opportunity to showcase talent and fine tune them.',
  'Bring out creative and out of the box ideas.',
  'Connect and create strong bond with team members.',
];

const EVENTS = [
  {
    name: 'Aaghaz',
    description:
      'A vibrant and spirited event that celebrates the diverse talents and abilities of students within the college community. It is an engaging and dynamic platform where students from various disciplines come together to showcase their skills in fields like music, dance, literature, theater, and more. The fest provides an encouraging and supportive environment for participants to exhibit their creativity and passion while fostering a sense of camaraderie and healthy competition.',
  },
  {
    name: 'Reel It Competition',
    description:
      'An exhilarating and innovative event that celebrates the art of storytelling through video production. Participants are invited to unleash their creativity and filmmaking prowess as they craft compelling short films or videos on various themes or topics.',
  },
  {
    name: 'Bhasha Utsav',
    description:
      'Ethnic Day in college is a vibrant and joyous celebration that highlights the diverse cultural backgrounds of students on campus. Students come together to showcase the beauty of their traditional attire, music, dance, and cuisine, representing various regions and communities. Cultural performances, exhibitions, and interactive activities further enrich the festivities.',
  },
  {
    name: 'Gloria',
    description:
      'The Carol Singing Event is a heartwarming and cherished tradition that takes place during the festive season, typically around Christmas time. It brings together individuals of all ages and backgrounds to celebrate the joy and spirit of the holiday season through the power of music and song.',
  },
  {
    name: 'POV',
    description:
      'The Photography Competition is an exciting and creative event that celebrates the art of capturing moments through the lens of a camera. Amateur and professional photographers alike are invited to participate, showcasing their unique perspectives and technical skills.',
  },
  {
    name: 'Artscape',
    description:
      'The Posters Artworks Event is a captivating showcase of creative expression and visual storytelling, giving artists and designers a platform to exhibit their talents through captivating and thought-provoking posters, from bold designs to subtle and intricate artworks.',
  },
  {
    name: 'Trill of the Quill',
    description:
      'A Debate Competition that is an intellectually stimulating and dynamic event, encouraging participants to engage in spirited discussions on a wide range of topics and showcase their critical thinking, persuasive communication, and public speaking skills.',
  },
  {
    name: 'Chrysolite',
    description:
      'The Annual Day and Cultural event showcases the vibrant and diverse talents of students in a spectacular celebration, recognising academic achievements and the collective efforts of the college community, followed by an exhilarating Dance Cultural event with colorful costumes and energetic performances.',
  },
  {
    name: 'Chrysalis',
    description:
      'A captivating and multi-dimensional celebration of diversity, art, and creativity, bringing together students, artists, and enthusiasts to showcase their talents and cultural heritage through traditional attire, handicrafts, and cuisines. The campus is segmented into six teams competing for the championship title.',
  },
];

const WINGS = [
  {
    name: 'Head Student Coordinators',
    description: 'A key leadership role overseeing cultural activities, acting as a liaison between the association and students.',
  },
  {
    name: 'Student Development Office Representative',
    description: 'Representation of SCA in the Student Council, acting as a bridge between these bodies.',
  },
  {
    name: 'Stage Committee',
    description: 'Organizes stage events like Dance, Music, and Theatre (backstage, registration, slot picking, and judges’ files).',
  },
  {
    name: 'Art Committee',
    description: 'Organizes art events like painting, sketching and cartooning (registration, coding, venue, materials, judges’ files).',
  },
  {
    name: 'Literary Committee',
    description: 'Organizes literary events like quiz, debate, and dumb charades (registration, slots, venue, judges’ files).',
  },
  {
    name: 'Hospitality Committee',
    description: 'Helps take care of judges/guests, outstation participants, first aid, and volunteer refreshments.',
  },
  {
    name: 'Auditorium Committee',
    description: 'Maintains discipline in the auditorium and seating arrangements, and helps other committees organize events.',
  },
  {
    name: 'Record Committee',
    description: 'Takes care of record keeping, report writing, and attendance of volunteers for every event.',
  },
  {
    name: 'Creative Committee',
    description: 'An artistic and creative team that decorates and makes events colorful with props, decorations, and handmade posters.',
  },
  {
    name: 'EMCEE Committee',
    description: 'The Master of Ceremonies represents the event, keeps the show on schedule, and engages the audience.',
  },
  {
    name: 'Purchase Committee',
    description: 'Manages budgets, obtains quotations, and deals with vendors for event supplies.',
  },
  {
    name: 'Media Committee',
    description: 'Takes care of photography and videography, designing posters and brochures, publicity, and the reception desk for every event.',
  },
];

function HomeTab() {
  return (
    <>
      <div className="max-w-3xl">
        <h2>About SCA</h2>
        <p className="mt-4 text-cc-text-body">
          The Student Cultural Association (SCA) is a platform dedicated to fostering holistic
          development among students at Christ College, Pune. Aligned with the
          college&rsquo;s vision and mission, SCA aims to empower Christites by offering
          opportunities for personal growth and transformation.
        </p>
        <p className="mt-4 text-cc-text-body">
          Embracing a wide array of artistic expressions, such as dance, music, literature,
          and theatre, the Student Cultural Association recognizes the inherent beauty in all
          art forms. It wholeheartedly encourages students to step forward and showcase their
          talents, fostering an environment of creativity and self-improvement on campus.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <pillar.icon width={22} height={22} />
            </span>
            <h3 className="mt-4 text-base">{pillar.title}</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">{pillar.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function WhoAreWeTab() {
  return (
    <div className="max-w-3xl">
      <h2>Who Are We</h2>
      <p className="mt-4 text-cc-text-body">
        Consisting of the volunteer body and the College teams of dance, music, theater and
        literary events, SCA looks after the curricular as well as the extra curricular
        activities that are conducted on campus. Student Cultural Association is a student run
        body which provides a platform for showcasing one&rsquo;s talents and nurturing their
        skills. Through the various activities and events organized by the team, the students
        get to connect, explore and transform themselves into a better individual, ready to
        face the days to come in the near future.
      </p>

      <h2 className="mt-10">Key Benefits of Joining Student Welfare Office</h2>
      <ul className="mt-4 flex flex-col gap-2">
        {KEY_BENEFITS.map((item) => (
          <li key={item} className="flex items-start gap-2 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhatWeDoTab() {
  return (
    <div>
      <div className="max-w-3xl">
        <h2>What We Do</h2>
        <p className="mt-4 text-cc-text-body">
          The Student Cultural Association has set a benchmark in keeping the campus abuzz and
          alive with the various events and activities organized on campus, whether
          departmental, inter-departmental, intra-college, or inter-college.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {EVENTS.map((event) => (
          <div key={event.name} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <h3 className="text-base uppercase tracking-wide text-cc-primary">{event.name}</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WingsTab() {
  return (
    <div className="max-w-3xl">
      <h2>Volunteer Body</h2>
      <dl className="mt-6 flex flex-col divide-y divide-cc-gray-200">
        {WINGS.map((wing) => (
          <div key={wing.name} className="py-4 first:pt-0">
            <dt className="font-semibold text-cc-text-heading">{wing.name}</dt>
            <dd className="mt-1 text-sm text-cc-text-muted-light">{wing.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function StudentCulturalAssociation({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Student Cultural Association"
      description="The Student Cultural Association (SCA) at Christ College, Pune is a platform for holistic development through dance, music, literature and theatre — who they are, what they do, and their volunteer wings."
      bannerImage={scaBanner}
      bannerAlt="Students performing on stage at a Student Cultural Association event"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'who-are-we', label: 'Who are We', render: () => <WhoAreWeTab /> },
        { key: 'what-we-do', label: 'What we do', render: () => <WhatWeDoTab /> },
        { key: 'wings', label: 'Wings', render: () => <WingsTab /> },
      ]}
    />
  );
}
