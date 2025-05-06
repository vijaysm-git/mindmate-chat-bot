
import React from "react";
import { Brain, Shield, MessageCircle, Clock, Users, Bot } from "lucide-react";

export function Features() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How MindMate Supports Your Mental Health
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our AI-driven platform provides personalized support through intelligent analysis and evidence-based techniques.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Brain,
              title: "Emotional Analysis",
              description:
                "Advanced AI that detects emotional patterns and stress signals from your conversations.",
            },
            {
              icon: Shield,
              title: "Privacy First",
              description:
                "Your conversations are fully encrypted and we prioritize data protection and confidentiality.",
            },
            {
              icon: MessageCircle,
              title: "Personalized Support",
              description:
                "Tailored coping strategies and resources based on your specific needs and situation.",
            },
            {
              icon: Clock,
              title: "24/7 Availability",
              description:
                "Access support anytime, anywhere, whenever you need someone to talk to.",
            },
            {
              icon: Users,
              title: "Professional Integration",
              description:
                "Seamless connection with mental health professionals when additional support is needed.",
            },
            {
              icon: Bot,
              title: "Continuous Learning",
              description:
                "Our AI improves with each interaction to better understand and support your needs.",
            },
          ].map((feature, index) => (
            <div key={index} className="mindmate-card flex flex-col items-start">
              <div className="mb-4 rounded-lg bg-mindmate-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-mindmate-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
