import React from "react";

const experiences = [
  {
    role: "Front-end Developer",
    company: "ctx-98 co,ltd",
    period: "05-Nov-2023 – Present",
    points: [
      "Develop and maintain UI components for a real-time reporting and monitoring platform.",
      "Author technical documentation and API usage guidelines for internal workflows.",
      "Perform manual UI/UX testing and debugging to maintain platform stability.",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Platform Monitoring"],
  },
  {
    role: "Teacher Assistant (Robotic Coach)",
    company: "AAA School",
    period: "27-Sep-2025 – 15-Feb-2026",
    points: [
      "Guided students in weekend robotics sessions covering basic computing principles and Scratch.",
      "Instructed practical application of hardware sensors and introductory 3D design concepts.",
    ],
    skills: ["Robotics", "3D Design", "Scratch", "Teaching"],
  },
  {
    role: "Data Labeler & Annotator",
    company: "DDD (Digital Divide Data - Cambodia)",
    period: "12-Aug-2024 – 11-Nov-2024",
    points: [
      "Annotated complex datasets for Autonomous Vehicle (AV) computer vision models.",
      "Collaborated directly with Motional Company stakeholders on data processing quality control.",
    ],
    skills: ["Data Annotation", "Computer Vision Data", "Quality Assurance"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-900 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-400 uppercase tracking-wider">
            Career Journey
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Work Experience
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="mt-16 relative border-l border-gray-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-500 bg-gray-900 group-hover:bg-indigo-500 transition-colors duration-200" />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-md font-medium text-indigo-400 mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="mt-2 md:mt-0 text-xs font-semibold text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside marker:text-indigo-400">
                {exp.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    <span className="text-gray-300 -ml-1">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
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
