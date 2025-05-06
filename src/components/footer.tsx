
import React from "react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              MindMate offers AI-driven mental health support, helping users develop coping strategies and access resources.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Testimonials</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
          <p>© 2024 MindMate. All rights reserved.</p>
          <p>
            <a href="#" className="underline underline-offset-4 hover:text-foreground">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="#" className="underline underline-offset-4 hover:text-foreground">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
