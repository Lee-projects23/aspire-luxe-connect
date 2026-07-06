import { Link, useRouterState } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export function FloatingDonate() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/donate") return null;
  return (
    <Link
      to="/donate"
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-foreground text-background shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:scale-[1.05] active:scale-95 transition-transform"
    >
      <Heart size={16} className="fill-[color:var(--gold)] text-[color:var(--gold)] group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium">Donate</span>
    </Link>
  );
}
