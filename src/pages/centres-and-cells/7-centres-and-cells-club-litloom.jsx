import ClubPage from '../../components/ClubPage';
import litloom1 from '../../assets/images/gallery/club-litloom/1.jpg';

export default function LitLoomClub() {
  return (
    <ClubPage
      name="LitLoom"
      seoDescription="LitLoom, the Readers' Circle at Christ College, Pune — celebrating the joy of reading through book discussions, reading challenges and literary explorations."
      tagline="The Readers' Circle"
      about="LitLoom celebrates the joy of reading and fosters a vibrant literary community among students. Through book discussions, reading challenges and literary explorations, the club encourages critical appreciation, imagination and a lifelong love for reading."
      vision="To cultivate a vibrant reading culture that inspires imagination, knowledge and literary appreciation."
      mission="To encourage reading habits, explore diverse literary works and promote meaningful literary discussions."
      images={[litloom1]}
    />
  );
}
