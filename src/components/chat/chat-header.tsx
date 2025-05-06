
import React from "react";
import { Bot, Info, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChatHeaderProps {
  onStartNewChat: () => void;
}

export function ChatHeader({ onStartNewChat }: ChatHeaderProps) {
  return (
    <div className="border-b p-4 flex items-center justify-between bg-background">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 bg-mindmate-primary/10 rounded-full flex items-center justify-center">
          <Bot className="h-5 w-5 text-mindmate-primary" />
        </div>
        <div>
          <h2 className="font-semibold">MindMate</h2>
          <p className="text-xs text-muted-foreground">AI Mental Health Support</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={onStartNewChat}>
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>New conversation</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>About MindMate</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
