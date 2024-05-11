import Image from "next/image";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { About } from "./components/About";



export default function Home() {
  return (
<div>
  <Nav></Nav>
 <Hero></Hero>
 <About></About>
</div>
  );
}
