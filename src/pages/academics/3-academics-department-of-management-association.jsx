import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import ImageCarousel from '../../components/ImageCarousel';
import { UsersIcon, CalendarIcon } from '../../components/icons';
import ccma from '../../assets/images/3-academics-department-of-management-association/ccma.jpg';
import finquest1 from '../../assets/images/gallery/finquest-25/1.jpg';
import finquest2 from '../../assets/images/gallery/finquest-25/2.jpg';
import sparkBrand1 from '../../assets/images/gallery/spark-the-brand/1.jpg';
import sparkBrand2 from '../../assets/images/gallery/spark-the-brand/2.jpg';
import heritageWalk1 from '../../assets/images/gallery/heritage-walk/1.jpg';
import heritageWalk2 from '../../assets/images/gallery/heritage-walk/2.jpg';
import bookReview1 from '../../assets/images/gallery/book-review-competition/1.jpg';
import bookReview2 from '../../assets/images/gallery/book-review-competition/2.jpg';
import aiLogicHunt1 from '../../assets/images/gallery/ai-logic-hunt-2026/1.jpg';
import aiLogicHunt2 from '../../assets/images/gallery/ai-logic-hunt-2026/2.jpg';

const FINQUEST_IMAGES = [finquest1, finquest2];
const SPARK_BRAND_IMAGES = [sparkBrand1, sparkBrand2];
const HERITAGE_WALK_IMAGES = [heritageWalk1, heritageWalk2];
const BOOK_REVIEW_IMAGES = [bookReview1, bookReview2];
const AI_LOGIC_HUNT_IMAGES = [aiLogicHunt1, aiLogicHunt2];

const EVENTS = [
  {
    name: "FINQUEST '25",
    date: '10 October 2025',
    images: FINQUEST_IMAGES,
    description: 'The Department of Management (CCMA), Christ College–Pune, organized FINQUEST ’25 on 10 October 2025 as part of Financial Literacy Week. The competition aimed to enhance students’ financial literacy, budgeting, investment knowledge, money management, and financial decision-making skills. Students from SY BBA and TY BBA participated enthusiastically, applying their financial knowledge and analytical thinking. The event successfully promoted financial awareness and encouraged informed financial decision-making among students.',
  },
  {
    name: 'Spark the Brand',
    date: '15–16 October 2025',
    images: SPARK_BRAND_IMAGES,
    description: 'The Marketing Club of the Department of Management, Christ College–Pune, organized “Spark the Brand – Where Ideas Light Up the Market” on 15 and 16 October 2025. The two-day event encouraged students to develop creative brand ideas, design logos and taglines, create promotional campaigns, and present brand pitches. Through interactive challenges and faculty feedback, students gained practical knowledge of branding, market positioning, consumer engagement, and promotional strategies. The activity enhanced their creativity, strategic thinking, communication, presentation, and teamwork skills.',
  },
  {
    name: 'Heritage Walk — BotaniXpedition',
    date: '15 November 2025',
    images: HERITAGE_WALK_IMAGES,
    description: 'The Department of Management, in collaboration with the Heritage Club of Christ College–Pune, organized “BotaniXpedition – A Heritage Garden Immersion” on 15 November 2025 at Ganeshkhind Botanical Garden, Pune. The experiential learning activity helped students explore biodiversity, environmental conservation, and the ecological and historical significance of botanical gardens. Through observation and reflection, students enhanced their analytical skills, developed environmental responsibility, and gained a deeper appreciation for Pune’s natural heritage and sustainable practices.',
  },
  {
    name: 'Book Review Competition',
    date: '10 January 2026',
    images: BOOK_REVIEW_IMAGES,
    description: 'The Department of Management (CCMA), Christ College–Pune, organized a Book Review Competition on 10 January 2026 for first-year BBA, BBA-IB, and BBA-CA students to encourage reading and critical thinking. Six shortlisted participants presented their book reviews in a final round, with each presentation followed by a question-and-answer session. Aayan Shaikh secured first place, while Daval Shah won second place. The competition enhanced students’ analytical thinking, communication, presentation, originality, and ability to connect literary concepts with real-world perspectives.',
  },
  {
    name: 'AI Logic Hunt 2026',
    date: '18 February 2026',
    images: AI_LOGIC_HUNT_IMAGES,
    description: 'The Department of Management, through TY BBA (Computer Applications) students, organized AI Logic Hunt 2026 on 18 February 2026. The exhibition featured five interactive stalls demonstrating AI concepts such as constraint satisfaction, state-space search, recursion, optimization, and pathfinding through puzzles like Tower of Hanoi and Maze Runner. The event recorded 384 participant engagements from BBA, BCA, and B.Com programmes, promoting logical reasoning, algorithmic thinking, and practical understanding of AI applications.',
  },
];

export default function DepartmentOfManagementAssociationPage() {
  return (
    <>
      <Seo
        title="Association (CCMA) — Department of Management"
        description="The Christ College Management Association (CCMA) at the Department of Management, Christ College Pune — FINQUEST '25, Spark the Brand, Heritage Walk (BotaniXpedition), Book Review Competition, and AI Logic Hunt 2026."
      />
      <PageHeader
        title="Association"
        breadcrumbs={[
          { label: 'Department of Management', path: '/academics/department-of-management/department-page' },
          { label: 'Association' },
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <img src={ccma} alt="CCMA — Christ College Management Association" className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm" />

          <div>
            <h2 className="flex items-center gap-2.5">
              <UsersIcon className="h-6 w-6 text-cc-primary shrink-0" />
              CCMA — Christ College Management Association
            </h2>
            <p className="mt-4 text-cc-text-body">
              Annually, the Christ College Management Association (CCMA) in Pune is dedicated to
              empowering students to shape their destinies. Through an array of competitions, CCMA
              enriches knowledge, hones competencies, instills life skills, and fosters values, all
              in accordance with its vision of &lsquo;Inspire, Connect, and Innovate.&rsquo;
            </p>
            <p className="mt-4 text-cc-text-body">
              Every Thursday and Saturday, the association orchestrates a variety of events
              centered around Entrepreneurship Development, Public Relations, Human Resources,
              Finance, Marketing, Quiz, and Best Managerial skills. Preliminary rounds are
              conducted at the class level, with the most promising teams advancing to the
              exhilarating semi-finals and finals, captivating a vast audience on stage.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-base font-bold text-cc-text-heading">CCMA Events</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm">
                {item.images ? (
                  <ImageCarousel images={item.images} alt={item.name} />
                ) : (
                  item.image && <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
                )}
                <div className="p-5">
                  <h4 className="text-base break-words">{item.name}</h4>
                  {item.date && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wide text-cc-primary">
                      <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                      {item.date}
                    </p>
                  )}
                  {item.description && (
                    <p className="mt-2 text-sm text-cc-text-muted-light">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
