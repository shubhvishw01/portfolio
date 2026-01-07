import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="Hero" className="relative overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-7">
            {/* <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-white/60 backdrop-blur border border-white/40 shadow hover:scale-105 transition">
              👋 Welcome to my portfolio
            </span> */}

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shubham Vishwakarma
              </span>
            </h1>

            {/* MERN Highlight */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              <span className="text-green-600">M</span>ongoDB ·{" "}
              <span className="text-green-600">E</span>xpress ·{" "}
              <span className="text-blue-600">R</span>eact ·{" "}
              <span className="text-green-600">N</span>ode Developer
            </h2>

            <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
              MERN Stack Developer with <strong>1+ year</strong> of experience
              building secure, scalable, and high-performance web applications.
              Passionate about clean UI, efficient APIs, and real-world problem
              solving.
            </p>

            {/* Tech Stack Pills with Hover */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                "React",
                "Redux Toolkit",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-sm rounded-full bg-white/70 backdrop-blur border border-white/40 shadow
              hover:-translate-y-1 hover:shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-5 justify-center md:justify-start">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/MERN.pdf";
                  link.download = "Shubham-Vishwakarma-Resume.pdf";
                  link.click();
                }}
                className="group px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg
            hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                📄 Download Resume
              </button>

              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur shadow
            hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-300 text-center"
              >
                🚀 Let’s Connect
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/3 flex justify-center md:ml-25">
            <div className="relative group">
              {/* Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-40 group-hover:opacity-70 transition duration-300" />

              {/* Image */}
              <img
                src="/Profile.jpg"
                alt="Shubham Vishwakarma"
                className="relative w-90 h-110 object-cover rounded-3xl border border-white/40 shadow-2xl
            group-hover:scale-105 transition duration-300"
              />

              {/* Floating Badge */}
              {/* <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm rounded-full bg-white shadow border">
                MERN Developer 🚀
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
