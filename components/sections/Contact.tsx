"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5" />
                <a href="mailto:contact@example.com" className="hover:text-primary">
                  htunlynnkhant@gamil.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="h-5 w-5" />
                <a href="https://github.com/HtunLynnKhant" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  GitHub Profile
                </a>
              </div>
{/*               <div className="flex items-center space-x-4">
                <Linkedin className="h-5 w-5" />
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  LinkedIn Profile
                </a>
              </div> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[100px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
