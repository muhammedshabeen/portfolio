import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Card } from "@/react-app/components/ui/card";
import { Input } from "@/react-app/components/ui/input";
import { Textarea } from "@/react-app/components/ui/textarea";
import { Button } from "@/react-app/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { useInView } from "@/react-app/hooks/useInView";

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${portfolioData.email}`,
      label: portfolioData.email,
      color: "text-red-400"
    },
    {
      name: "GitHub",
      icon: Github,
      href: `https://${portfolioData.github}`,
      label: portfolioData.github,
      color: "text-foreground"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://${portfolioData.linkedin}`,
      label: portfolioData.linkedin,
      color: "text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card
            className={`p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border contact-card ${isInView ? 'in-view' : ''}`}
            style={{ animationDelay: "0s" }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 success-message">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-center">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            )}
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <Card
              className={`p-6 bg-card/50 backdrop-blur-sm border-border contact-card ${isInView ? 'in-view' : ''}`}
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-background/50 hover:bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors ${link.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {link.label}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card
              className={`p-6 bg-card/50 backdrop-blur-sm border-border contact-card ${isInView ? 'in-view' : ''}`}
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground">Open to Opportunities</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  Remote Work
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                  Freelance
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  Full-time
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
        .contact-card {
          opacity: 0;
          transform: translateY(30px);
        }

        .contact-card.in-view {
          animation: fade-slide-up 0.6s ease-out forwards;
        }

        @keyframes fade-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-message {
          animation: success-pop 0.5s ease-out;
        }

        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
