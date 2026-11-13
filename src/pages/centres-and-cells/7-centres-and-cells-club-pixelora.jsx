import ClubPage from '../../components/ClubPage';
import pixelora1 from '../../assets/images/gallery/club-pixelora/1.jpg';

export default function PixeloraClub() {
  return (
    <ClubPage
      name="Pixelora"
      seoDescription="Pixelora, the Designer's Club at Christ College, Pune — a creative platform for visual communication, graphic design and digital creativity."
      tagline="The Designer's Club"
      about="Pixelora provides a creative platform for students to explore visual communication, graphic design and digital creativity. Through poster-making, digital art and innovative design projects, the club encourages artistic expression, visual storytelling and creative collaboration."
      vision="To foster creativity and visual imagination through innovative design and digital expression."
      mission="To develop students' artistic and digital design skills through creative projects, visual storytelling and collaborative activities."
      images={[pixelora1]}
    />
  );
}
