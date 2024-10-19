import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        "React",
        "Vue.js",
        "Angular",
        "Typescript",
        "HTML",
        "CSS",
        "Responsive Design",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "RESTful APIs",
        "GraphQL",
        "Java",
        "Spring Boot",
      ],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "DynamoDB"],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Git",
        "Docker",
        "CI/CD",
        "AWS",
        "Nginx",
        "Apache",
        "Jenkins",
        "Kubernetes",
      ],
    },
  ];

  return (
    <section className="bg-card-light dark:bg-card-dark rounded-xl">
      <h2 className="font-inter-tight text-lg font-semibold text-primary-light dark:text-primary-dark mb-6">
        Skills
      </h2>
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <article
            key={index}
            className={`relative p-5 rounded-xl ${
              index % 2 === 0
                ? "bg-cardAlt-light dark:bg-cardAlt-dark"
                : "bg-card-light dark:bg-card-dark"
            }`}
          >
            <h3 className="font-semibold text-text-light dark:text-text-dark mb-3">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`inline-block px-3 py-1 text-sm font-medium text-text-light dark:text-text-dark rounded-full ${
                    index % 2 === 0
                      ? "bg-card-light dark:bg-card-dark"
                      : "bg-cardAlt-light dark:bg-cardAlt-dark"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
