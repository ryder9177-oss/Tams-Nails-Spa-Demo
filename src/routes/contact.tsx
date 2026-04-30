import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";

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
            <p className="text-[11px] uppercase tracking-luxe text-gold mb-3 flex items-center gap-2"><MapPin size={12}/> Address</p>
            <a
              href="https://www.google.com/maps?q=1636+E+Fry+Blvd,+Sierra+Vista,+AZ+85635"
              target="_blank"
              rel="noreferrer"
              className="font-serif text-2xl leading-snug hover:text-gold transition-colors"
            >
              1636 E Fry Blvd<br/>Sierra Vista, AZ 85635
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-gold mb-3 flex items-center gap-2"><Phone size={12}/> Reach Us</p>
            <ul className="text-base text-foreground space-y-2">
              <li><a href="tel:+15204585975" className="hover:text-gold transition-colors">(520) 458-5975</a></li>
              <li><a href="mailto:vymai6981@yahoo.com" className="hover:text-gold transition-colors break-all">vymai6981@yahoo.com</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-gold mb-3 flex items-center gap-2"><Clock size={12}/> Hours</p>
            <ul className="text-base text-foreground space-y-2">
              <li className="flex justify-between border-b border-border pb-2"><span>Monday – Saturday</span><span className="text-taupe">9:30 – 7:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-taupe">Closed</span></li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="img-zoom border border-border">
            <iframe
              title="Tam's Nail Spa location"
              src="https://www.google.com/maps?q=1636+E+Fry+Blvd,+Sierra+Vista,+AZ+85635&output=embed"
              className="w-full h-[460px] lg:h-[560px] grayscale-[40%] contrast-[0.95]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-12 pb-24 lg:pb-32">
        <SubscribeForm />
      </section>
    </div>
  );
}
