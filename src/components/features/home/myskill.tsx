


export function SkillPage() {
  return(
        <section className="bg-slate-100 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-5xl font-bold mb-16">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-blue-600">
                HTML5
              </h3>

              <p className="mt-4 text-gray-600">
                Semantic and accessible web structure.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-blue-600">
                CSS3
              </h3>

              <p className="mt-4 text-gray-600">
                Responsive layouts and modern styling.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-blue-600">
                JavaScript
              </h3>

              <p className="mt-4 text-gray-600">
                Interactive web applications and dynamic UI.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-blue-600">
                React
              </h3>

              <p className="mt-4 text-gray-600">
                Building reusable and scalable components.
              </p>
            </div>

          </div>

        </div>
      </section>

  );
}

