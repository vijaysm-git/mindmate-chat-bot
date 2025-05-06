
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Phone, Book, Video, Users, Headphones, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mindmate-gradient-bg">
        <div className="container px-4 py-12 md:py-16">
          <h1 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl md:text-5xl text-center">
            Mental Health Resources
          </h1>
          
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:text-lg">
            Access a collection of trusted resources to support your mental well-being journey, from crisis hotlines to self-help guides.
          </p>
          
          <Tabs defaultValue="crisis" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="crisis">Crisis</TabsTrigger>
              <TabsTrigger value="self-help">Self-Help</TabsTrigger>
              <TabsTrigger value="learn">Learn</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="crisis" className="space-y-4">
              <p className="mb-6">
                If you're experiencing a mental health emergency, please contact one of these resources immediately:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "National Suicide Prevention Lifeline",
                    description: "24/7, free and confidential support for people in distress.",
                    phone: "1-800-273-8255",
                    website: "https://suicidepreventionlifeline.org/",
                    icon: Phone,
                  },
                  {
                    title: "Crisis Text Line",
                    description: "Text HOME to 741741 to connect with a Crisis Counselor.",
                    phone: "Text HOME to 741741",
                    website: "https://www.crisistextline.org/",
                    icon: Phone,
                  },
                  {
                    title: "SAMHSA's National Helpline",
                    description: "Treatment referral and information service for mental health.",
                    phone: "1-800-662-4357",
                    website: "https://www.samhsa.gov/find-help/national-helpline",
                    icon: Phone,
                  },
                  {
                    title: "Veterans Crisis Line",
                    description: "Connect with the Veterans Crisis Line to reach caring responders.",
                    phone: "1-800-273-8255 (Press 1)",
                    website: "https://www.veteranscrisisline.net/",
                    icon: Phone,
                  },
                ].map((resource, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-mindmate-primary/10 flex items-center justify-center flex-shrink-0">
                          <resource.icon className="h-5 w-5 text-mindmate-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                          <p className="text-sm font-medium">{resource.phone}</p>
                          <Button variant="outline" size="sm" className="text-xs" asChild>
                            <a href={resource.website} target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="self-help" className="space-y-4">
              <p className="mb-6">
                Explore these self-help resources to develop coping skills and manage your mental health:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Guided Meditation",
                    description: "5-minute meditation for anxiety relief",
                    type: "Audio",
                    icon: Headphones,
                  },
                  {
                    title: "Breathing Exercises",
                    description: "Simple techniques to calm your nervous system",
                    type: "Guide",
                    icon: FileText,
                  },
                  {
                    title: "Thought Journal Template",
                    description: "Track and challenge negative thought patterns",
                    type: "PDF",
                    icon: Download,
                  },
                  {
                    title: "Sleep Improvement Guide",
                    description: "Evidence-based tips for better sleep",
                    type: "Article",
                    icon: Book,
                  },
                  {
                    title: "Stress Management Workbook",
                    description: "Practical exercises for managing daily stress",
                    type: "PDF",
                    icon: Download,
                  },
                  {
                    title: "Mindfulness Practices",
                    description: "Learn to stay present and reduce anxiety",
                    type: "Video",
                    icon: Video,
                  },
                ].map((resource, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-mindmate-secondary/30 flex items-center justify-center flex-shrink-0">
                          <resource.icon className="h-5 w-5 text-mindmate-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-mindmate-secondary/30 text-mindmate-primary px-2 py-1 rounded-full">
                              {resource.type}
                            </span>
                            <Button variant="ghost" size="sm" className="text-xs">
                              Access
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="learn" className="space-y-4">
              <p className="mb-6">
                Educational resources to help you understand mental health conditions and treatments:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Understanding Anxiety",
                    description: "Learn about different types of anxiety disorders and treatment options",
                    type: "Article",
                    icon: Book,
                  },
                  {
                    title: "The Science of Depression",
                    description: "What happens in the brain during depression and how treatments work",
                    type: "Video",
                    icon: Video,
                  },
                  {
                    title: "Cognitive Behavioral Therapy Basics",
                    description: "Introduction to CBT techniques you can practice at home",
                    type: "Guide",
                    icon: FileText,
                  },
                  {
                    title: "Trauma and Recovery",
                    description: "Understanding trauma responses and the path to healing",
                    type: "Article",
                    icon: Book,
                  },
                ].map((resource, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-mindmate-accent/20 flex items-center justify-center flex-shrink-0">
                          <resource.icon className="h-5 w-5 text-mindmate-accent" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-mindmate-accent/20 text-mindmate-accent px-2 py-1 rounded-full">
                              {resource.type}
                            </span>
                            <Button variant="ghost" size="sm" className="text-xs">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="community" className="space-y-4">
              <p className="mb-6">
                Connect with others who understand what you're going through:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Online Support Groups",
                    description: "Join moderated groups for various mental health concerns",
                    type: "Community",
                    icon: Users,
                  },
                  {
                    title: "Mental Health Forums",
                    description: "Discuss experiences and share coping strategies with peers",
                    type: "Forum",
                    icon: Users,
                  },
                  {
                    title: "Local Support Meetings",
                    description: "Find in-person support groups in your area",
                    type: "Directory",
                    icon: Users,
                  },
                  {
                    title: "Family Resource Center",
                    description: "Resources for family members supporting loved ones",
                    type: "Guide",
                    icon: Users,
                  },
                ].map((resource, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-mindmate-primary/10 flex items-center justify-center flex-shrink-0">
                          <resource.icon className="h-5 w-5 text-mindmate-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-mindmate-primary/10 text-mindmate-primary px-2 py-1 rounded-full">
                              {resource.type}
                            </span>
                            <Button variant="ghost" size="sm" className="text-xs">
                              Explore
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
