import { Helmet } from 'react-helmet-async'
import { profile } from '../data/profile'

export function Seo() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    telephone: profile.phone,
    email: profile.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Accra',
      addressCountry: 'GH',
    },
    sameAs: [profile.linkedin],
    knowsAbout: [
      'Computer Networking',
      'Network Engineering',
      'MikroTik RouterOS',
      'Ubiquiti airOS',
      'Starlink Satellite Deployment',
      'Ruijie Reyee Wi-Fi 6',
      'Proxmox VE Virtualization',
      'IT Technical Support',
      'Systems Administration',
      'Citrix VDI',
      'LAN/WAN Configuration',
      'Network Security',
    ],
  }

  return (
    <Helmet>
      <title>{profile.seo.title}</title>
      <meta name="description" content={profile.seo.description} />
      <meta
        name="keywords"
        content="Ephraim Addae Sam, Network Engineer, IT Support Specialist, Technical Support Engineer, Accra Ghana, Ubiquiti, MikroTik, Starlink, Cisco CCNA, Proxmox, Wi-Fi 6, Ruijie, IT Systems Administration"
      />
      <meta name="author" content={profile.name} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={profile.seo.title} />
      <meta property="og:description" content={profile.seo.description} />
      <meta property="og:image" content="/images/rack-console-session.jpeg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={profile.seo.title} />
      <meta name="twitter:description" content={profile.seo.description} />
      <meta name="twitter:image" content="/images/rack-console-session.jpeg" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

