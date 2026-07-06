import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/work/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure — Bagiage Foundation" },
      { name: "description", content: "Solar power installations, clean water systems and long-term development projects across LMICs." },
      { property: "og:title", content: "Infrastructure — Bagiage Foundation" },
      { property: "og:description", content: "Solar, clean water and dam projects — infrastructure that lasts." },
      { property: "og:url", content: "/work/infrastructure" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&auto=format&fit=crop" },
    ],
    links: [{ rel: "canonical", href: "/work/infrastructure" }],
  }),
  component: () => (
    <ProgramPage
      eyebrow="Program · Infrastructure"
      title={<>Power, water, resilience — <span className="italic text-[color:var(--forest)]">built to last.</span></>}
      intro="Our Infrastructure Program extends our commitment to long-term development by supporting renewable energy systems and clean water access projects."
      heroImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2400&q=85&auto=format&fit=crop"
      challenge="Access to reliable electricity and clean water remains a major barrier for rural schools and health facilities. Climate change is making these challenges more urgent, not less."
      solution="We install solar panel systems, build clean water infrastructure, and support long-term WASH (water, sanitation and hygiene) projects for schools, clinics and community centers."
      initiatives={[
        { t: "Solar Power Installations", d: "Full solar panel systems for schools, health facilities and community centers. In 2025, solar installations were completed at clinics in India and Liberia." },
        { t: "BBF Headquarters Solar", d: "92% of our annual energy use is offset by rooftop solar panels — saving over $20,000 annually in fuel and electricity." },
        { t: "Clean Water (WASH)", d: "Water, sanitation and hygiene projects — latrines, rainwater harvesting systems and handwashing stations for schools and communities." },
        { t: "Ghana Dam Project", d: "Dredging and expanding the Jarigu Dam to improve water quality for more than 8,000 people." },
      ]}
      stats={[
        { n: 5, label: "Hospitals now solar-powered" },
        { n: 4, label: "Orphanages solar-powered" },
        { n: 8000, s: "+", label: "People served by Jarigu Dam" },
        { n: 92, s: "%", label: "HQ energy offset by solar" },
      ]}
      impact={[
        "Solar power provided to 5 hospitals, 4 orphanages and multiple educational facilities.",
        "Over $20,000 in annual fuel and electricity savings at BBF headquarters.",
        "Clean water access expanded across schools and clinics in Africa and South Asia.",
      ]}
      ctaLabel="Support Infrastructure"
    />
  ),
});
