import DepartmentTemplate from '../../components/DepartmentTemplate';
import departmentBanner from '../../assets/images/3-academics-department-index-arts/department-banner.jpg';
import inaugurationOfCcaa from '../../assets/images/3-academics-department-of-arts-association/inauguration-of-ccaa.jpg';
import ecoMania from '../../assets/images/3-academics-department-of-arts-festivals/eco-mania-economics-fest.jpg';
import busyMinds from '../../assets/images/3-academics-department-of-arts-activities/busy-minds.jpg';
import facultyPublications from '../../assets/images/3-academics-department-of-arts-ba-department-programme-page/faculty-publications.jpg';

const PROGRAMMES = [
  { title: 'BA (Bachelor of Arts)', level: 'Undergraduate', path: '/academics/department-of-arts/ba-department-programme-page' },
];

const ABOUT_PARAGRAPHS = [
  'The Department of Arts at Christ College, Pune offers undergraduate education focused on developing intellectually competent and socially responsible individuals.',
];

const ACTIVITIES = [
  { name: 'Fests', description: 'Eco Mania, the department’s annual economics festival, and other department festivals.', image: ecoMania, path: '/academics/department-of-arts/festivals' },
  { name: 'CCAA', description: 'Christ College Arts Association (CCAA) — student-led events and initiatives.', image: inaugurationOfCcaa, path: '/academics/department-of-arts/association' },
  { name: 'Conference/Workshop/Exhibitions', description: 'Workshops, guest sessions, career guidance and industry visits organised by the department.', image: busyMinds, path: '/academics/department-of-arts/activities' },
  { name: 'Seminars/ Corporate Connect', description: 'Research and publications by department faculty.', image: facultyPublications, path: '/academics/department-of-arts/seminars-and-corporate-connect' },
];

const ACHIEVEMENTS = [
  { title: 'Krishna Chauhan', programme: 'SYBA', description: 'Selected to the PDZSC Cricket (Men) team to participate in the Savitribai Phule Pune University Inter Zonal Championship 2024–25.' },
];

export default function DepartmentIndexArts() {
  return (
    <DepartmentTemplate
      seoTitle="Department of Arts"
      seoDescription="Overview of the Department of Arts at Christ College, Pune, offering the BA programme at the Pune New Campus, with student achievements in sport."
      departmentName="Department of Arts"
      breadcrumbs={[{ label: 'Department of Arts' }]}
      bannerImage={departmentBanner}
      programmes={PROGRAMMES}
      aboutParagraphs={ABOUT_PARAGRAPHS}
      vision="To be a leading academic and research department in economics that generates innovative ideas and solutions to complex economic challenges facing society."
      mission="The Department of Arts is dedicated to advancing knowledge and understanding of economics through teaching, research, and outreach."
      activities={ACTIVITIES}
      achievements={ACHIEVEMENTS}
    />
  );
}
