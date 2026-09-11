"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Simple honeypot check
    if (data.website) {
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col items-center">
      <header className="w-full max-w-[1000px] mx-auto px-6 py-24 text-center animate-reveal">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2A2A28]">
          Begin the Conversation
        </h1>
      </header>

      <div className="w-full max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-start pb-32 animate-reveal">
        <div className="order-2 md:order-1">
          <img src="/images/j-jweddingdinnerlr-007_orig.jpg" alt="Atmospheric detail" className="w-full aspect-[4/5] object-cover bg-[#e0d6c8]" />
        </div>
        
        <div className="order-1 md:order-2 space-y-12">
          <p className="font-serif text-lg leading-relaxed text-[#2A2A28]/90">
            Every enquiry I receive is read personally, and every reply comes from me. There is no automated response, no assistant — just a genuine conversation about your wedding and whether I am the right person to help you plan it. Tell me as much or as little as you know at this stage. The details can come later.
          </p>

          {status === "success" ? (
            <div className="bg-[#e0d6c8]/30 p-8 text-center animate-reveal">
              <p className="font-serif text-xl text-[#2A2A28]">
                Thank you for your enquiry. I will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot field - hidden from users */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="names" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28]">Your names *</label>
                <input type="text" id="names" name="names" required className="bg-transparent border-b border-[#2A2A28]/20 py-2 focus:outline-none focus:border-accent transition-colors font-serif text-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28]">Your email address *</label>
                <input type="email" id="email" name="email" required className="bg-transparent border-b border-[#2A2A28]/20 py-2 focus:outline-none focus:border-accent transition-colors font-serif text-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28]">Your wedding date (approximate is fine) *</label>
                <input type="text" id="date" name="date" required className="bg-transparent border-b border-[#2A2A28]/20 py-2 focus:outline-none focus:border-accent transition-colors font-serif text-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28]">Approximate guest numbers *</label>
                <input type="text" id="guests" name="guests" required className="bg-transparent border-b border-[#2A2A28]/20 py-2 focus:outline-none focus:border-accent transition-colors font-serif text-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="venue" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28]">Have you chosen a venue? If so, please share the name and location.</label>
                <input type="text" id="venue" name="venue" className="bg-transparent border-b border-[#2A2A28]/20 py-2 focus:outline-none focus:border-accent transition-colors font-serif text-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="source" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28]">How did you hear about Rubijoy?</label>
                <input type="text" id="source" name="source" className="bg-transparent border-b border-[#2A2A28]/20 py-2 focus:outline-none focus:border-accent transition-colors font-serif text-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="vision" className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] leading-relaxed">Tell me about your vision — the kind of celebration you are imagining, the things that matter most to you, anything else you would like me to know *</label>
                <textarea id="vision" name="vision" required rows={6} className="bg-transparent border-b border-[#2A2A28]/20 py-2 focus:outline-none focus:border-accent transition-colors font-serif text-lg resize-none"></textarea>
              </div>

              {status === "error" && (
                <p className="text-red-700 font-sans text-xs uppercase tracking-widest">
                  There was an error sending your enquiry. Please try again or email sandra@rubijoy.com directly.
                </p>
              )}

              <div className="pt-8 flex flex-col items-start gap-12">
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="font-sans text-xs uppercase tracking-widest text-[#2A2A28] hover:text-accent border-b border-[#2A2A28]/30 pb-1 transition-all disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Send my enquiry"}
                </button>

                <p className="font-serif italic text-[#2A2A28]/70">
                  I look forward to hearing from you.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
