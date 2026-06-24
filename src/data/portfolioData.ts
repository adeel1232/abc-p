export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools & Deployment' | 'Core Competencies';
  percentage: number;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'Frontend' | 'React';
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const portfolioData = {
  personalInfo: {
    name: "Adeel Ahmad",
    title: "Full Stack MERN & Frontend Developer",
    shortIntro: "Passionate Full Stack Web Developer specializing in building exceptional digital experiences. Focused on clean code, responsive design, and cutting-edge web technologies like React, Node.js, and MongoDB.",
    aboutIntro: "Hello! I'm Adeel Ahmad, a dedicated Full Stack Web Developer with a strong passion for building responsive, scalable, and visually stunning web applications. With years of hands-on experience in MERN stack development, I bridge the gap between elegant user interfaces and robust backend architectures. I thrive in challenging environments where I can leverage my problem-solving skills to transform complex requirements into seamless web solutions.",
    email: "adeeljs.dev@gmail.com",
    phone: "+92 329 5391301",
    whatsapp: "+92 329 5391301",
    location: "Lahore, Pakistan / Available Worldwide",
    availability: "Open for Freelance & Full-time Roles",
    languages: ["English (Fluent)", "Urdu (Native)"],
    yearsExperience: 1,
    completedProjects: 8,
    happyClients: 8,
    satisfactionRate: 99,
    socials: {
      github: "https://github.com/adeel1232",
      linkedin: "https://www.linkedin.com/in/adeel-ahmad-chand-429010373/",
      twitter: "https://twitter.com",
      whatsapp: "https://wa.me/923295391301"
    }
  },

  skills: [
    { name: "Frontend Development", category: "Core Competencies", percentage: 95, icon: "Layout", color: "#38bdf8" },
    { name: "Backend Development", category: "Core Competencies", percentage: 88, icon: "Server", color: "#10b981" },
    { name: "React JS", category: "Frontend", percentage: 96, icon: "Atom", color: "#06b6d4" },
    { name: "JavaScript", category: "Frontend", percentage: 92, icon: "Code2", color: "#f59e0b" },
    { name: "HTML5", category: "Frontend", percentage: 98, icon: "FileCode2", color: "#f97316" },
    { name: "CSS3", category: "Frontend", percentage: 95, icon: "Palette", color: "#3b82f6" },
    { name: "Tailwind CSS", category: "Frontend", percentage: 96, icon: "Wind", color: "#06b6d4" },
    { name: "Node.js", category: "Backend", percentage: 88, icon: "Cpu", color: "#22c55e" },
    { name: "Express.js", category: "Backend", percentage: 86, icon: "Layers", color: "#64748b" },
    { name: "MongoDB", category: "Backend", percentage: 85, icon: "Database", color: "#10b981" },
    { name: "Firebase", category: "Backend", percentage: 82, icon: "Flame", color: "#f59e0b" },
    { name: "Git & GitHub", category: "Tools & Deployment", percentage: 92, icon: "GitBranch", color: "#ef4444" },
    { name: "Responsive Design", category: "Core Competencies", percentage: 98, icon: "Smartphone", color: "#ec4899" },
    { name: "API Integration", category: "Core Competencies", percentage: 94, icon: "Network", color: "#8b5cf6" },
    { name: "UI/UX Design", category: "Core Competencies", percentage: 88, icon: "Figma", color: "#ec4899" },
    { name: "Deployment", category: "Tools & Deployment", percentage: 90, icon: "Rocket", color: "#3b82f6" },
    { name: "Vercel", category: "Tools & Deployment", percentage: 95, icon: "Triangle", color: "#ffffff" },
    { name: "Netlify", category: "Tools & Deployment", percentage: 90, icon: "Box", color: "#14b8a6" }
  ] as Skill[],

  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Custom, lightning-fast web applications built from scratch with high performance, scalability, and robust security in mind.",
      icon: "Code",
      features: ["Custom Web Apps", "SEO Optimized", "Performance Tuning", "Cross-Browser Compatible"]
    },
    {
      id: 2,
      title: "Responsive Website Design",
      description: "Flawless responsive layouts that adapt beautifully to all screen sizes, ensuring an optimal user experience on mobile, tablet, and desktop.",
      icon: "Smartphone",
      features: ["Mobile-First Approach", "Fluid Grid Systems", "Retina Ready Graphics", "Intuitive Navigation"]
    },
    {
      id: 3,
      title: "React Development",
      description: "Dynamic, modern Single Page Applications (SPAs) built with React JS, Redux/Zustand, and Framer Motion for buttery-smooth animations.",
      icon: "Atom",
      features: ["Component Architecture", "State Management", "Custom Hooks", "Framer Motion Animations"]
    },
    {
      id: 4,
      title: "Full Stack Development",
      description: "End-to-end MERN stack solutions bridging powerful Node.js/Express backends with MongoDB databases and immersive frontends.",
      icon: "Server",
      features: ["RESTful API Architecture", "Database Design", "Authentication & JWT", "Server-Side Logic"]
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Crafting beautiful, accessible, and user-centered interfaces with modern glassmorphism, dark themes, and high conversion rates.",
      icon: "Palette",
      features: ["Figma to Code", "Interactive Prototypes", "Design System Creation", "Accessibility (a11y)"]
    },
    {
      id: 6,
      title: "API Integration",
      description: "Seamless third-party API integration, webhook listeners, payment gateways, and backend service communication.",
      icon: "Network",
      features: ["Stripe / PayPal", "OAuth Authentication", "GraphQL / REST", "Real-time WebSockets"]
    }
  ] as Service[],

  projects: [
    {
      id: 1,
      title: "Expenses Builder E-commerce Store",
      description: "A fully functional MERN e-commerce store with state management, Stripe payment processing, and dynamic admin panel.",
      longDescription: "Built with React, Node.js, Express, and MongoDB. Features secure JWT authentication, rich product filtering, reviews & ratings, persistent cart, order tracking, and a comprehensive admin management dashboard.",
      category: "Full Stack",
      image: "Capture.PNG",
      tags: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Stripe", "Tailwind CSS"],
      liveUrl: "https://budget-app-seven-wine.vercel.app/",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Movie Streaming App App",
      description: "Real-time communication platform supporting private rooms, multimedia file sharing, and instant push notifications.",
      longDescription: "Utilizes Socket.io for bidirectional real-time communication. Includes online status tracking, message typing indicators, read receipts, and user profile customization.",
      category: "Full Stack",
      image: "movie.png",
      tags: ["React", "Socket.io", "Express", "MongoDB", "JWT", "Tailwind"],
      liveUrl: "https://movie-app-iota-dun-15.vercel.app/",
      githubUrl: "https://github.com/adeel",
      featured: true
    },
    {
      id: 3,
      title: "Desklog - Live Analytics Dashboard",
      description: "Cryptocurrency tracking platform with interactive financial charts, watchlists, and real-time market data.",
      longDescription: "Integrates CoinGecko API to fetch live coin prices, 24h volume, and historical market charts. Implemented fully responsive charts using Chart.js and Recharts.",
      category: "React",
      image: "data:image/jpeg;base64,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",
      tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "REST API"],
      liveUrl: "https://desklog.io/",
      githubUrl: "https://github.com/",
      featured: true
    },
    {
      id: 4,
      title: "AI PromptCraft - SaaS Platform",
      description: "An AI prompt engineering and sharing hub where creators can discover, store, and test OpenAI prompts.",
      longDescription: "Frontend built with Next.js/React and Tailwind CSS. Features dark-mode first design, glassmorphic UI elements, search filtering, tag clouds, and one-click copy functionality.",
      category: "Frontend",
      image: "shop.png",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Firebase"],
      liveUrl: "https://shopping-cart-pi-puce.vercel.app/",
      githubUrl: "https://github.com/",
      featured: false
    },
    {
      id: 5,
      title: "TaskFlow - Agile Board & Kanban",
      description: "Intuitive project management tool with drag-and-drop Kanban boards, team collaboration, and deadline reminders.",
      longDescription: "Developed using React Beautiful DnD for fluid drag-and-drop operations. Allows custom columns, priority tags, sub-tasks checklist, and activity logs.",
      category: "React",
      image: "chat.png",
      tags: ["React", "Zustand", "Tailwind CSS", "LocalStorage"],
      liveUrl: "https://ai-model-eta-three.vercel.app/",
      githubUrl: "https://github.com/",
      featured: false
    },
    {
      id: 6,
      title: "Premium Architect Portfolio",
      description: "High-end visual showcase for architectural firms featuring smooth scroll animations and immersive gallery filters.",
      longDescription: "Showcases advanced CSS grid layouts, GSAP/Framer Motion scroll triggers, optimized image loading, and elegant typography suitable for premium brands.",
      category: "Frontend",
      image: "moblie.png",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      liveUrl: "https://shopping-mobile.vercel.app/",
      githubUrl: "https://github.com/adeel",
      featured: false
    }
  ] as Project[],

  experience: [
    {
      id: 1,
      role: "Senior Full Stack MERN Developer",
      company: "TechNova Solutions",
      period: "2025 - Present",
      description: "Leading the development of enterprise SaaS applications. Managing client expectations, architectural planning, and mentoring junior developers.",
      achievements: [
        "Architected scalable microservices for a fintech application processing $1M+ daily",
        "Improved website performance scores by 40% through lazy loading and bundle splitting",
        "Spearheaded migration from legacy monolithic codebase to React 18 & Node.js"
      ],
      skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "AWS"]
    },
    {
      id: 2,
      role: "Frontend React Developer",
      company: "PixelCraft Interactive",
      period: "2025 - 2026",
      description: "Developed highly interactive web applications and design systems for international clients with strict UX guidelines.",
      achievements: [
        "Built custom UI component library utilized across 12+ company products",
        "Implemented complex state management workflows using Redux Toolkit",
        "Collaborated directly with UI/UX designers to achieve pixel-perfect implementations"
      ],
      skills: ["React", "JavaScript", "Tailwind CSS", "Redux", "Figma", "Git"]
    },
    {
      id: 3,
      role: "Full Stack Web Developer",
      company: "Freelance / Global Clients",
      period: "2025 - 2026",
      description: "Delivered bespoke website solutions, e-commerce stores, and custom dashboards for startups and medium businesses globally.",
      achievements: [
        "Successfully delivered 20+ freelance web projects on time and within budget",
        "Integrated secure payment gateways (Stripe, PayPal) for various online merchants",
        "Provided ongoing maintenance, SEO optimization, and hosting support"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB", "Netlify"]
    },
    {
      id: 4,
      role: "Web Development Intern",
      company: "DevMatrix Labs",
      period: "2025 - 2026",
      description: "Assisted senior developers in building web applications, writing automated test scripts, and fixing bugs across various client sites.",
      achievements: [
        "Gained hands-on experience in MERN stack development and version control",
        "Resolved 100+ UI bugs and cross-browser compatibility issues",
        "Learned industry standard coding patterns and Agile methodologies"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"]
    }
  ] as Experience[],

  testimonials: [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Product Manager",
      company: "Nexus Dynamics",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      content: "Adeel Ahmadis an exceptional developer. He transformed our messy legacy app into a blazingly fast MERN application. His attention to detail in UI/UX and backend security is unmatched. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "Founder & CEO",
      company: "CryptoStack",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "Working with Adeel was a breeze. He delivered our crypto analytics platform two weeks ahead of schedule. The code is extremely clean, well-documented, and fully responsive.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rostova",
      role: "Creative Director",
      company: "Vogue Design Agency",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "As a design agency, we are very picky about frontend execution. Adeel Ahmadbrought our Figma prototypes to life perfectly with beautiful Framer Motion animations. We will definitely work with him again.",
      rating: 5
    },
    {
      id: 4,
      name: "Marcus Vance",
      role: "VP of Engineering",
      company: "SaaSify Co",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content: "Adeel Ahmad' expertise in React and Node.js helped us scale our user base from 10k to 100k without any downtime. He is a phenomenal problem solver and a fantastic team player.",
      rating: 5
    }
  ] as Testimonial[]
};
