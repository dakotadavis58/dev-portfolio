import React from "react";
import Image from "next/image";
import Link from "next/link";
import WORK_PROJECTS from "@/constants/work-projects.json";

export default function Projects() {
  return (
    <section className="bg-card-light dark:bg-card-dark rounded-xl">
      <h2 className="font-inter-tight text-lg font-semibold text-primary-light dark:text-primary-dark mb-6">
        Work Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {WORK_PROJECTS.projects.map((project, index) => (
          <Link
            href={`/work-projects/${project.id}`}
            className="rounded-full text-sm hover:bg-opacity-90 transition duration-300"
            // target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <article
              key={index}
              className="relative rounded-lg overflow-hidden bg-cardAlt-light dark:bg-cardAlt-dark"
            >
              <Image
                className="object-cover w-full h-48"
                src={project.cardImage.src}
                alt={project.cardImage.alt}
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
