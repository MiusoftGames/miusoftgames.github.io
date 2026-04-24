import styles from './About.module.css';

export default function About({ id }) {
    return (
        <section className={styles.section} id={id}>
            <div className={styles.header}>
                <div>
                    <span className={styles.label}>Who we are</span>
                    <h2 className={styles.title}>About</h2>
                </div>
            </div>
            <div className={styles.accentLine} />
            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className={styles.cardLabel}>Studio</span>
                    <div className={styles.cardAccent} />
                    <h3 className={styles.cardTitle}>Miusoft</h3>
                    <p className={styles.text}>
                        An indie game studio exploring games as a medium for meaningful
                        communication. Always experimenting.
                    </p>
                </div>
                <div className={styles.card}>
                    <span className={styles.cardLabel}>Developer</span>
                    <div className={styles.cardAccent} />
                    <h3 className={styles.cardTitle}>Kasun Miuranga</h3>
                    <p className={styles.text}>
                        Solo developer behind Miusoft, handling everything from code and art to marketing. Learner at heart.
                    </p>
                </div>
            </div>
        </section>
    );
}