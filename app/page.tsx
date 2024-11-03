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
import WorkProjects from "@/components/WorkProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dakota Davis | Professional Work | Case Studies & Projects",
  description:
    "Explore my professional work experience through detailed case studies of enterprise-level applications, including scalable cloud architectures, modern web applications, and data management systems.",
  keywords: [
    "software development",
    "full stack",
    "case studies",
    "NextJS",
    "NestJS",
    "cloud architecture",
    "portfolio",
  ],
  openGraph: {
    title: "Professional Software Development Case Studies",
    description:
      "Detailed case studies of enterprise applications and systems architecture",
    images: [
      {
        url: "https://picsum.photos/seed/portfolio-main/1200/630",
        width: 1200,
        height: 630,
        alt: "Portfolio Projects Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Software Development Case Studies",
    description:
      "Detailed case studies of enterprise applications and systems architecture",
    images: ["https://picsum.photos/seed/portfolio-main/1200/630"],
  },
};

// Your projects list page component code here

export default async function Home() {
  return (
    <>
      <WorkProjects />
      <Experience />
      <Projects />
      <Skills />
      {/* <SideHustles /> */}
      {/* <Recommendations /> */}
      <Contact />
    </>
  );
}
