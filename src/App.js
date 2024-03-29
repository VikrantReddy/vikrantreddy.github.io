import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
