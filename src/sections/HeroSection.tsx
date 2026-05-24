import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profile.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-20 py-20 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            .NET Full Stack Engineer
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl"
          >
            Building scalable software
            <span className="block bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              with .NET, React & Cloud
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
          >
            I build modern full stack applications, APIs,
            cloud-native systems and enterprise software focused on
            performance, scalability and business impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="rounded-2xl bg-slate-900 px-7 py-4 font-medium text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:-translate-y-[2px]"
            >
              View Projects
            </Link>

            <Link
              to="/resume"
              className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-medium text-slate-900 transition duration-300 hover:-translate-y-[2px] hover:border-slate-400 hover:shadow-md"
            >
              Resume
            </Link>
          </motion.div>

          {/* Trust / Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              ".NET",
              "React",
              "SQL Server",
              "Azure",
              "REST APIs",
              "Enterprise Apps",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden justify-center lg:flex"
        >
          {/* Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-100 opacity-50 blur-3xl" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 p-3 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(15,23,42,0.18)]">
            <img
              src={profileImage}
              alt="Pankaj Kumar"
              className="h-[520px] w-[390px] rounded-[1.7rem] object-cover"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 rounded-3xl border border-white/40 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-md">
              <p className="text-sm font-semibold text-slate-900">
                .NET Full Stack Engineer
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Open to opportunities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}