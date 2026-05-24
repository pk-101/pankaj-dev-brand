import Layout from '../components/layout/Layout'

export default function Resume() {
  return (
    <Layout>
      <section className="relative overflow-hidden px-6 py-24">
  {/* Soft premium background glows */}
  <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
  <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

  <div className="relative mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
      Resume
    </p>

    <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
      Experience, Skills &
      <span className="block text-slate-600">
        Engineering Journey
      </span>
    </h1>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
      A snapshot of my experience as a .NET full stack engineer,
      cloud learner and product-focused builder.
    </p>

    {/* Quick highlight cards */}
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      <div className="rounded-[28px] border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-slate-900">
          .NET Full Stack
        </h3>
        <p className="mt-2 text-slate-600">
          ASP.NET Core, APIs, React, SQL Server
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-slate-900">
          Cloud & Azure
        </h3>
        <p className="mt-2 text-slate-600">
          App Service, Functions, Storage Queue
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-slate-900">
          Builder Mindset
        </h3>
        <p className="mt-2 text-slate-600">
          Solving practical problems through software
        </p>
      </div>
    </div>
  </div>
</section>
<section className="px-6 pb-24">
  <div className="mx-auto max-w-6xl">

    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        Experience
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
        Professional Journey
      </h2>

      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Building enterprise-grade applications, APIs and scalable backend
        systems while collaborating with real business stakeholders.
      </p>
    </div>

    <div className="relative border-l border-slate-200 pl-8">

      {/* Timeline Dot */}
      <div className="absolute left-[-7px] top-2 h-3 w-3 rounded-full bg-blue-600" />

      <div className="rounded-[36px] border border-slate-200/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl">

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

          <div>
            <p className="text-sm font-medium text-blue-600">
              March 2022 — Present
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              Software Engineer
            </h3>

            <p className="text-lg text-slate-600">
              Hexaware Technologies · Pune
            </p>
          </div>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            4+ Years Experience
          </span>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          <div className="rounded-3xl bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              Enterprise Development
            </h4>

            <p className="mt-2 text-slate-600">
              Built and enhanced enterprise financial systems using
              ASP.NET MVC, ASP.NET Core, Web API and Entity Framework Core.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              SQL & Performance
            </h4>

            <p className="mt-2 text-slate-600">
              Optimized SQL Server queries, stored procedures and schemas
              for scalable and reliable enterprise systems.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              APIs & Architecture
            </h4>

            <p className="mt-2 text-slate-600">
              Built REST APIs and scalable backend services supporting
              modular enterprise integrations.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              Production Ownership
            </h4>

            <p className="mt-2 text-slate-600">
              Worked on incident resolution, production support and
              continuous feature enhancement.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
    </Layout>
  )
}