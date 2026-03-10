"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-3xl font-bold"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-muted leading-relaxed"
        >
          <p>
            I&apos;m an AI developer passionate about building intelligent,
            autonomous systems that solve real-world problems. My work focuses on
            AI agents, automation pipelines, and practical developer tools that
            make workflows faster and smarter.
          </p>
          <p>
            I&apos;m continuously learning and experimenting with the latest in
            AI — from agent frameworks and LLM integrations to full-stack
            applications powered by Python, FastAPI, and Next.js. I believe in
            shipping clean, functional software that creates real value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
