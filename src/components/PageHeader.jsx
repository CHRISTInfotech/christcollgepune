import { Link } from 'react-router-dom';
import { HomeIcon } from './icons';

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
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.path ?? crumb.label} className="flex items-center gap-2">
                    <span aria-hidden="true">/</span>
                    {crumb.path && index !== breadcrumbs.length - 1 ? (
                      <Link to={crumb.path} className="text-cc-primary-deeper hover:text-cc-primary-dark hover:underline">{crumb.label}</Link>
                    ) : (
                      <span className="font-semibold text-cc-primary-deeper" aria-current="page">{crumb.label}</span>
                    )}
                  </li>
                ))}
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
