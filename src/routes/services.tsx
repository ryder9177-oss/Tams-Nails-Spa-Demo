import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Tam's Nail Spa" },
      { name: "description", content: "Full price list for Tam's Nail Spa: manicures, pedicures, gelish, acrylic, dipping powder and waxing in Sierra Vista." },
      { property: "og:title", content: "Services & Pricing — Tam's Nail Spa" },
      { property: "og:description", content: "A specialised hand for every detail." },
    ],
  }),
  component: ServicesPage,
});

type Item = { name: string; price: string; note?: string };
type Section = { tag: string; name: string; note: string; groups?: { label?: string; items: Item[] }[]; items?: Item[] };

const sections: Section[] = [
  {
    tag: "Precision & Polish",
    name: "Manicure & Pedicure",
    note: "Considered care for hands and feet — restorative, refined, never rushed.",
    groups: [
      {
        items: [
          { name: "Spa Pedicure", price: "$35" },
          { name: "Regular Manicure", price: "$20" },
          { name: "Regular French Manicure", price: "$25" },
          { name: "Knee Up", price: "$60" },
          { name: "Callus Remover", price: "$5+" },
          { name: "Reshape", price: "$15+" },
        ],
      },
      {
        label: "Polish Change",
        items: [
          { name: "Hands · Regular Polish", price: "$15" },
          { name: "Toes · Regular Polish", price: "$15" },
          { name: "Regular French Polish", price: "$10" },
          { name: "Hand French · Regular Polish", price: "$15" },
          { name: "Feet French · Regular Polish", price: "$20" },
          { name: "Hands or Feet · Gel Polish", price: "$20" },
          { name: "Hands or Feet · French Gel Polish", price: "$25" },
        ],
      },
    ],
  },
  {
    tag: "Long-Wear Finish",
    name: "Gelish",
    note: "Mirror-glossed, durable colour designed to wear quietly and beautifully.",
    groups: [
      {
        label: "With Pedicure or Manicure Service",
        items: [
          { name: "Color Gelish", price: "$15" },
          { name: "French Gelish", price: "$20" },
        ],
      },
      {
        label: "Without Pedicure or Manicure Service",
        items: [
          { name: "Color Gelish", price: "$20" },
          { name: "French Gelish", price: "$25" },
          { name: "Gel Polish Take Off", price: "$5" },
        ],
      },
      {
        label: "Gel Manicure",
        items: [
          { name: "Gel Color Manicure", price: "$35" },
          { name: "Gel French Manicure", price: "$40" },
        ],
      },
    ],
  },
  {
    tag: "Structured Elegance",
    name: "Acrylic Nails",
    note: "Sculpted shape and lasting precision — built to last with a refined finish.",
    groups: [
      {
        label: "Hands",
        items: [
          { name: "Clear Gel Full Set", price: "$40+" },
          { name: "Color Powder Full Set", price: "$50" },
          { name: "Two-Tone Color Powder Full Set", price: "$60" },
          { name: "Pink & White", price: "$55" },
          { name: "French Gel or Gel Color Tips Full Set", price: "$60+" },
          { name: "Fill · Color Solar", price: "$35" },
          { name: "Fill · Clear Solar", price: "$30+" },
          { name: "Back Fill", price: "$50+" },
        ],
      },
      {
        label: "Toes",
        items: [
          { name: "Toes Full Set", price: "$45+" },
          { name: "Toes Pink Fill", price: "$35" },
          { name: "Toes Back Fill", price: "$50" },
        ],
      },
      {
        label: "Repairs & Removal",
        items: [
          { name: "Take Off Gelish", price: "$10" },
          { name: "Take Off Solar Nails", price: "$15" },
          { name: "Take Off & Put Back Full Set", price: "$5" },
          { name: "Cut Down", price: "$10" },
          { name: "Nail Repair", price: "$5+" },
          { name: "Nail Design", price: "$8+" },
        ],
      },
      {
        label: "Add-Ons",
        items: [
          { name: "Hands · Long Nails", price: "$5+", note: "Extra charge" },
          { name: "Feet · Long Nails", price: "$10", note: "Extra charge" },
          { name: "Collagen Treatment", price: "Inquire", note: "Hot towel wrap & massage" },
        ],
      },
    ],
  },
  {
    tag: "Flawless & Lightweight",
    name: "Dipping Powder",
    note: "A flawless, breathable finish — durable colour without compromise.",
    items: [
      { name: "Color Dip", price: "$40+" },
      { name: "Dip with Tips", price: "$50" },
      { name: "Dip Manicure", price: "$50" },
      { name: "French / Ombré Dip", price: "$50+" },
    ],
  },
  {
    tag: "Refined Smoothness",
    name: "Waxing",
    note: "Clean, precise and comfortable — performed with complete discretion.",
    groups: [
      {
        label: "Face",
        items: [
          { name: "Eyebrow", price: "$10" },
          { name: "Lip", price: "$8" },
          { name: "Chin", price: "$10+" },
          { name: "Lip + Chin + Eyebrows", price: "$28" },
          { name: "Full Face", price: "$45" },
        ],
      },
      {
        label: "Body",
        items: [
          { name: "Under Arms", price: "$25+" },
          { name: "Half Arms", price: "$35+" },
          { name: "Full Arms", price: "$55" },
          { name: "Bikini", price: "$35+" },
          { name: "Brazilian", price: "$65+", note: "Please call ahead to book" },
          { name: "Knee Down", price: "$70+" },
          { name: "Full Legs", price: "$150+" },
        ],
      },
    ],
  },
];

function PriceList({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((it) => (
        <li key={it.name} className="flex items-baseline gap-4 py-4">
          <div className="flex-1 min-w-0">
            <div className="font-serif text-lg text-foreground">{it.name}</div>
            {it.note && <div className="text-xs text-taupe mt-0.5 italic">{it.note}</div>}
          </div>
          <span className="hidden sm:block flex-1 border-b border-dotted border-border/70 -translate-y-1" />
          <span className="text-sm text-taupe tracking-wider whitespace-nowrap">{it.price}</span>
        </li>
      ))}
    </ul>
  );
}

function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-20 lg:pt-28 pb-16 text-center fade-up">
        <p className="text-[11px] uppercase tracking-luxe text-taupe mb-6">
          <span className="gold-rule mr-4" />Services & Pricing<span className="gold-rule ml-4" />
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">The Menu</h1>
        <p className="mt-8 text-lg text-taupe max-w-xl mx-auto leading-relaxed">
          Every offering is approached with the same intent: structure, precision, and a quietly luxurious finish.
        </p>
      </section>

      {/* In-page navigation */}
      <nav className="border-y border-border bg-cream sticky top-20 z-40 backdrop-blur-md bg-cream/85">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 py-4 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {sections.map((s, i) => (
            <a
              key={s.name}
              href={`#${s.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className="text-[11px] uppercase tracking-luxe text-taupe hover:text-foreground transition-colors"
            >
              <span className="text-gold mr-2">{String(i + 1).padStart(2, "0")}</span>
              {s.name}
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 lg:px-12 py-20 lg:py-28 space-y-24 lg:space-y-32">
        {sections.map((s, idx) => (
          <article
            key={s.name}
            id={s.name.toLowerCase().replace(/[^a-z]+/g, "-")}
            className="grid lg:grid-cols-12 gap-10 lg:gap-16 scroll-mt-40"
          >
            <div className="lg:col-span-4 lg:sticky lg:top-44 lg:self-start">
              <p className="text-[11px] uppercase tracking-luxe text-gold mb-4">
                {String(idx + 1).padStart(2, "0")} · {s.tag}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-5">{s.name}</h2>
              <p className="text-sm text-taupe leading-relaxed max-w-sm">{s.note}</p>
              <span className="gold-rule mt-6 block" />
            </div>
            <div className="lg:col-span-8 space-y-10">
              {s.items && <PriceList items={s.items} />}
              {s.groups?.map((g, gi) => (
                <div key={gi}>
                  {g.label && (
                    <h3 className="text-[11px] uppercase tracking-luxe text-taupe mb-3 pb-3 border-b border-border">
                      {g.label}
                    </h3>
                  )}
                  <PriceList items={g.items} />
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 py-20 text-center">
          <p className="text-[11px] uppercase tracking-luxe text-gold mb-4">Reserve Your Time</p>
          <h2 className="font-serif text-3xl md:text-4xl text-background">Ready to be quietly elevated?</h2>
          <p className="mt-4 text-sm text-background/60">Prices may vary based on length, design and condition. Payment is completed in person.</p>
          <Link
            to="/booking"
            className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe px-8 py-4 border border-gold text-background hover:bg-gold transition-all duration-500"
          >
            Book Appointment <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
