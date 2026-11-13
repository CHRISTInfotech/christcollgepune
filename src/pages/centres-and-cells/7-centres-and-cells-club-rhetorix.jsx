import ClubPage from '../../components/ClubPage';
import rhetorix1 from '../../assets/images/gallery/club-rhetorix/1.jpg';

export default function RhetorixClub() {
  return (
    <ClubPage
      name="Rhetorix"
      seoDescription="Rhetorix, the Debate Club of the Department of Arts at Christ College, Pune — nurturing confident speakers and effective communicators through debates and discussions."
      tagline="The Debate Club — Department of Arts"
      about="Rhetorix provides a dynamic platform for students to express ideas, engage in intellectual discussions and develop critical thinking skills. Through debates, discussions and interactive activities, the club aims to nurture confident speakers, effective communicators and thoughtful individuals."
      vision="To nurture articulate, confident and critical thinkers who engage in meaningful dialogue."
      mission="To develop debating skills, logical reasoning and persuasive communication through constructive discussions and debates."
      images={[rhetorix1]}
      events={[
        {
          title: 'Debate Competition',
          description: "Rhetorix's flagship event, bringing together students for spirited debate on a wide range of topics.",
        },
      ]}
    />
  );
}
