import { ArrowRight, ArrowUpRight, Check, FolderGit2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import symbol from "@/assets/symbol.png.asset.json";
import { faq, principles, products, projects, services, steps, techs } from "@/content/site";

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">// {children}</p>;
}

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow>Sobre a CODEBORGES</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Tecnologia que resolve <span className="text-silver-gradient">problemas reais.</span>
          </h2>
        </div>
        <div>
          <p className="text-lg text-muted-foreground">
            Acreditamos que a tecnologia deve resolver problemas reais. Desenvolvemos soluções personalizadas para empresas e construímos produtos próprios que transformam desafios em oportunidades.
          </p>
          <ul className="mt-10 divide-y border-y">
            {principles.map((p, i) => (
              <li key={p} className="flex items-center justify-between py-4">
                <span className="text-lg">{p}</span>
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicos" className="relative border-y bg-surface/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow>Serviços</Eyebrow>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Do conceito à produção, com engenharia de verdade.</h2>
          <a href="#contato" className="inline-flex items-center gap-2 text-sm text-silver hover:text-foreground">Solicitar orçamento <ArrowRight size={16} /></a>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, items }) => (
            <article key={title} className="group bg-background p-8 transition-colors hover:bg-surface">
              <div className="grid h-12 w-12 place-items-center rounded-xl border bg-surface transition-shadow group-hover:shadow-glow">
                <Icon size={22} className="text-silver" />
              </div>
              <h3 className="mt-6 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2"><Check size={14} className="text-silver" /> {it}</li>
                ))}
              </ul>
            </article>
          ))}
          <a href="#contato" className="group flex flex-col justify-between bg-background p-8 transition-colors hover:bg-surface">
            <p className="font-mono text-sm text-muted-foreground">{"// seu_projeto.ts"}</p>
            <div>
              <h3 className="text-2xl font-medium">Tem um desafio diferente?</h3>
              <p className="mt-2 inline-flex items-center gap-2 text-silver">Vamos conversar <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="produtos" className="mx-auto max-w-7xl px-6 py-28">
      <Eyebrow>Produtos próprios</Eyebrow>
      <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Tecnologia que também <span className="text-silver-gradient">nasce dentro de casa.</span>
      </h2>
      <div className="mt-14 space-y-6">
        {products.map((p) => (
          <article key={p.slug} id={`produto-${p.slug}`} className="panel relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 glow-spot opacity-40" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <img src={symbol.url} alt="" className="h-10 w-10 rounded-lg border" />
                  <span className="rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-silver animate-blink" />{p.status}
                  </span>
                </div>
                <h3 className="mt-6 text-5xl font-semibold tracking-tight text-silver-gradient">{p.name}</h3>
                <p className="mt-4 max-w-xl text-lg text-muted-foreground">{p.desc}</p>
                <a href="#contato" className="mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
                  Quero saber mais <ArrowRight size={16} />
                </a>
              </div>
              <div className="rounded-2xl border bg-background/60 p-5 font-mono text-xs leading-7 text-muted-foreground">
                <p className="text-foreground">{p.name.toLowerCase()}.modules</p>
                <p>├─ eventos</p>
                <p>├─ equipes</p>
                <p>├─ escalas</p>
                <p>└─ gestão</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Method() {
  return (
    <section className="border-y bg-surface/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow>Metodologia</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Um processo claro, do primeiro contato à evolução.</h2>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative rounded-2xl border bg-background p-7">
              <span className="font-mono text-4xl font-light text-silver-gradient">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-medium">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Tech() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <Eyebrow>Tecnologias</Eyebrow>
      <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Nossa stack.</h2>
      <div className="mt-12 divide-y border-y">
        {techs.map((g) => (
          <div key={g.group} className="grid gap-4 py-6 md:grid-cols-[240px_1fr] md:items-center">
            <p className="font-mono text-sm text-muted-foreground">{g.group}</p>
            <div className="flex flex-wrap gap-3">
              {g.items.map((t) => (
                <span key={t} className="rounded-full border bg-surface px-4 py-2 text-sm transition-colors hover:border-silver">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="border-y bg-surface/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow>Projetos</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Portfólio.</h2>
        {projects.length === 0 ? (
          <div className="mt-12 grid place-items-center rounded-2xl border border-dashed bg-background/50 px-6 py-20 text-center">
            <FolderGit2 className="text-silver" size={32} />
            <p className="mt-4 text-lg">Novos cases em breve.</p>
            <p className="mt-1 text-muted-foreground">Quer ver exemplos do nosso trabalho? Fale com a gente.</p>
            <a href="#contato" className="mt-6 inline-flex items-center gap-2 text-silver hover:text-foreground">Entrar em contato <ArrowRight size={16} /></a>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="overflow-hidden rounded-2xl border bg-background">
                {p.image && <img src={p.image} alt={p.name} loading="lazy" className="aspect-video w-full object-cover" />}
                <div className="p-6">
                  <p className="font-mono text-xs text-muted-foreground">{p.category}</p>
                  <h3 className="mt-2 text-xl font-medium">{p.name}</h3>
                  <p className="mt-2 text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{p.techs.map((t) => <span key={t} className="rounded-full border px-3 py-1 text-xs">{t}</span>)}</div>
                  {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-silver">Ver projeto <ArrowUpRight size={14} /></a>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[1fr_1.5fr]">
      <div>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Perguntas frequentes.</h2>
      </div>
      <Accordion type="single" collapsible className="border-t">
        {faq.map(([q, a], i) => (
          <AccordionItem key={q} value={`q${i}`}>
            <AccordionTrigger className="py-6 text-left text-lg font-normal hover:no-underline">{q}</AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
