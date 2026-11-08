export type ExperienceItem = {
  id: string
  role: string
  organization: string
  location: string
  period: string
  current?: boolean
  clients?: string[]
  responsibilities: string[]
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'yabyne',
    role: 'IT Support Technician, On-Call',
    organization: 'Yabyne Technologies',
    location: 'Accra',
    period: 'August 2024 — Present',
    current: true,
    responsibilities: [
      'Provide on-call technical support and IT services for client environments.',
      'Deploy wireless networks in residential and commercial environments.',
      'Configure captive portals to control user access.',
      'Configure routers, switches, and access points to support stable office networks.',
    ],
    technologies: ['Wireless APs', 'Routers', 'Switches', 'Captive portals'],
  },
  {
    id: 'freelance',
    role: 'Wireless Network Technician',
    organization: 'Freelance',
    location: 'Accra',
    period: 'January 2023 — April 2024',
    responsibilities: [
      'Independent wireless and IT field work in Accra, covering installation, configuration, and support engagements documented on the CV for this period.',
    ],
    technologies: ['Wireless networking', 'Field installation'],
  },
  {
    id: 'contract',
    role: 'IT Support Technician (Contract)',
    organization: 'Contract assignments',
    location: 'Accra',
    period: 'May 2021 — Present',
    clients: [
      'Cowater International Ghana',
      'Shalina Healthcare Ghana',
      'Nova University',
      'Department of Feeder Roads',
      'First National Bank / World Net ICT Solutions — Accra',
    ],
    responsibilities: [
      'Install, configure, and maintain networks, servers, and security infrastructure.',
      'Diagnose and resolve hardware, software, and network issues for staff.',
      'Manage IT systems, applications, and equipment to ensure smooth operations.',
      'Conduct diagnostics, troubleshooting, and detailed documentation of system incidents.',
      'Maintain CCTV cameras and biometric access systems to strengthen security.',
      'Monitor networks and servers, implementing preventive measures to reduce incidents.',
    ],
    technologies: ['LAN', 'Servers', 'CCTV', 'Biometric access', 'Incident documentation'],
  },
  {
    id: 'dataleap',
    role: 'IT Support Technician',
    organization: 'Dataleap Technologies',
    location: 'Accra',
    period: 'August 2019 — June 2022',
    responsibilities: [
      'Deployed LANs in pharmacies and supermarkets to improve operations.',
      'Installed and maintained hardware and software, reducing disruptions.',
      'Performed troubleshooting to minimize client downtime.',
      'Conducted system maintenance to reduce disruptions and prolong equipment lifespan.',
      'Assisted in deploying and managing Virtual Desktop Infrastructure (VDI) and Citrix solutions, streamlining remote work for over 20 employees.',
      'Provided IT support for staff including system setup, troubleshooting, and maintenance.',
      'Supported data center operations, ensuring system stability and uptime.',
      'Configured network printers and LAN file-sharing environments.',
      'Reduced downtime by 20% through preventive maintenance.',
    ],
    technologies: ['LAN', 'Citrix', 'VDI', 'Printers', 'Data center operations'],
  },
  {
    id: 'lightroom',
    role: 'A/V Technician (Remote)',
    organization: 'LightRoomMedia',
    location: 'Accra',
    period: 'December 2019 — 2020',
    responsibilities: [
      'Provided remote support during live broadcasts for production teams.',
      'Operated vMix and other virtual mixing consoles to deliver high-quality live broadcasts.',
    ],
    technologies: ['vMix', 'Live production', 'Remote support'],
  },
  {
    id: 'kofm',
    role: 'A/V & IT Support Technician',
    organization: 'KOFM',
    location: 'Nkawnkaw',
    period: 'April 2019 — May 2021',
    responsibilities: [
      'Supported live production teams with remote technical assistance.',
      'Resolved integration issues between audio and video systems.',
      'Maintained broadcast quality by optimizing live production workflows.',
    ],
    technologies: ['A/V integration', 'Live streaming', 'IT support'],
  },
]
