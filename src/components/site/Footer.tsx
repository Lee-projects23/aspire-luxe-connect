import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Linkedin, ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white/80 mt-32">
      <div className="container-x mx-auto max-w-[1400px] py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow !text-white/50">Bagiage Foundation</p>
            <h2 className="section-heading !text-white mt-4 text-balance">
              Bridging the gap between aid and sustainability.
            </h2>
            <p className="mt-6 max-w-md text-white/60">
              A world where every person — regardless of race, religion, gender, or geography —
              has the opportunity to live a healthy, dignified, and productive life.
            </p>
            <form className="mt-8 flex items-center gap-2 max-w-md">
              <div className="flex-1 flex items-center gap-2 border border-white/15 rounded-full pl-5 pr-1 py-1">
                <Mail size={16} className="text-white/50" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent py-3 outline-none text-sm placeholder:text-white/40"
                />
                <button className="rounded-full bg-white text-black text-sm px-4 py-2.5 font-medium hover:bg-[color:var(--gold)] transition">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-10">
            <FooterCol
              title="Explore"
              links={[
                { label: "About", to: "/about" },
                { label: "Our Work", to: "/work" },
                { label: "Impact", to: "/impact" },
                { label: "News & Blog", to: "/news" },
              ]}
            />
            <FooterCol
              title="Programs"
              links={[
                { label: "Healthcare", to: "/work/healthcare" },
                { label: "Infrastructure", to: "/work/infrastructure" },
                { label: "Disaster Response", to: "/work/disaster-response" },
                { label: "Education", to: "/work/education" },
                { label: "Sports", to: "/work/sports" },
              ]}
            />
            <FooterCol
              title="Get Involved"
              links={[
                { label: "Donate", to: "/donate" },
                { label: "Volunteer", to: "/involved" },
                { label: "Partner", to: "/involved" },
                { label: "Sponsor", to: "/involved" },
              ]}
            />
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-white/40 font-medium">
                Contact
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li>1202, 71st Block VOC Nagar</li>
                <li>Tondiarpet, Chennai</li>
                <li>Tamil Nadu — 600081</li>
                <li className="pt-2">
                  <a href="tel:+916380183259" className="hover:text-white">+91 6380 183 259</a>
                </li>
                <li>
                  <a href="mailto:bagiagebharath@gmail.com" className="hover:text-white break-all">
                    bagiagebharath@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Bagiage Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white hover:text-black transition"
                aria-label="Social"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <Link to="/donate" className="text-white text-sm inline-flex items-center gap-1 group">
            Make a donation
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <p className="text-xs tracking-[0.22em] uppercase text-white/40 font-medium">{title}</p>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/70 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
