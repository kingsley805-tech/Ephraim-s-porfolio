export type Credential = {
  id: string
  kind: 'education' | 'certification'
  title: string
  issuer: string
  detail?: string
}

export const education: Credential[] = [
  {
    id: 'uopeople',
    kind: 'education',
    title: 'BSc. Computer Science',
    issuer: 'University of the People — Pasadena, CA',
    detail: 'Distance learning. Completion year is not stated on the CV.',
  },
  {
    id: 'gctu',
    kind: 'education',
    title: 'BSc. Networking and Systems Administration',
    issuer: 'Ghana Communication Technology University',
    detail: 'Completion year is not stated on the CV.',
  },
  {
    id: 'stjohns',
    kind: 'education',
    title: 'Secondary School Education in General Arts / General Studies',
    issuer: "ST. John's Grammar Senior High School — Accra",
  },
]

export const certifications: Credential[] = [
  {
    id: 'ccna',
    kind: 'certification',
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    detail: 'Listed on the CV together with Cisco Switching, Routing & Wireless.',
  },
  {
    id: 'cisco-srw',
    kind: 'certification',
    title: 'Cisco Switching, Routing & Wireless',
    issuer: 'Cisco',
  },
  {
    id: 'google-it',
    kind: 'certification',
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google',
  },
  {
    id: 'dante',
    kind: 'certification',
    title: 'Audinate Dante (L3)',
    issuer: 'Audinate',
  },
  {
    id: 'aiti',
    kind: 'certification',
    title: 'Professional Certification in Computer Networking',
    issuer: 'Advanced Information Technology Institute (Cisco Networking Academy)',
  },
]
