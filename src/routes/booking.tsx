import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Tam's Nail Spa" },
      { name: "description", content: "Reserve your appointment at Tam's Nail Spa in Sierra Vista. Choose a service, select a time, payment in person." },
      { property: "og:title", content: "Book Appointment — Tam's Nail Spa" },
      { property: "og:description", content: "Reserve your time. Pay in person." },
    ],
  }),
  component: BookingPage,
});

const categories = [
  "Nail Services",
  "Waxing",
];

function nextDays(n = 7) {
  const out: { iso: string; label: string; weekday: string }[] = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() === 0) continue; // closed Sunday
    out.push({
      iso: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
    });
  }
  return out;
}

const slots = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];

function BookingPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const days = nextDays(10);

  const Step = ({ n, label }: { n: number; label: string }) => (
    <div className="flex items-center gap-3">
      <span
        className={`w-7 h-7 inline-flex items-center justify-center border text-[11px] tracking-luxe transition-colors ${
          step === n
            ? "bg-foreground text-background border-foreground"
            : step > n
            ? "border-gold text-gold"
            : "border-border text-taupe"
        }`}
      >
        {String(n).padStart(2, "0")}
      </span>
      <span className={`text-[11px] uppercase tracking-luxe ${step === n ? "text-foreground" : "text-taupe"}`}>{label}</span>
    </div>
  );

  if (confirmed) {
    return (
      <div className="mx-auto max-w-2xl px-6 lg:px-12 py-32 text-center fade-up">
        <p className="text-[11px] uppercase tracking-luxe text-gold mb-6"><span className="gold-rule mr-4" />Confirmed<span className="gold-rule ml-4" /></p>
        <h1 className="font-serif text-5xl">Your time is reserved.</h1>
        <p className="mt-8 text-taupe leading-relaxed">
          Thank you, {name.split(" ")[0]}. We've noted your appointment for <span className="text-foreground">{service}</span> on <span className="text-foreground">{date}</span> at <span className="text-foreground">{time}</span>.
        </p>
        <p className="mt-4 text-sm text-taupe">A brief confirmation will be sent to {phone}. Payment is completed in person.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14 fade-up">
        <p className="text-[11px] uppercase tracking-luxe text-taupe mb-4"><span className="gold-rule mr-4" />Reserve Your Time</p>
        <h1 className="font-serif text-5xl md:text-6xl">Booking</h1>
        <p className="mt-6 text-sm text-taupe max-w-md mx-auto">
          Reserve your time online. Payment is completed in person at the atelier.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 mb-12 px-2">
        <Step n={1} label="Service" />
        <span className="flex-1 h-px bg-border" />
        <Step n={2} label="Time" />
        <span className="flex-1 h-px bg-border" />
        <Step n={3} label="Details" />
      </div>

      <div className="bg-card border border-border p-8 lg:p-12 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.2)]">
        {step === 1 && (
          <div className="space-y-4 fade-up">
            <h2 className="font-serif text-2xl mb-6">Select a category</h2>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setService(c)}
                className={`w-full text-left flex items-center justify-between px-6 py-5 border transition-all duration-300 ${
                  service === c ? "border-gold bg-cream" : "border-border hover:border-foreground"
                }`}
              >
                <span className="font-serif text-lg">{c}</span>
                <span className={`text-[11px] uppercase tracking-luxe ${service === c ? "text-gold" : "text-taupe"}`}>
                  {service === c ? "Selected" : "Choose"}
                </span>
              </button>
            ))}
            <div className="pt-4 flex justify-end">
              <button
                disabled={!service}
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
              >
                Continue <span>→</span>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="fade-up">
            <h2 className="font-serif text-2xl mb-6">Choose a time</h2>
            <p className="text-[11px] uppercase tracking-luxe text-taupe mb-3">Date</p>
            <div className="flex gap-3 overflow-x-auto pb-2 mb-8">
              {days.map((d) => (
                <button
                  key={d.iso}
                  onClick={() => setDate(d.label)}
                  className={`shrink-0 w-20 py-4 text-center border transition-all duration-300 ${
                    date === d.label ? "border-gold bg-cream" : "border-border hover:border-foreground"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-luxe text-taupe">{d.weekday}</div>
                  <div className="font-serif text-lg mt-1">{d.label}</div>
                </button>
              ))}
            </div>
            <p className="text-[11px] uppercase tracking-luxe text-taupe mb-3">Time</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {slots.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`py-3 text-sm border transition-all duration-300 ${
                    time === t ? "border-gold bg-cream text-foreground" : "border-border text-taupe hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="pt-8 flex justify-between">
              <button onClick={() => setStep(1)} className="text-[11px] uppercase tracking-luxe text-taupe hover:text-foreground">← Back</button>
              <button
                disabled={!date || !time}
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
              >
                Continue <span>→</span>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form
            onSubmit={(e) => { e.preventDefault(); setConfirmed(true); }}
            className="fade-up space-y-6"
          >
            <h2 className="font-serif text-2xl mb-2">Your details</h2>
            <div className="text-sm text-taupe pb-4 border-b border-border">
              <span className="text-foreground">{service}</span> · {date} · {time}
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-luxe text-taupe block mb-2">Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-luxe text-taupe block mb-2">Phone</label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors"
                placeholder="(520) 000-0000"
              />
            </div>
            <p className="text-xs text-taupe pt-4 leading-relaxed">
              Payment is completed in person at the salon. Please allow up to 5 minutes for arrival; we hold your time with care.
            </p>
            <div className="pt-4 flex justify-between">
              <button type="button" onClick={() => setStep(2)} className="text-[11px] uppercase tracking-luxe text-taupe hover:text-foreground">← Back</button>
              <button
                type="submit"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe px-8 py-4 bg-foreground text-background border border-foreground hover:bg-transparent hover:text-foreground transition-all duration-500"
              >
                Confirm Reservation <span>→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
