import { Link } from 'react-router-dom';
import TabbedContentPage from '../../components/TabbedContentPage';
import { DownloadIcon, BuildingIcon } from '../../components/icons';
import criterion1Doc from '../../assets/iqac/criterion-1/metric-1-1-1-academic-calendar.pdf';
import criterion2Doc from '../../assets/iqac/criterion-2/metric-2-1-1-summary.pdf';
import criterion3Doc from '../../assets/iqac/criterion-3/metric-3-1-1-summary.pdf';
import criterion4Doc from '../../assets/iqac/criterion-4/metric-4-1-1-infrastructure-and-physical-facilities.pdf';
import criterion5Doc from '../../assets/iqac/criterion-5/metric-5-1-1-summary.pdf';
import criterion6Doc from '../../assets/iqac/criterion-6/metric-6-1-1-vision-and-mission.pdf';
import studentsProfileDoc from '../../assets/iqac/extended-profile/students-2022-23.pdf';
import teachingStaffDoc from '../../assets/iqac/extended-profile/teaching-staff-2022-23.pdf';

function DocCard({ name, file }) {
  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary sm:max-w-md"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
        <DownloadIcon width={20} height={20} />
      </span>
      <span>
        <span className="block font-semibold text-cc-text-heading">{name}</span>
        <span className="block text-sm text-cc-text-muted-light">View / Download PDF</span>
      </span>
    </a>
  );
}

function MetricList({ items }) {
  return (
    <ul className="mt-4 flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-cc-text-body">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function OverviewTab() {
  return (
    <div className="max-w-3xl">
      <h2>Internal Quality Assurance Cell</h2>
      <p className="mt-4 text-cc-text-body">
        The Internal Quality Assurance Cell (IQAC) at Christ College, Pune was established on 2
        July 2016 to develop a framework for deliberate, uniform and proactive enhancement of the
        institution&rsquo;s academic and administrative quality.
      </p>
      <p className="mt-4 text-cc-text-body">
        This page organises the college&rsquo;s NAAC accreditation evidence by the seven
        Criteria&nbsp;— Curricular Aspects, Teaching-Learning and Evaluation, Research Innovation
        and Extension, Infrastructure and Learning Resources, Student Support and Progression,
        Governance Leadership and Management, and Institutional Values and Best Practices&nbsp;—
        along with the Extended Profile and Feedback Analysis.
      </p>
      <p className="mt-4 text-cc-text-body">
        See also{' '}
        <Link to="/naac-iqac/iqac/feedback-analysis" className="text-cc-primary hover:underline">
          Feedback Analysis
        </Link>{' '}
        and{' '}
        <Link to="/naac-iqac/iqac/about-iqac" className="text-cc-primary hover:underline">
          About IQAC
        </Link>{' '}
        for the cell&rsquo;s composition and functions.
      </p>
    </div>
  );
}

function Criterion1Tab() {
  return (
    <div className="max-w-3xl">
      <h2>Criterion 1 — Curricular Aspects</h2>
      <p className="mt-4 text-cc-text-body">
        Evidence for curriculum planning and academic flexibility, tracked across the following
        metrics:
      </p>
      <MetricList
        items={[
          'Metric 1.1.1 — Curriculum Planning and Implementation (Academic Calendar, Workload Distribution, Department Time Table, Activity Planner, Teaching/Course Plan, Continuous Internal Assessment)',
          'Metric 1.2.1 — Academic Flexibility (enrolment lists and attendance sheets, brochures and notices, course modules with outcomes)',
          'Metric 1.2.2 — Academic Flexibility supporting documents',
          'Metric 1.3.1 — Curriculum integrating cross-cutting issues and co-curricular activities',
          'Metric 1.3.2 — Student Projects, Internships and Field Visits',
        ]}
      />
      <h3 className="mt-8 text-base">Documents</h3>
      <div className="mt-4">
        <DocCard name="Academic Calendar (Metric 1.1.1)" file={criterion1Doc} />
      </div>
    </div>
  );
}

function Criterion2Tab() {
  return (
    <div className="max-w-3xl">
      <h2>Criterion 2 — Teaching-Learning and Evaluation</h2>
      <p className="mt-4 text-cc-text-body">
        Evidence for student enrolment, reservation compliance, and teacher-student ratios, tracked
        across the following metrics:
      </p>
      <MetricList
        items={[
          'Metric 2.1.1 — Student Enrolment and Profile (sanctioned intake, university-approved course/programme letters)',
          'Metric 2.1.2 — Average percentage of seats filled against seats reserved for various categories (SC, ST, OBC and other reserved categories)',
          'Metric 2.2.1 — Student to Full-Time Teacher Ratio, with the list of teachers',
        ]}
      />
      <h3 className="mt-8 text-base">Documents</h3>
      <div className="mt-4">
        <DocCard name="Metric 2.1.1 Summary" file={criterion2Doc} />
      </div>
    </div>
  );
}

function Criterion3Tab() {
  return (
    <div className="max-w-3xl">
      <h2>Criterion 3 — Research, Innovation and Extension</h2>
      <p className="mt-4 text-cc-text-body">
        Covers the college&rsquo;s research output, including a summary of research papers
        published by faculty. Detailed activity records are also available on the{' '}
        <Link to="/centres-and-cells/research-cell" className="text-cc-primary hover:underline">
          Research Cell
        </Link>{' '}
        page.
      </p>
      <h3 className="mt-8 text-base">Documents</h3>
      <div className="mt-4">
        <DocCard name="Metric 3.1.1 Summary — Research Papers Published" file={criterion3Doc} />
      </div>
    </div>
  );
}

function Criterion4Tab() {
  return (
    <div className="max-w-3xl">
      <h2>Criterion 4 — Infrastructure and Learning Resources</h2>
      <p className="mt-4 text-cc-text-body">
        Evidence for the college&rsquo;s physical and IT infrastructure, tracked across the
        following metrics:
      </p>
      <MetricList
        items={[
          'Metric 4.1.1 — Availability of adequate infrastructure and physical facilities',
          'Metric 4.3.1 — IT facilities and bandwidth for institutional needs',
          'Metric 4.4.1 — Percentage of expenditure on maintenance of physical and academic infrastructure',
        ]}
      />
      <h3 className="mt-8 text-base">Documents</h3>
      <div className="mt-4">
        <DocCard name="Infrastructure and Physical Facilities (Metric 4.1.1)" file={criterion4Doc} />
      </div>
    </div>
  );
}

function Criterion5Tab() {
  return (
    <div className="max-w-3xl">
      <h2>Criterion 5 — Student Support and Progression</h2>
      <p className="mt-4 text-cc-text-body">
        Covers student support mechanisms, scholarships, mentoring and progression records.
      </p>
      <MetricList items={['Metric 5.1.1 — Student Support summary']} />
      <h3 className="mt-8 text-base">Documents</h3>
      <div className="mt-4">
        <DocCard name="Metric 5.1.1 Summary" file={criterion5Doc} />
      </div>
    </div>
  );
}

function Criterion6Tab() {
  return (
    <div className="max-w-3xl">
      <h2>Criterion 6 — Governance, Leadership and Management</h2>
      <p className="mt-4 text-cc-text-body">
        Evidence for institutional governance and quality management, tracked across the following
        metrics:
      </p>
      <MetricList
        items={[
          'Metric 6.1.1 — Vision and Mission of the Institution',
          'Metric 6.2.1 — Effective deployment of the Institutional Strategic/Perspective Plan',
          'Metric 6.2.2 — Implementation of e-governance in areas of operation',
          'Metric 6.3.2 — Percentage of teachers provided financial support to attend conferences/workshops',
          'Metric 6.3.3 — Percentage of teaching and non-teaching staff participating in Faculty Development Programmes',
          'Metric 6.4.1 — Strategies for mobilisation and optimal utilisation of resources',
          'Metric 6.5.1 — Internal Quality Assurance Cell (IQAC)',
          'Metric 6.5.2 — IQAC contribution towards college development (meetings, ATR, audit reports)',
        ]}
      />
      <h3 className="mt-8 text-base">Documents</h3>
      <div className="mt-4">
        <DocCard name="Vision and Mission (Metric 6.1.1)" file={criterion6Doc} />
      </div>
    </div>
  );
}

function Criterion7Tab() {
  return (
    <div className="max-w-3xl">
      <h2>Criterion 7 — Institutional Values and Best Practices</h2>
      <p className="mt-4 text-cc-text-body">
        Covers the institution&rsquo;s best practices and distinctive contributions. Full detail is
        available on these dedicated pages:
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:max-w-md">
        <Link
          to="/naac-iqac/criterion-7-institutional-values-and-best-practices/metric-7-2-best-practices"
          className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <BuildingIcon width={20} height={20} />
          </span>
          <span className="font-semibold text-cc-text-heading">Metric 7.2 — Best Practices</span>
        </Link>
        <Link
          to="/naac-iqac/criterion-7-institutional-values-and-best-practices/metric-7-3-institutional-distinctiveness"
          className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 transition-colors hover:border-cc-primary"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <BuildingIcon width={20} height={20} />
          </span>
          <span className="font-semibold text-cc-text-heading">Metric 7.3 — Institutional Distinctiveness</span>
        </Link>
      </div>
    </div>
  );
}

function ExtendedProfileTab() {
  return (
    <div className="max-w-3xl">
      <h2>Extended Profile</h2>
      <p className="mt-4 text-cc-text-body">
        Institutional profile data covering student and teaching staff numbers, submitted as part
        of the NAAC extended profile.
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:max-w-md">
        <DocCard name="Students Profile (2022–23)" file={studentsProfileDoc} />
        <DocCard name="Teaching Staff Profile (2022–23)" file={teachingStaffDoc} />
      </div>
    </div>
  );
}

export default function IqacMainPage() {
  return (
    <TabbedContentPage
      pageTitle="IQAC"
      breadcrumbLabel="Main IQAC Page"
      breadcrumbSection="IQAC"
      description="The Internal Quality Assurance Cell (IQAC) at Christ College, Pune — NAAC accreditation Criteria 1 to 7, Extended Profile and supporting evidence documents."
      tabs={[
        { key: 'overview', label: 'Overview', render: () => <OverviewTab /> },
        { key: 'criterion1', label: 'Criterion 1', render: () => <Criterion1Tab /> },
        { key: 'criterion2', label: 'Criterion 2', render: () => <Criterion2Tab /> },
        { key: 'criterion3', label: 'Criterion 3', render: () => <Criterion3Tab /> },
        { key: 'criterion4', label: 'Criterion 4', render: () => <Criterion4Tab /> },
        { key: 'criterion5', label: 'Criterion 5', render: () => <Criterion5Tab /> },
        { key: 'criterion6', label: 'Criterion 6', render: () => <Criterion6Tab /> },
        { key: 'criterion7', label: 'Criterion 7', render: () => <Criterion7Tab /> },
        { key: 'extended-profile', label: 'Extended Profile', render: () => <ExtendedProfileTab /> },
      ]}
    />
  );
}
