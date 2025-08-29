export default function Projects() {
  const projects = [
    {
      title: "Oldschool Runescape Market Script",
      description:
        "A python script that would use the OSRS wiki API to grab the prices of items and calculate arbitrage opportunities.",
      link: "https://github.com/Koolstir/OSRS-flipping-tracker",
    },
    {
      title: "Project Two",
      description:
        "Another project description. Keep it clear and concise so visitors can quickly understand what you built.",
      link: "#",
    },
    {
      title: "Project Three",
      description:
        "Describe your third project here. You can also add a link to the GitHub repo, a live demo, or both.",
      link: "#",
    },
  ];

  return (
    <section id="Projects" className="mt-20 mb-20 max-w-5xl mx-auto px-4">
      <header className="mb-10 text-4xl font-semibold text-center">
        Projects
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg p-6 bg-white border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}