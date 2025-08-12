"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  Code2,
  Zap,
  Globe,
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const typewriterTexts = [
  "Full-Stack Developer",
  "Backend Specialist",
  "API Architect",
  "Remote Expert",
  "Problem Solver",
];

const achievements = [
  {
    icon: <Zap className="h-4 w-4" />,
    text: "35% API Speed Boost",
    color: "text-yellow-500",
  },
  {
    icon: <Globe className="h-4 w-4" />,
    text: "50K+ Daily Requests",
    color: "text-blue-500",
  },
  {
    icon: <Code2 className="h-4 w-4" />,
    text: "3+ Years Experience",
    color: "text-green-500",
  },
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typewriterTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight">
            <span className="block mb-2">Hi, I&apos;m</span>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Htun Linn Khant
            </span>
          </h1>
        </motion.div>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-muted-foreground min-h-[3rem] flex items-center justify-center">
            <span className="mr-2">I&apos;m a</span>
            <span className="text-primary relative">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="absolute right-0 top-0 w-0.5 h-full bg-primary ml-1"
              />
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting scalable web solutions with{" "}
            <span className="text-primary font-semibold">3+ years</span> of
            expertise. Specialized in optimizing performance, reducing API
            response times by{" "}
            <span className="text-primary font-semibold">35%</span>, and
            handling{" "}
            <span className="text-primary font-semibold">
              50K+ daily requests
            </span>
            .
          </p>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 hover:bg-background/80 transition-all duration-300"
              >
                <span className={achievement.color}>{achievement.icon}</span>
                <span className="text-sm font-medium">{achievement.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Let&apos;s Work Together
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="#about">
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex justify-center mb-8"
        >
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <span className="text-xs font-medium group-hover:font-semibold transition-all">
              Scroll to explore
            </span>
            <ArrowDown className="h-4 w-4 group-hover:animate-bounce" />
          </motion.button>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center justify-center gap-2 text-muted-foreground"
        >
          <MapPin className="h-4 w-4" />
          <span className="text-sm">Based in Malaysia • Working Globally</span>
        </motion.div>
      </div>
    </section>
  );
}
