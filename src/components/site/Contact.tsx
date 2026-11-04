import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowRight, Loader2, MessageCircle, CheckCircle2 } from "lucide-react";
import banner from "@/assets/banner.png";
import symbol from "@/assets/logo.png";
import { contact, nav, whatsappLink } from "@/content/site";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  mensagem: z.string().trim().min(10, "Conte um pouco mais (mín. 10 caracteres)").max(1500),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message])));
      return;
    }
    setErrors({});
    setState("loading");
    try {
      const text = `Olá! Sou ${r.data.nome} (${r.data.email}).\n\n${r.data.mensagem}`;
      const w = window.open(whatsappLink(text), "_blank", "noopener");
      setTimeout(() => setState(w === null ? "error" : "done"), 400);
    } catch {
      setState("error");
    }
  }

  const field = "w-full rounded-xl border bg-background/60 px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-silver";

  return (
    <section id="contato" className="relative overflow-hidden border-t py-28">
      <img src={banner} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-left opacity-25" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">// Contato</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Tem um projeto em mente? <span className="text-silver-gradient">Vamos construir juntos.</span>
          </h2>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="panel mt-10 inline-flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
            <span className="grid h-12 w-12 place-items-center rounded-xl border"><MessageCircle className="text-silver" /></span>
            <span>
              <span className="block text-sm text-muted-foreground">WhatsApp</span>
              <span className="text-lg">{contact.whatsappLabel}</span>
            </span>
          </a>
        </div>

        <form onSubmit={submit} noValidate className="panel space-y-5 rounded-3xl p-8 backdrop-blur-xl">
          {state === "done" ? (
            <div className="grid place-items-center py-16 text-center">
              <CheckCircle2 size={40} className="text-silver" />
              <p className="mt-4 text-xl">Mensagem pronta!</p>
              <p className="mt-1 text-muted-foreground">Finalize o envio no WhatsApp. Responderemos em breve.</p>
              <button type="button" onClick={() => setState("idle")} className="mt-6 text-sm text-silver underline-offset-4 hover:underline">Enviar outra</button>
            </div>
          ) : (
            <>
              {(["nome", "email"] as const).map((n) => (
                <div key={n}>
                  <label htmlFor={n} className="mb-2 block text-sm text-muted-foreground">{n === "nome" ? "Nome" : "E-mail"}</label>
                  <input id={n} name={n} type={n === "email" ? "email" : "text"} className={field} aria-invalid={!!errors[n]} />
                  {errors[n] && <p className="mt-1 text-sm text-destructive">{errors[n]}</p>}
                </div>
              ))}
              <div>
                <label htmlFor="mensagem" className="mb-2 block text-sm text-muted-foreground">Sobre o projeto</label>
                <textarea id="mensagem" name="mensagem" rows={5} className={field} aria-invalid={!!errors["mensagem"]} />
                {errors["mensagem"] && <p className="mt-1 text-sm text-destructive">{errors["mensagem"]}</p>}
              </div>
              {state === "error" && <p className="text-sm text-destructive">Não foi possível abrir o WhatsApp. Permita pop-ups ou use o botão ao lado.</p>}
              <button disabled={state === "loading"} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-medium text-primary-foreground shadow-glow transition-opacity disabled:opacity-60">
                {state === "loading" ? <Loader2 className="animate-spin" size={18} /> : <>Enviar mensagem <ArrowRight size={18} /></>}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={symbol} alt="" className="h-8 w-8 rounded-md" />
          <span className="text-sm tracking-[0.18em] text-silver">CODEBORGES</span>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-foreground">{n.label}</a>)}
        </nav>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} CODEBORGES</p>
      </div>
    </footer>
  );
}
