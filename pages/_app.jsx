import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);

    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let started = false;
    let rafId;

    const move = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!started) {
        currentX = targetX;
        currentY = targetY;
        started = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    function animate() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      glow.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(rafId);
      glow.remove();
    };
  }, []);

  return (
    <>
      <Head>
        {/* fallback defaults — individual pages override these */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="MiuSoft Games" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}