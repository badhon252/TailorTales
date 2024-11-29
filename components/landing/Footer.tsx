"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="w-8 h-8 bg-accent rounded-full"
                aria-hidden="true"
              />
              <span className="font-heading text-xl font-bold">
                TailorTales
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Empowering small businesses with AI-driven storytelling.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Stay Updated
            </h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-r-none"
                  aria-label="Email for newsletter"
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-black/50 mx-2"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                Subscribe to our newsletter for updates and tips.
              </p>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} TailorTales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
