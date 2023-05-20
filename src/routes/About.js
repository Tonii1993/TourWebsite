import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import aboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUS from "../components/AboutUS";

function About() {
  return (
    <>
      <NavBar />
      <Hero
        title="About"
        cName="hero-about"
        heroImg={aboutImg}
        btnClass="hide"
      />
      <AboutUS />
      <Footer />
    </>
  );
}

export default About;
