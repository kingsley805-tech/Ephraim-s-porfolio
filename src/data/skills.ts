export type SkillLevel = 'demonstrated' | 'certified'

export type Skill = {
  name: string
  level: SkillLevel
  note?: string
}

export type SkillGroup = {
  id: string
  title: string
  blurb: string
  items: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'networking',
    title: 'Networking and Infrastructure',
    blurb: 'Field-proven wireless, LAN, and ISP operations work.',
    items: [
      { name: 'LAN & WAN connectivity and maintenance', level: 'demonstrated' },
      { name: 'Wireless networking (AP, point-to-point, point-to-multipoint)', level: 'demonstrated' },
      { name: 'MikroTik RouterOS and hotspot services', level: 'demonstrated' },
      { name: 'Ubiquiti airOS / UISP radios', level: 'demonstrated' },
      { name: 'Starlink deployment and integration', level: 'demonstrated' },
      { name: 'Ruijie / Reyee access points', level: 'demonstrated' },
      { name: 'Captive portals and access control', level: 'demonstrated' },
      { name: 'ISP billing integration and NOC monitoring', level: 'demonstrated' },
      { name: 'Router, switch, and AP configuration', level: 'demonstrated' },
      { name: 'Switching, routing, and wireless fundamentals', level: 'certified', note: 'Documented via CCNA and Cisco Switching, Routing & Wireless.' },
    ],
  },
  {
    id: 'support',
    title: 'IT Support',
    blurb: 'Onsite and remote support for people, hardware, and daily operations.',
    items: [
      { name: 'Onsite and remote IT support', level: 'demonstrated' },
      { name: 'Hardware diagnostics and maintenance', level: 'demonstrated' },
      { name: 'Software installation and updates', level: 'demonstrated' },
      { name: 'IT troubleshooting and diagnostics', level: 'demonstrated' },
      { name: 'Systems maintenance', level: 'demonstrated' },
      { name: 'Network printer configuration', level: 'demonstrated' },
      { name: 'End-user support and incident documentation', level: 'demonstrated' },
      { name: 'Helpdesk-style on-call coverage', level: 'demonstrated' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems Administration',
    blurb: 'Windows environments, virtualization, and site infrastructure.',
    items: [
      { name: 'Windows and Windows Server administration', level: 'demonstrated' },
      { name: 'Proxmox virtual machines', level: 'demonstrated' },
      { name: 'NAS storage', level: 'demonstrated' },
      { name: 'Citrix / VDI support', level: 'demonstrated' },
      { name: 'Server and rack maintenance', level: 'demonstrated' },
      { name: 'CCTV and biometric access systems', level: 'demonstrated' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    blurb: 'Access control and site security work documented on the CV.',
    items: [
      { name: 'Hotspot authentication and bandwidth policy', level: 'demonstrated' },
      { name: 'Captive portal access control', level: 'demonstrated' },
      { name: 'CCTV and biometric access maintenance', level: 'demonstrated' },
      { name: 'Network security fundamentals', level: 'certified', note: 'Aligned with CCNA and Google IT Support credentials on the CV.' },
    ],
  },
  {
    id: 'av',
    title: 'Audio Visual & Media Technology',
    blurb: 'Live production support from radio and remote broadcast work.',
    items: [
      { name: 'A/V integration and support', level: 'demonstrated' },
      { name: 'vMix live production', level: 'demonstrated' },
      { name: 'Dante networks for audio', level: 'certified', note: 'Audinate Dante (L3) on the CV.' },
      { name: 'NDI for video', level: 'demonstrated' },
      { name: 'FFmpeg', level: 'demonstrated' },
      { name: 'Live coverage and streaming support', level: 'demonstrated' },
    ],
  },
]
