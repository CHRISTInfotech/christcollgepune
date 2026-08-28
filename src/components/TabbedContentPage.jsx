import { useState } from 'react';
import PageHeader from './PageHeader';
import Seo from './Seo';

/**
 * Shared shell for Student Life pages that present their content as tabs
 * (e.g. Student Council, Student Cultural Association) so every tabbed page
 * shares one tab-strip design instead of each page inventing its own.
 *
 * `tabs` is `[{ key, label, render }]` where `render(goToTab)` returns the
 * tab's JSX — `goToTab` lets a tab jump to another tab (e.g. a "Read the
 * Constitution" button on the Home tab switching to the Constitution tab).
 */
export default function TabbedContentPage({
  pageTitle,
  description,
  breadcrumbLabel,
  bannerImage,
  bannerAlt,
  tabs,
  initialTab,
}) {
  const [activeKey, setActiveKey] = useState(initialTab ?? tabs[0].key);
  const active = tabs.find((tab) => tab.key === activeKey) ?? tabs[0];

  return (
    <>
      <Seo
        title={activeKey === tabs[0].key ? pageTitle : `${pageTitle} – ${active.label}`}
        description={description}
      />
      <PageHeader title={pageTitle} breadcrumbs={[{ label: 'Student Life' }, { label: breadcrumbLabel ?? pageTitle }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        {bannerImage && (
          <img
            src={bannerImage}
            alt={bannerAlt}
            className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
          />
        )}

        <div className={`${bannerImage ? 'mt-10' : ''} flex flex-wrap gap-3 border-b border-cc-gray-200 pb-1`}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              aria-pressed={activeKey === tab.key}
              className={`rounded-cc-pill border px-5 py-2 text-sm font-medium transition-colors duration-[350ms] ${
                activeKey === tab.key
                  ? 'border-cc-primary bg-cc-primary text-cc-white'
                  : 'border-cc-gray-300 text-cc-text-body hover:border-cc-primary hover:text-cc-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10">{active.render(setActiveKey)}</div>
      </section>
    </>
  );
}
