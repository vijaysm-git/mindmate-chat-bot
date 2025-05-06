
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Activity, Heart, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="wave-pattern relative overflow-hidden pt-16 pb-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI-driven mental health support that understands you
              </h1>
              <p className="text-muted-foreground md:text-xl">
                MindMate provides personalized coping strategies and support for your mental well-being, anytime you need it.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/chat">
                <Button className="mindmate-button-primary px-8 py-6 text-base">
                  Start Chatting
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-4">
              {[
                {
                  icon: Brain,
                  title: "AI-powered",
                  description: "Advanced analysis of emotional patterns",
                },
                {
                  icon: Shield,
                  title: "Private & Secure",
                  description: "Your data stays confidential",
                },
                {
                  icon: Activity,
                  title: "Personalized",
                  description: "Adaptive to your unique needs",
                },
                {
                  icon: Heart,
                  title: "Always Available",
                  description: "Support whenever you need it",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mindmate-secondary">
                    <feature.icon className="h-6 w-6 text-mindmate-primary" />
                  </div>
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center lg:justify-end">
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] bg-mindmate-primary/10 rounded-full animate-float">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-10 mindmate-card bg-background/90 backdrop-blur-sm max-w-[300px] md:max-w-[350px]">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 shrink-0 bg-mindmate-accent rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">MindMate</p>
                      <p className="text-sm text-muted-foreground">
                        I notice you've been feeling overwhelmed lately. Would you like to try a quick breathing exercise together?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[25%] right-[10%] h-16 w-16 rounded-full bg-mindmate-secondary/40 animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute bottom-[30%] left-[15%] h-12 w-12 rounded-full bg-mindmate-accent/30 animate-float" style={{ animationDelay: "2s" }} />
              <div className="absolute bottom-[10%] right-[20%] h-8 w-8 rounded-full bg-mindmate-primary/20 animate-float" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
