import ImageCarousel from './ImageCarousel';
import { CalendarIcon } from './icons';

export default function CategorySection({ icon: Icon, title, items, emptyNote }) {
  return (
    <div>
      <h2 className="flex items-center gap-2.5 mt-12">
        <Icon className="h-6 w-6 text-cc-primary shrink-0" />
        {title}
      </h2>
      {items.length === 0 ? (
        <p className="mt-4 text-sm italic text-cc-text-muted-light">{emptyNote}</p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
              {item.images ? (
                <ImageCarousel images={item.images} alt={item.name} />
              ) : (
                item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
              )}
              <div className="p-5">
                <h3 className="text-base">{item.name}</h3>
                {item.subtitle && (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cc-primary">{item.subtitle}</p>
                )}
                {item.date && (
                  <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wide text-cc-primary">
                    <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                    {item.date}
                  </p>
                )}
                {item.description && (
                  <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
