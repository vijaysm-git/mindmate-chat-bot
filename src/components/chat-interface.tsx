
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { getEmotionalResponse } from "@/utils/emotionAnalysis";
import { Message } from "@/types/chat";
import { ChatHeader } from "./chat/chat-header";
import { ChatMessages } from "./chat/chat-messages";
import { ChatInput } from "./chat/chat-input";

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi, I'm MindMate! How are you feeling today? I'm here to listen and support you.",
      timestamp: new Date(),
    },
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
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
      <ChatHeader onStartNewChat={handleStartNewChat} />
      <ChatMessages messages={messages} isTyping={isTyping} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
