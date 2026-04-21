import React from "react";

import Header from "../Layout/Header";
import Hero from "../Layout/Hero";
import Footer from "../Layout/Footer";

import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Experiences from "../Pages/Experiences";
import Projects from "../Pages/Projects";
import Services from "../Pages/Services";
import Contacts from "../Pages/Contacts";
import CursorGlow from "../Component/CursorGlow";

const Home = () => {
  return (
    <div>
      <CursorGlow />

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Services />
      <Contacts />
      

      <Footer/>
    </div>
      
    
  );
};

export default Home;