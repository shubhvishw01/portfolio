export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white py-20"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Let’s Connect 🤝</h2>
        <p className="text-gray-400 mb-10">
          Feel free to reach out for opportunities, collaborations, or just a
          friendly hello.
        </p>

        {/* Contact Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
          <p className="mb-4 text-lg">
            📧{" "}
            <a
              href="mailto:shubh.vishw01@gmail.com"
              className="hover:text-blue-400 transition"
            >
              shubh.vishw01@gmail.com
            </a>
          </p>
          <p className="mb-8 text-lg">
            📞{" "}
            <a
              href="tel:9309792386"
              className="hover:text-green-400 transition"
            >
              9309792386
            </a>
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shubham-vishwakarma-ab609a219"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.9V14.89c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.66H9.364V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM6.956 20.452H3.72V9h3.236v11.452z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/shubhvishw01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.19.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.57.23 2.73.11 3.02.74.81 1.18 1.85 1.18 3.11 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.68.8.56 4.56-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 mt-10 text-sm">
          © {new Date().getFullYear()} Shubham Vishwakarma • MERN Stack
          Developer
        </p>
      </div>
    </section>
  );
}
