import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold text-blue-600 hover:text-blue-700 transition"
        >
          Jedan Tura
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className="font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="font-medium text-gray-700 hover:text-blue-600 transition"
          >
            About
          </NavLink>

          <NavLink
            to="/skills"
            className="font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Skills
          </NavLink>

          
          <NavLink
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Contact
          </NavLink>

        </nav>
      </div>
    </header>
  );
}