import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80, "Name too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone too long")
    .regex(/^[+()\-\s\d]+$/, "Phone can only contain digits and ()+-"),
  note: z.string().trim().max(500, "Note must be under 500 characters").optional().or(z.literal("")),
});

export function SubscribeForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, phone, note });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please check your details.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-cream p-10 text-center fade-up">
        <span className="gold-rule" />
        <h3 className="font-serif text-3xl mt-4">Thank you, {name.split(" ")[0]}.</h3>
        <p className="mt-3 text-sm text-taupe max-w-md mx-auto leading-relaxed">
          You're on the list. We'll reach out with seasonal offers and openings reserved for our subscribers.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border bg-cream p-8 sm:p-12 fade-up">
      <div className="text-center mb-8">
        <span className="gold-rule" />
        <p className="mt-3 text-[11px] uppercase tracking-luxe text-taupe">Stay in touch</p>
        <h3 className="font-serif text-3xl sm:text-4xl mt-2">Subscribe</h3>
        <p className="mt-3 text-sm text-taupe max-w-md mx-auto leading-relaxed">
          Receive quiet updates on new services, seasonal offers, and priority booking openings.
        </p>
      </div>
      <form onSubmit={submit} className="space-y-5">
        <div>
          <label className="text-[11px] uppercase tracking-luxe text-foreground/70" htmlFor="sub-name">Name</label>
          <input
            id="sub-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={80}
            required
            className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground placeholder:text-taupe/60 transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="text-[11px] uppercase tracking-luxe text-foreground/70" htmlFor="sub-phone">Number</label>
          <input
            id="sub-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={20}
            required
            className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground placeholder:text-taupe/60 transition-colors"
            placeholder="(520) 000-0000"
          />
        </div>
        <div>
          <label className="text-[11px] uppercase tracking-luxe text-foreground/70" htmlFor="sub-note">Note</label>
          <textarea
            id="sub-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={500}
            rows={3}
            className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground placeholder:text-taupe/60 transition-colors resize-none"
            placeholder="Anything you'd like us to know (optional)"
          />
        </div>
        {error && <p className="text-xs text-destructive">{error}</p>}
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center text-[11px] uppercase tracking-luxe px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}