
import React from 'react';
import { Hero } from "./hero/Hero";
import { About } from "./about/About";
import { Experience } from "./experience/Experience";
import {Education} from "./education/Education"
import { MobileContact } from "./contact/MobileContact";
import MobileNav from '../nav/components/mobilenav/MobileNav';
import Footer from '../utils/Footer';
 const HomepageMobile: React.FC = () => {

	return (
		<>
                <MobileNav />
				<Hero />
				<About />
				<Experience />
				<Education />
				<MobileContact />
				<div
            style={{
              height: "50px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
		  <Footer />
		</>
)};

export default HomepageMobile;
