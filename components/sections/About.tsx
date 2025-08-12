"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Globe,
  Server,
  UserCircle2,
  Download,
  MapPin,
  Calendar,
  GraduationCap,
  Wifi,
  Building2,
  Briefcase,
} from "lucide-react";

const highlights = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Full Stack Developer",
    description: "Experienced in both frontend and backend development",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend Specialist",
    description: "Expert in Laravel, Django, and database systems",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Solutions",
    description: "Building scalable and efficient web applications",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Remote Expert",
    description: "Experienced in remote collaboration and delivery",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
];

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Technologies", value: "15+" },
  { label: "Remote Projects", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="py-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-1 text-sm font-medium"
            >
              About Me
            </Badge>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center shadow-lg">
                      <UserCircle2 className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Htun Linn Khant</h3>
                    <p className="text-primary font-medium">
                      Full Stack Developer
                    </p>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600 dark:text-green-400">
                        Available for Remote Work
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-sm p-3 bg-muted/50 rounded-lg">
                      <Building2 className="h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium">Currently at MOE</div>
                        <div className="text-muted-foreground">
                          Remote Developer
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm p-3 bg-muted/50 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium">Based in Malaysia</div>
                        <div className="text-muted-foreground">
                          Working Globally
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm p-3 bg-muted/50 rounded-lg">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium">Computer Science</div>
                        <div className="text-muted-foreground">
                          Info Myanmar & Edinburgh Napier
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Button className="w-full group" variant="outline">
                    <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Download CV
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Description & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Description */}
            <Card className="overflow-hidden mb-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <span className="w-1 h-6 bg-gradient-to-b from-primary to-primary/60 rounded-full mr-3"></span>
                      About Me
                    </h3>
                    <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                      <p>
                        I am a results-driven Full-Stack Developer with over
                        three years of experience designing, building, and
                        optimizing web applications, APIs, and backend systems.
                        Skilled in PHP, Python, Node.js, Laravel, Django, and
                        modern frontend technologies, I specialize in creating
                        scalable, secure, and high-performance solutions. My
                        work has reduced API response times by up to 35%, scaled
                        platforms to handle 50,000+ daily requests, and
                        streamlined deployments with Docker and CI/CD pipelines.
                        I thrive in collaborative, fast-paced environments where
                        problem-solving, clean code, and business impact go hand
                        in hand.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg hover:scale-105 transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${item.color}`}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
