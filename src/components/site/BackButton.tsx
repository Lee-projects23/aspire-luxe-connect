import { useRouter, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/") return null;
  return (
    <button
      onClick={() => {
        if (window.history.length > 1) router.history.back();
        else router.navigate({ to: "/" });
      }}
      className="fixed top-24 left-4 md:left-8 z-40 group inline-flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full glass shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] text-sm text-foreground/90 hover:scale-[1.03] active:scale-95 transition-transform"
      aria-label="Go back"
    >
      <span className="w-7 h-7 rounded-full bg-foreground text-background grid place-items-center group-hover:-translate-x-0.5 transition-transform">
        <ArrowLeft size={14} />
      </span>
      <span className="font-medium">Back</span>
    </button>
  );
}
