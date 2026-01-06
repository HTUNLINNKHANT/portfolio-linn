"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "skills",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;
      let currentSection = "";

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (i === sections.length - 1) {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const isNearBottom = window.scrollY + windowHeight >= documentHeight - 50;
            
            if (scrollPosition >= offsetTop || isNearBottom) {
              currentSection = section;
            }
          } else {
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              currentSection = section;
            }
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "glass-effect neon-border border-b shadow-lg shadow-cyan-500/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#" className="flex items-center gap-2 text-xl font-bold">
              <div className="w-10 h-10 rounded-lg glass-effect neon-glow flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="neon-text text-cyan-400">HLK</span>
            </a>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                      isActive
                        ? "text-cyan-400 neon-text glass-effect neon-border"
                        : "text-cyan-100/60 hover:text-cyan-400 hover:glass-effect"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span 
                        layoutId="activeNav"
                        className="absolute inset-0 bg-cyan-500/10 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg glass-effect neon-border hover:neon-glow transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-cyan-400" />
              ) : (
                <Menu className="h-6 w-6 text-cyan-400" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 glass-effect border-t neon-border">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative",
                    isActive
                      ? "text-cyan-400 neon-text glass-effect neon-border"
                      : "text-cyan-100/60 hover:text-cyan-400 hover:glass-effect"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-0 top-0 w-1 h-full bg-cyan-400 rounded-r-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  )}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
