"use client";

import { useState } from "react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  // { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function AboutHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero / About Me Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background gradient blur - top */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-5xl py-24 sm:py-32 lg:py-40">
          {/* Status Badge */}
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-300 ring-1 ring-white/10 hover:ring-white/20 flex items-center gap-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to new work and opportunities.
            </div>
          </div>

          {/* Main Grid: Photo + Bio */}
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-12">
            {/* Profile Picture */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Glow ring under photo */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur-md group-hover:opacity-100 transition duration-300"></div>
                <img
                  src="/keang.png"
                  alt="Sokkeang Profile Photo"
                  className="relative h-64 w-64 rounded-full object-cover shadow-2xl ring-2 ring-white/20 sm:h-80 sm:w-80"
                />
              </div>
            </div>

            {/* Personal Info & Headline */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Hi, I'm <span className="text-indigo-400">Sokkeang</span>
              </h1>

              <p className="mt-2 text-base text-gray-400 font-medium">
                21 years old • Kampong Speu, Cambodia
              </p>

              <p className="mt-3 text-xl font-medium text-indigo-300">
                Junior Web Developer | UI/UX Designer
              </p>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                I build modern, scalable web applications with clean code and
                thoughtful user experiences. Passionate about solving complex
                problems using React, Next.js, and cloud technologies.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://t.me/keangjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.52c-.15.68-.55.85-1.12.53l-3.08-2.27-1.49 1.43c-.16.16-.3.3-.61.3l.22-3.14 5.72-5.17c.25-.22-.05-.34-.38-.12l-7.07 4.45-3.05-.95c-.66-.21-.67-.66.14-.98l11.91-4.59c.55-.2 1.04.14.85.99z" />
                  </svg>
                  Contact Me
                </a>
                {/* <a
                  href="/MyCV.pdf"
                  download="Sokkeang_CV.pdf"
                  className="rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 border border-white/10 transition-colors"
                >
                  Download Resume
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Background gradient blur - bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
