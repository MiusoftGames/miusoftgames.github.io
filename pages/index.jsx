import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import styles from '../styles/Home.module.css';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Games from '../components/Games/Games';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Games id="games" />
      <Reviews id="reviews" />
      <About id="about" />
      <Contact id="contact" />
      {/* <div className={styles.bottomRow}>
      </div> */}
    </Layout>
  );
}
