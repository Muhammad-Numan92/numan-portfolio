// app/layout.js
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata = {
  title: "Developer Numan - Software Engineer & Web Developer",
  description:
    "I am Numan, a passionate software engineer skilled in crafting stellar web experiences using Laravel, Next.js, and React.",
  keywords:
    "Numan, Software Engineer, Web Developer, Laravel, Next.js, React, Full Stack Developer, PHP, JavaScript",
  author: "Numan",
  openGraph: {
    title: "Developer Numan - Software Engineer",
    description:
      "Creating stellar web experiences using the latest technologies like Laravel, Next.js, and React.",
    url: "https://developernuman.vercel.app/",
    image: "https://developernuman.vercel.app/numan.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Numan894565792",
    title: "Developer Numan - Software Engineer",
    description:
      "Skilled in Laravel, Next.js, and React, delivering top-notch web experiences.",
    image: "https://developernuman.vercel.app/numan.jpeg",
  },
  verification: {
    google: "onII4hxxp8M1XmPi1go7juM5FTCXugQWkFdy7F5i4cU",
  },
  canonical: "https://developernuman.vercel.app/",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Header />
        <main className="bg-gray-900">{children}</main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </body>
    </html>
  );
}
