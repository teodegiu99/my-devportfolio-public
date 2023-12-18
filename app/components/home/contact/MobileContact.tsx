import { Reveal } from "../../utils/Reveal";
import MobileForm from "./MobileForm";
import styles from "./contact.module.scss";
import { SectionHeader } from "../../utils/SectionHeader";

export const MobileContact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <SectionHeader title="Contact me" dir="r" />
      <div className={styles.contactWrapper}>
      <div style={{ width: '100%' }}>
          <MobileForm />  
        </div>      
      </div>
    </section>
  );
};
