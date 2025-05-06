
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Alex J.",
    title: "Student",
    content: "MindMate helped me manage stress during exams. The breathing exercises and personalized tips made a huge difference.",
    avatar: "AJ",
  },
  {
    name: "Sam T.",
    title: "Working Professional",
    content: "Having MindMate available 24/7 has been incredible. It's like having a supportive friend whenever anxiety strikes.",
    avatar: "ST",
  },
  {
    name: "Morgan L.",
    title: "Parent",
    content: "As a busy parent, I often neglect my own mental health. MindMate helps me check in with myself and practice self-care.",
    avatar: "ML",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 mindmate-gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Users Share Their Experience
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See how MindMate has helped people improve their mental well-being and develop healthier coping strategies.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="relative overflow-hidden border-none shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mindmate-primary to-mindmate-accent" />
              <CardContent className="p-6 pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-10 w-10 border-2 border-mindmate-primary/20">
                    <AvatarFallback className="bg-mindmate-primary/10 text-mindmate-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
