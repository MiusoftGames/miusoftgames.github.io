import styles from './Hero.module.css';
import Link from 'next/link';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageCol}>
        <HeroImage />
      </div>
      <div className={styles.textCol}>
        <p className={styles.tagline}>Hey, Let's Play!</p>
        <h1 className={styles.name}>
          Miu<span className={styles.accent}>soft</span>
        </h1>
        <p className={styles.sub}>Indie Game Studio</p>
        <Link href="/games" className={styles.cta}>
          Play Now
        </Link>
      </div>
    </section>
  );
}