import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tam's Nail Spa — Elevated Nail Atelier" },
      { name: "description", content: "A private nail spa in Sierra Vista offering precision nail services and professional waxing in a calm, refined space." },
      { name: "author", content: "Tam's Nail Spa" },
      { property: "og:title", content: "Tam's Nail Spa — Elevated Nail Atelier" },
      { property: "og:description", content: "Precision nail care in a calm, refined space." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const linkBase = "text-[11px] uppercase tracking-luxe text-foreground/80 hover:text-foreground transition-colors duration-300";
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-tight text-foreground">
          Tam's <span className="text-gold">Nail Spa</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className={linkBase} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>Home</Link>
          <Link to="/services" className={linkBase} activeProps={{ className: "text-foreground" }}>Services</Link>
          <Link to="/portfolio" className={linkBase} activeProps={{ className: "text-foreground" }}>Portfolio</Link>
          <Link to="/contact" className={linkBase} activeProps={{ className: "text-foreground" }}>Contact</Link>
        </nav>
        <Link
          to="/booking"
          className="hidden sm:inline-flex items-center text-[11px] uppercase tracking-luxe px-5 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl">Tam's <span className="text-gold">Nail Spa</span></div>
          <p className="mt-4 text-sm text-taupe max-w-sm leading-relaxed">
            A private atelier for nails — where precision meets calm, and beauty is crafted, not rushed.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-luxe text-foreground mb-4">Visit</h4>
          <p className="text-sm text-taupe leading-relaxed">1636 E Fry Blvd<br/>Sierra Vista, AZ</p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-luxe text-foreground mb-4">Hours</h4>
          <p className="text-sm text-taupe leading-relaxed">Mon – Sat · 9:30 – 7:00<br/>Sunday · Closed</p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 text-[11px] uppercase tracking-luxe text-taupe flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Tam's Nail Spa</span>
          <span>Crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}
