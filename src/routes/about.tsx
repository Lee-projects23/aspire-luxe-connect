import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bagiage Foundation" },
      { name: "description", content: "Since 1958, Bagiage Foundation has bridged aid and sustainability across 35+ countries. Our story, mission, vision, values and leadership." },
      { property: "og:title", content: "About — Bagiage Foundation" },
      { property: "og:description", content: "Our story, mission, vision, core values and leadership." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { n: "01", t: "Compassion", d: "Driven by empathy and a deep commitment to alleviating human suffering." },
  { n: "02", t: "Integrity", d: "Operating with transparency, accountability, and ethical rigor." },
  { n: "03", t: "Collaboration", d: "Believing in the power of partnership with local communities and global institutions." },
  { n: "04", t: "Innovation", d: "Embracing creative solutions and evidence-based approaches." },
  { n: "05", t: "Sustainability", d: "Focusing on long-term resilience and self-sufficiency, not dependency." },
];

const timeline = [
  { y: "1958", t: "Founded in Pittsburgh, PA by Dr. Robert A. Hingson." },
  { y: "1960", t: "Development of the needleless jet-injector — the ‘peace gun’ — capable of inoculating 1,000 people per hour." },
  { y: "1961", t: "Mrs. Gussie Hingson observes textbook shortages during a Liberia medical mission." },
  { y: "1962", t: "First education shipment — 100,000 textbooks — arrives in Liberia." },
  { y: "1970", t: "Peru earthquake response marks BBF's first major disaster relief mission." },
  { y: "1972", t: "Beginning of continuous pharmaceutical donations, now measured in the billions of doses." },
  { y: "2022", t: "Launch of Mobile Health Clinics program in underserved U.S. communities." },
  { y: "Today", t: "Serving 35+ countries across five continents." },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 container-x mx-auto max-w-[1400px]">
        <p className="eyebrow">About Bagiage Foundation</p>
        <Reveal>
          <h1 className="hero-heading mt-6 max-w-5xl text-balance">
            Sixty-seven years of showing up — with what was asked for.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl text-pretty">
            We don't impose solutions. We respond to requested needs from partners on the ground —
            in hospitals, classrooms, disaster zones and remote villages across five continents.
          </p>
        </Reveal>
      </section>

      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=2400&q=85&auto=format&fit=crop"
          alt="Community gathered together"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OUR STORY */}
      <section id="story" className="container-x mx-auto max-w-[1400px] py-28 md:py-40 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Our story</p>
          <h2 className="page-heading mt-4">The origin.</h2>
        </div>
        <Reveal className="lg:col-span-8 space-y-8 text-lg text-foreground/85">
          <p>
            Brother's Brother Foundation was founded in Pittsburgh, PA, in 1958 by
            <strong className="font-medium"> Dr. Robert A. Hingson</strong>, a renowned innovator
            in public health.
          </p>
          <p>
            Dr. Hingson developed the needleless jet-injector — or "peace gun" — which could
            inoculate 1,000 people per hour with several simultaneous vaccines. His vision of a
            world free from diseases like smallpox, measles, and cholera led to the creation of BBF.
          </p>
          <p className="text-2xl md:text-3xl font-display leading-snug text-foreground pt-6 border-t border-border">
            In 1961, during a medical mission to Liberia, Mrs. Gussie Hingson observed that many
            schools lacked even the most basic educational materials.
          </p>
          <p>
            BBF's Education Program was formed, and the first shipment — 100,000 school textbooks —
            was sent to Liberia in 1962. In May 1970, a devastating earthquake in Peru killed an
            estimated 70,000 people. BBF responded, marking its first major disaster relief effort.
          </p>
          <p>
            Today, BBF serves communities in more than 35 countries across five continents. We work
            with a broad network of partners to deliver healthcare, infrastructure, disaster relief,
            and education support to communities around the world.
          </p>
        </Reveal>
      </section>

      {/* MISSION + VISION */}
      <section id="mission" className="bg-surface border-y border-border">
        <div className="container-x mx-auto max-w-[1400px] py-28 md:py-40 grid lg:grid-cols-2 gap-12">
          <Reveal className="p-10 md:p-14 rounded-3xl bg-background border border-border">
            <p className="eyebrow">Our mission</p>
            <p className="section-heading mt-6 text-balance">
              To bridge the gap between aid and sustainability by supporting localized programs and
              providing essential resources in Healthcare, Infrastructure, Disaster Response and
              Education — <span className="italic text-[color:var(--forest)]">H.I.D.E.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1} id="vision" className="p-10 md:p-14 rounded-3xl bg-[color:var(--forest)] text-white">
            <p className="eyebrow !text-white/60">Our vision</p>
            <p className="section-heading !text-white mt-6 text-balance">
              A world where every person — regardless of race, religion, gender, or geography —
              has the opportunity to live a healthy, dignified, and productive life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CORE VALUES */}
      <section id="values" className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Core values</p>
            <Reveal>
              <h2 className="page-heading mt-4 text-balance">Five commitments that shape every decision.</h2>
            </Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.06}>
              <div className="p-8 rounded-2xl bg-surface border border-border h-full hover:border-foreground/40 hover:-translate-y-1 transition-all">
                <div className="text-xs tracking-widest text-[color:var(--gold)] font-medium">{v.n}</div>
                <h3 className="font-display text-2xl mt-4">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-surface border-y border-border">
        <div className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
          <p className="eyebrow">History</p>
          <Reveal>
            <h2 className="page-heading mt-4 max-w-3xl text-balance">
              A timeline of showing up, decade after decade.
            </h2>
          </Reveal>
          <div className="mt-16 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {timeline.map((e, i) => (
                <Reveal key={i} delay={i * 0.05} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                  <div className={`pl-16 md:pl-0 ${i % 2 === 1 ? "md:text-right md:pr-16" : "md:pr-16"}`}>
                    <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[color:var(--gold)] ring-4 ring-background" />
                    <div className="font-display text-4xl md:text-5xl text-[color:var(--forest)]">{e.y}</div>
                    <p className="mt-3 text-muted-foreground max-w-md md:inline-block">{e.t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="container-x mx-auto max-w-[1400px] py-28 md:py-40">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <p className="eyebrow">Our leadership</p>
            <Reveal><h2 className="page-heading mt-4 text-balance">A team built on decades of experience.</h2></Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="text-lg text-muted-foreground max-w-xl text-pretty">
              Our leadership brings together public health innovators, logistics experts, and
              community organizers united by one belief — that generosity is only useful when
              it arrives on time, in the right form, in the right hands.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: "Dr. R. Hingson", r: "Founder (1958)" },
            { n: "Executive Director", r: "Global Operations" },
            { n: "Program Director", r: "H.I.D.E. Programs" },
            { n: "Partnerships Lead", r: "Global Partnerships" },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                  <img
                    src={`https://images.unsplash.com/photo-${["1573496359142-b8d87734a5a2","1544005313-94ddf0286df2","1507003211169-0a1dd7228f2d","1580489944761-15a19d654956"][i]}?w=800&q=80&auto=format&fit=crop`}
                    alt={p.n}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-xl mt-5">{p.n}</h3>
                <p className="text-sm text-muted-foreground">{p.r}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ANNUAL REPORT */}
      <section id="annual-report" className="container-x mx-auto max-w-[1400px] pb-32">
        <div className="rounded-[2rem] bg-[color:var(--forest)] text-white p-10 md:p-20 grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="eyebrow !text-white/60">Annual Report</p>
            <h2 className="page-heading !text-white mt-4 text-balance">
              2024 was our most impactful year yet.
            </h2>
          </div>
          <div>
            <p className="text-white/75 text-pretty max-w-lg">
              134 medical aid shipments across 19 countries. 15 major disaster responses.
              Thirteen 40-foot containers of new educational materials shipped overseas. And
              98.29% of every dollar going directly to programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/impact" className="btn-gold">Read the full report <ArrowRight size={16}/></Link>
              <Link to="/donate" className="btn-ghost !border-white/40 !text-white hover:!bg-white hover:!text-black">
                Support next year
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
