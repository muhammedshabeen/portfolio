import { Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} {portfolioData.name}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span className="hidden sm:inline">and Django expertise</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {portfolioData.location}
          </div>
        </div>
      </div>
    </footer>
  );
}
