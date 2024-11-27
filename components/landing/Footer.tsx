import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">TailorTales</h3>
            <p className="text-sm text-secondary-lavender">
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
                  className="hover:text-accent transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-accent transition-colors duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors duration-300"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors duration-300"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors duration-300"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-secondary-lavender">
            &copy; {new Date().getFullYear()} TailorTales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
