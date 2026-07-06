import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Copy, Heart, QrCode, Sparkles } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Bagiage Foundation" },
      { name: "description", content: "Every donation changes a life. 98.29% of every dollar goes directly to programs." },
      { property: "og:title", content: "Donate — Bagiage Foundation" },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: Donate,
});

const AMOUNTS = [500, 1000, 2500, 5000, 10000];
const UPI = "bagiage@upi";

function Donate() {
  const [amount, setAmount] = useState<number | "custom">(2500);
  const [custom, setCustom] = useState("");
  const [copied, setCopied] = useState(false);
  const [done, setDone] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(UPI);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const final = amount === "custom" ? Number(custom) || 0 : amount;

  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 container-x mx-auto max-w-[1400px]">
        <p className="eyebrow">Donate</p>
        <Reveal><h1 className="hero-heading mt-6 max-w-5xl text-balance">Every donation changes a life.</h1></Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground text-pretty">
            98.29% of every dollar goes directly to programs. Choose an amount below, or scan the QR
            to give via UPI in seconds.
          </p>
        </Reveal>
      </section>

      <section className="container-x mx-auto max-w-[1400px] pb-24 grid lg:grid-cols-12 gap-8">
        {/* AMOUNTS */}
        <Reveal className="lg:col-span-7 p-8 md:p-12 rounded-3xl border border-border bg-surface">
          <p className="eyebrow">Choose amount (INR)</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {AMOUNTS.map((a) => (
              <button
                key={a}
                onClick={() => setAmount(a)}
                className={`p-6 rounded-2xl border text-left transition-all ${amount === a ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"}`}
              >
                <div className="text-xs tracking-widest opacity-70">GIFT</div>
                <div className="font-display text-3xl mt-2">₹{a.toLocaleString()}</div>
              </button>
            ))}
            <button
              onClick={() => setAmount("custom")}
              className={`p-6 rounded-2xl border text-left transition-all ${amount === "custom" ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"}`}
            >
              <div className="text-xs tracking-widest opacity-70">CUSTOM</div>
              <input
                value={custom}
                onChange={(e) => { setCustom(e.target.value.replace(/\D/g,"")); setAmount("custom"); }}
                placeholder="Amount"
                className="mt-2 bg-transparent outline-none font-display text-3xl w-full"
              />
            </button>
          </div>

          <p className="eyebrow mt-10">Payment method</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["UPI","Credit Card","Debit Card","Net Banking","Wallets","Google Pay","PhonePe"].map(m => (
              <span key={m} className="px-4 py-2 rounded-full border border-border text-sm">{m}</span>
            ))}
          </div>

          <button
            onClick={() => setDone(true)}
            disabled={!final}
            className="btn-primary mt-10 w-full justify-center disabled:opacity-40"
          >
            <Heart size={16} className="fill-[color:var(--gold)] text-[color:var(--gold)]" />
            Donate {final ? `₹${final.toLocaleString()}` : ""}
          </button>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            Secure checkout · You'll receive a tax receipt by email.
          </p>
        </Reveal>

        {/* QR */}
        <Reveal delay={0.1} className="lg:col-span-5 p-8 md:p-12 rounded-3xl bg-[color:var(--forest)] text-white">
          <p className="eyebrow !text-white/60">Scan to donate</p>
          <div className="mt-6 aspect-square max-w-[280px] mx-auto rounded-2xl bg-white text-black grid place-items-center relative overflow-hidden">
            <div className="grid grid-cols-8 grid-rows-8 gap-[3px] p-4 w-full h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className={`${(i * 7 + (i % 5)) % 3 === 0 ? "bg-black" : "bg-transparent"} rounded-[2px]`} />
              ))}
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-14 h-14 rounded-2xl bg-white grid place-items-center border-4 border-black">
                <QrCode size={22} />
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2 p-3 rounded-full border border-white/20">
            <span className="pl-3 text-sm text-white/70">UPI ID</span>
            <span className="flex-1 text-sm">{UPI}</span>
            <button onClick={copy} className="rounded-full bg-white text-black text-sm px-3 py-2 inline-flex items-center gap-1.5 hover:bg-[color:var(--gold)] transition">
              {copied ? <><Check size={14}/>Copied</> : <><Copy size={14}/>Copy</>}
            </button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Scan with any UPI-enabled app — Google Pay, PhonePe, Paytm, BHIM.
          </p>
        </Reveal>
      </section>

      {/* Donation history placeholder */}
      <section className="container-x mx-auto max-w-[1400px] pb-32">
        <p className="eyebrow">Your recent donations</p>
        <div className="mt-6 rounded-3xl border border-border overflow-hidden">
          {[
            { d: "01 Jun 2026", a: 2500, f: "Give from the Heart" },
            { d: "01 May 2026", a: 2500, f: "Monthly Giving" },
            { d: "12 Feb 2026", a: 10000, f: "Disaster Response" },
          ].map((r, i) => (
            <div key={i} className="grid grid-cols-3 items-center px-6 py-5 border-t border-border first:border-0 text-sm">
              <span className="text-muted-foreground">{r.d}</span>
              <span>{r.f}</span>
              <span className="text-right font-display text-xl">₹{r.a.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS OVERLAY */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-xl grid place-items-center p-4"
            onClick={() => setDone(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
              className="bg-background rounded-3xl p-10 md:p-14 max-w-lg text-center relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Sparkles className="mx-auto text-[color:var(--gold)]" size={32} />
              <h3 className="page-heading mt-6">Thank you.</h3>
              <p className="mt-4 text-muted-foreground">
                Your gift of <strong>₹{final.toLocaleString()}</strong> has been received.
                A receipt has been sent to your email.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">Receipt #BBF-{Math.floor(Math.random()*99999).toString().padStart(5,"0")}</p>
              <button onClick={() => setDone(false)} className="btn-primary mt-8">Close</button>
              {/* Confetti */}
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
                  animate={{ y: 400, x: (Math.random() - 0.5) * 400, rotate: Math.random() * 720, opacity: 0 }}
                  transition={{ duration: 2 + Math.random(), ease: "easeOut" }}
                  className="absolute top-4 left-1/2 w-2 h-3 pointer-events-none"
                  style={{ background: i % 3 === 0 ? "var(--gold)" : i % 3 === 1 ? "var(--forest)" : "#fff" }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
