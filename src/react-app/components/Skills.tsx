import { portfolioData } from "@/data/portfolio";
import { useInView } from "@/react-app/hooks/useInView";
import SkillIcon from "@/react-app/components/SkillIcon";

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building high-performance backend systems and scalable applications
          </p>
        </div>

        {/* Skills by category */}
        <div className="space-y-16">
          {portfolioData.skills.map((skillGroup, groupIndex) => (
            <div
              key={groupIndex}
              className={`skill-group ${isInView ? 'in-view' : ''}`}
              style={{
                animationDelay: `${groupIndex * 0.2}s`
              }}
            >
              {/* Category header */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-center mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {skillGroup.category}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 mx-auto" />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skillIndex}
                    name={skill.name}
                    iconName={skill.icon}
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Confidence/Proficiency indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-full">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200" />
            </div>
            <span className="text-sm text-muted-foreground">
              Continuously learning and expanding expertise
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .skill-group {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .skill-group.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-card {
          opacity: 0;
          transform: translateY(20px);
        }

        .skill-group.in-view .skill-card {
          animation: skill-fade-in 0.6s ease-out forwards;
        }

        @keyframes skill-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .skill-icon-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .skill-shimmer {
          pointer-events: none;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
