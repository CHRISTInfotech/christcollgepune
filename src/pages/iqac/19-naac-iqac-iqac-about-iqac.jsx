import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { EnvelopeIcon, DownloadIcon, SearchIcon } from '../../components/icons';
import iqacCriteriaData from '../../data/iqac_criteria_data.json';

const TABS = [
  { key: 'about', label: 'About IQAC' },
  { key: 'feedback', label: 'Feedback Analysis' },
  { key: 'extended-profile', label: 'Extended Profile' },
  { key: 'criterion-1', label: 'Criterion 1' },
  { key: 'criterion-2', label: 'Criterion 2' },
  { key: 'criterion-3', label: 'Criterion 3' },
  { key: 'criterion-4', label: 'Criterion 4' },
  { key: 'criterion-5', label: 'Criterion 5' },
  { key: 'criterion-6', label: 'Criterion 6' },
  { key: 'criterion-7', label: 'Criterion 7' },
];

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

const EXTENDED_PROFILE_STUDENTS = [
  { title: 'Number of Students Enrolled (FY, SY, TY)', year: '2022 - 2023', link: 'https://christcollegepune.org/uploads/userfiles/FY,SY,TY 2022-2023.pdf' },
  { title: 'Number of Students Enrolled (FY, SY, TY)', year: '2021 - 2022', link: 'https://christcollegepune.org/uploads/userfiles/FY,SY,TY 2021-2022.pdf' },
  { title: 'Number of Students Enrolled (FY, SY, TY)', year: '2020 - 2021', link: 'https://christcollegepune.org/uploads/userfiles/FY,SY,TY 2020-2021.pdf' },
  { title: 'Number of Students Enrolled (FY, SY, TY)', year: '2019 - 2020', link: 'https://christcollegepune.org/uploads/userfiles/FY,SY,TY 2019-2020.pdf' },
  { title: 'Number of Students Enrolled (FY, SY, TY)', year: '2018 - 2019', link: 'https://christcollegepune.org/uploads/userfiles/FY,SY,TY 2018-2019.pdf' },
];

const EXTENDED_PROFILE_STAFF = [
  { title: 'Full Time Teaching Staff List', year: '2022 - 2023', link: 'https://christcollegepune.org/uploads/userfiles/Staff List 2022-23.pdf' },
  { title: 'Full Time Teaching Staff List', year: '2021 - 2022', link: 'https://christcollegepune.org/uploads/userfiles/Staff List 2021-22.pdf' },
  { title: 'Full Time Teaching Staff List', year: '2020 - 2021', link: 'https://christcollegepune.org/uploads/userfiles/Staff List 2020-21.pdf' },
  { title: 'Full Time Teaching Staff List', year: '2019 - 2020', link: 'https://christcollegepune.org/uploads/userfiles/Staff List 2019-20.pdf' },
  { title: 'Full Time Teaching Staff List', year: '2018 - 2019', link: 'https://christcollegepune.org/uploads/userfiles/Staff List 2018-19.pdf' },
];

function AboutSection() {
  return (
    <div className="space-y-10">
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

      {/* Quick Navigation Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          to="/naac-iqac/iqac/mou-and-activities"
          className="flex items-center gap-4 rounded-xl border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-xs transition-all hover:border-cc-primary hover:shadow-cc-sm"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary font-bold">
            🤝
          </span>
          <div>
            <h4 className="text-sm font-bold text-cc-text-heading">MoUs &amp; Activities</h4>
            <p className="text-xs text-cc-text-muted-light">34 MoUs &amp; 51 activity reports</p>
          </div>
        </Link>

        <Link
          to="/naac-iqac/iqac/iqac-composition"
          className="flex items-center gap-4 rounded-xl border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-xs transition-all hover:border-cc-primary hover:shadow-cc-sm"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary font-bold">
            👥
          </span>
          <div>
            <h4 className="text-sm font-bold text-cc-text-heading">IQAC Composition</h4>
            <p className="text-xs text-cc-text-muted-light">Committee members &amp; leadership</p>
          </div>
        </Link>
      </div>

      {/* Objectives Section */}
      <div className="rounded-2xl border border-cc-gray-200 bg-gradient-to-br from-cc-primary/5 via-cc-bg-surface to-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
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
      <div>
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
      <div className="rounded-2xl border border-cc-primary/30 bg-gradient-to-r from-cc-primary/10 via-cc-primary/5 to-transparent p-6 sm:p-8">
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
    </div>
  );
}

function FeedbackSection() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <h2 className="text-2xl font-bold text-cc-text-heading">Feedback Analysis</h2>
        <p className="mt-3 text-sm leading-relaxed text-cc-text-body">
          Feedback collected systematically from students, teachers, employers, and alumni on curriculum, teaching
          methodologies, institutional infrastructure, and overall student development.
        </p>
        <div className="mt-6">
          <Link
            to="/naac-iqac/iqac/feedback-analysis"
            className="inline-flex items-center gap-2 rounded-xl bg-cc-primary px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-cc-primary-dark"
          >
            <DownloadIcon width={16} height={16} />
            <span>View Complete Feedback Analysis Portal &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ExtendedProfileSection() {
  return (
    <div className="space-y-8">
      {/* 1.1 Number of students */}
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <div className="border-b border-cc-gray-100 pb-4">
          <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
            Extended Profile &bull; Metric 1.1
          </span>
          <h2 className="mt-2 text-xl font-bold text-cc-text-heading sm:text-2xl">
            1.1 Number of students year wise during the last five years
          </h2>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-cc-gray-200 bg-white">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-cc-gray-200 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <tr>
                <th className="px-6 py-3.5">Item Title</th>
                <th className="px-6 py-3.5 hidden sm:table-cell">Academic Year</th>
                <th className="px-6 py-3.5 text-right">Supporting Document</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cc-gray-100">
              {EXTENDED_PROFILE_STUDENTS.map((item, idx) => (
                <tr key={idx} className="transition-colors hover:bg-slate-50/60">
                  <td className="px-6 py-4 font-semibold text-cc-text-heading text-sm">
                    {item.title}
                    <div className="text-xs text-cc-text-muted-light font-normal sm:hidden mt-0.5">
                      Academic Year: {item.year}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-cc-text-body hidden sm:table-cell">
                    <span className="inline-block rounded bg-slate-100 px-2.5 py-1 text-slate-700">
                      {item.year}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cc-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-cc-primary shadow-sm transition-all hover:border-cc-primary hover:bg-cc-primary hover:text-white"
                    >
                      <DownloadIcon width={14} height={14} />
                      <span>View PDF</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2.1 Number of teaching staff */}
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <div className="border-b border-cc-gray-100 pb-4">
          <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
            Extended Profile &bull; Metric 2.1
          </span>
          <h2 className="mt-2 text-xl font-bold text-cc-text-heading sm:text-2xl">
            2.1 Number of teaching staff / full time teachers during the last five years
          </h2>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-cc-gray-200 bg-white">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-cc-gray-200 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <tr>
                <th className="px-6 py-3.5">Item Title</th>
                <th className="px-6 py-3.5 hidden sm:table-cell">Academic Year</th>
                <th className="px-6 py-3.5 text-right">Supporting Document</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cc-gray-100">
              {EXTENDED_PROFILE_STAFF.map((item, idx) => (
                <tr key={idx} className="transition-colors hover:bg-slate-50/60">
                  <td className="px-6 py-4 font-semibold text-cc-text-heading text-sm">
                    {item.title}
                    <div className="text-xs text-cc-text-muted-light font-normal sm:hidden mt-0.5">
                      Academic Year: {item.year}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-cc-text-body hidden sm:table-cell">
                    <span className="inline-block rounded bg-slate-100 px-2.5 py-1 text-slate-700">
                      {item.year}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cc-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-cc-primary shadow-sm transition-all hover:border-cc-primary hover:bg-cc-primary hover:text-white"
                    >
                      <DownloadIcon width={14} height={14} />
                      <span>View PDF</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CriterionSection({ criterionData }) {
  const [search, setSearch] = useState('');

  const filteredSections = useMemo(() => {
    if (!criterionData || !criterionData.sections) return [];
    const q = search.toLowerCase().trim();
    if (!q) return criterionData.sections;

    return criterionData.sections
      .map((sec) => {
        const matchesHeading = sec.heading.toLowerCase().includes(q);
        const matchedDocs = sec.documents.filter(
          (doc) =>
            doc.title.toLowerCase().includes(q) ||
            (doc.year_details && doc.year_details.toLowerCase().includes(q)) ||
            (doc.raw_label && doc.raw_label.toLowerCase().includes(q))
        );
        if (matchesHeading) return sec;
        if (matchedDocs.length > 0) {
          return { ...sec, documents: matchedDocs };
        }
        return null;
      })
      .filter(Boolean);
  }, [criterionData, search]);

  if (!criterionData) {
    return (
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-8 text-center text-sm text-cc-text-muted-light">
        No data available for this Criterion.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header & Search */}
      <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
              NAAC Self Study Report &bull; SSR Cycle 2
            </span>
            <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">
              {criterionData.title}
            </h2>
            {criterionData.subtitle && (
              <p className="mt-1 text-sm text-cc-text-body">{criterionData.subtitle}</p>
            )}
            <p className="mt-2 text-xs text-cc-text-muted-light">
              Total <strong>{criterionData.total_documents}</strong> supporting documents across{' '}
              <strong>{criterionData.sections.length}</strong> metric sections
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              placeholder="Search metrics or documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-cc-gray-300 bg-white py-2.5 pl-10 pr-4 text-xs text-cc-text-heading placeholder-cc-text-muted-light focus:border-cc-primary focus:outline-none"
            />
            <SearchIcon
              width={15}
              height={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cc-text-muted-light"
            />
          </div>
        </div>
      </div>

      {/* Sections List */}
      {filteredSections.length === 0 ? (
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-8 text-center text-sm text-cc-text-muted-light">
          No metrics or documents found matching &ldquo;{search}&rdquo;.
        </div>
      ) : (
        <div className="space-y-6">
          {filteredSections.map((sec, sIdx) => (
            <div
              key={sIdx}
              className="overflow-hidden rounded-2xl border border-cc-gray-200 bg-cc-bg-surface shadow-cc-xs"
            >
              <div className="border-b border-cc-gray-200 bg-slate-50/80 px-6 py-4">
                <h3 className="text-sm font-bold text-cc-text-heading leading-snug sm:text-base">
                  {sec.heading}
                </h3>
                <span className="mt-0.5 inline-block text-xs text-cc-text-muted-light">
                  {sec.documents.length} {sec.documents.length === 1 ? 'document' : 'documents'}
                </span>
              </div>

              <table className="w-full text-left">
                <thead className="border-b border-cc-gray-100 bg-slate-50/40 text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <tr>
                    <th className="px-6 py-3">Item / Document Title</th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cc-gray-100">
                  {sec.documents.map((doc, dIdx) => (
                    <tr key={dIdx} className="transition-colors hover:bg-slate-50/60">
                      <td className="px-6 py-3.5">
                        <div className="font-semibold text-cc-text-heading text-sm">
                          {doc.title}
                        </div>
                        {doc.year_details && doc.year_details !== doc.title && (
                          <div className="mt-0.5 text-xs text-cc-text-muted-light">
                            {doc.year_details}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        {doc.link ? (
                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-cc-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-cc-primary shadow-sm transition-all hover:border-cc-primary hover:bg-cc-primary hover:text-white"
                          >
                            <DownloadIcon width={13} height={13} />
                            <span>View PDF</span>
                          </a>
                        ) : (
                          <span className="text-xs text-cc-text-muted-light">Not Available</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AboutIqac() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <>
      <Seo
        title="About IQAC"
        description="About the Internal Quality Assurance Cell (IQAC) at Christ College, Pune — establishment, objectives, roles & responsibilities, feedback analysis, extended profile and NAAC SSR Cycle 2 criteria evidence."
      />
      <PageHeader title="About IQAC" breadcrumbs={[{ label: 'IQAC' }, { label: 'About IQAC' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-14">
        {/* Tab Strip */}
        <div className="flex flex-wrap gap-2 border-b border-cc-gray-200 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-cc-primary text-white shadow-sm'
                  : 'border border-cc-gray-200 bg-cc-bg-surface text-cc-text-body hover:border-cc-primary hover:text-cc-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'feedback' && <FeedbackSection />}
          {activeTab === 'extended-profile' && <ExtendedProfileSection />}
          {activeTab !== 'about' && activeTab !== 'feedback' && activeTab !== 'extended-profile' && (
            <CriterionSection criterionData={iqacCriteriaData[activeTab]} />
          )}
        </div>
      </section>
    </>
  );
}
