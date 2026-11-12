import TabbedContentPage from '../../components/TabbedContentPage';
import ImageCarousel from '../../components/ImageCarousel';
import { UsersIcon, CompassIcon, GlobeIcon, EnvelopeIcon, CalendarIcon } from '../../components/icons';
import nssBanner from '../../assets/studentlife/NSS/NSS.png';
import nssCampGroup from '../../assets/studentlife/NSS/nss-camp-group.jpg';
import yogaDay1 from '../../assets/images/gallery/nss-international-yoga-day/1.jpg';
import yogaDay2 from '../../assets/images/gallery/nss-international-yoga-day/2.jpg';
import yogaDay3 from '../../assets/images/gallery/nss-international-yoga-day/3.jpg';
import yogaDay4 from '../../assets/images/gallery/nss-international-yoga-day/4.jpg';
import yogaDay5 from '../../assets/images/gallery/nss-international-yoga-day/5.jpg';
import rakshaBandhan1 from '../../assets/images/gallery/nss-raksha-bandhan/1.jpg';
import rakshaBandhan2 from '../../assets/images/gallery/nss-raksha-bandhan/2.jpg';
import rakshaBandhan3 from '../../assets/images/gallery/nss-raksha-bandhan/3.jpg';
import rakshaBandhan4 from '../../assets/images/gallery/nss-raksha-bandhan/4.jpg';
import cleanliness1 from '../../assets/images/gallery/nss-cleanliness-drive/1.jpg';
import cleanliness2 from '../../assets/images/gallery/nss-cleanliness-drive/2.jpg';
import cleanliness3 from '../../assets/images/gallery/nss-cleanliness-drive/3.jpg';
import cleanliness4 from '../../assets/images/gallery/nss-cleanliness-drive/4.jpg';
import cleanliness5 from '../../assets/images/gallery/nss-cleanliness-drive/5.jpg';
import nssDay1 from '../../assets/images/gallery/nss-day/1.jpg';
import nssDay2 from '../../assets/images/gallery/nss-day/2.jpg';
import nssDay3 from '../../assets/images/gallery/nss-day/3.jpg';
import nssDay4 from '../../assets/images/gallery/nss-day/4.jpg';
import agakhan1 from '../../assets/images/gallery/nss-aga-khan-palace-visit/1.jpg';
import agakhan2 from '../../assets/images/gallery/nss-aga-khan-palace-visit/2.jpg';
import bloodAwareness1 from '../../assets/images/gallery/nss-blood-donation-awareness-session/1.jpg';
import bloodAwareness2 from '../../assets/images/gallery/nss-blood-donation-awareness-session/2.jpg';
import bloodAwareness3 from '../../assets/images/gallery/nss-blood-donation-awareness-session/3.jpg';
import bloodAwareness4 from '../../assets/images/gallery/nss-blood-donation-awareness-session/4.jpg';
import bloodCamp1 from '../../assets/images/gallery/nss-blood-donation-camp/1.jpg';
import bloodCamp2 from '../../assets/images/gallery/nss-blood-donation-camp/2.jpg';
import bloodCamp3 from '../../assets/images/gallery/nss-blood-donation-camp/3.jpg';
import bloodCamp4 from '../../assets/images/gallery/nss-blood-donation-camp/4.jpg';

const YOGA_DAY_IMAGES = [yogaDay1, yogaDay2, yogaDay3, yogaDay4, yogaDay5];
const RAKSHA_BANDHAN_IMAGES = [rakshaBandhan1, rakshaBandhan2, rakshaBandhan3, rakshaBandhan4];
const CLEANLINESS_IMAGES = [cleanliness1, cleanliness2, cleanliness3, cleanliness4, cleanliness5];
const NSS_DAY_IMAGES = [nssDay1, nssDay2, nssDay3, nssDay4];
const AGAKHAN_IMAGES = [agakhan1, agakhan2];
const BLOOD_AWARENESS_IMAGES = [bloodAwareness1, bloodAwareness2, bloodAwareness3, bloodAwareness4];
const BLOOD_CAMP_IMAGES = [bloodCamp1, bloodCamp2, bloodCamp3, bloodCamp4];

const RECENT_ACTIVITIES_2026 = [
  {
    name: 'International Yoga Day for Staff',
    images: YOGA_DAY_IMAGES,
    description: 'Our NSS unit observed International Yoga Day with a special session for the college staff, highlighting the importance of yoga in maintaining physical fitness, mental peace and a balanced lifestyle through simple yoga practices and breathing exercises.',
  },
  {
    name: 'Cyber Stalking Workshop (SPPU)',
    description: 'An awareness workshop under SPPU educating students about recognising unwanted online attention, harassment and misuse of digital platforms, and promoting safe internet practices and responsible digital behaviour.',
  },
  {
    name: 'Nasha Mukta Yuva Campaign (SPPU)',
    description: 'A campaign to spread awareness among young people about the harmful effects of addiction, encouraging youth to focus on education, sports, personal development and positive activities towards a drug-free society.',
  },
  {
    name: 'Drug-Free Youth Initiative (Yashada)',
    description: 'Held at the Raj Bhavan Complex, this initiative created awareness about substance abuse among young people, promoting positive habits and informed decision-making for a drug-free society.',
  },
  {
    name: 'Tiranga Rally (Fergusson College)',
    description: 'NSS volunteers joined a Tiranga Rally at Fergusson College to promote patriotism, national unity and respect for the Indian national flag.',
  },
  {
    name: 'Raksha Bandhan (Paraplegic Rehabilitation Centre)',
    images: RAKSHA_BANDHAN_IMAGES,
    description: 'Our NSS team celebrated Raksha Bandhan with members of the Paraplegic Rehabilitation Centre, sharing care, respect and a feeling of togetherness that promoted empathy and community bonding.',
  },
  {
    name: 'Plantation Drive',
    description: 'Volunteers planted saplings and spread awareness about the importance of trees for clean air, biodiversity and a healthy environment, strengthening the message of environmental conservation.',
  },
  {
    name: 'Republic Day Seminar (Garware College)',
    description: 'NSS volunteers attended a seminar reflecting on the values of the Indian Constitution — citizenship, unity, equality and national responsibility — and the role of young people in strengthening democracy.',
  },
  {
    name: 'Cleanliness Drive',
    images: CLEANLINESS_IMAGES,
    description: 'Volunteers participated in cleanliness activities promoting proper waste disposal and everyday hygiene habits, reinforcing that maintaining a clean environment is a shared responsibility.',
  },
  {
    name: 'NSS Day',
    images: NSS_DAY_IMAGES,
    description: 'The NSS unit celebrated NSS Day to recognise the spirit and contribution of volunteers towards society, highlighting selfless service, discipline, leadership and community participation.',
  },
  {
    name: 'Visit to Aga Khan Palace',
    images: AGAKHAN_IMAGES,
    description: 'An educational and heritage-learning visit to a site connected with India’s freedom movement, helping volunteers connect classroom learning with the values of courage, unity and service to the nation.',
  },
  {
    name: 'Walk for Health — Mental Health Rally',
    description: 'NSS volunteers participated in a Mental Health Rally to spread awareness about emotional well-being, healthy habits and seeking support without stigma.',
  },
  {
    name: 'Blood Donation Awareness Session',
    images: BLOOD_AWARENESS_IMAGES,
    description: 'A session educating participants about the importance of voluntary blood donation, the donation process, and safe, responsible donation through authorised medical teams — held ahead of the Blood Donation Camp.',
  },
  {
    name: 'Blood Donation Camp',
    images: BLOOD_CAMP_IMAGES,
    description: 'The NSS unit organised a Blood Donation Camp encouraging eligible volunteers and community members to contribute through voluntary donation, supporting the need for safe blood supplies in healthcare.',
  },
  {
    name: 'NSS SPPU Camp',
    description: 'NSS volunteers participated in the NSS SPPU Camp, engaging with the objectives and values of the National Service Scheme and building connections with participants from other colleges.',
  },
];

const PILLARS = [
  {
    icon: UsersIcon,
    title: 'Campus & Community Linkage',
    description:
      'An association of students working for campus and community linkage, involving 100 sanctioned volunteers in voluntary community development programmes.',
  },
  {
    icon: CompassIcon,
    title: 'Civic Responsibility',
    description:
      'Develops a sense of social and civic responsibility, leadership qualities and democratic values through Regular Activities and residential Camps.',
  },
  {
    icon: GlobeIcon,
    title: 'National Integration',
    description:
      'Practises national integration and social harmony, guided by the motto “Not Me But You”.',
  },
];

const AIMS = [
  'To understand the community in which the NSS volunteers work and to understand themselves in relation to their community.',
  'To identify the needs and problems of the community and involve themselves in problem-solving exercise.',
  'To develop among themselves a sense of social and civic responsibility.',
  'To utilize their knowledge in finding practical solutions to individual and community problems.',
  'To gain skills in mobilizing community participation.',
  'To acquire leadership qualities and democratic values.',
  'To develop capacity to meet emergencies and natural disasters.',
  'To practice national integration and social harmony.',
];

const ACTIVITIES = [
  {
    name: 'Awareness Campaign against Child Begging',
    date: '30 April 2022',
    description:
      'An awareness campaign was conducted in Pune city to raise awareness about the issue of child begging, organized in collaboration with Sarva Seva Sangh NGO at various traffic signals in the city. Volunteers raised placards to spread awareness about child rights and the issue of child beggary, and also provided counselling to the children involved in begging, motivating them to attend school and complete their education.',
  },
  {
    name: 'E-waste Collection Drive',
    date: '23–28 May 2022',
    description:
      'An E-waste collection drive was conducted on the college campus. Students and staff were encouraged to bring their electronic waste and dispose of it in the E-waste dustbin. A total of 318.9 Kgs of electronic waste was collected and donated to Threco Recycling LLP, which specializes in the safe and efficient disposal of electronic waste.',
  },
  {
    name: 'Anti-Tobacco Day Pledge',
    date: '31 May 2022',
    description:
      'Volunteers raised awareness regarding the harmful effects of tobacco through posters and administered a pledge on “Say no to tobacco”.',
  },
  {
    name: 'Environment Awareness Rally',
    date: '6 June 2022',
    description: 'Together for a sustainable planet, students led the way in an environment awareness rally.',
  },
  {
    name: 'International Yoga Day',
    date: '21 June 2022',
    description:
      'The NSS unit celebrated International Yoga Day in the college lobby, where students came together and performed different Yoga Asanas. The session ended with meditation to reduce stress.',
  },
  {
    name: 'Swachh Vari Cleanliness Drive',
    date: '24 June 2022',
    description:
      'A cleanliness drive was organized by the NSS unit in Sainikwadi. Volunteers cleaned the area and collected garbage in eco-friendly disposable bags after the Varkaris had left for their further pilgrimage.',
  },
  {
    name: 'Azaadi ka Amrit Mahotsav',
    date: '13–15 August 2022',
    description:
      'Commemorating the 75th anniversary of India’s Independence, the national flag was raised at Christ College Pune to mark the Swaraj Mahotsav. As part of the "Har Ghar Tiranga Campaign", NSS volunteers contributed to a Guinness World Record for the largest online photo album of people holding a national flag — 152,559 photos, achieved by Savitribai Phule Pune University.',
  },
  {
    name: 'Blood Donation Camp',
    date: '17 July 2022',
    description:
      'The camp was organized on the college campus in collaboration with Akhil Bhartiya Terapanth Yuvak Parishad and Y C M Hospital, Pune. Staff and students came forward for this noble cause, and 110 bottles of blood were collected.',
  },
  {
    name: 'Gandhi Jayanti',
    date: '2 October 2022',
    description:
      'A visit to Aga Khan Palace was organized by the NSS unit. Students explored the palace gardens and museum, learning about India’s history and the sacrifices made by Indian leaders to gain freedom from British colonial rule.',
  },
  {
    name: 'Joy of Giving Drive',
    date: '14–20 October 2022',
    description:
      'NSS volunteers spread the Joy of Giving — collecting cookies, smiley balls, and more for the Balmela organized by Sarva Seva Sangh NGO.',
  },
  {
    name: 'NSS Orientation',
    date: '20 October 2022',
    description:
      'An orientation workshop was held on campus to make new volunteers aware of the activities and programs organized under the National Service Scheme.',
  },
  {
    name: 'Bal Mela',
    date: '22 October 2022',
    description:
      'A Children’s Fair was organized in collaboration with Sarva Seva Sangh in the SVD campus, Wadgaonsheri. NSS volunteers played an active role in conducting fun games for underprivileged children, promoting community engagement, social welfare, and inclusivity.',
  },
  {
    name: 'Unity Day',
    date: '31 October 2022',
    description:
      'To mark the birth anniversary of Sardar Vallabhbhai Patel, volunteers administered a Unity Pledge and conducted a game to demonstrate togetherness. Staff and students joined hands to form a ‘Unity Human Chain’, promoting unity, harmony, and togetherness among people.',
  },
  {
    name: 'Social & Environment Awareness Exhibition — ‘Aspire’',
    date: '7 November 2022',
    description:
      'An exhibition titled ‘Aspire’ was held on the open stage, featuring handmade posters created by students on topics such as human values, gender equity, pollution, misuse of mobile phones, and drug abuse, aiming to raise awareness and encourage action on these issues.',
  },
  {
    name: 'Project Garjana — A roar of empowerment',
    date: '10 November 2022',
    description:
      'An initiative by the Women’s Cell and NSS Unit aiming to empower girl students by boosting self-esteem and confidence through activities and training sessions, including self-defense techniques. Garjana, meaning ‘a roar’, symbolizes the strength and courage the project seeks to instill, promoting gender equality and self-sufficiency.',
  },
  {
    name: 'Children’s Day',
    date: '14 November 2022',
    description:
      'The NSS unit spent time with homeless children at Chandan Nagar, teaching them math, spelling, and other skills, and encouraging good hygiene and school attendance.',
  },
  {
    name: 'Peer Guide Workshop',
    date: '19 & 29 November 2022',
    description:
      'NSS volunteers attended workshops aimed at initiating a process of self-education, gender training, and organizing awareness workshops within and outside the campus, conducted by Akshara Center and CYDA.',
  },
  {
    name: 'Constitution Day',
    date: '26 November 2022',
    description:
      'Christ College Pune celebrated Constitution Day to commemorate the adoption of the Constitution of India, with activities teaching students about its significance. Some students participated in the Constitution Honor Run — Pune (mini marathon) held by Savitribai Phule Pune University.',
  },
  {
    name: 'AIDS Awareness Day',
    date: '1–2 December 2022',
    description:
      'NSS volunteers organized an awareness street play at various colleges, and an HIV/AIDS awareness rally was held in the Wadgaonsheri area, where students carried banners, posters, and catchphrases to spread awareness.',
  },
  {
    name: 'Joy of Giving Drive',
    date: '14–21 December 2022',
    description:
      'Organized with the intention of spreading happiness during the holiday season, students and staff contributed clothes, books, stationery, and toys, which were distributed to organizations and charities working with underprivileged children.',
  },
  {
    name: 'Visit to Snehalaya and Maher Orphanages',
    date: '23 December 2022',
    description:
      'The NSS unit visited Snehalaya and Maher orphanages as part of a community service project, presenting donations of clothes, toys, books, and stationery collected during the Joy of Giving Drive.',
  },
  {
    name: 'Industrial Visit',
    date: '7 January 2023',
    description:
      'NSS volunteers visited Weikfield Foods Pvt. Ltd (Bakori), where officials gave a tour of the production facility and described their processes, including how mushrooms are made, helping students gain practical knowledge about industry operations.',
  },
  {
    name: 'Session on ‘The Art of Living’',
    date: '19 January 2023',
    description:
      'A guided meditation session on the Art of Living was conducted by Mr. Pratik Shah for students, leaving participants feeling rejuvenated and inspired to continue practicing meditation.',
  },
  {
    name: 'Republic Day',
    date: '26 January 2023',
    description:
      'The college campus was filled with enthusiasm and patriotism as Republic Day was celebrated, commencing at 8:30 am with the principal unfurling the national flag — an opportunity for students to understand the significance of democracy and freedom.',
  },
  {
    name: 'Blood Donation Camp',
    date: '26 January 2023',
    description:
      'A camp was organized at Pathare Stadium by the Surendra Pathare Foundation in collaboration with Christ College. NSS volunteers played an active role in coordinating the camp, and more than 2,000 bags were collected.',
  },
  {
    name: 'EduYouth Meet',
    date: '4 February 2023',
    description:
      'Christ College students participated in the EduYouth Meet organized by Savitribai Phule Pune University with other top institutions, the Indian Council for Cultural Relations, and the Art of Living Foundation, emphasizing a drug-free India with over one lakh students pledging to strengthen human values.',
  },
  {
    name: 'Youth For Change Workshop',
    date: '6 February 2023',
    description:
      'Christ College organized a workshop in association with Akshara Center and CYDA, focused on discussing issues related to gender equity and encouraging students to suggest solutions.',
  },
  {
    name: 'World Wild Life Day',
    date: '3 March 2023',
    description:
      'The NSS Unit and Department of Arts collaborated with the Society for Animal Safety (SAS) India to celebrate World Wild Life Day. Ms Diksha Thakkar gave a talk on animal rescue and compassion towards dogs, sharing her expertise as a canine behaviorist and nutritionist.',
  },
  {
    name: 'International Women’s Day',
    date: '8 March 2023',
    description:
      'The NSS Unit, Women’s Cell, and Student Council collaboratively celebrated the day with activities acknowledging women — support staff were felicitated by the college management, interactive games were conducted, and women from different fields were interviewed and acknowledged on social media.',
  },
  {
    name: 'Youth Fest',
    date: '6 April 2023',
    description:
      'The NSS unit hosted the Youth Fest and valedictory of the "Youth for Change Program" in collaboration with Akshara Centre, CYDA, and six affiliated colleges under Savitribai Phule Pune University, encouraging students to become more informed and engaged in promoting gender equality.',
  },
  {
    name: 'Workshop — Martial Arts: Self-Defense Training for Girls',
    date: '20–21 April 2023',
    description:
      'As part of the "Garjana" project, a two-day self-defense workshop was held by the Women’s Cell and NSS unit, facilitated by Mr. Kumar Ugade (Secretary, Sambo Association-Maharashtra) and Mr. Suresh Markad (Police Naik, Shivajinagar, Pune), with hands-on training in real-life self-defense situations.',
  },
];

const CAMPS = [
  {
    name: 'NSS Special Winter Camp',
    date: '5–11 January 2023',
    description:
      'Organized at the adopted village of Bakori and attended by 50 volunteers, the camp included community service (cleaning, tree planting, awareness rallies), personality development and leadership sessions, guest lectures on Women Empowerment and Human Rights, a socio-economic survey of 148 villagers, a trek to Kesnand Hill, and a closing campfire.',
  },
  {
    name: '‘Avhaan’ — Disaster Management Camp',
    date: '19–28 December 2022',
    description:
      'Organized by Savitribai Phule Pune University, this camp gave NSS volunteer Tejas Waindayskar training in Medical First Responder (MFR), Collapsed Structure Search and Rescue (CSSR), and other disaster management skills.',
  },
  {
    name: 'NSS University Level ‘Fort Conservation & Cleanliness Camp’',
    date: '11–12 March 2023',
    description:
      'Organized by SPPU and Appasaheb Jedhe Arts, Commerce, Science College — Pune at Raireshwar and Raigad, the camp involved a trekking expedition to the historical Raireshwar Fort, teaching students its history and the importance of maintaining natural and historical sites free of pollution and litter.',
  },
  {
    name: 'NSS State Level Nature Conservation Camp',
    date: '18–22 February 2023',
    description:
      'Held at Ratanwadi, Ratangad Kalsubai and organized by D.Y. Patil College with Savitribai Phule Pune University, three NSS volunteers learned about sustainable tourism, biodiversity, and eco-friendly practices, and took part in cleaning surroundings and planting trees.',
  },
];

function ActivityList({ items }) {
  return (
    <dl className="mt-6 flex flex-col divide-y divide-cc-gray-200">
      {items.map((item) => (
        <div key={item.name} className="py-4 first:pt-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <dt className="font-semibold text-cc-text-heading">{item.name}</dt>
            <span className="text-xs uppercase tracking-wide text-cc-text-muted-light">{item.date}</span>
          </div>
          <dd className="mt-1 text-sm text-cc-text-muted-light">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}

function HomeTab() {
  return (
    <>
      <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wide text-cc-primary">
        Motto: &ldquo;Not Me But You&rdquo;
      </span>
      <h2>About National Service Scheme (NSS)</h2>
      <div className="mt-4 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <p className="text-cc-text-body">
          The National Service Scheme (NSS) is a Central Sector Scheme of the Government of
          India, Ministry of Youth Affairs &amp; Sports. NSS at Christ College Pune is a body
          for social service affiliated to Savitribai Phule Pune University. It is an
          association of students working for campus &amp; community linkage. The college has
          a sanctioned unit of 100 NSS volunteers. NSS seeks to involve students in various
          community development programmes on a voluntary basis through Regular Activities and
          Camps.
        </p>
        <img
          src={nssCampGroup}
          alt="NSS volunteers and staff of Christ College Pune with the Savitribai Phule Pune University NSS banner"
          className="w-full rounded-cc-lg border border-cc-gray-200 object-cover shadow-cc-sm"
        />
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
              <pillar.icon width={22} height={22} />
            </span>
            <h3 className="mt-4 text-base">{pillar.title}</h3>
            <p className="mt-2 text-sm text-cc-text-muted-light">{pillar.description}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10">Aims &amp; Objectives of NSS</h2>
      <ul className="mt-4 flex max-w-3xl flex-col gap-2">
        {AIMS.map((item) => (
          <li key={item} className="flex items-start gap-2 text-cc-text-body">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cc-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-10">Reach Us</h2>
      <a
        href="mailto:nss@christcollegepune.org"
        className="mt-4 inline-flex items-center gap-3 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface px-5 py-3 transition-colors hover:border-cc-primary"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cc-primary/10 text-cc-primary">
          <EnvelopeIcon width={18} height={18} />
        </span>
        <span>
          <span className="block text-xs uppercase tracking-wide text-cc-text-muted-light">Email</span>
          <span className="block font-medium text-cc-primary">nss@christcollegepune.org</span>
        </span>
      </a>
    </>
  );
}

function ActivitiesTab() {
  return (
    <>
      <h2 className="flex items-center gap-2.5">
        <CalendarIcon className="h-6 w-6 text-cc-primary shrink-0" />
        Recent Activities (2026-27)
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {RECENT_ACTIVITIES_2026.map((item) => (
          <div
            key={item.name}
            className="group relative overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-card shadow-cc-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-cc-md"
          >
            <div className="relative">
              {item.images ? (
                <ImageCarousel images={item.images} alt={item.name} className="h-32 w-full" />
              ) : (
                <div className="h-32 w-full bg-gradient-to-br from-cc-primary to-cc-primary-deeper" />
              )}
              <span className="absolute -bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-cc-bg-card bg-cc-primary text-white shadow-cc-sm">
                <UsersIcon className="h-4 w-4" />
              </span>
            </div>
            <div className="p-4 pt-6">
              <h4 className="text-sm font-semibold leading-snug break-words">{item.name}</h4>
              <p className="mt-2 text-xs leading-relaxed text-cc-text-muted-light line-clamp-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl">
        <h2 className="mt-14">Activities (2022-23)</h2>
        <ActivityList items={ACTIVITIES} />

        <h2 className="mt-10">NSS Camps</h2>
        <ActivityList items={CAMPS} />
      </div>
    </>
  );
}

function BenefitsTab() {
  return (
    <div className="max-w-3xl">
      <h2>Benefits</h2>
      <p className="mt-4 text-cc-text-body">
        2 Credits &amp; 10 marks along with a certificate from Savitribai Phule Pune University,
        under the aegis of the Ministry of Youth Affairs and Sports, is awarded to the volunteer
        after completion of 2 years of the NSS Program, including 240 hours of Regular Activity
        and 1 Residential Special Winter Camp (7 days).
      </p>
    </div>
  );
}

export default function NationalServiceSchemeAboutUs({ initialTab = 'home' }) {
  return (
    <TabbedContentPage
      pageTitle="National Service Scheme"
      breadcrumbLabel="National Service Scheme"
      breadcrumbSection="Centres & Cells"
      description="The National Service Scheme (NSS) at Christ College, Pune operates under the motto 'Not Me But You', developing students' social and civic responsibility through community service, regular activities and residential camps."
      bannerImage={nssBanner}
      bannerAlt="NSS volunteers of Christ College Pune with an e-waste collection bin"
      initialTab={initialTab}
      tabs={[
        { key: 'home', label: 'Home', render: () => <HomeTab /> },
        { key: 'activities', label: 'Activities', render: () => <ActivitiesTab /> },
        { key: 'benefits', label: 'Benefits', render: () => <BenefitsTab /> },
      ]}
    />
  );
}
