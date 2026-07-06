import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export type Stat = { n: number; s?: string; label: string };

export function ProgramPage({
  eyebrow,
  title,
  intro,
  heroImage,
  challenge,
  solution,
  initiatives,
  stats,
  impact,
  ctaLabel = "Support this program",
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  heroImage: string;
  challenge: string;
  solution: string;
  initiatives: { t: string; d: string }[];
  stats: Stat[];
  impact?: string[];
  ctaLabel?: string;
}) {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 md:pt-52 pb-14 container-x mx-auto max-w-[1400px]">
        <p className="eyebrow">{eyebrow}</p>
        <Reveal>
          <h1 className="hero-heading mt-6 max-w-5xl text-balance">{title}</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground text-pretty">{intro}</p>
        </Reveal>
      </section>

      <div className="relative h-[65vh] min-h-[440px] overflow-hidden">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>

      {/* CHALLENGE & SOLUTION */}
      <section className="container-x mx-auto max-w-[1400px] py-28 md:py-40 grid lg:grid-cols-2 gap-10">
        <Reveal className="p-10 md:p-14 rounded-3xl bg-surface border border-border">
          <p className="eyebrow">The challenge</p>
          <p className="mt-6 text-2xl md:text-3xl font-display leading-snug text-balance">{challenge}</p>
        </Reveal>
        <Reveal delay={0.1} className="p-10 md:p-14 rounded-3xl bg-[color:var(--forest)] text-white">
          <p className="eyebrow !text-white/60">Our solution</p>
          <p className="mt-6 text-2xl md:text-3xl font-display leading-snug text-balance">{solution}</p>
        </Reveal>
      </section>

      {/* STATS */}
      {stats.length > 0 && (
        <section className="border-y border-border bg-surface">
          <div className={`container-x mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} divide-x divide-border`}>
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08} className="py-14 px-6 text-center">
                <div className="font-display text-4xl md:text-6xl tracking-tight">
                  <Counter to={s.n} suffix={s.s ?? ""} />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* INITIATIVES */}
      <section className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Key initiatives</p>
            <Reveal>
              <h2 className="page-heading mt-4 text-balance">What we deliver, in detail.</h2>
            </Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {initiatives.map((it, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="p-8 rounded-2xl border border-border bg-background hover:border-foreground/40 hover:-translate-y-1 transition-all h-full">
                <div className="text-xs tracking-widest text-[color:var(--gold)] font-medium">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl mt-4">{it.t}</h3>
                <p className="mt-3 text-muted-foreground text-pretty">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMPACT LIST */}
      {impact && impact.length > 0 && (
        <section className="container-x mx-auto max-w-[1400px] pb-28">
          <div className="rounded-3xl bg-surface border border-border p-10 md:p-16">
            <p className="eyebrow">Impact snapshot</p>
            <ul className="mt-8 space-y-6 max-w-3xl">
              {impact.map((line, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <li className="text-xl md:text-2xl font-display leading-snug flex gap-4">
                    <span className="text-[color:var(--gold)]">·</span>
                    <span>{line}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-x mx-auto max-w-[1400px] pb-32">
        <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="section-heading !text-background max-w-xl text-balance">
            Your support keeps this program running.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/donate" className="btn-gold">{ctaLabel} <ArrowRight size={16}/></Link>
            <Link to="/work" className="btn-ghost !border-white/30 !text-background hover:!bg-white hover:!text-black">
              All programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
