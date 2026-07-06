import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/work/education")({
  head: () => ({
    meta: [
      { title: "Education — Bagiage Foundation" },
      { name: "description", content: "Textbooks, tablets, computer labs and school rehabilitation in underserved communities since 1962." },
      { property: "og:title", content: "Education — Bagiage Foundation" },
      { property: "og:description", content: "From 100,000 textbooks to Liberia in 1962 to computer labs today — our education work." },
      { property: "og:url", content: "/work/education" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80&auto=format&fit=crop" },
    ],
    links: [{ rel: "canonical", href: "/work/education" }],
  }),
  component: () => (
    <ProgramPage
      eyebrow="Program · Education"
      title={<>A classroom is a promise — <span className="italic text-[color:var(--forest)]">we help keep it.</span></>}
      intro="BBF supports learning environments in underserved communities through textbooks, classroom supplies, tablets, computers and school rehabilitation — a program that began in 1962."
      heroImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=2400&q=85&auto=format&fit=crop"
      challenge="Millions of children in underserved communities lack access to quality education, textbooks and technology — the tools that turn potential into opportunity."
      solution="We ship educational materials, rebuild schools damaged by disasters, equip computer labs, and support new school construction in partnership with local educators."
      initiatives={[
        { t: "Educational Materials", d: "Since 1962, providing donated textbooks and supplies. The first shipment — 100,000 textbooks — was sent to Liberia." },
        { t: "School Rehabilitation", d: "Repairing and rebuilding schools damaged by disasters so children can return to learning quickly." },
        { t: "Technology Access", d: "Equipping computer labs with tablets and computers. In 2025, BBF equipped a computer lab for a partner organization in Florida." },
        { t: "School Construction", d: "St. Andrew's School constructed in Mulanje, Malawi — a permanent home for local learners." },
        { t: "Boarding School — Zambia", d: "Construction creating 100+ jobs with projected enrollment growth of 500+ students." },
        { t: "Teacher Training", d: "Teacher training initiatives in Haiti — investing in the people who make schools work." },
      ]}
      stats={[
        { n: 13, label: "40' containers shipped overseas" },
        { n: 100000, s: "+", label: "Textbooks in first-ever shipment" },
        { n: 500, s: "+", label: "Projected new students (Zambia)" },
        { n: 100, s: "+", label: "Jobs created (Zambia)" },
      ]}
      impact={[
        "Thirteen 40' containers of new education materials shipped to overseas partners.",
        "Teacher training initiatives in Haiti.",
        "New schools constructed in Malawi and Zambia.",
      ]}
      ctaLabel="Support Education"
    />
  ),
});
