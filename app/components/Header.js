"use client";

import { useState } from "react";
import { Code2, Menu, X, Download } from "lucide-react";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Expertise",
    href: "#tech-stack",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-2 flex h-20 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#050816]/70 px-8 backdrop-blur-xl">
        {/* Logo */}

        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30">
            <Code2 size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">Muhammad Numan</h2>

            <p className="text-xs tracking-widest text-teal-400 uppercase">
              Full Stack Developer
            </p>
          </div>
        </a>

        {/* Desktop */}

        <ul className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative text-sm font-medium text-gray-300 transition duration-300 hover:text-teal-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume */}

        <div className="hidden lg:block">
          <a
            href="/Numan-Resume(updated).pdf"
            download
            className="flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="mx-5 mt-3 rounded-2xl border border-white/10 bg-[#0B1120]/95 p-6 backdrop-blur-xl lg:hidden">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg text-gray-300 transition hover:text-teal-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Muhammad-Numan-CV.pdf"
            download
            className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-teal-500 py-3 text-white"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
