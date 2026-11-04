import { ArrowRight, GitBranch, Lock, RotateCw, Plus } from "lucide-react";
import banner from "@/assets/banner.png";
import symbol from "@/assets/logo.png";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-28 pb-16">
      {/* background: banner lines + grid + spotlight */}
      <div className="absolute inset-0 -z-10">
        <img src={banner} alt="" className="absolute inset-0 h-full w-full object-cover object-left opacity-40 [mask-image:linear-gradient(90deg,black_0%,black_35%,transparent_75%)]" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
        <div className="absolute -top-40 right-[18%] h-[520px] w-[380px] glow-spot animate-beam" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-12">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border bg-surface/70 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <GitBranch size={14} className="text-silver" /> Software House
          </span>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl">
            <span className="block">Construímos</span>
            <span className="block whitespace-nowrap">
              <span className="font-mono font-light text-muted-foreground">{"{"}</span>
              <span className="text-silver-gradient">tecnologia</span>
              <span className="font-mono font-light text-muted-foreground">{"}"}</span>
            </span>
            <span className="block">para transformar</span>
            <span className="block">negócios.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Somos uma Software House especializada no desenvolvimento de soluções personalizadas e na criação de produtos digitais próprios.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contato" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
              Desenvolva seu projeto <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#produtos" className="inline-flex items-center rounded-full border bg-surface/60 px-7 py-4 font-medium backdrop-blur transition-colors hover:bg-accent">
              Conheça nossos produtos
            </a>
          </div>
        </div>

        <CodeVisual />
      </div>
    </section>
  );
}

function CodeVisual() {
  return (
    <div className="relative hidden md:block animate-fade-up [animation-delay:200ms]">
      <div className="panel rounded-2xl p-5 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-muted-foreground/60" />
            <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
            <span className="h-3 w-3 rounded-full bg-muted-foreground/20" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">codeborges/core.ts</span>
          <div className="flex gap-2 text-muted-foreground">
            <span className="rounded-md border p-1.5"><RotateCw size={14} /></span>
            <span className="rounded-md border p-1.5"><Plus size={14} /></span>
          </div>
        </div>
        <pre className="mt-5 overflow-hidden rounded-xl border bg-background/60 p-5 font-mono text-[13px] leading-6 text-muted-foreground">
<span className="text-foreground">export async function</span> <span className="text-silver">build</span>(ideia: <span className="text-foreground">Negocio</span>) {"{"}
{"\n"}  <span className="text-foreground">const</span> plano = <span className="text-foreground">await</span> descobrir(ideia);
{"\n"}  <span className="text-foreground">const</span> sistema = arquitetar(plano, {"{"}
{"\n"}    seguro: <span className="text-silver">true</span>,
{"\n"}    escalavel: <span className="text-silver">true</span>,
{"\n"}  {"}"});
{"\n"}
{"\n"}  <span className="text-foreground">return</span> deploy(sistema).evoluir();
{"\n"}{"}"}<span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-silver animate-blink" />
        </pre>
      </div>

      <div className="panel absolute -bottom-16 -right-4 w-64 rounded-2xl p-5 font-mono text-xs leading-6 text-muted-foreground animate-float">
        <span className="text-foreground">deploy</span> {"{"}
        <br />&nbsp;&nbsp;status: <span className="text-silver">"online"</span>;
        <br />&nbsp;&nbsp;pipeline: <span className="text-silver">CI/CD</span>;
        <br />&nbsp;&nbsp;uptime: <span className="text-silver">monitorado</span>;
        <br />{"}"}
      </div>

      <div className="panel absolute -bottom-16 left-6 grid h-24 w-24 place-items-center rounded-2xl shadow-glow">
        <Lock className="text-silver" size={28} />
      </div>

      <img src={symbol} alt="" className="absolute -top-10 -left-10 h-20 w-20 rounded-xl border opacity-90 animate-float [animation-delay:1s]" />
    </div>
  );
}
