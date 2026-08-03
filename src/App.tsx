import { Background } from "@/components/layout/Background";
import { CommandPalette, useCommandPalette } from "@/components/layout/CommandPalette";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Skills } from "@/components/sections/Skills";
import { ThemeProvider } from "@/context/theme-context";

function App() {
  const { open, setOpen } = useCommandPalette();

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
