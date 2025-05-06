
import React from "react";
import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex gap-3 max-w-[80%]">
      <div className="h-8 w-8 bg-mindmate-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
        <Bot className="h-4 w-4 text-mindmate-primary" />
      </div>
      <div className="bg-background border p-3 rounded-lg flex gap-1 items-center">
        <div className="w-2 h-2 bg-mindmate-primary/60 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-mindmate-primary/60 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 bg-mindmate-primary/60 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  );
}
