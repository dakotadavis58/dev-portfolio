import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        "React",
        "Vue.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "Docker", "CI/CD", "AWS", "Nginx"],
    },
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Skills
      </h2>
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <article
            key={index}
            className="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group"
          >
            <div className="space-y-1.5 mb-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                {category.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-full dark:text-gray-300 dark:bg-gray-700"
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
