import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

const FUNCTIONS = [
  'Preventing harassment and promoting a safe campus',
  'Promoting awareness of equal opportunity for women',
  'Providing counselling support to students and staff',
  'Organising seminars on rights, safety and self-defence',
  "Investigating complaints of discrimination",
  "Running initiatives focused on women's health",
  "Celebrating women's achievements",
  'Advocating for policy changes on campus',
];

export default function WomensCell() {
  return (
    <>
      <Seo
        title="Women's Cell"
        description="The Women's Cell at Christ College, Pune works towards women's empowerment and gender equality, fostering a safe, gender-sensitive campus for female students and staff."
      />
      <PageHeader title="Women's Cell" breadcrumbs={[{ label: 'Student Life' }, { label: "Women's Cell" }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2>About the Cell</h2>
        <p className="mt-4 text-cc-text-body">
          Women&rsquo;s empowerment and gender equality are significant for the upliftment and
          advancement of our nation. The Women Cell at Christ College works to establish a
          strong foundation for gender sensitization, guiding female students and employees in
          recognising their potential and navigating competitive environments while fostering
          gender sensitivity across campus.
        </p>
        <p className="mt-4 text-cc-text-body">
          The cell&rsquo;s primary goal is cultivating a welcoming atmosphere for female
          students and staff by advancing gender parity, preventing harassment, delivering
          assistance, running educational initiatives, and addressing women&rsquo;s concerns
          on campus.
        </p>

        <h3 className="mt-8 text-base">Key Functions</h3>
        <ul className="mt-4 flex flex-col gap-2">
          {FUNCTIONS.map((item) => (
            <li key={item} className="flex items-center gap-2 text-cc-text-body">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
