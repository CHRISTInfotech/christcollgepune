import ClubPage from '../../components/ClubPage';
import inkspire1 from '../../assets/images/gallery/club-inkspire/1.jpg';

export default function InkspireClub() {
  return (
    <ClubPage
      name="Inkspire"
      seoDescription="Inkspire, the Writer's Forum at Christ College, Pune — a creative space for students to express their thoughts and imagination through creative writing, storytelling and poetry."
      tagline="The Writer's Forum"
      about="Inkspire provides a creative space for students to express their thoughts, ideas and imagination through the written word. Through creative writing, storytelling, poetry and literary activities, the club nurtures emerging writers and encourages original expression."
      vision="To inspire creative expression and nurture a community of imaginative and thoughtful writers."
      mission="To provide opportunities for students to develop their writing skills through creative writing, storytelling and literary expression."
      images={[inkspire1]}
    />
  );
}
