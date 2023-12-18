
import React from 'react';
import styles from "./homepage.module.scss";
import { Hero } from "./hero/Hero";
import { About } from "./about/About";
import { Experience } from "./experience/Experience";
import {Education} from "./education/Education"
import { Contact } from "./contact/Contact";
import SideBar from '../nav/SideBar';
import Heading from '../nav/Heading';
import Footer from '../utils/Footer';

const Homepage: React.FC = () => {

	return (
		<div className={styles.homepage}>
		<SideBar />
		<div>
		<Heading />
				<Hero />
				<About />
				<Experience />
				<Education />
				<Contact />
				<div
            style={{
              height: "80px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
		  <Footer />
			</div>
		</div>
)};

export default Homepage;