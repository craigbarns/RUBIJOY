import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Weddings", href: "/weddings" },
  { name: "Services", href: "/services" },
  { name: "The Region", href: "/region" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#2A2A28]/10 py-16 mt-24">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center mb-12 hover:opacity-100 group">
          <span className="font-serif text-3xl leading-none tracking-[0.08em] text-[#2A2A28] group-hover:opacity-70 transition-opacity">
            Rubijoy
          </span>
          <span className="font-sans text-[8px] uppercase tracking-[0.35em] text-[#888780] mt-1 group-hover:opacity-70 transition-opacity">
            Sandra Dodds
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] uppercase tracking-widest hover:text-accent transition-colors text-[#2A2A28]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Info & Links */}
        <div className="flex flex-col items-center gap-4 text-sm font-sans tracking-wide text-[#2A2A28]/80 text-center">
          <a
            href="https://instagram.com/rubijoy_weddings"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            @rubijoy_weddings
          </a>
          
          <p className="italic font-serif tracking-normal text-base mt-2">
            As featured in Vogue Weddings, October 2025
          </p>
          
          <div className="flex items-center gap-4 mt-6 text-xs text-[#2A2A28]/60">
            <span>&copy; Rubijoy 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#2A2A28]/20"></span>
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
