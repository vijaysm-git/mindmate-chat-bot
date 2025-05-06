
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Start Your Mental Wellness Journey
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Begin chatting with MindMate today and take the first step toward better mental well-being.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Link to="/chat">
              <Button className="mindmate-button-primary w-full py-6 text-lg">
                Chat with MindMate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
