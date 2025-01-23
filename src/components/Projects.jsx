import {useState} from "react";
import {motion} from "framer-motion";
import {Github, ChevronLeft, ChevronRight} from "lucide-react";
import WebIcon from "../assets/images/Icons/web-icon.svg";
import NeoCart1 from "../assets/images/projects/neo-cart-1.png";
import NeoCart2 from "../assets/images/projects/neo-cart-2.png";
import NeoCart3 from "../assets/images/projects/neo-cart-3.png";
import Portfolio1 from "../assets/images/projects/portfolio1.png";
import Portfolio2 from "../assets/images/projects/portfolio2.png";
import Portfolio3 from "../assets/images/projects/portfolio3.png";
import Memory1 from "../assets/images/projects/memory-1.png";
import Memory2 from "../assets/images/projects/memory-2.png";
import TypeMaster from "../assets/images/projects/type-master.png";
import ReactJs from "../assets/images/logos/react-js.svg";
import Javascript from "../assets/images/logos/javascript.svg";
import Nodejs from "../assets/images/logos/nodejs.svg";
import Redux from "../assets/images/logos/redux.svg";
import Tailwind from "../assets/images/logos/tailwind-css.svg";
import Mongodb from "../assets/images/logos/mongodb.svg";
import Express from "../assets/images/logos/express-js.svg";

const Projects = () => {
  const projects = [
    {
      title: "NeoCart E-commerce",
      description: "A robust full-stack e-commerce platform featuring user authentication, an admin dashboard, and seamless PayPal integration for secure payments.",
      images: [NeoCart1, NeoCart2, NeoCart3],
      technologies: [
        {
          imgSrc: ReactJs,
          bgClass: "bg-blue-400/30",
          borderClass: "border-blue-300",
          shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]",
        },
        {
          imgSrc: Javascript,
          bgClass: "bg-yellow-400/50",
          borderClass: "border-yellow-400",
          shadowClass: "hover:shadow-[0_0_5px_3px_#7e6913]",
        },
        {
          imgSrc: Mongodb,
          bgClass: "bg-green-400/50",
          borderClass: "border-green-400",
          shadowClass: "hover:shadow-[0_0_5px_3px_#267249]",
        },
        {
          imgSrc: Express,
          bgClass: "bg-gray-300",
          borderClass: "border-gray-50",
          shadowClass: "hover:shadow-[0_0_5px_3px_#d1d5db]",
        },
        {
          imgSrc: Nodejs,
          bgClass: "bg-green-400/50",
          borderClass: "border-green-400",
          shadowClass: "hover:shadow-[0_0_5px_3px_#267249]",
        },
        {
          imgSrc: Redux,
          bgClass: "bg-indigo-700/50",
          borderClass: "border-indigo-700",
          shadowClass: "hover:shadow-[0_0_5px_3px_#221f6e]",
        },
        {
          imgSrc: Tailwind,
          bgClass: "bg-blue-400/30",
          borderClass: "border-blue-300",
          shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]",
        },
      ],
      WebLink: "https://neo-cart.vercel.app/",
      GitLink: "https://github.com/mayanksagar1/NeoCart-ecommerce-project",
    },
    {
      title: "Personal Portfolio",
      description: "A professional and responsive portfolio website showcasing my projects, skills, and certifications with a modern design.",
      images: [Portfolio1, Portfolio2, Portfolio3],
      WebLink: "/",
      GitLink: "https://github.com/mayanksagar1/portfolio.git",
      technologies: [
        {
          imgSrc: ReactJs,
          bgClass: "bg-blue-400/30",
          borderClass: "border-blue-300",
          shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]",
        },
        {
          imgSrc: Javascript,
          bgClass: "bg-yellow-400/50",
          borderClass: "border-yellow-400",
          shadowClass: "hover:shadow-[0_0_5px_3px_#7e6913]",
        },
        {
          imgSrc: Tailwind,
          bgClass: "bg-blue-400/30",
          borderClass: "border-blue-300",
          shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]",
        },
      ],
    },
    {
      title: "Memory Game",
      description: "A fun and interactive card-matching game to test memory skills, featuring smooth animations and a sleek interface.",
      images: [Memory1, Memory2],
      WebLink: "https://memory-game-eight-livid.vercel.app/",
      GitLink: "https://github.com/mayanksagar1/Memory-game.git",
      technologies: [
        {
          imgSrc: Javascript,
          bgClass: "bg-yellow-400/50",
          borderClass: "border-yellow-400",
          shadowClass: "hover:shadow-[0_0_5px_3px_#7e6913]",
        },
        {
          imgSrc: ReactJs,
          bgClass: "bg-blue-400/30",
          borderClass: "border-blue-300",
          shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]",
        },
      ],
    },
    {
      title: "Type Master",
      description: "A typing speed and accuracy test with real-time results, featuring a minimal design and a 30-second challenge.",
      image: TypeMaster,
      WebLink: "https://type-master-mu.vercel.app/",
      GitLink: "https://github.com/mayanksagar1/Type-master.git",
      technologies: [
        {
          imgSrc: Tailwind,
          bgClass: "bg-blue-400/30",
          borderClass: "border-blue-300",
          shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]",
        },
        {
          imgSrc: Javascript,
          bgClass: "bg-yellow-400/50",
          borderClass: "border-yellow-400",
          shadowClass: "hover:shadow-[0_0_5px_3px_#7e6913]",
        },
        {
          imgSrc: ReactJs,
          bgClass: "bg-blue-400/30",
          borderClass: "border-blue-300",
          shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]",
        },
      ],
    },
  ];

  const ImageSlider = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
      <div className="relative">
        {/* Slider */}
        <motion.div
          key={currentIndex}
          initial={{opacity: 0, x: 100}}
          whileHover={{
            scale: 1.05,
          }}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={{duration: 0.5}}
          className="w-full h-48">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-full object-cover rounded-lg" />
        </motion.div>

        {/* Controls */}
        <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
          <ChevronLeft size={20} />
        </button>
        <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}></button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="projects" className="py-20 px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold text-white mb-12"
            style={{
              textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)",
            }}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-950   rounded-xl shadow-lg p-2 md:p-4  overflow-hidden border border-gray-100 transform-gpu transition-all duration-500"
                style={{
                  perspective: 1000, // Adds 3D perspective for the entire card
                }}
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}>
                {/* Container to wrap all 3D interactive elements */}
                <motion.div
                  className="relative flex flex-col justify-between h-full rounded-xl "
                  whileHover={{
                    rotateX: 20, // Tilts along the X-axis
                    rotateY: 10, // Tilts along the Y-axis
                    scale: 1.03, // Slight zoom for the entire card
                    boxShadow: "0 20px 50px rgba(59, 130, 246, 0.5)", // Enhances shadow for depth
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.8, 0.25, 1], // Smooth spring-like easing
                  }}>
                  {/* Image Section */}
                  <div>
                    {Array.isArray(project.images) ? (
                      <ImageSlider images={project.images} />
                    ) : (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-52 object-cover rounded-lg"
                        whileHover={{
                          scale: 1.05, // Image zoom effect
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      />
                    )}
                    <div className="p-3">
                      <motion.h3
                        className="text-2xl font-semibold font-mulish text-white mb-3"
                        whileHover={{
                          scale: 1.1, // Scale up title slightly
                          translateZ: 20, // Pull forward in 3D space
                        }}
                        transition={{
                          duration: 0.3,
                        }}>
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 font-inter text-sm mb-4"
                        whileHover={{
                          translateZ: 15, // Bring the description closer
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.3,
                        }}>
                        {project.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Technologies Section */}
                  <div className="flex items-center flex-wrap p-3 gap-2">
                    {project?.technologies?.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className={`p-2 w-fit rounded-lg border ${item.bgClass} ${item.borderClass} ${item.shadowClass}`}
                        whileHover={{
                          scale: 1.2, // Larger highlight effect
                          translateZ: 10, // Pops forward in 3D
                        }}
                        transition={{
                          duration: 0.3,
                        }}>
                        <img src={item.imgSrc} className="w-6 h-6" alt={item.imgAlt || "icon"} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Links Section */}
                  <div className="content-box flex items-center justify-between p-3">
                    <motion.a
                      className="flex items-center gap-2 bg-gray-100 text-black text-sm font-inter font-medium px-4 py-2 rounded-lg transition-all hover:bg-gray-300 duration-300"
                      href={project.GitLink}
                      target="_blank"
                      whileHover={{
                        scale: 1.05,
                        translateZ: 15, // Move forward
                      }}
                      transition={{
                        duration: 0.3,
                      }}>
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </motion.a>
                    <motion.a
                      href={project.WebLink}
                      target="_blank"
                      className="flex items-center gap-2 bg-gray-100 text-black text-sm font-inter font-medium px-4 py-2 rounded-lg transition-all hover:bg-gray-300 duration-300"
                      whileHover={{
                        scale: 1.05,
                        translateZ: 15,
                      }}
                      transition={{
                        duration: 0.3,
                      }}>
                      <img src={WebIcon} alt="web-icon" className="w-4 h-4" />
                      <span>Website</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
