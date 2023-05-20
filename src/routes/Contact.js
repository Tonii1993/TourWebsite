import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import contactImg from "../assets/2.jpg";
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <>
      <NavBar />
      <Hero
        title="Contact"
        cName="hero-about"
        heroImg={contactImg}
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact;