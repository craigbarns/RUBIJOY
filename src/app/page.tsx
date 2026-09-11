import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative h-[80vh] min-h-[600px] flex items-center justify-center animate-reveal">
        <img src="/images/vogue/ella_james_5.jpg" alt="Bride in château doorway or recessional" className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Opening Statement */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-32 text-center animate-reveal">
        <p className="font-serif text-2xl md:text-4xl leading-relaxed text-[#2A2A28]">
          There is a corner of France that most people never find. Ancient stone, unhurried afternoons, and the kind of beauty that stays with you. I have lived in the Occitanie region for twenty years, between the foothills of the Pyrenees and the Montagne Noire, and I plan weddings for couples who have discovered the beauty of this area and cannot imagine getting married anywhere else.
        </p>
        <p className="font-sans text-sm uppercase tracking-[0.2em] mt-12 text-[#2A2A28]/80">
          I am Sandra Dodds. This is Rubijoy.
        </p>
      </section>

      {/* Vogue Mention */}
      <section className="w-full max-w-[400px] mx-auto px-6 py-12 text-center border-y border-[#2A2A28]/20 animate-reveal">
        <p className="font-sans text-xs uppercase tracking-widest text-[#2A2A28]/80 mb-4">
          As featured in Vogue Weddings, October 2025
        </p>
        <Link href="#" className="font-serif italic text-lg hover:text-accent transition-colors">
          Read the feature &rarr;
        </Link>
      </section>

      {/* What I Do */}
      <section className="w-full max-w-[1000px] mx-auto px-6 py-32 animate-reveal">
        <h2 className="font-serif text-3xl md:text-5xl mb-16 text-center">
          Destination weddings in the foothills of the Pyrenees and beyond
        </h2>
        <div className="max-w-[800px] mx-auto space-y-8 font-serif text-xl md:text-2xl leading-relaxed text-[#2A2A28]/90">
          <p>
            I plan destination weddings for international couples — from the UK, the US, Ireland, Australia, and beyond — who want to marry in one of France&apos;s most quietly extraordinary regions.
          </p>
          <p>
            My work covers everything: finding the right venue, building the right supplier team, guiding you through the cultural nuances and language differences that come with planning a French wedding from abroad, and being on the ground throughout — not just on the day itself. I take on a small number of weddings each year, which means the couples I work with have my full attention from the first conversation to the final send-off.
          </p>
          <p>
            If you are looking for someone who knows this region the way a local does — its hidden châteaux, its best florists, its most gifted caterers, the venues that aren&apos;t on any international wedding directory yet — you are in the right place.
          </p>
        </div>
      </section>

      {/* Editorial Image Sequence */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-16 space-y-24 animate-reveal">
        <div className="w-full max-w-[1400px] mx-auto">
          <img src="/images/vogue/ella_james_1.jpg" alt="Interior of welcome evening" className="w-full aspect-[21/9] object-cover bg-[#e0d6c8]" />
        </div>
        <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <img src="/images/vogue/ella_james_11.jpg" alt="Table setup" className="w-full aspect-[3/4] object-cover bg-[#e0d6c8]" />
          <img src="/images/vogue/ella_james_4.jpg" alt="Recessional" className="w-full aspect-[3/4] object-cover bg-[#e0d6c8]" />
        </div>
        <div className="w-full max-w-[1200px] mx-auto">
          <img src="/images/vogue/ella_james_3.jpg" alt="Couple on stone wall" className="w-full aspect-[16/9] object-cover bg-[#e0d6c8]" />
        </div>
        <div className="w-full max-w-[800px] mx-auto">
          <img src="/images/vogue/ella_james_9.jpg" alt="Bride in doorway" className="w-full aspect-[4/5] object-cover bg-[#e0d6c8]" />
        </div>
        <div className="w-full max-w-[1400px] mx-auto">
          <img src="/images/vogue/ella_james_7.jpg" alt="Cake moment" className="w-full aspect-video object-cover bg-[#e0d6c8]" />
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full max-w-[900px] mx-auto px-6 py-32 text-center animate-reveal">
        <blockquote className="font-serif text-3xl md:text-5xl leading-snug text-primary mb-12">
          &ldquo;She was the loveliest to work with: her eye, her execution, and of course her being bilingual helped us immensely throughout the entire process.&rdquo;
        </blockquote>
        <cite className="font-sans text-xs uppercase tracking-widest text-[#2A2A28]/80 not-italic">
          &mdash; James, speaking in Vogue Weddings, October 2025
        </cite>
      </section>

      {/* The Region */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center animate-reveal">
        <div>
          <img src="/images/julie-verdier-photographe-mariage-carcassonne-392-sur-798_orig.jpg" alt="Pyrenees landscape or Carcassonne" className="w-full aspect-[4/5] object-cover bg-[#e0d6c8]" />
        </div>
        <div className="space-y-8">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-accent">Why here</h2>
          <div className="font-serif text-xl leading-relaxed text-[#2A2A28]/90 space-y-6">
            <p>
              The Ariège, the Aude, the foothills of the Pyrenees. This is a region Vogue described as untouched, unhurried, and deeply authentic — and it is. Medieval châteaux that have been in the same family for centuries. Villages where the market still happens on a Tuesday morning. Landscapes that have barely changed in three hundred years.
            </p>
            <p>
              It is also, quietly, one of the most practical choices a couple can make. A considered alternative to the more popular areas of France — where the same investment goes further, and the result feels entirely your own. Far less tourist congestion. And a planner who lives here, year-round, and knows every corner of it.
            </p>
            <p>
              Thirty minutes from Carcassonne, forty minutes from Toulouse. A world away from anywhere ordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Planning from abroad */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center animate-reveal">
        <div className="space-y-8 order-2 md:order-1">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-accent">Planning a wedding from abroad</h2>
          <div className="font-serif text-xl leading-relaxed text-[#2A2A28]/90 space-y-6">
            <p>
              Most of my couples are planning a French wedding from another country entirely. They have never met the florist, they can&apos;t visit the venue at a moment&apos;s notice, and their French is, as one groom put it in Vogue, definitely a work in progress.
            </p>
            <p>
              That is exactly what I am here for. I am your person on the ground — bilingual, local, and invested in your wedding. Every supplier I recommend is someone I know and trust completely. Every detail is managed in advance so that on your wedding day, you can simply be present.
            </p>
          </div>
          <div className="pt-4">
            <Link href="/services" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] hover:text-accent border-b border-[#2A2A28]/30 pb-1 transition-all">
              FIND OUT HOW I WORK &rarr;
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="/images/j-jweddingdinnerlr-043_orig.jpg" alt="Atmospheric detail" className="w-full aspect-square object-cover bg-[#e0d6c8]" />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-32 text-center animate-reveal">
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-12 text-accent">Begin the conversation</h2>
        <p className="font-serif text-2xl leading-relaxed text-[#2A2A28]/90 mb-16">
          If you are thinking about getting married in this part of France and would like to talk through what that might look like, I would love to hear from you. Tell me a little about your vision — the date you have in mind, the kind of experience you want your guests to have, the things that matter most to you — and I will get back to you personally.
        </p>
        <Link href="/contact" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] hover:text-accent border-b border-[#2A2A28]/30 pb-1 transition-all">
          GET IN TOUCH &rarr;
        </Link>
      </section>
    </div>
  );
}
