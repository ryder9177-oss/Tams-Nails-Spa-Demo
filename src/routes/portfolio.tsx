import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Tam's Nail Spa" },
      { name: "description", content: "Selected work from Tam's Nail Spa: chrome finishes, micro-French, almond and coffin shapes — a quiet study in precision." },
      { property: "og:title", content: "Portfolio — Tam's Nail Spa" },
      { property: "og:description", content: "A quiet study in precision." },
      { property: "og:image", content: p1 },
    ],
  }),
  component: PortfolioPage,
});

const works = [
  { src: p1, label: "Chrome Almond" },
  { src: p2, label: "Micro French" },
  { src: p3, label: "Glossed Nude" },
  { src: p4, label: "Milky Pink" },
  { src: p5, label: "Gold Tip" },
  { src: p6, label: "Soft Accent" },
];

function PortfolioPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-20 lg:pt-28 pb-16 text-center fade-up">
        <p className="text-[11px] uppercase tracking-luxe text-taupe mb-6">
          <span className="gold-rule mr-4" />Selected Work<span className="gold-rule ml-4" />
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">Portfolio</h1>
        <p className="mt-8 text-lg text-taupe max-w-xl mx-auto leading-relaxed">
          A quiet study in precision — chrome finishes, micro-French, almond & coffin silhouettes.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24 lg:pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {works.map((w, i) => (
            <button
              key={i}
              onClick={() => setOpen(w.src)}
              className="img-zoom group text-left"
            >
              <img
                src={w.src}
                alt={w.label}
                width={900}
                height={1100}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-luxe text-foreground">{w.label}</span>
                <span className="text-[11px] tracking-luxe text-taupe">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] bg-foreground/85 backdrop-blur-sm flex items-center justify-center p-6 fade-in"
        >
          <img src={open} alt="Selected work" className="max-h-[88vh] max-w-[88vw] object-contain shadow-[0_40px_120px_rgba(0,0,0,0.4)]" />
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 text-background text-[11px] uppercase tracking-luxe border-b border-background/40 hover:border-gold"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
