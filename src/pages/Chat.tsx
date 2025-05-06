
import React from "react";
import { Navbar } from "@/components/navbar";
import { ChatInterface } from "@/components/chat-interface";
import { Footer } from "@/components/footer";

const Chat = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ChatInterface />
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
