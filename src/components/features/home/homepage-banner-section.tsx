import Bg from "@/assets/images/gab.jpg";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <span className="inline-block bg-blue-500/20 border border-blue-400 px-5 py-2 rounded-full text-blue-200">
            👋 Welcome to My Portfolio
          </span>

          <h1 className="text-6xl lg:text-7xl font-extrabold mt-8 leading-tight">
            Gabriel
            <span className="block text-cyan-400">
              Pogoy
            </span>
          </h1>

          <h2 className="mt-5 text-2xl text-blue-200 font-semibold">
            Front-End Developer
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">
            I build responsive, modern, and user-friendly web
            applications using today's latest technologies.
            My passion is creating clean interfaces that provide
            excellent user experiences.
          </p>


        {/* Right */}
        <div className="flex justify-center">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[40px] p-4 shadow-2xl">
            <img
              src={Bg}
              alt="Gabriel Pogoy"
              className="w-80 h-[470px] object-cover rounded-[30px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
