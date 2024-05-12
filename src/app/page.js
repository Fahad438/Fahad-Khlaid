import Image from "next/image";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Experience } from "./components/experience/Experience";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/contact/Contact";
import { Projects } from "./components/projects/Projects";
import { EducaionList } from "./components/education/EducaionList";
import { ContributionsGraph } from "./components/ContributionsGraph";
import GitHubCalendar from 'react-github-calendar';








export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Experience />
      <Skills />
      <Projects />
      <EducaionList/>
      <ContributionsGraph/> 
      <ContactSection />
      <Footer />
    </div>
  );
}
