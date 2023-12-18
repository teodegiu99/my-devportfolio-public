import { MyLinks } from "../../nav/components/MyLinks";
import { Reveal } from "../../utils/Reveal";
import { SectionHeader } from "../../utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats"
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
			Driven by a love for coding since a young age, I embarked on an extraordinary journey 
			that led me to the Apple Developer Academy &#63743;.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
			Fueling my ambition, I joined 42 ROMA LUISS, where I honed my development skills
			 in a challenging yet supportive environment.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
			Simultaneously, I co-founded Deckx, a revolutionary platform connecting companies with top-notch developers, where I've raised over 280K in funding. 
			Combining technical proficiency with an entrepreneurial spirit, I thrive on innovation and positive change.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
			Working with international teams enriched my professional experience and made me an open-minded, flexible professional capable of easily adapting to global work environments.
			Constantly seeking new challenges, I am ready to contribute my expertise to cutting-edge projects.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
