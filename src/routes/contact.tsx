import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bagiage Foundation" },
      { name: "description", content: "Get in touch with Bagiage Foundation — Chennai, Tamil Nadu." },
      { property: "og:title", content: "Contact — Bagiage Foundation" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 container-x mx-auto max-w-[1400px]">
        <p className="eyebrow">Contact</p>
        <Reveal><h1 className="hero-heading mt-6 max-w-5xl text-balance">Get in touch.</h1></Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground text-pretty">
            Whether you'd like to partner with us, volunteer, or simply learn more — we'd love to hear from you.
          </p>
        </Reveal>
      </section>

      <section className="container-x mx-auto max-w-[1400px] pb-24 grid lg:grid-cols-12 gap-8">
        <Reveal className="lg:col-span-5 space-y-4">
          {[
            { i: MapPin, t: "Address", d: "1202, 71st Block VOC Nagar, Tondiarpet, Chennai, Tamil Nadu — 600081" },
            { i: Phone, t: "Phone", d: "+91 6380 183 259" },
            { i: Mail, t: "Email", d: "bagiagebharath@gmail.com" },
          ].map((r, i) => {
            const Icon = r.i;
            return (
              <div key={i} className="p-8 rounded-2xl border border-border bg-surface flex items-start gap-4">
                <span className="w-11 h-11 rounded-full bg-foreground text-background grid place-items-center shrink-0"><Icon size={16}/></span>
                <div>
                  <p className="eyebrow">{r.t}</p>
                  <p className="mt-2 text-lg">{r.d}</p>
                </div>
              </div>
            );
          })}
          <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
            <iframe
              title="Map"
              className="w-full h-full"
              src="https://maps.google.com/maps?q=Tondiarpet,Chennai&z=13&output=embed"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-[color:var(--forest)] text-white">
          <h2 className="section-heading !text-white">Send us a message</h2>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-8 grid gap-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="bg-white/10 border border-white/15 rounded-xl px-5 py-4 outline-none placeholder:text-white/50" />
              <input required type="email" placeholder="Email address" className="bg-white/10 border border-white/15 rounded-xl px-5 py-4 outline-none placeholder:text-white/50" />
            </div>
            <input placeholder="Subject" className="bg-white/10 border border-white/15 rounded-xl px-5 py-4 outline-none placeholder:text-white/50" />
            <textarea required rows={6} placeholder="How can we help?" className="bg-white/10 border border-white/15 rounded-xl px-5 py-4 outline-none placeholder:text-white/50 resize-none" />
            <button className="btn-gold justify-center mt-2">
              {sent ? "Message sent — thank you" : <>Send message <Send size={16}/></>}
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
