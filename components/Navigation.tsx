"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Projects" },
    // { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleResumeButton = () => {
    window.open("/Resume.pdf");
  };

  return (
    <nav className="absolute w-full border-b-2 border-[#878787] bg-[#FFF7E8] ">
      <div className="md:grid grid-cols-3 items-center mx-8 lg:mx-32 xl:mx-64 border-l-2 border-r-2 border-[#878787] h-20">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex col-start-2 justify-center font-semibold gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`cursor-pointer ${
                  pathname === item.href
                    ? "hover:border-b-2"
                    : " hover:border-b-2"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={handleResumeButton}
          className="hidden md:block justify-self-end cursor-pointer bg-[#6C3483] px-4 py-2 mx-8 xl:mx-16 rounded-lg shadow-[0_6px_0_0_rgba(43,43,43,1)] text-white hover:shadow-[0_9px_0_0_rgba(43,43,43,1)] hover:bg-[#8d49a7]"
        >
          Resume
        </button>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            className="absolute top-10 right-14 transform -translate-y-1/2 z-30 flex flex-col items-center justify-center w-10 h-10"
          >
            <span
              className={`w-6 h-1 bg-[#2B2B2B] rounded transition-all duration-300 mb-1 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-1 bg-[#2B2B2B] rounded transition-all duration-300 mb-1 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-1 bg-[#2B2B2B] rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
        {/* Mobile Navigation */}
        {menuOpen && (
          <ul className="fixed inset-0 md:hidden flex flex-col gap-8 justify-center items-center bg-[#6C3483]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
