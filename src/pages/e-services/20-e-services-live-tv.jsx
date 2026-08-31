import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { YouTubeIcon } from '../../components/icons';

export default function LiveTv() {
  const channelUrl = 'https://www.youtube.com/@christcollege-pune';

  return (
    <>
      <Seo
        title="Live TV"
        description="Watch live streams and recordings of events at Christ College, Pune on the college's official YouTube channel."
      />
      <PageHeader title="Live TV" breadcrumbs={[{ label: 'E-Services' }, { label: 'Live TV' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-12 text-center shadow-cc-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
            <YouTubeIcon width={32} height={32} />
          </div>

          <h3 className="mt-6 text-xl font-bold text-cc-text-heading">Live TV</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cc-text-muted-light">
            This link opens the college&rsquo;s official YouTube channel, where live streams and
            recordings of college events are published.
          </p>

          <div className="mt-8 flex w-full justify-center">
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-cc-pill bg-cc-primary px-6 py-3 text-sm font-semibold text-cc-text-light shadow-cc-sm transition-all hover:bg-cc-primary-hover hover:shadow-cc-md"
            >
              Open YouTube Channel
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
