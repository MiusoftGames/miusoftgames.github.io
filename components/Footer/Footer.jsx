import styles from './Footer.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';

// ─── Edit footer columns here ──────────────────
const columns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Services', href: 'https://services.yoogameart.com' },
      { label: 'Assets', href: 'https://assets.yoogameart.com' },
      { label: 'Learn', href: 'https://learn.yoogameart.com' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Email', href: 'mailto:yoogameart@gmail.com' },
      { label: 'Itch.io', href: 'https://yoogameart.itch.io/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/yoogameart' },
      { label: 'X', href: 'https://x.com/YooGameArt' },
      { label: 'BlueSky', href: 'https://bsky.app/profile/yoogameart.bsky.social' },
      { label: 'YouTube', href: 'https://www.youtube.com/@YooGameArt' },
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
              <span className={styles.logoName}>
                Miusoft
              </span>
            </div>

            <p className={styles.tagline}>
              Collection of services focused on game development, supporting brands, creators, and developers.
            </p>
          </div>

          <div className={styles.cols}>
            {columns.map((col) => (
              <div key={col.title} className={styles.col}>
                <span className={styles.colTitle}>{col.title}</span>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={styles.colLink}
                  >
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
            <span className={styles.accentDot}>  <FontAwesomeIcon icon={faCopyright} /></span> {year} Kasun Miuranga.
            All rights reserved.
          </p>
          <span className={styles.badge}>Made with <FontAwesomeIcon icon={faHeart} /></span>
        </div>

      </div>
    </footer>
  );
}
