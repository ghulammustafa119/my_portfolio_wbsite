export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  liveDemo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "AI Employee",
    description:
      "An agent-based automation system that handles tasks autonomously using AI agents, tool integrations, and intelligent workflows.",
    techStack: ["Python", "Agents SDK", "FastAPI", "OpenAI"],
    github: "https://github.com/yourusername/ai-employee",
  },
  {
    title: "Secure Data Encryption",
    description:
      "A Streamlit-based encryption and decryption tool for securely handling sensitive data with multiple cipher algorithms.",
    techStack: ["Python", "Streamlit", "Cryptography"],
    github: "https://github.com/yourusername/secure-data-encryption",
    liveDemo: "https://secure-data-encryption.streamlit.app",
  },
  {
    title: "Python Streamlit Tools",
    description:
      "A collection of practical developer utilities built with Streamlit — including converters, generators, and mini productivity apps.",
    techStack: ["Python", "Streamlit"],
    github: "https://github.com/yourusername/python-streamlit-tools",
    liveDemo: "https://python-streamlit-tools.streamlit.app",
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and a modern dark design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
  },
];
