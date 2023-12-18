import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "../../utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
			<span className="chip">Nextjs</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Tailwind</span>
			<span className="chip">C</span>
            <span className="chip">C++</span>
			<span className="chip">Bootstrap</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Swift</span>
            <span className="chip">Laravel</span>
            <span className="chip">PHP</span>
            <span className="chip">SCSS</span>
            <span className="chip">Shell</span>
            <span className="chip">Figma</span>
			<span className="chip">Wordpress</span>
            <span className="chip">MW3</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
