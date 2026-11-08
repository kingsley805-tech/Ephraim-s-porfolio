import type { LucideIcon } from 'lucide-react'
import {
  Antenna,
  Cable,
  Headset,
  MonitorCog,
  Network,
  Radio,
  ShieldCheck,
  Wrench,
  Wifi,
  Workflow,
} from 'lucide-react'

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Network installation and configuration',
    description:
      'Plan and stand up office, campus, and community networks using routers, switches, and access points.',
    icon: Network,
  },
  {
    title: 'Wireless and outdoor radio links',
    description:
      'Install, align, and maintain AP, point-to-point, and point-to-multipoint links with Ubiquiti, Ruijie, and related radios.',
    icon: Antenna,
  },
  {
    title: 'LAN and WAN setup',
    description:
      'Build structured LAN connectivity, integrate WAN or satellite backhaul, and keep routing and switching stable.',
    icon: Cable,
  },
  {
    title: 'Network troubleshooting',
    description:
      'Diagnose throughput, latency, RF, cabling, and configuration issues with monitoring tools and on-site inspection.',
    icon: Radio,
  },
  {
    title: 'Computer repair and hardware maintenance',
    description:
      'Service desktops, laptops, and mini-PCs, including hardware replacement, imaging, and preventive maintenance.',
    icon: Wrench,
  },
  {
    title: 'Software installation and configuration',
    description:
      'Install and update operating systems and applications, then leave users with a working, documented setup.',
    icon: MonitorCog,
  },
  {
    title: 'IT infrastructure support',
    description:
      'Support racks, UPS, PoE switching, patch panels, NAS, and virtualization so core services stay online.',
    icon: Workflow,
  },
  {
    title: 'Hotspot, captive portal, and Wi-Fi access',
    description:
      'Deploy MikroTik-based hotspot services with authentication, bandwidth policy, and payment-backed voucher access.',
    icon: Wifi,
  },
  {
    title: 'Onsite and remote technical support',
    description:
      'Provide on-call coverage for staff and clients, from incident response to live production assistance.',
    icon: Headset,
  },
  {
    title: 'Site security systems support',
    description:
      'Maintain CCTV and biometric access systems as part of broader site IT and security infrastructure.',
    icon: ShieldCheck,
  },
]
