import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

// Mock DB data simulating MongoDB collections
const projects = [
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

const education = [
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

const blogs = [
  {
    id: "1",
    title: "Optimizing React Applications for Performance",
    date: "May 15, 2025",
    readTime: "5 min read",
    summary: "Discover advanced techniques for optimizing your React apps, from memoization to code splitting."
  },
  {
    id: "2",
    title: "Mastering MongoDB Aggregation Pipeline",
    date: "April 02, 2025",
    readTime: "8 min read",
    summary: "A deep dive into MongoDB's aggregation framework to handle complex data processing on the server."
  },
  {
    id: "3",
    title: "Building Secure Node.js APIs",
    date: "March 10, 2025",
    readTime: "6 min read",
    summary: "Best practices for securing your Node.js and Express APIs against common vulnerabilities."
  }
];

// API Routes
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/education", (req, res) => {
  res.json(education);
});

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  
  // In a real app, you would save this to DB or send an email
  console.log("Contact form received:", { name, email, message });
  
  res.json({ success: true, message: "Thanks for reaching out! I'll get back to you soon." });
});

app.get(["/resume.pdf", "/api/resume"], (req, res) => {
  const pdfPath = path.join(process.cwd(), "public", "resume.pdf");
  res.download(pdfPath, "Archana_Sathiya_Seelan_Resume.pdf");
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
