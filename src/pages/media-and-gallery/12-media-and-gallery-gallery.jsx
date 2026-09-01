import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { SearchIcon, DownloadIcon, ImageIcon, ExpandIcon } from '../../components/icons';
import galleryEvents from '../../data/gallery-events.json';

const photoModules = import.meta.glob('../../assets/images/gallery/*/*.jpg', { eager: true, import: 'default' });

const photosBySlug = {};
for (const [path, url] of Object.entries(photoModules)) {
  const match = path.match(/gallery\/([^/]+)\/(\d+)\.jpg$/);
  if (!match) continue;
  const [, slug, num] = match;
  (photosBySlug[slug] ??= []).push({ num: Number(num), url });
}
for (const photos of Object.values(photosBySlug)) {
  photos.sort((a, b) => a.num - b.num);
}

const DEPARTMENTS = ['All', 'Science', 'Arts', 'Commerce', 'Management'];

const SORTS = [
  { value: 'name-asc', label: 'Name (A–Z)' },
  { value: 'name-desc', label: 'Name (Z–A)' },
  { value: 'photos-desc', label: 'Most Photos' },
];

export default function GalleryPage() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');
  const [sort, setSort] = useState('name-asc');
  const [openEvent, setOpenEvent] = useState(null);

  const events = useMemo(() => {
    let list = galleryEvents.filter((e) => {
      if (department !== 'All' && e.department !== department) return false;
      if (search && !e.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    list = [...list].sort((a, b) => {
      if (sort === 'name-asc') return a.name.localeCompare(b.name);
      if (sort === 'name-desc') return b.name.localeCompare(a.name);
      return b.photoCount - a.photoCount;
    });
    return list;
  }, [search, department, sort]);

  const openPhotos = openEvent ? photosBySlug[openEvent.slug] || [] : [];

  return (
    <>
      <Seo
        title="Gallery"
        description="Photo gallery of events at Christ College, Pune, organised by department, with search and download."
      />
      <PageHeader title="Gallery" breadcrumbs={[{ label: 'Gallery' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="flex items-center gap-2.5">
          <ImageIcon className="h-6 w-6 text-cc-primary shrink-0" />
          Event Gallery
        </h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          Browse photos from festivals, seminars, workshops, and campus events across all four
          departments of Christ College, Pune. Search, filter by department, and download any
          photo.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cc-text-muted-light" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events..."
              className="w-full rounded-cc-pill border border-cc-gray-200 bg-cc-bg-page py-2.5 pl-10 pr-4 text-sm text-cc-text-body outline-none transition-colors focus:border-cc-primary"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="rounded-cc-md border border-cc-gray-200 bg-cc-bg-page px-3 py-2.5 text-sm text-cc-text-body outline-none transition-colors focus:border-cc-primary"
            >
              {DEPARTMENTS.map((d) => (
                <option key={d} value={d}>
                  {d === 'All' ? 'All Departments' : d}
                </option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-cc-md border border-cc-gray-200 bg-cc-bg-page px-3 py-2.5 text-sm text-cc-text-body outline-none transition-colors focus:border-cc-primary"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-4 text-xs uppercase tracking-wide text-cc-text-muted-light">
          {events.length} {events.length === 1 ? 'event' : 'events'}
        </p>

        {events.length === 0 ? (
          <p className="mt-10 text-sm italic text-cc-text-muted-light">
            No events found for this filter.
          </p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => {
              const photos = photosBySlug[e.slug] || [];
              const thumb = photos[0]?.url;
              return (
                <button
                  key={e.slug}
                  type="button"
                  onClick={() => setOpenEvent(e)}
                  className="group overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page text-left shadow-cc-sm transition-colors hover:border-cc-primary"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-cc-gray-100">
                    {thumb && (
                      <img
                        src={thumb}
                        alt={e.name}
                        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    )}
                    <span className="absolute right-2 top-2 flex items-center gap-1 rounded-cc-pill bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
                      <ExpandIcon className="h-3 w-3" />
                      {photos.length}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base">{e.name}</h3>
                    {e.department && (
                      <p className="mt-1 text-xs uppercase tracking-wide text-cc-primary">
                        Department of {e.department}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {openEvent && createPortal(
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={openEvent.name}
          onClick={() => setOpenEvent(null)}
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 pb-4">
            <h3 className="text-lg font-semibold text-white">{openEvent.name}</h3>
            <button
              type="button"
              onClick={() => setOpenEvent(null)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div
            className="mx-auto grid w-full max-w-6xl flex-1 auto-rows-min gap-4 overflow-y-auto pb-4 sm:grid-cols-3 lg:grid-cols-4"
            onClick={(e) => e.stopPropagation()}
          >
            {openPhotos.map((p) => (
              <div key={p.num} className="group relative overflow-hidden rounded-cc-md bg-cc-gray-900">
                <img src={p.url} alt={`${openEvent.name} photo ${p.num}`} className="aspect-square w-full object-cover" />
                <a
                  href={p.url}
                  download={`${openEvent.slug}-${p.num}.jpg`}
                  className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label={`Download photo ${p.num}`}
                >
                  <DownloadIcon width={16} height={16} />
                </a>
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
