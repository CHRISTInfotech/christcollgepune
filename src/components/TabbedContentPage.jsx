import { useState } from 'react';
import { motion } from 'framer-motion';
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
 *
 * Hero treatment deliberately differs by section so Centres & Cells pages
 * don't read as reskinned Club pages:
 *  - Centres & Cells: a contained "profile card" (framed photo + text panel
 *    on a light surface) — institutional, directory-like.
 *  - Everything else (Student Life, etc.): the full-bleed cinematic banner
 *    with the title/tagline overlaid directly on the image.
 * Pages with no bannerImage fall back to PageHeader's own gradient title bar.
 */
export default function TabbedContentPage({
  pageTitle,
  tagline,
  description,
  breadcrumbLabel,
  breadcrumbSection = 'Student Life',
  bannerImage,
  bannerAlt,
  tabs,
  initialTab,
}) {
  const [activeKey, setActiveKey] = useState(initialTab ?? tabs[0].key);
  const active = tabs.find((tab) => tab.key === activeKey) ?? tabs[0];
  const isCentre = breadcrumbSection === 'Centres & Cells';

  return (
    <>
      <Seo
        title={activeKey === tabs[0].key ? pageTitle : `${pageTitle} – ${active.label}`}
        description={description}
      />
      <PageHeader
        title={bannerImage || isCentre ? undefined : pageTitle}
        breadcrumbs={[{ label: breadcrumbSection }, { label: breadcrumbLabel ?? pageTitle }]}
      />

      {bannerImage && !isCentre && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="relative overflow-hidden"
        >
          <div className="relative flex min-h-[220px] items-end sm:min-h-[300px]">
            <img src={bannerImage} alt={bannerAlt ?? ''} aria-hidden={!bannerAlt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cc-primary-deeper/95 via-cc-primary-deeper/55 to-cc-primary-deeper/10" />

            <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-10 sm:py-12">
              <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl">
                {pageTitle}
              </h1>
              {tagline && (
                <p className="mt-2 max-w-2xl text-sm font-semibold uppercase tracking-wide text-cc-gold sm:text-base">
                  {tagline}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {isCentre && (
        <section className="mx-auto max-w-[1200px] px-6 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface shadow-cc-sm"
          >
            <div className={`grid ${bannerImage ? 'sm:grid-cols-[280px_1fr]' : ''}`}>
              {bannerImage ? (
                <div className="h-48 sm:h-full">
                  <img src={bannerImage} alt={bannerAlt ?? ''} aria-hidden={!bannerAlt} className="h-full w-full object-cover" />
                </div>
              ) : null}

              <div className={`relative overflow-hidden ${bannerImage ? 'border-t border-cc-gray-200 sm:border-t-0 sm:border-l' : ''} border-cc-gray-200 px-6 py-8 sm:px-10`}>
                {!bannerImage && (
                  <>
                    <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-cc-primary/5" aria-hidden="true" />
                    <div className="pointer-events-none absolute right-16 bottom-0 h-20 w-20 rounded-full bg-cc-primary/5" aria-hidden="true" />
                  </>
                )}
                <div className="relative border-l-4 border-cc-gold pl-5">
                  {tagline && (
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-cc-primary">
                      {tagline}
                    </span>
                  )}
                  <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-cc-text-heading sm:text-4xl">
                    {pageTitle}
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-wrap gap-3 border-b border-cc-gray-200 pb-1">
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
