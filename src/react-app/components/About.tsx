import { Code2, Database, Cloud, Zap } from "lucide-react";
import { Card } from "@/react-app/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Architecture",
      description: "Expert in building scalable REST APIs with Django & DRF"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "Performance tuning with PostgreSQL, MySQL, and Redis"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS, DigitalOcean deployment and management"
    },
    {
      icon: Zap,
      title: "Real-time Systems",
      description: "WebSockets, Celery, and async task processing"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-semibold">{portfolioData.yearsOfExperience} Years</span>
              </div>
              <div className="px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg">
                <span className="text-secondary font-semibold">Backend Specialist</span>
              </div>
              <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                <span className="text-accent font-semibold">API Expert</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
