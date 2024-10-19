import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import SideHustles from "@/components/SideHustles";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Image from "next/image";
import HeaderImg01 from "@/public/images/generic-pc-bg.png";
import HeaderImg02 from "@/public/images/generic-keyboard.jpg";
import HeaderImg03 from "@/public/images/generic-maine-bg.png";
export const metadata = {
  title: "Home - Dakota Davis Portfolio",
  description: "Page description",
};

export default async function Home() {
  return (
    <>
      <Projects />
      <Experience />
      <Skills />
      {/* <SideHustles /> */}
      {/* <Recommendations /> */}
      <Contact />
    </>
  );
}
