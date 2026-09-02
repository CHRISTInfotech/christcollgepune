import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

// Centre & Cell Thumbnail Images
import imgIqac from '../../assets/centres/thumbs/iqac.png';
import imgHealth from '../../assets/centres/thumbs/centre_for_health_and_wellness.jpg';
import imgNature from '../../assets/centres/thumbs/nature_club.png';
import imgNirmiti from '../../assets/centres/thumbs/nirmiti_start_up_and_innovation_centre.png';
import imgResearch from '../../assets/centres/thumbs/research_cell.png';
import imgChd from '../../assets/centres/thumbs/centre_for_holistic_development.png';
import imgMou from '../../assets/centres/thumbs/mou.png';
import imgCdm from '../../assets/centres/thumbs/centre_for_digital__media.png';
import imgSca from '../../assets/centres/thumbs/student_cultural_association.png';
import imgNss from '../../assets/centres/thumbs/national_service_scheme.png';
import imgLibrary from '../../assets/centres/thumbs/library.png';
import imgSc from '../../assets/centres/thumbs/student_council.png';
import imgSports from '../../assets/centres/thumbs/physical__education.png';
import imgIprc from '../../assets/centres/thumbs/intellectual_property_rights_cell.png';
import imgEoc from '../../assets/centres/thumbs/equal_opportunity_cell.jpg';
import imgWomens from '../../assets/centres/thumbs/womens_cell.png';
import imgAntiRagging from '../../assets/centres/thumbs/anti_ragging_cell.png';
import imgAshc from '../../assets/centres/thumbs/anti_sexual_harassment_cell.png';
import imgElc from '../../assets/centres/thumbs/electoral_literacy_club.png';
import imgSgrc from '../../assets/centres/thumbs/student_grievance_redressal_cell.png';

const CENTRES = [
  { name: 'IQAC', image: imgIqac, path: '/naac-iqac/naac-accreditation/ssr-cycle-2-supporting-documents' },
  { name: 'Centre For Health and Wellness', image: imgHealth, path: '/centres-and-cells/centre-for-health-and-wellness/activities' },
  { name: 'Nature Club', image: imgNature, path: '/centres-and-cells/nature-club' },
  { name: 'Nirmiti Start Up and Innovation Centre', image: imgNirmiti, path: '/centres-and-cells/nirmiti-start-up-and-innovation-centre' },
  { name: 'Research Cell', image: imgResearch, path: '/centres-and-cells/research-cell' },
  { name: 'Centre for Holistic Development', image: imgChd, path: '/centres-and-cells/centre-for-holistic-development' },
  { name: 'MoU and Activities', image: imgMou, path: '/naac-iqac/iqac/mou-and-activities' },
  { name: 'Centre For Digital Media', image: imgCdm, path: '/centres-and-cells/centre-for-digital-media' },
  { name: 'Student Cultural Association', image: imgSca, path: '/students/student-cultural-association' },
  { name: 'National Service Scheme', image: imgNss, path: '/students/national-service-scheme/about-us' },
  { name: 'Library', image: imgLibrary, path: '/centres-and-cells/library/about-us' },
  { name: 'Student Council', image: imgSc, path: '/students/student-council' },
  { name: 'Physical Education & Sports', image: imgSports, path: '/students/physical-education' },
  { name: 'Intellectual Property Rights Cell', image: imgIprc, path: '/centres-and-cells/intellectual-property-rights-cell' },
  { name: 'Equal Opportunity Cell', image: imgEoc, path: '/centres-and-cells/equal-opportunity-cell' },
  { name: "Women's Cell", image: imgWomens, path: '/centres-and-cells/women-s-cell' },
  { name: 'Anti-Ragging Cell', image: imgAntiRagging, path: '/centres-and-cells/anti-ragging-cell' },
  { name: 'Anti-Sexual Harassment Cell', image: imgAshc, path: '/centres-and-cells/anti-sexual-harassment-cell' },
  { name: 'Electoral Literacy Club', image: imgElc, path: '/centres-and-cells/electoral-literacy-club' },
  { name: 'Student Grievance Redressal Cell', image: imgSgrc, path: '/centres-and-cells/student-grievance-redressal-cell' },
];

export default function CentresIndex() {
  return (
    <>
      <Seo
        title="Centres & Cells"
        description="Directory of all centres, cells and committees at Christ College, Pune — IQAC, Research Cell, Library, Student Council, NSS, Nirmiti Start Up and Innovation Centre, Women's Cell and more."
      />
      <PageHeader
        title="Centres & Cells"
        breadcrumbs={[{ label: 'Centres & Cells' }, { label: 'Centres Index' }]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2>All Centres &amp; Cells</h2>
        <p className="mt-4 max-w-3xl text-cc-text-body">
          Christ College, Pune hosts a wide network of centres, cells and committees supporting
          academics, research, student welfare and campus life. Explore the directory below.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CENTRES.map(({ name, image, path }) => (
            <Link
              key={name}
              to={path}
              className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-cc-sm transition-colors hover:border-cc-primary"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-cc-gray-200 bg-white p-1">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </span>
              <span className="font-semibold text-cc-text-heading">{name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
