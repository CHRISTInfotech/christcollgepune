import { Link } from 'react-router-dom';

export default function Card({ icon, image, title, description, to, className = '' }) {
  const content = (
    <>
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[image:var(--gradient-hero)]">
        <span className="absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-gold)]" />
        {image ? (
          <img src={image} alt="" className="h-full w-full object-cover" />
        ) : (
          icon && (
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-cc-gold-light transition-transform duration-[350ms] group-hover:scale-110">
              {icon}
            </span>
          )
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg">{title}</h3>
        {description && <p className="mt-2 flex-1 text-cc-text-muted-light">{description}</p>}
        {to && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cc-primary transition-transform duration-[350ms] group-hover:gap-2 group-hover:text-cc-primary-dark">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  const cardClass = `group flex flex-col overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm transition-all duration-[350ms] hover:-translate-y-1 hover:shadow-cc ${className}`;

  if (to) {
    return (
      <Link to={to} className={cardClass}>
        {content}
      </Link>
    );
  }

  return <div className={cardClass}>{content}</div>;
}
