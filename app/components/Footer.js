// "use client";

// // app/components/Footer.js
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-4 border-t border-t-teal-500/20">
//       <div className="container mx-auto text-center">
//         <p className="text-sm mb-5">© {new Date().getFullYear()} Numan&apos;s Portfolio. All rights reserved.</p>
//         <div className="flex justify-center space-x-4 mb-5">
//           <a href="https://github.com/Numan-star" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 flex items-center space-x-2">
//             <FaGithub className="w-5 h-5" />
//             <span>GitHub</span>
//           </a>
//           <a href="https://linkedin.com/in/muhammad-numan-618a24241/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 flex items-center space-x-2">
//             <FaLinkedin className="w-5 h-5" />
//             <span>LinkedIn</span>
//           </a>
//           <a href="mailto:numan.codes@gmail.com" className="hover:text-teal-500 flex items-center space-x-2">
//             <FaEnvelope className="w-5 h-5" />
//             <span>Contact</span>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// "use client";

// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-8 border-t border-t-teal-500/30">
//       <div className="container mx-auto text-center">
//         <p className="text-sm mb-5 text-gray-400">
//           © {new Date().getFullYear()} Numan&apos;s Portfolio. All rights
//           reserved.
//         </p>
//         <div className="flex justify-center space-x-6 mb-8">
//           <a
//             href="https://github.com/Numan-star"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-teal-500 flex items-center space-x-2 transition-transform transform hover:scale-110"
//           >
//             <FaGithub className="w-6 h-6" />
//             <span className="text-lg">GitHub</span>
//           </a>
//           <a
//             href="https://linkedin.com/in/muhammad-numan-618a24241/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-teal-500 flex items-center space-x-2 transition-transform transform hover:scale-110"
//           >
//             <FaLinkedin className="w-6 h-6" />
//             <span className="text-lg">LinkedIn</span>
//           </a>
//           <a
//             href="mailto:numan.codes@gmail.com"
//             className="hover:text-teal-500 flex items-center space-x-2 transition-transform transform hover:scale-110"
//           >
//             <FaEnvelope className="w-6 h-6" />
//             <span className="text-lg">Contact</span>
//           </a>
//         </div>
//         <div className="text-sm text-gray-400">
//           <p className="mb-2">
//             Check out my projects, open-source contributions, and more on
//             GitHub!
//           </p>
//           <p>Let's connect and collaborate to create amazing things.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-t-teal-500/30">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-5 text-gray-400">
          © {new Date().getFullYear()} Numan&apos;s Portfolio. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/Numan-star"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 flex items-center space-x-2 transition-transform transform hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
            <span className="text-lg">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/muhammad-numan-618a24241/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 flex items-center space-x-2 transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6" />
            <span className="text-lg">LinkedIn</span>
          </a>
          <a
            href="mailto:numan.codes@gmail.com"
            className="hover:text-teal-500 flex items-center space-x-2 transition-transform transform hover:scale-110"
          >
            <FaEnvelope className="w-6 h-6" />
            <span className="text-lg">Contact</span>
          </a>
        </div>
        <div className="text-sm text-gray-400 mb-4">
          <p className="mb-2">
            Check out my projects, open-source contributions, and more on
            GitHub!
          </p>
          <p>Let&apos;s connect and collaborate to create amazing things.</p>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="/Numan-Resume(updated).pdf"
            download
            className="flex items-center max-w-sm justify-center mt-4 py-2 px-6 bg-transparent hover:bg-teal-500 hover:text-black text-teal-700 border border-teal-700 font-semibold rounded-md transition-all duration-300 hover:scale-105"
          >
            <FaDownload className="mr-2 w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
