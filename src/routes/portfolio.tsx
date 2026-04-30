import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import u1 from "@/assets/upload-1.png";
import u2 from "@/assets/upload-2.png";
import u3 from "@/assets/upload-3.png";
import u4 from "@/assets/upload-4.png";
import u5 from "@/assets/upload-5.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Tam's Nail Spa" },
      { name: "description", content: "Selected work from Tam's Nail Spa: nail art, French tips, chrome finishes and gem accents — real client work, refined and considered." },
      { property: "og:title", content: "Portfolio — Tam's Nail Spa" },
      { property: "og:description", content: "Real work, quietly considered." },
      { property: "og:image", content: u1 },
    ],
  }),
  component: PortfolioPage,
});

const works = [
  { src: u1, label: "Statement Mix", category: "Nail Art" },
  { src: u5, label: "Gem & Dot Detail", category: "Nail Art" },
  { src: u2, label: "Glitter French Tips", category: "Acrylic" },
  { src: u3, label: "Chrome Finish", category: "Gelish" },
  { src: u4, label: "Full Beauty Service", category: "The Atelier" },
];

function PortfolioPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(works.map((w) => w.category)))];
  const filtered = filter === "All" ? works : works.filter((w) => w.category === filter);

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-20 lg:pt-28 pb-12 text-center fade-up">
        <p className="text-[11px] uppercase tracking-luxe text-taupe mb-6">
          <span className="gold-rule mr-4" />Real Client Work<span className="gold-rule ml-4" />
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">Portfolio</h1>
        <p className="mt-8 text-lg text-taupe max-w-xl mx-auto leading-relaxed">
          A selection of finished work from the chair — every piece performed in studio, photographed in studio.
        </p>
      </section>

      {/* Category filter */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pb-12">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-y border-border py-5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-[11px] uppercase tracking-luxe transition-colors ${
                filter === c ? "text-foreground border-b border-gold pb-1" : "text-taupe hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24 lg:pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {filtered.map((w, i) => (
            <button
              key={`${w.label}-${i}`}
              onClick={() => setOpen(w.src)}
              className="group text-left fade-up"
            >
              <div className="img-zoom bg-beige aspect-[4/5] overflow-hidden">
                <img
                  src={w.src}
                  alt={`${w.label} — ${w.category}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-luxe text-gold mb-1">{w.category}</p>
                  <p className="font-serif text-base text-foreground">{w.label}</p>
                </div>
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
