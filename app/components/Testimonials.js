// "use client";

// import { useRef } from "react";
// import TestimonialItem from "./TestimonialItem";

// export default function Testimonials() {
//   const containerRef = useRef(null);

//   const handleMouseEnter = () => {
//     containerRef.current?.style.setProperty("animation-play-state", "paused");
//   };

//   const handleMouseLeave = () => {
//     containerRef.current?.style.setProperty("animation-play-state", "running");
//   };

//   const testimonials = [
//     {
//       name: "John Doe",
//       role: "CEO at Company",
//       testimonial:
//         "This is an amazing service that really helped our business grow!",
//     },
//     {
//       name: "Jane Smith",
//       role: "Marketing Manager",
//       testimonial:
//         "Fantastic experience! The team was highly professional and delivered great results.",
//     },
//     {
//       name: "Samuel Green",
//       role: "Product Designer",
//       testimonial:
//         "A wonderful service with a great support team. Highly recommend to anyone.",
//     },
//   ];

//   return (
//     <section className="bg-gray-900 py-16 border-t border-t-teal-500/20">
//       <div className="container mx-auto px-4">
//         <div className="max-w-2xl mx-auto text-center mb-12">
//           <h2 className="text-4xl font-bold text-center mb-5 text-gray-100">
//             Hear What{" "}
//             <span className="bg-gradient-to-r from-teal-500 via-gray-300 to-pink-600 bg-clip-text text-transparent">
//               My Clients
//             </span>{" "}
//             Say
//           </h2>
//           <p className="text-base text-gray-300">
//             Explore our range of digital services, including web development,
//             design, API integration, and maintenance, to ensure online success.
//             Let us help you create something remarkable.
//           </p>
//         </div>
//         <div
//           className="overflow-hidden whitespace-nowrap relative"
//           ref={containerRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="animate-marquee flex md:flex-row flex-col">
//             {testimonials.concat(testimonials).map((testimonial, index) => (
//               <TestimonialItem
//                 key={index}
//                 name={testimonial.name}
//                 role={testimonial.role}
//                 testimonial={testimonial.testimonial}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialItem from "./TestimonialItem";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // const testimonials = [
  //   {
  //     name: "John Doe",
  //     role: "CEO at Company",
  //     testimonial:
  //       "This is an amazing service that really helped our business grow!",
  //   },
  //   {
  //     name: "Jane Smith",
  //     role: "Marketing Manager",
  //     testimonial:
  //       "Fantastic experience! The team was highly professional and delivered great results.",
  //   },
  //   {
  //     name: "Samuel Green",
  //     role: "Product Designer",
  //     testimonial:
  //       "A wonderful service with a great support team. Highly recommend to anyone.",
  //   },
  // ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at Company",
      testimonial:
        "Numan's work exceeded our expectations. His expertise played a key role in our project's success.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      role: "Marketing Manager",
      testimonial:
        "Working with Numan was a fantastic experience. He was professional, communicative, and delivered everything on time.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Samuel Green",
      role: "Product Designer",
      testimonial:
        "Numan is an incredibly skilled developer. I highly recommend him for any project needing precision and creativity.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // const prevSlide = () => {
  //   setCurrent(
  //     (prev) => (prev - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section className="bg-gray-900 py-16 border-t border-t-teal-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-100">
            Hear What{" "}
            <span className="bg-gradient-to-r from-teal-500 via-gray-300 to-pink-600 bg-clip-text text-transparent">
              My Clients
            </span>{" "}
            Say
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            Explore our range of digital services, including web development,
            design, API integration, and maintenance, to ensure online success.
            Let us help you create something remarkable.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto w-full">
          <div className="overflow-hidden h-auto min-h-[160px] md:min-h-[180px]">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`absolute w-full transition-opacity duration-700 ease-in-out ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <TestimonialItem
                  name={item.name}
                  role={item.role}
                  testimonial={item.testimonial}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-teal-500 scale-110" : "bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
