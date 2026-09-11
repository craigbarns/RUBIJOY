"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Weddings", href: "/weddings" },
  { name: "Services", href: "/services" },
  { name: "The Region", href: "/region" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    // A small timeout avoids the synchronous setState warning and ensures smooth transition
    const timeout = setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 50);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <header className="w-full relative z-50">
      <div className="max-w-[1400px] mx-auto px-6 py-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center hover:opacity-100 group">
          <span className="font-serif text-[44px] leading-none tracking-[0.08em] text-[#2A2A28] group-hover:opacity-70 transition-opacity">
            Rubijoy
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#888780] mt-1 group-hover:opacity-70 transition-opacity">
            Sandra Dodds
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-xs uppercase tracking-widest hover:text-accent transition-colors ${
                pathname === link.href ? "text-accent" : "text-[#2A2A28]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1px] bg-[#2A2A28] transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
          <span className={`block w-6 h-[1px] bg-[#2A2A28] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-[1px] bg-[#2A2A28] transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col justify-center items-center transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm uppercase tracking-[0.2em] text-[#2A2A28] hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
