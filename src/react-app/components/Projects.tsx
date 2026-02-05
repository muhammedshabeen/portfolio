import { ExternalLink, Lightbulb } from "lucide-react";
import { Card } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { portfolioData } from "@/data/portfolio";
import { useInView } from "@/react-app/hooks/useInView";

export default function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Solving complex backend challenges with scalable Django solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <Card
              key={index}
              className={`group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 project-card ${isInView ? 'in-view' : ''}`}
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Project header */}
              <div className="mb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key challenges */}
              <div className="space-y-2 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-3">
                  <Lightbulb className="w-4 h-4 text-secondary" />
                  <span>Key Challenges Solved</span>
                </div>
                {project.challenges.map((challenge, chalIndex) => (
                  <div
                    key={chalIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-muted-foreground">
              Want to see more of my work or discuss a project?
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .project-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }

        .project-card.in-view {
          animation: project-reveal 0.6s ease-out forwards;
        }

        @keyframes project-reveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
