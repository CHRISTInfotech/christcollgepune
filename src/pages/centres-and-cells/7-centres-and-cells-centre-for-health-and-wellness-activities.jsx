import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const ACTIVITIES = [
  {
    title: 'Zumba Revive',
    tag: 'Inaugural Event',
    body: "The inaugural event of the Centre for Health and Wellness (CHW) at Christ College Pune, titled “Zumba Revive,” introduced the centre's mission of promoting health and wellness. Dr Fr Martin KJ (Administrator) unveiled the official logo, symbolizing the college's commitment to well-being. Ms Vedashree led an energetic Zumba session, fostering enthusiastic participation from students and faculty members on both days of the event.",
  },
  {
    title: 'Bicycle Day',
    tag: '11 January 2024',
    body: 'Christ College Pune celebrated Bicycle Day with great enthusiasm. Organized by the NSS, the Centre for Health and Wellness, and the Department of Physical Education, the event aimed to promote physical fitness, environmental awareness, and sustainable transportation among students and staff. The festivities took place at the Open Stage, welcomed by Chief Guest Dr Fr Arun Antony Chully CMI (Principal) and Special Guest Dr Fr Martin KJ CMI (Administrator). A highlight of the day was the slow cycling competition organized by the Physical Education Department, where participants showcased their balance and control.',
  },
  {
    title: 'Clinical Insights on Health for Young Women',
    tag: '6 February',
    body: 'Christ College, Pune hosted a seminar on Clinical Insights on Health for Young Women, organized jointly by the Centre for Health and Wellness and the Women Cell of the college. The event aimed to raise awareness among young women about various health issues, prevention measures, and management strategies.',
  },
];

export default function CentreForHealthAndWellnessActivities() {
  return (
    <>
      <Seo
        title="Centre for Health and Wellness - Activities"
        description="Activities of the Centre for Health and Wellness at Christ College, Pune, including the Zumba Revive launch event, Bicycle Day and a seminar on women's health."
      />
      <PageHeader
        title="Centre for Health and Wellness"
        breadcrumbs={[{ label: 'Student Life' }, { label: 'Centre for Health and Wellness' }, { label: 'Activities' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2>Activities</h2>
        <div className="mt-6 flex flex-col gap-6">
          {ACTIVITIES.map((activity) => (
            <div key={activity.title} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-cc-primary">{activity.tag}</span>
              <h3 className="mt-2 text-lg">{activity.title}</h3>
              <p className="mt-3 text-cc-text-body">{activity.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
