import styles from './Hero.module.css';
import Link from 'next/link';
import HeroImage from './HeroImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageCol}>
        <HeroImage />
      </div>
      <div className={styles.textCol}>
        <p className={styles.tagline}>Hey, Let's Play!</p>
        <h1 className={styles.name}>Miusoft</h1>
        <p className={styles.sub}>
          Indie Game Studio by <a href="https://kasunmiu.github.io/" target='_blank' className={styles.authorLink}>Kasun Miu</a>
        </p>
        <Link href="/games" className={styles.cta}>
          <FontAwesomeIcon icon={faGamepad} className={styles.ctaIcon} />
          Play Now
        </Link>
      </div>
    </section>
  );
}