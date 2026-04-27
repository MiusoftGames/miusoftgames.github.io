import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faUser, faHandshake, faQuoteLeft, faLightbulb, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// ─── Edit nav links here ───────────────────────
const navLinks = [
  { label: 'Games', href: '/#games', target: '', icon: faGamepad },
  { label: 'Reviews', href: '/#reviews', target: '', icon: faQuoteLeft },
  { label: 'About', href: '/#about', target: '', icon: faLightbulb },
  { label: 'Contact', href: '/#contact', target: '', icon: faPaperPlane },
];

const ctaLabel = 'Play Now';
const ctaHref = '/games';
// ───────────────────────────────────────────────

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
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
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className={styles.nav}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  <FontAwesomeIcon icon={link.icon} className={styles.navIcon} /> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a href={ctaHref} className={styles.cta}>
          <FontAwesomeIcon icon={faGamepad} className={styles.ctaIcon} /> {ctaLabel}
        </a>

        {/* Mobile burger */}
        <button
          className={styles.burger}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={styles.burgerLine}
            style={open ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}}
          />
          <span
            className={styles.burgerLine}
            style={open ? { opacity: 0 } : {}}
          />
          <span
            className={styles.burgerLine}
            style={open ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav className={`${styles.mobileMenu} ${open ? styles.open : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.target}
            rel="noopener noreferrer"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={link.icon} className={styles.navIcon} /> {link.label}
          </a>
        ))}
        {/* <a href={ctaHref} className={styles.mobileLink} onClick={() => setOpen(false)}>
          {ctaLabel}
        </a> */}
      </nav>
    </header>
  );
}
