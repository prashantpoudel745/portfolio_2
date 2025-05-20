"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-2xl"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="gradient-text px-5">PF</span>
          </Link>
        </motion.div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop Menu */}
        <motion.nav
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                activeSection === item.href.substring(1)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors hover:text-primary",
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
