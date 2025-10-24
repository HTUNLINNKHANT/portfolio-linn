"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Coffee,
  ExternalLink,
  Copy,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "htunlynnkhant@gmail.com",
    href: "mailto:htunlynnkhant@gmail.com",
    description: "Best for detailed inquiries",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    copyable: true,
  },
  {
    icon: (
      <svg
        height="20"
        viewBox="0 -3.1 2490.3 2493"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="1245.2" cy="1243.4" fill="#fff" rx="1217.6" ry="1246.5" />
        <path
          d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1"
          fill="#5c6bc0"
        />
      </svg>
    ),
    label: "GitHub",
    value: "HtunLinnKhant",
    href: "https://github.com/HTUNLINNKHANT",
    description: "Check out my projects",
    color: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
    copyable: false,
  },
  {
    icon: (
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 20H7v-8h2v8zm-1-9.2c-.65 0-1.2-.55-1.2-1.2s.55-1.2 1.2-1.2 1.2.55 1.2 1.2-.55 1.2-1.2 1.2zm12 9.2h-2v-4.6c0-1.1-.02-2.5-1.5-2.5-1.5 0-1.7 1.2-1.7 2.4v4.7h-2v-8h2v1.1c.3-.6 1.1-1.1 2.3-1.1 2.5 0 2.9 1.6 2.9 3.6v4.4z"
          fill="#0077B5"
        />
      </svg>
    ),
    label: "LinkedIn",
    value: "htun-linn-khant",
    href: "https://linkedin.com/in/htun-linn-khant-60a308243/",
    description: "Professional networking",
    color: "bg-blue-600/10 text-blue-700 dark:text-blue-300",
    copyable: false,
  },
  {
    icon: (
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
          fill="#25D366"
        />
      </svg>
    ),
    label: "WhatsApp",
    value: "+60 14-299 5207",
    href: "https://wa.me/60142995207",
    description: "Quick messages",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    copyable: false,
  },
];

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
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
            Let&apos;s Connect
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let&apos;s discuss how I
            can help bring your ideas to life with cutting-edge technology
            solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Methods */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Contact Methods
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${method.color}`}
                        >
                          {method.icon}
                        </div>
                        <div>
                          <div className="font-medium text-sm">
                            {method.label}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {method.description}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {method.copyable && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() =>
                              copyToClipboard(method.value, method.label)
                            }
                          >
                            {copiedItem === method.label ? (
                              <CheckCircle className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          asChild
                        >
                          <a
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    {method.label === "Email" && (
                      <div className="text-xs text-muted-foreground mt-1 ml-12">
                        {method.value}
                      </div>
                    )}
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="overflow-hidden">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">
                        Malaysia (Remote)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-muted-foreground">
                        Within 24 hours
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Coffee className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Availability</div>
                      <div className="text-muted-foreground">
                        Open for projects
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-2 border-primary/10">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                    <Send className="h-8 w-8 text-white" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">
                      Ready to Start Your Project?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I&apos;m always excited to work on new challenges and
                      innovative projects. Whether you need a full-stack web
                      application, backend optimization, or technical
                      consultation, I&apos;m here to help turn your vision into
                      reality.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="w-full group" asChild>
                        <a href="mailto:htunlynnkhant@gmail.com">
                          <Mail className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                          Send Email
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full group"
                        asChild
                      >
                        <a
                          href="https://wa.me/60142995207"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      Prefer a different platform? Feel free to reach out
                      through any of the contact methods on the left.
                    </div>
                  </div>

                  {/* Skills highlight */}
                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">
                      What I can help you with:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {[
                        "Full-Stack Development",
                        "API Development",
                        "Database Optimization",
                        "DevOps & CI/CD",
                        "Performance Tuning",
                        "Technical Consultation",
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
                            className="text-xs px-2 py-1 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
