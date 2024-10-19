import React from "react";
import { PROJECTS } from "@/constants/projects";
import { Heading1, Heading2, Paragraph } from "@/components/typography";
import Image from "next/image";
import { List } from "@/components/common";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-white">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
        width={800}
        height={450}
      />
      <Heading1 className="text-3xl font-bold mb-2">{project.header}</Heading1>
      <Paragraph className="mb-4 text-gray-300">
        {project.description}
      </Paragraph>
      <Paragraph className="mb-6 text-gray-300">
        {project.longDescription}
      </Paragraph>
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Tech Stack
            </h3>
            <ul className="space-y-2">
              {project.techStack.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  <span className="text-gray-300">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start space-x-4 mt-6">
        <Link
          href={project.demoLink}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
          Live Demo
        </Link>
        <Link
          href={project.githubLink}
          className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z"
              clipRule="evenodd"
            />
          </svg>
          View on GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
