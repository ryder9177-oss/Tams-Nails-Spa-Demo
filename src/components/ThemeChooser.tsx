import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "tns-theme";

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.body.classList.toggle("theme-light", theme === "light");
  document.body.classList.toggle("theme-dark", theme === "dark");
}

export function ThemeChooser() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Theme | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme("dark");
      setOpen(true);
    }
  }, []);

  const choose = (t: Theme) => {
    setTheme(t);
    applyTheme(t);
    localStorage.setItem(STORAGE_KEY, t);
    setOpen(false);
  };

  const toggle = () => choose(theme === "dark" ? "light" : "dark");

  return (
    <>
      <button
        onClick={toggle}
        aria-label="Toggle marble theme"
        className="fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full border border-border bg-background/70 backdrop-blur-md flex items-center justify-center text-foreground hover:text-gold hover:border-gold transition-all shadow-lg"
      >
        {theme === "dark" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 fade-in">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => choose("dark")}
          />
          <div className="relative w-full max-w-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl p-8 sm:p-12 fade-up">
            <div className="text-center">
              <span className="gold-rule" />
              <p className="mt-4 text-[11px] uppercase tracking-luxe text-taupe">Welcome to Tam's Nail Spa</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">Choose your atmosphere</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Set the mood for your visit. You can change this anytime from the toggle in the corner.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => choose("light")}
                className="group relative overflow-hidden border border-border hover:border-gold transition-all p-1"
              >
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url(/src/assets/marble-bg-light.jpg)" }}
                />
                <div className="py-4 text-center">
                  <div className="text-[11px] uppercase tracking-luxe text-taupe">Light</div>
                  <div className="font-serif text-lg text-foreground mt-1">White & Gold Marble</div>
                </div>
              </button>
              <button
                onClick={() => choose("dark")}
                className="group relative overflow-hidden border border-border hover:border-gold transition-all p-1"
              >
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url(/src/assets/marble-bg.jpg)" }}
                />
                <div className="py-4 text-center">
                  <div className="text-[11px] uppercase tracking-luxe text-taupe">Dark</div>
                  <div className="font-serif text-lg text-foreground mt-1">Black & Gold Marble</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}