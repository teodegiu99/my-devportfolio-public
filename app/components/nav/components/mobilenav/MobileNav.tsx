'use client'
import styles from "../../heading.module.scss";
import { MyLinks } from "../../components/MyLinks";
import {MobileNavMenu} from "./MobileNavMenu"

 const MobileNav: React.FC = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
     <MobileNavMenu />
    </header>
  );
};

export default MobileNav;

