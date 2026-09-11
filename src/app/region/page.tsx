import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Region | RUBIJOY — Sandra Dodds",
  description: "Occitanie, France — the foothills of the Pyrenees.",
};

export default function Region() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative h-[70vh] min-h-[500px] flex items-center justify-center animate-reveal">
        <img src="/images/july2024-293_orig.jpg" alt="Region Hero" className="w-full h-full object-cover absolute inset-0 bg-[#e0d6c8]" />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            The Region
          </h1>
          <p className="font-sans text-xs md:text-sm uppercase tracking-widest text-white/90">
            Occitanie, France — the foothills of the Pyrenees
          </p>
        </div>
      </section>

      {/* The Place */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-32 animate-reveal">
        <div className="font-serif text-2xl md:text-3xl leading-relaxed text-[#2A2A28]/90 space-y-10 text-center">
          <p>
            There is a version of France that does not appear on most wedding mood boards. It is not the Riviera, with its summer crowds. It is not the manicured lavender fields of Provence. It is older than both, quieter than both, and — for the couples who find their way here — more beautiful than either.
          </p>
          <p>
            This is Occitanie. The ancient south-west. The foothills of the Pyrenees, where the mountains rise behind wide river valleys, medieval villages still hold their weekly markets, and the light has a quality that is difficult to describe until you have experienced it.
          </p>
        </div>
      </section>

      {/* Image Break */}
      <section className="w-full max-w-[1200px] mx-auto px-6 pb-24 animate-reveal">
        <img src="/images/julie-verdier-photographe-mariage-carcassonne-377-sur-798_orig.jpg" alt="Carcassonne or Canal du Midi" className="w-full aspect-[16/9] object-cover bg-[#e0d6c8]" />
      </section>

      {/* A Region With Depth */}
      <section className="w-full max-w-[1000px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-16 items-start animate-reveal">
        <div className="md:col-span-4">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-accent sticky top-32">
            A region with depth
          </h2>
        </div>
        <div className="md:col-span-8 font-serif text-xl leading-relaxed text-[#2A2A28]/90 space-y-8">
          <p>
            The south-west carries its history visibly — in the Cathar castles perched on hilltops across the Ariège and Aude, in the extraordinary medieval walled city of Carcassonne thirty minutes from some of the region&apos;s finest venues, in the timber-framed arcades of Mirepoix, and along the plane tree-lined waterways of the Canal du Midi. Toulouse, the rose-pink city, sits forty minutes to the north — a natural hub for guests arriving from abroad.
          </p>
          <p>
            The wedding venues here range from grand châteaux and medieval abbeys to intimate domaines that have only recently opened their doors to celebrations. Many are completely exclusive-use. Several are unknown outside France entirely. Finding the right one is where our work begins.
          </p>
        </div>
      </section>

      {/* Additional Image Break */}
      <section className="w-full px-6 py-24 animate-reveal">
        <div className="max-w-[1400px] mx-auto">
          <img src="/images/julie-verdier-photographe-mariage-carcassonne-395-sur-798_orig.jpg" alt="Exterior of a château" className="w-full aspect-[21/9] object-cover bg-[#e0d6c8]" />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-24 text-center animate-reveal">
        <p className="font-serif text-2xl leading-relaxed text-[#2A2A28]/90 mb-16">
          If you would like to find out more, I would love to hear from you.
        </p>
        <Link href="/contact" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] hover:text-accent border-b border-[#2A2A28]/30 pb-1 transition-all">
          BEGIN THE CONVERSATION &rarr;
        </Link>
      </section>
    </div>
  );
}
