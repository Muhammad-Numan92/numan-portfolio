"use client";

import { Briefcase, Calendar, Award, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Orix Tech",
    location: "Lahore, Pakistan",
    role: "Full Stack Developer",
    duration: "May 2025 — Present",
    description:
      "Building scalable SaaS applications using Laravel, Next.js, and Vue.js. Developing secure REST APIs, integrating Stripe payments, and delivering modern, responsive user experiences.",

    technologies: [
      "Laravel",
      "Next.js",
      "Vue.js",
      "Tailwind",
      "Stripe",
      "REST API",
      "MySQL",
      "Git",
    ],
  },

  {
    company: "ML Bench",
    location: "Lahore, Pakistan",
    role: "Laravel Developer | Full Stack Developer",
    duration: "Oct 2023 — May 2025",
    award: "🏆 Employee of the Month ×2",

    description:
      "Developed enterprise web applications, implemented payment systems, Firebase notifications, Twilio messaging, chat functionality, and optimized application performance for production systems.",

    technologies: [
      "Laravel",
      "Firebase",
      "Twilio",
      "Stripe",
      "Next.js",
      "Tailwind",
      "MySQL",
      "REST API",
    ],
  },

  {
    company: "TNT Sol",
    location: "Lahore, Pakistan",
    role: "Laravel Intern",
    duration: "Jun 2023 — Oct 2023",

    description:
      "Started my professional journey building REST APIs, implementing Laravel MVC architecture, writing unit tests, improving caching strategies, and collaborating using Git.",

    technologies: [
      "Laravel",
      "REST API",
      "Git",
      "MVC",
      "Unit Testing",
      "Caching",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm font-medium uppercase tracking-widest text-teal-400">
            Experience
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white lg:text-5xl">
            My Professional
            <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Over the last 3+ years, I've built production-ready SaaS
            applications, payment systems, REST APIs, and modern web experiences
            for startups and businesses.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">
          {/* Center Line */}

          <div className="absolute left-5 top-0 hidden h-full w-[2px] bg-gradient-to-b from-teal-500 via-cyan-500 to-transparent md:block" />

          <div className="space-y-14">
            {experiences.map((item) => (
              <div
                key={item.company}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-400/40 hover:shadow-[0_20px_60px_rgba(20,184,166,.18)]"
              >
                {/* Timeline Dot */}

                <div className="absolute -left-[42px] top-10 hidden h-6 w-6 rounded-full border-4 border-[#050816] bg-teal-400 md:block" />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.role}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-5 text-sm text-slate-400">
                      <span className="flex items-center gap-2">
                        <Briefcase size={16} />
                        {item.company}
                      </span>

                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {item.location}
                      </span>

                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {item.award && (
                    <div className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
                      <Award size={16} />
                      {item.award}
                    </div>
                  )}
                </div>

                <p className="mt-6 leading-8 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-[#0B1120] px-4 py-2 text-sm text-slate-300 transition hover:border-teal-400 hover:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
