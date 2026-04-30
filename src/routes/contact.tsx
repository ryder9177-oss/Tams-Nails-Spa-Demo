import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tam's Nail Spa" },
      { name: "description", content: "Visit Tam's Nail Spa at 1636 E Fry Blvd, Sierra Vista. Open Monday through Saturday, 9:30 AM to 7:00 PM." },
      { property: "og:title", content: "Contact — Tam's Nail Spa" },
      { property: "og:description", content: "1636 E Fry Blvd, Sierra Vista." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-20 lg:pt-28 pb-16 text-center fade-up">
        <p className="text-[11px] uppercase tracking-luxe text-taupe mb-6">
          <span className="gold-rule mr-4" />Visit the Atelier<span className="gold-rule ml-4" />
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">Contact</h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-12 pb-24 lg:pb-32 grid lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-gold mb-3">Address</p>
            <p className="font-serif text-2xl leading-snug">1636 E Fry Blvd<br/>Sierra Vista, AZ</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-gold mb-3">Hours</p>
            <ul className="text-base text-foreground space-y-2">
              <li className="flex justify-between border-b border-border pb-2"><span>Monday – Saturday</span><span className="text-taupe">9:30 – 7:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-taupe">Closed</span></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-gold mb-3">Reservations</p>
            <p className="text-sm text-taupe leading-relaxed">
              We work by appointment to honour every client's time. Please reserve online or call ahead.
            </p>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="img-zoom border border-border">
            <iframe
              title="Tam's Nail Spa location"
              src="https://www.google.com/maps?q=1636+E+Fry+Blvd,+Sierra+Vista,+AZ&output=embed"
              className="w-full h-[460px] lg:h-[560px] grayscale-[40%] contrast-[0.95]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
