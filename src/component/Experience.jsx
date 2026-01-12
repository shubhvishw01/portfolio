export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="mb-14 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Project <span className="text-blue-600">Experience</span>
        </h2>
        <p className="text-gray-500 max-w-2xl">
          Hands-on project-based experience building real-world React and MERN
          stack applications.
        </p>
      </div>

      {/* Experience Card */}
      <div className="relative border border-gray-200 rounded-2xl p-8 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md transition">
        {/* Role & Duration */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              React / MERN Stack Developer
            </h3>
            <p className="text-gray-600">Project-Based Experience</p>
          </div>
          <span className="mt-2 md:mt-0 inline-block px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            April 2024 – Present
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Gained strong hands-on experience by designing and developing
          real-world web applications using the MERN stack. Worked on complete
          application lifecycles including UI development, API integration,
          authentication, state management, and deployment.
        </p>

        {/* Responsibilities */}
        <ul className="space-y-3 text-gray-700 list-disc ml-5 mb-6">
          <li>
            Developed responsive and reusable UI components using{" "}
            <strong>React Hooks</strong> and modern JavaScript (ES6+).
          </li>
          <li>
            Managed global application state efficiently using{" "}
            <strong>Redux Toolkit</strong>.
          </li>
          <li>
            Integrated backend services through <strong>REST APIs</strong> using
            Axios and handled asynchronous data flows.
          </li>
          <li>
            Built backend functionality with{" "}
            <strong>Node.js, Express.js, and MongoDB</strong>, including CRUD
            operations and authentication flows.
          </li>
          <li>
            Converted <strong>Figma designs</strong> into pixel-perfect,
            responsive React interfaces.
          </li>
          <li>
            Deployed applications on <strong>Vercel</strong> and{" "}
            <strong>Render</strong> and maintained code using Git & GitHub.
          </li>
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "JavaScript (ES6+)",
            "Redux Toolkit",
            "React Router",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Axios",
            "Vercel",
            "Render",
            "Git & GitHub",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
