import { useState, useMemo } from 'react';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { DownloadIcon, SearchIcon } from '../../components/icons';
import structuredDvvData from '../../data/dvv_structured_data.json';

const TABS = [
  { key: 'extended-profile', label: 'Extended Profile' },
  { key: 'criterion-1', label: 'Criterion 1' },
  { key: 'criterion-2', label: 'Criterion 2' },
  { key: 'criterion-3', label: 'Criterion 3' },
  { key: 'criterion-4', label: 'Criterion 4' },
  { key: 'criterion-5', label: 'Criterion 5' },
  { key: 'criterion-6', label: 'Criterion 6' },
  { key: 'criterion-7', label: 'Criterion 7' },
];

export default function DvvClarification() {
  const [activeTab, setActiveTab] = useState('extended-profile');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = structuredDvvData[activeTab] || [];

  const tabDocCount = useMemo(() => {
    return sections.reduce(
      (sum, sec) => sum + sec.findings.reduce((a, fin) => a + fin.documents.length, 0),
      0
    );
  }, [sections]);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase().trim();

    return sections
      .map((sec) => {
        const metricMatch = sec.metric.toLowerCase().includes(q) || (sec.category && sec.category.toLowerCase().includes(q));

        const matchedFindings = sec.findings
          .map((finding) => {
            const queryMatch = finding.query.toLowerCase().includes(q);
            const matchedDocs = finding.documents.filter((d) =>
              d.filename.toLowerCase().includes(q)
            );

            if (metricMatch || queryMatch) {
              return finding;
            }
            if (matchedDocs.length > 0) {
              return { ...finding, documents: matchedDocs };
            }
            return null;
          })
          .filter(Boolean);

        if (matchedFindings.length > 0) {
          return { ...sec, findings: matchedFindings };
        }
        return null;
      })
      .filter(Boolean);
  }, [sections, searchQuery]);

  const activeTabObj = TABS.find((t) => t.key === activeTab);

  return (
    <>
      <Seo
        title="DVV Clarification"
        description="Data Validation and Verification (DVV) clarification documents and findings submitted by Christ College, Pune to NAAC across all criteria and extended profile."
      />
      <PageHeader title="DVV Clarification" breadcrumbs={[{ label: 'NAAC' }, { label: 'DVV Clarification' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-cc-text-body">
            As part of the NAAC accreditation assessment, Christ College, Pune submits Data Validation and
            Verification (DVV) clarifications, institutional metric inputs, and university-attested evidence
            in response to queries raised on the Self Study Report (SSR). Review the DVV findings and related
            clarification documents below.
          </p>
        </div>

        {/* 8 Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-cc-gray-200 pb-4">
          {TABS.map((tab) => {
            const secList = structuredDvvData[tab.key] || [];
            const count = secList.reduce(
              (sum, sec) => sum + sec.findings.reduce((a, fin) => a + fin.documents.length, 0),
              0
            );
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveTab(tab.key);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2 rounded-cc-pill px-4 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-cc-primary text-white shadow-sm'
                    : 'bg-cc-bg-surface text-cc-text-body hover:bg-cc-gray-100 hover:text-cc-text-heading border border-cc-gray-200'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-cc-gray-200 text-cc-text-muted-light'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Header & Search */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-cc-text-heading">
              {activeTabObj?.label}
            </h2>
            <p className="text-xs text-cc-text-muted-light mt-0.5">
              {filteredSections.length} metric sections &bull; {tabDocCount} PDF documents
            </p>
          </div>

          <div className="relative w-full sm:w-80">
            <SearchIcon
              width={16}
              height={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cc-text-muted-light"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search metrics, findings, or PDF names..."
              className="w-full rounded-cc-pill border border-cc-gray-200 bg-white py-2 pl-9 pr-4 text-xs text-cc-text-heading placeholder-cc-text-muted-light focus:border-cc-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Metric Sections with Text then Related Documents */}
        <div className="mt-8 space-y-8">
          {filteredSections.map((sec, secIdx) => (
            <div
              key={sec.metric + secIdx}
              className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6 sm:p-8 shadow-cc-xs"
            >
              {sec.category && (
                <span className="inline-block rounded-cc-pill bg-cc-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cc-primary mb-2">
                  {sec.category}
                </span>
              )}
              <h3 className="text-base sm:text-lg font-bold text-cc-text-heading">
                {sec.metric}
              </h3>

              <div className="mt-6 space-y-6">
                {sec.findings.map((finding, fIdx) => (
                  <div
                    key={finding.query + fIdx}
                    className="border-t border-cc-gray-200/60 pt-5 first:border-t-0 first:pt-0"
                  >
                    {/* Finding / Query Text */}
                    <div className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-[11px] font-bold text-cc-primary mt-0.5">
                        {fIdx + 1}
                      </span>
                      <p className="text-sm font-medium text-cc-text-heading leading-relaxed">
                        {finding.query}
                      </p>
                    </div>

                    {/* Related Document(s) in between */}
                    <div className="mt-3 ml-8 grid gap-3 sm:grid-cols-2">
                        {finding.documents.map((doc, dIdx) => (
                          <a
                            key={doc.url + dIdx}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3.5 rounded-cc-md border border-cc-gray-200 bg-white p-3.5 transition-colors hover:border-cc-primary hover:shadow-cc-xs"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary group-hover:bg-cc-primary group-hover:text-white transition-colors">
                              <DownloadIcon width={16} height={16} />
                            </span>
                            <div className="min-w-0 flex-1">
                              <span className="block font-semibold text-cc-text-heading text-xs group-hover:text-cc-primary transition-colors break-all leading-snug">
                                {doc.filename}
                              </span>
                              <span className="mt-0.5 block text-[10px] font-semibold text-cc-primary">
                                View / Download PDF &rarr;
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredSections.length === 0 && (
            <div className="rounded-cc-lg border border-dashed border-cc-gray-200 p-12 text-center text-sm text-cc-text-muted-light bg-cc-bg-surface">
              No metrics or PDF documents matched your search query &ldquo;{searchQuery}&rdquo;.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
