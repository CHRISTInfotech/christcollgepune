import ClubPage from '../../components/ClubPage';
import shutterbugs1 from '../../assets/images/gallery/club-shutterbugs/1.jpg';
import shutterbugs2 from '../../assets/images/gallery/club-shutterbugs/2.jpg';
import shutterbugs3 from '../../assets/images/gallery/club-shutterbugs/3.jpg';
import shutterbugs4 from '../../assets/images/gallery/club-shutterbugs/4.jpg';
import shutterbugs5 from '../../assets/images/gallery/club-shutterbugs/5.jpg';
import shutterbugs6 from '../../assets/images/gallery/club-shutterbugs/6.jpg';

const SHUTTERBUGS_IMAGES = [shutterbugs1, shutterbugs2, shutterbugs3, shutterbugs4, shutterbugs5, shutterbugs6];

export default function ShutterbugsClub() {
  return (
    <ClubPage
      name="Shutterbugs"
      seoDescription="Shutterbugs, the Photography Club at Christ College, Pune — exploring photography and visual storytelling through photo walks, competitions and creative projects."
      tagline="The Photography Club"
      about="Shutterbugs provides a creative platform for students to explore the art of photography and visual storytelling. Through photography assignments, photo walks, competitions and creative projects, the club encourages students to capture perspectives, document experiences and express stories through images."
      vision="To nurture creative visual storytellers who capture perspectives, emotions and experiences through photography."
      mission="To develop students' photographic skills, encourage artistic experimentation and promote visual storytelling through practical experiences and collaborative activities."
      images={SHUTTERBUGS_IMAGES}
      events={[
        {
          title: 'Online Photography Contest — World Environment Day',
          description: 'Shutterbugs, in collaboration with the Centre for Environment and Climate Change, organised an online photography contest on the occasion of World Environment Day, encouraging students to capture the beauty of nature and highlight the importance of environmental conservation.',
        },
      ]}
    />
  );
}
