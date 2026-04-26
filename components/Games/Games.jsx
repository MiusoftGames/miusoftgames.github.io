import Image from 'next/image';
import Link from 'next/link';
import styles from './Games.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCaretRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const featured = [
    {
        image: "/images/games/prasino.png",
        alt: "Prásino",
        title: "Prásino",
        description: "You are the LAST HOPE in a TRASH-CURSED WORLD",
        link: "/games/prasino",
        external: false,
    },
    {
        image: "/images/games/GhostMaker.png",
        alt: "Ghost Maker",
        title: "Ghost Maker",
        description: "Merge spooky items to create your ghost!",
        link: "https://miusoft.itch.io/ghost-maker",
        external: true,
    },
    {
        image: "/images/games/thundercuffed.png",
        alt: "THUNDERCUFFED",
        title: "THUNDERCUFFED",
        description: "Overpowered and under control? Not really.",
        link: "https://miusoft.itch.io/thundercuffed",
        external: true,
    },
];

export default function Games({ id }) {
    return (
        <section className={styles.section} id={id}>
            <div className={styles.header}>
                <div>
                    <span className={styles.label}>Featured</span>
                    <h2 className={styles.title}>
                        <FontAwesomeIcon icon={faGamepad} className={styles.titleIcon} />
                        Games
                    </h2>
                </div>
            </div>
            <div className={styles.accentLine} />

            <div className={styles.grid}>
                {featured.map((game) => (

                    <a key={game.title}
                        href={game.link}
                        className={styles.card}
                        target={game.external ? '_blank' : undefined}
                        rel={game.external ? 'noopener noreferrer' : undefined}
                    >
                        <div className={styles.imageWrap}>
                            <Image
                                src={game.image}
                                alt={game.alt}
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.gameTitle}>{game.title}</h3>
                           {/*  <p className={styles.gameDesc}>{game.description}</p> */}
                        </div>
                    </a>
                ))}

                <Link href="/games" className={styles.viewAllCard}>
                    <div className={styles.viewAllIcon}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <span className={styles.viewAllText}>More Games</span>
                    <span className={styles.viewAllSub}>See the full collection</span>
                </Link>
            </div>
        </section>
    );
}