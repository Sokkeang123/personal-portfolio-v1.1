import React from "react";

export default function Education() {
  return (
    <div>
      <div id="education" className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base font-semibold text-indigo-400">
            Academic Background & Qualifications
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            My Education & Skills
          </p>

          {/* Bento Grid */}
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* Card 1: University Degree */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] p-8 sm:p-10">
                <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 ring-1 ring-indigo-500/20 w-fit">
                  2023 – 2026
                </span>
                <p className="mt-4 text-2xl font-bold tracking-tight text-white">
                  Bachelor of Computer Science
                </p>
                <p className="mt-1 text-lg font-medium text-indigo-300">
                  Royal University of Phnom Penh (RUPP)
                </p>
                <p className="mt-4 text-sm/6 text-gray-400">
                  Currently pursuing a degree in Computer Science, focusing on
                  core software engineering principles, algorithms, data
                  structures, and computer networking.
                </p>

                {/* Decorative Tech Badge Cloud */}
                <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {[
                    "C / C++",
                    "Java",
                    "SQL",
                    "Data Structures",
                    "Algorithms",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gray-900/80 px-2.5 py-1 text-xs font-medium text-gray-300 ring-1 ring-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
            </div>

            {/* Card 2: Specialized Full-Stack Training */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-500/20">
                    Feb 03 – Jul 10, 2025
                  </span>
                </div>
                <p className="mt-3 text-xl font-bold text-white">
                  Full-Stack Web Development Course
                </p>
                <p className="mt-1 text-sm font-medium text-indigo-300">
                  Korea Software HRD Center
                </p>
                <p className="mt-3 text-sm/6 text-gray-400">
                  Gained intensive, hands-on experience building full-stack web
                  applications using modern frontend frameworks like React,
                  Next.js, and Tailwind CSS. Experience working with databases,
                  backend APIs, Figma for UI design, and GitHub for version
                  control.
                </p>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
            </div>

            {/* Card 3: Additional Short Courses & Languages */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8 sm:p-10">
                <p className="text-lg font-bold text-white">
                  Specialized Training & Languages
                </p>

                {/* Short Courses */}
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <div>
                      <span className="font-semibold text-white">
                        Network Specialist Course
                      </span>
                      <p className="text-xs text-gray-400">Sunrise Institute</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <div>
                      <span className="font-semibold text-white">
                        Web Front-End Course
                      </span>
                      <p className="text-xs text-gray-400">ETEC Center</p>
                    </div>
                  </li>
                </ul>

                {/* Languages Section */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Languages
                  </p>
                  <div className="mt-2 flex gap-4 text-xs text-gray-300">
                    <div>
                      <span className="font-medium text-white">Khmer:</span>{" "}
                      Native
                    </div>
                    <div>
                      <span className="font-medium text-white">English:</span>{" "}
                      Beginner
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
            </div>

            {/* Card 4: Software & Technical Stack */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] p-8 sm:p-10">
                <p className="text-2xl font-bold text-white">
                  Software & Technical Stack
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Technologies and tools mastered throughout my academic and
                  training journey:
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-indigo-300">Frontend</p>
                    <p className="text-gray-300">
                      HTML, CSS, JavaScript, TypeScript, React.js, Next.js,
                      Tailwind CSS, Bootstrap
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-300">
                      Backend & Databases
                    </p>
                    <p className="text-gray-300">Node.js, PHP, SQL, MySQL</p>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-300">
                      Languages & Design Tools
                    </p>
                    <p className="text-gray-300">
                      C, C++, Java, Figma, GitHub, Swagger
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-300">
                      Productivity Software
                    </p>
                    <p className="text-gray-300">
                      MS Word, MS Excel, MS PowerPoint
                    </p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
