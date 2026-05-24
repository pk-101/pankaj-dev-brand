import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "Resume", to: "/resume" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-4 z-50 flex justify-center px-6">
      <nav
        className={`flex items-center justify-between rounded-[1.8rem] border transition-all duration-500
        ${
          scrolled
            ? "h-14 w-full max-w-5xl border-white/50 bg-white/75 px-7 shadow-xl backdrop-blur-xl"
            : "h-16 w-full max-w-6xl border-slate-200/70 bg-white/65 px-8 shadow-md backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-slate-900 transition duration-300 hover:text-blue-600"
        >
          Pankaj.dev
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;

            return (
              <Link
                key={item.name}
                to={item.to}
                className={`relative transition duration-300 hover:text-slate-900
                ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600"
                }`}
              >
                {item.name}

                {/* underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300
                  ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}