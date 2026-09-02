import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { EnvelopeIcon } from '../../components/icons';

const OBJECTIVES = [
  'To encourage innovative strategies that progressively boost the effectiveness of learning, staff, and student experiences.',
  'To uphold the objectives of improving quality and sustaining efforts to organize diverse activities and programs on campus.',
];

const ROLES_AND_RESPONSIBILITIES = [
  {
    title: 'Quality Criteria Formulation',
    description:
      "Establishing and implementing quality criteria for the institution's numerous academic and administrative activities.",
  },
  {
    title: 'Quality Assurance Initiatives',
    description:
      'Assisting in the design, execution, and assessment of quality control procedures to raise the standard of education, research, and administrative procedures within the institution.',
  },
  {
    title: 'Documentation and Reporting',
    description:
      'Gathering, managing, and organizing data pertaining to quality assurance activities, as well as helping to prepare reports needed by external accrediting authorities.',
  },
  {
    title: 'Policy Formulation',
    description:
      'Assisting in the formulation and improvement of academic and administrative policies in line with quality improvement goals.',
  },
  {
    title: 'Internal Reviews',
    description:
      'Taking part in internal audits and reviews to determine the degree to which the institution complies with quality standards and to pinpoint areas that need improvement.',
  },
  {
    title: 'Feedback Collection',
    description:
      "Collecting feedback from students, teachers, and other stakeholders to assess their opinion on institution's quality and to identify areas of improvement.",
  },
  {
    title: 'Curriculum Enhancement',
    description:
      'Engaging with educators to review the curriculum and facilitate implementation of necessary add-on courses, certificate courses, skill development programs, etc., assuring conformity with professional needs.',
  },
  {
    title: 'Faculty Development',
    description:
      'Supporting initiatives to develop the faculties by providing them with development programs, trainings, seminars, and workshops for bettering teaching strategies and career development.',
  },
  {
    title: 'Promoting Research',
    description:
      'Fostering a culture of creativity and intellectual development by encouraging faculty and students to actively participate in research projects and paper publications.',
  },
  {
    title: 'Best Practices Sharing',
    description:
      'To promote ongoing progress, best practices in administration, teaching, and learning are identified and shared across departments.',
  },
  {
    title: 'Resource Allocation',
    description:
      'Ensuring adequate resources are available to support and enhance teaching and learning of students and faculties.',
  },
  {
    title: 'Monitoring Implementation',
    description:
      "Monitoring the action plans of the institution to ensure quality improvement objectives are actively being put into practice.",
  },
  {
    title: 'Interacting with Stakeholders',
    description:
      "Interacting with a variety of stakeholders, including students, parents, alumni, employers, and community members, to collect feedback on the institution's performance.",
  },
];

export default function AboutIqac() {
  return (
    <>
      <Seo
        title="About IQAC"
        description="About the Internal Quality Assurance Cell (IQAC) at Christ College, Pune — established 2 July 2016 to facilitate deliberate, uniform, and proactive enhancement in overall institutional functioning."
      />
      <PageHeader title="About IQAC" breadcrumbs={[{ label: 'IQAC' }, { label: 'About IQAC' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-14">
        {/* About IQAC Card */}
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cc-gray-100 pb-5">
            <div>
              <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
                Established 2 July 2016
              </span>
              <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">
                Internal Quality Assurance Cell (IQAC)
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-cc-text-body leading-relaxed">
            <p>
              The Internal Quality Assurance Cell in <strong>Christ College &ndash; Pune</strong> was established on{' '}
              <strong>2 July 2016</strong>. The primary responsibility of the IQAC is to establish a framework that
              facilitates deliberate, uniform, and proactive enhancement in the overall functioning of Christ College
              Pune.
            </p>
            <p>
              In the aftermath of accreditation, it directs all endeavors and actions of the institution towards
              advancing its comprehensive academic distinction, maintaining quality standards, and fostering an
              environment of continuous institutional excellence.
            </p>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="mt-10 rounded-2xl border border-cc-gray-200 bg-gradient-to-br from-cc-primary/5 via-cc-bg-surface to-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cc-primary text-white shadow-sm font-bold text-lg">
              🎯
            </span>
            <div>
              <h3 className="text-xl font-bold text-cc-text-heading">Objectives</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-cc-primary">
                Core Purpose & Quality Mandate
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-cc-primary/20 bg-cc-primary/5 p-5">
            <p className="text-sm font-semibold text-cc-primary">Primary Goal</p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-cc-text-heading">
              The main goal of the IQAC is to create a framework for deliberate, consistent, and catalytic action to
              enhance the institution&rsquo;s academic and administrative performance.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {OBJECTIVES.map((objective, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-xl border border-cc-gray-200 bg-cc-bg-surface p-4.5 shadow-cc-xs transition-colors hover:border-cc-primary/40"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-xs font-bold text-cc-primary">
                  {idx + 1}
                </span>
                <p className="text-sm leading-relaxed text-cc-text-body">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roles and Responsibilities Section */}
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
            <div>
              <h3 className="text-xl font-bold text-cc-text-heading sm:text-2xl">Roles & Responsibilities</h3>
              <p className="mt-1 text-sm text-cc-text-muted-light">
                Key operational pillars and quality enhancement initiatives driven by IQAC
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {ROLES_AND_RESPONSIBILITIES.length} Strategic Domains
            </span>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES_AND_RESPONSIBILITIES.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-xl border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-cc-primary/50 hover:shadow-cc-md"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-cc-primary/10 text-[11px] font-bold text-cc-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-semibold text-cc-text-heading text-sm">{item.title}</h4>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-cc-text-muted-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="mt-12 rounded-2xl border border-cc-primary/30 bg-gradient-to-r from-cc-primary/10 via-cc-primary/5 to-transparent p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cc-primary text-white shadow-sm">
                <EnvelopeIcon width={22} height={22} />
              </span>
              <div>
                <h4 className="font-bold text-cc-text-heading text-base">IQAC Secretariat & Coordination</h4>
                <p className="text-xs text-cc-text-muted-light">
                  For queries, suggestions, or quality improvement correspondence
                </p>
              </div>
            </div>

            <a
              href="mailto:iqac@christcollegepune.org"
              className="inline-flex items-center gap-2 rounded-xl bg-cc-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-cc-primary-dark hover:shadow-md"
            >
              <EnvelopeIcon width={16} height={16} />
              <span>iqac@christcollegepune.org</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
