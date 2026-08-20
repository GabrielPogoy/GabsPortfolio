export function SkillPage() {
  const skills = [
    {
      title: "HTML5",
      desc: "Semantic and accessible website structure.",
    },
    {
      title: "CSS3",
      desc: "Responsive layouts and modern UI designs.",
    },
    {
      title: "JavaScript",
      desc: "Dynamic and interactive web applications.",
    },
    {
      title: "React",
      desc: "Reusable components and scalable projects.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-16">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold">
                {skill.title}
              </h3>

              <p className="mt-5">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

