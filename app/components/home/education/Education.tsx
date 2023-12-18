import { SectionHeader } from "../../utils/SectionHeader";
import { EducationItem } from "./EducationItem";

export const Education = () => {
  return (
    <section className="section-wrapper" id="education">
      <SectionHeader title="Education" dir="l" />
      {education.map((item) => (
        <EducationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const education = [
  {
    title: "42 Roma Luiss",
    position: "(Italian École 42)",
    time: "2020 - 2022",
    location: "Rome",
    description:
      " I immersed myself in peer-to-peer learning and project-based educational approach. Through this unique model, I honed robust problem-solving abilities and technical skills, crafting a solid foundation in coding. 42's emphasis on autonomy and adaptability has not only shaped my skills but has also instilled in me a mindset geared towards continual learning and innovation. This educational journey at 42 has been pivotal in preparing me for the dynamic challenges of the tech industry",
    tech: [
    ],
  },
  {
    title: "Apple Developer Academy",
    position: "Chosen among 345 candidates from a pool of 9,000+ applicants",
    time: "2018 - 2019",
    location: "Naples",
    description:
      "Graduated from the esteemed Apple Developer Academy. Attained practical expertise in app development, software engineering, and entrepreneurship. Collaborated within a diverse global community of skilled developers, fostering innovation and creativity. Engaged with developers from 27 different nations, enhancing the richness of collaborative experiences.",
    tech: [],
  },
  {
    title: "ITIS Q. Sella",
    position: "Elected Vice President of the Student Council of Biella",
    time: "2013 - 2018",
    location: "Biella",
    description:
      "I pursued my education at the IT high school, where my academic journey extended beyond traditional coursework. Notably, I earned the distinction of being elected Vice President of the City Student Council, a testament to my commitment to student advocacy and collaborative initiatives. Alongside my academic pursuits, I obtained the license to code and operated COMAU's robotic arms, showcasing a multifaceted dedication to both theoretical and applied aspects of technology.",
    tech: [
    ],
  },
];
