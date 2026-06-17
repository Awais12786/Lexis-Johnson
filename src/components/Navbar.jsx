import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="flex justify-between items-center px-6 md:px-16 py-6 max-w-[1440px] mx-auto">
        <Link
          to="/"
          className="font-display-lg text-2xl md:text-3xl text-secondary-fixed-dim tracking-tighter hover:text-secondary-fixed transition-colors text-gradient-gold"
        >
          The Timing Aggregator
          <sup className="text-xs font-light tracking-wide">™</sup>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `font-body-md uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-secondary-fixed"
                    : "text-on-surface-variant hover:text-secondary-fixed"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:block">
          <a
            href="https://user-dashboard-timingaggregator.replit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold font-body-md uppercase tracking-widest px-6 py-2 rounded inline-block"
          >
            Access TAGG
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary-fixed p-2 focus:outline-none uppercase tracking-widest text-sm font-semibold"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-transparent border-t border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="font-body-md uppercase tracking-widest text-on-surface-variant hover:text-secondary-fixed"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://user-dashboard-timingaggregator.replit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold font-body-md uppercase tracking-widest px-6 py-3 rounded text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Access TAGG
          </a>
        </div>
      )}
    </nav>
  );
}
