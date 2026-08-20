import Bg from "@/assets/images/image.png";

export function HomePage() {
  return (
     <section className="bg-slate-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
              Welcome to My Portfolio
            </span>

            <h1 className="text-6xl font-extrabold mt-6 text-slate-900">
              Jedan Tura
            </h1>

            <h2 className="text-3xl mt-4 text-blue-600 font-semibold">
              Front-End Developer
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              I enjoy building responsive websites with clean code,
              modern designs, and user-friendly experiences.
              My goal is to create digital products that are both
              beautiful and functional.
            </p>

            <div className="flex gap-5 mt-10">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
                Explore Portfolio
              </button>

              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition">
                Download CV
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-[40px] shadow-2xl">
              <img
                src={Bg}
                alt="Jedan Tura"
                className="w-80 h-[450px] object-cover rounded-[35px]"
              />
            </div>
          </div>
        </div>
      </section>


  );
}
