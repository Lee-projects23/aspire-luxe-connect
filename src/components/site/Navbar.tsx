import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Our Work" },
  { to: "/impact", label: "Impact" },
  { to: "/involved", label: "Get Involved" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-x mx-auto max-w-[1400px] flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-[11px] font-semibold tracking-widest">
            B
          </span>
          <span className="font-display text-[15px] tracking-tight font-medium">BAGIAGE</span>
          <span className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase hidden sm:inline">
            Foundation
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative px-3 py-2 text-[13.5px] text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/donate" className="hidden md:inline-flex btn-primary !py-2.5 !px-4 text-sm">
            Donate
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-border"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container-x py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-3 text-lg font-display border-b border-border/50 last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/donate" className="btn-primary mt-4 justify-center">
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
