import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import styles from '../styles/Home.module.css';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Games from '../components/Games/Games';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Games />
      <About />
      <Contact />
      {/* <div className={styles.bottomRow}>
      </div> */}
    </Layout>
  );
}
