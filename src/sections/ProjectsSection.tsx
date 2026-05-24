const projects = [
  {
    title: "FarmFresh",
    subtitle: "Full Stack Grocery Delivery Platform",
    description:
      "A production-style farm-to-home e-commerce platform built using ASP.NET Core, React, SQL Server, Azure, and clean architecture principles.",
    tech: [
      "ASP.NET Core",
      "React",
      "SQL Server",
      "Azure",
      "JWT",
      "Entity Framework",
    ],
  },
  {
    title: "Azure Order Email Function",
    subtitle: "Event-Driven Azure Function",
    description:
      "Queue-triggered Azure Function that processes order confirmation emails asynchronously using Azure Storage Queue and SMTP integration.",
    tech: [
      "Azure Functions",
      "Storage Queue",
      ".NET 8",
      "SMTP",
      "Background Processing",
    ],
  },
  {
    title: "Developer Brand Website",
    subtitle: "Personal Developer Platform",
    description:
      "A premium personal brand site showcasing projects, technical skills, experience, and developer identity.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Portfolio
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Real-world systems, side projects, and products I’ve built
            to solve practical problems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[32px] border border-slate-200/70 bg-white/70 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-sm font-medium text-blue-600">
                {project.subtitle}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}