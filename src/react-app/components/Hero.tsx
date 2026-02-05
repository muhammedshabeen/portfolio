import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="inline-block">
            <p className="text-muted-foreground text-lg mb-2 animate-slide-down">
              Hello, I'm
            </p>
          </div>

          {/* Name with gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 animate-slide-up delay-100">
            {portfolioData.title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            {portfolioData.yearsOfExperience} years of experience building scalable backend systems,
            RESTful APIs, and real-time applications with Python & Django
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hire Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center items-center pt-8 animate-slide-up delay-400">
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href={`https://${portfolioData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={`https://${portfolioData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto relative">
              <div className="w-1.5 h-3 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-down {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes scroll {
          0% { 
            opacity: 0; 
            transform: translate(-50%, 0); 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            opacity: 0; 
            transform: translate(-50%, 12px); 
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        .animate-slide-up.delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-slide-up.delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-slide-up.delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-slide-up.delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
