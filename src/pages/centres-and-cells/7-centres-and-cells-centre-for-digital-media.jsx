import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import {
  CameraIcon,
  CompassIcon,
  EnvelopeIcon,
  LightbulbIcon,
  CheckCircleIcon,
  GlobeIcon,
  VideoIcon,
} from '../../components/icons';
import banner from '../../assets/images/7-centres-and-cells-centre-for-digital-media/banner.png';

const FUNCTIONS = [
  'Photography, videography and live streaming',
  'Christ college promotion and advertisements',
  'Social media and website management',
  'Digital display boards',
  'Designing and post-production work',
];

const OBJECTIVES = [
  {
    num: '1',
    title: 'Foster Creative Growth',
    description: 'Cultivate creative talents to contribute to institutional growth.',
  },
  {
    num: '2',
    title: 'Ensure Excellence',
    description: "Maintain content quality in alignment with CHRIST College's pursuit of excellence.",
  },
  {
    num: '3',
    title: 'Innovative Communication',
    description: 'Create innovative communication methods for effective public engagement.',
  },
  {
    num: '4',
    title: 'Ethical Standards',
    description: 'Uphold ethical content creation without compromising quality.',
  },
];

export default function CentreForDigitalMedia() {
  return (
    <>
      <Seo
        title="Centre for Digital Media (CDM)"
        description="The Centre of Digital Media (CDM) at Christ College, Pune — managing college branding, social media, video production, live streaming, digital archives, and institutional communications."
      />
      <PageHeader
        title="Centre for Digital Media"
        breadcrumbs={[{ label: 'Centres & Cells' }, { label: 'Centre for Digital Media' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-14 space-y-10">
        {/* Banner */}
        <div className="overflow-hidden rounded-2xl border border-cc-gray-200 shadow-cc-sm">
          <img
            src={banner}
            alt="Centre for Digital Media"
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
          />
        </div>

        {/* About Us Card */}
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <span className="inline-block rounded-full bg-cc-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cc-primary">
            Digital Branding &bull; Media Production &bull; Communications
          </span>
          <h2 className="mt-2 text-2xl font-bold text-cc-text-heading sm:text-3xl">About Us</h2>

          <div className="mt-4 space-y-4 text-cc-text-body leading-relaxed text-justify [text-align-last:left]">
            <p>
              The Centre of Digital Media (CDM) is responsible for managing all college social media
              pages and ensuring the standardization of documents in line with the institution&rsquo;s
              branding policies for public dissemination. CDM can approve and recommend modifications
              to content, design, and content execution to maintain alignment with the
              University&rsquo;s guidelines.
            </p>
            <p>
              Centre for Digital Media is responsible for creating promotional videos for the
              college, producing various after-movie content, and curating various series featured on
              the institution&rsquo;s YouTube channel and other social media platforms. The Centre
              diligently archives all video and audio content produced at Christ college in digital
              repositories, making it readily accessible to faculty and students for educational
              purposes. The Centre of Digital Media is dedicated to fostering the growth of Christ
              College as an institution. This exclusive unit designs and produces media content for
              internal and external promotion of significant events and developments within the
              University. CDM also provides comprehensive coverage of major seminars, workshops,
              events, and conferences each department organizes. Additionally, we actively manage the
              college website and social media pages while offering valuable design and video
              production support.
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-xs sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
                <LightbulbIcon className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-cc-text-heading">Vision</h3>
            </div>
            <p className="mt-4 text-sm font-medium leading-relaxed text-cc-text-body italic">
              &ldquo;Leading with Creativity and Impact.&rdquo;
            </p>
          </div>

          <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-xs sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
                <CompassIcon className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-cc-text-heading">Mission</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cc-text-body">
              Our mission is to facilitate innovative communication solutions that empower the
              academic community in their quest for knowledge and growth.
            </p>
          </div>
        </div>

        {/* Functions Card */}
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
              <CameraIcon className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold text-cc-text-heading">Functions</h3>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FUNCTIONS.map((func, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-cc-gray-100 bg-slate-50/70 p-4 text-sm text-cc-text-body transition-colors hover:border-cc-primary/30"
              >
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span className="font-medium text-cc-text-heading">{func}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Objectives Card */}
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
              <CompassIcon className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold text-cc-text-heading">Objectives</h3>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {OBJECTIVES.map((obj) => (
              <div
                key={obj.num}
                className="flex gap-4 rounded-xl border border-cc-gray-100 bg-slate-50/70 p-5 shadow-cc-xs"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cc-primary text-xs font-bold text-white">
                  {obj.num}
                </span>
                <div>
                  <h4 className="font-bold text-cc-text-heading text-sm">{obj.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-cc-text-body">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reach Us Card */}
        <div className="rounded-2xl border border-cc-gray-200 bg-cc-bg-surface p-6 shadow-cc-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cc-primary/10 text-cc-primary">
                <EnvelopeIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-cc-text-heading">Reach Us</h3>
                <p className="text-xs text-cc-text-muted-light">
                  For design support, video production, event coverage, and branding enquiries
                </p>
              </div>
            </div>

            <div>
              <a
                href="mailto:design@christcollegepune.org"
                className="inline-flex items-center gap-2 rounded-xl bg-cc-primary px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-cc-primary-dark"
              >
                <EnvelopeIcon width={14} height={14} />
                <span>design@christcollegepune.org</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
