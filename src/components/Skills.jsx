import {motion} from "framer-motion";
import {Code2} from "lucide-react";
import Javascript from "../assets/images/logos/javascript.svg";
import ReactJs from "../assets/images/logos/react-js.svg";
import NodeJs from "../assets/images/logos/nodejs.svg";
import Express from "../assets/images/logos/express-js.svg";
import MongoDB from "../assets/images/logos/mongodb.svg";
import Redux from "../assets/images/logos/redux.svg";
import Tailwind from "../assets/images/logos/tailwind-css.svg";
import PostgreSql from "../assets/images/logos/postgresql.svg";
import Bootstrap from "../assets/images/logos/bootstrap.svg";
import FramerMotion from "../assets/images/logos/framer-motion.svg";
import Git from "../assets/images/logos/git.svg";
import Github from "../assets/images/logos/github.svg";
import Postman from "../assets/images/logos/postman.png";
import Code from "../assets/images/logos/code.svg";
import Figma from "../assets/images/logos/figma.svg";

const Skills = () => {
  const skills = [
    {
      imageSrc: Javascript,
      name: "Javascript",
      desc: "Programming Language ",
      className: "bg-yellow-300/50",
    },
    {
      imageSrc: ReactJs,
      name: "React",
      desc: "Frontend Library",
      className: "bg-blue-400/50",
    },
    {
      imageSrc: NodeJs,
      name: "Node Js",
      desc: "Js Runtime Environment",
      className: "bg-green-400/50",
    },
    {
      imageSrc: Express,
      name: "Express",
      desc: "Backend Framework",
      className: "bg-gray-100",
    },
    {
      imageSrc: MongoDB,
      name: "MongoDB",
      desc: "NoSQL Database",
      className: "bg-green-400/50",
    },
    {
      imageSrc: Redux,
      name: "Redux",
      desc: "JS Library",
      className: "bg-indigo-700/50",
    },
    {
      imageSrc: Tailwind,
      name: "Tailwind CSS",
      desc: "CSS Framework",
      className: "bg-blue-400/50",
    },
    {
      imageSrc: PostgreSql,
      name: "PostgreSQL",
      desc: "Relational Database",
      className: "bg-blue-700/50",
    },
    {
      imageSrc: Bootstrap,
      name: "Bootstrap",
      desc: "Web Framework",
      className: "bg-violet-500/50",
    },
    {
      imageSrc: FramerMotion,
      name: "Framer Motion",
      desc: "Animation Library",
      className: "bg-[#59529d50]",
    },
    {
      imageSrc: Git,
      name: "Git",
      desc: "Version Control",
      className: "bg-[#f4511e50]",
    },
    {
      imageSrc: Github,
      name: "GitHub",
      desc: "Hosting Code",
      className: "bg-gray-100",
    },
    {
      imageSrc: Postman,
      name: "Postman",
      desc: "Api Testing",
      className: "bg-gray-100",
    },
    {
      imageSrc: Figma,
      name: "Figma",
      desc: "Designing UI/UX",
      className: "bg-[#29b6f650]",
    },
    {
      imageSrc: Code,
      name: "VS Code",
      desc: "Code Editor",
      className: "bg-blue-900/50",
    },
  ];
  return (
    <>
      <motion.section id="skills" className="py-20 px-8 bg-gray-900/50" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.8}}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl text-white font-inter font-bold mb-8"
            style={{
              textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)",
            }}>
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-2 bg-gray-950/50 p-4 rounded-lg border border-gray-100`}
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.2}}
                whileHover={{scale: 1.05}}>
                <div className={`p-2 w-fit rounded-lg ${skill.className}`}>
                  <img src={skill.imageSrc} alt={skill.name} className="w-8 h-8" />
                </div>
                <div className="">
                  <div className="text-gray-100 font-mulish font-semibold text-lg">{skill.name}</div>
                  <p className="text-xs font-inter text-gray-400"> {skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Skills;
