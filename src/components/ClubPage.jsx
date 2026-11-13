import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import Seo from './Seo';
import ImageCarousel from './ImageCarousel';
import CentreVisionMission from './CentreVisionMission';
import { ChevronLeftIcon, SparklesIcon, CalendarIcon } from './icons';

export default function ClubPage({
  name,
  seoDescription,
  tagline,
  about,
  vision,
  mission,
  images,
  events,
}) {
  const heroImage = images?.[0];

  return (
    <>
      <Seo title={name} description={seoDescription} />
      <PageHeader
        breadcrumbs={[
          { label: 'Clubs & Societies', path: '/centres-and-cells/clubs-and-societies' },
          { label: name },
        ]}
      />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="relative overflow-hidden"
      >
        <div className="relative flex min-h-[260px] items-end sm:min-h-[320px]">
          {heroImage ? (
            <img
              src={heroImage}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-cc-primary-deeper/95 via-cc-primary-deeper/55 to-cc-primary-deeper/10" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-10 sm:py-12">
            <Link
              to="/centres-and-cells/clubs-and-societies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cc-text-light/90 transition-colors hover:text-cc-gold"
            >
              <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
              All Clubs &amp; Societies
            </Link>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl">
              {name}
            </h1>
            {tagline && (
              <p className="mt-2 max-w-2xl text-sm font-semibold uppercase tracking-wide text-cc-gold sm:text-base">
                {tagline}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="flex items-center gap-2.5">
            <SparklesIcon className="h-6 w-6 shrink-0 text-cc-primary" aria-hidden="true" />
            About
          </h2>
          <p className="mt-4 text-cc-text-body leading-relaxed">{about}</p>
        </div>

        {(vision || mission) && <CentreVisionMission vision={vision} mission={mission} />}

        {images && images.length > 1 && (
          <div className="mt-10">
            <h2 className="flex items-center gap-2.5">
              <SparklesIcon className="h-6 w-6 shrink-0 text-cc-primary" aria-hidden="true" />
              Gallery
            </h2>
            <div className="mt-6 max-w-2xl overflow-hidden rounded-cc-lg border border-cc-gray-200 shadow-cc-sm">
              <ImageCarousel images={images} alt={name} className="h-72 w-full sm:h-96" />
            </div>
          </div>
        )}

        {events && events.length > 0 && (
          <div className="mt-14">
            <h2 className="flex items-center gap-2.5">
              <CalendarIcon className="h-6 w-6 shrink-0 text-cc-primary" aria-hidden="true" />
              Events
            </h2>
            <div className="mt-6 flex flex-col gap-6">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface shadow-cc-sm"
                >
                  <div className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div className="max-w-2xl">
                      <h3 className="text-base font-bold uppercase tracking-wide text-cc-primary">{event.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cc-text-body">{event.description}</p>
                    </div>
                  </div>
                  {event.images && (
                    <div className="border-t border-cc-gray-200">
                      <ImageCarousel images={event.images} alt={event.title} className="h-56 w-full sm:h-64" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
