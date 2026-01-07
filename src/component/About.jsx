export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto py-24 px-6 md:px-10">
      {/* Heading */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-500 max-w-2xl">
          Get to know more about my background, skills, and what I love
          building.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            I’m a{" "}
            <span className="font-semibold text-blue-600">
              MERN Stack Developer
            </span>{" "}
            with <span className="font-semibold">1+ year</span> of hands-on
            experience in designing and developing scalable, high-performance
            web applications. My core expertise lies in building modern user
            interfaces with React and developing robust backend services using
            Node.js, Express, and MongoDB.
          </p>

          <p>
            Currently, I’m working at{" "}
            <span className="font-semibold text-green-600">
              HP Software Technology India
            </span>
            , where I actively contribute to real-world projects, collaborate
            with cross-functional teams, and focus on writing clean,
            maintainable, and reusable code. I enjoy solving complex problems
            and optimizing application performance.
          </p>

          <p>
            I have hands-on experience with REST APIs, authentication,
            role-based access control, and frontend–backend integration. I
            strongly believe in continuous learning and staying updated with the
            latest frontend trends and best practices.
          </p>
        </div>

        {/* Right Content */}
        <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Tech Stack & Tools
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <span>⚛️ React.js</span>
            <span>🟢 Node.js</span>
            <span>🧩 Redux / Toolkit</span>
            <span>🚏 Express.js</span>
            <span>🍃 MongoDB</span>
            <span>🎨 Tailwind CSS</span>
            <span>📦 Git & GitHub</span>
            <span>🔐 REST APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
