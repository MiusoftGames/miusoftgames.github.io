import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function About({ id }) {
    return (
        <section className={styles.section} id={id}>
            <div className={styles.header}>
                <div>
                    <span className={styles.label}>Who we are</span>
                    <h2 className={styles.title}>
                        <FontAwesomeIcon icon={faLightbulb} className={styles.titleIcon} />
                        About
                    </h2>
                </div>
            </div>
            <div className={styles.accentLine} />
            <div className={styles.grid}>

                {/* Studio card */}
                <div className={styles.card}>
                    <div className={styles.imagePanel}>
                        <img src="/images/about/miusoft.png" alt="Miusoft" className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContent}>
                        <span className={styles.cardLabel}>Studio</span>
                        <div className={styles.cardAccent} />
                        <h3 className={styles.cardTitle}>Miusoft</h3>
                        <p className={styles.text}>
                            An indie game studio exploring games as a medium for meaningful
                            communication. Always experimenting.
                        </p>
                    </div>
                </div>

                {/* Developer card — linked */}

                <a href="https://kasunmiu.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.card} ${styles.cardLink}`}
                >
                    <div className={styles.imagePanel}>
                        <img src="/images/about/kasunmiu.png" alt="Kasun Miuranga" className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContent}>
                        <span className={styles.cardLabel}>Developer</span>
                        <div className={styles.cardAccent} />
                        <h3 className={styles.cardTitle}>Kasun Miuranga</h3>
                        <p className={styles.text}>
                            Solo developer behind Miusoft, handling everything from code and art to marketing. Learner at heart.
                        </p>
                        <span className={styles.externalIcon}>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </span>
                    </div>
                </a>

            </div>
        </section>
    );
}