// // app/page.js

// import Services from './components/Services';
// import ProfileCard from './components/ProfileCard';
// import Testimonials from './components/Testimonials';
// import ContactSection from './components/ContactSection';

// export default function Home() {
//   return (
//     <div>
//       <main className="">
//         <ProfileCard />
//         <Services />
//         <ContactSection/>
//         <Testimonials/>
//       </main>
//     </div>
//   );
// }

// app/page.js
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Services from "./components/Services";
import ProfileCard from "./components/ProfileCard";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-900">
      <main className="bg-gray-900">
        <div data-aos="fade-up">
          <ProfileCard />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Services />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <ContactSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <Testimonials />
        </div>
      </main>
    </div>
  );
}
