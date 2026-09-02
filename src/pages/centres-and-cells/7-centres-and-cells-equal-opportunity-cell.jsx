import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon, CompassIcon, CheckCircleIcon, UsersIcon } from '../../components/icons';
import banner from '../../assets/images/centres_banners/equal_opportunity_banner.jpg';
import equalOpportunityCellPdf from '../../assets/studentlife/cells/Equal Opportunity Cell.pdf';

const OBJECTIVES = [
  'Promoting and ensuring Diversity, Equity, and Inclusion among students, teaching and non-teaching staff, and all stakeholders across campus.',
  'Preventing perception of discrimination and cultivating healthy, supportive interpersonal relationships.',
  'Facilitating barrier-free procedures and formalities for admissions/registration for students belonging to marginalized and minority categories.',
  'Addressing grievances of students, teachers, and non-teaching staff belonging to minority and backward groups with fairness and empathy.',
];

const ROLES = [
  'Safeguard the interests of all students without any prejudice to their caste, creed, religion, language, ethnicity, gender, or disability.',
  'Establish comprehensive measures to prevent and prohibit any form of discrimination within campus premises.',
  'Ensure that no individual on campus is harassed, victimized, or treated differently in accessing any educational or recreational facilities.',
  'Ensure that students belonging to minority groups are provided with all statutory and university-permitted privileges and scholarships.',
  'Conduct awareness workshops, sensitization programs, and seminars promoting Diversity, Equity, and Inclusion (DEI).',
  'Ensure clear public notice of anti-discrimination policies, institutional guidelines, and grievance redressal workflows.',
  'Review and approve periodic cell activity reports and submit compliance records to institutional and university authorities.',
];

export default function EqualOpportunityCell() {
  return (
    <>
      <Seo
        title="Equal Opportunity Cell"
        description="The Equal Opportunity Cell at Christ College, Pune promotes diversity, equity and inclusion, safeguarding the interests of minority-group students, teaching and non-teaching staff on campus."
      />
      <PageHeader
        title="Equal Opportunity Cell"
        breadcrumbs={[{ label: 'Centres & Cells' }, { label: 'Equal Opportunity Cell' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-14 space-y-10">
        {/* Hero Banner */}
        <div className="overflow-hidden rounded-2xl border border-cc-gray-200 shadow-cc-sm">
          <img
            src={banner}
            alt="Equal Opportunity Cell"
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
          />
        </div>

        {/* About Us Card */}
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
            Diversity &bull; Equity &bull; Inclusion
          </span>
          <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">About the Cell</h2>

          <p className="mt-4 text-cc-text-body leading-relaxed text-justify [text-align-last:left]">
            The <strong>Equal Opportunity Cell (EOC)</strong> at Christ College, Pune is established to oversee
            the effective implementation of policies and programmes for disadvantaged and minority groups, to provide
            guidance and counselling with respect to academic, financial, social and other matters, and to enhance
            the diversity and inclusive culture of the college community.
          </p>
        </div>

        {/* Objectives Card */}
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
              <CompassIcon className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold text-cc-text-heading">Key Objectives</h3>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {OBJECTIVES.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-cc-gray-100 bg-slate-50/70 p-4 text-sm text-cc-text-body transition-colors hover:border-cc-primary/30"
              >
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Roles & Responsibilities Card */}
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
              <UsersIcon className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold text-cc-text-heading">Roles &amp; Responsibilities</h3>
          </div>

          <ul className="mt-6 flex flex-col gap-3">
            {ROLES.map((role, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-cc-gray-100 bg-slate-50/70 p-4 text-sm text-cc-text-body"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Official Policy Documents */}
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <h3 className="text-xl font-bold text-cc-text-heading">Policy Documents</h3>
          <p className="mt-1 text-xs text-cc-text-muted-light">
            Official guidelines, committee notifications, and regulatory framework.
          </p>

          <div className="mt-6">
            <a
              href={equalOpportunityCellPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex max-w-md items-center gap-4 rounded-xl border border-cc-gray-200 bg-white p-5 shadow-cc-xs transition-all hover:border-cc-primary hover:shadow-cc-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <DownloadIcon width={20} height={20} />
              </span>
              <div>
                <span className="block font-semibold text-cc-text-heading text-sm">
                  Equal Opportunity Cell / Minority / SC-ST / OBC Cell
                </span>
                <span className="block text-xs text-cc-text-muted-light">View / Download PDF</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
