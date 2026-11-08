export type ToolGroup = {
  title: string
  source: 'field' | 'cv'
  items: string[]
}

export const toolGroups: ToolGroup[] = [
  {
    title: 'Wireless and outdoor equipment',
    source: 'field',
    items: [
      'Ubiquiti LiteBeam / LiteAP',
      'Ubiquiti PowerBeam M5',
      'Ubiquiti NanoStation M5',
      'UISP / airOS',
      'Ruijie Reyee Wi-Fi 6 AP',
      'Cudy AX3000 outdoor AP',
      'Starlink user terminal',
    ],
  },
  {
    title: 'Routing, switching, and access',
    source: 'field',
    items: [
      'MikroTik RouterBOARD / RouterOS',
      'Managed and PoE switches',
      'D-Link switching and CAT6 patch panels',
      'Huawei GPON ONT',
      'AirFiber ISP operations platform',
    ],
  },
  {
    title: 'Compute, storage, and recovery',
    source: 'field',
    items: ['Proxmox VE', 'HP EliteDesk mini-PC', 'NAS', 'UPS systems', 'Disk imaging / partition tools'],
  },
  {
    title: 'Documented on the CV',
    source: 'cv',
    items: [
      'Windows / Windows Server',
      'Citrix VDI',
      'vMix',
      'FFmpeg',
      'Dante and NDI',
      'UniFi',
      'Network monitoring (NOC)',
    ],
  },
]
