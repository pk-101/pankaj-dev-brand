import { motion } from "framer-motion";

const highlights = [
  {
    title: "Full Stack Engineer",
    description:
      "Building scalable applications using ASP.NET Core, React, APIs and SQL Server.",
  },
  {
    title: "Cloud & Azure",
    description:
      "Hands-on with App Services, Azure Functions, Storage Queues and cloud deployment.",
  },
  {
    title: "Enterprise Experience",
    description:
      "Experience modernizing business applications and solving real-world engineering problems.",
  },
  {
    title: "Builder Mindset",
    description:
      "Passionate about products, automation, startups and solving meaningful problems with tech.",
  },
];

export default function AboutSection() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Professional Snapshot
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            More Than Just Code
          </h2>

          <p className="mt-4 text-slate-600">
            I build products, enterprise systems and continuously level up my engineering skills.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-slate-200/60 bg-white/70 p-8 shadow-sm backdrop-blur-xl transition"
            >
              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}