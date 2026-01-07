export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Projects & <span className="text-blue-600">Work</span>
          </h2>
          <p className="text-gray-500 max-w-2xl">
            A selection of real-world projects that showcase my skills in
            building scalable, user-focused, and full-stack web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Event Management System – NGO Platform
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              A full-stack web application designed for NGOs to efficiently
              manage events, volunteers, and registrations. The platform
              streamlines communication between organizers and volunteers,
              improving event planning and participation.
            </p>

            <ul className="list-disc ml-5 space-y-2 text-gray-700 mb-5">
              <li>
                Built a responsive frontend using <strong>React</strong> and{" "}
                <strong>Tailwind CSS</strong>.
              </li>
              <li>
                Developed backend services with <strong>Node.js</strong> and{" "}
                <strong>Express</strong>, integrated with{" "}
                <strong>MongoDB</strong>.
              </li>
              <li>
                Implemented user authentication, event registration, and
                volunteer management features.
              </li>
              <li>
                Deployed the application on <strong>Vercel</strong> for high
                availability and performance.
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mb-5">
              {[
                "React",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
                "REST APIs",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://vrakshmitra.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              🔗 Live Demo
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Political Calendar & Event Management Platform
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              An internal dashboard application designed to manage political
              events, schedules, and timelines with role-based access control.
              The system enables administrators to securely manage events and
              monitor activity across different user roles.
            </p>

            <ul className="list-disc ml-5 space-y-2 text-gray-700 mb-5">
              <li>
                Developed a secure admin dashboard using <strong>React</strong>{" "}
                with protected routes.
              </li>
              <li>
                Implemented <strong>JWT-based authentication</strong> and
                role-based access control.
              </li>
              <li>
                Built RESTful APIs for event creation, updates, and tracking.
              </li>
              <li>
                Focused on data security, performance optimization, and clean
                API architecture.
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Redux Toolkit",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "REST APIs",
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
        </div>
      </div>
    </section>
  );
}
