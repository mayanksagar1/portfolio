import {motion} from "framer-motion";

const About = () => {
  return (
    <>
      <section id="about" className="relative ">
        <motion.section
          className="z-10 py-20 px-8 bg-gray-800/50 w-full h-full text-white"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}>
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-5xl text-white font-inter font-bold  mb-8"
              style={{
                textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)",
              }}>
              About Me
            </h2>
            <div className="space-y-6">
              <p className="text-base  text-gray-300 leading-relaxed font-mulish">
                Hi! I’m <span className="text-cyan-400 font-bold text-xl">Mayank</span>, a <span className="text-purple-400 font-bold text-xl ">21-year-old full-stack developer</span> specializing in
                the <span className="text-green-400 font-bold text-xl">MERN stack</span>. My journey into web development began during my Bachelor’s in Commerce (B.Com Hons). While in college, I was
                tasked with creating a simple HTML form as part of an exercise—no CSS, no JavaScript, just plain HTML. That small exercise sparked a deep curiosity in me to learn more about how
                websites work, and from that moment on, I was hooked.
              </p>
              <p className="text-base  text-gray-300 leading-relaxed font-mulish">
                Over the past two years, I’ve been relentlessly learning and honing my skills daily through YouTube tutorials, online courses, and hands-on projects. Despite coming from a
                non-technical background, my passion for web development has driven me to become proficient in building <span className="text-orange-400 font-bold text-xl">modern</span>,{" "}
                <span className="text-pink-400 font-bold text-xl">robust</span>, and <span className="text-teal-400 font-bold text-xl">user-friendly</span> applications.
              </p>
            </div>
          </div>
        </motion.section>
        <div className="absolute inset-0 z-0 grid grid-cols-2">
          <div className=" bg-gradient-to-tl from-transparent  to-violet-500 opacity-25 blur-3xl "></div>
          <div></div>
          <div></div>
          <div className="bg-gradient-to-br from-transparent  to-blue-500 opacity-25 blur-3xl"></div>
        </div>
      </section>
    </>
  );
};

export default About;
