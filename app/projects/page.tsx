import React from "react";

interface Project {
  title: string;
  subtitle: string;
  period: string;
  liveLink?: string;
  githubLink?: string;
  figmaLink?: string;
  points: string[];
  skills: string[];
}

const projects: Project[] = [
  {
    title: "TestPilot",
    subtitle: "Front-end Developer & UX/UI Designer (Team Project)",
    period: "Team Project at HRD Center",
    liveLink: "https://testpilot.kshrd.app",
    githubLink:
      "https://github.com/13-Generation-Basic-Course-Projects/test-pilot-ui",
    points: [
      "Designed high-fidelity user interfaces and component wireframes using Figma.",
      "Developed responsive, modern web interfaces utilizing Next.js, TypeScript, and Tailwind CSS.",
      "Integrated dynamic backend REST APIs and handled frontend data state management.",
      "Tested and debugged UI components to ensure seamless cross-browser compatibility.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "REST APIs"],
  },
  {
    title: "Coffee Shop Management Platform",
    subtitle: "Full-Stack & Mobile Development",
    period: "Team Project Y4",
    githubLink: "https://github.com/Sokkeang123/Klara_Coffee_App",
    points: [
      "Built robust RESTful APIs using Node.js for backend data flow and authentication.",
      "Developed an Admin Web Dashboard using Next.js for managing operations, orders, and products.",
      "Created a user-facing mobile application using Flutter for seamless customer interactions.",
    ],
    skills: ["Node.js", "Next.js", "Flutter", "RESTful APIs", "Web & Mobile"],
  },
  {
    title: "Attendance Management System",
    subtitle: "UX/UI Design ",
    period: "Team Project Y4",
    figmaLink:
      "https://www.figma.com/design/hnm2NJE9ffXueJNA15x3Je/Attendance-Management-System?node-id=63-596&p=f&t=ZFKpe0SirmcRgQ6W-0",
    points: [
      "Collaborated with team members to design user-centered workflows and high-fidelity wireframes in Figma.",
      "Structured intuitive UI navigation for automated student and staff attendance tracking.",
    ],
    skills: ["Figma", "UX/UI Design", "Prototyping", "Team Collaboration"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-900 py-20 sm:py-28 border-t border-gray-800/50"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-400 uppercase tracking-wider">
            Portfolio
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="mt-16 relative border-l border-gray-800 ml-4 md:ml-32 space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-500 bg-gray-900 group-hover:bg-indigo-500 transition-colors duration-200" />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white flex flex-wrap items-center gap-3">
                    {project.title}

                    {/* Action Links */}
                    <div className="flex items-center gap-2">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-indigo-400 hover:text-indigo-300 underline"
                        >
                          {/* View Site ↗ */}
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-gray-400 hover:text-white underline"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {project.figmaLink && (
                        <a
                          href={project.figmaLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-purple-400 hover:text-purple-300 underline"
                        >
                          Figma Design ↗
                        </a>
                      )}
                    </div>
                  </h3>
                  <p className="text-md font-medium text-indigo-300 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <span className="mt-2 md:mt-0 text-xs font-semibold text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-3 py-1 rounded-full w-fit">
                  {project.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside marker:text-indigo-400">
                {project.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    <span className="text-gray-300 -ml-1">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-gray-400 bg-gray-800/80 px-2.5 py-1 rounded ring-1 ring-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
