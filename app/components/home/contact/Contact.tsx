import { Reveal } from "../../utils/Reveal";
import TerminalContact from "./TerminalContact";
import styles from "./contact.module.scss";
import { SectionHeader } from "../../utils/SectionHeader";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <SectionHeader title="Contact me" dir="r" />
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <TerminalContact />
        </Reveal>
        
      </div>
    </section>
  );
};
