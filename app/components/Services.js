"use client"; // This line makes this component a Client Component

// app/components/Services.js
import ServiceCard from "./ServiceCard";

import { FaCode } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuFileSearch } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";

export default function Services() {
  // Array of services to be displayed
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description:
        "I build secure and scalable web applications using Laravel, MySQL, and modern frontend frameworks like Vue.js and Next.js. From authentication systems to RESTful APIs, I ensure clean architecture and full-stack functionality.",
    },
    {
      icon: HiOutlineDesktopComputer,
      title: "Responsive Frontend Design",
      description:
        "I design responsive, mobile-first interfaces using Vue.js, Tailwind CSS, HTML, and JavaScript. Your application will look great and function seamlessly across all devices with component-based UI and optimized styling.",
    },
    {
      icon: HiOutlineShoppingBag,
      title: "E-commerce Development",
      description:
        "I develop robust e-commerce platforms with features like product management, order processing, and secure payment integration using third-party APIs like Stripe. I ensure a smooth shopping experience from cart to checkout.",
    },
    {
      icon: LuFileSearch,
      title: "CMS & Admin Panels",
      description:
        "I build custom CMS and admin panels using Laravel and MySQL, allowing you to manage users, content, and settings with ease. These dashboards are styled using Tailwind CSS for a clean and professional UI.",
    },
    {
      icon: IoSettingsOutline,
      title: "Custom Web Applications",
      description:
        "From CRM systems to workflow automation tools, I create custom web applications tailored to your business needs. I integrate third-party APIs such as Twilio for messaging and Google Maps for location-based features.",
    },
    {
      icon: VscTools,
      title: "Website Maintenance & Optimization",
      description:
        "I provide ongoing support to keep your application fast, secure, and up-to-date. This includes performance optimization, regular backups, bug fixes, security updates, and third-party service monitoring.",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 border-t border-t-teal-500/20">
      {/* py-10 text-white bg-gray-900 border-t sm:py-14 lg:py-20 border-t-teal-500/20 */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-100">
          Our{" "}
          <span className="bg-gradient-to-r from-teal-500 via-gray-300 to-pink-600 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-gray-100 text-xl max-w-2xl mx-auto mb-10">
          Discover our tailored digital solutions—ranging from web application
          development, responsive frontend design, and RESTful API integration
          to ongoing backend maintenance and performance optimization. Let’s
          build scalable, secure, and impactful digital experiences together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
