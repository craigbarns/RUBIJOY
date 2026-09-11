import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | RUBIJOY — Sandra Dodds",
  description: "I am Sandra Dodds. I have been planning destination weddings in Occitanie since 2019, and I live here year-round.",
};

export default function About() {
  return (
    <div className="flex flex-col items-center">
      {/* Opening Section with Portrait */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pt-12 pb-24 grid md:grid-cols-2 gap-16 lg:gap-24 items-center animate-reveal">
        <div className="order-2 md:order-1">
          <img src="/images/vogue/ella_james_20.jpg" alt="Sandra Dodds" className="w-full aspect-[4/5] object-cover bg-[#e0d6c8]" />
        </div>
        <div className="order-1 md:order-2 space-y-12">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#2A2A28]">
            I came to France from South Africa, which means I have always seen this country the way an outsider does — with a particular kind of wonder. Twenty years later, I still have it. The difference is that now I also know where the best caterer in the Ariège keeps her kitchen garden, which château has the light you want at six in the evening, and exactly which phone call to make when the weather changes on a Wednesday morning before a Saturday wedding.
          </p>
          <p className="font-serif text-xl leading-relaxed text-[#2A2A28]/80">
            I am Sandra Dodds. I have been planning destination weddings in Occitanie since 2019, and I live here year-round. This region is not my office. It is my home.
          </p>
        </div>
      </section>

      {/* How I Came To This Work */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-24 animate-reveal">
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-12 text-accent text-center">
          How I came to this work
        </h2>
        <div className="font-serif text-xl leading-relaxed text-[#2A2A28]/90 space-y-8">
          <p>
            It started, as many things do, with a wedding. When I married in France, I sourced vintage crockery for our celebration — mismatched, beautiful, gathered from barns and markets across the south-west. Other couples noticed. They asked if they could hire pieces for their own weddings. And from there, slowly and without any particular plan, a business grew.
          </p>
          <p>
            What began as crockery hire became decoration and styling, and decoration and styling became full wedding planning for couples who needed more than beautiful objects — they needed someone who understood the region, spoke the language, and could hold the entire process together from first conversation to final send-off. That is what I do now.
          </p>
        </div>
      </section>

      {/* Secondary Environmental Image */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-12 animate-reveal">
        <img src="/images/vogue/ella_james_15.jpg" alt="Occitanie landscape or venue" className="w-full aspect-[21/9] object-cover bg-[#e0d6c8]" />
      </section>

      {/* The Right Fit */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-24 animate-reveal">
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-12 text-accent text-center">
          The right fit
        </h2>
        <div className="font-serif text-xl leading-relaxed text-[#2A2A28]/90 space-y-8">
          <p>
            Most of my couples are planning a wedding in a country they don&apos;t live in, in a language they don&apos;t speak, for guests travelling from several different parts of the world. They have usually been dreaming about a French wedding for a long time. They have taste, and they know what they want — they just need someone they can trust to make it real.
          </p>
          <p>
            I work with a small number of couples each year, by choice. It means I can give each wedding the attention it deserves, rather than running several at once and giving none of them my best. If you are looking for someone fully present from start to finish — that is what I offer.
          </p>
        </div>
      </section>

      {/* Why Occitanie */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center animate-reveal">
        <div>
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-8 text-accent">
            Why Occitanie
          </h2>
          <div className="font-serif text-xl leading-relaxed text-[#2A2A28]/90 space-y-6">
            <p>
              South Africans are, by nature, drawn to big skies and unhurried landscapes. Perhaps that is part of why I settled here rather than in Paris or Lyon. The Ariège, the Aude, the foothills of the Pyrenees — this is a part of France that has not been flattened by tourism or trend. The châteaux are real. The markets are real. The light is extraordinary.
            </p>
            <p>
              When Vogue described this region as &ldquo;untouched, unhurried, and deeply authentic,&rdquo; I recognised it immediately. It is exactly what I have been trying to tell people for years.
            </p>
          </div>
        </div>
        <div>
          <img src="/images/vogue/ella_james_25.jpg" alt="Occitanie Atmosphere" className="w-full aspect-[3/4] object-cover bg-[#e0d6c8]" />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-32 text-center animate-reveal">
        <p className="font-serif text-2xl leading-relaxed text-[#2A2A28]/90 mb-16">
          If you are considering getting married in this part of France, I would love to talk. Tell me what you are imagining, and I will tell you honestly whether I think I can help you achieve it.
        </p>
        <Link href="/contact" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] hover:text-accent border-b border-[#2A2A28]/30 pb-1 transition-all">
          BEGIN THE CONVERSATION &rarr;
        </Link>
      </section>
    </div>
  );
}
