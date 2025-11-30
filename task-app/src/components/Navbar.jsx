import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">ManageTask</div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#tasks" className="hover:text-blue-500 transition">
              Tasks
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-gray-100">
          <ul className="flex flex-col space-y-2 p-4 text-lg">
            <li>
              <a
                href="#home"
                className="block py-2 hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="block py-2 hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#tasks"
                className="block py-2 hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Tasks
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
