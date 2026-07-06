import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ArrowUpRight, Heart, Building2, LifeBuoy, GraduationCap, Trophy } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Bagiage Foundation" },
      { name: "description", content: "Healthcare, Infrastructure, Disaster Response, Education and Sports — the five pillars of Bagiage Foundation's global work." },
      { property: "og:title", content: "Our Work — Bagiage Foundation" },
      { property: "og:description", content: "The five pillars of our global work — H.I.D.E. plus Sports." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

const pillars = [
  { to: "/work/healthcare", icon: Heart, k: "01", t: "Healthcare",
    d: "Pharmaceuticals, medical equipment, mobile clinics, med-surg missions and physician fellowships." },
  { to: "/work/infrastructure", icon: Building2, k: "02", t: "Infrastructure",
    d: "Solar power installations, clean water (WASH), dam projects — long-term development." },
  { to: "/work/disaster-response", icon: LifeBuoy, k: "03", t: "Disaster Response",
    d: "Emergency supplies, hygiene kits and a three-phase response model — immediate, recovery, long-term." },
  { to: "/work/education", icon: GraduationCap, k: "04", t: "Education",
    d: "Textbooks, tablets, computer labs, school rehabilitation and construction across LMICs." },
  { to: "/work/sports", icon: Trophy, k: "05", t: "Sports",
    d: "A growing pillar — sport as a vehicle for confidence, health and belonging." },
];

function Work() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 container-x mx-auto max-w-[1400px]">
        <p className="eyebrow">Our Work</p>
        <Reveal>
          <h1 className="hero-heading mt-6 max-w-5xl text-balance">
            We prioritize long-term impact, local partnerships, and high-quality goods and services.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground text-pretty">
            We don't impose solutions — we respond to requested needs from our partners on the
            ground. Each program is designed for the community it serves.
          </p>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="container-x mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { n: 25, s: "", label: "Countries — healthcare shipments 2025" },
            { n: 173, s: "M+", label: "Medicine doses shipped 2025" },
            { n: 26, s: "", label: "Med-Surg trips in 16 countries (2024)" },
            { n: 15, s: "", label: "Major disasters responded to in 2024" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="py-14 px-6 text-center">
              <div className="font-display text-5xl md:text-6xl tracking-tight">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pillars list */}
      <section className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
        <div className="grid gap-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.t} delay={i * 0.05}>
                <Link
                  to={p.to}
                  className="group grid md:grid-cols-12 gap-6 items-center p-6 md:p-10 rounded-3xl border border-border hover:border-foreground/40 hover:bg-surface transition-all"
                >
                  <div className="md:col-span-1 text-[color:var(--gold)] font-medium tracking-widest text-xs">
                    {p.k}
                  </div>
                  <div className="md:col-span-1">
                    <span className="w-12 h-12 rounded-full bg-foreground text-background grid place-items-center">
                      <Icon size={18} />
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="section-heading">{p.t}</h2>
                  </div>
                  <div className="md:col-span-3 text-muted-foreground text-sm md:text-base">
                    {p.d}
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <span className="inline-flex w-11 h-11 rounded-full border border-border grid place-items-center group-hover:bg-foreground group-hover:text-background transition">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
