export type VideoItem = {
  id: string
  src: string
  poster: string
  title: string
  description: string
}

export const videos: VideoItem[] = [
  {
    id: 'field-01',
    src: '/videos/field-01.mp4',
    poster: '/images/starlink-dashboard.jpeg',
    title: 'Field recording — session 01',
    description:
      'On-site recording supplied alongside the Starlink monitoring screenshots from the same asset batch. Playback is the source of truth for the clip itself.',
  },
  {
    id: 'field-02',
    src: '/videos/field-02.mp4',
    poster: '/images/starlink-satellite-view.jpeg',
    title: 'Field recording — session 02',
    description:
      'Second clip from the same delivery batch as the Starlink dashboard stills.',
  },
  {
    id: 'rooftop-ap',
    src: '/videos/rooftop-ap-install.mp4',
    poster: '/images/rooftop-ap-install.jpeg',
    title: 'Rooftop access-point installation',
    description:
      'Video captured in the same session as the rooftop spherical AP photographs and Cat cable box. An identical duplicate file from the source folder is not repeated here.',
  },
  {
    id: 'field-03',
    src: '/videos/field-03.mp4',
    poster: '/images/starlink-dish-mount.jpeg',
    title: 'Field recording — session 03',
    description:
      'Short clip delivered next to the Starlink dish-mount and speed-test stills.',
  },
  {
    id: 'field-04',
    src: '/videos/field-04.mp4',
    poster: '/images/starlink-speed-test.jpeg',
    title: 'Field recording — session 04',
    description:
      'Companion clip from the Starlink speed-test and dish-mount still set.',
  },
  {
    id: 'rack',
    src: '/videos/rack-session.mp4',
    poster: '/images/rack-console-session.jpeg',
    title: 'Rack and console session',
    description:
      'Recording timestamped with the rack photographs and Huawei GPON ONT close-up.',
  },
  {
    id: 'outdoor-radio',
    src: '/videos/outdoor-radio.mp4',
    poster: '/images/outdoor-radio-mast.jpeg',
    title: 'Outdoor radio mast',
    description:
      'Clip grouped with the outdoor dish and omni-radio mast photographs.',
  },
  {
    id: 'wireless-install',
    src: '/videos/wireless-install.mp4',
    poster: '/images/ruijie-wifi6-close.jpeg',
    title: 'Wireless installation session',
    description:
      'Longer field recording grouped with the Ruijie Wi-Fi 6 pole and ceiling AP photographs.',
  },
]
