export function AboutPage() {
  return (
    <section className="py-28 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-3xl font-bold text-blue-600 mb-6">
              Who Am I?
            </h3>

            <p className="text-gray-600 leading-8">
              Hi! I'm <strong>Gabriel Pogoy</strong>, an aspiring
              Front-End Developer passionate about building
              responsive websites with modern designs and clean code.
              I enjoy learning new technologies and transforming
              creative ideas into beautiful digital experiences.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-3xl font-bold mb-6">
              My Vision
            </h3>

            <p className="leading-8">
              My goal is to become a professional software developer,
              work on impactful projects, and continuously improve my
              technical skills while delivering outstanding user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

