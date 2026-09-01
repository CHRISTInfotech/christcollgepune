import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import naacSealImg from '../assets/home/naac-a-plus-seal.jpg';
import { buildNavSections } from '../data/routes';
import { AcademicCapIcon, ChevronDownIcon, CompassIcon } from './icons';

const NAV_SECTIONS = buildNavSections();

const TOP_LINKS = [
  { label: 'Alumni', path: 'https://alumni.christcollegepune.org/', icon: <AcademicCapIcon width={16} height={16} /> },
  { label: 'Virtual Tour', path: 'https://www.rangoli360.com/christ%20college%20pune/', icon: <CompassIcon width={16} height={16} /> },
];

function ChevronBadge({ isOpen }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-cc-text-light">
      <ChevronDownIcon className={`transition-transform duration-[350ms] ${isOpen ? 'rotate-180' : ''}`} />
    </span>
  );
}

function NavGroup({ section, isOpen, onToggle, onCloseDrawer }) {
  return (
    <div className="border-b border-white/5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-3 text-left font-medium text-cc-text-light hover:text-cc-gold"
      >
        {section.label}
        <ChevronBadge isOpen={isOpen} />
      </button>
      {isOpen && (
        <div className="ml-2 flex flex-col gap-1 border-l border-white/10 pb-3 pl-3">
          {section.items.map((item) => {
            const isExternal = item.path.startsWith('http');
            return isExternal ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCloseDrawer}
                className="rounded-cc-sm px-6 py-2 text-sm text-cc-text-muted hover:text-cc-gold-light transition-colors duration-[350ms]"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onCloseDrawer}
                className={({ isActive }) =>
                  `rounded-cc-sm px-6 py-2 text-sm transition-colors duration-[350ms] ${
                    isActive ? 'text-cc-gold' : 'text-cc-text-muted hover:text-cc-gold-light'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}

          {section.subGroups?.map((sub) => (
            <details key={sub.label} className="group/sub">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-cc-sm px-6 py-2 text-sm font-medium text-cc-text-light hover:text-cc-gold">
                {sub.label}
                <ChevronDownIcon className="shrink-0 transition-transform duration-[350ms] group-open/sub:rotate-180" />
              </summary>
              <div className="ml-2 flex flex-col gap-1 border-l border-white/10 pb-2 pl-3">
                {sub.items.map((item) => {
                  const isExternal = item.path.startsWith('http');
                  return isExternal ? (
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onCloseDrawer}
                      className="rounded-cc-sm px-6 py-2 text-sm text-cc-text-muted hover:text-cc-gold-light transition-colors duration-[350ms]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={onCloseDrawer}
                      className={({ isActive }) =>
                        `rounded-cc-sm px-6 py-2 text-sm transition-colors duration-[350ms] ${
                          isActive ? 'text-cc-gold' : 'text-cc-text-muted hover:text-cc-gold-light'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ isDrawerOpen, onToggleDrawer, onCloseDrawer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) return undefined;
    const handleKey = (event) => {
      if (event.key === 'Escape') onCloseDrawer();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isDrawerOpen, onCloseDrawer]);

  return (
    <header className="sticky top-0 z-50 shadow-cc-sm">
      <div
        className={`h-[var(--header-height)] transition-colors duration-[350ms] ${
          isScrolled ? 'bg-cc-primary-deeper' : 'bg-cc-primary'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/" className="flex h-full items-center" onClick={onCloseDrawer}>
              <img src={logo} alt="Christ College Pune" className="h-12 sm:h-14 w-auto" />
            </Link>
            <Link
              to="/naac-iqac/naac-accreditation/naac-certificate-cycle-2"
              title="NAAC Accredited 'A+' Grade — View Certificate"
              onClick={onCloseDrawer}
              className="group flex items-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={naacSealImg}
                alt="NAAC Accredited Grade A+"
                className="h-10 w-10 sm:h-12 sm:w-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:rotate-6 rounded-full"
              />
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-5 lg:flex" aria-label="Utility">
              {TOP_LINKS.map((link) => {
                const isExternal = link.path.startsWith('http');
                return isExternal ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-cc-text-light transition-colors duration-[350ms] hover:text-cc-gold"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-1.5 text-sm font-medium text-cc-text-light transition-colors duration-[350ms] hover:text-cc-gold"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `hidden rounded-cc-pill border px-5 py-2 text-sm font-semibold transition-colors duration-[350ms] sm:inline-block ${
                  isActive
                    ? 'border-cc-gold text-cc-gold'
                    : 'border-white/30 text-cc-text-light hover:border-cc-gold hover:text-cc-gold'
                }`
              }
            >
              Home
            </NavLink>

            <button
              type="button"
              className="flex items-center gap-2 rounded-cc-pill bg-cc-white px-5 py-2.5 text-sm font-semibold text-cc-primary-deeper transition-colors duration-[350ms] hover:bg-cc-gold-light"
              aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isDrawerOpen}
              aria-controls="mega-menu"
              onClick={onToggleDrawer}
            >
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-4 bg-cc-primary-deeper" />
                <span className="block h-0.5 w-4 bg-cc-primary-deeper" />
                <span className="block h-0.5 w-4 bg-cc-primary-deeper" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={onCloseDrawer}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      <div
        id="mega-menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(var(--drawer-width),90vw)] flex-col overflow-y-auto border-l border-white/10 bg-cc-bg-drawer transition-transform duration-[350ms] ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-cc-text-muted">Navigation</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onCloseDrawer}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg leading-none text-cc-text-light hover:text-cc-gold"
          >
            &times;
          </button>
        </div>

        <div className="flex gap-3 px-6 pt-5">
          <Link
            to="/admissions/online-application-instructions"
            onClick={onCloseDrawer}
            className="flex-1 rounded-cc-pill bg-cc-gold px-4 py-2.5 text-center text-sm font-semibold text-cc-primary-deeper hover:bg-cc-gold-light"
          >
            Admission
          </Link>
          <Link
            to="/"
            onClick={onCloseDrawer}
            className="flex-1 rounded-cc-pill border border-white/30 px-4 py-2.5 text-center text-sm font-semibold text-cc-text-light hover:border-cc-gold hover:text-cc-gold"
          >
            Home
          </Link>
        </div>

        <nav className="flex flex-col gap-1 border-b border-white/10 px-4 py-4 lg:hidden" aria-label="Utility">
          {TOP_LINKS.map((link) => {
            const isExternal = link.path.startsWith('http');
            return isExternal ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCloseDrawer}
                className="flex items-center gap-2 rounded-cc-sm px-2 py-2 text-sm font-medium text-cc-text-light hover:text-cc-gold"
              >
                {link.icon}
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={onCloseDrawer}
                className="flex items-center gap-2 rounded-cc-sm px-2 py-2 text-sm font-medium text-cc-text-light hover:text-cc-gold"
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <nav className="flex flex-1 flex-col gap-1 px-4 py-5" aria-label="Site sections">
          {NAV_SECTIONS.map((section) => (
            <NavGroup
              key={section.label}
              section={section}
              isOpen={openGroup === section.label}
              onToggle={() => setOpenGroup((current) => (current === section.label ? null : section.label))}
              onCloseDrawer={onCloseDrawer}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
