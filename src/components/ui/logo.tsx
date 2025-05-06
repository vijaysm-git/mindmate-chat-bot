
import React from "react";
import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({
  className,
  size = "md",
  showText = true,
}: LogoProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };
  
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute inset-0 bg-mindmate-primary rounded-full blur-md opacity-30 animate-pulse-slow" />
        <div className="relative bg-gradient-to-br from-mindmate-primary to-mindmate-accent rounded-full p-2">
          <Brain className={cn(sizes[size], "text-white")} strokeWidth={1.5} />
        </div>
      </div>
      
      {showText && (
        <div className={cn("font-semibold tracking-tight", textSizes[size])}>
          <span className="text-mindmate-primary">Mind</span>
          <span className="text-mindmate-accent">Mate</span>
        </div>
      )}
    </div>
  );
}
