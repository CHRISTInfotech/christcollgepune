import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

import arunAntonyChully from '../../assets/images/2-about-us-faculty/arun-antony-chully.JPG';
import antonyPuthussery from '../../assets/images/2-about-us-faculty/antony-puthussery.png';
import dinupChandran from '../../assets/images/2-about-us-faculty/dinup-chandran.png';
import sagarDhikale from '../../assets/images/2-about-us-faculty/sagar-dhikale.png';
import deepaSujith from '../../assets/images/2-about-us-faculty/deepa-sujith.png';
import bijuSebastian from '../../assets/images/2-about-us-faculty/biju-sebastian.png';
import nilimaShingate from '../../assets/images/2-about-us-faculty/nilima-shingate.jpg';
import merinKVarghese from '../../assets/images/2-about-us-faculty/merin-k-varghese.jpg';
import manjulaGaur from '../../assets/images/2-about-us-faculty/manjula-gaur.jpg';
import priyaWahab from '../../assets/images/2-about-us-faculty/priya-wahab.jpg';
import nikhilGaikwad from '../../assets/images/2-about-us-faculty/nikhil-gaikwad.jpg';
import poojaKhedkar from '../../assets/images/2-about-us-faculty/pooja-khedkar.png';
import rasmiPK from '../../assets/images/2-about-us-faculty/rasmi-p-k.jpg';
import rincySaraLuka from '../../assets/images/2-about-us-faculty/rincy-sara-luka.jpg';
import nishaVinodMore from '../../assets/images/2-about-us-faculty/nisha-vinod-more.jpg';
import swatiJadhav from '../../assets/images/2-about-us-faculty/swati-jadhav.JPG';
import suvarnaMohanraoNade from '../../assets/images/2-about-us-faculty/suvarna-mohanrao-nade.jpg';
import rasilaWalhekar from '../../assets/images/2-about-us-faculty/rasila-walhekar.png';
import kirtiNikam from '../../assets/images/2-about-us-faculty/kirti-nikam.jpg';
import pritiSatishKhandve from '../../assets/images/2-about-us-faculty/priti-satish-khandve.png';
import vandanaBais from '../../assets/images/2-about-us-faculty/vandana-bais.JPG';
import ashaNagoriya from '../../assets/images/2-about-us-faculty/asha-nagoriya.png';
import leenaSanu from '../../assets/images/2-about-us-faculty/leena-sanu.png';
import wilmaDias from '../../assets/images/2-about-us-faculty/wilma-dias.png';
import ashwiniPrabodhTathe from '../../assets/images/2-about-us-faculty/ashwini-prabodh-tathe.jpg';
import stannyDias from '../../assets/images/2-about-us-faculty/stanny-dias.png';
import bittoBenny from '../../assets/images/2-about-us-faculty/bitto-benny.png';
import preetiBrahmane from '../../assets/images/2-about-us-faculty/preeti-brahmane.JPG';
import petriciaLeemaRoseleine from '../../assets/images/2-about-us-faculty/petricia-leema-roseleine.png';
import meyaSimon from '../../assets/images/2-about-us-faculty/meya-simon.png';
import yogyataSharma from '../../assets/images/2-about-us-faculty/yogyata-sharma.png';
import priyadarshni from '../../assets/images/2-about-us-faculty/priyadarshni.png';
import priyaGhaloth from '../../assets/images/2-about-us-faculty/priya-ghaloth.png';
import anushaBijoy from '../../assets/images/2-about-us-faculty/anusha-bijoy.png';
import fizaSalimShaikh from '../../assets/images/2-about-us-faculty/fiza-salim-shaikh.png';
import angelineThomasPeter from '../../assets/images/2-about-us-faculty/angeline-thomas-peter.png';
import sijuMathew from '../../assets/images/2-about-us-faculty/siju-mathew.png';
import sandeepKaur from '../../assets/images/2-about-us-faculty/sandeep-kaur.png';

const FACULTY = [
  { name: 'Dr. (Fr) Arun Antony Chully CMI', specialization: 'Human Resource Management', department: 'Management', photo: arunAntonyChully },
  { name: 'Dr. (Fr) Antony Puthussery CMI', specialization: 'Maths', department: 'Science', photo: antonyPuthussery },
  { name: 'Mr. Dinup Chandran', specialization: 'Football, Sports Biomechanics & Sports Physiology', department: 'Physical Education', photo: dinupChandran },
  { name: 'Mr. Sagar Dhikale', specialization: 'Athletics, Cricket & Baseball', department: 'Physical Education', photo: sagarDhikale },
  { name: 'Ms. Deepa Sujith', specialization: 'Human Resource Management', department: 'Management', photo: deepaSujith },
  { name: 'Mr. Biju Sebastian', specialization: 'Economics', department: 'Arts', photo: bijuSebastian },
  { name: 'Ms. Nilima Shingate', specialization: 'Computer Science', department: 'Science', photo: nilimaShingate },
  { name: 'Ms. Merin K Varghese', specialization: 'Economics', department: 'Arts', photo: merinKVarghese },
  { name: 'Dr. Manjula Gaur', specialization: 'History', department: 'Arts', photo: manjulaGaur },
  { name: 'Dr. Priya Wahab', specialization: 'Linguistics & Indo-English Literature', department: 'Arts', photo: priyaWahab },
  { name: 'Mr. Nikhil Gaikwad', specialization: 'International Economics', department: 'Arts', photo: nikhilGaikwad },
  { name: 'Ms. Pooja Khedkar', specialization: 'Electronic Science', department: 'Science', photo: poojaKhedkar },
  { name: 'Dr. Rasmi P K', specialization: 'English', department: 'Science', photo: rasmiPK },
  { name: 'Ms. Rincy Sara Luka', specialization: 'Electronics', department: 'Science', photo: rincySaraLuka },
  { name: 'Ms. Nisha Vinod More', specialization: 'Digital Electronics', department: 'Science', photo: nishaVinodMore },
  { name: 'Ms. Swati Jadhav', specialization: 'Computer Science', department: 'Science', photo: swatiJadhav },
  { name: 'Ms. Suvarna Mohanrao Nade', specialization: 'Mathematics', department: 'Science', photo: suvarnaMohanraoNade },
  { name: 'Ms. Rasila Walhekar', specialization: '', department: 'Science', photo: rasilaWalhekar },
  { name: 'Ms. Kirti Nikam', specialization: 'Computer Application', department: 'Management', photo: kirtiNikam },
  { name: 'Ms. Priti Satish Khandve', specialization: 'Computer Science', department: 'Management', photo: pritiSatishKhandve },
  { name: 'Ms. Vandana Bais', specialization: 'Computer Science', department: 'Science', photo: vandanaBais },
  { name: 'Ms. Asha Nagoriya', specialization: 'Computer Science', department: 'Science', photo: ashaNagoriya },
  { name: 'Ms. Leena Sanu', specialization: 'Computer Application', department: 'Management', photo: leenaSanu },
  { name: 'Ms. Wilma Dias', specialization: 'Health Care', department: 'Management', photo: wilmaDias },
  { name: 'Ms. Ashwini Prabodh Tathe', specialization: 'Finance', department: 'Management', photo: ashwiniPrabodhTathe },
  { name: 'Mr. Stanny Dias', specialization: 'Marketing', department: 'Management', photo: stannyDias },
  { name: 'Mr. Bitto Benny', specialization: 'Banking & Insurance', department: 'Management', photo: bittoBenny },
  { name: 'Ms. Preeti Brahmane', specialization: 'Computer Science', department: 'Management', photo: preetiBrahmane },
  { name: 'Ms. Petricia Leema Roseleine', specialization: 'Soft Computing', department: 'Management', photo: petriciaLeemaRoseleine },
  { name: 'Ms. Meya Simon', specialization: 'Marketing & Finance', department: 'Management', photo: meyaSimon },
  { name: 'Ms. Yogyata Sharma', specialization: 'Economics', department: 'Commerce', photo: yogyataSharma },
  { name: 'Ms. Priyadarshni', specialization: 'Accounting & Taxation', department: 'Management', photo: priyadarshni },
  { name: 'Ms. Priya Ghaloth', specialization: 'Marketing & Management', department: 'Management', photo: priyaGhaloth },
  { name: 'Ms. Anusha Bijoy', specialization: 'General Chemistry', department: 'Commerce', photo: anushaBijoy },
  { name: 'Ms. Fiza Salim Shaikh', specialization: 'Costs & Works Accounting', department: 'Commerce', photo: fizaSalimShaikh },
  { name: 'Ms. Angeline Thomas Peter', specialization: 'Business Administration', department: 'Commerce', photo: angelineThomasPeter },
  { name: 'Mr. Siju Mathew', specialization: 'Law', department: 'Commerce', photo: sijuMathew },
  { name: 'Ms. Sandeep Kaur', specialization: 'Accounting & Finance', department: 'Commerce', photo: sandeepKaur },
];

export default function Faculty() {
  return (
    <>
      <Seo
        title="Faculty"
        description="Meet the 38-member teaching faculty of Christ College, Pune across the Departments of Management, Commerce, Science, Arts and Physical Education."
      />
      <PageHeader title="Faculty" breadcrumbs={[{ label: 'About Us', path: '/about-us/about-us' }, { label: 'Faculty' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.map((person) => (
            <div key={person.name} className="flex flex-col items-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-5 text-center shadow-cc-sm">
              <img
                src={person.photo}
                alt={person.name}
                className="h-24 w-24 rounded-full border border-cc-gray-200 object-cover object-top"
              />
              <p className="mt-4 font-semibold text-cc-text-heading text-center">{person.name}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-cc-primary">{person.department}</p>
              {person.specialization && (
                <p className="mt-2 text-sm text-cc-text-muted-light">{person.specialization}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
