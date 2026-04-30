import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import atelier from "@/assets/atelier.jpg";
import p1 from "@/assets/upload-1.png";
import p2 from "@/assets/upload-3.png";
import p3 from "@/assets/upload-5.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tam's Nail Spa — Elevated Nail Atelier in Sierra Vista" },
      { name: "description", content: "A private nail spa offering precision nail services and professional waxing in a calm, refined Sierra Vista space." },
      { property: "og:title", content: "Tam's Nail Spa — Elevated Nail Atelier" },
      { property: "og:description", content: "Precision nail care in a calm, refined space." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 lg:pt-24 pb-20 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-up">
            <p className="text-[11px] uppercase tracking-luxe text-taupe mb-8">
              <span className="gold-rule mr-4" />
              The Nail Atelier · Est. Sierra Vista
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Elevated artistry<br/>for the modern<br/><em className="not-italic text-gold">individual.</em>
            </h1>
            <p className="mt-8 text-lg text-taupe leading-relaxed max-w-md">
              Precision nail care in a calm, refined space. Quietly considered, never rushed.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/booking"
                className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe px-8 py-4 border border-gold text-foreground hover:bg-gold hover:text-white transition-all duration-500"
                style={{ borderColor: "var(--gold)" }}
              >
                Book Appointment
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/services" className="text-[11px] uppercase tracking-luxe text-foreground border-b border-foreground/30 pb-1 hover:border-gold transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="fade-in delay-200 img-zoom relative">
            <div className="absolute -inset-4 bg-beige -z-10 translate-x-6 translate-y-6" />
            <img src={hero} alt="Hand with refined nude almond manicure resting on cream linen" width={1600} height={1200} className="w-full h-[460px] lg:h-[620px] object-cover" />
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="bg-cream border-y border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 py-20 text-center">
          <p className="text-[11px] uppercase tracking-luxe text-taupe mb-6"><span className="gold-rule mr-4" />Our Philosophy</p>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground">
            “When you leave, you should feel put together, elevated, and quietly confident.”
          </p>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-taupe mb-4"><span className="gold-rule mr-4" />Curated Offerings</p>
            <h2 className="font-serif text-4xl md:text-5xl">A specialised hand.</h2>
          </div>
          <Link to="/services" className="text-[11px] uppercase tracking-luxe border-b border-foreground/30 pb-1 hover:border-gold transition-colors self-start lg:self-end">
            View all services
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { name: "Nail Services", tag: "Precision & Polish", note: "Manicures, dipping powder, gel and acrylic artistry — long-wearing and refined." },
            { name: "Waxing", tag: "Refined Smoothness", note: "Clean, precise, and comfortable results, performed with complete discretion." },
            { name: "By Appointment", tag: "Quietly Considered", note: "Reservation-only seating so every client is honoured with full attention." },
          ].map((s) => (
            <div key={s.name} className="bg-background p-10 lg:p-12 hover-lift">
              <p className="text-[11px] uppercase tracking-luxe text-gold mb-6">{s.tag}</p>
              <h3 className="font-serif text-2xl mb-4">{s.name}</h3>
              <p className="text-sm text-taupe leading-relaxed">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Atelier image split */}
      <section className="bg-beige">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="img-zoom order-2 lg:order-1">
            <img src={atelier} alt="Calm interior of the Maison Onyx atelier" width={1400} height={1000} loading="lazy" className="w-full h-[420px] lg:h-[560px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[11px] uppercase tracking-luxe text-taupe mb-6"><span className="gold-rule mr-4" />The Atelier</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">A private space, designed to slow you down.</h2>
            <p className="mt-8 text-base text-taupe leading-relaxed">
              We've thought carefully about every surface, every tool, every moment. The result is an environment where the work is precise — and the experience, restorative.
            </p>
            <ul className="mt-10 space-y-4 text-sm">
              {["Hospital-grade sanitation", "Single-use precision tooling", "Refined, low-fragrance products", "Reservation-only seating"].map((i) => (
                <li key={i} className="flex items-center gap-4 text-foreground">
                  <span className="gold-rule" />{i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-luxe text-taupe mb-4"><span className="gold-rule mr-4" />Selected Work<span className="gold-rule ml-4" /></p>
          <h2 className="font-serif text-4xl md:text-5xl">Results that speak quietly.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {[p1, p2, p3].map((src, i) => (
            <div key={i} className="img-zoom">
              <img src={src} alt={`Portfolio piece ${i + 1}`} width={900} height={1100} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/portfolio" className="text-[11px] uppercase tracking-luxe border-b border-foreground/30 pb-1 hover:border-gold transition-colors">
            View full portfolio
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 py-24 text-center">
          <p className="text-[11px] uppercase tracking-luxe text-gold mb-6">Reserve Your Time</p>
          <h2 className="font-serif text-4xl md:text-5xl text-background">Booking, made effortless.</h2>
          <p className="mt-6 text-base text-background/70 max-w-xl mx-auto">
            Choose a service, choose a time. Payment is completed in person at the atelier.
          </p>
          <Link
            to="/booking"
            className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe px-8 py-4 border border-gold text-background hover:bg-gold transition-all duration-500"
          >
            Begin Booking <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
