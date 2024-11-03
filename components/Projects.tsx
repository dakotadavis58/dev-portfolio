import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";

export default function Projects() {
  return (
    <section className="bg-card-light dark:bg-card-dark rounded-xl">
      <h2 className="font-inter-tight text-lg font-semibold text-primary-light dark:text-primary-dark mb-6">
        Personal Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <article
            key={index}
            className="relative rounded-lg overflow-hidden bg-cardAlt-light dark:bg-cardAlt-dark"
          >
            <Image
              className="object-cover w-full h-48"
              src={project.image}
              alt={project.title}
              width={1000}
              height={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <div className="flex space-x-2">
                <Link
                  href={project.demoLink}
                  className="px-4 py-2 bg-button-secondary-light dark:bg-button-secondary-dark text-white rounded-full text-sm hover:bg-opacity-90 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Link>
                <Link
                  href={`/projects/${project.id}`}
                  className="px-4 py-2 bg-button-primary-light dark:bg-button-primary-dark text-white rounded-full text-sm hover:bg-opacity-90 transition duration-300"
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
