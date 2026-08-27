import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import departmentBanner from '../../assets/images/3-academics-department-of-commerce-department-page/department-banner.jpg';
import hodDeepaSujith from '../../assets/images/3-academics-department-of-commerce-department-page/hod-deepa-sujith.jpg';
import desafio from '../../assets/images/3-academics-department-of-commerce-department-page/desafio.jpg';
import ccca from '../../assets/images/3-academics-department-of-commerce-department-page/ccca.jpg';
import webinar from '../../assets/images/3-academics-department-of-commerce-department-page/webinar.jpg';
import facultyPublications from '../../assets/images/3-academics-department-of-commerce-department-page/faculty-publications.jpg';

const PROGRAMMES = {
  undergraduate: ['BCom (Bachelor of Commerce)'],
  postgraduate: ['MCom (Master of Commerce)'],
};

const ACTIVITIES = [
  { name: 'DeSafio', description: 'Department event and competition.', image: desafio },
  { name: 'CCCA', description: 'Christ College Commerce Association - organizes workshops, seminars, competitions, and cultural events.', image: ccca },
  { name: 'Webinars & Expert Sessions', description: 'Guest sessions from industry and academic experts.', image: webinar },
  { name: 'Faculty Publications', description: 'Research and publications by department faculty.', image: facultyPublications },
];

const TESTIMONIALS = [
  { name: 'Vaishnavi Nair', programme: 'B.Com, 2021–2024', quote: 'The college fostered a sense of community that made every student feel valued. The vibrant campus life, along with the many extracurricular opportunities, helped me develop essential soft skills like communication.' },
  { name: 'Cijo Antu Athiyundhan', programme: 'B.Com, 2021–2024', quote: 'The professors were not only experts in their fields but also mentors who genuinely cared about my growth.' },
  { name: 'Alfred Jaisemon', programme: 'B.Com, 2021–2024', quote: 'My journey at Christ College, Pune, has been nothing short of extraordinary. The college provided a holistic learning experience that nurtured my academic knowledge, critical thinking, and leadership skills.' },
];

export default function DepartmentOfCommercePage() {
  return (
    <>
      <Seo
        title="Department of Commerce"
        description="The Department of Commerce at Christ College, Pune, established in 2007 with B.Com and expanded in 2010 with M.Com, is led by HOD I/C Mrs Deepa Sujith and blends financial management, costing techniques and strategic decision-making with soft skills and industry exposure."
      />
      <PageHeader
        title="Department of Commerce"
        breadcrumbs={[{ label: 'Commerce', path: '/academics/department-index/commerce' }, { label: 'Department of Commerce' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img
          src={departmentBanner}
          alt="Department of Commerce"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2>About the Department</h2>
            <p className="mt-4 text-cc-text-body">
              The Department of Commerce at Christ College Pune serves as &ldquo;a beacon of
              excellence in education, dedicated to nurturing tomorrow&rsquo;s business
              leaders.&rdquo; Established in 2007 with the B.Com programme and expanded in 2010
              with M.Com, the department integrates academics with holistic development through a
              curriculum spanning financial management, costing techniques, and strategic
              decision-making.
            </p>
            <p className="mt-4 text-cc-text-body">
              The department emphasizes student-centered learning with experienced faculty who
              blend traditional teaching with modern methodologies. Key initiatives include soft
              skill training, industry exposure via internships and industrial visits, and
              community engagement programmes.
            </p>

            <h2 className="mt-10">Message from the HOD</h2>
            <div className="mt-4 flex items-start gap-4">
              <img src={hodDeepaSujith} alt="Mrs. Deepa Sujith" className="h-16 w-16 shrink-0 rounded-full border border-cc-gray-200 object-cover" />
              <div>
                <p className="font-semibold text-cc-text-heading">Mrs. Deepa Sujith &ndash; HOD, I/C</p>
                <p className="mt-2 text-cc-text-body">
                  &ldquo;Welcome to the Department of Commerce at Christ College, Pune &ndash; a
                  center of excellence where education meets transformation.&rdquo; The HOD
                  emphasizes the department&rsquo;s commitment to quality education preparing
                  students for sustainable corporate careers, highlighting value-added programmes
                  including group mentoring, personalized guidance, and collaborative research
                  opportunities, with faculty recognized as the department&rsquo;s greatest
                  strength.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <h3 className="text-base">Vision &amp; Mission</h3>
            <p className="mt-3 text-sm font-semibold italic text-cc-primary">
              &ldquo;Cultivating leaders, shaping futures &ndash; empowering minds, creating
              excellence.&rdquo;
            </p>
            <p className="mt-3 text-sm text-cc-text-muted-light">
              &ldquo;To educate and train students in finance and accounting, instilling strong
              analytical skills, ethical values, and leadership qualities while fostering
              innovation, research and community engagement.&rdquo;
            </p>

            <h3 className="mt-6 text-base">Programmes Offered</h3>
            <p className="mt-3 text-xs uppercase tracking-wide text-cc-text-muted-light">Undergraduate</p>
            <ul className="mt-2 flex flex-col gap-2">
              {PROGRAMMES.undergraduate.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-cc-text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-wide text-cc-text-muted-light">Postgraduate</p>
            <ul className="mt-2 flex flex-col gap-2">
              {PROGRAMMES.postgraduate.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-cc-text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="text-center">Facilities &amp; Activities</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ACTIVITIES.map((a) => (
              <div key={a.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm">
                <img src={a.image} alt={a.name} className="h-32 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-cc-text-heading">{a.name}</h3>
                  <p className="mt-1 text-xs text-cc-text-muted-light">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
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
