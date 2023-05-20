import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import heroImg from "../assets/12.jpg";
import Destionation from "../components/Destionation";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Hero
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination"
        cName="hero"
        heroImg={heroImg}
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destionation />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
