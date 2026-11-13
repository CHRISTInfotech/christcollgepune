import { CompassIcon, TargetIcon } from './icons';

// Bold two-tone Vision/Mission block used on Centres & Cells pages only —
// department pages keep their own card-based VisionMissionCard design.
export default function CentreVisionMission({ vision, mission }) {
  if (!vision && !mission) return null;

  return (
    <div className="mt-10 overflow-hidden rounded-cc-lg shadow-cc-sm">
      {vision && (
        <div className="relative overflow-hidden bg-cc-primary px-6 py-8 sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute -right-6 -top-10 h-36 w-36 rounded-full bg-white/5" aria-hidden="true" />
          <div className="pointer-events-none absolute right-10 bottom-0 h-16 w-16 rounded-full bg-white/5" aria-hidden="true" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-cc-gold">
              <CompassIcon className="h-7 w-7" />
            </span>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cc-gold">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-white sm:text-base">{vision}</p>
            </div>
          </div>
        </div>
      )}

      {mission && (
        <div className="relative overflow-hidden bg-cc-primary-deeper px-6 py-8 sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute -right-4 -bottom-10 h-32 w-32 rounded-full bg-white/5" aria-hidden="true" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-cc-gold">
              <TargetIcon className="h-7 w-7" />
            </span>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cc-gold">Mission</h3>
              {Array.isArray(mission) ? (
                <ul className="mt-2 flex flex-col gap-2">
                  {mission.map((item) => (
                    <li key={item.title} className="text-sm leading-relaxed text-white sm:text-base">
                      <span className="font-semibold text-cc-gold">{item.title}:</span>{' '}
                      {item.description}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-white sm:text-base">{mission}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
