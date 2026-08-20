import { NavLink } from "react-router";

export function Header() {
  const navLink =
    "relative font-medium text-slate-700 transition duration-300 hover:text-cyan-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full";

  const activeLink =
    "text-cyan-600 after:w-full";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex flex-col leading-none"
        >
          <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            My Portfotlio
          </span>

         
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLink} ${isActive ? activeLink : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLink} ${isActive ? activeLink : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${navLink} ${isActive ? activeLink : ""}`
            }
          >
            Skills
          </NavLink>

         

        </nav>

      </div>
    </header>
  );
}