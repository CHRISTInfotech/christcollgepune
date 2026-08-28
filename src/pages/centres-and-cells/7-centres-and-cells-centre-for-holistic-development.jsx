import TabbedContentPage from '../../components/TabbedContentPage';
import { EnvelopeIcon } from '../../components/icons';
import chdBanner from '../../assets/images/7-centres-and-cells-centre-for-holistic-development/chd-banner.jpg';
import lijiTony from '../../assets/images/2-about-us-administration/staff/liji-tony.png';

function HomeTab() {
  return (
    <>
      <h2>About the Centre</h2>
      <p className="mt-4 text-cc-text-body">
        Welcome to the Centre for Holistic Development, where we believe in nurturing the mind, body, and spirit to create a harmonious and balanced life. It is a dedicated space where students' personal growth and well-being take center stage. At CHRIST College, we understand that education is not just about academic excellence; it's about nurturing individuals into well-rounded, confident, and resilient beings. The Centre for Holistic Development is our commitment to this ethos. Our counselor is available to provide a compassionate listening ear, offer guidance, and extend comfort to students grappling with a diverse array of personal, academic, or emotional challenges.
      </p>
      <p className="mt-4 text-cc-text-body">
        One of our key focus is on students who may have faced obstacles in realizing their full potential due to motivational factors or other challenges. We work diligently to develop remedial systems that help these students overcome their barriers and excel academically and personally. We aim to provide comprehensive support to our students, ensuring that they thrive in their academic pursuits and overall well-being.
      </p>
      <p className="mt-4 text-cc-text-body">
        At CHRIST College, Pune, the Centre for Holistic Development is not just a service but a commitment to nurturing the holistic growth of our students, equipping them to face the challenges of today's world with confidence and resilience. We invite all students to approach our dedicated counselors for guidance and support on their journey toward personal and academic success.
      </p>

      <h2 className="mt-10">Vision</h2>
      <p className="mt-4 text-cc-text-body">
        Our vision is a world where every individual achieves holistic well-being, fostering a harmonious global community.
      </p>

      <h2 className="mt-10">Mission</h2>
      <p className="mt-4 text-cc-text-body">
        To empower individuals to lead fulfilling and purpose-driven lives by providing comprehensive programs and resources that encompass all aspects of well-being. Whether you are seeking personal growth, improved health, or a deeper sense of connection to yourself and others, our center is here to support you on your journey.
      </p>

      <h2 className="mt-10">Reach Us</h2>
      <a
        href="mailto:chd@christcollegepune.org"
        className="mt-4 inline-flex items-center gap-3 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface px-5 py-3 transition-colors hover:border-cc-primary"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
          <EnvelopeIcon width={18} height={18} />
        </span>
        <span>
          <span className="block text-xs uppercase tracking-wide text-cc-text-muted-light">Email</span>
          <span className="block font-medium text-cc-primary">chd@christcollegepune.org</span>
        </span>
      </a>
    </>
  );
}

function KnowYourCounsellorTab() {
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
            Counselor & Social Worker
          </p>
          <div className="mt-4 border-t border-cc-gray-200 pt-4 text-left text-sm text-cc-text-body space-y-2">
            <p><strong>Timing:</strong><br />8:30 AM - 4:00 PM (Mon-Fri)<br />8:30 AM - 1:30 PM (Sat)</p>
            <p><strong>Place:</strong><br />4th Floor, behind lift cabin</p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <h2>Introducing Our Experienced Counselor</h2>
        <p className="mt-4 text-cc-text-body leading-relaxed">
          The college experience is a rollercoaster ride of emotions. From the excitement of new friendships to the challenges of academic pressure, students often find themselves navigating uncharted emotional territories. It is important to provide a safe space for students to express themselves, offering strategies for stress management, and promoting emotional resilience. By fostering open conversations about mental health, we can contribute to reducing the stigma surrounding these issues and encourage students to seek support when needed.
        </p>
        <p className="mt-4 text-cc-text-body leading-relaxed">
          Through personalized guidance, we want to empower our students to recognize their strengths and navigate obstacles by mentoring and helping students pen their own stories of success. Armed with self-awareness and resilience, students discover that they possess the inner resources needed to overcome adversity and thrive in the dynamic landscape of higher education.
        </p>

        <blockquote className="mt-6 border-l-4 border-cc-gold bg-cc-bg-surface p-4 text-cc-text-heading italic rounded-r-cc-sm">
          "You have within you right now, everything you need to deal with whatever the world can throw at you."
          <span className="block mt-2 text-sm font-semibold text-cc-text-muted-light not-italic">— Brian Tracy</span>
        </blockquote>

        <h3 className="mt-8">Qualifications & Competence</h3>
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
            <span>More than 10 years of experience working with students. Her area of competence is in counseling and guidance to students for social emotional and issue-based interventions. She thinks it's important to give her students a place where they can talk about their issues without the fear of being judged.</span>
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

function ActivitiesTab() {
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

  return (
    <div className="max-w-3xl">
      <h2>Activities & Services</h2>
      <p className="mt-4 text-cc-text-body leading-relaxed">
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
      <h2>Major Activities</h2>

      <h3 className="mt-6 text-cc-primary uppercase tracking-wide text-sm font-semibold">Mandalaescape</h3>
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
          Mr. Pole shared personal life experiences and lessons. The session touched upon important life morals and principles for success. The principle of success in life is rooted in setting clear goals and maintaining unwavering focus on them.
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

export default function CentreForHolisticDevelopment({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Centre for Holistic Development"
      breadcrumbLabel="Centre for Holistic Development"
      description="The Centre for Holistic Development at Christ College, Pune offers counselling and support for students' personal, academic and emotional well-being, nurturing mind, body and spirit."
      bannerImage={chdBanner}
      bannerAlt="Photo collage of student community service and wellness activities"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'counsellor', label: 'Know your Counseller', render: () => <KnowYourCounsellorTab /> },
        { key: 'activities', label: 'Activities', render: () => <ActivitiesTab /> },
        { key: 'major-activities', label: 'Major Activities', render: () => <MajorActivitiesTab /> },
      ]}
    />
  );
}
