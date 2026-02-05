import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { Card } from "@/react-app/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { useInView } from "@/react-app/hooks/useInView";

export default function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background/50 to-muted/30" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building scalable backend systems across multiple organizations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 timeline-line" />

          {/* Experience items */}
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className={`relative experience-item ${isInView ? 'in-view' : ''}`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background timeline-dot z-10">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}>
                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    {/* Company and period */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-secondary mt-1">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-line {
          opacity: 0;
        }

        .experience-item {
          opacity: 0;
          transform: translateY(30px);
        }

        .experience-item.in-view {
          animation: slide-in 0.6s ease-out forwards;
        }

        .experience-item.in-view ~ .experience-item.in-view {
          animation-delay: 0.2s;
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .timeline-dot {
          box-shadow: 0 0 0 4px hsl(var(--primary) / 0.2);
        }
      `}</style>
    </section>
  );
}
