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
        className={`fixed inset-0 bg-[#F5F0E8] z-40 flex flex-col justify-between items-center transition-all duration-700 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full flex justify-center mt-10">
          {/* We keep the top space for the close button to breathe */}
        </div>
        
        <nav className="flex flex-col items-center gap-10 mt-12">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-serif text-3xl tracking-wide text-[#2A2A28] hover:text-accent transition-colors relative group"
              style={{
                transitionDelay: isMobileMenuOpen ? \`\${index * 100 + 100}ms\` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionProperty: 'opacity, transform, color'
              }}
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </nav>

        <div 
          className="mb-16 flex flex-col items-center gap-6"
          style={{
            transitionDelay: isMobileMenuOpen ? '700ms' : '0ms',
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            transitionProperty: 'opacity, transform'
          }}
        >
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#2A2A28]/60">
            sandra@rubijoy.com
          </p>
          <a
            href="https://instagram.com/rubijoy_weddings"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] hover:text-accent transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
