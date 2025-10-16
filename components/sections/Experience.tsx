"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, CheckCircle } from "lucide-react";

const experiences = [
  // {
  //   title: "Remote Full-Stack Developer",
  //   company: "Myanmar Online Entrepreneur (MOE)",
  //   location: "Remote",
  //   period: "Jul 2025 – Present",
  //   type: "Current",
  //   achievements: [
  //     "Designing and developing scalable web platforms for e-commerce and digital services using Laravel, React, and Node.js",
  //     "Integrating secure payment gateways and RESTful APIs to enhance transaction reliability",
  //     "Collaborating remotely with cross-functional teams to deliver new features and system improvements on schedule",
  //   ],
  //   technologies: [
  //     "Laravel",
  //     "React",
  //     "Node.js",
  //     "RESTful APIs",
  //     "Payment Gateways",
  //   ],
  //   color: "bg-green-500/10 text-green-600 dark:text-green-400",
  // },
  {
    title: "Remote Backend Developer",
    company: "Startrick Sdn Bhd",
    location: "Malaysia",
    period: "Jun 2024 – Apr 2025",
    type: "Previous",
    achievements: [
      "Developed and optimized backend systems and APIs in Python, Node.js, and PHP, reducing API latency by 35%",
      "Enhanced MySQL/PostgreSQL performance to support 50K+ daily requests with zero downtime",
      "Implemented Docker-based CI/CD pipelines, cutting deployment time from hours to under 15 minutes and speeding feature delivery by 20%",
    ],
    technologies: [
      "Python",
      "Node.js",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "CI/CD",
    ],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "System Developer",
    company: "MPT-KSGM",
    location: "Myanmar",
    period: "Aug 2023 – Apr 2024",
    type: "Previous",
    achievements: [
      "Built responsive web applications using Django, HTML, CSS, JavaScript, PHP, and SQL, reducing page load time by 25%",
      "Integrated and optimized RESTful APIs, boosting data processing efficiency by 15%",
      "Coordinated with cross-functional teams to deliver projects 10% ahead of schedule",
    ],
    technologies: [
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "SQL",
      "RESTful APIs",
    ],
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Web Developer",
    company: "Royal Express",
    location: "Myanmar",
    period: "Jul 2022 – Aug 2023",
    type: "Previous",
    achievements: [
      "Developed and maintained websites with Laravel, Spatie, HTML, CSS, JavaScript, and SQL",
      "Built secure authentication systems, eliminating unauthorized access attempts",
      "Enhanced mobile responsiveness, increasing mobile engagement by 35%",
    ],
    technologies: [
      "Laravel",
      "Spatie",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Authentication",
    ],
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
            Professional Journey
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Over 3 years of progressive experience in full-stack development,
            backend optimization, and system architecture
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 md:left-6.5 w-3 h-3 rounded-full border-2 border-background ${
                      exp.type === "Current" ? "bg-green-500" : "bg-primary"
                    } shadow-lg`}
                  ></div>

                  {/* Content card */}
                  <div className="ml-8 md:ml-16">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-primary">
                      <CardHeader className="pb-3">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                                {exp.title}
                              </CardTitle>
                              {exp.type === "Current" && (
                                <Badge className="bg-green-500/10 text-green-600 border-green-200 dark:text-green-400 text-xs">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <div className="space-y-1">
                              <p className="text-base font-semibold text-muted-foreground">
                                {exp.company}
                              </p>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {exp.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {exp.period}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <TrendingUp className="h-3 w-3 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start gap-2 text-xs text-muted-foreground"
                              >
                                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs px-2 py-0.5 hover:bg-primary/10 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
