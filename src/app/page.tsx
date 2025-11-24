import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Project } from "./components/ProjectCard";
import styles from "./page.module.css";

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    gifUrl: "/assets/project-placeholder-1.svg",
    gifAlt: "E-Commerce Platform demonstration",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features built with React and Node.js.",
    gifUrl: "/assets/project-placeholder-2.svg",
    gifAlt: "Task Management App demonstration",
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts and real-time metrics, built using React, D3.js, and a custom API for data aggregation.",
    gifUrl: "/assets/project-placeholder-3.svg",
    gifAlt: "Analytics Dashboard demonstration",
  },
  {
    id: "4",
    title: "Social Media Integration",
    description:
      "Multi-platform social media management tool with scheduling, analytics, and content creation features, integrating with major social networks.",
    gifUrl: "/assets/project-placeholder-4.svg",
    gifAlt: "Social Media Integration demonstration",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header
        name="Ben Doggett"
        title="Fullstack Software Engineer"
        resumeUrl="/assets/ben_doggett_resume.pdf"
      />
      <main id="main-content" className={styles.main}>
        <AboutSection content="I'm a Fullstack Software Engineer with expertise in building modern web applications. I specialize in React, Next.js, TypeScript, and Node.js, creating scalable and performant solutions. With a passion for clean code and user-centric design, I focus on delivering high-quality applications that solve real-world problems. My experience spans across frontend development, backend architecture, and cloud infrastructure, allowing me to build complete solutions from concept to deployment." />
        <ProjectsSection projects={sampleProjects} />
      </main>
    </div>
  );
}
