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
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce web application with product listings, cart functionality, and a modern responsive UI.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Sanity CMS", "Stripe", "Clerk", "Shadcn/ui"],
    github: "https://github.com/ghulammustafa119/e-commerce-website",
    liveDemo: "https://e-commerce-website-tau-azure.vercel.app",
    image: "/ecommerce.png",
  },
  {
    title: "Physical AI & Humanoid Robotics Book",
    description:
      "An interactive online book exploring physical AI and humanoid robotics concepts, hosted on GitHub Pages.",
    techStack: ["Docusaurus 3", "React", "TypeScript", "FastAPI", "Neon Postgres", "Qdrant", "Cohere"],
    github: "https://github.com/ghulammustafa119/physical-ai-humanoid-robotics-book",
    liveDemo: "https://ghulammustafa119.github.io/physical-ai-humanoid-robotics-book/",
    image: "/robotics-book.png",
  },
  {
    title: "Hackathon Todo App",
    description:
      "A sleek todo application built during a hackathon with task management features and clean UI.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "Neon Postgres", "Cohere", "Docker", "Kubernetes", "Dapr"],
    github: "https://github.com/ghulammustafa119/hackathon_todo",
    liveDemo: "https://hackathon-todo-beryl.vercel.app",
    image: "/todo.png",
  },
  {
    title: "AI Employee",
    description:
      "An agent-based automation system that handles tasks autonomously using AI agents, tool integrations, and intelligent workflows.",
    techStack: ["Python", "Groq", "Playwright", "Gmail API", "MCP Servers", "Node.js"],
    github: "https://github.com/ghulammustafa119/ai_employee",
    image: "/ai-employee.png",
  },
  {
    title: "Secure Data Encryption",
    description:
      "A Streamlit-based encryption and decryption tool for securely handling sensitive data with multiple cipher algorithms.",
    techStack: ["Python", "Streamlit", "Fernet Encryption", "PBKDF2-HMAC", "JSON"],
    github: "https://github.com/ghulammustafa119/secure_data_encryption",
    liveDemo: "https://ghulammustafa119-secure-data-encr-secure-data-encryption-pgstwq.streamlit.app/",
    image: "/secure-data.png",
  },
  {
    title: "Resume Builder",
    description:
      "A progressive resume builder with form validation, dynamic content generation, and shareable links across milestone versions.",
    techStack: ["HTML5", "CSS3", "TypeScript"],
    github: "https://github.com/ghulammustafa119/hackathon",
    liveDemo: "https://milestone5-ghulammustafabhutto-s-projects.vercel.app",
    image: "/resume.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and a modern dark design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ghulammustafa119/my_portfolio_wbsite",
    image: "/personal.png",
  },
];
