"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Star, Globe } from "lucide-react";

const projects = [
  {
    title: "PaySano",

    image: "/projects/paysano.png",

    description:
      "Business listing platform supporting subscriptions, secure ordering, chat system, Google Maps integration and role-based access control.",

    technologies: ["Laravel", "Stripe", "Google Maps", "RBAC", "MySQL"],

    demo: "https://paysano.it/",
    github: "#",
  },

  {
    title: "Sokar",

    image: "/projects/sokar.png",

    description:
      "Healthcare platform for tracking vitals, medication reminders and family health management powered by Laravel and Aidex API.",

    technologies: ["Laravel", "Aidex API", "MySQL", "Bootstrap"],

    demo: "https://sokar.vercel.app/",
    github: "#",
  },

  {
    title: "My Mufti",

    image: "/projects/mymufti.png",

    description:
      "Islamic Q&A platform connecting users with qualified Muftis using optimized search, community features and scalable Laravel backend.",

    technologies: ["Laravel", "MySQL", "REST API", "Bootstrap"],

    demo: "https://mymuftiapp.com/",
    github: "#",
  },

  {
    title: "ElloTenant",
    featured: true,
    image: "/projects/ellotenant.png",

    description:
      "A production-ready multi-tenant SaaS platform for sober living property management featuring dual admin & tenant portals, digital lease signing, Stripe rent payments, donor management, GPS geo-fencing, drug screening, and secure multi-domain architecture.",

    technologies: [
      "Laravel",
      "Next.js",
      "Stripe",
      "Google Maps",
      "Twilio",
      "MySQL",
      "REST API",
      "Tailwind",
    ],

    demo: "#",
    github: "#",
  },

  {
    title: "Productively",

    image: "/projects/productively.png",

    description:
      "Business productivity SaaS for UK businesses with task management, AI compliance suggestions, Stripe subscriptions, Outlook & Google Calendar sync, Companies House integration and virtual mailbox support.",

    technologies: [
      "Laravel",
      "Stripe",
      "AI",
      "REST API",
      "Tailwind",
      "Next.js",
    ],

    demo: "#",
    github: "#",
  },

  {
    title: "MPG OCR",

    image: "/projects/mpgocr.png",

    description:
      "OCR document processing platform using Next.js and MongoDB with Oracle TMS synchronization and automated data extraction.",

    technologies: ["Next.js", "MongoDB", "OCR API", "Oracle", "Tailwind"],

    demo: "https://mpgocr.vercel.app/",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm uppercase tracking-widest text-teal-400">
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A collection of production-ready SaaS applications, healthcare
            systems, OCR automation platforms, payment solutions and enterprise
            software that I've designed and developed.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-teal-400/40 hover:shadow-[0_20px_60px_rgba(20,184,166,.18)]"
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className=" object-fill transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                {project.featured && (
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black">
                    <Star size={16} fill="currentColor" />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-[#0B1120] px-4 py-2 text-sm text-slate-300 transition hover:border-teal-400 hover:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-8 flex flex-wrap gap-4">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
                    >
                      <Globe size={18} />
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
