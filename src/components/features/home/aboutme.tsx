export function AboutPage() {
  return (
     <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-5xl font-bold text-slate-900 mb-16">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold mb-5">
                Who Am I?
              </h3>

              <p className="leading-8">
                Hi! I'm <strong>Jedan Tura</strong>, an aspiring
                Front-End Developer who enjoys turning ideas into
                responsive and visually appealing websites.
                I love learning new technologies and improving
                my skills every day.
              </p>
            </div>

            <div className="bg-slate-100 rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold mb-5 text-slate-800">
                My Goal
              </h3>

              <p className="text-gray-600 leading-8">
                My goal is to become a professional software developer,
                contribute to meaningful projects, and continuously
                grow in web development while delivering exceptional
                user experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

  );
}

