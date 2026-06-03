import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
