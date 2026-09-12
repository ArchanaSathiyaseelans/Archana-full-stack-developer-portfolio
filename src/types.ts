export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  description: string;
}

export interface Blog {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
}
