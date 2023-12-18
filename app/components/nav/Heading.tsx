'use client'
import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import Link from "next/link";

 const Heading: React.FC = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <Link href="/resume" target='blank'>
      <OutlineButton>
        My resume
      </OutlineButton>
      </Link>
    </header>
  );
};

export default Heading;