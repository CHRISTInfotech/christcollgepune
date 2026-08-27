import { Link } from 'react-router-dom';

export default function PageHeader({ title, breadcrumbs = [], headingRef }) {
  return (
    <div className="bg-[image:var(--gradient-hero)] pb-8 pt-10">
      <div className="mx-auto max-w-[1200px] px-6">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="mb-3 flex flex-wrap gap-2 text-sm text-cc-text-light">
              <li><Link to="/" className="text-cc-text-light hover:text-cc-gold">Home</Link></li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.path ?? crumb.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {crumb.path && index !== breadcrumbs.length - 1 ? (
                    <Link to={crumb.path} className="text-cc-text-light hover:text-cc-gold">{crumb.label}</Link>
                  ) : (
                    <span className="text-cc-text-light" aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 tabIndex={-1} ref={headingRef} className="text-cc-text-light outline-none">
          {title}
        </h1>
      </div>
    </div>
  );
}
