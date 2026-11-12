import TabbedContentPage from '../../components/TabbedContentPage';
import ImageCarousel from '../../components/ImageCarousel';
import CentreVisionMission from '../../components/CentreVisionMission';
import lyrica1 from '../../assets/images/gallery/club-lyrica/1.jpg';
import litloom1 from '../../assets/images/gallery/club-litloom/1.jpg';
import mathverse1 from '../../assets/images/gallery/club-mathverse/1.jpg';
import mathverse2 from '../../assets/images/gallery/club-mathverse/2.jpg';
import pixelora1 from '../../assets/images/gallery/club-pixelora/1.jpg';
import quiztoria1 from '../../assets/images/gallery/club-quiztoria/1.jpg';
import rhetorix1 from '../../assets/images/gallery/club-rhetorix/1.jpg';
import shutterbugs1 from '../../assets/images/gallery/club-shutterbugs/1.jpg';
import shutterbugs2 from '../../assets/images/gallery/club-shutterbugs/2.jpg';
import shutterbugs3 from '../../assets/images/gallery/club-shutterbugs/3.jpg';
import shutterbugs4 from '../../assets/images/gallery/club-shutterbugs/4.jpg';
import shutterbugs5 from '../../assets/images/gallery/club-shutterbugs/5.jpg';
import shutterbugs6 from '../../assets/images/gallery/club-shutterbugs/6.jpg';
import finsmart1 from '../../assets/images/gallery/club-finsmart/1.jpg';

const MATHVERSE_IMAGES = [mathverse1, mathverse2];
const SHUTTERBUGS_IMAGES = [shutterbugs1, shutterbugs2, shutterbugs3, shutterbugs4, shutterbugs5, shutterbugs6];

function ClubTab({ tagline, about, vision, mission, images, eventTitle, eventDescription }) {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl">
        {tagline && (
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wide text-cc-primary">
            {tagline}
          </span>
        )}
        <p className="text-cc-text-body">{about}</p>
      </div>

      {(vision || mission) && <CentreVisionMission vision={vision} mission={mission} />}

      {images && (
        <div className="max-w-2xl overflow-hidden rounded-cc-lg border border-cc-gray-200 shadow-cc-sm">
          <ImageCarousel images={images} alt={eventTitle || 'Club photo'} className="h-64 w-full" />
        </div>
      )}

      {eventTitle && (
        <div className="max-w-3xl rounded-cc-md border border-cc-gray-200 bg-cc-bg-surface p-5 shadow-sm">
          <h3 className="text-cc-primary uppercase tracking-wide text-sm font-semibold">{eventTitle}</h3>
          <p className="mt-2 text-sm text-cc-text-body">{eventDescription}</p>
        </div>
      )}
    </div>
  );
}

function LyricaTab() {
  return (
    <ClubTab
      tagline="The Poetry Club"
      about="Lyrica celebrates poetry as a powerful medium of creativity, emotion and self-expression. The club encourages students to explore different poetic forms, experiment with language and share their voices through poetry recitations, creative writing and literary engagements."
      vision="To celebrate the power of poetry as a medium of creativity, imagination and self-expression."
      mission="To encourage poetic expression, nurture emerging poets and promote appreciation of diverse poetic voices and traditions."
      images={[lyrica1]}
    />
  );
}

function InkspireTab() {
  return (
    <ClubTab
      tagline="The Writer's Forum"
      about="Inkspire provides a creative space for students to express their thoughts, ideas and imagination through the written word. Through creative writing, storytelling, poetry and literary activities, the club nurtures emerging writers and encourages original expression."
      vision="To inspire creative expression and nurture a community of imaginative and thoughtful writers."
      mission="To provide opportunities for students to develop their writing skills through creative writing, storytelling and literary expression."
    />
  );
}

function LitLoomTab() {
  return (
    <ClubTab
      tagline="The Readers' Circle"
      about="LitLoom celebrates the joy of reading and fosters a vibrant literary community among students. Through book discussions, reading challenges and literary explorations, the club encourages critical appreciation, imagination and a lifelong love for reading."
      vision="To cultivate a vibrant reading culture that inspires imagination, knowledge and literary appreciation."
      mission="To encourage reading habits, explore diverse literary works and promote meaningful literary discussions."
      images={[litloom1]}
    />
  );
}

function MathVerseTab() {
  return (
    <ClubTab
      tagline="The Math Club"
      about="MathVerse aims to make mathematics engaging, accessible and enjoyable through mathematical games, interactive activities, film screenings, discussions, and collaborative experiences. By connecting mathematics with history, stories, and real-world applications, the club seeks to help students discover the beauty and relevance of mathematics in everyday life."
      vision="To inspire curiosity and creativity by making mathematics engaging, relatable, and meaningful beyond the classroom."
      mission="To promote mathematical thinking, problem-solving, and collaboration through interactive activities and innovative learning experiences."
      images={MATHVERSE_IMAGES}
    />
  );
}

function PixeloraTab() {
  return (
    <ClubTab
      tagline="The Designer's Club"
      about="Pixelora provides a creative platform for students to explore visual communication, graphic design and digital creativity. Through poster-making, digital art and innovative design projects, the club encourages artistic expression, visual storytelling and creative collaboration."
      vision="To foster creativity and visual imagination through innovative design and digital expression."
      mission="To develop students' artistic and digital design skills through creative projects, visual storytelling and collaborative activities."
      images={[pixelora1]}
    />
  );
}

function QuiztoriaTab() {
  return (
    <ClubTab
      tagline="The Quiz Club"
      about="Quiztoria aims to make learning engaging, interactive and intellectually stimulating through quizzes and knowledge-based activities. The club encourages curiosity, general awareness and analytical thinking while providing opportunities for students to test their knowledge and participate in healthy competition."
      vision="To create curious, knowledgeable and intellectually engaged learners with a spirit of discovery."
      mission="To promote knowledge, critical thinking and healthy competition through quizzes and interactive learning activities."
      images={[quiztoria1]}
    />
  );
}

function RhetorixTab() {
  return (
    <ClubTab
      tagline="The Debate Club — Department of Arts"
      about="Rhetorix provides a dynamic platform for students to express ideas, engage in intellectual discussions and develop critical thinking skills. Through debates, discussions and interactive activities, the club aims to nurture confident speakers, effective communicators and thoughtful individuals."
      vision="To nurture articulate, confident and critical thinkers who engage in meaningful dialogue."
      mission="To develop debating skills, logical reasoning and persuasive communication through constructive discussions and debates."
      images={[rhetorix1]}
      eventTitle="Debate Competition"
      eventDescription="Rhetorix's flagship event, bringing together students for spirited debate on a wide range of topics."
    />
  );
}

function ShutterbugsTab() {
  return (
    <ClubTab
      tagline="The Photography Club"
      about="Shutterbugs provides a creative platform for students to explore the art of photography and visual storytelling. Through photography assignments, photo walks, competitions and creative projects, the club encourages students to capture perspectives, document experiences and express stories through images."
      vision="To nurture creative visual storytellers who capture perspectives, emotions and experiences through photography."
      mission="To develop students' photographic skills, encourage artistic experimentation and promote visual storytelling through practical experiences and collaborative activities."
      images={SHUTTERBUGS_IMAGES}
      eventTitle="Online Photography Contest — World Environment Day"
      eventDescription="Shutterbugs, in collaboration with the Centre for Environment and Climate Change, organised an online photography contest on the occasion of World Environment Day, encouraging students to capture the beauty of nature and highlight the importance of environmental conservation."
    />
  );
}

function TheatreTab() {
  return (
    <ClubTab
      about="The Theatre Club provides a creative platform for students to explore the art of acting, drama, and stage performance. It encourages students to express themselves through storytelling, role-play, improvisation, and theatrical productions. The club nurtures creativity, confidence, communication, and collaboration while bringing together students who share a passion for the performing arts."
      vision="To nurture creative expression and artistic excellence by inspiring students to explore the transformative power of theatre."
      mission="To develop students' acting, communication, and collaborative skills through engaging theatrical activities and performances."
    />
  );
}

function HeritageTab() {
  return (
    <ClubTab
      tagline="Department of Management — Celebrating Our Past, Preserving Our Legacy, Inspiring Our Future"
      about="The Heritage Club of the Department of Management serves as a vibrant platform for students to discover the stories, art, architecture and traditions that shape our cultural identity. By bringing history to life through engaging experiences and creative explorations, the club seeks to build meaningful connections between our roots, our present and the generations yet to come."
      vision="To nurture a profound appreciation of our rich cultural heritage, historical legacy and traditions, inspiring students to value, celebrate and preserve our heritage for generations to come."
      mission="To provide students with meaningful opportunities to explore, experience and connect with our cultural past through heritage walks, historical visits and creative activities, fostering cultural awareness and a lasting commitment to heritage conservation."
    />
  );
}

function FinSmartTab() {
  return (
    <ClubTab
      tagline="Department of Commerce — Where Strategy and Curiosity Meet Financial Clarity"
      about="FinSmart Club introduces students to the fundamentals of trading, financial markets, financial independence and current affairs, helping them transform curiosity into financial confidence through interactive sessions and real-world market insights."
      images={[finsmart1]}
      eventTitle="Session on Trading"
      eventDescription="FinSmart Club organised an informative session on trading for BCom students, conducted by Mrs Sandeep Kaur. The session introduced students to the basics of trading, market trends, and technical analysis — chart reading, bullish and bearish markets, and trading strategies used in financial markets."
    />
  );
}

export default function ClubsAndSocieties({ initialTab = 'lyrica' }) {
  return (
    <TabbedContentPage
      pageTitle="Clubs & Societies"
      breadcrumbLabel="Clubs & Societies"
      breadcrumbSection="Centres & Cells"
      description="Christ College, Pune's student clubs and societies — Lyrica, Inkspire, LitLoom, MathVerse, Pixelora, Quiztoria, Rhetorix, Shutterbugs, Theatre Club, Heritage Club and FinSmart Club — platforms for creative, literary, artistic and intellectual growth."
      initialTab={initialTab}
      tabs={[
        { key: 'lyrica', label: 'Lyrica', render: () => <LyricaTab /> },
        { key: 'inkspire', label: 'Inkspire', render: () => <InkspireTab /> },
        { key: 'litloom', label: 'LitLoom', render: () => <LitLoomTab /> },
        { key: 'mathverse', label: 'MathVerse', render: () => <MathVerseTab /> },
        { key: 'pixelora', label: 'Pixelora', render: () => <PixeloraTab /> },
        { key: 'quiztoria', label: 'Quiztoria', render: () => <QuiztoriaTab /> },
        { key: 'rhetorix', label: 'Rhetorix', render: () => <RhetorixTab /> },
        { key: 'shutterbugs', label: 'Shutterbugs', render: () => <ShutterbugsTab /> },
        { key: 'theatre', label: 'Theatre Club', render: () => <TheatreTab /> },
        { key: 'heritage', label: 'Heritage Club', render: () => <HeritageTab /> },
        { key: 'finsmart', label: 'FinSmart Club', render: () => <FinSmartTab /> },
      ]}
    />
  );
}
