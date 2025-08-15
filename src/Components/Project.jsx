import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Project = () => {
  const pics = ["/Restaurant.png", "/dgo2.PNG", "/dgo3.PNG"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const images = ["/clone.png", "/ebey2.PNG", "/ebey3.PNG"];
  const [value, setValue] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % images.length);
    }, 2000);
    return () => clearInterval(time);
  }, []);

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  return (
    <div className="mt-20 px-4 sm:px-8">
      <motion.div
        className="mt-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center">
          Projects
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12">
          <motion.div variants={textVariants} className="w-full max-w-md">
            <div className="group relative w-full h-[440px] border-2 hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden">
              <img
                className="w-[500px] h-[220px] object-contain  border-b-2 border-gray-300 rounded-t-2xl"
                src={images[index]}
                alt="Ebey Project"
              />

              <div className="p-4 h-1/2 overflow-auto">
                <h1 className="text-xl flex justify-center font-bold mb-2">
                  Ebey Shopping Site
                </h1>
                <p className="text-base font-sans">
                  I crafted the landing page for ebey.site with a clean and
                  modern UI.
                </p>
                <h1 className="flex justify-center font-semibold">
                  Tech Stack
                </h1>
                <h1>
                  • React.js &nbsp; | &nbsp; • JavaScript | &nbsp; • Tailwindcss
                  | &nbsp; • JS Libraries
                </h1>
                <h1 className="font-semibold flex justify-center">
                  Description
                </h1>
                <p>
                  I crafted the landing page for ebey.site, featuring a clean,
                  modern UI and smooth user experience. It’s designed to be
                  visually appealing and fully responsive across devices.
                </p>
              </div>

              <a
                href="https://github.com/GulfamAwan07/Ebey.pk-site-UI.git"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaGithub className="text-4xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={textVariants} className="w-full max-w-md">
            <div className="group relative w-full h-[440px] border-2 hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden">
              <img
                className="w-[500px] h-[220px] object-contain  border-b-2 border-gray-300 rounded-t-2xl"
                src={pics[index]}
                alt="DGO Project"
              />

              <div className="p-4 h-1/2 overflow-auto">
                <h2 className="text-xl flex justify-center font-bold mb-2">
                  DGO Portfolio
                </h2>
                <p className="text-base font-sans">
                  I designed the frontend of DGO, a modern Restaurant Portfolio.
                </p>
                <h1 className="font-semibold flex justify-center">
                  Tech Stack:
                </h1>
                <h1>
                  • React.js &nbsp; | &nbsp; • JavaScript | &nbsp; • Tailwindcss
                  | &nbsp; • JS Libraries
                </h1>
                <h1 className="font-semibold flex justify-center">
                  Description
                </h1>
                <p>
                  I designed the frontend for DGO, a sleek and modern restaurant
                  portfolio website. The interface features a clean layout, rich
                  visuals, and smooth user interactions to showcase the brand’s
                  identity. Built with performance and responsiveness in mind,
                  it delivers an engaging experience across all devices.
                </p>
              </div>

              <a
                href="https://github.com/GulfamAwan07/DGO-Portfolio-Site.git"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaGithub className="text-4xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
