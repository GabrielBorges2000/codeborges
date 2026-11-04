import { Code2, Workflow, Cloud, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";

export const contact = {
  whatsapp: "5511986237504",
  whatsappLabel: "+55 (11) 98623-7504",
};

export const whatsappLink = (
  text = "Olá! Vim pelo site da CODEBORGES e gostaria de conversar sobre um projeto.",
) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const principles = [
  "Engenharia de software",
  "Inovação",
  "Qualidade técnica",
  "Segurança",
  "Evolução contínua",
];

export const services: { icon: LucideIcon; title: string; desc: string; items: string[] }[] = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    desc: "Sistemas sob medida, pensados para o seu processo — não o contrário.",
    items: [
      "Sistemas empresariais",
      "Aplicações web",
      "Aplicações mobile",
      "Plataformas personalizadas",
    ],
  },
  {
    icon: Workflow,
    title: "Integrações e Automações",
    desc: "Sistemas que conversam entre si e processos que rodam sozinhos.",
    items: [
      "Desenvolvimento de APIs",
      "Integração entre sistemas",
      "Automação de processos",
      "Sincronização de dados",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud e DevOps",
    desc: "Infraestrutura confiável, entregas contínuas e visibilidade do que acontece.",
    items: [
      "Infraestrutura em nuvem",
      "Docker e Kubernetes",
      "CI/CD",
      "Monitoramento e observabilidade",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Arquitetura e Segurança",
    desc: "Bases sólidas para software que precisa crescer com segurança.",
    items: [
      "Arquitetura de software",
      "Engenharia de sistemas",
      "Segurança de aplicações",
      "Boas práticas",
    ],
  },
  {
    icon: Sparkles,
    title: "Inteligência Artificial",
    desc: "IA aplicada a problemas reais do seu negócio.",
    items: [
      "Integração de modelos de IA",
      "Assistentes inteligentes",
      "Automação com IA",
      "Soluções inteligentes",
    ],
  },
];

export type Product = { slug: string; name: string; desc: string; status: string };
export const products: Product[] = [
  {
    slug: "nexus",
    name: "Nexus",
    desc: "Plataforma para gestão de equipes terceirizadas em eventos, festas, buffets, controle de acesso e muito mais, equipes e alocação de profissionais, conectando operações, escalas e gestão em um único ambiente.",
    status: "Em desenvolvimento",
  },
];

export const steps = [
  ["Descoberta", "Entendimento do negócio e levantamento das necessidades."],
  ["Planejamento", "Definição de escopo, arquitetura e estratégia."],
  ["Desenvolvimento", "Implementação seguindo boas práticas de engenharia."],
  ["Validação", "Testes, revisões e controle de qualidade."],
  ["Implantação", "Publicação e disponibilização da solução."],
  ["Evolução", "Suporte, melhorias e novas funcionalidades."],
];

export const techs = [
  { group: "Linguagens & Runtime", items: ["TypeScript", "Node.js", "Fastify", "Nest.js" ]},
  { group: "Front-end & Mobile", items: ["Vite", "React", "Next.js", "React Native"] },
  { group: "Dados", items: ["PostgreSQL", "OracleDB", "MySql", "Redis"]},
  { group: "Infra & Entrega", items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "GitOps", "ArgoCD", "Terraform"] },
];

export type Project = {
  name: string;
  desc: string;
  category: string;
  techs: string[];
  image?: string;
  url?: string;
};
// Adicione projetos reais aqui.
export const projects: Project[] = [];

export const faq = [
  [
    "Como funciona o desenvolvimento de um software sob encomenda?",
    "Começamos entendendo seu negócio, definimos escopo e arquitetura, e desenvolvemos em ciclos com entregas validadas por você até a implantação.",
  ],
  [
    "A CODEBORGES desenvolve sistemas personalizados?",
    "Sim. Esse é um dos nossos focos: sistemas web, mobile e plataformas construídos sob medida para o seu processo.",
  ],
  [
    "É possível integrar sistemas existentes?",
    "Sim. Desenvolvemos APIs e integrações para conectar os sistemas que você já usa e automatizar o fluxo de dados entre eles.",
  ],
  [
    "Como funciona a contratação?",
    "Após uma conversa inicial, apresentamos uma proposta com escopo, prazos e investimento. Com o aceite, iniciamos o projeto.",
  ],
  [
    "A empresa oferece manutenção e suporte?",
    "Sim. Após a implantação, oferecemos suporte, correções e evolução contínua com novas funcionalidades.",
  ],
  [
    "Como solicitar um orçamento?",
    "Envie uma mensagem pelo formulário abaixo ou chame no WhatsApp contando um pouco sobre o seu projeto.",
  ],
];
