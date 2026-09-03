import { Link } from 'react-router-dom';
import { HomeIcon } from './icons';

const CANONICAL_SECTION_PATHS = {
  // Main Navigation Sections
  'About Us': '/about-us/about-us',
  'About': '/about-us/about-us',
  'Academics': '/academics/department-of-commerce/department-page',
  'Admissions': '/admissions/online-application-instructions',
  'AICTE': '/aicte/essential-documents',
  'Student Life': '/students/student-council',
  'Centres & Cells': '/centres-and-cells/centres-index',
  'Centres and Cells': '/centres-and-cells/centres-index',
  'E-Services': '/e-services/online-payment-portal',
  'Examination': '/examination/examination-policy',
  'IQAC': '/naac-iqac/iqac/about-iqac',
  'NAAC': '/naac-iqac/naac-accreditation/naac-certificate-cycle-1',
  'NAAC Accreditation': '/naac-iqac/naac-accreditation/naac-certificate-cycle-1',
  'RTI': '/rti/statutory-declaration-under-rti-act',

  // Academic Department Sections
  'Department of Arts': '/academics/department-of-arts/ba-department-programme-page',
  'Department of Commerce': '/academics/department-of-commerce/department-page',
  'Department of Management': '/academics/department-of-management/department-page',
  'Department of Science': '/academics/department-of-science/department-page',

  // Student Life Sub-units
  'National Service Scheme': '/students/national-service-scheme/about-us',
  'NSS': '/students/national-service-scheme/about-us',
};

export default function PageHeader({ title, breadcrumbs = [], headingRef }) {
  return (
    <div className="sticky top-[var(--header-height)] z-40 shadow-cc-sm">
      {breadcrumbs.length > 0 && (
        <div className="bg-cc-gold py-2">
          <div className="mx-auto max-w-[1200px] px-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-cc-primary-deeper">
                <li>
                  <Link to="/" className="flex items-center gap-1 text-cc-primary-deeper hover:text-cc-primary-dark hover:underline">
                    <HomeIcon width={14} height={14} />
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, index) => {
                  const resolvedPath = crumb.path || CANONICAL_SECTION_PATHS[crumb.label];
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <li key={crumb.path ?? crumb.label + index} className="flex items-center gap-2">
                      <span aria-hidden="true">/</span>
                      {resolvedPath && !isLast ? (
                        <Link to={resolvedPath} className="text-cc-primary-deeper hover:text-cc-primary-dark hover:underline">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="font-semibold text-cc-primary-deeper" aria-current={isLast ? 'page' : undefined}>
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      )}

      <div className="bg-[image:var(--gradient-hero)] py-8">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 tabIndex={-1} ref={headingRef} className="text-cc-text-light outline-none">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
