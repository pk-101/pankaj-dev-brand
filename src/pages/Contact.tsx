import Layout from '../components/layout/Layout'
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'

export default function Contact() {
  return (
    <Layout>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Contact
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
              Let’s Build Something Great
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Open to .NET Full Stack opportunities, collaboration,
              interesting product discussions and meaningful tech work.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Left Side */}
            <div className="rounded-[36px] border border-slate-200/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl">

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Let’s connect
                </h2>

                <p className="mt-3 text-slate-600">
                  Whether it’s a job opportunity, freelance work,
                  startup idea or engineering discussion — feel free
                  to reach out.
                </p>
              </div>

              <div className="mt-10 space-y-5">

                <a
                  href="mailto:pankajkumargoals@gmail.com"
                  className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-100 p-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Email
                      </p>

                      <p className="font-medium text-slate-900">
                        pankajkumargoals@gmail.com
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-slate-900" />
                </a>

                <a
                  href="https://www.linkedin.com/in/pankaj-kumar-dotnet/"
                  target="_blank"
                  className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-100 p-3">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        LinkedIn
                      </p>

                      <p className="font-medium text-slate-900">
                        Connect professionally
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-slate-900" />
                </a>

                <a
                  href="https://github.com/pk-101/"
                  target="_blank"
                  className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-100 p-3">
                      <Github className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        GitHub
                      </p>

                      <p className="font-medium text-slate-900">
                        View projects & code
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-slate-900" />
                </a>

                <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="rounded-2xl bg-blue-100 p-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Location
                    </p>

                    <p className="font-medium text-slate-900">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="rounded-[36px] border border-slate-200/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl">

              <h2 className="text-3xl font-bold text-slate-900">
                Send a message
              </h2>

              <p className="mt-3 text-slate-600">
                Have an opportunity or idea? Send a quick message.
              </p>

              <form className="mt-10 space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500"
                  />
                </div>

                <button className="w-full rounded-2xl bg-slate-900 px-6 py-4 text-white transition hover:scale-[1.02]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}