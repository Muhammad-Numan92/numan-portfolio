"use client";

import ContactForm from "./ContactForm";

import { Mail, Github, Linkedin, MapPin, Briefcase } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-24 border-t border-white/10"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm font-medium uppercase tracking-widest text-teal-400">
            Contact
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white lg:text-5xl">
            Let&apos;s Build Something
            <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Amazing Together
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Have a project in mind or looking for a Full Stack Developer?
            Let&apos;s discuss your ideas and turn them into powerful digital
            solutions.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left Side */}

          <div className="lg:col-span-2 space-y-6">
            {/* Availability */}

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

                <span className="font-medium text-green-400">
                  Available for Freelance & Full-Time Opportunities
                </span>
              </div>
            </div>

            {/* Card */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/40 hover:-translate-y-1">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
                  <Mail className="text-teal-400" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>

                  <p className="mt-2 text-slate-400">
                    Feel free to reach out anytime.
                  </p>

                  <a
                    href="mailto:numan.codes@gmail.com"
                    className="mt-3 inline-block text-teal-400 hover:text-teal-300"
                  >
                    numan.codes@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/40 hover:-translate-y-1">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
                  <Github className="text-teal-400" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">GitHub</h3>

                  <p className="mt-2 text-slate-400">
                    Explore my projects and contributions.
                  </p>

                  <a
                    href="https://github.com/Numan-star"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-teal-400 hover:text-teal-300"
                  >
                    github.com/Numan-star
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/40 hover:-translate-y-1">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
                  <Linkedin className="text-teal-400" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">LinkedIn</h3>

                  <p className="mt-2 text-slate-400">
                    Connect with me professionally.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/muhammad-numan-full-stack-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-teal-400 hover:text-teal-300"
                  >
                    linkedin/muhammad-numan-full-stack-dev
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
                  <MapPin className="text-teal-400" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>

                  <p className="mt-2 text-slate-400">Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
