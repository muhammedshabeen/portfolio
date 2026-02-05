import * as LucideIcons from "lucide-react";
import { Card } from "@/react-app/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillIconProps {
  name: string;
  iconName: string;
  index: number;
}

export default function SkillIcon({ name, iconName, index }: SkillIconProps) {
  // Map icon name to Lucide icon component
  const getIcon = (name: string): LucideIcon => {
    const iconMap: Record<string, keyof typeof LucideIcons> = {
      "code-2": "Code2",
      "server": "Server",
      "api": "Boxes",
      "network": "Network",
      "radio": "Radio",
      "database": "Database",
      "zap": "Zap",
      "gauge": "Gauge",
      "cloud": "Cloud",
      "server-cog": "ServerCog",
      "clock": "Clock",
      "git-branch": "GitBranch",
      "credit-card": "CreditCard",
      "wallet": "Wallet",
      "phone": "Phone",
      "message-circle": "MessageCircle",
      "layout": "Layout",
      "braces": "Braces",
      "sparkles": "Sparkles",
      "refresh-cw": "RefreshCw"
    };

    const IconComponent = LucideIcons[iconMap[name] || "Circle"] as LucideIcon;
    return IconComponent;
  };

  const Icon = getIcon(iconName);

  return (
    <Card
      className="group relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 skill-card"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon container with float animation */}
      <div className="relative flex flex-col items-center space-y-3">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 skill-icon-float">
          {/* Pulsing outline on hover */}
          <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/50 group-hover:animate-pulse transition-all duration-500" />
          
          {/* Icon with shimmer */}
          <div className="relative">
            <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-500" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skill-shimmer" />
          </div>
        </div>
        
        {/* Skill name */}
        <p className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </p>
      </div>
    </Card>
  );
}
