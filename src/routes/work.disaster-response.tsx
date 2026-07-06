import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/work/disaster-response")({
  head: () => ({
    meta: [
      { title: "Disaster Response — Bagiage Foundation" },
      { name: "description", content: "Emergency supplies, hygiene kits and a three-phase disaster response — immediate relief, recovery and long-term rehabilitation." },
      { property: "og:title", content: "Disaster Response — Bagiage Foundation" },
      { property: "og:description", content: "15 major disasters responded to in 2024 — hurricanes, wildfires, tornadoes and floods." },
      { property: "og:url", content: "/work/disaster-response" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1587653263995-422546a7a569?w=1600&q=80&auto=format&fit=crop" },
    ],
    links: [{ rel: "canonical", href: "/work/disaster-response" }],
  }),
  component: () => (
    <ProgramPage
      eyebrow="Program · Disaster Response"
      title={<>When crisis strikes, we're <span className="italic text-[color:var(--forest)]">already moving.</span></>}
      intro="When disasters strike, BBF is ready to respond — delivering essential aid quickly to communities facing crisis, and staying for the long recovery that follows."
      heroImage="https://images.unsplash.com/photo-1587653263995-422546a7a569?w=2400&q=85&auto=format&fit=crop"
      challenge="Climate change is increasing the frequency and severity of natural disasters — hurricanes, wildfires, earthquakes and floods. Communities need help faster, and for longer."
      solution="A three-phase response model: immediate relief, recovery support, and long-term rehabilitation. Anchored by our Hygiene Kit Assembly Program at our Pittsburgh warehouse."
      initiatives={[
        { t: "Emergency Supplies", d: "Delivering clean water, generators, medical equipment, shelter materials and hygiene kits within days of a disaster." },
        { t: "Hygiene Kit Assembly", d: "A cornerstone of our disaster response. Volunteers assemble kits with soap, shampoo and personal care products that support health and dignity during recovery." },
        { t: "Three-Phase Response", d: "Immediate relief · Recovery support · Long-term rehabilitation. We don't disappear when the news cycle moves on." },
        { t: "Local Partnerships", d: "We partner with food banks, clinics, school districts, animal shelters and community organizations already trusted on the ground." },
      ]}
      stats={[
        { n: 15, label: "Major disasters (2024)" },
        { n: 6000, s: "+", label: "Hygiene kits to Jamaica" },
        { n: 3, label: "Response phases" },
        { n: 4, label: "U.S. states supported in 2024" },
      ]}
      impact={[
        "California Wildfires — partnered with food banks, clinics, school districts and animal shelters.",
        "Texas Floods — provided financial support for search and rescue efforts.",
        "Hurricane Melissa (Jamaica) — sent 6,000+ hygiene kits and emergency supplies.",
        "Tornado outbreaks — responded in Mississippi, Missouri and Kentucky.",
      ]}
      ctaLabel="Support Disaster Response"
    />
  ),
});
