import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/work/sports")({
  head: () => ({
    meta: [
      { title: "Sports — Bagiage Foundation" },
      { name: "description", content: "Sport as a vehicle for confidence, health and belonging — BBF's growing fifth pillar." },
      { property: "og:title", content: "Sports — Bagiage Foundation" },
      { property: "og:url", content: "/work/sports" },
    ],
    links: [{ rel: "canonical", href: "/work/sports" }],
  }),
  component: () => (
    <ProgramPage
      eyebrow="Program · Sports"
      title={<>Sport as a <span className="italic text-[color:var(--forest)]">vehicle for change.</span></>}
      intro="Our newest pillar. Sport builds confidence, health and community — and we're bringing equipment, coaching and playing spaces to children who've never had access."
      heroImage="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=2400&q=85&auto=format&fit=crop"
      challenge="For millions of children in underserved communities, sport is a luxury — with no equipment, no coaches and no safe places to play. Yet sport is one of the most powerful tools for youth development we have."
      solution="We equip community sports programs, refurbish playing fields, ship gear to schools and partner with local coaches — turning sport into infrastructure for confidence and health."
      initiatives={[
        { t: "Equipment Shipments", d: "Balls, gear and kits sent to schools and community centers across BBF partner regions." },
        { t: "Coaching Partnerships", d: "Working with local coaches and organizations to deliver structured youth programs." },
        { t: "Playing Spaces", d: "Refurbishing courts, pitches and fields as part of school and community infrastructure." },
        { t: "Health Linkages", d: "Connecting sports programs to our Healthcare initiatives — screenings, nutrition and preventive care." },
      ]}
      stats={[
        { n: 5, label: "New pillar programs launching" },
        { n: 4, label: "Partner regions in pilot" },
      ]}
      ctaLabel="Support Sports"
    />
  ),
});
