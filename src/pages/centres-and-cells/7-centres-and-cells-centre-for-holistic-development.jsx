import TabbedContentPage from '../../components/TabbedContentPage';
import ImageCarousel from '../../components/ImageCarousel';
import CentreVisionMission from '../../components/CentreVisionMission';
import { EnvelopeIcon, UsersIcon } from '../../components/icons';
import chdBanner from '../../assets/images/7-centres-and-cells-centre-for-holistic-development/chd-banner.jpg';
import lijiTony from '../../assets/images/2-about-us-administration/staff/liji-tony.png';
import christieCouture1 from '../../assets/images/gallery/christie-couture/1.jpg';
import christieCouture2 from '../../assets/images/gallery/christie-couture/2.jpg';
import christieCouture3 from '../../assets/images/gallery/christie-couture/3.jpg';
import christieCouture4 from '../../assets/images/gallery/christie-couture/4.jpg';
import christieCouture5 from '../../assets/images/gallery/christie-couture/5.jpg';
import christieCouture6 from '../../assets/images/gallery/christie-couture/6.jpg';
import chdSeminars1 from '../../assets/images/gallery/chd-seminars-and-workshops/1.jpg';
import chdSeminars2 from '../../assets/images/gallery/chd-seminars-and-workshops/2.jpg';
import chdSeminars3 from '../../assets/images/gallery/chd-seminars-and-workshops/3.jpg';
import chdSeminars4 from '../../assets/images/gallery/chd-seminars-and-workshops/4.jpg';
import chdSeminars5 from '../../assets/images/gallery/chd-seminars-and-workshops/5.jpg';
import chdSeminars6 from '../../assets/images/gallery/chd-seminars-and-workshops/6.jpg';
import chdSeminars7 from '../../assets/images/gallery/chd-seminars-and-workshops/7.jpg';
import wmhd1 from '../../assets/images/gallery/world-mental-health-day/1.jpg';
import wmhd2 from '../../assets/images/gallery/world-mental-health-day/2.jpg';
import wmhd3 from '../../assets/images/gallery/world-mental-health-day/3.jpg';
import wmhd4 from '../../assets/images/gallery/world-mental-health-day/4.jpg';
import wmhd5 from '../../assets/images/gallery/world-mental-health-day/5.jpg';
import wmhd6 from '../../assets/images/gallery/world-mental-health-day/6.jpg';
import wmhd7 from '../../assets/images/gallery/world-mental-health-day/7.jpg';
import wmhd8 from '../../assets/images/gallery/world-mental-health-day/8.jpg';

const CHRISTIE_COUTURE_IMAGES = [christieCouture1, christieCouture2, christieCouture3, christieCouture4, christieCouture5, christieCouture6];
const CHD_SEMINARS_IMAGES = [chdSeminars1, chdSeminars2, chdSeminars3, chdSeminars4, chdSeminars5, chdSeminars6, chdSeminars7];
const WMHD_IMAGES = [wmhd1, wmhd2, wmhd3, wmhd4, wmhd5, wmhd6, wmhd7, wmhd8];

const RECENT_ACTIVITIES = [
  {
    title: 'Doodle Quest — Mindful Strokes',
    body: 'An art-based initiative that provides students with an opportunity to explore creativity, express themselves and experience the connection between art and emotional well-being.',
  },
  {
    title: 'Life Skills Training',
    body: 'Interactive and experiential programmes that equip students with essential life skills such as communication, emotional intelligence, decision-making, problem-solving, time management and healthy relationship-building, led by our own faculty members.',
  },
  {
    title: 'Christie Couture',
    images: CHRISTIE_COUTURE_IMAGES,
    body: 'A creative and collaborative platform that encourages students to explore their creativity, express their individuality and engage in activities that promote confidence, teamwork and self-expression.',
  },
  {
    title: 'Seminars and Workshops',
    images: CHD_SEMINARS_IMAGES,
    body: 'Interactive sessions led by experts and resource persons on personal development, healthy relationships, leadership, emotional intelligence, social awareness and contemporary issues affecting young people.',
  },
  {
    title: 'Peer Guides Programme',
    body: 'A student volunteer initiative that nurtures empathy, active listening, responsible peer engagement and awareness of appropriate support and referral systems, empowering students to become sensitive, responsible and supportive members of their campus community.',
  },
  {
    title: 'World Mental Health Day — Mental Wellness Passport',
    images: WMHD_IMAGES,
    body: 'An engaging initiative to help students explore and develop healthy coping strategies for everyday challenges. Through the Mental Wellness Passport, students engaged in activities encouraging self-awareness, self-care, emotional regulation and positive coping — 100 completed Wellness Passports were collected, reflecting active student participation.',
  },
  {
    title: 'Community Outreach — STEM Awareness Initiative',
    body: 'An outreach initiative conducted in government schools to create awareness and interest in STEM subjects, introducing school students to the possibilities of STEM education and inspiring them to explore future academic and career opportunities.',
  },
];

const ACTIVITIES_LIST = [
  {
    title: 'Mental Health Support',
    items: [
      'Provide confidential counselling services for students dealing with emotional, psychological, or mental health issues.',
      'Offer crisis intervention and support for students in immediate distress.',
      'Facilitate workshops and seminars on stress management, resilience, and mental health awareness.',
      'Provide students a comfortable and non-judgemental space to discuss their problems and worries. Confidentiality is strictly maintained by the wellness support providers.',
    ],
  },
  {
    title: 'Life Skills Training',
    items: [
      'Develop and deliver life skills workshops and programs that address practical skills needed for personal and academic success. These skills may include stress management, communication, financial literacy, and problem-solving.',
      'Conduct workshops on career development, job search strategies, and interview preparation.',
    ],
  },
  {
    title: 'PeerGuides Training Program',
    items: [
      'Establish and manage a PeerGuides program where experienced students mentor and support their peers.',
      'Train peer mentors to provide guidance on academic and personal challenges, share college experiences, and promote a sense of belonging.',
    ],
  },
  {
    title: 'Preventive Education',
    items: [
      'Create educational campaigns to raise awareness about mental health issues, substance abuse prevention, and stress reduction.',
      'Collaborate with faculty to integrate mental health, well-being and life skills topics into the curriculum.',
    ],
  },
  {
    title: 'Accessibility Services',
    items: [
      'Provide accommodations and support for students with disabilities or special needs to ensure they have equal access to educational resources and opportunities.',
    ],
  },
  {
    title: 'Collaboration and Referrals',
    items: [
      'Collaborate with faculty, staff, and student organizations to create a campus-wide culture of well-being.',
      'Refer students to external mental health professionals or services when necessary.',
    ],
  },
  {
    title: 'Confidentiality and Ethics',
    items: [
      'Maintain strict confidentiality standards and ethical guidelines in all counseling and support services.',
    ],
  },
  {
    title: 'Continuous Improvement',
    items: [
      'Regularly evaluate the effectiveness of counseling programs and support services.',
      'Seek feedback from students and staff to make improvements and adjustments as needed.',
    ],
  },
  {
    title: 'Promotion and Outreach',
    items: [
      'Promote the center\'s services and programs through campaigns, social media, and campus events.',
      'Conduct outreach efforts to identify students in need of support.',
    ],
  },
];

function AboutTab() {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl">
        <p className="text-cc-text-body">
          The Centre for Holistic Development (CHD) is an integral part of Christ College
          Pune&rsquo;s commitment to nurturing well-rounded individuals. Recognising that
          education extends beyond academic achievement, CHD provides students with
          opportunities to explore their potential, develop essential life skills and grow into
          confident, compassionate and responsible individuals.
        </p>
        <p className="mt-4 text-cc-text-body">
          We believe that holistic development is achieved when the different dimensions of an
          individual&rsquo;s life &ndash; personal, emotional, social, intellectual, physical and
          ethical &ndash; are nurtured in an integrated manner. Through interactive workshops,
          experiential learning, creative activities, life skills programmes, leadership
          opportunities and community engagement, CHD encourages students to discover their
          strengths, build meaningful relationships, make responsible choices and prepare for
          the challenges of life.
        </p>
        <p className="mt-4 text-cc-text-body">
          The Centre strives to create an inclusive and vibrant campus environment where every
          student is encouraged to learn, participate, grow and contribute positively to society.
        </p>
      </div>

      <CentreVisionMission
        vision="Embrace Growth, Ignite Brilliance — to create an empowering environment where every student discovers their potential, develops holistically and emerges as a confident, responsible and compassionate individual who contributes meaningfully to society."
        mission="To facilitate the holistic development of students through meaningful opportunities for personal growth, life skills development, leadership, creativity, social engagement and responsible citizenship, empowering students with the knowledge, values, attitudes and competencies necessary to lead purposeful and fulfilling lives."
      />

      <a
        href="mailto:chd@christcollegepune.org"
        className="inline-flex max-w-3xl items-center gap-3 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface px-5 py-3 transition-colors hover:border-cc-primary"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
          <EnvelopeIcon width={18} height={18} />
        </span>
        <span>
          <span className="block text-xs uppercase tracking-wide text-cc-text-muted-light">Email</span>
          <span className="block font-medium text-cc-primary">chd@christcollegepune.org</span>
        </span>
      </a>
    </div>
  );
}

function RecentActivitiesTab() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {RECENT_ACTIVITIES.map((activity) => (
        <div
          key={activity.title}
          className="group relative overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-cc-md"
        >
          <div className="relative">
            {activity.images ? (
              <ImageCarousel images={activity.images} alt={activity.title} className="h-32 w-full" />
            ) : (
              <div className="h-32 w-full bg-gradient-to-br from-cc-primary to-cc-primary-deeper" />
            )}
            <span className="absolute -bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-cc-bg-card bg-cc-primary text-white shadow-cc-sm">
              <UsersIcon className="h-4 w-4" />
            </span>
          </div>
          <div className="p-4 pt-6">
            <h4 className="text-sm font-semibold leading-snug break-words">{activity.title}</h4>
            <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light line-clamp-4">{activity.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CounsellorTab() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-start">
      <div className="w-full md:w-1/3 shrink-0">
        <div className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-4 shadow-cc-sm text-center">
          <img
            src={lijiTony}
            alt="Ms. Liji Tony - Counselor for Holistic Development"
            className="mx-auto h-48 w-48 rounded-full border border-cc-gray-200 object-cover object-top shadow-sm"
          />
          <h3 className="mt-4 text-lg font-bold text-cc-text-heading">Ms. Liji Tony</h3>
          <p className="text-xs uppercase tracking-wider text-cc-text-muted-light mt-1">
            Counselor &amp; Social Worker
          </p>
          <div className="mt-4 border-t border-cc-gray-200 pt-4 text-left text-sm text-cc-text-body space-y-2">
            <p><strong>Timing:</strong><br />8:30 AM - 4:00 PM (Mon-Fri)<br />8:30 AM - 1:30 PM (Sat)</p>
            <p><strong>Place:</strong><br />4th Floor, behind lift cabin</p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-cc-text-body leading-relaxed">
          The college experience is a rollercoaster ride of emotions. From the excitement of new friendships to the challenges of academic pressure, students often find themselves navigating uncharted emotional territories. It is important to provide a safe space for students to express themselves, offering strategies for stress management, and promoting emotional resilience.
        </p>
        <p className="mt-4 text-cc-text-body leading-relaxed">
          Through personalized guidance, we want to empower our students to recognize their strengths and navigate obstacles by mentoring and helping students pen their own stories of success. Armed with self-awareness and resilience, students discover that they possess the inner resources needed to overcome adversity and thrive in the dynamic landscape of higher education.
        </p>

        <blockquote className="mt-6 border-l-4 border-cc-gold bg-cc-bg-surface p-4 text-cc-text-heading italic rounded-r-cc-sm">
          "You have within you right now, everything you need to deal with whatever the world can throw at you."
          <span className="block mt-2 text-sm font-semibold text-cc-text-muted-light not-italic">— Brian Tracy</span>
        </blockquote>

        <h3 className="mt-8">Qualifications &amp; Competence</h3>
        <ul className="mt-4 flex flex-col gap-3">
          <li className="flex items-start gap-2.5 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span>MSW Specialization in Medical and Psychiatric Social Work.</span>
          </li>
          <li className="flex items-start gap-2.5 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span>Post Graduate Diploma in Psychological Counselling (PGDPC).</span>
          </li>
          <li className="flex items-start gap-2.5 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            <span>More than 10 years of experience working with students, with a focus on social, emotional and issue-based interventions in a judgement-free space.</span>
          </li>
        </ul>

        <h3 className="mt-8">Talk to Your Counselor</h3>
        <p className="mt-3 text-cc-text-body font-medium">For counseling appointments:</p>
        <div className="mt-3 flex flex-col gap-2.5">
          <a
            href="https://wa.me/919309099551"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cc-primary hover:underline font-semibold"
          >
            Direct message via WhatsApp or Call: 9309099551
          </a>
          <a
            href="mailto:liji.tony@christcollegepune.org"
            className="inline-flex items-center gap-2 text-cc-primary hover:underline font-semibold"
          >
            Email: liji.tony@christcollegepune.org
          </a>
          <span className="text-cc-text-body">Or contact college reception</span>
        </div>
      </div>
    </div>
  );
}

function ActivitiesServicesTab() {
  return (
    <div className="max-w-3xl">
      <p className="text-cc-text-body leading-relaxed">
        The Centre for Holistic Development at Christ College Pune is essential in fostering an atmosphere where students can succeed intellectually, emotionally, and interpersonally. Its duties include providing a wide range of services geared toward improving students' general wellbeing and mental health throughout their academic careers.
      </p>

      <div className="mt-8 flex flex-col gap-6">
        {ACTIVITIES_LIST.map((section) => (
          <div key={section.title} className="rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-sm">
            <h3 className="text-cc-primary uppercase tracking-wide text-sm font-semibold">{section.title}</h3>
            <ul className="mt-3.5 flex flex-col gap-2.5">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-cc-text-body text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MajorActivitiesTab() {
  return (
    <div className="max-w-3xl">
      <h3 className="text-cc-primary uppercase tracking-wide text-sm font-semibold">Mandalaescape</h3>
      <p className="mt-3 text-cc-text-body">
        The Centre for Holistic Development organized the very first event named <strong>MANDALAESCAPE</strong>. It was a 3-day event from 22nd August to 24th August. As we wanted to cater to the needs of students of all 4 departments, the event was planned for 3 days, each day on each floor. More than 300 students participated in the event. Through Mandala, students could explore the therapeutic aspects of art, colors, and patterns.
      </p>

      <h3 className="mt-8 text-cc-primary uppercase tracking-wide text-sm font-semibold">Seminars</h3>
      <div className="mt-4 border-l-4 border-cc-gold bg-cc-bg-surface p-4 rounded-r-cc-sm">
        <h4 className="font-semibold text-cc-text-heading">Empowering Young Minds — Mr. Anirudh Pole</h4>
        <p className="mt-2 text-sm text-cc-text-body">
          Mr. Anirudh Pole is a national-level basketball player turned coach, an engineer by qualification, and the founder of ABC Fitness Firm, which promotes various organized sports (mainly basketball) and trains students from 5 to 16 years of age. He is one of the successful contestants featured in Shark Tank Season 2.
        </p>
        <p className="mt-2 text-sm text-cc-text-body">
          Mr. Pole opened up about his personal life, reflecting on both his failures and successes. He emphasized the profound importance of experiencing failure, sharing the belief that it is through these challenges that one truly forges their path to success in life.
        </p>
        <p className="mt-2 text-sm text-cc-text-body">
          Mr. Pole shared personal life experiences and lessons. The principle of success in life is rooted in setting clear goals and maintaining unwavering focus on them.
        </p>
      </div>

      <h3 className="mt-8 text-cc-primary uppercase tracking-wide text-sm font-semibold">Life Skill Training</h3>
      <ul className="mt-3 flex flex-col gap-2">
        <li className="flex items-start gap-2.5 text-cc-text-body">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
          <span>PeerGuides Training on Mental Health Support</span>
        </li>
      </ul>
    </div>
  );
}

export default function CentreForHolisticDevelopment({ initialTab = 'about' }) {
  return (
    <TabbedContentPage
      pageTitle="Centre for Holistic Development"
      breadcrumbLabel="Centre for Holistic Development"
      breadcrumbSection="Centres & Cells"
      description="The Centre for Holistic Development at Christ College, Pune offers counselling and support for students' personal, academic and emotional well-being, nurturing mind, body and spirit."
      tagline="Embrace Growth, Ignite Brilliance"
      bannerImage={chdBanner}
      bannerAlt="Centre for Holistic Development"
      initialTab={initialTab}
      tabs={[
        { key: 'about', label: 'About', render: () => <AboutTab /> },
        { key: 'recent-activities', label: 'Recent Activities', render: () => <RecentActivitiesTab /> },
        { key: 'counsellor', label: 'Know Your Counsellor', render: () => <CounsellorTab /> },
        { key: 'activities-services', label: 'Activities & Services', render: () => <ActivitiesServicesTab /> },
        { key: 'major-activities', label: 'Major Activities', render: () => <MajorActivitiesTab /> },
      ]}
    />
  );
}
