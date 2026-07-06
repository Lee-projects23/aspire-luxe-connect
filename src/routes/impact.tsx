import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Bagiage Foundation" },
      { name: "description", content: "The numbers, stories and testimonials behind our work in 35+ countries." },
      { property: "og:title", content: "Impact — Bagiage Foundation" },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 container-x mx-auto max-w-[1400px]">
        <p className="eyebrow">Our Impact</p>
        <Reveal><h1 className="hero-heading mt-6 max-w-5xl text-balance">Measured in doses, containers, kilowatts — and lives.</h1></Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground text-pretty">
            98.29% of every dollar goes directly to programs. Here's what that looked like last year.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-x mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { n: 35, s: "+", label: "Countries served" },
            { n: 173, s: "M+", label: "Medicine doses (2025)" },
            { n: 15, label: "Disaster responses (2024)" },
            { n: 98.29, s: "%", label: "Program expense ratio" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="py-14 px-6 text-center">
              <div className="font-display text-5xl md:text-6xl tracking-tight"><Counter to={s.n} suffix={s.s ?? ""} /></div>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
        <p className="eyebrow">Where we work</p>
        <Reveal><h2 className="page-heading mt-4 max-w-3xl text-balance">Five continents, one commitment.</h2></Reveal>
        <div className="mt-14 grid md:grid-cols-3 lg:grid-cols-5 gap-3">
          {["Africa","Asia","North America","South America","Caribbean"].map((r, i) => (
            <Reveal key={r} delay={i * 0.05}>
              <div className="p-6 rounded-2xl border border-border h-full">
                <div className="text-[color:var(--gold)] text-xs tracking-widest">REGION {String(i+1).padStart(2,"0")}</div>
                <h3 className="font-display text-2xl mt-3">{r}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Active partnerships across healthcare, education and infrastructure programs.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORIES */}
      <section id="stories" className="bg-surface border-y border-border">
        <div className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
          <p className="eyebrow">Success stories</p>
          <Reveal><h2 className="page-heading mt-4 max-w-3xl text-balance">The moments this work is really about.</h2></Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { t: "Jarigu Dam, Ghana", d: "Dredging and expansion improved water quality for more than 8,000 people." },
              { t: "St. Andrew's, Malawi", d: "A new school in Mulanje — permanent, local, staffed by local teachers." },
              { t: "Hurricane Melissa, Jamaica", d: "6,000+ hygiene kits and emergency supplies delivered within days." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden bg-background border border-border h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${["1469571486292-0ba58a3f068b","1497486751825-1233686d5d80","1509099836639-18ba1795216d"][i]}?w=900&q=80&auto=format&fit=crop`} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl">{s.t}</h3>
                    <p className="mt-3 text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
        <p className="eyebrow">Testimonials</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            { q: "When a container of medicine arrives, it is not just cargo. It is a parent who will see their child again.", a: "Partner clinic director, Liberia" },
            { q: "The solar system BBF installed keeps our operating theatre running through the night. That's the difference between life and loss.", a: "Hospital administrator, India" },
            { q: "After the hurricane, the hygiene kits arrived before anyone else. It felt like being remembered.", a: "Community organizer, Jamaica" },
            { q: "Our children have textbooks for the first time in a decade. That changes what they believe is possible.", a: "Head teacher, Malawi" },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="p-10 rounded-2xl border border-border bg-background h-full">
                <Quote size={24} className="text-[color:var(--gold)]" />
                <p className="mt-6 text-xl md:text-2xl font-display leading-snug text-balance">{t.q}</p>
                <p className="mt-6 text-sm text-muted-foreground">— {t.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMPACT REPORT */}
      <section id="report" className="container-x mx-auto max-w-[1400px] pb-32">
        <div className="rounded-[2rem] bg-[color:var(--forest)] text-white p-10 md:p-20 grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="eyebrow !text-white/60">Impact report</p>
            <h2 className="page-heading !text-white mt-4 text-balance">2024 in numbers.</h2>
          </div>
          <div>
            <ul className="space-y-4 text-white/85 text-lg">
              <li>· 134 medical aid shipments to 19 countries</li>
              <li>· 15 major disaster responses</li>
              <li>· 26 Med-Surg trips in 16 countries</li>
              <li>· Thirteen 40' containers of educational materials</li>
              <li>· 92% of HQ energy offset by rooftop solar</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/donate" className="btn-gold">Fund next year's impact <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
