import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Gabriel Pogoy
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Front-End Developer passionate about creating
              responsive, modern, and user-friendly web applications
              with clean code and beautiful interfaces.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <NavLink
                to="/"
                className="hover:text-cyan-400 transition"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="hover:text-cyan-400 transition"
              >
                About
              </NavLink>

              <NavLink
                to="/skills"
                className="hover:text-cyan-400 transition"
              >
                Skills
              </NavLink>

             

            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Get In Touch
            </h3>

            <div className="space-y-3">

              <p>
                📧 gabrielpogoy@email.com
              </p>

              <p>
                📱 +63 9922803815
              </p>

              <div className="flex gap-3 pt-3">

                <a
                  href="https://github.com/dashboard"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-cyan-500 transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-cyan-500 transition"
                >
                  Facebook
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Gabriel Pogoy
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with React + Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}