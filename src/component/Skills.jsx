const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Redux Toolkit",
  "Tailwind CSS",
  "JWT",
  "Git",
  "Vercel",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center md:text-left mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Technologies and tools I use to build scalable, high-performance
            full-stack web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">
              🎨 Frontend
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>⚛️ React.js (Hooks, Context)</li>
              <li>🧩 Redux / Redux Toolkit</li>
              <li>🧭 React Router</li>
              <li>📝 JavaScript (ES6+)</li>
              <li>🌐 HTML5 & CSS3</li>
              <li>🎨 Tailwind CSS / Bootstrap</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              🛠 Backend
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>🟢 Node.js</li>
              <li>🚏 Express.js</li>
              <li>🔐 RESTful APIs</li>
              <li>🔑 Authentication (JWT)</li>
              <li>🧠 MVC Architecture</li>
              <li>⚙️ API Integration</li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-4 text-purple-600">
              🗄 Database
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>🍃 MongoDB</li>
              <li>🧬 Mongoose ODM</li>
              <li>📊 Schema Design</li>
              <li>⚡ CRUD Operations</li>
              <li>🔍 Query Optimization</li>
            </ul>
          </div>

          {/* Tools & Hosting */}
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              🚀 Tools & Hosting
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>📦 Git & GitHub</li>
              <li>☁️ Vercel</li>
              <li>🌍 Netlify</li>
              <li>🖥 Render / Railway</li>
              <li>📮 Postman</li>
              <li>⚙️ VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
