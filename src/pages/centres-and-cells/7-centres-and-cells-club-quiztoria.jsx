import ClubPage from '../../components/ClubPage';
import quiztoria1 from '../../assets/images/gallery/club-quiztoria/1.jpg';

export default function QuiztoriaClub() {
  return (
    <ClubPage
      name="Quiztoria"
      seoDescription="Quiztoria, the Quiz Club at Christ College, Pune — making learning engaging and intellectually stimulating through quizzes and knowledge-based activities."
      tagline="The Quiz Club"
      about="Quiztoria aims to make learning engaging, interactive and intellectually stimulating through quizzes and knowledge-based activities. The club encourages curiosity, general awareness and analytical thinking while providing opportunities for students to test their knowledge and participate in healthy competition."
      vision="To create curious, knowledgeable and intellectually engaged learners with a spirit of discovery."
      mission="To promote knowledge, critical thinking and healthy competition through quizzes and interactive learning activities."
      images={[quiztoria1]}
    />
  );
}
