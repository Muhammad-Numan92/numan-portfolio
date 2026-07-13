"use client";

import { Github, Linkedin, Mail, Download, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Expertise",
      href: "#tech-stack",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left */}

          <div>
            <h2 className="text-3xl font-black text-white">
              Muhammad{" "}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Numan
              </span>
            </h2>

            <p className="mt-3 text-lg font-medium text-teal-400">
              Full Stack Developer
            </p>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Passionate about building scalable SaaS applications, enterprise
              solutions, and modern web experiences using Laravel, Next.js,
              Vue.js, and cloud technologies.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/Numan-star"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-teal-400 hover:text-teal-400"
              >
                <Github size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-numan-full-stack-dev/"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-teal-400 hover:text-teal-400"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:numan.codes@gmail.com"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-teal-400 hover:text-teal-400"
              >
                <Mail size={22} />
              </a>

              <a
                href="/Numan-Resume(updated).pdf"
                download
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-teal-400 hover:text-teal-400"
              >
                <Download size={22} />
              </a>
            </div>
          </div>

          {/* Center */}

          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-slate-400 transition hover:translate-x-2 hover:text-teal-400"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}

          <div>
            <h3 className="text-xl font-bold text-white">
              Let's Build Something Great
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I'm currently available for freelance projects, full-time
              opportunities, and exciting collaborations.
            </p>

            <a
              href="mailto:numan.codes@gmail.com"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-7 py-3 font-semibold text-white transition hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="flex items-center gap-2 text-slate-500">
            © {new Date().getFullYear()} Muhammad Numan. Built with Next.js &
            Tailwind CSS
            <Heart size={16} className="fill-red-500 text-red-500" />
          </p>

          <button
            onClick={scrollToTop}
            className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-teal-400 hover:bg-teal-500 hover:text-white"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
