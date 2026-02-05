import Navigation from "@/react-app/components/Navigation";
import Hero from "@/react-app/components/Hero";
import About from "@/react-app/components/About";
import Skills from "@/react-app/components/Skills";
import Experience from "@/react-app/components/Experience";
import Projects from "@/react-app/components/Projects";
import Contact from "@/react-app/components/Contact";
import Footer from "@/react-app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
