import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]); // Standard US Letter size: 8.5 x 11 inches
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  let y = height - 40;
  const margin = 40;
  const contentWidth = width - margin * 2;

  // Header - Name
  page.drawText('ARCHANA SATHIYA SEELAN', {
    x: margin + (contentWidth - fontBold.widthOfTextAtSize('ARCHANA SATHIYA SEELAN', 22)) / 2,
    y,
    size: 22,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 20;

  // Header - Title
  page.drawText('Software Development Engineer', {
    x: margin + (contentWidth - fontRegular.widthOfTextAtSize('Software Development Engineer', 13)) / 2,
    y,
    size: 13,
    font: fontRegular,
    color: rgb(0.25, 0.25, 0.25),
  });
  y -= 16;

  // Contact Info
  const contactText = '+91 8105294487 | archanaseelan26@gmail.com | Bangalore, India | GitHub | Portfolio | LinkedIn';
  page.drawText(contactText, {
    x: margin + (contentWidth - fontRegular.widthOfTextAtSize(contactText, 9)) / 2,
    y,
    size: 9,
    font: fontRegular,
    color: rgb(0.2, 0.3, 0.6),
  });
  y -= 12;

  // Divider Line
  page.drawLine({
    start: { x: margin, y },
    end: { x: width - margin, y },
    thickness: 1,
    color: rgb(0.7, 0.7, 0.7),
  });
  y -= 16;

  // Helper Section Title
  function drawSectionTitle(title) {
    page.drawText(title, {
      x: margin,
      y,
      size: 12,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.75,
      color: rgb(0.2, 0.2, 0.2),
    });
    y -= 12;
  }

  // 1. TECHNICAL SKILLS
  drawSectionTitle('TECHNICAL SKILLS');

  const skills = [
    { label: 'Frontend Development: ', val: 'HTML5, CSS3, JavaScript (ES6+), React.js, TypeScript, Tailwind CSS, shadcn/ui, Vite, Responsive UI Design.' },
    { label: 'Backend Development: ', val: 'Node.js, Express.js, Python, C/C++, RESTful APIs, JWT Authentication, JSON, jQuery, Socket.io, Webhooks.' },
    { label: 'Database & Storage: ', val: 'SQL, MySQL, MongoDB, PostgreSQL, Complex Querying, Database Schema Design.' },
    { label: 'DevOps & Deployment: ', val: 'Git, GitHub, Docker, Postman, CI/CD Pipelines, AWS, Vercel, Render, VS Code, npm, Agile Methodology.' },
    { label: 'Core CS Concepts: ', val: 'DSA, OOPs Concepts, Operating Systems, Computer Networks, AI & Machine Learning, DBMS.' },
    { label: 'AI & Developer Tools: ', val: 'ChatGPT, Gemini, Antigravity, Claude Code, GitHub Copilot, Prompt Engineering.' },
  ];

  for (const skill of skills) {
    page.drawText(skill.label, { x: margin, y, size: 8.5, font: fontBold, color: rgb(0.15, 0.15, 0.15) });
    const labelWidth = fontBold.widthOfTextAtSize(skill.label, 8.5);
    page.drawText(skill.val, { x: margin + labelWidth, y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.25, 0.25) });
    y -= 11.5;
  }
  y -= 6;

  // 2. KEY PROJECTS
  drawSectionTitle('KEY PROJECTS');

  const projects = [
    {
      name: 'AI SEO Rank Tracker',
      tech: 'React.js, Node.js, Express.js, MongoDB, Vercel, REST APIs, Git/GitHub, Browserbase',
      bullets: [
        'Architected a modern AI-powered SEO optimization platform enabling users to perform automated site audits and keyword ranking analysis.',
        'Engineered real-time ranking history monitoring with interactive analytics and automated AI-driven SEO recommendation reports.',
        'Deployed performant full-stack architecture on Vercel backed by scalable MongoDB database indexing for fast query execution.'
      ]
    },
    {
      name: 'Multi-Agent AI Code Editor',
      tech: 'MERN Stack, Redis, LangGraph, Microservices, Firebase Auth, Docker, AWS, Razorpay',
      bullets: [
        'Developed a scalable full-stack multi-agent AI code editor powered by LangGraph agent workflows, Node.js microservices architecture, and MongoDB for real-time code generation and automated project management.',
        'Engineered high-throughput real-time collaboration workflows using Socket.IO and Redis caching for low-latency session management and fast data operations.',
        'Containerized microservices with Docker & Docker Compose for production cloud deployment on AWS, and integrated Razorpay payment gateway for automated multi-tier subscriptions.'
      ]
    },
    {
      name: 'E-Commerce SaaS Platform',
      tech: 'PostgreSQL, Express.js, React.js, Node.js, TypeScript, Clerk, Socket.io, Polar, Docker',
      bullets: [
        'Built and deployed a multi-tenant full-stack E-Commerce SaaS platform integrated with Clerk Authentication and Polar payment processing.',
        'Implemented real-time customer support chat and video calling infrastructure utilizing Socket.io WebSocket connections.',
        'Designed an administrative dashboard providing inventory management, webhook event handling, and real-time sales telemetry.'
      ]
    },
    {
      name: 'Webchat Instant Messaging App',
      tech: 'MERN Stack, Socket.io, Clerk, Render, Webhooks, Cronjobs, ImageKit.io',
      bullets: [
        'Engineered a high-concurrency real-time instant messaging application utilizing Node.js WebSocket servers and Clerk OAuth authentication.',
        'Integrated media storage pipeline using ImageKit.io supporting high-speed image, audio, and video media file sharing.',
        'Implemented custom application themes, dark/light mode toggles, custom chat wallpapers, and background Cronjobs cleanups.'
      ]
    }
  ];

  for (const proj of projects) {
    page.drawText(proj.name, { x: margin, y, size: 9.5, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
    const nameWidth = fontBold.widthOfTextAtSize(proj.name, 9.5);
    page.drawText(` | ${proj.tech}`, { x: margin + nameWidth, y, size: 8.5, font: fontOblique, color: rgb(0.3, 0.3, 0.3) });
    y -= 11;

    for (const bullet of proj.bullets) {
      page.drawText('•', { x: margin + 6, y, size: 8.5, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      
      // Wrap text line if needed
      const words = bullet.split(' ');
      let line = '';
      let firstLine = true;
      const bulletX = margin + 14;
      const maxLineWidth = contentWidth - 14;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.2);
        if (testWidth > maxLineWidth && n > 0) {
          page.drawText(line, { x: firstLine ? bulletX : bulletX + 6, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
          line = words[n] + ' ';
          y -= 10;
          firstLine = false;
        } else {
          line = testLine;
        }
      }
      if (line.length > 0) {
        page.drawText(line, { x: firstLine ? bulletX : bulletX + 6, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
        y -= 10.5;
      }
    }
    y -= 3;
  }
  y -= 4;

  // 3. EDUCATION
  drawSectionTitle('EDUCATION');

  const eduList = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Karnataka State Open University',
      dates: 'Jul 2023 – Nov 2025',
      cgpa: 'CGPA: 8.3 / 10'
    },
    {
      degree: 'Bachelor of Science in Computer Science (B.Sc.)',
      school: 'Government First Grade College / Bangalore University',
      dates: 'Jun 2016 – Sep 2020',
      cgpa: 'CGPA: 7.3 / 10'
    }
  ];

  for (const edu of eduList) {
    page.drawText(edu.degree, { x: margin, y, size: 9, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
    page.drawText(edu.dates, { x: width - margin - fontBold.widthOfTextAtSize(edu.dates, 8.5), y, size: 8.5, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
    y -= 11;
    page.drawText(edu.school, { x: margin, y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.25, 0.25) });
    page.drawText(edu.cgpa, { x: width - margin - fontBold.widthOfTextAtSize(edu.cgpa, 8.5), y, size: 8.5, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
    y -= 13;
  }
  y -= 4;

  // 4. CERTIFICATIONS & ACHIEVEMENTS
  drawSectionTitle('CERTIFICATIONS & ACHIEVEMENTS');

  const certs = [
    '100+ Data Structures & Algorithms Problems Solved – Leetcode',
    'Full Stack Web Development Certification – Microsoft & LinkedIn',
    'Python & Intermediate Machine Learning Certification – Kaggle'
  ];

  for (const cert of certs) {
    page.drawText('•', { x: margin + 6, y, size: 8.5, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    page.drawText(cert, { x: margin + 16, y, size: 8.5, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    y -= 11.5;
  }

  const pdfBytes = await pdfDoc.save();
  fs.mkdirSync('public', { recursive: true });
  fs.mkdirSync('src/assets', { recursive: true });
  fs.writeFileSync('public/resume.pdf', pdfBytes);
  fs.writeFileSync('src/assets/resume.pdf', pdfBytes);
  console.log('Successfully generated public/resume.pdf and src/assets/resume.pdf');
}

generateResume().catch(err => {
  console.error(err);
  process.exit(1);
});
