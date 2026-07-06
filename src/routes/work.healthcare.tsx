import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/work/healthcare")({
  head: () => ({
    meta: [
      { title: "Healthcare — Bagiage Foundation" },
      { name: "description", content: "Since 1972, BBF has delivered pharmaceuticals, medical equipment and mobile clinics to underserved communities in 25+ countries." },
      { property: "og:title", content: "Healthcare — Bagiage Foundation" },
      { property: "og:description", content: "173M+ doses of medicine, 134 aid shipments, 26 Med-Surg trips — our healthcare work." },
      { property: "og:url", content: "/work/healthcare" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=1600&q=80&auto=format&fit=crop" },
    ],
    links: [{ rel: "canonical", href: "/work/healthcare" }],
  }),
  component: () => (
    <ProgramPage
      eyebrow="Program · Healthcare"
      title={<>Medicine, equipment and clinics — <span className="italic text-[color:var(--forest)]">where they're needed most.</span></>}
      intro="Since 1972, BBF has provided millions of doses of donated pharmaceuticals to hospitals, clinics and healthcare systems in underserved regions across the world."
      heroImage="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=2400&q=85&auto=format&fit=crop"
      challenge="Non-communicable diseases now outnumber infectious diseases as the top killers globally. Low- and middle-income countries face critical shortages of pharmaceuticals, medical equipment and trained specialists."
      solution="We deliver donated pharmaceuticals, medical equipment, mobile clinics, physician-led surgical missions and long-term fellowship training — always in response to requested needs."
      initiatives={[
        { t: "Pharmaceutical Donations", d: "In 2025, BBF sent over 173 million doses of medicine through healthcare shipments to partners in 25 countries." },
        { t: "Medical Equipment", d: "Shipping hospital beds, surgical kits, crutches and diagnostic tools to hospitals and clinics." },
        { t: "Mobile Health Clinics", d: "Since 2022, bringing essential care directly to underserved U.S. communities — vision and diabetes screening units, primary care vans, and an audiology clinic." },
        { t: "Med-Surg Missions", d: "Supporting physician-led surgical teams in underserved areas. In 2024, we supported 26 Med-Surg trips in 16 countries." },
        { t: "Fellowship Training", d: "Sponsoring physician training in African LMICs through partnerships with Johns Hopkins University." },
        { t: "Cardiovascular Focus", d: "Nearly 40% of donated pharmaceuticals addressed cardiovascular diseases — the leading killer worldwide." },
      ]}
      stats={[
        { n: 173, s: "M+", label: "Doses shipped (2025)" },
        { n: 25, label: "Countries reached (2025)" },
        { n: 134, label: "Medical aid shipments (2024)" },
        { n: 26, label: "Med-Surg trips (2024)" },
      ]}
      impact={[
        "134 medical aid shipments sent to 19 countries in 2024.",
        "Nearly 40% of donated pharmaceuticals addressed cardiovascular diseases.",
        "Mobile clinics expanded to include vision, diabetes and audiology screening.",
      ]}
      ctaLabel="Support Healthcare"
    />
  ),
});
