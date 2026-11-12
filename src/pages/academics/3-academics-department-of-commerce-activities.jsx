import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { GridIcon, CalendarIcon } from '../../components/icons';
import excelTraining1 from '../../assets/images/gallery/excel-training-programme/1.jpg';
import excelTraining2 from '../../assets/images/gallery/excel-training-programme/2.jpg';
import excelTraining3 from '../../assets/images/gallery/excel-training-programme/3.jpg';
import sabkaSaath1 from '../../assets/images/gallery/sabka-saath-sabka-vikas/1.jpg';
import sabkaSaath2 from '../../assets/images/gallery/sabka-saath-sabka-vikas/2.jpg';
import sabkaSaath3 from '../../assets/images/gallery/sabka-saath-sabka-vikas/3.jpg';
import sabkaSaath4 from '../../assets/images/gallery/sabka-saath-sabka-vikas/4.jpg';
import sabkaSaath5 from '../../assets/images/gallery/sabka-saath-sabka-vikas/5.jpg';
import sabkaSaath6 from '../../assets/images/gallery/sabka-saath-sabka-vikas/6.jpg';

const EXCEL_TRAINING_IMAGES = [excelTraining1, excelTraining2, excelTraining3];
const SABKA_SAATH_IMAGES = [sabkaSaath1, sabkaSaath2, sabkaSaath3, sabkaSaath4, sabkaSaath5, sabkaSaath6];

const CONFERENCES_WORKSHOPS = [
  {
    name: 'Practical Excel Training Programme',
    images: EXCEL_TRAINING_IMAGES,
    description: 'The Department organised a Practical Excel Training Programme for undergraduate students. The five-day hands-on programme focused on developing students’ practical understanding of Microsoft Excel, spreadsheet management, and data organisation. The sessions emphasised practical learning, regular practice, and active participation to help students develop confidence in using Excel. The programme aimed to strengthen students’ digital skills and their ability to use Excel effectively for academic work and future professional requirements.',
  },
];

const EXHIBITIONS = [
  {
    name: 'Sabka Saath, Sabka Vikas',
    images: SABKA_SAATH_IMAGES,
    description: 'The Department organized an interactive activity titled "Sabka Saath, Sabka Vikas" for FYBCom students. The activity focused on creating awareness about government welfare schemes, budget allocation, employment, healthcare, education, and socio-economic development. Students presented their research through PowerPoint presentations and participated in a creative roleplay, portraying ministers and explaining various government initiatives. The activity encouraged experiential learning, teamwork, research, public speaking, leadership, and communication skills, while helping students connect classroom concepts with real-world government policies.',
  },
];

export default function DepartmentOfCommerceActivitiesPage() {
  return (
    <>
      <Seo
        title="Conference/Workshop/Exhibitions — Department of Commerce"
        description="Conferences, workshops, exhibitions and other co-curricular activities organised by the Department of Commerce at Christ College, Pune."
      />
      <PageHeader
        title="Conference/Workshop/Exhibitions"
        breadcrumbs={[
          { label: 'Department of Commerce', path: '/academics/department-of-commerce/department-page' },
          { label: 'Conference/Workshop/Exhibitions' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          Beyond academics, the Department of Commerce organises co-curricular activities for
          students, grouped below by category.
        </p>

        <div className="mt-10">
          <h2 className="flex items-center gap-2.5">
            <CalendarIcon className="h-6 w-6 text-cc-primary shrink-0" />
            Conference / Workshop
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CONFERENCES_WORKSHOPS.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
                <ImageCarousel images={item.images} alt={item.name} className="h-40 w-full" />
                <div className="p-5">
                  <h3 className="text-base">{item.name}</h3>
                  <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="flex items-center gap-2.5">
            <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
            Exhibition
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXHIBITIONS.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
                <ImageCarousel images={item.images} alt={item.name} className="h-40 w-full" />
                <div className="p-5">
                  <h3 className="text-base">{item.name}</h3>
                  <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="flex items-center gap-2.5">
            <GridIcon className="h-6 w-6 text-cc-primary shrink-0" />
            Webinar
          </h2>
          <p className="mt-4 text-sm italic text-cc-text-muted-light">
            No webinars published yet.
          </p>
        </div>
      </section>
    </>
  );
}
