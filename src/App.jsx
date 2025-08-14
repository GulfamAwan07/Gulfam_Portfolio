import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <Navbar />
        <ToastContainer  />
       
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Project />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/hero" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </Router>
  );
}

export default App;
