"use client";

import Navbar from "@/app/components/navbar";
import Home from "@/app/sections/home";
import About from "@/app/sections/about";
import Contacts from "@/app/sections/contacts"
import Projects from "@/app/sections/projects"
import Footer from "@/app/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />   

      <Home />

      <About />

      <Contacts />

      <Projects />
      
      <Footer />
    </>
  );
}