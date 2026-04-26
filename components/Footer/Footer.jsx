import styles from './Footer.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHeart, faGamepad, faUser, faEnvelope, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faXTwitter,
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

// ─── Edit footer columns here ──────────────────
const columns = [
  {
    title: 'Sitemap',
    links: [
      { label: 'Games', href: '/#games', icon: faGamepad },
      { label: 'About', href: '/#about', icon: faUser },
      { label: 'Contact', href: '/#contact', icon: faEnvelope },
      { label: 'Privacy', href: '/privacy-policy', icon: faScaleBalanced },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'Email', href: 'mailto:miusoft.games@gmail.com', icon: faEnvelope },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/miusoft', icon: faLinkedin },
      { label: 'YouTube', href: 'https://www.youtube.com/@miusoft', icon: faYoutube },
      { label: 'Instagram', href: 'https://www.instagram.com/miusoft.games/', icon: faInstagram },
      { label: 'Facebook', href: 'https://web.facebook.com/miusoft/', icon: faFacebook },
      { label: 'Tiktok', href: 'https://www.tiktok.com/@miusoftgames/', icon: faTiktok },
      { label: 'X', href: 'https://x.com/MiusoftGames', icon: faXTwitter },
    ],
  },
];
// ───────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Top: brand + link columns */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <Image
                src="/logo.svg"
                alt="Miusoft"
                width={36}
                height={36}
                priority
              />
              <span className={styles.logoName}>Miusoft</span>
            </div>

            <p className={styles.tagline}>
              An indie game studio exploring games as a medium for meaningful communication.
            </p>
          </div>

          <div className={styles.cols}>
            {columns.map((col) => (
              <div key={col.title} className={styles.col}>
                <span className={styles.colTitle}>{col.title}</span>
                {col.links.map((link) => (

                  <a key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={styles.colLink}
                  >
                    <FontAwesomeIcon icon={link.icon} className={styles.linkIcon} />
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom: copyright + badge */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            <span className={styles.accentDot}>
              <FontAwesomeIcon icon={faCopyright} />
            </span>{' '}
            {year} Kasun Miuranga. All rights reserved.
          </p>
          <span className={styles.badge}>
            Made with <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>

      </div>
    </footer>
  );
}