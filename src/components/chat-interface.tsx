
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Bot, User, Info, Plus, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { getEmotionalResponse } from "@/utils/emotionAnalysis";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi, I'm MindMate! How are you feeling today? I'm here to listen and support you.",
      timestamp: new Date(),
    },
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Properly scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputMessage,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Generate emotional response based on user's message
    setTimeout(() => {
      const personalizedResponse = getEmotionalResponse(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: personalizedResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleStartNewChat = () => {
    toast({
      title: "New conversation started",
      description: "Your chat history has been cleared.",
    });
    
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Hi, I'm MindMate! How are you feeling today? I'm here to listen and support you.",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-4xl mx-auto">
      {/* Chat header */}
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
                <Button variant="outline" size="icon" onClick={handleStartNewChat}>
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
      
      {/* Messages area with ScrollArea component for better scroll control */}
      <ScrollArea className="flex-1 p-4 space-y-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id}
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
          ))}
          
          {isTyping && (
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
          )}
          
          {/* This empty div is our scroll target */}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      {/* Input area */}
      <div className="border-t p-4 bg-background">
        <div className="flex gap-2">
          <Textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            className="min-h-[60px] resize-none"
          />
          <Button className="mindmate-button-primary" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          MindMate is here to support you, not replace professional help. If you're in crisis, please call your local emergency services.
        </p>
      </div>
    </div>
  );
}
