'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Globaal: spine progress, grain, reveals, nav scroll — uit (36).html */
export function PremiumChrome() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.getElementById('mainNav');
    const onScrollNav = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScrollNav, { passive: true });
    onScrollNav();

    const spineProgress = document.getElementById('spineProgress');
    const onScrollSpine = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (spineProgress) {
        spineProgress.style.height = `${Math.min(100, p)}%`;
        spineProgress.classList.toggle('visible', window.scrollY > 80);
      }
    };
    window.addEventListener('scroll', onScrollSpine, { passive: true });
    onScrollSpine();

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));

    window.setTimeout(() => {
      document.querySelectorAll('.hero .reveal').forEach((el) => {
        el.classList.add('visible');
      });
    }, 60);

    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    c.style.cssText =
      'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:998;opacity:.045;mix-blend-mode:overlay;will-change:opacity';
    document.body.appendChild(c);
    const ctx = c.getContext('2d');
    function grain() {
      if (!ctx) return;
      const d = ctx.createImageData(256, 256);
      for (let i = 0; i < d.data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        d.data[i] = d.data[i + 1] = d.data[i + 2] = v;
        d.data[i + 3] = 20;
      }
      ctx.putImageData(d, 0, 0);
    }
    grain();
    const grainIv = window.setInterval(grain, 80);

    return () => {
      window.removeEventListener('scroll', onScrollNav);
      window.removeEventListener('scroll', onScrollSpine);
      observer.disconnect();
      window.clearInterval(grainIv);
      c.remove();
    };
  }, [pathname]);

  return <div className="spine-progress" id="spineProgress" />;
}

/** Hero spine fade-in + background image `loaded` (shared with homepage / aanpak). */
function attachHeroPhotoShell(): () => void {
  const heroSpine = document.getElementById('heroSpine');
  const spineTimer = window.setTimeout(() => heroSpine?.classList.add('on'), 500);

  const heroImg = document.getElementById('heroImg') as HTMLImageElement | null;
  const onHeroImgLoad = () => heroImg?.classList.add('loaded');
  if (heroImg) {
    if (heroImg.complete) onHeroImgLoad();
    else heroImg.addEventListener('load', onHeroImgLoad);
  }

  return () => {
    window.clearTimeout(spineTimer);
    heroSpine?.classList.remove('on');
    if (heroImg) {
      heroImg.removeEventListener('load', onHeroImgLoad);
      heroImg.classList.remove('loaded');
    }
  };
}

/** Aanpak: zelfde hero-foto shell als homepage (geen signature). */
export function AanpakHeroEffects() {
  useEffect(() => {
    return attachHeroPhotoShell();
  }, []);

  return null;
}

/** Homepage: hero spine, hero img load, signature animatie */
export function HomeHeroEffects() {
  useEffect(() => {
    const detachShell = attachHeroPhotoShell();

    const lines = document.querySelectorAll('.sig-line');
    const labels = document.querySelectorAll('.sig-label');
    const dot = document.getElementById('sigDot');
    const vline = document.getElementById('sigVline');
    let ran = false;

    function initSignature() {
      if (ran || !document.getElementById('heroSig')) return;
      ran = true;
      window.setTimeout(() => {
        labels.forEach((l) => l.classList.add('on'));
      }, 800);
      window.setTimeout(() => {
        lines.forEach((l, i) => {
          window.setTimeout(() => l.classList.add('on'), i * 180);
        });
      }, 1200);
      window.setTimeout(() => vline?.classList.add('on'), 2400);
      window.setTimeout(() => dot?.classList.add('on'), 2800);
    }

    const img = document.getElementById('heroImg') as HTMLImageElement | null;
    if (img?.complete) initSignature();
    else {
      img?.addEventListener('load', initSignature);
      window.setTimeout(initSignature, 1200);
    }

    return () => {
      detachShell();
      img?.removeEventListener('load', initSignature);
    };
  }, []);

  return null;
}
