import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tam's Nail Spa" },
      { name: "description", content: "Curated nail services and professional waxing in Sierra Vista." },
      { property: "og:title", content: "Services — Tam's Nail Spa" },
      { property: "og:description", content: "A specialised hand for every detail." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    tag: "Precision & Polish",
    name: "Nail Services",
    note: "From classic manicures to dipping powder and gel artistry — long-wearing, refined, and quietly considered.",
    items: [
      ["Classic Manicure", "$25"],
      ["Gel Manicure", "$40"],
      ["Classic Dip", "$45"],
      ["Full Set Acrylic", "$55"],
      ["Acrylic Fill", "$40"],
      ["Ombré Dip", "$60"],
      ["Custom Art (per nail)", "+$5"],
      ["Removal & Refresh", "$15"],
    ],
  },
  {
    tag: "Refined Smoothness",
    name: "Professional Waxing",
    note: "Clean, precise, and comfortable results. Performed with care and complete discretion.",
    items: [
      ["Brow Shaping", "$15"],
      ["Lip or Chin", "$10"],
      ["Full Face", "$40"],
      ["Underarm", "$20"],
    ],
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-20 lg:pt-28 pb-16 text-center fade-up">
        <p className="text-[11px] uppercase tracking-luxe text-taupe mb-6">
          <span className="gold-rule mr-4" />Curated Offerings<span className="gold-rule ml-4" />
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">Services</h1>
        <p className="mt-8 text-lg text-taupe max-w-xl mx-auto leading-relaxed">
          Every offering is approached with the same intent: structure, precision, and a quietly luxurious finish.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-12 pb-24 lg:pb-32 space-y-16">
        {services.map((s, idx) => (
          <article
            key={s.name}
            className="grid lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-border last:border-0"
          >
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-luxe text-gold mb-4">
                {String(idx + 1).padStart(2, "0")} · {s.tag}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-5">{s.name}</h2>
              <p className="text-sm text-taupe leading-relaxed max-w-sm">{s.note}</p>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-border">
                {s.items.map(([n, p]) => (
                  <li key={n} className="flex items-baseline justify-between py-4">
                    <span className="font-serif text-lg text-foreground">{n}</span>
                    <span className="flex-1 mx-4 border-b border-dotted border-border/80" />
                    <span className="text-sm text-taupe tracking-wider">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-beige">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Ready to be quietly elevated?</h2>
          <Link
            to="/booking"
            className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Book Appointment <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
