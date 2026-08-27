import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import directorImg from '../../assets/aboutus/fr.arunDirector.png';

export default function MessageFromDirector() {
  return (
    <>
      <Seo
        title="Message from Director"
        description="A message from the Director of Christ College Pune on the institution's mission, its founder St Kuriakose Elias Chavara, the college motto 'Enlighten to Excel', and its four core values."
      />
      <PageHeader
        title="Message from Director"
        breadcrumbs={[{ label: 'About Us', path: '/about-us/about-us' }, { label: 'Message from Director' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="overflow-hidden rounded-cc-lg shadow-cc-sm lg:sticky lg:top-[calc(var(--header-height)+var(--space-6))] lg:self-start">
            <img
              src={directorImg}
              alt="Director, Christ College Pune"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-4 text-cc-text-body">
            <p>
              Christ College Pune is a mission-driven institution committed to contribute towards
              nation-building by nurturing young adults transform into competent, committed and
              ethical leaders of the future. Our institution is built on the inspiring vision of
              our founder and patron saint, St Kuriakose Elias Chavara, and strong educational
              legacy of CMI congregation. Keeping with our college motto, &lsquo;Enlighten to
              Excel&rsquo;, we, as a community of learners, ceaselessly strive to design teaching
              learning processes and learning spaces that combines excellence with empathy.
              Through our constant mentorship and by instilling in our students the four Core
              Values namely faith in God, moral uprightness, social responsibility and the
              pursuit of excellence, we attempt to mould their attitude, outlook and conduct,
              while providing a solid foundation to tackle life&apos;s challenges with wisdom and
              foresight.
            </p>

            <p>
              With the steadfast support of our dedicated faculty, we aim to mentor, motivate and
              guide our students in accordance with biblical principles:
            </p>

            <blockquote className="border-l-4 border-cc-gold py-1 pl-4 italic text-cc-text-heading">
              &ldquo;Train up a child in the way he should go, and when he is old he will not
              depart from it&rdquo; (Proverbs 22:6).
            </blockquote>

            <p>
              In a conducive learning environment at our green campus, ever-thrumming with
              birdsong, we nurture individuals who, with intellectual brilliance and ethical
              excellence, are sure to emerge leaders with a difference!
            </p>

            <p>
              Our students and faculty have made us proud by excelling in every field be it
              academics, research or sports. In the year 2020-21 Christ College distinguished
              itself in academics with five students emerging University rank holders, while in
              2021-22 our football team won the Savitribai Phule Pune University (SPPU) Football
              Tournament. Even during the dark days of COVID-19, our faculty did not lose
              enthusiasm but marched ahead in the field of research, producing four intriguing
              volumes in the Christ College Pune Research Series (CCPRS), on diverse topics
              ranging from women empowerment and environmental sustainability to higher education
              in India.
            </p>

            <p>
              We also gratefully acknowledge the constant support and guidance of the CMI
              congregation and all our well-wishers in enabling us scale new heights and explore
              greater opportunities for our students to learn and grow. It is with immense
              pleasure that I welcome you to the portals of Christ College where we not only
              build the human intellect but also shape young hearts. As the poet Edwin Markham
              writes:
            </p>

            <blockquote className="border-l-4 border-cc-gold py-1 pl-4 italic text-cc-text-heading">
              We are all blind until we see
              <br />
              That in the human plan
              <br />
              Nothing is worth the making if
              <br />
              It does not make the man.
              <br />
              <br />
              Why build these cities glorious
              <br />
              If man unbuilded goes?
              <br />
              In vain we build the work, unless
              <br />
              The builder also grows&hellip;
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
