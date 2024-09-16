import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Project Name 1",
      image: "/images/tutorial-01.jpg",
      detailLink: "/projects/project-1",
      demoLink: "https://demo-link-1.com",
    },
    {
      title: "Project Name 2",
      image: "/images/tutorial-02.jpg",
      detailLink: "/projects/project-2",
      demoLink: "https://demo-link-2.com",
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Projects
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="relative aspect-video rounded-xl shadow-lg overflow-hidden group"
          >
            <Image
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              src={project.image}
              layout="fill"
              alt={project.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <div className="flex space-x-4">
                <Link
                  href={project.demoLink}
                  className="px-4 py-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Link>
                <Link
                  href={project.detailLink}
                  className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition duration-300"
                >
                  Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
