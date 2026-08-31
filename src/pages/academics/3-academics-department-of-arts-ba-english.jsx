import PageHeader from '../../components/PageHeader';
import { ClockIcon, AcademicCapIcon, PhoneIcon, BookIcon, CheckCircleIcon, CompassIcon, CalendarIcon, GlobeIcon, GridIcon } from '../../components/icons';
import Seo from '../../components/Seo';
import banner from '../../assets/images/3-academics-department-of-arts-ba-english/banner.JPG';

const ELIGIBILITY = [
  'Passed 10+2 (Higher Secondary) or equivalent from any recognized Board in India in any stream.',
];

const SKILL_AREAS = [
  'Mass Communication',
  'Soft Skills Development',
  'Professional & Business English',
  'English for Administration & Services',
  'Building Spoken Proficiency in English',
  'Language & Linguistics',
  'Appreciating Poetry',
  'Regional Gems of Indian Literature',
  'English for Advertisement',
  'The Study of Drama',
  'Etymology of Indic Languages',
  'Field Work & Project Work',
  'Economics / Psychology (Minor)',
];

const CAREER_OPPORTUNITIES = [
  'Creative Writing & Publishing',
  'Journalism & Media Communication',
  'Corporate Communication & Training',
  'Public Relations & Brand Communication',
  'Digital Content & Marketing',
  'Scriptwriting for Film, TV & Digital Media',
  'Editing & Proofreading',
  'Civil Services & Government Careers',
  'Computational Linguistics & Language Technology',
  'Portfolio & Content Management',
];

const DOCUMENTS = [
  'Printout of the online admission enquiry form',
  '10th Mark Sheet (Compulsory)',
  '11th and/or 12th Mark Sheet (online or hard copy, if available)',
  'Aadhaar Card (Compulsory)',
  'PAN Card / Driving Licence / Passport (if available)',
  '2 passport-size photographs (white background – Compulsory)',
  'Caste Certificate (if applicable)',
  'Transfer Certificate (if available)',
  'Migration Certificate (if available)',
  'One set of photocopies of all original documents',
];

export default function BaEnglish() {
  return (
    <>
      <Seo
        title="BA (English)"
        description="BA (English) at Christ College, Pune offers a foundation in English literature, linguistics, communication, and critical thinking, preparing students for diverse careers in publishing, journalism, corporate training, and academia."
      />
      <PageHeader
        title="BA (English)"
        breadcrumbs={[
          { label: 'Department of Arts', path: '/academics/department-of-arts/ba-department-programme-page' },
          { label: 'BA (English)' }
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <img src={banner} alt="BA (English)" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="flex items-center gap-2.5">
              <BookIcon className="h-6 w-6 text-cc-primary shrink-0" />
              Programme Overview
            </h2>
            <p className="mt-4 text-cc-text-body leading-relaxed">
              The Bachelor of Arts (BA) in English at Christ College-Pune leverages English as an international link 
              language, offering students insight into literary texts, cultural perspectives, and human interactions. 
              It builds a strong foundation in literature, language, and critical thinking, covering major periods, 
              genres, and authors. Aligned with the National Education Policy (NEP), the programme promotes 
              multidisciplinary learning and global perspectives within a vibrant, rigorous, and student-centered 
              environment that blends traditional and contemporary approaches.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed">
              The curriculum emphasizes clear and effective communication in both oral and written forms, along with 
              personality development, body language, non-verbal communication, and essential soft skills such as 
              persuasive speaking, critical thinking, and creative writing. These competencies support academic and 
              professional success as well as personal growth in a globalised world.
            </p>
            <p className="mt-4 text-cc-text-body leading-relaxed">
              The programme provides a foundation in literature, language, and critical thinking, covering major periods, 
              genres, and authors. Aligned with the NEP, it encourages multidisciplinary learning and develops communication, 
              creativity, and research skills. Graduates are prepared for careers in education, media, publishing, content 
              writing, and higher studies.
            </p>

            <h3 className="mt-8 text-base flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-cc-primary shrink-0" />
              Key Expertise Offered
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {SKILL_AREAS.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-cc-text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-base flex items-center gap-2">
              <CompassIcon className="h-5 w-5 text-cc-primary shrink-0" />
              Career Opportunities
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {CAREER_OPPORTUNITIES.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-cc-text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base font-bold text-cc-text-heading flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-cc-primary" />
                Course Duration
              </h3>
              <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
                <div className="py-3 first:pt-0">
                  <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Duration</dt>
                  <dd className="mt-1 text-sm font-medium text-cc-text-heading">4 Years, Full-Time</dd>
                </div>
                <div className="py-3 last:pb-0">
                  <dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Structure</dt>
                  <dd className="mt-1 text-sm font-medium text-cc-text-heading">8 Semesters (NEP Aligned)</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base font-bold text-cc-text-heading flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5 text-cc-primary" />
                Eligibility
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {ELIGIBILITY.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-cc-text-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
              <h3 className="text-base font-bold text-cc-text-heading flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-cc-primary" />
                Admissions Contact
              </h3>
              <dl className="mt-4 flex flex-col divide-y divide-cc-gray-200">
                <div className="py-3 first:pt-0"><dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">College Reception</dt><dd className="mt-1 text-sm font-medium text-cc-text-heading">7823839456</dd></div>
                <div className="py-3"><dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">College Office</dt><dd className="mt-1 text-sm font-medium text-cc-text-heading">7447727243, 7447727242</dd></div>
                <div className="py-3"><dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Office Hours</dt><dd className="mt-1 text-sm font-medium text-cc-text-heading">Mon&ndash;Fri 8:30am&ndash;4:00pm, Sat 8:30am&ndash;1:30pm</dd></div>
                <div className="py-3 last:pb-0"><dt className="text-xs uppercase tracking-wide text-cc-text-muted-light">Email</dt><dd className="mt-1 text-sm font-medium text-cc-text-heading">admission@christcollegepune.org</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2 className="flex items-center gap-2.5">
            <CalendarIcon className="h-6 w-6 text-cc-primary shrink-0" />
            Christ College Admission Process
          </h2>
        <p className="mt-2 text-sm text-cc-text-muted-light">
          The admission process at Christ College involves the following steps:
        </p>

        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">1</span>
            <h3 className="mt-3 text-base">Check Eligibility</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">
              Visit the official website:{' '}
              <a
                href="https://christcollegepune.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cc-primary hover:underline font-semibold"
              >
                christcollegepune.org
              </a>
              . Review the eligibility criteria for the course you wish to apply for.
            </p>
          </li>

          <li className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">2</span>
            <h3 className="mt-3 text-base">Online Application</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">
              Fill out the online application form with accurate details and submit it along with the required documents. Select a convenient date for your interview on campus.
            </p>
          </li>

          <li className="col-span-full rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">3</span>
              <h3 className="text-base font-bold text-cc-text-heading">Admission Counselling & Selection Interview</h3>
            </div>
            <p className="mt-3 text-sm text-cc-text-body">
              On the selected date, the candidate must appear on the campus along with their parents with all necessary documents. The process includes:
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 pl-4">
              <li className="flex items-start gap-2 text-sm text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                <span>A counselling session to guide the student in choosing the right program based on his/her interests and career goals.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                <span>An interview with concerned faculty members of the chosen program to assess the aptitude of the candidate.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-cc-text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                <span>A final meeting with the Principal of the college. The parents should attend the meeting with the Principal.</span>
              </li>
            </ul>
          </li>

          <li className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">4</span>
            <h3 className="mt-3 text-base">Final Selection</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">
              The selection decision will be communicated to the candidate on the same day of the interview.
            </p>
          </li>

          <li className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">5</span>
            <h3 className="mt-3 text-base">Fee Payment</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">
              If selected, candidates must pay the admission fee within 7 working days from the date of the final interview to confirm their seat.
            </p>
          </li>

          <li className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">6</span>
            <h3 className="mt-3 text-base">Document Submission</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">
              Submit all required original documents in accordance with the college's guidelines.
            </p>
          </li>

          <li className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-primary text-sm font-semibold text-cc-text-light">7</span>
            <h3 className="mt-3 text-base">Enrolment</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">
              Upon completion of all formalities, the candidate will be officially enrolled in the program and may attend classes at the commencement of the Academic Year.
            </p>
          </li>
        </ol>

        <h3 className="mt-12 text-base flex items-center gap-2">
          <GlobeIcon className="h-5 w-5 text-cc-primary shrink-0" />
          International / NRI / PIO Students
        </h3>
        <ol className="mt-4 flex flex-col gap-3 max-w-3xl">
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">1</span>
            <span>
              Visit the Pune University website{' '}
              <a
                href="http://www.unipune.ac.in/dept/International%20Centre/default.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cc-primary hover:underline font-semibold"
              >
                International Centre Portal
              </a>{' '}
              and navigate to the "International Centre" section.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">2</span>
            <span>Choose the program you want to apply for, whether it is Undergraduate or Postgraduate.</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">3</span>
            <span>Register for the International Student Admission by filling in the required information.</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">4</span>
            <span>Wait for a response from Pune University regarding your application status.</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">5</span>
            <span>
              Additionally, also apply directly with us by visiting our website{' '}
              <a
                href="https://christcollegepune.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cc-primary hover:underline font-semibold"
              >
                christcollegepune.org
              </a>{' '}
              and fill out the online application form with all the necessary details and submit it along with the required documents.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-cc-text-body">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">6</span>
            <span>Attend any required interviews or exams as part of the admission process.</span>
          </li>
        </ol>

        <h3 className="mt-12 text-base flex items-center gap-2">
          <GridIcon className="h-5 w-5 text-cc-primary shrink-0" />
          Documents Required
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {DOCUMENTS.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-cc-text-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
        </div>
      </section>
    </>
  );
}
