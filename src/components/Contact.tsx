"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/ghulammustafa119",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ghulam-mustafa-08b5092b3/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:ghulammustafabhutto77@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-3xl font-bold"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 text-muted"
        >
          Feel free to reach out for collaborations, projects, or just a
          friendly chat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm text-muted transition-all hover:border-primary/40 hover:text-foreground"
            >
              <contact.icon size={18} />
              {contact.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
