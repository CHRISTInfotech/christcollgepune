import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import { EnvelopeIcon, FacebookIcon, GlobeIcon, InstagramIcon, LinkedInIcon, MapPinIcon, PhoneIcon, YouTubeIcon } from './icons';

const QUICK_LINKS = [
  { label: 'Centres', path: '/centres-and-cells/centres-index' },
  { label: 'Admission', path: '/admissions/online-application-instructions' },
  { label: 'Library', path: '/centres-and-cells/library/about-us' },
  { label: 'RTI', path: '/rti/statutory-declaration-under-rti-act' },
  { label: 'Examination', path: '/examination/examination-cell-roles-and-responsibilities' },
  { label: 'Cancellation Policy', path: '/admissions/cancellation-policy' },
  { label: 'IQAC', path: '/naac-iqac/iqac/main-iqac-page' },
];

// Real social profile URLs haven't been confirmed yet — placeholders pending verification.
const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: <FacebookIcon /> },
  { label: 'YouTube', href: '#', icon: <YouTubeIcon /> },
  { label: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
  { label: 'Instagram', href: '#', icon: <InstagramIcon /> },
];

function ContactRow({ icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cc-gold text-cc-gold">
        {icon}
      </span>
      <div className="text-sm text-cc-text-muted">{children}</div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cc-primary-deeper text-cc-text-muted">
      <div className="border-b border-white/10 bg-black/15 py-4">
        <div className="flex items-center justify-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-cc-text-muted transition-colors duration-[350ms] hover:bg-cc-gold hover:text-cc-primary-deeper"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-[1.1fr_1.1fr_0.9fr]">
        <div className="rounded-cc-lg border border-white/10 bg-white/5 p-6">
          <h4 className="mb-4 text-lg text-cc-text-light">CHRIST COLLEGE</h4>
          <div className="flex flex-col gap-4">
            <ContactRow icon={<MapPinIcon width={16} height={16} />}>
              26/4A, Nagar Rd, Ramwadi, Wadgaon Sheri, Pune, Maharashtra 411014
            </ContactRow>
            <ContactRow icon={<PhoneIcon width={16} height={16} />}>
              <a href="tel:+917823839456" className="text-cc-text-muted hover:text-cc-gold">
                Tel: +91 7823839456, 8432511907
              </a>
            </ContactRow>
            <ContactRow icon={<EnvelopeIcon width={16} height={16} />}>
              <a
                href="mailto:admission@christcollegepune.org"
                className="text-cc-text-muted hover:text-cc-gold"
              >
                admission@christcollegepune.org
              </a>
            </ContactRow>
            <ContactRow icon={<GlobeIcon width={16} height={16} />}>
              <a
                href="https://www.christcollegepune.org"
                target="_blank"
                rel="noreferrer"
                className="text-cc-text-muted hover:text-cc-gold"
              >
                www.christcollegepune.org
              </a>
            </ContactRow>
          </div>
        </div>

        <div className="rounded-cc-lg border border-white/10 bg-white/5 p-6">
          <p className="text-base font-semibold text-cc-text-light">Vision</p>
          <p className="mt-1 text-sm text-cc-text-muted">Enlighten to Excel</p>
          <p className="mt-5 text-base font-semibold text-cc-text-light">Mission</p>
          <p className="mt-1 text-sm text-cc-text-muted text-justify [text-align-last:left]">
            As a C.M.I. Educational Institution, the college regards education as integral to
            the formation of the human person for the fulfillment of his/her individual and
            social responsibilities. The college aims at forming leaders who are intellectually
            competent, spiritually mature, morally upright, psychologically integrated,
            physically healthy and socially responsible.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-1 flex items-center gap-3">
            <img src={logo} alt="Christ College Pune" className="h-10 w-auto" />
            <p className="text-sm italic text-cc-gold-light">Excellence and Service</p>
          </div>
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="rounded-cc-pill border border-white/15 px-4 py-2 text-center text-sm font-medium text-cc-text-light transition-colors duration-[350ms] hover:border-cc-gold hover:text-cc-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-2 border-t border-white/10 px-6 py-5 text-sm">
        <p>Copyright &copy; Christ College, Pune {year}</p>
        {/* TODO: real URLs pending from client */}
        <p>
          Developed by{' '}
          <a href="#" className="text-cc-text-muted hover:text-cc-gold">
            CHRIST Infotech &ndash; Software Research and Development Center
          </a>
          ,{' '}
          <a href="#" className="text-cc-text-muted hover:text-cc-gold">
            CHRIST University Pune Lavasa Campus
          </a>
        </p>
      </div>
    </footer>
  );
}
