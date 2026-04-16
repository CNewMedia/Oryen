import { Fragment } from 'react';

import { HeroSignature } from '@/components/premium/hero-signature';

import type { HomeContent } from '@/types/home-content';
import type { HomeImageUrls } from '@/lib/sanity/load-homepage';

import { DiagLine } from './diag-line';

/** Split op `<br/>` of newline in copy (JSON/Sanity) en render echte `<br />`. */
function RichBrLines({ text }: { text: string }) {
  const normalized = text.replace(/&lt;br\s*\/?&gt;/gi, '<br>');
  const parts = normalized.split(/<br\s*\/?>|\r?\n/i);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 ? <br /> : null}
          {part}
        </Fragment>
      ))}
    </>
  );
}

type Props = {
  home: HomeContent;
  images: HomeImageUrls;
  contactEmail: string;
};

export function HomePageView({ home, images, contactEmail }: Props) {
  const t = home;
  const steps = t.approach.steps;
  const minis = t.proof.minis;
  const forItems = t.selection.forItems;
  const notFor = t.selection.notFor;

  const mailQuery = `subject=${encodeURIComponent('Reality Check')}`;
  const mailto = `mailto:${contactEmail}?${mailQuery}`;

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img id="heroImg" src={images.hero} alt="" />
        </div>
        <div className="hero-spine" id="heroSpine" />
        <HeroSignature />
        <div className="hero-body">
          <div className="hero-spacer" />
          <div className="hero-text">
            <h1 className="hero-hl reveal">
              <span>
                {t.hero.titleLine1}
                <br />
                {t.hero.titleLine2}
              </span>
              <em
                dangerouslySetInnerHTML={{
                  __html: t.hero.titleEm.replace(/\n/g, '<br />'),
                }}
              />
            </h1>
            <p className="hero-claim reveal delay-1">{t.hero.claim}</p>
            <p className="hero-sub reveal delay-2">{t.hero.sub}</p>
            <div className="hero-actions reveal delay-3">
              <a className="btn-primary" href="#contact">
                <span>{t.hero.primaryCta}</span>
                <span className="btn-arrow" />
              </a>
              <a className="btn-ghost" href="#aanpak">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="s-stelling has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{t.diagnosis.spine}</span>
          </div>
          <div className="spine-content">
            <h2 className="stelling-hl reveal delay-1">
              <em
                dangerouslySetInnerHTML={{
                  __html: t.diagnosis.headlineEm.replace(/\n/g, '<br />'),
                }}
              />
            </h2>
            <DiagLine className="diag-line reveal delay-1" />
            <div className="stelling-grid">
              <div className="reveal delay-2">
                <p className="stelling-p">{t.diagnosis.p1}</p>
                <p className="stelling-focus">{t.diagnosis.focus}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-aanpak has-spine spine-dark" id="aanpak">
        <div className="spine-grid aanpak-head-wrap">
          <div className="spine-label spine-label-dark">
            <span>{t.approach.spine}</span>
          </div>
          <div className="spine-content aanpak-head">
            <h2 className="aanpak-hl reveal">
              {t.approach.headline}
              <br />
              <em>{t.approach.headlineEm}</em>
            </h2>
            <p className="aanpak-note reveal delay-1">{t.approach.note1}</p>
            <p className="aanpak-intro-hl reveal delay-2">{t.approach.introHl}</p>
          </div>
        </div>
        <div className="aanpak-steps">
          <div className="aanpak-spacer" />
          {steps.map((step, i) => (
            <div key={step.n} className={`step reveal ${i > 0 ? `delay-${Math.min(i, 3)}` : ''}`}>
              <span className="step-n">
                {t.approach.stepPrefix} {step.n}
              </span>
              <span className="step-name">{step.name}</span>
              <p className="step-q">{step.q}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="s-bewijs has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{t.proof.spine}</span>
          </div>
          <div className="spine-content" style={{ paddingBottom: 'clamp(5vh,7vh,64px)' }}>
            <h2 className="bewijs-hl reveal">
              {t.proof.headline}
              <br />
              <em>{t.proof.headlineEm}</em>
            </h2>
          </div>
        </div>
        <div className="feat reveal" style={{ marginLeft: 0 }}>
          <div className="feat-img min-h-[68vh]">
            <img src={images.featured} alt="" />
          </div>
          <div className="feat-body">
            <span className="feat-ghost">01</span>
            <div className="feat-client">{t.proof.featured.client}</div>
            <h3
              className="feat-hl"
              dangerouslySetInnerHTML={{
                __html: t.proof.featured.title.replace(/\n/g, '<br />'),
              }}
            />
            <div className="feat-dl">
              <div>
                <p className="feat-v">{t.proof.featured.line1}</p>
              </div>
              <div>
                <p className="feat-v">{t.proof.featured.line2}</p>
              </div>
              <div>
                <p className="feat-v">{t.proof.featured.line3}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="minis">
          <div className="minis-spacer" />
          {minis.map((m, i) => (
            <div key={m.client} className={`mini reveal ${i > 0 ? `delay-${i}` : ''}`}>
              <span className="mini-ghost">{String(i + 2).padStart(2, '0')}</span>
              <div className="mini-client">{m.client}</div>
              <p className="mini-subtitle">{m.subtitle}</p>
              <p className="mini-body">{m.body}</p>
              <p className="mini-result">{m.result}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="s-selectie has-spine spine-dark">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{t.selection.spine}</span>
          </div>
          <div className="spine-content">
            <div className="selectie-grid">
              <div>
                <h2 className="selectie-hl reveal">
                  {t.selection.headline}
                  <br />
                  <em
                    dangerouslySetInnerHTML={{
                      __html: t.selection.headlineEm.replace(/\n/g, '<br/>'),
                    }}
                  />
                </h2>
                <div className="selectie-list reveal delay-1">
                  {forItems.map((item) => (
                    <p key={item.slice(0, 24)} className="sel-item">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="reveal delay-2">
                <span className="niet-lbl">{t.selection.notForLabel}</span>
                <ul className="niet-list">
                  {notFor.map((item) => (
                    <li key={item.slice(0, 24)}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-over has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{t.about.spine}</span>
          </div>
          <div className="spine-content">
            <div className="over-grid">
              <div>
                <h2 className="over-hl reveal">
                  {t.about.headline}
                  <br />
                  <em
                    dangerouslySetInnerHTML={{
                      __html: t.about.headlineEm.replace(/\n/g, '<br/>'),
                    }}
                  />
                </h2>
                <p className="over-stmt reveal delay-1">{t.about.statement}</p>
                <p className="over-creds reveal delay-2">{t.about.creds}</p>
                <div className="over-sig reveal delay-2">
                  <span className="over-sig-line" />
                  <span className="over-sig-txt">{t.about.signature}</span>
                </div>
              </div>
              <div className="reveal delay-1">
                <div className="over-portrait">
                  <img src={images.portrait} alt="" />
                </div>
                <p className="over-quote">{t.about.quote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-offer has-spine spine-dark" id="contact">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{t.offer.spine}</span>
          </div>
          <div className="spine-content">
            <div className="offer-grid">
              <div>
                <h2 className="offer-name reveal">{t.offer.name}</h2>
                <p className="offer-body reveal delay-1">{t.offer.body}</p>
                <span className="offer-line reveal delay-2" />
                <a className="offer-btn reveal delay-3" href={mailto}>
                  <span>{t.offer.ctaPrimary}</span>
                  <span
                    className="btn-arrow"
                    style={{ background: 'var(--amber)' }}
                  />
                </a>
              </div>
              <div className="reveal delay-1">
                <h3 className="offer-r-hl">
                  <span>
                    <RichBrLines text={t.offer.secondaryHlBeforeEm} />
                  </span>
                  <br />
                  <em>
                    <RichBrLines text={t.offer.secondaryHlEm} />
                  </em>
                </h3>
                <p className="offer-r-body">{t.offer.secondaryBody}</p>
                <p className="offer-note">{t.offer.secondaryNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
