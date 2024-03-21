import Image from "next/image";
import Hero from "./components/Hero";
import Serviceshome from "./components/Serviceshome";
import Abouthome from "./components/Abouthome";

export default function Home() {
  return (
    <>
      <Hero />
      <Abouthome />
      <Serviceshome />
    </>
  );
}
