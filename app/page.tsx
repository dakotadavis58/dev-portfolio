import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import SideHustles from "@/components/SideHustles";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Home - DevFolio",
  description: "Page description",
};

export default async function Home() {
  return (
    <>
      <Experience />
      <Projects />
      <Skills />
      {/* <SideHustles /> */}
      {/* <Recommendations /> */}
      <Contact />
    </>
  );
}
