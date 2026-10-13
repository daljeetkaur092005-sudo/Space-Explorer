import React from "react";

import { Orbit, Search, Moon } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-white/10 bg-[#050a12] px-6 py-5 text-white md:px-16">
      {/* Logo */}

        <Orbit size={27} className="text-amber-400" />

        <h1 className="text-xl font-bold md:text-2xl">
          Space <span className="text-amber-400">Explorer</span>
        </h1>
    

      {/* Navigation Links */}
      <div className="hidden items-center gap-8 md:flex">
        <NavLink
          to={"/main"}
          end
          className={({ isActive }) =>
            `transition ${
              isActive
                ? "border-b-2 border-amber-400 pb-2 text-amber-400"
                : "text-gray-300 hover:text-amber-400"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/main/explore"}
          className={({ isActive }) =>
            `transition ${
              isActive
                ? "text-amber-400"
                : "text-gray-300 hover:text-amber-400"
            }`
          }
        >
          Explore
        </NavLink>

        <NavLink
          to={"/main/events"}
          className={({ isActive }) =>
            `transition ${
              isActive
                ? "text-amber-400"
                : "text-gray-300 hover:text-amber-400"
            }`
          }
        >
          Earth Events
        </NavLink>

        <NavLink
          to={"/main/detail"}
          className={({ isActive }) =>
            `transition ${
              isActive
                ? "text-amber-400"
                : "text-gray-300 hover:text-amber-400"
            }`
          }
        >
          Detail
        </NavLink>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5 text-gray-300">
        <Search
          size={21}
          className="cursor-pointer transition hover:text-amber-400"
        />

        <Moon
          size={21}
          className="cursor-pointer transition hover:text-amber-400"
        />
      </div>
    </nav>
  );
};

export default Navbar;