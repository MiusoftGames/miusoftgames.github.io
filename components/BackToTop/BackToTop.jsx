import { useState, useEffect } from 'react';
import styles from './BackToTop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            className={`${styles.btn} ${visible ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <FontAwesomeIcon icon={faCaretUp} />
        </button>
    );
}