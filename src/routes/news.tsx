import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Blog — Bagiage Foundation" },
      { name: "description", content: "Stories of impact from Bagiage Foundation's global work." },
      { property: "og:title", content: "News & Blog — Bagiage Foundation" },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

const featured = [
  { t: "2025 Year in Impact: A Year of Compassion and Action", c: "Report", d: "The numbers, the moments, and the people behind our most impactful year yet." },
  { t: "BBF Legacy in Action: What 1958 Built and How It Serves the World Today", c: "History", d: "From Dr. Hingson's peace gun to today's mobile clinics — the through-line." },
  { t: "Responding When It Matters Most: BBF's Disaster Response Program", c: "Program", d: "Inside our three-phase response model and the volunteers who make it possible." },
  { t: "Be a Good Neighbor: Bringing Hope and Healing", c: "Community", d: "How local partnerships turn generosity into infrastructure for care." },
];

function News() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 container-x mx-auto max-w-[1400px]">
        <p className="eyebrow">News & Blog</p>
        <Reveal><h1 className="hero-heading mt-6 max-w-5xl text-balance">Stories of impact.</h1></Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground text-pretty">
            Long-form reporting, program updates and field notes from the communities we serve.
          </p>
        </Reveal>
      </section>

      {/* FEATURED */}
      <section className="container-x mx-auto max-w-[1400px] pb-16">
        <Reveal>
          <Link to="/news" className="group grid lg:grid-cols-12 gap-8 rounded-3xl overflow-hidden border border-border p-6 md:p-10 bg-surface">
            <div className="lg:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=85&auto=format&fit=crop" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="eyebrow">Featured · Report</p>
              <h2 className="page-heading mt-4 text-balance">{featured[0].t}</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-lg">{featured[0].d}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm">Read the article <ArrowUpRight size={14}/></div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* GRID */}
      <section className="container-x mx-auto max-w-[1400px] pb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {featured.slice(1).map((a, i) => (
            <Reveal key={a.t} delay={i * 0.08}>
              <div className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                  <img src={`https://images.unsplash.com/photo-${["1509099836639-18ba1795216d","1497486751825-1233686d5d80","1469571486292-0ba58a3f068b"][i]}?w=900&q=80&auto=format&fit=crop`} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="mt-5 text-xs tracking-widest uppercase text-muted-foreground">{a.c}</p>
                <h3 className="font-display text-2xl mt-2 leading-snug">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
