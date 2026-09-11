import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | RUBIJOY — Sandra Dodds",
  description: "Full wedding planning. Destination weddings in the foothills of the Pyrenees and beyond, planned with complete dedication from beginning to end.",
};

const inclusions = [
  "Venue search and management — finding the perfect venue for your wedding, drawing on my deep knowledge of the region's most extraordinary properties, including venues that have only recently opened their doors to weddings for the first time",
  "Supplier sourcing and coordination — building and managing a trusted team across catering, floristry, photography, music, transport, accommodation, and any specialist requirements your wedding calls for",
  "Budget management and supplier negotiations — ensuring your investment is allocated wisely and that nothing arrives as a surprise",
  "A full planning timeline — keeping everything on track across the months leading up to your wedding, with regular updates so you always know where things stand",
  "On-site management across all wedding days — complete coordination from the first delivery to the last guest departing, so that you can simply be present"
];

export default function Services() {
  return (
    <div className="flex flex-col items-center">
      <header className="w-full max-w-[1000px] mx-auto px-6 pt-24 pb-16 text-center animate-reveal">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2A2A28] mb-8">
          Full Wedding Planning
        </h1>
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#2A2A28]/80 max-w-[800px] mx-auto">
          Destination weddings in the foothills of the Pyrenees and beyond, planned with complete dedication from beginning to end.
        </p>
      </header>

      <section className="w-full max-w-[1200px] mx-auto px-6 pb-24 animate-reveal">
        <img src="/images/vogue/ella_james_8.jpg" alt="Services Hero" className="w-full aspect-[21/9] object-cover bg-[#e0d6c8]" />
      </section>

      {/* What It Is */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-16 animate-reveal">
        <div className="font-serif text-xl leading-relaxed text-[#2A2A28]/90 space-y-8">
          <p>
            Full wedding planning means exactly that. From the first conversation about venues and vision, to the moment you leave for your honeymoon, I am your person — present, invested, and focused entirely on your wedding.
          </p>
          <p>
            I take on a limited number of weddings each year, and this is a deliberate choice. It means that when we are working together, you have my complete and undivided attention. Every detail is managed with care, every decision is made with your vision in mind, and I am fully present throughout the entire planning process and across every event of your celebration.
          </p>
        </div>
      </section>

      {/* What We Cover Together */}
      <section className="w-full max-w-[1000px] mx-auto px-6 py-24 animate-reveal">
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-16 text-accent text-center">
          What we cover together
        </h2>
        <div className="max-w-[800px] mx-auto">
          <p className="font-serif text-xl leading-relaxed text-[#2A2A28]/90 mb-12">
            What we plan together will be entirely your own. But the care and scope I bring to every wedding remains the same:
          </p>
          <ul className="space-y-12">
            {inclusions.map((item, index) => (
              <li key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <span className="font-sans text-xs uppercase tracking-widest text-accent mt-2 w-8 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-lg md:text-xl leading-relaxed text-[#2A2A28]/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wedding Weekends */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-24 border-t border-[#2A2A28]/10 animate-reveal">
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-12 text-accent text-center">
          Wedding weekends
        </h2>
        <div className="font-serif text-xl leading-relaxed text-[#2A2A28]/90 space-y-8">
          <p>
            Some of my favourite weddings have lasted three days. A welcome evening for guests arriving from different parts of the world. The wedding day itself. A relaxed gathering the morning after, when the formality has gone and what remains is simply people who are glad to be together in a beautiful place.
          </p>
          <p>
            If you are imagining something more than a single day, I would encourage you to explore it. This region lends itself to it — the venues, the landscape, and the pace of life here make a multi-day celebration feel entirely natural rather than elaborate.
          </p>
        </div>
      </section>

      {/* The Right Fit */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-24 border-t border-[#2A2A28]/10 animate-reveal">
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-12 text-accent text-center">
          The right fit
        </h2>
        <div className="font-serif text-xl leading-relaxed text-[#2A2A28]/90 space-y-8">
          <p>
            My couples are almost always planning from abroad — from the US, the UK, Ireland, Australia, New Zealand, and beyond. They want a wedding that feels genuinely French rather than a generic luxury event that could have happened anywhere. And they want a planner who is genuinely embedded in the region — someone who lives here, knows every supplier personally, and is fully committed to their wedding from start to finish.
          </p>
          <p>
            The weddings I plan typically have a total vendor budget of €50,000 and above. I am happy to talk through what full planning looks like within that during our first conversation.
          </p>
          <p>
            If that sounds like you, I would love to hear from you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-32 text-center animate-reveal">
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-12 text-accent">
          Begin the conversation
        </h2>
        <p className="font-serif text-2xl leading-relaxed text-[#2A2A28]/90 mb-16">
          Every enquiry receives a personal response — not an automated reply. Tell me a little about what you are imagining: the time of year, the kind of experience you want your guests to have, and anything else that feels important at this stage. I will come back to you personally, and we can take it from there.
        </p>
        <Link href="/contact" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] hover:text-accent border-b border-[#2A2A28]/30 pb-1 transition-all">
          GET IN TOUCH &rarr;
        </Link>
      </section>
    </div>
  );
}
