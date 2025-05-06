
import React from "react";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div 
      className={cn(
        "flex gap-3 max-w-[80%]",
        message.sender === "user" ? "ml-auto" : ""
      )}
    >
      {message.sender === "bot" && (
        <div className="h-8 w-8 bg-mindmate-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
          <Bot className="h-4 w-4 text-mindmate-primary" />
        </div>
      )}
      
      <div className={cn(
        "p-3 rounded-lg",
        message.sender === "user" 
          ? "bg-mindmate-primary text-primary-foreground"
          : "bg-background border"
      )}>
        {message.text}
        <div className={cn(
          "text-xs mt-1",
          message.sender === "user" 
            ? "text-primary-foreground/70"
            : "text-muted-foreground"
        )}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {message.sender === "user" && (
        <div className="h-8 w-8 bg-secondary rounded-full flex-shrink-0 flex items-center justify-center">
          <User className="h-4 w-4 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
}
