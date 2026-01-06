"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Code2,
  Zap,
  Globe,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Cpu,
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
    text: "High-Performance APIs",
    color: "text-cyan-400",
    glow: "neon-glow",
  },
  {
    icon: <Globe className="h-4 w-4" />,
    text: "50K+ Daily Requests",
    color: "text-purple-400",
    glow: "neon-glow-purple",
  },
  {
    icon: <Code2 className="h-4 w-4" />,
    text: "3+ Years Experience",
    color: "text-pink-400",
    glow: "neon-glow-pink",
  },
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {/* Animated Neon Background */}
      <div className="absolute inset-0 -z-10">
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-30" />
        
        {/* Animated Gradient Orbs */}
        {mounted && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
            />
          </>
        )}

        {/* Floating Particles */}
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative">
        {/* Decorative Elements */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border border-cyan-500/30 rounded-full neon-border"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border border-purple-500/30 rounded-full flex items-center justify-center"
              >
                <Terminal className="w-8 h-8 text-cyan-400 animate-pulse" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 relative"
        >
          {mounted && (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl -z-10"
            />
          )}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight">
            <span className="block mb-2 text-cyan-400/80">Hi, I&apos;m</span>
            <span className="neon-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-shift bg-[length:200%_auto]">
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
          <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold min-h-[3rem] flex items-center justify-center flex-wrap gap-2">
            <span className="text-cyan-300/70">I&apos;m a</span>
            <span className="text-purple-400 neon-text-purple relative inline-block min-w-[300px] text-left">
              {displayText}
              {mounted && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="absolute -right-1 top-0 w-1 h-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                />
              )}
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
          <p className="text-base md:text-lg text-cyan-100/70 max-w-3xl mx-auto leading-relaxed">
            Building high-performance web applications with{" "}
            <span className="text-cyan-400 font-semibold neon-text">3+ years</span> of
            hands-on experience. Specialized in{" "}
            <span className="text-purple-400 font-semibold neon-text-purple">full-stack development</span>,{" "}
            <span className="text-pink-400 font-semibold neon-text-pink">API optimization</span>, and
            architecting systems that handle{" "}
            <span className="text-cyan-400 font-semibold neon-text">
              50K+ daily requests
            </span>{" "}
            with seamless scalability.
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
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex items-center gap-2 glass-effect ${achievement.glow} rounded-full px-5 py-3 hover:bg-white/5 transition-all duration-300 cursor-pointer group`}
              >
                <span className={`${achievement.color} group-hover:animate-pulse`}>
                  {achievement.icon}
                </span>
                <span className="text-sm font-medium text-cyan-100/90">{achievement.text}</span>
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
              className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 neon-glow border-0 transition-all duration-300"
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
              className="group px-8 py-6 text-lg font-semibold glass-effect neon-border hover:bg-white/5 text-cyan-300 hover:text-cyan-200 transition-all duration-300"
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

        {/* Tech Stack Icons */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="mb-8"
          >
            <div className="flex justify-center items-center gap-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-12 h-12 glass-effect neon-border rounded-lg flex items-center justify-center hover:neon-glow transition-all duration-300 cursor-pointer"
                >
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center mb-8"
        >
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            animate={mounted ? { y: [0, 10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-2 text-cyan-400/70 hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <span className="text-xs font-medium group-hover:font-semibold transition-all neon-text">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2 neon-border">
              {mounted && (
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                />
              )}
            </div>
          </motion.button>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center justify-center gap-2 text-cyan-300/60"
        >
          <MapPin className="h-4 w-4 text-pink-400" />
          <span className="text-sm">Based in Malaysia • Working Globally</span>
        </motion.div>
      </div>
    </section>
  );
}
