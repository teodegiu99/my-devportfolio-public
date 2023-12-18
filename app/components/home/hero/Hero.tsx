'use client'

import { StandardButton } from "../../buttons/StandardButton"
import { Reveal } from "../../utils/Reveal";
import { DotGrid } from "./DotGrid"
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`} id="/">
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Matteo<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Frontend Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
		  Tech-savvy entrepreneur passionate about innovation and positive change. Ready to contribute expertise to cutting-edge projects, always seeking new challenges.

          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
