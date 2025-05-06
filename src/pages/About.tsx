
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-12 md:py-16">
          <h1 className="text-3xl font-bold tracking-tight mb-8 sm:text-4xl md:text-5xl">About MindMate</h1>
          
          <div className="prose prose-lg max-w-4xl">
            <p className="text-lg text-muted-foreground mb-6">
              MindMate was created with a simple but powerful mission: to make mental health support accessible to everyone, anytime they need it.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              At MindMate, we believe that everyone deserves access to mental health support. Our AI-driven platform provides personalized coping strategies and resources to help you navigate life's challenges with greater resilience and well-being.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How MindMate Works</h2>
            <p>
              MindMate uses advanced natural language processing to analyze your messages, detect emotional patterns, and provide evidence-based support tailored to your specific needs. Our AI continuously learns from interactions to better understand and assist you.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy and Security</h2>
            <p>
              Your privacy is our top priority. All conversations with MindMate are encrypted and confidential. We do not share your personal information with third parties, and you have complete control over your data.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
            <p>
              MindMate was developed by a multidisciplinary team of psychologists, AI specialists, and healthcare professionals committed to improving mental health access and outcomes through technology.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Important Note</h2>
            <p>
              MindMate is designed to provide support and is not a replacement for professional mental health care. If you are experiencing a mental health emergency or crisis, please contact your local emergency services immediately.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
