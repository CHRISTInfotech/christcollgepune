import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import departmentBanner from '../../assets/images/3-academics-department-index-science/department-banner.JPG';
import computerScienceDept from '../../assets/images/3-academics-department-index-science/computer-science-dept.png';

const ACHIEVEMENTS = [
  { name: 'Sandesh Waghmare', note: 'SY MSc Computer Science — Secured 61st rank globally in Cyber Apocalypse CTF 2025 – Tales from Eldoria (Team: C4P&M3, 21–26 March 2025)' },
  { name: 'Bharat Singh Rajpurohit', note: 'SYBSc Computer Science — First position in "C Champion" at Desai Karandak competition, HV Desai College' },
  { name: 'Douglas Fernandes', note: 'SYBSc Computer Science — First position in "C Champion" at Desai Karandak competition, HV Desai College' },
  { name: 'Bhorde Riddhi', note: 'Startup winner at AMC Hackathon 2K25, PDEA’s Annasaheb Magar Mahavidyalaya' },
  { name: 'Bharat Singh Rajpurohit', note: 'Winner in BugBundy (error detection competition in Java)' },
  { name: 'Bhorde Siddhi', note: 'Startup winner at AMC Hackathon 2K25' },
  { name: 'Mritunjay Singh', note: 'Startup winner at AMC Hackathon 2K25' },
  { name: 'Walte Aditya', note: 'Startup winner at AMC Hackathon 2K25' },
];

const TESTIMONIALS = [
  { name: 'Abith K Sunil', programme: 'BSc Computer Science', quote: 'The college provided an excellent academic environment, well-structured curriculum, and state-of-the-art facilities that enhanced my learning experience.' },
  { name: 'Juliet Jenny', programme: 'BSc Computer Science', quote: 'An enriching academic journey with a strong foundation, excellent faculty, and a supportive environment.' },
  { name: 'Kirti Nikam', programme: 'BCA & MCA', quote: 'My time at Christ College, Pune, in the Department of Computer Science was a transformative experience that shaped both my personal and professional growth.' },
];

export default function DepartmentIndexScience() {
  return (
    <>
      <Seo
        title="Science"
        description="Overview of the Department of Science (Computer Science) at Christ College, Pune, featuring student achievements in hackathons and coding competitions, and testimonials from graduates."
      />
      <PageHeader title="Science" breadcrumbs={[{ label: 'Academics' }, { label: 'Science' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <img
            src={departmentBanner}
            alt="Department of Science"
            className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
          />
          <div>
            <h2>Department of Science</h2>
            <p className="mt-4 text-cc-text-body">
              The Department of Science at Christ College, Pune houses the Computer Science
              department, offering undergraduate and postgraduate programmes in Computer Science.
            </p>
            <img
              src={computerScienceDept}
              alt="Computer Science department"
              className="mt-6 w-40 rounded-cc-md border border-cc-gray-200 object-cover"
            />
            <a
              href="/academics/department-of-science/department-page"
              className="mt-6 inline-flex items-center gap-2 rounded-cc-pill bg-cc-primary px-5 py-2.5 text-sm font-semibold text-cc-text-light transition-colors hover:bg-cc-primary-dark"
            >
              Visit the Department of Science
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="text-center">Our Achievements</h2>
          <ul className="mt-10 grid gap-4 lg:grid-cols-2">
            {ACHIEVEMENTS.map((item, index) => (
              <li key={`${item.name}-${index}`} className="flex gap-3 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-5 shadow-cc-sm">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                <p className="text-sm text-cc-text-body">
                  <span className="font-semibold text-cc-text-heading">{item.name}</span> &ndash; {item.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-center">Student Testimonials</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-6 shadow-cc-sm">
              <p className="font-semibold text-cc-text-heading">{t.name}</p>
              <p className="text-xs text-cc-text-muted-light">{t.programme}</p>
              <p className="mt-4 text-sm italic text-cc-text-muted-light">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
