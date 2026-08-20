import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles =
    "relative font-medium transition duration-300 hover:text-cyan-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full";
  const inactiveStyles = "text-slate-700";
  const activeStyles = "text-cyan-600 after:w-full";

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex flex-col leading-none"
        >
          <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            My Portfolio
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`
            }
          >
            Skills
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-700 hover:text-cyan-600 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white/95 border-b border-slate-200 px-6 pt-2 pb-6 flex flex-col gap-4 shadow-lg">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `w-fit py-1 ${baseStyles} ${
                isActive ? activeStyles : inactiveStyles
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `w-fit py-1 ${baseStyles} ${
                isActive ? activeStyles : inactiveStyles
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            onClick={closeMenu}
            className={({ isActive }) =>
              `w-fit py-1 ${baseStyles} ${
                isActive ? activeStyles : inactiveStyles
              }`
            }
          >
            Skills
          </NavLink>
        </nav>
      )}
    </header>
  );
}