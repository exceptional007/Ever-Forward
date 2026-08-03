import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Background } from "@/components/layout/Background";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CommandPalette, useCommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

const title = "Akshhat Srivastava — Software & AI Engineer";
const description =
  "Portfolio of Akshhat Srivastava: full-stack and AI engineer building RAG pipelines, layered .NET/FastAPI services and React products.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Akshhat Srivastava",
          jobTitle: "Software Engineer / AI Engineer",
          email: "mailto:akshhatsri7843@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Gorakhpur", addressCountry: "IN" },
          sameAs: [
            "https://github.com/exceptional007",
            "https://www.linkedin.com/in/akshhat-srivastava-11a13530b",
            "https://leetcode.com/u/akshhat007/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { open, setOpen } = useCommandPalette();

  return (
    <>
      <Background />
      <ScrollProgress />
      <CustomCursor />
      <Navbar onOpenPalette={() => setOpen(true)} />
      <CommandPalette open={open} onOpenChange={setOpen} />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
