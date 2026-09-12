import type { Project, Education } from "./types";

export const initialProjects: Project[] = [
  {
    id: "1",
    title: "AI SEO Rank Tracker",
    description: "A modern AI powered SEO tool where users can analyze website SEO, track keyword rankings, monitor ranking history and auto generate AI SEO reports.",
    image: "/images/Screenshot (16).png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST API", "Gemini AI", "Browserbase", "Vercel"],
    githubUrl: "https://github.com/ArchanaSathiyaseelans/AI-SEO_Rank_Tracker.git",
    liveUrl: "https://ai-seo-rank-tracker-fronend.vercel.app/"
  },
  {
    id: "2",
    title: "E-Commerce App – PERN",
    description: "A full featured e-commerce platform built with PERN stack, featuring auth, client authentication, product card and order management, payment gateway integration, admin dashboard and realtime chat and video calling.",
    image: "/images/Screenshot (17).png",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Clerk", "Imagekit", "Sentry", "Webhooks", "Stream-chat"],
    githubUrl: "https://github.com/ArchanaSathiyaseelans/E-CommerceApp-PERN.git",
    liveUrl: "https://e-commerceapp-pern-x04i.onrender.com"
  },
  {
    id: "3",
    title: "Webchat – IMessage",
    description: "Realtime webchat messenger with MERN stack built with WebSocket server with Clerk authentication, image & video sharing support, dark/light mode & multiple themes & wallpapers.",
    image: "/images/Screenshot (18).png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Clerk", "Webhooks", "Cron Jobs", "Imagekit"],
    githubUrl: "https://github.com/ArchanaSathiyaseelans/WebChat-IMessager.git",
    liveUrl: "https://webchat-imessager-8sh9.onrender.com/auth"
  },
  {
    id: "4",
    title: "Realtime – Spotify Clone",
    description: "Advanced Spotify clone application with Admin Dashboard to create albums of songs. Realtime chat app integrated in it to see what other users are listening to in real time. Online/Offline status.",
    image: "/images/Screenshot (19).png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS", "Socket.IO"],
    githubUrl: "https://github.com/ArchanaSathiyaseelans/Realtime-spotify-clone.git",
    liveUrl: "https://realtime-spotify-clone-wtww.onrender.com"
  },
  {
    id: "5",
    title: "Multi-Agent AI Code Editor",
    description: "A Scalable Full Stack MicroService Architecture Powered by Langgraph agent workflows.Realtime collabration workflows using Socketio and Redis caching for low-latency session with Razorpay payment integration.",
    image: "/images/Screenshot (11).png",
    techStack: ["MERN STACK", "Redis", "firebase Auth", "AWS", "Langgraph", "Docker", "Razorpay", "Socket.IO"],
    githubUrl: "https://github.com/ArchanaSathiyaseelans/AI_MULTI_AGENT_CODE_EDITOR.git",
    liveUrl: "http://100.48.184.36:3000"
  }
];

export const initialEducation: Education[] = [
  {
    id: "1",
    degree: "Master of Computer Applications",
    institution: "Karnataka State Open University",
    period: "Jul 2023 - Nov 2025",
    cgpa: "8.38",
    description: "Relevant Course Work: OOPs, Data Structures and Algorithms, Computer Networks, DBMS, Software Engineering, Cloud Computing, Python, Internet of Things, Software Testing, Artificial Intelligence and Machine Learning.",
  },
  {
    id: "2",
    degree: "Bachelor of Computer Science",
    institution: "Govt. First Grade College - Bangalore University",
    period: "Jun 2016 - Sep 2020",
    cgpa: "7.38",
    description: "Relevant Course Work: C, C++, OOPs, Computer Basics, Operating systems, SQL, Microsoft Office.",
  }
];
