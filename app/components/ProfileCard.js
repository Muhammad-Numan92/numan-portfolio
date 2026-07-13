"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Laravel & Next.js Developer",
  "Backend Developer",
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-[#050816]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-200px] top-[-150px] h-[450px] w-[450px] rounded-full bg-teal-500/20 blur-[160px]" />

        <div className="absolute right-[-150px] bottom-[-150px] h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:gap-0">
        {/* LEFT */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-teal-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Muhammad
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Numan
            </span>
          </h1>

          <div className="mt-8 inline-flex rounded-full border border-teal-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <span className="text-lg font-semibold text-teal-300 sm:text-xl lg:text-2xl">
              {roles[currentRole]}
            </span>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:mx-0">
            Results-driven{" "}
            <span className="font-semibold text-white">
              Full Stack Developer
            </span>{" "}
            with
            <span className="font-semibold text-teal-400">
              {" "}
              3+ years of experience
            </span>{" "}
            building scalable SaaS applications, secure RESTful APIs, and modern
            web platforms using Laravel, Next.js, Vue.js, Tailwind CSS, and
            MySQL.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="mailto:numan.codes@gmail.com"
              className="flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-500/30"
            >
              <Mail size={18} />
              Hire Me
            </a>

            <a
              href="/Numan-Resume(updated).pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:border-teal-400 hover:bg-white/10"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-teal-500/20 blur-[120px] hidden lg:block" />

            {/* Ring */}
            <div className="absolute inset-0 scale-105 rounded-full hidden lg:block border-b border-white/10" />

            <Image
              src="/profile.png"
              alt="Muhammad Numan"
              width={450}
              height={550}
              priority
              className="
                relative
                z-10
                h-auto
                w-[220px]
                sm:w-[260px]
                md:w-[300px]
                lg:w-[340px]
                xl:w-[400px]
                2xl:w-[430px]
                rounded-b-full
                object-contain
                transition-all
                duration-500
                hover:scale-105
                lg:drop-shadow-[0_30px_80px_rgba(45,212,191,.25)]
              "
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
          <ArrowDown className="mt-2 animate-bounce text-teal-400" size={18} />
        </div>
      </div>
    </section>
  );
}
