import { SectionHeader } from "../../utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Deckx",
    position: "Co-founder",
    time: "2021 - 2023",
    location: "Rome",
    description:
      `Led the ideation, validation, and development processes, ensuring the platform's
      functionality and user experience. My role extended beyond the technical domain,
       as I orchestrated targeted marketing strategies that catapulted Deckx into the limelight, 
       fostering heightened brand recognition and drawing the attention of companies and developers. I successfully secured €280K in funding from three VC: Hook VC, LVenture, and Exor VC.
      `,
    tech: [],
  },
  {
    title: "Freelance",
    position: "Software Engineer",
    time: "2019 - Present",
    location: "World",
    description:
      "I've worked as a freelance developer, specializing in both iOS and web development. In iOS development, I crafted user-friendly applications for Apple devices, showcasing a profound understanding of the iOS ecosystem. Simultaneously, as a web developer, I created dynamic and responsive websites using various technologies, offering versatile solutions across different platforms.",
    tech: [],
  },
  {
    title: "Chiorino spa",
    position: "IT support (High School stage)",
    time: "Summer 2016 & Summer 2017",
    location: "Biella",
    description:
      "Worked in a data center, performing tasks such as technical assistance, computer configuration, and network management. I provided support, optimized computer systems, and ensured seamless network connectivity.",
    tech: [],
  },
];
