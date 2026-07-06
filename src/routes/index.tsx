import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Heart, Building2, LifeBuoy, GraduationCap, Trophy } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  component: Home,
});

const programs = [
  { key: "H", title: "Healthcare", to: "/work/healthcare", icon: Heart,
    blurb: "Pharmaceuticals, medical equipment and mobile clinics for underserved communities.",
    image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=1600&q=80&auto=format&fit=crop" },
  { key: "I", title: "Infrastructure", to: "/work/infrastructure", icon: Building2,
    blurb: "Solar power and clean water systems for long-term resilience.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&auto=format&fit=crop" },
  { key: "D", title: "Disaster Response", to: "/work/disaster-response", icon: LifeBuoy,
    blurb: "Emergency supplies and hygiene kits deployed the moment crisis strikes.",
    image: "https://images.unsplash.com/photo-1587653263995-422546a7a569?w=1600&q=80&auto=format&fit=crop" },
  { key: "E", title: "Education", to: "/work/education", icon: GraduationCap,
    blurb: "Textbooks, rebuilt schools and equipped computer labs for a generation.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80&auto=format&fit=crop" },
  { key: "S", title: "Sports", to: "/work/sports", icon: Trophy,
    blurb: "Sport as a vehicle for confidence, health and community — for every child.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80&auto=format&fit=crop" },
] as const;

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=2400&q=85&auto=format&fit=crop"
            alt="Hands reaching across communities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full container-x mx-auto max-w-[1400px] flex flex-col justify-end pb-24 md:pb-32 text-white"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="eyebrow !text-white/70"
          >
            Bagiage Foundation · Est. 1958
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-heading mt-6 max-w-5xl text-balance"
          >
            Bridging the gap<br />between <span className="italic gold-shimmer">aid</span> and sustainability.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg md:text-xl text-white/80 text-pretty"
          >
            Delivering healthcare, infrastructure, disaster relief and education to
            communities in more than 35 countries across five continents.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link to="/donate" className="btn-primary !bg-white !text-black hover:!bg-[color:var(--gold)]">
              Donate Now <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-ghost !border-white/40 !text-white hover:!bg-white hover:!text-black">
              Explore our mission
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 text-[11px] tracking-[0.3em] uppercase flex flex-col items-center gap-2"
        >
          Scroll
          <span className="w-px h-10 bg-white/40 relative overflow-hidden">
            <span className="absolute inset-0 bg-white animate-[floaty_2.4s_ease-in-out_infinite]" />
          </span>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="container-x mx-auto max-w-[1400px] py-28 md:py-40 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Who we are</p>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="page-heading text-balance">
              A 60-year-old idea, still radically simple: meet the need where it exists,
              with what people actually asked for.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl text-pretty">
              Founded in 1958 by Dr. Robert A. Hingson, Bagiage Foundation (BBF) has grown
              from a single vaccine mission into a global operation serving hospitals, schools,
              disaster zones and remote villages — always in response to requests from partners
              on the ground.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex gap-3">
              <Link to="/about" className="btn-ghost">Our full story <ArrowUpRight size={16}/></Link>
              <Link to="/impact" className="btn-ghost">See our impact</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="container-x mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { n: 35, s: "+", label: "Countries served" },
            { n: 173, s: "M+", label: "Medicine doses shipped in 2025" },
            { n: 134, s: "", label: "Medical aid shipments in 2024" },
            { n: 98.29, s: "%", label: "Program expense ratio" },
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

      {/* CORE PROGRAMS H.I.D.E. */}
      <section className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Our Core Programs</p>
            <Reveal>
              <h2 className="page-heading mt-4 text-balance">
                <span className="text-[color:var(--forest)]">H.I.D.E.</span> — four pillars,
                one commitment to lasting change.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-muted-foreground text-lg text-pretty">
              Healthcare, Infrastructure, Disaster Response and Education — plus Sports as a
              growing fifth pillar. Every program is designed for long-term resilience, not
              short-term relief.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.key} delay={i * 0.08}>
                <Link
                  to={p.to}
                  className="group relative block h-[440px] rounded-3xl overflow-hidden bg-neutral-900"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[900ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="relative z-10 h-full p-7 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="w-11 h-11 rounded-full glass-dark grid place-items-center">
                        <Icon size={18} />
                      </span>
                      <span className="font-display text-4xl opacity-40 group-hover:opacity-100 group-hover:text-[color:var(--gold)] transition-all">
                        {p.key}
                      </span>
                    </div>
                    <div>
                      <h3 className="section-heading !text-white !text-3xl md:!text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-white/70 text-sm max-w-xs">{p.blurb}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm">
                        Explore program
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* STORY / QUOTE */}
      <section className="bg-[color:var(--forest)] text-white">
        <div className="container-x mx-auto max-w-[1400px] py-32 md:py-44">
          <p className="eyebrow !text-white/60">Our Story · 1958 → Today</p>
          <Reveal>
            <blockquote className="mt-8 max-w-5xl">
              <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-balance">
                “A world where every person — regardless of race, religion, gender, or geography —
                has the opportunity to live a healthy, dignified, and productive life.”
              </p>
              <footer className="mt-8 text-white/60 text-sm tracking-widest uppercase">
                — Our vision
              </footer>
            </blockquote>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-8 border-t border-white/15 pt-10">
            {[
              { y: "1958", t: "Founded in Pittsburgh by Dr. Robert A. Hingson." },
              { y: "1962", t: "First shipment of 100,000 textbooks to Liberia." },
              { y: "1970", t: "First major disaster relief effort in Peru." },
            ].map((e, i) => (
              <Reveal key={e.y} delay={i * 0.1} className="">
                <div className="font-display text-5xl text-[color:var(--gold)]">{e.y}</div>
                <p className="mt-3 text-white/75 text-pretty max-w-xs">{e.t}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <Link to="/about" className="btn-gold mt-14">Read our full history <ArrowRight size={16}/></Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow">Testimonial</p>
          </div>
          <Reveal className="lg:col-span-8">
            <p className="section-heading text-balance">
              “When a container of medicine arrives, it is not just cargo. It is a
              parent who will see their child again — a doctor who can finally
              treat instead of triage.”
            </p>
            <p className="mt-8 text-muted-foreground">— Partner clinic director, Liberia</p>
          </Reveal>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="container-x mx-auto max-w-[1400px] pb-28 md:pb-40">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow">Latest news</p>
            <h2 className="section-heading mt-3">Stories of Impact</h2>
          </div>
          <Link to="/news" className="hidden md:inline-flex btn-ghost">View all posts</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "2025 Year in Impact", d: "A year of compassion and action." },
            { t: "BBF Legacy in Action", d: "What 1958 built, and how it serves today." },
            { t: "When It Matters Most", d: "Inside BBF's disaster response program." },
            { t: "Be a Good Neighbor", d: "Bringing hope and healing, block by block." },
          ].map((n, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Link to="/news" className="group block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                  <img
                    src={`https://images.unsplash.com/photo-${["1509099836639-18ba1795216d","1488521787991-ed7bbaae773c","1497486751825-1233686d5d80","1509099836639-18ba1795216d"][i]}?w=800&q=80&auto=format&fit=crop`}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="mt-5 text-xs tracking-widest uppercase text-muted-foreground">Article</p>
                <h3 className="font-display text-xl mt-2 leading-snug">{n.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.d}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mx-auto max-w-[1400px] pb-28">
        <div className="relative rounded-[2rem] overflow-hidden bg-neutral-900 text-white p-10 md:p-20">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_0%,var(--gold),transparent_40%),radial-gradient(circle_at_80%_100%,var(--forest),transparent_50%)]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-end">
            <h2 className="page-heading !text-white text-balance">
              Every donation changes a life.
            </h2>
            <div className="lg:justify-self-end">
              <p className="text-white/70 max-w-md text-pretty">
                98.29% of every dollar goes directly to programs. Give once, give monthly,
                or leave a legacy — every path leads to someone whose life gets easier.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/donate" className="btn-gold">Donate now <ArrowRight size={16}/></Link>
                <Link to="/involved" className="btn-ghost !border-white/40 !text-white hover:!bg-white hover:!text-black">
                  Get involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
