import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FaGithub = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Project = () => {
  // DGO Restaurant project images
  const pics = ["./Restaurant.png", "./dgo2.PNG", "./dgo3.PNG"];
  const [picsIndex, setPicsIndex] = useState(0);

  // Blog project images
  const photo = ["./Blog1.PNG", "./Blog2.PNG", "./Blog3.PNG"];
  const [photoIndex, setPhotoIndex] = useState(0);

  // Ebey project images
  const images = ["./Ebey1.png", "./Ebey2.png", "./Ebey3.PNG"];
  const [imagesIndex, setImagesIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPicsIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [pics.length]);

  useEffect(() => {
    const time = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % photo.length);
    }, 2700);
    return () => clearInterval(time);
  }, [photo.length]);

  useEffect(() => {
    const time = setInterval(() => {
      setImagesIndex((prevValue) => (prevValue + 1) % images.length);
    }, 2900);
    return () => clearInterval(time);
  }, [images.length]);

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  return (
    <div className="mt-10 sm:mt-20 px-3 sm:px-4 lg:px-8">
      <motion.div
        className="mt-8 sm:mt-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8">
          Projects
        </h1>

        {/* Mobile-first responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Ebey Shopping Site */}
          <motion.div variants={textVariants} className="w-full">
            <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                src={images[imagesIndex]}
                alt="Ebey Project"
              />

              <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)]">
                <h1 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                  Ebey Shopping Site
                </h1>

                <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                  <p className="text-gray-700 font-sans text-center">
                    I crafted the landing page for ebey.site with a clean and
                    modern UI.
                  </p>

                  <div className="text-center">
                    <h2 className="text-gray-900 font-semibold mb-1">
                      Tech Stack
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      • React.js • JavaScript • CSS • JS Libraries
                    </p>
                  </div>

                  <div className="text-center">
                    <h2 className="font-semibold text-gray-900 mb-1">
                      Description
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      I crafted the landing page for ebey.site, featuring a
                      clean, modern UI and smooth user experience. It's designed
                      to be visually appealing and fully responsive across
                      devices.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/GulfamAwan07/Ebey.pk-site-UI.git"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                  <FaGithub />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Blog App */}
          <motion.div variants={textVariants} className="w-full">
            <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                src={photo[photoIndex]}
                alt="Blog App"
              />

              <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)]">
                <h1 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                  Blog App
                </h1>

                <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                  <p className="text-gray-700 font-sans text-center">
                    A modern Full Stack Blog App with multiple Amazing features.
                  </p>

                  <div className="text-center">
                    <h2 className="text-gray-900 font-semibold mb-1">
                      Tech Stack
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      • Next.js • React.js • REDUX • JWT Auth • SupaBase • JS
                      Libraries
                    </p>
                  </div>

                  <div className="text-center">
                    <h2 className="font-semibold text-gray-900 mb-1">
                      Description
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      A full-stack blog application with user authentication,
                      content management, and modern UI. Features include user
                      registration, post creation, and responsive design for
                      optimal user experience.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/alfabolt-training/web-intern-GulfamAwan07.git"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                  <FaGithub />
                </div>
              </a>
            </div>
          </motion.div>

          {/* DGO Portfolio */}
          <motion.div
            variants={textVariants}
            className="w-full md:col-span-2 xl:col-span-1"
          >
            <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                src={pics[picsIndex]}
                alt="DGO Project"
              />

              <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)]">
                <h2 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                  DGO Portfolio
                </h2>

                <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                  <p className="text-gray-700 font-sans text-center">
                    I designed the frontend of DGO, a modern Restaurant
                    Portfolio.
                  </p>

                  <div className="text-center">
                    <h2 className="text-gray-900 font-semibold mb-1">
                      Tech Stack
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      • React.js • JavaScript • Tailwindcss • JS Libraries
                    </p>
                  </div>

                  <div className="text-center">
                    <h2 className="font-semibold text-gray-900 mb-1">
                      Description
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      I designed the frontend for DGO, a sleek and modern
                      restaurant portfolio website. The interface features a
                      clean layout, rich visuals, and smooth user interactions
                      to showcase the brand's identity. Built with performance
                      and responsiveness in mind, it delivers an engaging
                      experience across all devices.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/GulfamAwan07/DGO-Portfolio-Site.git"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                  <FaGithub />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
