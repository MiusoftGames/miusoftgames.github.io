import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      glow.remove();
    };
  }, []);

  return <Component {...pageProps} />;
}