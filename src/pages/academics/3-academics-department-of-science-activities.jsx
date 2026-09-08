import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import CategorySection from '../../components/CategorySection';
import { BookIcon, UsersIcon, CompassIcon } from '../../components/icons';
import workshopItIndustry from '../../assets/images/3-academics-department-of-science-activities/workshop-it-industry.jpeg';

const WORKSHOP = [
  {
    name: 'Workshop on Career Opportunities in the IT Industry',
    date: '19 December 2023',
    image: workshopItIndustry,
    description: "The workshop on \"Career Opportunities in the IT Industry\" held on December 19th, 2023, was a highly informative session for first-year B.Sc students of the Science Department. Facilitated by Mr. Nitin Abraham, the Centre Manager at IANT Computer Education Institute in Pune's Viman Nagar, the workshop aimed to enlighten students about the vast prospects within the IT sector, covering software development, cybersecurity, data science, and network administration.",
  },
];

const INDUSTRIAL_VISIT = [
  {
    name: 'GMRT — Giant Metrewave Radio Telescope Visit',
    date: '16 February 2024',
    description: 'On February 16, 2024, over 50 second-year students from the Department of Science embarked on an educational visit to the Giant Metrewave Radio Telescope (GMRT) in Pune. The day-long excursion, commencing at 7:00 am, included interactive sessions, guided tours, and hands-on experiences with scientists and researchers, deepening students’ understanding of radio astronomy before the group returned to college by 9:30 pm.',
  },
];

export default function DepartmentOfScienceActivitiesPage() {
  return (
    <>
      <Seo
        title="Activities — Department of Science"
        description="Workshops and industrial visits organised by the Department of Science at Christ College, Pune, including the GMRT field visit."
      />
      <PageHeader
        title="Activities"
        breadcrumbs={[
          { label: 'Department of Science', path: '/academics/department-of-science/department-page' },
          { label: 'Activities' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="max-w-3xl text-cc-text-body">
          Beyond academics, the Department of Science organises a range of co-curricular
          activities for students — workshops and industrial visits — grouped below by category.
          For conferences, seminars and corporate connect talks, see the{' '}
          <a href="/academics/department-of-science/seminars-and-corporate-connect" className="text-cc-primary hover:underline">
            Seminars/ Corporate Connect
          </a>{' '}
          page.
        </p>

        <div className="mt-10 flex flex-col gap-14">
          <CategorySection icon={BookIcon} title="Workshop" items={WORKSHOP} />
          <CategorySection
            icon={UsersIcon}
            title="Club Activities"
            items={[]}
            emptyNote="No club activities published yet."
          />
          <CategorySection
            icon={CompassIcon}
            title="Industrial Visit & Field Visit"
            items={INDUSTRIAL_VISIT}
          />
        </div>
      </section>
    </>
  );
}
