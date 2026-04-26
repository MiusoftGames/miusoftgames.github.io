import Image from 'next/image';
import styles from './GameCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faAndroid as faAndroidBrand } from '@fortawesome/free-brands-svg-icons';

const platformIcons = {
    web: { icon: faDesktop, label: 'PC / Web' },
    android: { icon: faAndroidBrand, label: 'Android' },
    ios: { icon: faGlobe, label: 'iOS' },
};

export default function GameCard({ game, onClick }) {
    return (
        <button className={styles.card} onClick={onClick} aria-label={`View ${game.title}`}>
            <div className={styles.imageWrap}>
                <Image src={game.image} alt={game.title} fill className={styles.image} />
                <div className={styles.platforms}>
                    {Object.keys(game.platforms).map((p) => (
                        <span key={p} className={styles.platformIcon} title={platformIcons[p]?.label}>
                            <FontAwesomeIcon icon={platformIcons[p]?.icon} />
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{game.title}</h3>
                {/* <div className={styles.tags}>
                    {game.tags.slice(0, 2).map((t) => (
                        <span key={t} className={styles.tag}>{t}</span>
                    ))}
                </div> */}
            </div>
        </button>
    );
}