import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import WORK_PROJECTS from "@/constants/work-projects.json";
import { Metadata } from "next";
import { Heading1, Heading2, Paragraph } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = WORK_PROJECTS.projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const { metadata } = project;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      images: [
        {
          url: metadata.openGraph.image,
          width: 1200,
          height: 630,
          alt: metadata.openGraph.title,
        },
      ],
      type: metadata.type as "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      images: [metadata.openGraph.image],
    },
  };
}

export async function generateStaticParams() {
  return WORK_PROJECTS.projects.map((project) => ({
    id: project.id,
  }));
}

const ImpactMetric = ({ value }: { value: string }) => (
  <div className="bg-gray-800/50 rounded-lg p-6 flex flex-col items-center justify-center text-center">
    <p className="text-blue-400 mb-2">{value}</p>
  </div>
);

const TechnicalDetail = ({ detail }: { detail: string }) => (
  <div className="flex items-start space-x-3">
    <div className="mt-1.5">
      <svg
        className="w-4 h-4 text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4"
        />
      </svg>
    </div>
    <p className="text-gray-300">{detail}</p>
  </div>
);

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const project = WORK_PROJECTS.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto px-4 py-12 text-white">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <Heading1 className="mb-6">{project.title}</Heading1>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>
        <Paragraph className="text-xl text-gray-300 max-w-3xl mx-auto">
          {project.shortDescription}
        </Paragraph>
      </header>

      {/* Main Image */}
      <div className="mb-12">
        <Image
          src={project.detailedContent.detailImages[0].src}
          alt={project.detailedContent.detailImages[0].alt}
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          width={1200}
          height={500}
        />
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <section>
          <Heading2 className="text-2xl font-semibold mb-4 text-blue-400">
            The Challenge
          </Heading2>
          <Card className="bg-gray-800/30">
            <CardContent className="p-6">
              <Paragraph>{project.detailedContent.problem}</Paragraph>
            </CardContent>
          </Card>
        </section>

        <section>
          <Heading2 className="text-2xl font-semibold mb-4 text-blue-400">
            The Solution
          </Heading2>
          <Card className="bg-gray-800/30">
            <CardContent className="p-6">
              <Paragraph>{project.detailedContent.solution}</Paragraph>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Technical Implementation */}
      <section className="mb-12">
        <Heading2 className="text-2xl font-semibold mb-6 text-blue-400">
          Technical Implementation
        </Heading2>
        <div className="grid gap-4">
          {project.detailedContent.technicalDetails.map((detail, index) => (
            <TechnicalDetail key={index} detail={detail} />
          ))}
        </div>
      </section>

      {/* Impact & Results */}
      <section className="mb-12">
        <Heading2 className="text-2xl font-semibold mb-6 text-blue-400">
          Impact & Results
        </Heading2>
        <div className="grid md:grid-cols-3 gap-6">
          {project.detailedContent.impact.map((impact, index) => (
            <ImpactMetric key={index} value={impact} />
          ))}
        </div>
      </section>

      {/* Additional Images */}
      <section>
        <Heading2 className="text-2xl font-semibold mb-6 text-blue-400">
          Technical Architecture & Interface
        </Heading2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.detailedContent.detailImages.slice(1).map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
              <p className="mt-2 text-sm text-gray-400">{image.alt}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default ProjectPage;
