import sitemapData from '../../sitemap_data.json';

export { sitemapData };

/**
 * Finds a sitemap row by its exact `page` (and optional `sub_link`) and
 * returns a menu item `{ label, path }`. `label` overrides the display text
 * when the real site's menu wording differs slightly from the sitemap's page
 * name (e.g. "Faculty" in the sitemap, "Faculty List" in the menu). `section`
 * disambiguates when the same `page` name exists in more than one sitemap
 * section (e.g. "Contact Us" appears under both "2. About Us" and
 * "17. Contact Us", pointing at the same real URL under two different paths).
 */
function pick(page, sub_link, label, section) {
  const row = sitemapData.find(
    (r) => r.page === page && (r.sub_link || '') === (sub_link || '') && (!section || r.section === section)
  );
  if (!row) throw new Error(`Nav item not found in sitemap: page="${page}" sub_link="${sub_link || ''}" section="${section || ''}"`);
  return { label: label || sub_link || page, path: row.path };
}

/**
 * The site's top-level menu structure — an explicit, curated match to the
 * real site's navigation, confirmed against the live menu content directly
 * (not derived mechanically from the xlsx's 21 sitemap sections). Several
 * sections contain rows that exist in the sitemap but are NOT real menu
 * items (e.g. Admissions' CET notices, Academics' "Department Index" and
 * "Programme Outcomes" pages, Examination's internal "Roles & Responsibilities"
 * page) — those pages still exist as real routes, just not surfaced here.
 * Each entry below resolves to a real sitemap_data.json path via `pick()`, so
 * a typo or renamed page throws immediately instead of silently 404ing.
 */
export function buildNavSections() {
  return [
    {
      label: 'About',
      items: [
        pick('About Us'),
        pick('History'),
        pick('Message from Director'),
        pick('Leadership'),
        pick('Faculty', '', 'Faculty List'),
        pick('Administration', '', 'Administrative Staff Members'),
      ],
    },
    {
      label: 'Student Life',
      items: [
        pick('Student Council', '', 'Student Council (SC)'),
        pick('Student Cultural Association', '', 'Student Cultural Association (SCA)'),
        pick('National Service Scheme', 'About Us', 'National Service Scheme (NSS)'),
        pick('College Magazine'),
        pick('Physical Education', '', 'Physical Education & Sports'),
        pick('Students Insurance 2026-27'),
      ],
      subGroups: [
        {
          label: 'Cells & Centres',
          items: [
            pick("Women's Cell"),
            pick('Anti-Ragging Cell'),
            pick('Electoral Literacy Club'),
            pick('Anti-Sexual Harassment Cell'),
            pick('Equal Opportunity Cell'),
            pick('Student Grievance Redressal Cell'),
            pick('Research Cell'),
            pick('Intellectual Property Rights Cell'),
            pick('Nirmiti Start Up and Innovation Centre', '', 'Centre for Start-up and Innovation'),
            pick('Centre for Holistic Development'),
            pick('Centre for Health and Wellness', 'Activities', 'Centre for Health and Wellness'),
          ],
        },
      ],
    },
    {
      label: 'Academics',
      items: [
        pick('Department of Science', 'Department page', 'Department of Science'),
        pick('Department of Arts', 'Department index', 'Department of Arts'),
        pick('Department of Commerce', 'Department page', 'Department of Commerce'),
        pick('Department of Management', 'Department page', 'Department of Management'),
      ],
    },
    {
      label: 'E-Services',
      items: [
        pick('Student Login'),
        pick('Faculty Login'),
        pick('Online Payment Portal'),
        pick('Orbis - ERP', '', 'Orbis ERP'),
        pick('Online Payment Policy'),
        pick('Live TV'),
      ],
    },
    {
      label: 'Admissions',
      items: [
        pick('Application Form for UG'),
        pick('Application Form for PG'),
        pick('Online Application Instructions', '', 'Instructions for Online Application Form'),
        pick('Miscellaneous Information'),
        pick('International / NRI Student'),
        pick('Cancellation Policy'),
        pick('Application Queries'),
        pick('Fees Regulating Authority (FRA)', '', 'Fees Regulating Authority(FRA)'),
      ],
    },
    {
      label: 'Examination',
      items: [
        pick('Examination Policy'),
        pick('Examination', 'Cell Members List', 'Examination Cell Members'),
        pick('Examination', 'Instructions for Candidates', 'Student Instructions'),
        pick('Important Circulars'),
        pick('Examination Time Table (External)'),
        pick('Results'),
        pick('Convocation Certificate Application'),
        pick('Duplicate Degree Certificate'),
      ],
    },
    {
      label: 'IQAC',
      items: [
        pick('IQAC', 'About IQAC', 'About IQAC'),
        pick('IQAC', 'IQAC Composition', 'Composition'),
        pick('IQAC', 'Meeting Minutes / ATR'),
        pick('IQAC', 'Cells and Committees'),
        pick('IQAC', 'Student Hand Book', 'Student Handbook'),
        pick('IQAC', 'Academic Calendar'),
        pick('IQAC', 'Quality Initiative', 'Quality Initiatives'),
        pick('IQAC', 'Annual Reports'),
        pick('NAAC Accreditation', 'Policy Documents', 'Policies'),
        pick('NAAC Accreditation', 'AQAR 2023–24', 'AQAR'),
        pick('Programme Outcomes & Course Outcomes'),
        pick('IQAC', 'MoU and Activities', 'MoUs'),
        pick('Criterion 7 – Institutional Values and Best Practices', 'Metric 7.2 – Best Practices', 'Best Practices'),
        pick('Criterion 7 – Institutional Values and Best Practices', 'Metric 7.3 – Institutional Distinctiveness', 'Institutional Distinctiveness'),
        pick('IQAC', 'Strategic Plan'),
        pick('IQAC', 'Feedback Analysis', undefined, '19. NAAC / IQAC'),
      ],
    },
    {
      label: 'NAAC',
      items: [
        pick('NAAC Accreditation', 'NAAC Certificate – Cycle 1', 'NAAC Certificate Cycle 1'),
        pick('NAAC Accreditation', 'NAAC Certificate – Cycle 2', 'NAAC Certificate Cycle 2'),
        pick('NAAC Accreditation', 'SSR – Cycle 1 (PDF)', 'SSR Cycle 1'),
        pick('NAAC Accreditation', 'Peer Team Report'),
        pick('NAAC Accreditation', 'Self Study Report (SSR)', 'SSR Cycle 2'),
        pick('NAAC Accreditation', 'SSR – Cycle 2 (Supporting Documents)', 'Supporting Documents'),
        pick('NAAC Accreditation', 'DVV Clarification'),
      ],
    },
    {
      label: 'AICTE',
      items: [
        pick('Essential Documents'),
        pick('AICTE Approved Courses'),
        pick('Scholarship/Fellowship Schemes'),
        pick('Mandatory Disclosure'),
      ],
    },
  ];
}

/**
 * Turns sitemap_data.json rows into react-router route descriptors.
 *
 * `componentMap` is keyed by row `id` (matching the `src/pages/{section}/{id}.jsx`
 * files written during the content-extraction pass) and resolves to that page's
 * component. Rows without a match yet fall back to `fallbackComponent` so the
 * router can be regenerated incrementally as pages are filled in, batch by batch,
 * instead of needing all 170 components to exist before any route works.
 */
export function buildRoutesFromSitemap(componentMap, fallbackComponent) {
  return sitemapData.map((row) => ({
    id: row.id,
    path: row.path,
    section: row.section,
    page: row.page,
    subLink: row.sub_link,
    Component: componentMap[row.id] ?? fallbackComponent,
  }));
}
