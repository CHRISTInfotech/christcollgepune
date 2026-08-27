import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';
import { ChevronDownIcon } from '../../components/icons';
import jamesThayyil from '../../assets/images/2-about-us-administration/james-thayyil.png';
import antonyPuthussery from '../../assets/images/2-about-us-administration/antony-puthussery.png';
import peterKochalumkal from '../../assets/images/2-about-us-administration/peter-kochalumkal.jpg';
import jossyPGeorge from '../../assets/images/2-about-us-administration/jossy-p-george.jpg';
import arunAntonyChullyAcademic from '../../assets/images/2-about-us-administration/arun-antony-chully-academic.png';
import antonyPuthusseryAcademic from '../../assets/images/2-about-us-administration/antony-puthussery-academic.png';
import deepaSujith from '../../assets/images/2-about-us-administration/deepa-sujith.png';
import jijiJohnson from '../../assets/images/2-about-us-administration/jiji-johnson.png';
import nilimaShingate from '../../assets/images/2-about-us-administration/nilima-shingate.png';
import bijuSebastian from '../../assets/images/2-about-us-administration/biju-sebastian.png';

import jagdishSalve from '../../assets/images/2-about-us-administration/staff/jagdish-salve.png';
import sudhirSawant from '../../assets/images/2-about-us-administration/staff/sudhir-sawant.png';
import nikhilSalve from '../../assets/images/2-about-us-administration/staff/nikhil-salve.png';
import seemaSandeepMane from '../../assets/images/2-about-us-administration/staff/seema-sandeep-mane.jpg';
import nikithaRego from '../../assets/images/2-about-us-administration/staff/nikitha-rego.png';
import jemiJose from '../../assets/images/2-about-us-administration/staff/jemi-jose.png';
import nitinAmatJadhav from '../../assets/images/2-about-us-administration/staff/nitin-amat-jadhav.png';
import mayaMathew from '../../assets/images/2-about-us-administration/staff/maya-mathew.png';
import smitaLuellLopes from '../../assets/images/2-about-us-administration/staff/smita-luell-lopes.png';
import sagarSanthoshSathe from '../../assets/images/2-about-us-administration/staff/sagar-santosh-sathe.png';
import deepakBhosale from '../../assets/images/2-about-us-administration/staff/deepak-bhosale.png';
import bijiMathew from '../../assets/images/2-about-us-administration/staff/biji-mathew.png';
import shreyasRajeshKumar from '../../assets/images/2-about-us-administration/staff/shreyas-rajesh-kumar.jpg';
import stalinJojoKolenchery from '../../assets/images/2-about-us-administration/staff/stalin-jojo-kolenchery.png';
import lijiTony from '../../assets/images/2-about-us-administration/staff/liji-tony.png';
import omkarAnnasahebPokharkar from '../../assets/images/2-about-us-administration/staff/omkar-annasaheb-pokharkar.jpg';
import vivekYerwadekar from '../../assets/images/2-about-us-administration/staff/vivek-yerwadekar.png';

const MANAGEMENT = [
  { name: 'Rev. Fr. James Thayyil CMI', role: 'Manager', photo: jamesThayyil },
  { name: 'Rev. Dr. Arun Antony Chully CMI', role: 'Director / Principal', photo: arunAntonyChullyAcademic },
  { name: 'Rev. Dr. Antony Puthussery CMI', role: 'Administrator', photo: antonyPuthussery },
  { name: 'Rev. Dr. Peter Kochalumkal CMI', role: 'Member', photo: peterKochalumkal },
  { name: 'Dr Fr Jossy P George', role: 'Member', photo: jossyPGeorge },
];

const ACADEMIC_ADMINISTRATION = [
  { name: 'Rev. Dr. Arun Antony Chully CMI', role: 'Director', photo: arunAntonyChullyAcademic },
  { name: 'Rev. Dr. Antony Puthussery CMI', role: 'Administrator', photo: antonyPuthusseryAcademic },
  { name: 'Ms. Deepa Sujith', role: 'HOD, Management', photo: deepaSujith },
  { name: 'Dr. Jiji Johnson', role: 'HOD, Commerce', photo: jijiJohnson },
  { name: 'Ms. Nilima Shingate', role: 'HOD, Computer Science', photo: nilimaShingate },
  { name: 'Mr. Biju Sebastian', role: 'HOD, Arts', photo: bijuSebastian },
];

const ADMINISTRATIVE_STAFF = [
  {
    department: 'Office of Academic Support',
    people: [
      { name: 'Mr. Jagdish Salve', photo: jagdishSalve },
      { name: 'Mr. Sudhir Sawant', photo: sudhirSawant },
      { name: 'Mr. Nikhil Salve', photo: nikhilSalve },
      { name: 'Ms. Seema Sandeep Mane', photo: seemaSandeepMane },
    ],
  },
  {
    department: 'Office of Accounts',
    people: [
      { name: 'Ms. Nikitha Rego', photo: nikithaRego },
      { name: 'Mr. Jemi Jose', photo: jemiJose },
    ],
  },
  {
    department: 'Human Resources',
    people: [{ name: 'Mr. Nitin Amat Jadhav', photo: nitinAmatJadhav }],
  },
  {
    department: 'Library and Information Centre',
    people: [{ name: 'Ms. Maya Mathew', photo: mayaMathew }],
  },
  {
    department: 'Office of Information Processing and Management',
    people: [{ name: 'Ms. Smita Luell Lopes', photo: smitaLuellLopes }],
  },
  {
    department: 'Lab Assistant',
    people: [{ name: 'Mr. Sagar Santosh Sathe', photo: sagarSanthoshSathe }],
  },
  {
    department: 'Facility Management',
    people: [
      { name: 'Mr. Deepak Bhosale', photo: deepakBhosale },
      { name: 'Mr. Biji Mathew', photo: bijiMathew },
    ],
  },
  {
    department: 'Centre for Digital Media (CDM)',
    people: [
      { name: 'Mr. Shreyas Rajesh Kumar', photo: shreyasRajeshKumar },
      { name: 'Mr. Stalin Jojo Kolenchery', photo: stalinJojoKolenchery },
    ],
  },
  {
    department: 'Counsellor',
    people: [{ name: 'Ms. Liji Tony', photo: lijiTony }],
  },
  {
    department: 'Information Technology (IT)',
    people: [
      { name: 'Mr. Omkar Annasaheb Pokharkar', photo: omkarAnnasahebPokharkar },
      { name: 'Mr. Vivek Yerwadekar', photo: vivekYerwadekar },
    ],
  },
];

function PersonGrid({ people }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <div key={`${person.name}-${person.role}`} className="flex items-center gap-4 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-4 shadow-cc-sm">
          <img
            src={person.photo}
            alt={person.name}
            className="h-16 w-16 shrink-0 rounded-full border border-cc-gray-200 object-cover object-top"
          />
          <div>
            <p className="font-semibold text-cc-text-heading">{person.name}</p>
            <p className="text-sm text-cc-text-muted-light">{person.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StaffAccordion({ groups }) {
  const [openDepartment, setOpenDepartment] = useState(groups[0]?.department ?? null);

  return (
    <div className="mt-8 flex flex-col gap-3">
      {groups.map((group) => {
        const isOpen = openDepartment === group.department;
        return (
          <div key={group.department} className="overflow-hidden rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page">
            <button
              type="button"
              onClick={() => setOpenDepartment(isOpen ? null : group.department)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-cc-text-heading">{group.department}</span>
              <span className="flex items-center gap-3">
                <span className="text-sm text-cc-text-muted-light">{group.people.length} member{group.people.length > 1 ? 's' : ''}</span>
                <ChevronDownIcon
                  className={`shrink-0 text-cc-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </span>
            </button>
            {isOpen && (
              <div className="grid gap-6 border-t border-cc-gray-200 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.people.map((person) => (
                  <div key={person.name} className="flex flex-col items-center rounded-cc-lg border border-cc-gray-200 bg-cc-bg-surface p-5 text-center shadow-cc-sm">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-24 w-24 rounded-full border border-cc-gray-200 object-cover object-top"
                    />
                    <p className="mt-4 font-semibold text-cc-text-heading">{person.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Administration() {
  return (
    <>
      <Seo
        title="Administration"
        description="Christ College, Pune is led by the CMI Management team, the Academic Administration, and the Administrative Staff across Academic Support, Accounts, HR, Library, IT and Facility Management."
      />
      <PageHeader title="Administration" breadcrumbs={[{ label: 'About Us', path: '/about-us/about-us' }, { label: 'Administration' }]} />

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2>Management</h2>
        <PersonGrid people={MANAGEMENT} />
      </section>

      <section className="bg-cc-bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <h2>Academic Administration</h2>
          <PersonGrid people={ACADEMIC_ADMINISTRATION} />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2>Administrative Staff</h2>
        <StaffAccordion groups={ADMINISTRATIVE_STAFF} />
      </section>
    </>
  );
}
