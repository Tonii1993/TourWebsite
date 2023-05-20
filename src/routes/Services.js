import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import serviceImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Services() {
  return (
    <>
      <NavBar />
      <Hero
        title="Services"
        cName="hero-about"
        heroImg={serviceImg}
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Services;
