export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Jedan Tura
            </h2>

            <p className="mt-3 text-gray-400 leading-7">
              Front-End Developer creating modern,
              responsive, and user-friendly websites.
            </p>
          </div>


          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a 
                href="#home"
                className="hover:text-blue-400 transition"
              >
                Home
              </a>

              <a 
                href="#about"
                className="hover:text-blue-400 transition"
              >
                About
              </a>

              <a 
                href="#skills"
                className="hover:text-blue-400 transition"
              >
                Skills
              </a>

              <a 
                href="#contact"
                className="hover:text-blue-400 transition"
              >
                Contact
              </a>

            </div>
          </div>


          {/* Social */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-3">

              <a
                href="https://github.com/CallmeJed18/Jedan-Honest-React/blob/main/src/assets/pages/home.tsx"
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                GitHub
              </a>

              

              <a
                href="https://www.facebook.com/jedan.tura.5"
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Facebook
              </a>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} 
            <span className="text-white font-semibold">
              {" "}Jedan Tura
            </span>
            . All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}