export default function SkillsSection() {
  const techs = [
    ".NET",
    "React",
    "Azure",
    "SQL Server",
    "REST APIs",
    "Enterprise Apps",
  ];

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[32px] border border-slate-200/60 bg-white/70 p-8 shadow-sm backdrop-blur-xl">

          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Technologies & Expertise
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {techs.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}