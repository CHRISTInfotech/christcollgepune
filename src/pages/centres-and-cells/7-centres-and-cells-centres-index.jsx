import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import {
  CheckCircleIcon,
  CompassIcon,
  GlobeIcon,
  ExpandIcon,
  SearchIcon,
  UsersIcon,
  ShareIcon,
  ImageIcon,
  CalendarIcon,
  MapPinIcon,
  BookIcon,
  BuildingIcon,
  AwardIcon,
  GridIcon,
  PhoneIcon,
} from '../../components/icons';

const CENTRES = [
  { name: 'IQAC', icon: CheckCircleIcon, path: '/naac-iqac/iqac/main-iqac-page' },
  { name: 'Centre For Health and Wellness', icon: CompassIcon, path: '/centres-and-cells/centre-for-health-and-wellness/activities' },
  { name: 'Nature Club', icon: GlobeIcon, path: '/centres-and-cells/nature-club' },
  { name: 'Nirmiti Start Up and Innovation Centre', icon: ExpandIcon, path: '/centres-and-cells/nirmiti-start-up-and-innovation-centre' },
  { name: 'Research Cell', icon: SearchIcon, path: '/centres-and-cells/research-cell' },
  { name: 'Centre for Holistic Development', icon: UsersIcon, path: '/centres-and-cells/centre-for-holistic-development' },
  { name: 'MoU', icon: ShareIcon, path: '/centres-and-cells/mou' },
  { name: 'Centre For Digital Media', icon: ImageIcon, path: '/centres-and-cells/centre-for-digital-media' },
  { name: 'Student Cultural Association', icon: CalendarIcon, path: '/students/student-cultural-association' },
  { name: 'National Service Scheme', icon: MapPinIcon, path: '/students/national-service-scheme/about-us' },
  { name: 'Library', icon: BookIcon, path: '/centres-and-cells/library/about-us' },
  { name: 'Student Council', icon: BuildingIcon, path: '/students/student-council' },
  { name: 'Physical Education', icon: AwardIcon, path: '/students/physical-education' },
  { name: 'Intellectual Property Rights Cell', icon: GridIcon, path: '/centres-and-cells/intellectual-property-rights-cell' },
  { name: 'Equal Opportunity Cell', icon: UsersIcon, path: '/centres-and-cells/equal-opportunity-cell' },
  { name: "Women's Cell", icon: UsersIcon, path: '/centres-and-cells/women-s-cell' },
  { name: 'Anti-Ragging Cell', icon: CheckCircleIcon, path: '/centres-and-cells/anti-ragging-cell' },
  { name: 'Electoral Literacy Club', icon: CompassIcon, path: '/centres-and-cells/electoral-literacy-club' },
  { name: 'Anti-Sexual Harassment Cell', icon: CheckCircleIcon, path: '/centres-and-cells/anti-sexual-harassment-cell' },
  { name: 'Student Grievance Redressal Cell', icon: PhoneIcon, path: '/centres-and-cells/student-grievance-redressal-cell' },
];

export default function CentresIndex() {
  return (
    <>
      <Seo
        title="Centres & Cells"
        description="Directory of all centres, cells and committees at Christ College, Pune — IQAC, Research Cell, Library, Student Council, NSS, Nirmiti Start Up and Innovation Centre, Women's Cell and more."
      />
      <PageHeader title="Centres & Cells" breadcrumbs={[{ label: 'Centres & Cells' }, { label: 'Centres Index' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2>All Centres & Cells</h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          Christ College, Pune hosts a wide network of centres, cells and committees supporting
          academics, research, student welfare and campus life. Explore the directory below.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CENTRES.map(({ name, icon: Icon, path }) => (
            <Link
              key={name}
              to={path}
              className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-5 shadow-cc-sm transition-colors hover:border-cc-primary"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
                <Icon width={20} height={20} />
              </span>
              <span className="font-semibold text-cc-text-heading">{name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
