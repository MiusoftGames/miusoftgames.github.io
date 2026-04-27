import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faXTwitter,
    faYoutube,
    faFacebook,
    faInstagram,
    faTiktok,
    faReddit,
} from '@fortawesome/free-brands-svg-icons';

const communityEmail = 'miusoft.games@gmail.com';
const serviceEmail = 'miusoft@gmail.com';

const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/miusoft', icon: faLinkedin },
    { label: 'YouTube', href: 'https://www.youtube.com/@miusoft', icon: faYoutube },
    { label: 'Instagram', href: 'https://www.instagram.com/miusoft.games/', icon: faInstagram },
    { label: 'Facebook', href: 'https://web.facebook.com/miusoft/', icon: faFacebook },
    { label: 'Tiktok', href: 'https://www.tiktok.com/@miusoftgames/', icon: faTiktok },
    { label: 'Reddit', href: 'https://www.reddit.com/user/MiusoftGames/', icon: faReddit },
    { label: 'X', href: 'https://x.com/MiusoftGames', icon: faXTwitter },
];

export default function Contact({ id }) {
    return (
        <section className={styles.section} id={id}>
            <div className={styles.header}>
                <div>
                    <span className={styles.sectionLabel}>Say hello</span>
                    <h2 className={styles.title}>
                        <FontAwesomeIcon icon={faPaperPlane} className={styles.titleIcon} />
                        Contact
                    </h2>
                </div>
            </div>
            <div className={styles.accentLine} />

            <div className={styles.grid}>

                {/* Card 1 — Community & Feedback */}
                <div className={styles.card}>
                    <span className={styles.cardLabel}>Community</span>
                    <div className={styles.cardAccent} />
                    <h3 className={styles.cardTitle}>Game Feedback</h3>
                    <p className={styles.text}>
                        Thoughts on a game? Found a bug? We'd love to hear from you.
                    </p>

                    <div className={styles.emailRow}>
                        <div className={styles.emailIconBox}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <a href={`mailto:${communityEmail}`} className={styles.emailText}>
                            {communityEmail}
                        </a>
                    </div>

                    <span className={styles.socialsLabel}>Follow</span>
                    <ul className={styles.socials}>
                        {socials.map((s) => (
                            <li key={s.label}>

                                <a href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialBtn}
                                    aria-label={s.label}
                                >
                                    <FontAwesomeIcon icon={s.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Card 2 — Services */}
                <div className={styles.card}>
                    <span className={styles.cardLabel}>Services</span>
                    <div className={styles.cardAccent} />
                    <h3 className={styles.cardTitle}>Make a Game</h3>
                    <p className={styles.text}>
                        Have an idea and need someone to build it? Let's talk about
                        bringing your game to life.
                    </p>

                    <div className={styles.emailRow}>
                        <p>Coming soon...</p>
                        {/* <div className={styles.emailIconBox}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                         <a href={`mailto:${serviceEmail}`} className={styles.emailText}>
                            {serviceEmail}
                        </a> */}
                    </div>
                </div>

            </div>
        </section>
    );
}