"use client";

import ContactForm from "./ContactForm";
import { FaRegQuestionCircle, FaRegCommentDots } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactSection() {
  const scrollToFirstNameInput = () => {
    const firstNameInput = document.getElementById("first-name-input");
    if (firstNameInput) {
      //   firstNameInput.scrollIntoView({ behavior: 'smooth' });
      firstNameInput.focus();
    }
  };

  return (
    <section className="bg-gray-900 py-16 border-t border-t-teal-500/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-center mb-5 text-gray-100">
          <span className="bg-gradient-to-r from-teal-500 via-gray-300 to-pink-600 bg-clip-text text-transparent">
            Contact
          </span>{" "}
          Us
        </h2>
        <p className="text-gray-100 text-xl max-w-xl mx-auto mb-10">
          We&apos;d love to talk about how we can help you.
        </p>
      </div>

      <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-between gap-20 py-0">
        {/* Left Side: Info Cards */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 mb-8 lg:mb-0">
          {/* Info Card 1 */}
          <div className="bg-gray-900 p-6 rounded-sm shadow-lg border border-teal-950 hover:border-teal-700 flex gap-4">
            <div>
              <FaRegQuestionCircle className="text-teal-500 text-3xl mr-4" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Knowledgebase</h3>
              <p className="text-gray-400">
                We&apos;re here to help with any questions or code.
              </p>
              <a
                onClick={scrollToFirstNameInput}
                className="text-teal-700 mt-4 inline-block hover:text-teal-500 cursor-pointer"
              >
                Contact support →
              </a>
            </div>
          </div>

          {/* Info Card 2 */}
          {/* <div className="bg-gray-900 p-6 rounded-sm shadow-lg border border-teal-950 hover:border-teal-700 flex gap-4">
                        <div>
                            <FaRegCommentDots className="text-teal-500 text-3xl mr-4" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg">FAQ</h3>
                            <p className="text-gray-400">Search our FAQ for answers to anything you might ask.</p>
                            <a className="text-teal-700 mt-4 inline-block hover:text-teal-500 cursor-pointer">Visit FAQ →</a>
                        </div>
                    </div> */}
          <div className="bg-gray-900 p-6 rounded-sm shadow-lg border border-teal-950 hover:border-teal-700 flex gap-4">
            <div>
              <FaGithub className="text-teal-500 text-3xl mr-4" />{" "}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                GitHub Repositories
              </h3>{" "}
              <p className="text-gray-400">
                Explore my GitHub for projects and open-source contributions.
              </p>
              <a
                href="https://github.com/Numan-star"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 mt-4 inline-block hover:text-teal-500 cursor-pointer"
              >
                Visit GitHub →
              </a>
            </div>
          </div>

          {/* Info Card 3 */}
          <div className="bg-gray-900 p-6 rounded-sm shadow-lg border border-teal-950 hover:border-teal-700 flex gap-4">
            <div>
              <MdOutlineEmail className="text-teal-500 text-3xl mr-4" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                Contact us by Email
              </h3>
              <p className="text-gray-400">
                If you wish to write us an email instead please use
              </p>
              <a
                href="mailto:numan.codes@gmail.com"
                className="text-teal-700 mt-4 inline-block hover:text-teal-500"
              >
                numan.codes@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2 mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
