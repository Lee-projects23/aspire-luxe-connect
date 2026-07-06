import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Heart, Users, Handshake, Calendar } from "lucide-react";

export const Route = createFileRoute("/involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Bagiage Foundation" },
      { name: "description", content: "Donate, volunteer, partner or sponsor — become part of a global movement to build a more just and sustainable world." },
      { property: "og:title", content: "Get Involved — Bagiage Foundation" },
      { property: "og:url", content: "/involved" },
    ],
    links: [{ rel: "canonical", href: "/involved" }],
  }),
  component: Involved,
});

const ways = [
  { icon: Heart, t: "Sponsor", d: "Every dollar makes a difference. With a 98.29% program expense ratio, your gift goes directly to those who need it most.", cta: "Donate now", to: "/donate", items: ["Give from the Heart Fund — supports all BBF programs where the need is greatest.", "Monthly Giving — become a sustaining supporter.", "Legacy Giving — leave a lasting impact."] },
  { icon: Users, t: "Volunteer", d: "Volunteers at BBF's Pittsburgh warehouse assemble hygiene kits shipped to disaster zones and underserved communities.", cta: "Sign up to volunteer", to: "/contact", items: ["Individuals and families", "Corporate teams", "School and church groups"] },
  { icon: Handshake, t: "Partner", d: "BBF works with a broad network of partners to deliver healthcare, infrastructure, disaster relief and education to communities around the world.", cta: "Become a partner", to: "/contact", items: ["Local community organizations", "Government agencies", "International NGOs", "Corporations and foundations", "Food banks and FQHCs", "Academic institutions"] },
  { icon: Calendar, t: "Events", d: "Hygiene kit assembly days, benefit dinners and community drives. Bring a team or come solo — every session ships to someone who needs it.", cta: "See upcoming events", to: "/news", items: ["Warehouse assembly days (Pittsburgh)", "Annual benefit dinner", "Community collection drives", "Corporate partnership days"] },
];

function Involved() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 container-x mx-auto max-w-[1400px]">
        <p className="eyebrow">Get Involved</p>
        <Reveal><h1 className="hero-heading mt-6 max-w-5xl text-balance">Your support changes lives.</h1></Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground text-pretty">
            Whether you donate, volunteer, or partner with us, you become part of a global movement
            to build a more just and sustainable world.
          </p>
        </Reveal>
      </section>

      <section className="container-x mx-auto max-w-[1400px] py-16 md:py-28 grid md:grid-cols-2 gap-6">
        {ways.map((w, i) => {
          const Icon = w.icon;
          return (
            <Reveal key={w.t} delay={i * 0.08}>
              <div className="group p-10 md:p-14 rounded-3xl border border-border bg-surface h-full hover:border-foreground/40 hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-full bg-foreground text-background grid place-items-center"><Icon size={18}/></span>
                  <span className="text-xs tracking-widest text-[color:var(--gold)]">0{i+1}</span>
                </div>
                <h2 className="section-heading mt-8">{w.t}</h2>
                <p className="mt-4 text-muted-foreground text-pretty">{w.d}</p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                  {w.items.map((it) => <li key={it} className="flex gap-3"><span className="text-[color:var(--gold)]">·</span>{it}</li>)}
                </ul>
                <Link to={w.to} className="btn-ghost mt-8">{w.cta} <ArrowRight size={16}/></Link>
              </div>
            </Reveal>
          );
        })}
      </section>
    </>
  );
}
