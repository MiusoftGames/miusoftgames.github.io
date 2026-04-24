import styles from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';

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
