import React from "react";

const About = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl mt-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl text-center font-bold">
        About Me
      </h1>
      <p className="max-w-3xl mx-auto text-justify text-xl sm:text-lg leading-relaxed sm:leading-loose w-full px-4  sm:px-0 mt-5">
        I’m <span className="font-bold text-red-500">Gulfam Awan</span>, a
        curious mind and passionate
        <span className="font-semibold"> Software Developer</span> who thrives
        on crafting clean, functional, and visually appealing web experiences.
        My journey has taken me through exciting internships at{" "}
        <a
          href="/documents/Gulfam_internship_letter.pdf"
          className="text-blue-500 hover:underline font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          ↗AlfaBolt
        </a>{" "}
        and{" "}
        <a
          href="/documents/dassoft.pdf"
          className="text-blue-500 hover:underline font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          ↗DasSoft
        </a>
        , where I built responsive interfaces, optimized performance, and
        contributed to real-world applications using modern JavaScript
        frameworks. I specialize in{" "}
        <span className="font-medium ">React.js</span>,
        <span className="font-medium "> Next.js</span>, and
        <span className="font-medium "> Redux</span>, leveraging these
        technologies to create dynamic, scalable, and high-performing
        applications. I have experience in frontend development, ensuring
        seamless integration and performance optimization. I specialize in
        building secure and scalable web applications, implementing{" "}
        <span className="font-medium "> JWT Auth</span> for robust user
        security, managing complex state with
        <span className="font-medium "> Redux Toolkit</span>, integrating{" "}
        <span className="font-medium "> Supabase</span> for powerful backend
        services, and exploring the potential of{" "}
        <span className="font-medium "> LLM APIs</span> to create intelligent,
        dynamic experiences. I believe learning never stops —.{" "}
      </p>
    </div>
  );
};
export default About;
