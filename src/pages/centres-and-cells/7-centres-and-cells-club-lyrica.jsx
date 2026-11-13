import ClubPage from '../../components/ClubPage';
import lyrica1 from '../../assets/images/gallery/club-lyrica/1.jpg';

export default function LyricaClub() {
  return (
    <ClubPage
      name="Lyrica"
      seoDescription="Lyrica, the Poetry Club at Christ College, Pune — celebrating poetry as a medium of creativity, emotion and self-expression through recitations, creative writing and literary engagements."
      tagline="The Poetry Club"
      about="Lyrica celebrates poetry as a powerful medium of creativity, emotion and self-expression. The club encourages students to explore different poetic forms, experiment with language and share their voices through poetry recitations, creative writing and literary engagements."
      vision="To celebrate the power of poetry as a medium of creativity, imagination and self-expression."
      mission="To encourage poetic expression, nurture emerging poets and promote appreciation of diverse poetic voices and traditions."
      images={[lyrica1]}
    />
  );
}
