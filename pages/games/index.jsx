import { useState, useMemo, useRef, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import styles from '/styles/Games.module.css';
import { games, allTags } from '/data/games';
import GameModal from '../../components/GameModal/GameModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark, faChevronDown, faTag } from '@fortawesome/free-solid-svg-icons';
import GameCard from '../../components/GameCard/GameCard';
import { useRouter } from 'next/router';

const platforms = [
    { key: 'web', label: 'PC / Web' },
    { key: 'android', label: 'Android' },
    { key: 'ios', label: 'iOS' },
];

export default function GamesPage() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [activeTags, setActiveTags] = useState([]);
    const [activePlatform, setActivePlatform] = useState(null);
    const [selected, setSelected] = useState(null);
    const [tagsOpen, setTagsOpen] = useState(false);
    const tagsRef = useRef(null);

    useEffect(() => {
        if (!router.isReady) return;
        const { open } = router.query;
        if (open) {
            const match = games.find((g) => g.id === open);
            if (match) setSelected(match);
            router.replace('/games', undefined, { shallow: true });
        }
    }, [router.isReady, router.query]);

    const toggleTag = (tag) => {
        setActiveTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    // Close tags dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (tagsRef.current && !tagsRef.current.contains(e.target)) {
                setTagsOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const filtered = useMemo(() => {
        return games.filter((g) => {
            const matchSearch = g.title.toLowerCase().includes(search.toLowerCase());
            const matchTags = activeTags.every((t) => g.tags.includes(t));
            const matchPlatform = activePlatform ? !!g.platforms[activePlatform] : true;
            return matchSearch && matchTags && matchPlatform;
        });
    }, [search, activeTags, activePlatform]);

    const clearFilters = () => {
        setSearch('');
        setActiveTags([]);
        setActivePlatform(null);
        setTagsOpen(false);
    };

    const hasFilters = search || activeTags.length > 0 || activePlatform;

    return (
        <Layout>
            <Head><title>Games</title></Head>
            <main className={styles.page}>
                <div className={styles.pageHeader}>
                    <div>
                        <span className={styles.label}>Play</span>
                        <h1 className={styles.title}>Games</h1>
                    </div>
                </div>
                <div className={styles.accentLine} />

                <div className={styles.filters}>
                    {/* Row 1: Search */}
                    <div className={styles.searchWrap}>
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search games..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>

                    {/* Row 2: Platform pills + Tags dropdown + Clear */}
                    <div className={styles.filterStrip}>
                        {/* Platform */}
                        {platforms.map((p) => (
                            <button
                                key={p.key}
                                className={`${styles.pill} ${activePlatform === p.key ? styles.pillActive : ''}`}
                                onClick={() => setActivePlatform(activePlatform === p.key ? null : p.key)}
                            >
                                {p.label}
                            </button>
                        ))}

                        <div className={styles.stripDivider} />

                        {/* Tags dropdown */}
                        <div className={styles.tagsDropdown} ref={tagsRef}>
                            <button
                                className={`${styles.tagsToggle} ${activeTags.length > 0 ? styles.tagsToggleActive : ''}`}
                                onClick={() => setTagsOpen((o) => !o)}
                            >
                                <FontAwesomeIcon icon={faTag} style={{ fontSize: '10px', opacity: 0.6 }} />
                                Tags
                                {activeTags.length > 0 && (
                                    <span className={styles.tagsBadge}>{activeTags.length}</span>
                                )}
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`${styles.tagsChevron} ${tagsOpen ? styles.tagsChevronOpen : ''}`}
                                />
                            </button>

                            {tagsOpen && (
                                <div className={styles.tagsMenu}>
                                    {allTags.map((tag) => (
                                        <button
                                            key={tag}
                                            className={`${styles.pill} ${activeTags.includes(tag) ? styles.pillActive : ''}`}
                                            onClick={() => toggleTag(tag)}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Clear */}
                        {hasFilters && (
                            <button className={styles.clearBtn} onClick={clearFilters}>
                                <FontAwesomeIcon icon={faXmark} /> Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Count */}
                <p className={styles.count}>
                    {filtered.length} {filtered.length === 1 ? 'game' : 'games'}
                </p>

                {/* Grid */}
                {filtered.length > 0 ? (
                    <div className={styles.grid}>
                        {filtered.map((game) => (
                            <GameCard key={game.id} game={game} onClick={() => setSelected(game)} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <p>No games match your filters.</p>
                        <button className={styles.clearBtn} onClick={clearFilters}>Clear filters</button>
                    </div>
                )}
            </main>

            {selected && <GameModal game={selected} onClose={() => setSelected(null)} />}
        </Layout>
    );
}