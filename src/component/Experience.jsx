export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="mb-14 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Work <span className="text-blue-600">Experience</span>
        </h2>
        <p className="text-gray-500 max-w-2xl">
          My professional journey and hands-on experience in building real-world
          full-stack applications.
        </p>
      </div>

      {/* Experience Card */}
      <div className="relative border border-gray-200 rounded-2xl p-8 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md transition">
        {/* Company & Role */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              MERN Stack Developer
            </h3>
            <p className="text-gray-600">HP Software Technology India</p>
          </div>
          <span className="mt-2 md:mt-0 inline-block px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            April 2024 – Present
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Working as a MERN Stack Developer, contributing to the design,
          development, and deployment of scalable full-stack web applications.
          Collaborating with cross-functional teams to deliver high-quality,
          performance-optimized solutions aligned with business requirements.
        </p>

        {/* Responsibilities */}
        <ul className="space-y-3 text-gray-700 list-disc ml-5 mb-6">
          <li>
            Developed and maintained full-stack applications using{" "}
            <strong>React, Node.js, Express, and MongoDB</strong>.
          </li>
          <li>
            Built secure and scalable <strong>RESTful APIs</strong> with{" "}
            <strong>JWT-based authentication</strong> and role-based access
            control.
          </li>
          <li>
            Implemented reusable React components, optimized state management
            using <strong>Redux Toolkit</strong>, and improved application
            performance.
          </li>
          <li>
            Deployed and managed applications on <strong>Vercel</strong> and{" "}
            <strong>Render</strong>, ensuring smooth CI/CD workflows.
          </li>
          <li>
            Used <strong>Git & GitHub</strong> for version control and
            collaborated in agile development cycles.
          </li>
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Redux Toolkit",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "REST APIs",
            "Vercel",
            "Render",
            "Git",
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
