export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto py-24 px-6 md:px-10">
      {/* Heading */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-500 max-w-2xl">
          A brief introduction to my background, technical skills, and journey
          into web development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            I’m a{" "}
            <span className="font-semibold text-blue-600">
              React / MERN Stack Developer
            </span>{" "}
            with strong hands-on experience in building responsive and scalable
            web applications. My primary focus is on creating clean, modern user
            interfaces using React and integrating them with efficient backend
            services.
          </p>

          <p>
            I have worked extensively on real-world, project-based applications
            using <strong>React, JavaScript (ES6+), Redux Toolkit</strong>, and
            modern UI frameworks like <strong>Tailwind CSS</strong>. On the
            backend, I have hands-on experience with{" "}
            <strong>Node.js, Express.js, and MongoDB</strong>, including REST
            API development and frontend–backend integration.
          </p>

          <p>
            My experience includes implementing authentication flows, managing
            application state, handling asynchronous data, and deploying
            applications on platforms like <strong>Vercel</strong>. I strongly
            believe in continuous learning and enjoy building practical
            solutions that solve real-world problems.
          </p>
        </div>

        {/* Right Content */}
        <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Tech Stack & Tools
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <span>⚛️ React.js</span>
            <span>🧠 JavaScript (ES6+)</span>
            <span>🧩 Redux Toolkit</span>
            <span>🚏 React Router</span>
            <span>🟢 Node.js</span>
            <span>🚀 Express.js</span>
            <span>🍃 MongoDB</span>
            <span>🎨 Tailwind CSS</span>
            <span>📦 Git & GitHub</span>
            <span>🔗 REST APIs</span>
            <span>☁️ Vercel</span>
            <span>🛠️ VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}
