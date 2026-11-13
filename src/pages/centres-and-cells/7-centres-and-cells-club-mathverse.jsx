import ClubPage from '../../components/ClubPage';
import mathverse1 from '../../assets/images/gallery/club-mathverse/1.jpg';
import mathverse2 from '../../assets/images/gallery/club-mathverse/2.jpg';

const MATHVERSE_IMAGES = [mathverse1, mathverse2];

export default function MathVerseClub() {
  return (
    <ClubPage
      name="MathVerse"
      seoDescription="MathVerse, the Math Club at Christ College, Pune — making mathematics engaging and accessible through games, interactive activities and real-world applications."
      tagline="The Math Club"
      about="MathVerse aims to make mathematics engaging, accessible and enjoyable through mathematical games, interactive activities, film screenings, discussions, and collaborative experiences. By connecting mathematics with history, stories, and real-world applications, the club seeks to help students discover the beauty and relevance of mathematics in everyday life."
      vision="To inspire curiosity and creativity by making mathematics engaging, relatable, and meaningful beyond the classroom."
      mission="To promote mathematical thinking, problem-solving, and collaboration through interactive activities and innovative learning experiences."
      images={MATHVERSE_IMAGES}
    />
  );
}
