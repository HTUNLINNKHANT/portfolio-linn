"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Master's Degree in Information Technology",
    institution: "INTI International University",
    period: "2025 - present",
    description: "Advanced studies in IT focusing on practical applications, including software development, data analytics, and cybersecurity, with hands-on project experience."
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Edinburgh Napier University",
    period: "2020 - 2021",
    description: "Collaborative program between Info Myanmar University and Edinburgh Napier University"
  },
  {
    degree: "Pearson BTEC Level 5 Higher National Diploma in Computing",
    institution: "Info Myanmar University & Edinburgh Napier University",
    period: "2019 - 2020",
    description: "Advanced computing studies with a focus on practical applications"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
