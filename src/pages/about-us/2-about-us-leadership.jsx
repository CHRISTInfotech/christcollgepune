import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

import frJamesThayyil from '../../assets/aboutus/leadership/FrJames thayyil.png';
import frAntonyPuthussery from '../../assets/aboutus/leadership/Fr Antony.jpg';
import frArunAntonyChully from '../../assets/aboutus/leadership/Fr arun.png';
import frJosephCC from '../../assets/aboutus/leadership/Fr Joseph cc.png';
import frMartinMallath from '../../assets/aboutus/leadership/Rev_ Fr_ Martin Mallath CMI.jpg';
import frLijoThomas from '../../assets/aboutus/leadership/Fr Lijo.png';
import frJustinVarghese from '../../assets/aboutus/leadership/Fr Justin.png';
import frSonyChundattu from '../../assets/aboutus/leadership/FR sony.png';
import frJaisonVadakkethala from '../../assets/aboutus/leadership/FR jaison.png';
import jagdishSalve from '../../assets/aboutus/leadership/Jagdish.png';
import mdLawrance from '../../assets/aboutus/leadership/MD Lawrance.png';
import joyGeorge from '../../assets/aboutus/leadership/Joy.png';
import deepaSujith from '../../assets/aboutus/leadership/Deepa.png';
import nilimaShingate from '../../assets/aboutus/leadership/Nilima.png';
import leenaSanu from '../../assets/aboutus/leadership/Leena.png';
import priyaWahab from '../../assets/aboutus/leadership/Priya.png';
import seemaMane from '../../assets/aboutus/leadership/seema mane.png';
import barnikaMukherjee from '../../assets/aboutus/leadership/Barnika.png';

const SECTIONS = [
  {
    title: 'Advisory Board',
    people: [
      {
        name: 'Dr. (Fr) Martin Mallath CMI',
        designation: 'General Councillor for Education, CMI Congregation',
        photo: frMartinMallath,
      },
      { name: 'Fr James Thayyil CMI', designation: 'Manager', photo: frJamesThayyil },
      { name: 'Dr. (Fr) Arun Antony Chully CMI', designation: 'Director / Principal', photo: frArunAntonyChully },
      { name: 'Rev. Dr. Antony Puthussery CMI', designation: 'Administrator', photo: frAntonyPuthussery },
      { name: 'Dr. Fr Joseph CC', designation: 'Vice Chancellor, Christ University', photo: frJosephCC },
      
    ],
  },
  {
    title: 'Governing Body',
    people: [
      { name: 'Fr James Thayyil CMI', designation: 'Chairman', photo: frJamesThayyil },
      { name: 'Dr. (Fr) Arun Antony Chully CMI', designation: 'Member', photo: frArunAntonyChully },
      { name: 'Rev. Dr. Antony Puthussery CMI', designation: 'Member', photo: frAntonyPuthussery },
      { name: 'Dr. Fr Lijo Thomas', designation: 'Member', photo: frLijoThomas },
      { name: 'Fr Justin P Varghese', designation: 'Member', photo: frJustinVarghese },
      { name: 'Dr. (Fr) Sony J Chundattu CMI', designation: 'Member', photo: frSonyChundattu },
      { name: 'Fr Jaison Vadakkethala CMI', designation: 'Member', photo: frJaisonVadakkethala },
    ],
  },
  {
    title: 'College Development Council',
    people: [
      { name: 'Fr James Thayyil CMI', designation: 'Chairman', photo: frJamesThayyil },
      { name: 'Dr. (Fr) Arun Antony Chully CMI', designation: 'Principal / Secretary', photo: frArunAntonyChully },
      { name: 'Rev. Dr. Antony Puthussery CMI', designation: 'Administrator', photo: frAntonyPuthussery },
      { name: 'Mr Jagdish Salve', designation: 'Management Representative', photo: jagdishSalve },
      { name: 'Dr M. D. Lawrance', designation: 'Academician - Local Member', photo: mdLawrance },
      { name: 'Mr Joy George', designation: 'Management Representative', photo: joyGeorge },
      { name: 'Ms Deepa Sujith', designation: 'Coordinator (IQAC)', photo: deepaSujith },
      { name: 'Ms Nilima Shingate', designation: 'Head of Department (Science)', photo: nilimaShingate },
      { name: 'Ms Leena Sanu', designation: 'Faculty', photo: leenaSanu },
      { name: 'Ms Priya Wahab', designation: 'Faculty', photo: priyaWahab },
      { name: 'Ms Seema Mane', designation: 'Non-Teaching', photo: seemaMane },
      { name: 'Ms Barnika Mukherjee', designation: 'Student Representative', photo: barnikaMukherjee },
    ],
  },
];

function PersonCard({ name, designation, photo }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page shadow-cc-sm">
      <div className="w-full overflow-hidden" style={{ aspectRatio: '500 / 457' }}>
        <img src={photo} alt={name} className="h-full w-full object-cover object-top" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-1 px-4 py-5 text-center">
        <p className="font-semibold text-cc-text-heading">{name}</p>
        <p className="text-sm text-cc-text-muted-light">{designation}</p>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <>
      <Seo
        title="Leadership"
        description="Meet the Advisory Board, Governing Body and College Development Council of Christ College, Pune."
      />
      <PageHeader title="Leadership" breadcrumbs={[{ label: 'About Us', path: '/about-us/about-us' }, { label: 'Leadership' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-16">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="inline-block border-b-2 border-cc-gold pb-2 mt-12 text-xl font-bold text-cc-primary">
                {section.title}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {section.people.map((person, index) => (
                  <PersonCard key={`${section.title}-${index}`} {...person} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
