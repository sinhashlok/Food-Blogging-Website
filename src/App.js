import React from "react";
import About from "./Components/About";
import Article from "./Components/Article/Articles";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Article />
      <Contact />
    </div>
  );
}
