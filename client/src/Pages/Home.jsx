import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Video from "../components/Video";
// import HomeWork from "../components/HomeWork";
// import Work from "../components/Work";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Video />
      <HomeWork />
      <Pricing />
      {/* <Services /> */}
      {/* <Testimonial /> */}
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
