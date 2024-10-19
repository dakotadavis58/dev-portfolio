import React from "react";
import { PROJECTS } from "@/constants/projects";
import { Card, CardContent, CardHeader } from "@/components/card";
import { Heading1, Heading2, Paragraph } from "@/components/typography";
import Image from "next/image";
import { List } from "@/components/common";
import Link from "next/link";

const Project1page = () => {
  const project = PROJECTS[0];

  const features = [
    "Expense and income tracking",
    "Interactive dashboard with spending visualizations",
    "AI-powered chatbot for personalized financial guidance",
    "Secure document storage for financial records",
    "Automated background processes for data analysis",
  ];

  const techStack = [
    "TypeScript for type-safe development",
    "Next.js for server-side rendering and routing",
    "Firebase for document storage and authentication",
    "Serverless functions for background processes",
    "OpenAI API for chatbot functionality",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <Heading1>{project.header}</Heading1>
          <Paragraph>{project.description}</Paragraph>
        </CardHeader>
        {/* <Image
          src={project.image}
          alt={project.title}
          className="h-64"
          width={300}
          height={300}
        /> */}
        <CardContent>
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover rounded-md mb-4"
            width={800}
            height={450}
          />
          <div className="mb-4">
            <Heading2>Features</Heading2>
            <List items={features} />
          </div>
          <div className="mb-4">
            <Heading2>Tech Stack</Heading2>
            <List items={techStack} />
          </div>
          <div className="flex space-x-4 mt-6">
            <Link
              href={project.demoLink}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 flex items-center rounded-md transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
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
              className="bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-md flex items-center transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Project1page;
