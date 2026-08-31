import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon } from '../../components/icons';
import institutionalDistinctiveness from '../../assets/iqac/institutional-distinctiveness.pdf';

const COMMITTEES = [
  'Literary — plans, designs and implements all literary events',
  'Art — responsible for planning, designing and implementing all art-related events',
  'Stage — responsible for planning, designing and implementing various stage events',
  'Media & Creative — maintains the social media pages of the association',
  'Emcee — develops content for promotions and prepares volunteers for hosting events',
  'Hospitality — attends to resource people, judges and performers visiting campus',
  'Records — documents all events of the association',
  'Auditorium — keeps the auditorium ready and maintains discipline during events',
  'Purchase — prepares budgets and coordinates vendor purchases for programmes',
];

export default function Metric73InstitutionalDistinctiveness() {
  return (
    <>
      <Seo
        title="Metric 7.3 – Institutional Distinctiveness"
        description="NAAC Criterion 7.3 Institutional Distinctiveness of Christ College, Pune: the campus as a hub of art and culture, driven by the Student Cultural Association (SCA)."
      />
      <PageHeader
        title="Metric 7.3 – Institutional Distinctiveness"
        breadcrumbs={[{ label: 'IQAC' }, { label: 'Metric 7.3 – Institutional Distinctiveness' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2>Campus as a Hub of Art and Culture</h2>
          <p className="mt-4 text-cc-text-body">
            Under NAAC Criterion 7.3, Christ College, Pune identifies its distinctive focus on the
            artistic and cultural expression of students. With its vision of &lsquo;Enlighten to
            Excel&rsquo;, the college believes every student has unique potential and provides the
            ecosystem and opportunities needed to build self-confidence and unleash that potential
            through art and culture.
          </p>
          <p className="mt-4 text-cc-text-body">
            The college has constituted a faculty-mentored, student-driven association called the
            Student Cultural Association (SCA), which coordinates activities throughout the year.
            The association gives students the opportunity to develop leadership and organising
            skills, express and nurture their talents, and build soft skills such as communication,
            teamwork and networking. Its objectives are to:
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              'Enhance self-esteem and self-confidence through artistic, cultural and creative expression',
              'Nurture the leadership and management skills of students',
              'Foster networking and collaborative learning experiences',
              'Develop life and career competencies',
              'Promote diversity and inclusiveness',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-base">Structure of the Cultural Association</h3>
          <p className="mt-4 text-cc-text-body">
            The Student Cultural Association functions through several committees, coordinated by
            faculty and student head coordinators:
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {COMMITTEES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-base">Key Cultural Events</h3>
          <p className="mt-4 text-cc-text-body">
            The association&rsquo;s annual calendar includes flagship events such as{' '}
            <strong>Aaghaaz</strong> (a talent hunt spanning 30 events across art, literary, media
            and stage categories, held at the start of the academic year), <strong>Bhasha
            Utsav</strong> (celebrating the diversity of India&rsquo;s languages and cultures),
            <strong> Reel It</strong> (a reel-making event), <strong>Gloria</strong> (a choir and
            band showcase), <strong>POV</strong> (Point of View, a literary event of diverse
            perspectives), <strong>Trill the Quill</strong> (a debating competition),{' '}
            <strong>Artscape</strong> (an art exhibition), <strong>Chrysolite</strong> (an
            ensemble of around 200 student performers across dance, music and theatre) and{' '}
            <strong>Chrysalis</strong> (a 25-event inter-department cultural competition).
          </p>
          <p className="mt-4 text-cc-text-body">
            Events such as Bhasha Utsav and Ethnic Day celebrate the diversity of India&rsquo;s
            languages, cultures and ethnicities, fostering harmony, tolerance and national pride
            among students. Ongoing student teams — including the College Choir, Dance Team,
            College Band, Theatre Team, Media Works, and the Public Speaking and Debating Club —
            represent the campus at cultural events and competitions both on and off campus.
          </p>
          <p className="mt-4 text-cc-text-body">
            Cultural elements are also woven into the academic curriculum, for example through
            assessments that ask students to present the unique strengths of different Indian
            states as part of a History course, or explore regional products as part of a
            Management programme. With around 30 student leaders, more than 200 student volunteers
            and the wider campus community as participants, the Student Cultural Association plays
            a significant role in student development, building communication, teamwork,
            deadline-management, digital and negotiation skills that prepare students for their
            careers and for active citizenship.
          </p>

          <h3 className="mt-8 text-base">Documents</h3>
          <a
            href={institutionalDistinctiveness}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-sm items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <DownloadIcon width={20} height={20} />
            </span>
            <span>
              <span className="block font-semibold text-cc-text-heading">Institutional Distinctiveness</span>
              <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
