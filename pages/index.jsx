import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import styles from '../styles/Home.module.css';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Games from '../components/Games/Games';
import Reviews from '../components/Reviews/Reviews';

import SEO from '../components/SEO/SEO'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Miusoft',
  url: 'https://miusoftgames.github.io',
  description: 'An indie game studio exploring games as a medium for meaningful communication.',
}

export default function Home() {
  return (
    <>
      <SEO
        title="Miusoft"
        description="An indie game studio exploring games as a medium for meaningful communication."
        canonical="https://miusoftgames.github.io"
        jsonLd={jsonLd}
      />
      <Layout>
        <Hero />
        <Games id="games" />
        <Reviews id="reviews" />
        <About id="about" />
        <Contact id="contact" />
      </Layout>
    </>
  );
}
