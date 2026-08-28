import TabbedContentPage from '../../components/TabbedContentPage';

function HomeTab() {
  return (
    <>
      <h2>About the Centre</h2>
      <p className="mt-4 text-cc-text-body leading-relaxed">
        The Centre for Health and Wellness at Christ College Pune serves as a vital source of support and well-being for the college community. Our primary goal is to prioritize the health and wellness of all college members, acting as a central hub for promoting physical, mental, and emotional health. The centre offers a wide range of services that cater to the varied needs of students, faculty, and staff.
      </p>
      <p className="mt-4 text-cc-text-body leading-relaxed">
        Education and awareness are integral to our mission by frequently organizing workshops, seminars, and campaigns to empower individuals to make informed health choices. These educational efforts cover diverse topics, including physical fitness, mindfulness, nutrition and other health aspects for college students. By providing this knowledge, we help our students take proactive steps towards better health.
      </p>
      <p className="mt-4 text-cc-text-body leading-relaxed">
        Accessibility and inclusivity are core values at the Centre for Health and Wellness. We aim to ensure that everyone in the college community, regardless of their background or abilities, can access the support they need. Our facilities are designed to be welcoming and accommodating, with services tailored to meet the specific needs of our diverse population. This commitment fosters an environment where everyone feels valued and supported.
      </p>
      <p className="mt-4 text-cc-text-body leading-relaxed">
        Collaboration is a crucial component of our work. We partner with various campus organizations and departments, like NSS, Women’s Cell etc, to extend the reach and impact of our initiatives. These collaborations help us promote a campus-wide culture of health and wellness, integrating it into all aspects of college life, from academics to extracurricular activities.
      </p>
      <p className="mt-4 text-cc-text-body leading-relaxed">
        The Centre for Health and Wellness is committed to continuous improvement. We stay responsive to the changing needs of the college community by regularly seeking feedback and evaluating our programs to ensure they are up-to-date and effective. This commitment to growth allows us to adapt to new challenges and opportunities, providing the best possible support.
      </p>
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
  ];

  return (
    <div className="max-w-3xl">
      <h2>Activities</h2>
      <div className="mt-6 flex flex-col gap-6">
        {ACTIVITIES.map((activity) => (
          <div key={activity.title} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-cc-primary">{activity.tag}</span>
            <h3 className="mt-2 text-lg font-bold text-cc-text-heading">{activity.title}</h3>
            <p className="mt-3 text-cc-text-body leading-relaxed">{activity.body}</p>
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
