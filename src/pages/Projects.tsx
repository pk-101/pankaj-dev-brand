import Layout from "../components/layout/Layout";

const projects = [
  {
    title: "FarmFresh",
    category: "Full Stack E-Commerce Platform",
    description:
      "A farm-to-home grocery delivery platform built using ASP.NET Core, React, SQL Server and Azure with authentication, ordering, inventory and cloud integration.",
    tech: ["ASP.NET Core", "React", "SQL Server", "Azure", "JWT", "EF Core"],
  },
  {
    title: "Order Email Function",
    category: "Cloud / Event Driven Architecture",
    description:
      "Queue-triggered Azure Function that processes order confirmation emails asynchronously using Azure Storage Queue and SMTP.",
    tech: [
      "Azure Functions",
      "Storage Queue",
      ".NET 8",
      "SMTP",
      "Background Jobs",
    ],
  },
  {
    title: "Developer Brand Website",
    category: "Personal Engineering Platform",
    description:
      "A premium personal website showcasing projects, technical depth, engineering journey and developer identity.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  },
];
export default function Projects() {
  return (
    <Layout>
      <section className="relative overflow-hidden px-6 py-24">
        {/* Background glow */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Portfolio
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Projects I’ve Built &
            <span className="block text-slate-600">Problems I’ve Solved</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A collection of real-world applications, engineering experiments,
            enterprise solutions and product ideas I’ve worked on.
          </p>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-[36px] border border-slate-200/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  {project.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="mt-8 text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">
                  View Case Study →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
