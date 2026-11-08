export type ProjectCategory =
  | 'Wireless infrastructure'
  | 'ISP operations'
  | 'Satellite connectivity'
  | 'Systems administration'
  | 'IT support & hardware'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  summary: string
  challenge?: string
  solution?: string
  source: string
  technologies: string[]
  cover: string
  gallery: string[]
}

export const projectCategories: Array<ProjectCategory | 'All'> = [
  'All',
  'Wireless infrastructure',
  'ISP operations',
  'Satellite connectivity',
  'Systems administration',
  'IT support & hardware',
]

export const projects: Project[] = [
  {
    id: 'hostel-hotspot',
    title: 'Hostel and community Wi-Fi hotspot',
    category: 'ISP operations',
    summary:
      'MikroTik-based hotspot providing internet access for hostel residents and the surrounding community, with authentication, bandwidth policy, and mobile-money voucher purchase.',
    challenge:
      'Deliver fair, paid community access without relying on manual voucher sales, while keeping the network stable for mixed residential use.',
    solution:
      'Configured secure user authentication, bandwidth management, and access-control policies, then integrated mobile-money payments so vouchers activate immediately. Ongoing monitoring and troubleshooting keep the service available.',
    source: 'Documented as a named project on the CV. Supporting operations screenshots show the AirFiber billing, plan, and MikroTik router inventory used to run the service.',
    technologies: ['MikroTik', 'Captive portal', 'Bandwidth management', 'Mobile money / Paystack', 'NOC monitoring'],
    cover: '/images/airfiber-overview.jpeg',
    gallery: [
      '/images/airfiber-overview.jpeg',
      '/images/airfiber-packages.jpeg',
      '/images/airfiber-mikrotik-routers.jpeg',
      '/images/airfiber-payments.jpeg',
      '/images/mikrotik-switch-stack.jpeg',
    ],
  },
  {
    id: 'ubiquiti-ptp',
    title: 'Ubiquiti point-to-point wireless link',
    category: 'Wireless infrastructure',
    summary:
      'airOS 8 link between a LiteBeam 5AC at Sierra Lake Hostel and a LiteAP AC sector, planned and monitored in UISP.',
    challenge:
      'Establish a usable 5 GHz backhaul over a short path (dashboard reports 0.2 miles / 0.3 km) while watching signal, noise, and throughput.',
    solution:
      'The operator dashboard shows a bridge-mode PtP with WPA2, CINR around +27 to +28 dB, and live RF environment, capacity, and latency graphs. A matching UISP Design Center view plans a LiteAP AC to LiteBeam path of about 772 m with expected signal in the −41 to −46 dBm range.',
    source: 'Taken from on-site airOS and UISP screenshots. Device names and metrics are those shown in the captures; no additional performance claims are added.',
    technologies: ['Ubiquiti airOS 8', 'LiteBeam 5AC', 'LiteAP AC', 'UISP', '5 GHz PtP'],
    cover: '/images/uisp-ptp-link.jpeg',
    gallery: [
      '/images/uisp-ptp-link.jpeg',
      '/images/uisp-ptp-details.jpeg',
      '/images/uisp-link-planning.jpeg',
      '/images/ubiquiti-powerbeam-m5.jpeg',
      '/images/ubiquiti-nanostation-m5.jpeg',
    ],
  },
  {
    id: 'starlink',
    title: 'Starlink deployment and performance monitoring',
    category: 'Satellite connectivity',
    summary:
      'Physical mounting of a Starlink user terminal and monitoring of throughput, latency, obstruction, ping success, and speed tests through the dish telemetry dashboard.',
    challenge:
      'Bring up satellite backhaul with a clear sky view and confirm that the service is actually carrying traffic at usable latency.',
    solution:
      'The dish is shown mounted on an eave with a clear view. Dashboard captures from the same session report unobstructed sky, ping success above 99.6%, and a speed test of 92.1 Mbps down / 25.9 Mbps up at 29 ms. Kit unboxing and PoE staging photos sit alongside the live telemetry.',
    source: 'Photographs and Starlink dashboard screenshots supplied in the portfolio folder. Metrics quoted are exactly those visible in the images.',
    technologies: ['Starlink', 'Satellite backhaul', 'Throughput monitoring', 'PoE'],
    cover: '/images/starlink-dish-mount.jpeg',
    gallery: [
      '/images/starlink-dish-mount.jpeg',
      '/images/starlink-dashboard.jpeg',
      '/images/starlink-data-usage.jpeg',
      '/images/starlink-ping-success.jpeg',
      '/images/starlink-satellite-view.jpeg',
      '/images/starlink-speed-test.jpeg',
      '/images/starlink-kit-unbox.jpeg',
    ],
  },
  {
    id: 'ruijie-wifi6',
    title: 'Ruijie Wi-Fi 6 access coverage',
    category: 'Wireless infrastructure',
    summary:
      'Installation and controller view of Ruijie Reyee Wi-Fi 6 access points, including a pole-mounted RAP6262(G) shown in the Reyee Cloud topology.',
    challenge:
      'Place outdoor and ceiling access points so coverage reaches the intended rooms and outdoor areas, then confirm the AP is visible to the controller.',
    solution:
      'Photographs show pole, rooftop, and ceiling mounts, a bench power-on of a Ruijie unit, and a Reyee Cloud workspace with RAP6262(G) and associated clients. Cabling and a box of SOLID Cat cable appear in the rooftop install.',
    source: 'Installation photographs and a Ruijie Reyee Cloud screenshot. Serial and client counts are those displayed in the capture.',
    technologies: ['Ruijie Reyee', 'Wi-Fi 6', 'RAP6262(G)', 'Ceiling AP', 'Outdoor mount'],
    cover: '/images/ruijie-wifi6-close.jpeg',
    gallery: [
      '/images/ruijie-wifi6-close.jpeg',
      '/images/ruijie-wifi6-pole.jpeg',
      '/images/ruijie-wifi6-site.jpeg',
      '/images/ruijie-wifi6-mount.jpeg',
      '/images/rooftop-ap-install.jpeg',
      '/images/ceiling-ap-office.jpeg',
      '/images/ceiling-ap-close.jpeg',
      '/images/ruijie-ap-topology.jpeg',
      '/images/ruijie-ap-bench-setup.jpeg',
    ],
  },
  {
    id: 'tower-radio',
    title: 'Tower and mast radio installation',
    category: 'Wireless infrastructure',
    summary:
      'Climbing and working a lattice mast at night and dusk to service radios and an outdoor enclosure, including live wiring of PoE and weatherproof boxes.',
    challenge:
      'Reach elevated radios safely, keep weatherproofing intact, and restore or install outdoor powered equipment.',
    solution:
      'A sequence of field photographs documents the climb, horn/sector hardware at the top of the mast, enclosure wiring with PoE injectors, and a daytime view of the completed tower. A separate sequence shows mast fabrication and an outdoor omni/dish pair on a guyed pole.',
    source: 'Field photographs only. No extra technical claims are made beyond what the images show.',
    technologies: ['Lattice mast', 'Outdoor enclosure', 'PoE', 'Radio alignment'],
    cover: '/images/tower-climb-silhouette-01.jpeg',
    gallery: [
      '/images/tower-climb-silhouette-01.jpeg',
      '/images/tower-climb-01.jpeg',
      '/images/tower-day-pa-and-radio.jpeg',
      '/images/outdoor-enclosure-wiring.jpeg',
      '/images/mast-fabrication.jpeg',
      '/images/outdoor-radio-mast.jpeg',
    ],
  },
  {
    id: 'rack-ops',
    title: 'Rack, GPON, and Proxmox lab operations',
    category: 'Systems administration',
    summary:
      'Hands-on rack work with a Huawei GPON ONT, structured cabling, a Cudy PoE switch, UPS, and a Proxmox VE host running Ubuntu, Windows 11, MikroTik CHR, and Windows Server 22 guests.',
    challenge:
      'Keep edge connectivity, power, and virtual machines in a coherent, serviceable cabinet.',
    solution:
      'Photos show a live console session in front of the rack, the Huawei EchoLife GPON terminal, CAT6 patching with PoE and UPS, and a Proxmox 8.2.21 datacenter named astro with those four guests started.',
    source: 'Rack photographs and a Proxmox screenshot. Guest names are taken from the Proxmox UI.',
    technologies: ['Proxmox VE', 'Huawei GPON', 'PoE switching', 'UPS', 'Windows Server', 'MikroTik CHR'],
    cover: '/images/rack-console-session.jpeg',
    gallery: [
      '/images/rack-console-session.jpeg',
      '/images/rack-console-session-2.jpeg',
      '/images/huawei-gpon-ont.jpeg',
      '/images/patch-panel-poe-ups.jpeg',
      '/images/proxmox-virtual-environment.jpeg',
      '/images/mikrotik-switch-stack.jpeg',
    ],
  },
  {
    id: 'hardware-support',
    title: 'Hardware servicing and endpoint setup',
    category: 'IT support & hardware',
    summary:
      'Mini-PC teardown and memory/storage service, disk partition work, HP EliteDesk handling, and Cudy outdoor AP staging — the practical hardware side of IT support.',
    challenge:
      'Bring endpoints and outdoor wireless hardware from boxed kit to a working, maintained state.',
    solution:
      'Images show an opened compact PC with DIMM/storage guidance, DiskGenius partition work on a Dell display, an HP EliteDesk mini-PC, a Cudy AP3000 outdoor kit, and a powered MikroTik router on the bench.',
    source: 'Hardware photographs from the supplied folder. Tool names are those visible on screen or packaging.',
    technologies: ['HP EliteDesk', 'Dell display', 'DiskGenius', 'Cudy AP3000', 'MikroTik'],
    cover: '/images/minipc-hardware-service-02.jpeg',
    gallery: [
      '/images/minipc-hardware-service-01.jpeg',
      '/images/minipc-hardware-service-02.jpeg',
      '/images/disk-partition-recovery.jpeg',
      '/images/hp-elitedesk-minipc.jpeg',
      '/images/dell-display-post-setup.jpeg',
      '/images/cudy-ax3000-kit.jpeg',
      '/images/cudy-outdoor-ap.jpeg',
      '/images/mikrotik-router-leds.jpeg',
    ],
  },
]
