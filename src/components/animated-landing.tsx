'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brush, Layout, Mail, Menu, MonitorDot, MonitorDown, Phone, ShieldCheck, Smartphone } from 'lucide-react'
import { LogoCompleto } from '@/assets/logo-completo'
import Link from 'next/link'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'
import Particles from "./particles"
import { useState, type SVGProps } from "react"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { toast } from "sonner"

export function AnimatedLanding() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const resetForm = () => {
      setName('');
      setEmail('');
      setMessage('');
    };


    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message
        }),
      });

      if (response.ok) {
        toast.success("Email enviado com sucesso!");
        resetForm(); // Função para limpar o formulário
      } else {
        toast.error("Erro ao enviar email.");
      }
    } catch (error) {
      toast.error("Erro ao enviar email.");
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-b text-white relative">
      <header className="mx-auto px-6 py-4 flex justify-between items-center sticky top-0 bg-zinc-900 z-10 shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          <LogoCompleto width={200} height={50} />
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          {['Home', 'Sobre', 'Serviços', 'Contato'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:flex"
        >
          <Button size="lg" variant="outline" className="transition-colors" asChild>
            <Link
              href="https://wa.me/+5511986237504"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
            </Link>
          </Button>
        </motion.div>
        <div className="md:hidden">

          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent className='bg-black'>
              <SheetHeader>
                <LogoCompleto width={200} height={50} />

                <Separator />

                {['Home', 'Sobre', 'Serviços', 'Contato'].map((item) => (
                  <SheetClose key={item} asChild>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="block py-2 text-center hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </SheetClose>
                ))}

              </SheetHeader>
            </SheetContent>
          </Sheet>

        </div>
      </header>

      <section id="home" className="container mx-auto px-6 py-16 flex flex-col justify-center items-center min-h-[80vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 md:text-center"
        >
          Sistemas Personalizados para o Seu Negócio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 md:text-center"
        >
          CODEBORGES: Transformando ideias em soluções tecnológicas sob medida
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" variant="outline" className="transition-colors" asChild>
            <Link
              href="https://wa.me/+5511986237504"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comece seu Projeto
            </Link>
          </Button>
        </motion.div>
      </section>

      <section id="sobre" className="container mx-auto px-6 py-16 min-h-[50vh] flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Sobre Nós
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg mb-6">
            A CODEBORGES é uma startup inovadora dedicada ao desenvolvimento de sistemas personalizados. Nossa abordagem une expertise técnica de ponta com uma compreensão aprofundada das necessidades únicas de cada cliente, garantindo soluções sob medida e eficazes.
          </p>
          <p className="text-lg">
            Nossa missão é criar tecnologias inovadoras que não apenas atendem às expectativas, mas também impulsionam o crescimento e a eficiência dos negócios dos nossos clientes. Estamos comprometidos em transformar desafios em oportunidades, entregando soluções que fazem a diferença.
          </p>
        </motion.div>
      </section>

      <section id="serviços" className="container mx-auto px-6 py-16 min-h-screen flex flex-col justify-center items-center space-y-16 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brush className="w-12 h-12 mb-4 text-blue-400" />,
              title: "UX/UI Design",
              description: "Desenvolvemos interfaces modernas, centradas no usuário, priorizando a usabilidade e uma experiência intuitiva."
            },
            {
              icon: <Layout className="w-12 h-12 mb-4 text-blue-400" />,
              title: "Desenvolvimento Web Personalizado",
              description: "Criamos aplicações web sob medida para atender às necessidades específicas do seu negócio."
            },
            {
              icon: <Smartphone className="w-12 h-12 mb-4 text-blue-400" />,
              title: "Aplicativos Móveis",
              description: "Desenvolvemos apps mobile personalizados para iOS e Android, alinhados com sua marca e objetivos."
            },
            {
              icon: <MonitorDown className="w-12 h-12 mb-4 text-blue-400" />,
              title: "Sistemas Desktop",
              description: "Desenvolvemos apps desktop personalizados para Windows, Linux e Mac, alinhados com sua marca e objetivos."
            },
            {
              icon: <MonitorDot className="w-12 h-12 mb-4 text-blue-400" />,
              title: "Sistemas de Gestão Empresarial",
              description: "Criamos ERPs e CRMs customizados para otimizar seus processos internos e aumentar a produtividade."
            },
            {
              icon: <ShieldCheck className="w-12 h-12 mb-4 text-blue-400" />,
              title: "Segurança",
              description: "Implementamos criptografia e soluções de segurança robustas, garantindo a proteção dos dados e a integridade dos seus sistemas."
            },
          ].map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* <section id="projetos" className="container mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Projetos Realizados
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Sistema de Logística Integrado"
            description="Desenvolvemos um sistema personalizado para uma empresa de logística, otimizando rotas e reduzindo custos operacionais em 30%."
            imageUrl="/placeholder.svg?height=200&width=400"
          />
          <ProjectCard
            title="Plataforma de E-learning Corporativo"
            description="Criamos uma solução de aprendizagem online personalizada para uma multinacional, resultando em um aumento de 50% na taxa de conclusão de treinamentos."
            imageUrl="/placeholder.svg?height=200&width=400"
          />
        </div>
      </section> */}

      <section id="contato" className="bg-zinc-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-4"
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Pronto para transformar seu negócio com um sistema personalizado? Fale conosco!
          </motion.p>          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <Input
                  type="text"
                  placeholder="Seu Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <Input
                  type="email"
                  placeholder="Seu Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <Textarea
                  placeholder="Sua Mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  variant="outline"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </motion.div>
            </form>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8"
            >
              OU
            </motion.p> 
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6" />
              <span>contato@codeborges.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6" />
              <span>(11) 98623-7504</span>
            </div>
            <Button size="lg" variant="outline" className="transition-colors" asChild>
              <Link
                href="https://wa.me/+5511986237504"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>&copy; 2023 CODEBORGES. Todos os direitos reservados.</p>
      </footer>

      <motion.a
        href="https://wa.me/+5511986237504"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <WhatsAppIcon className="w-6 h-6" />
      </motion.a>

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ServiceCard({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      className="bg-zinc-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow flex flex-col justify-center items-center hover:bg-zinc-700"
    >
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

// function ProjectCard({ title, description, imageUrl }: { title: string, description: string, imageUrl: string }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
//     >
//       <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" width={500} height={500} priority quality={100} />
//       <div className="p-6">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-400">{description}</p>
//       </div>
//     </motion.div>
//   )
// }

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}
