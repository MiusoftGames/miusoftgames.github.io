import { useState, useEffect, useCallback } from 'react';
import styles from './Reviews.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import reviews from '/data/reviews';
import { games } from '/data/games';
import 'flag-icons/css/flag-icons.min.css';

// One color per game id — add more as needed
const GAME_COLORS = {
    "ghost-maker": "#fbbf24",  // warm amber
    "prasino": "#86efac",  // soft green
};

function getGameColor(gameId) {
    return GAME_COLORS[gameId] ?? "var(--color-accent)";
}

function getGame(gameId) {
    return games.find(g => g.id === gameId) ?? null;
}

function countryFlag(code) {
    return code
        .toUpperCase()
        .split('')
        .map(c => String.fromCodePoint(0x1F1E6 - 65 + c.charCodeAt(0)))
        .join('');
}

const INTERVAL = 5000;

export default function Reviews({ id }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState('next');
    const [animating, setAnimating] = useState(false);
    const [paused, setPaused] = useState(false);
    const total = reviews.length;

    const goTo = useCallback((index, dir) => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setCurrent(index);
            setAnimating(false);
        }, 300);
    }, [animating]);

    const next = useCallback(() => goTo((current + 1) % total, 'next'), [current, total, goTo]);
    const prev = useCallback(() => goTo((current - 1 + total) % total, 'prev'), [current, total, goTo]);

    /* useEffect(() => {
        if (paused) return;
        const t = setInterval(next, INTERVAL);
        return () => clearInterval(t);
    }, [paused, next]); */

    useEffect(() => {
        return;
    }, []);

    const review = reviews[current];
    const color = getGameColor(review.gameId);
    const game = getGame(review.gameId);

    // Pick the best platform link (web first, then android)
    const gameLink = game?.platforms?.web ?? game?.platforms?.android ?? null;

    const cardClass = [
        styles.card,
        animating
            ? direction === 'next' ? styles.exitLeft : styles.exitRight
            : styles.enter,
    ].join(' ');

    return (
        <section className={styles.section} id={id}>
            <div className={styles.header}>
                <div>
                    <span className={styles.label}>Player voices</span>
                    <h2 className={styles.title}>
                        <FontAwesomeIcon icon={faQuoteLeft} className={styles.titleIcon} />
                        Reviews
                    </h2>
                </div>
            </div>
            <div className={styles.accentLine} />

            <div
                className={styles.carousel}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div className={cardClass} style={{ '--game-color': color }}>

                    {/* ── Left: review content ── */}
                    <div className={styles.content}>
                        <span className={styles.bigQuote}>&ldquo;</span>
                        <p className={styles.quote}>{review.quote}</p>
                        <div className={styles.meta}>
                            {review.country && (
                                <span
                                    className={`fi fi-${review.country.toLowerCase()} ${styles.flag}`}
                                />
                            )}
                            <span className={styles.name}>{review.name}</span>
                            <span className={styles.divider}>·</span>
                            <span className={styles.gameName} style={{ color }}>{game?.title ?? review.gameId}</span>
                        </div>
                    </div>

                    {/* ── Right: game image panel ── */}
                    {game && (
                        <div className={styles.imagePanel}>
                            <img
                                src={game.image}
                                alt={game.title}
                                className={styles.gameImage}
                            />
                            {/* Corner link icon */}
                            {gameLink && (
                                <a
                                    href={gameLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.gameLink}
                                    aria-label={`Visit ${game.title}`}
                                    style={{ '--game-color': color }}
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {/* Controls */}
                <div className={styles.controls}>
                    <button className={styles.btn} onClick={prev} aria-label="Previous review">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <div className={styles.dots}>
                        {reviews.map((r, i) => {
                            const c = getGameColor(r.gameId);
                            return (
                                <button
                                    key={i}
                                    className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                                    style={i === current ? { background: c } : {}}
                                    onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                                    aria-label={`Review ${i + 1}`}
                                />
                            );
                        })}
                    </div>

                    <button className={styles.btn} onClick={next} aria-label="Next review">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}