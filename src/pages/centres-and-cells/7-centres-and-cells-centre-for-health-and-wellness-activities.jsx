import TabbedContentPage from '../../components/TabbedContentPage';
import CentreVisionMission from '../../components/CentreVisionMission';
import ImageCarousel from '../../components/ImageCarousel';
import { CheckCircleIcon, UsersIcon } from '../../components/icons';
import wspd1 from '../../assets/images/gallery/world-suicide-prevention-day/1.jpg';
import wspd2 from '../../assets/images/gallery/world-suicide-prevention-day/2.jpg';
import wspd3 from '../../assets/images/gallery/world-suicide-prevention-day/3.jpg';
import wspd4 from '../../assets/images/gallery/world-suicide-prevention-day/4.jpg';
import wspd5 from '../../assets/images/gallery/world-suicide-prevention-day/5.jpg';

const WSPD_IMAGES = [wspd1, wspd2, wspd3, wspd4, wspd5];

const MAJOR_ACTIVITIES = [
  { title: 'Medical Health Check-ups', body: 'Health screening and medical check-up camps for all FY students to promote preventive healthcare, early identification of health concerns and awareness of healthy lifestyle practices.' },
  { title: 'Individual Counselling', body: 'Confidential, professional and non-judgemental counselling support for students experiencing personal, emotional, psychological, academic, interpersonal or adjustment-related concerns, with appropriate follow-ups and referrals wherever necessary.' },
  { title: 'Group Counselling', body: 'Facilitated group interactions that provide students with opportunities to share experiences, develop coping strategies, strengthen interpersonal skills and build emotional resilience in a supportive environment.' },
  { title: 'Classroom-based Psychoeducational Interventions', body: 'Issue-based awareness and intervention sessions addressing concerns relevant to student life, such as stress and anxiety, emotional regulation, healthy relationships, peer pressure, digital addiction, substance abuse, bullying and effective coping strategies.' },
  { title: 'World Suicide Prevention Day', body: 'Observance of World Suicide Prevention Day through awareness campaigns, symbolic activities, student engagement and expert-led sessions to promote help-seeking behaviour, reduce stigma and encourage a culture of hope and support.' },
  { title: "Parents' Orientation and Awareness Sessions", body: 'Interactive sessions for parents to sensitise them to the emotional, psychological and developmental needs of young adults, strengthen parent-student communication and encourage collaborative support for student well-being.' },
  { title: 'Stress Management and Emotional Wellness', body: 'Activities and expert-led sessions focusing on stress management, mindfulness, emotional intelligence, self-care and healthy coping mechanisms to support students in managing academic and personal challenges.' },
  { title: 'Healthy Relationships and Interpersonal Well-being', body: 'Programmes that sensitise students to respectful communication, personal boundaries, consent, conflict resolution and the development of healthy relationships.' },
  { title: 'Addiction Awareness and Prevention', body: 'Awareness programmes on substance abuse, behavioural addictions and their psychological, social and legal implications, encouraging informed decision-making and responsible lifestyle choices.' },
  { title: 'Staff Wellness Initiatives', body: 'Wellness activities and awareness programmes aimed at promoting emotional well-being, stress management and self-care among teaching and non-teaching staff.' },
  { title: 'Referral and Support Services', body: 'Establishing linkages with mental health professionals, healthcare institutions and external support agencies to facilitate timely referrals and continuity of care for students requiring specialised assistance.' },
];

function HomeTab() {
  return (
    <>
      <h2>About the Centre</h2>
      <p className="mt-4 max-w-3xl text-cc-text-body leading-relaxed">
        Christ College Pune has a dedicated Centre for Health and Wellness (CHW) to promote the
        physical, mental, emotional and social well-being of students and staff. The Centre
        provides a supportive platform for health awareness, counselling services, preventive
        healthcare and wellness initiatives, recognising the importance of creating a healthy and
        positive campus environment.
      </p>
      <p className="mt-4 max-w-3xl text-cc-text-body leading-relaxed">
        Through medical health check-ups, individual and group counselling, classroom-based
        psychoeducational interventions, mental health awareness programmes, parent engagement
        and staff wellness initiatives, CHW endeavours to address the diverse health and
        psychological needs of the campus community. It also facilitates early identification of
        concerns, timely interventions and appropriate referrals, while encouraging help-seeking
        behaviour and reducing the stigma associated with mental health.
      </p>

      <CentreVisionMission
        vision="To foster a healthy, inclusive and supportive campus community where every individual is empowered to prioritise well-being, develop emotional resilience and lead a physically and psychologically healthy life."
        mission="To promote holistic health and wellness through preventive healthcare, accessible counselling services, mental health awareness and structured wellness initiatives."
      />

      <h2 className="mt-12">Major Activities &amp; Initiatives</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {MAJOR_ACTIVITIES.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-4 text-sm text-cc-text-body"
          >
            <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-cc-primary" />
            <span>
              <span className="font-semibold text-cc-text-heading">{item.title}:</span>{' '}
              {item.body}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function ActivitiesTab() {
  const ACTIVITIES = [
    {
      title: 'ZUMBA REVIVE',
      tag: 'Inaugural Event',
      body: 'The inaugural event of the Centre for Health and Wellness (CHW) at Christ College Pune, titled "Zumba Revive," introduced the center\'s mission of promoting health and wellness. Dr.Fr. Martin KJ (Administrator) unveiled the official logo, symbolizing the college\'s commitment to well-being. Ms. Vedashree led an energetic Zumba session, fostering enthusiastic participation from students and faculty members on both days of the event.',
    },
    {
      title: 'Bicycle Day',
      tag: '11 January 2024',
      body: 'On 11 January 2024, Christ College Pune celebrated Bicycle Day with great enthusiasm. Organized by the NSS and the Centre for Health and Wellness and Department of Physical Education, the event aimed to promote physical fitness, environmental awareness, and sustainable transportation among students and staff. The festivities took place at the Open Stage, which was festively decorated. The Chief Guest, Dr. Fr. Arun Antony Chully (CMI) Principal CCP, and the Special Guest, Dr. Fr. Martin KJ (CMI) Administrator, were warmly welcomed by the college community. A highlight of the day was the slow cycling competition organized by the Physical Education Department. Participants showcased their balance and control, making the event both entertaining and challenging.',
    },
    {
      title: 'Seminar',
      tag: '6 February',
      body: 'On 6 February, Christ College, Pune, hosted a Seminar on Clinical Insights on Health for Young Women. The seminar was organized jointly by the Centre for Health and Wellness and the Women Cell of the college. The event aimed to raise awareness among young women about various health issues, prevention measures, and management strategies.',
    },
    {
      title: 'World Suicide Prevention Day',
      images: WSPD_IMAGES,
      body: 'Observance of World Suicide Prevention Day through awareness campaigns, symbolic activities, student engagement and expert-led sessions to promote help-seeking behaviour, reduce stigma and encourage a culture of hope and support.',
    },
  ];

  return (
    <div>
      <h2>Activities</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ACTIVITIES.map((activity) => (
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
              {activity.tag && (
                <span className="text-[11px] font-semibold uppercase tracking-wide text-cc-primary">{activity.tag}</span>
              )}
              <h4 className="mt-1 text-sm font-semibold leading-snug break-words">{activity.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light line-clamp-4">{activity.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PodcastTab() {
  const PLAYLISTS = [
    {
      title: 'Health & Wellness Podcast - Season 1',
      id: 'PLAPUhT_DePmw-QmNN74ZsugRbowo7_IfA',
      link: 'https://youtube.com/playlist?list=PLAPUhT_DePmw-QmNN74ZsugRbowo7_IfA',
    },
    {
      title: 'Health & Wellness Podcast - Season 2',
      id: 'PLAPUhT_DePmwWks2G7CslCpa0qjNSB_ss',
      link: 'https://youtube.com/playlist?list=PLAPUhT_DePmwWks2G7CslCpa0qjNSB_ss',
    },
  ];

  return (
    <div>
      <h2>Health & Wellness Podcasts</h2>
      <p className="mt-4 text-cc-text-body max-w-3xl leading-relaxed">
        Tune in to our official podcast playlists on YouTube. We cover essential topics relating to mental health, physical fitness, nutrition, stress management, and maintaining a balanced student life.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {PLAYLISTS.map((playlist) => (
          <div key={playlist.id} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
            <h3 className="text-lg font-semibold text-cc-text-heading mb-4">{playlist.title}</h3>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`}
                title={playlist.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-cc-md border border-cc-gray-200 shadow-sm"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a
                href={playlist.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-cc-pill bg-cc-primary px-4 py-2 text-sm font-semibold text-cc-white transition-colors duration-[350ms] hover:bg-cc-primary-dark shadow-sm"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CentreForHealthAndWellnessActivities({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="Centre for Health and Wellness"
      breadcrumbLabel="Centre for Health and Wellness"
      breadcrumbSection="Centres & Cells"
      description="Activities, podcasts and support services from the Centre for Health and Wellness at Christ College, Pune, promoting physical, mental and emotional well-being."
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'activities', label: 'Activities', render: () => <ActivitiesTab /> },
        { key: 'podcast', label: 'Podcast', render: () => <PodcastTab /> },
      ]}
    />
  );
}
