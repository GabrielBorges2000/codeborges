import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import symbol from "@/assets/logo.png";
import { nav, whatsappLink } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-background/80 backdrop-blur-xl border-b" : ""}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="CODEBORGES — início">
          <img src={symbol} alt="" className="h-9 w-9 rounded-md" />
          <span className="h-5 w-px bg-border" />
          <span className="font-medium tracking-[0.18em] text-sm text-silver">CODEBORGES</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border bg-surface/70 p-1 backdrop-blur" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>

        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hidden lg:inline-flex rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
          Vamos conversar
        </a>

        <button className="lg:hidden rounded-md border p-2" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur-xl animate-fade-up">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b py-4 text-lg text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-6 rounded-full bg-primary py-3 text-center font-medium text-primary-foreground">
              Vamos conversar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
