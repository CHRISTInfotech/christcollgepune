import rawCriteriaData from './iqac_criteria_data.json';

/**
 * NAAC SSR Cycle 2 criterion evidence (Criterion 1–7), with every document's
 * `link` resolved for rendering:
 *  - `asset`  → a file bundled from src/assets/iqac/criteria/ (copied from the
 *               old site's uploads; `source_url` records where it came from)
 *  - `route`  → a page on this site (prefixed with the app's base path)
 *  - `link`   → left as-is (external sites such as the alumni portal)
 */
const assetUrls = import.meta.glob('../assets/iqac/criteria/**/*.{pdf,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function resolveLink(doc) {
  if (doc.asset) {
    const url = assetUrls[`../assets/iqac/criteria/${doc.asset}`];
    if (!url && import.meta.env.DEV) console.warn(`IQAC criteria asset not found: ${doc.asset}`);
    return url || null;
  }
  if (doc.route) return `${base}${doc.route}`;
  return doc.link || null;
}

const iqacCriteriaData = Object.fromEntries(
  Object.entries(rawCriteriaData).map(([key, criterion]) => [
    key,
    {
      ...criterion,
      sections: criterion.sections.map((section) => ({
        ...section,
        documents: section.documents.map((doc) => ({ ...doc, link: resolveLink(doc) })),
      })),
    },
  ])
);

export default iqacCriteriaData;
