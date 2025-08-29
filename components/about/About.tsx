export default function About() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <header className="mt-20 mb-10 text-4xl font-semibold text-center">
          About
        </header>
        <p className="mx-10 mb-10 text-lg font-mono max-w-2xl text-center">
          I’m a computer science student and aspiring developer with a growing
          foundation in programming, problem-solving, and software development.
          I enjoy working with languages like Python, Java, and C, and I’m eager
          to keep building my skills by creating projects that solve real
          problems. As I continue learning, I’m excited to explore new
          technologies and contribute to meaningful software solutions.
        </p>
      </section>

      <section className="mt-12 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div className="flex flex-col items-center text-center">
            <header className="mb-5 font-extrabold text-xl">
              Programming Languages
            </header>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
                <img
                  className="rounded-full w-20 h-20 bg-transparent mb-2"
                  src="/python.png"
                  alt="Python Logo"
                />
                <span className="font-semibold">Python</span>
              </div>

              <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
                <img
                  className="rounded-full w-20 h-20 bg-transparent mb-2"
                  src="/C.png"
                  alt="C Logo"
                />
                <span className="font-semibold">C</span>
              </div>

              <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
                <img
                  className="rounded-full w-20 h-20 bg-transparent mb-2"
                  src="/tailwind.png"
                  alt="Tailwind Logo"
                />
                <span className="font-semibold">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Developer Skills */}
          <div className="flex flex-col items-center text-center">
            <header className="mb-5 font-extrabold text-xl">
              Developer Skills
            </header>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
                <img
                  className="rounded-full w-20 h-20 bg-transparent mb-2"
                  src="/Git.png"
                  alt="Git Logo"
                />
                <span className="font-semibold">Git</span>
              </div>

              {/* Example of adding more */}
              <div className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg transition">
                <img
                  className="rounded-full w-20 h-20 bg-transparent mb-2"
                  src="/linux.jpg"
                  alt="Linux Logo"
                />
                <span className="font-semibold">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
