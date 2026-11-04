import "../styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About, Services, Products, Method, Tech, Projects, Faq } from "@/components/site/Sections";
import { Contact, Footer } from "@/components/site/Contact";

const title = "CODEBORGES — Software House | Software sob medida e produtos digitais";
const description =
  "Construímos tecnologia para transformar negócios: sistemas personalizados, integrações, cloud, IA e produtos digitais próprios.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://codeborges.com" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CODEBORGES",
          url: "https://codeborges.com",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+55-11-98623-7504",
            contactType: "sales",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Method />
        <Tech />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
