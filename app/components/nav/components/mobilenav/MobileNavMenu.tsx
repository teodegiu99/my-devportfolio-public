'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "./mobilenavmenu.module.scss"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Link from "next/link";

// export const MobileNavMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <>
//         <motion.button
//           whileHover={{ rotate: "180deg" }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsOpen(true)}
//           className={styles.menuIcon}
//         >
//           <FiMenu />
//         </motion.button>
//       </>
//       <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
//     </>
//   );
// };

// const Nav = ({
//   isOpen,
//   setIsOpen,
// }: {
//   isOpen: boolean;
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
// }) => {
//   return (
//     <motion.nav
//       className={styles.bg}
//       animate={isOpen ? "open" : "closed"}
//       variants={navVariants}
//       initial="closed"
//     >
//       <motion.button
//         className={styles.textes}
//         whileHover={{ rotate: "180deg" }}
//         onClick={() => setIsOpen(false)}
//         whileTap={{ scale: 0.9 }}
//       >
//         <FiX />
//       </motion.button>
//       <motion.div
//         variants={linkWrapperVariants}
//         className={styles.linkList}
//       >
//         <NavLink text="#about" />
//         <NavLink text="#experience" />
//         <NavLink text="#education" />
//         <NavLink text="#project" />
//         <NavLink text="#contact" />
//       </motion.div>
//     </motion.nav>
//   );
// };

// const NavLink = ({ text }: { text: string }) => {
//   return (
//     <motion.a
//       className={styles.navLinks}
//       variants={navLinkVariants}
//       transition={{
//         type: "spring",
//         damping: 3,
//       }}
//       whileHover={{
//         y: -15,
//         rotate: "-7.5deg",
//       }}
//       rel="nofollow"
//       href="#"
//     >
//       {text}
//     </motion.a>
//   );
// };


// const navVariants = {
//   open: {
//     x: "0%",
//     borderTopLeftRadius: "0vw",
//     borderBottomLeftRadius: "0vw",
//     opacity: 1,
//   },
//   closed: {
//     x: "100%",
//     borderTopLeftRadius: "50vw",
//     borderBottomLeftRadius: "50vw",
//     opacity: 0,
//   },
// };

// const linkWrapperVariants = {
//   open: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const navLinkVariants = {
//   open: { x: 0 },
//   closed: { x: 25 },
// };


export const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButton = () => {
    setIsOpen(!isOpen);
};
  return (
    <>
      <div onClick={handleButton} className={styles.button}>
                    {isOpen
                        ? (<AiOutlineClose
                            size={20}
                            style={{
                            color: '#f9f9f9'
                        }}/>)
                        : (<AiOutlineMenu
                            size={20}
                            style={{
                            color: '#f9f9f9'
                        }}/>)}
                </div>

                <div
                    className={isOpen
                    ? styles.open
                    : styles.closed}>
                    <ul>
                        <li onClick={handleButton} className={styles.linkList}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleButton} className={styles.linkList}>
                            <Link href='#about'>About</Link>
                        </li>
                        <li onClick={handleButton} className={styles.linkList}>
                            <Link href='#experience'>Experience</Link>
                        </li>

                        <li onClick={handleButton} className={styles.linkList}>
                            <Link href='#education'>Education</Link>
                        </li>
                        <li onClick={handleButton} className={styles.linkList}>
                            <Link href='#contact'>Contact</Link>
                        </li>
                        <li onClick={handleButton} className={styles.linkList}>
                            <Link href='/resume'>My resume</Link>
                        </li>
                    </ul>
                </div>
         
        </>
  );
};