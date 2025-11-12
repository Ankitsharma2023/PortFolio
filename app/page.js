'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { useEffect, useState } from "react";

export default function Home() {
  
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}