"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe, Server, UserCircle2 } from "lucide-react";

const highlights = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Full Stack Developer",
    description: "Experienced in both frontend and backend development"
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend Specialist",
    description: "Expert in Laravel, Django, and database systems"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Solutions",
    description: "Building scalable and efficient web applications"
  },
  {
    icon: <UserCircle2 className="h-6 w-6" />,
    title: "Team Player",
    description: "Collaborative approach to problem-solving"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="px-4 py-1 text-sm">
            About Me
          </Badge>
          <h2 className="text-3xl font-bold">Professional Journey</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer currently working as a Back-end Developer at Startrick Sdn Bhd. With a strong foundation in computer science from Info Myanmar University and Edinburgh Napier University, I bring a comprehensive understanding of modern web technologies and best practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans across the full development stack, from crafting intuitive user interfaces to building robust backend systems. I specialize in Laravel and Django frameworks, with extensive experience in database design and API development. I'm committed to creating efficient, scalable solutions that drive business success.
                </p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}