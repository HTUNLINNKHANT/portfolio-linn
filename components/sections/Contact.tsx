import { Mail, MapPin, Clock, ExternalLink, Github, Linkedin, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "htunlynnkhant@gmail.com",
    href: "mailto:htunlynnkhant@gmail.com",
    icon: <Mail className="h-4 w-4 text-gray-900" />,
  },
  {
    label: "GitHub",
    value: "HtunLinnKhant",
    href: "https://github.com/HTUNLINNKHANT",
    icon: <Github className="h-4 w-4 text-gray-900" />,
  },
  {
    label: "LinkedIn",
    value: "htun-linn-khant",
    href: "https://linkedin.com/in/htun-linn-khant-60a308243/",
    icon: <Linkedin className="h-4 w-4 text-gray-900" />,
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/60142995207",
    icon: <Phone className="h-4 w-4 text-gray-900" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
        <div className="mt-1 w-10 h-0.5 bg-gray-900 rounded-full" />
        <p className="mt-3 text-gray-500 text-sm">
          Ready to collaborate? Let&apos;s discuss how I can help bring your ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact links */}
        <div className="p-6 rounded-2xl border border-gray-100 bg-white">
          <h3 className="font-semibold text-gray-900 mb-5">Get in touch</h3>
          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{link.label}</div>
                    <div className="text-sm font-medium text-gray-900 mt-0.5">{link.value}</div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-gray-900 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Details + CTA */}
        <div className="p-6 rounded-2xl border border-gray-100 bg-white flex flex-col">
          <h3 className="font-semibold text-gray-900 mb-5">Details</h3>
          <div className="space-y-4 flex-1">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 w-4 text-gray-900" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Location</div>
                <div className="text-sm text-gray-500">Malaysia (Remote)</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4 text-gray-900" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Response Time</div>
                <div className="text-sm text-gray-500">Within 24 hours</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Mail className="h-4 w-4 text-gray-900" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Availability</div>
                <div className="text-sm text-gray-500">Open for projects</div>
              </div>
            </div>
          </div>

          <a
            href="mailto:htunlynnkhant@gmail.com"
            className="mt-6 inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
