"use client";

import { Code2, Database, Server, Globe, Cloud, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    technologies: [
      "Laravel",
      "PHP",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "Laravel Cashier",
      "MVC Architecture",
      "Eloquent ORM",
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    technologies: [
      "Next.js",
      "Vue.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-orange-500 to-red-500",
    technologies: [
      "MySQL",
      "MongoDB",
      "Oracle",
      "SQL",
      "Database Optimization",
    ],
  },
  {
    title: "Cloud & APIs",
    icon: Cloud,
    color: "from-violet-500 to-fuchsia-500",
    technologies: [
      "Stripe",
      "Firebase",
      "Twilio",
      "Google Maps",
      "Google APIs",
      "Stannp API",
      "Companies House API",
      "OCR API",
      "Aidex API",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    color: "from-yellow-500 to-orange-500",
    technologies: [
      "Git",
      "GitHub",
      "Postman",
      "Agile",
      "Scrum",
      "VS Code",
      "Linux",
      "Vercel",
    ],
  },
  {
    title: "Core Expertise",
    icon: Code2,
    color: "from-pink-500 to-rose-500",
    technologies: [
      "SaaS Development",
      "Payment Integration",
      "API Integration",
      "Performance Optimization",
      "Responsive Design",
      "Security",
      "Scalable Architecture",
      "Clean Code",
    ],
  },
];

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm uppercase tracking-widest text-teal-400">
            Skills
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Expertise & Tech Stack
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I build secure, scalable and high-performance web applications using
            modern technologies across the full development stack—from backend
            architecture to responsive frontend experiences and cloud
            integrations.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {techCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-teal-400/40 hover:shadow-[0_20px_60px_rgba(20,184,166,.18)]"
              >
                {/* Icon */}

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${category.color} p-4 shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {category.title}
                </h3>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-[#0B1120] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-teal-400 hover:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}

        <div className="mt-24 grid gap-6 md:grid-cols-4">
          {[
            {
              value: "3+",
              label: "Years Experience",
            },
            {
              value: "15+",
              label: "Production Projects",
            },
            {
              value: "20+",
              label: "Technologies",
            },
            {
              value: "100%",
              label: "Responsive Design",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:border-teal-400/40 hover:shadow-[0_15px_40px_rgba(20,184,166,.15)]"
            >
              <h3 className="text-5xl font-black bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
