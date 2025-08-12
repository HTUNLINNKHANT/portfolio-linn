"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master's Degree in Information Technology",
    shortDegree: "M.IT",
    institution: "INTI International University",
    location: "Malaysia",
    period: "2025 - Present",
    status: "Current",
    description: "Focus on advanced software development, cloud computing, and Project Management. Engaged in research on scalable and secure enterprise solutions.",
    highlights: [
      "Advanced Software Development",
      "Cloud Computing & Architecture",
      "Project Management Methodologies",
      "Research: Scalable Enterprise Solutions"
    ],
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    shortDegree: "B.CS",
    institution: "Edinburgh Napier University",
    location: "Scotland, UK",
    period: "2020 - 2021",
    status: "Completed",
    description: "Studied Project Management for Information Systems, DevOps, Web Technologies, Software Development, and Database Systems. Completed a capstone project building a responsive web application using Laravel and MySQL.",
    highlights: [
      "Project Management for Information Systems",
      "DevOps & Software Development",
      "Web Technologies & Database Systems",
      "Capstone: Laravel & MySQL Web App"
    ],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    icon: <Award className="h-5 w-5" />
  },
  {
    degree: "Pearson BTEC Level 5 Higher National Diploma in Computing",
    shortDegree: "HND",
    institution: "Info Myanmar University & Edinburgh Napier University",
    location: "Myanmar",
    period: "2019 - 2020",
    status: "Completed",
    description: "Specialized in programming, networking, and database management. Achieved distinction in web development modules using PHP and JavaScript.",
    highlights: [
      "Programming (PHP & JavaScript)",
      "Database Management Systems",
      "Computer Networks & Security",
      "Web Development (Distinction)"
    ],
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    icon: <BookOpen className="h-5 w-5" />
  }
];



export default function Education() {
  return (
    <section id="education" className="py-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8 max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
            Academic Journey
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Education & Qualifications
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Comprehensive academic foundation in computer science and information technology from prestigious international institutions
          </p>
        </div>



        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-2.5 md:left-6.5 w-3 h-3 rounded-full border-2 border-background ${
                  edu.status === 'Current' ? 'bg-green-500' : 'bg-primary'
                } shadow-lg`}></div>
                
                {/* Content card */}
                <div className="ml-8 md:ml-16">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-primary">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${edu.color}`}>
                              {edu.icon}
                            </div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                                {edu.degree}
                              </CardTitle>
                              {edu.status === 'Current' && (
                                <Badge className="bg-green-500/10 text-green-600 border-green-200 dark:text-green-400 text-xs">
                                  Current
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-base font-semibold text-muted-foreground">
                              {edu.institution}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {edu.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {edu.period}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full">
                          <span className="text-sm font-bold text-primary">{edu.shortDegree}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Key Highlights */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Award className="h-3 w-3 text-primary" />
                          Key Areas of Study
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span>{highlight}</span>
                            </div>
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

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-primary/10">
            <CardHeader className="text-center pb-4">
              <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Academic Excellence
              </h3>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Comprehensive education spanning multiple countries and institutions, providing a global perspective on technology and innovation.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[
                    'International Collaboration', 'Cross-Cultural Learning', 'Advanced Computing', 
                    'Research Methods', 'Industry Standards', 'Professional Development'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="outline" 
                        className="text-xs px-3 py-1 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
