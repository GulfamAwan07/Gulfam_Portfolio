import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = () => {
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
                className="w-screen  object-cover border-b-2 rounded-t-2xl"
                src="/clone.png"
                alt="Ebey Project"
              />

              <div className="p-4 h-1/2 overflow-auto">
                <h1 className="text-xl font-bold mb-2">Ebey Shopping Site:</h1>
                <p className="text-base font-sans">
                  I crafted the landing page for ebey.site with a clean and
                  modern user interface, focusing on visual appeal and intuitive
                  layout. The design highlights key content with smooth
                  transitions and engaging elements. It effectively showcases
                  the brand’s identity while maintaining a polished and
                  structured look.
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
                className="w-screen  object-cover border-b-2 rounded-t-2xl"
                src="/Restaurant.png"
                alt="DGO Project"
              />

              <div className="p-4 h-1/2 overflow-auto">
                <h2 className="text-xl font-bold mb-2">DGO Portfolio:</h2>
                <p className="text-base font-sans">
                  I designed the frontend of DGO, a modern restaurant portfolio
                  site that combines elegant visuals with a clean layout to
                  showcase food brands professionally. The interface highlights
                  menus, services, and restaurant features with a user-friendly
                  flow. This project reflects my attention to detail and ability
                  to create appealing designs tailored to the food industry.
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
