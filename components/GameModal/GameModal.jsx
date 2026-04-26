import { useEffect } from 'react';
import Image from 'next/image';
import styles from './GameModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

const platformMeta = {
    web: { icon: faDesktop, label: 'Play on PC / Web', short: 'PC / Web' },
    android: { icon: faAndroid, label: 'Get on Android', short: 'Android' },
    ios: { icon: faApple, label: 'Get on iOS', short: 'iOS' },
};

export default function GameModal({ game, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className={styles.imageWrap}>
                    <Image src={game.image} alt={game.title} fill className={styles.image} />
                </div>

                <div className={styles.body}>
                    <div className={styles.meta}>
                        <div className={styles.tags}>
                            {game.tags.map((t) => (
                                <span key={t} className={styles.tag}>{t}</span>
                            ))}
                        </div>
                        <span className={styles.year}>
                            {new Date(game.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                year: 'numeric',
                            })}
                        </span>
                    </div>

                    <h2 className={styles.title}>{game.title}</h2>
                    <p className={styles.description}>{game.description}</p>

                    <div className={styles.platformLinks}>
                        {Object.entries(game.platforms).map(([key, url]) => {
                            const meta = platformMeta[key];
                            return (

                                <a key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.platformBtn}
                                >
                                    <FontAwesomeIcon icon={meta.icon} />
                                    {meta.label}
                                </a>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}