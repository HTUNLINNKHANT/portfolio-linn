"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "experience", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 100;
      let currentSection = "";

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (i === sections.length - 1) {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const isNearBottom = window.scrollY + windowHeight >= documentHeight - 50;
            if (scrollPosition >= offsetTop || isNearBottom) {
              currentSection = sections[i];
            }
          } else {
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              currentSection = sections[i];
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
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[60px]">
          {/* Name / Logo */}
          <a href="#" className="group flex items-center gap-2">
            <span className="w-8 h-8 rounded-md bg-gray-900 flex items-center justify-center text-white text-xs font-bold">
              H
            </span>
            <span className="text-sm font-semibold text-gray-900 hidden sm:inline">
              Htun Linn Khant
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-[13px] font-medium tracking-wide uppercase transition-colors",
                    isActive
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-700"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contact
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -mr-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-50">
          <div className="px-6 py-5 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-gray-900 bg-gray-50"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href="#contact"
              className="flex items-center justify-center gap-1.5 mt-3 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
