import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weddings | RUBIJOY — Sandra Dodds",
  description: "Destination weddings planned with complete dedication in Occitanie, France.",
};

const weddings = [
  {
    title: "Ella & James",
    location: "CHÂTEAU DE SIBRA · ARIÈGE · SEPTEMBER 2025",
    featured: "As featured in Vogue Weddings, October 2025",
    description: "A three-day celebration across three venues for an American bride and her English groom, both with a deep personal connection to this corner of France. A welcome evening for one hundred guests, a ceremony and dinner at Château de Sibra — one of the Ariège's most extraordinary properties — and a final pool party on a private vineyard. The aesthetic was editorial and considered: the venue's natural beauty used as a backdrop for carefully selected styling, earthy tones, and abundant candlelight that made every space feel entirely its own.\n\nThis wedding was featured in Vogue Weddings in October 2025, written by weddings editor Alexandra Macon.",
    photography: "Photography: Dear Vincent & James Raper",
    heroImageLabel: "Ella & James: Table setup in château courtyard",
  },
  {
    title: "Jacqueline & John",
    location: "DOMAINE DE LA VÈNE · AUDE · OCTOBER 2024",
    description: "An intimate celebration of thirty guests that brought two worlds quietly together — the warmth and spirit of New Orleans meeting the unhurried beauty of the Aude. Soft, romantic florals against a wild and natural landscape. A long veil. Autumn light. The kind of wedding that feels entirely personal and entirely of its place.",
    photography: "Photography: Alexandra Palombi",
    heroImageLabel: "Jacqueline & John: Domaine de la Vène",
  },
  {
    title: "Helen & Hugo",
    location: "CHÂTEAU VILLERAMBERT · CAUNE-MINERVOIS · SEPTEMBER 2023",
    description: "A wedding where the styling and decoration were the heart of the day — florals and tablescapes that felt genuinely considered and deeply personal. Château Villerambert, in the hills above the Minervois, provided a setting of quiet grandeur, and the aesthetic throughout was one of restrained, confident elegance. An English and French family, beautifully united.",
    photography: "Photography: Paco and Aga",
    heroImageLabel: "Helen & Hugo: Château Villerambert",
  },
  {
    title: "Sarah & Neil",
    location: "CHÂTEAU DE QUEILLE · ARIÈGE · SEPTEMBER 2019",
    description: "A wedding that has stayed with me since the day it happened. Château de Queille — with its eleventh-century chapel, rolling meadows, and soft September light — was the perfect setting for a celebration that was elegant, simple, and timeless. An English couple who wanted something genuinely French, and found exactly that.",
    photography: "Photography: Samuel Docker",
    heroImageLabel: "Sarah & Neil: Château de Queille",
  },
];

export default function Weddings() {
  return (
    <div className="flex flex-col items-center">
      <header className="w-full max-w-[1400px] mx-auto px-6 py-24 text-center animate-reveal">
        <h1 className="font-serif text-4xl md:text-6xl text-[#2A2A28]">
          Weddings
        </h1>
      </header>

      <div className="w-full space-y-32 md:space-y-48 pb-32">
        {weddings.map((wedding, index) => (
          <article key={wedding.title} className="w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center animate-reveal">
            <div className="w-full mb-12">
              <img src={index === 0 ? "/images/vogue/ella_james_16.jpg" : index === 1 ? "/images/julie-verdier-photographe-mariage-carcassonne-21-sur-798_orig.jpg" : index === 2 ? "/images/july2024-281_orig.jpg" : "/images/july2024-295_orig.jpg"} alt={wedding.title} className="w-full aspect-[16/9] md:aspect-[21/9] object-cover bg-[#e0d6c8]" />
            </div>
            
            <div className="max-w-[800px] w-full text-center space-y-6">
              <h2 className="font-sans text-xl md:text-2xl uppercase tracking-[0.2em] text-[#2A2A28]">
                {wedding.title}
              </h2>
              <p className="font-sans text-xs uppercase tracking-widest text-accent">
                {wedding.location}
              </p>
              
              {wedding.featured && (
                <p className="font-serif italic text-[#2A2A28]/70">
                  {wedding.featured}
                </p>
              )}
              
              <div className="font-serif text-lg md:text-xl leading-relaxed text-[#2A2A28]/90 text-left md:text-center whitespace-pre-wrap">
                {wedding.description}
              </div>
              
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#2A2A28]/60 pt-4">
                {wedding.photography}
              </p>
              
              <div className="pt-8">
                <button className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] hover:text-accent border-b border-[#2A2A28]/30 pb-1 transition-all">
                  View more images
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-32 text-center border-t border-[#2A2A28]/10 animate-reveal">
        <p className="font-serif text-2xl leading-relaxed text-[#2A2A28]/90 mb-16">
          If you would like to talk about what your wedding in this part of France might look like, I would love to hear from you.
        </p>
        <Link href="/contact" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] hover:text-accent border-b border-[#2A2A28]/30 pb-1 transition-all">
          BEGIN THE CONVERSATION &rarr;
        </Link>
      </section>
    </div>
  );
}
