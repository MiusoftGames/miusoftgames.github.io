import Image from 'next/image';
import Link from 'next/link';
import styles from './Games.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCaretRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const featured = [
    {
        image: "/images/games/prasino.png",
        alt: "Prásino",
        title: "Prásino",
        id:"prasino"
    },
    {
        image: "/images/games/GhostMaker.png",
        alt: "Ghost Maker",
        title: "Ghost Maker",
        id:"ghost-maker"
    },
    {
        image: "/images/games/thundercuffed.png",
        alt: "THUNDERCUFFED",
        title: "THUNDERCUFFED",
        id:"thundercuffed"
    },
];

export default function Games({ id }) {
    const router = useRouter();

    const handleCardClick = (game) => {
        router.push(`/games?open=${game.id}`);
    };

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
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleCardClick(game); }}
                        className={styles.card}
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