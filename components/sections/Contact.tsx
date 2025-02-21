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
        
        <div className="mx-auto max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                {/* Custom SVG Icon for Mail */}
                <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.4200000000001"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" fill="#4285f4"/><path d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" fill="#34a853"/><path d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" fill="#fbbc04"/></g><path d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" fill="#ea4335"/><path d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" fill="#c5221f" fill-rule="nonzero"/></g></svg>
                <a href="mailto:contact@example.com" className="hover:text-primary">
                  htunlynnkhant@gamil.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <svg height="20" viewBox="0 -3.1 2490.3 2493" width="20" xmlns="http://www.w3.org/2000/svg"><ellipse cx="1245.2" cy="1243.4" fill="#fff" rx="1217.6" ry="1246.5"/><path d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1" fill="#5c6bc0"/></svg>
                <a href="https://github.com/HtunLynnKhant" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 20H7v-8h2v8zm-1-9.2c-.65 0-1.2-.55-1.2-1.2s.55-1.2 1.2-1.2 1.2.55 1.2 1.2-.55 1.2-1.2 1.2zm12 9.2h-2v-4.6c0-1.1-.02-2.5-1.5-2.5-1.5 0-1.7 1.2-1.7 2.4v4.7h-2v-8h2v1.1c.3-.6 1.1-1.1 2.3-1.1 2.5 0 2.9 1.6 2.9 3.6v4.4z" fill="#0077B5"/>
              </svg>
                <a href="https://linkedin.com/in/htun-linn-khant-60a308243/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-4">
                  <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 2.21.63 4.27 1.73 6.03L0 24l5.97-1.73C7.73 22.37 9.69 23 12 23c6.63 0 12-5.37 12-12S18.63 0 12 0zm6.3 17.3c-.3.3-.7.3-1 0l-1.5-1.5c-.3-.3-.3-.7 0-1l1.5-1.5c.3-.3.7-.3 1 0l1.5 1.5c.3.3.3.7 0 1l-1.5 1.5zm-3.6-3.6c-.3.3-.7.3-1 0l-1.5-1.5c-.3-.3-.3-.7 0-1l1.5-1.5c.3-.3.7-.3 1 0l1.5 1.5c.3.3.3.7 0 1l-1.5 1.5zm-3.6-3.6c-.3.3-.7.3-1 0l-1.5-1.5c-.3-.3-.3-.7 0-1l1.5-1.5c.3-.3.7-.3 1 0l1.5 1.5c.3.3.3.7 0 1l-1.5 1.5z" fill="#25D366"/>
                </svg>
                  <a href="https://wa.me/142995207" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      WhatsApp
                  </a>
              </div>
            </CardContent>
          </Card>

          
        </div>
      </motion.div>
    </section>
  );
}
