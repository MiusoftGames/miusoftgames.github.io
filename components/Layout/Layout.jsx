import styles from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';

export const metadata = {
  title: {
    default: 'Miusoft',
    template: '%s | Miusoft',
  },
  description: 'An indie game studio exploring games as a medium for meaningful communication.',
  metadataBase: new URL('https://miusoftgames.github.io'),
  openGraph: {
    siteName: 'Miusoft',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
