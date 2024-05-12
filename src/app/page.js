import Image from "next/image";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Experience } from "./components/experience/Experience";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/contact/Contact";
import { Projects } from "./components/projects/Projects";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Experience />
      <Skills />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}
