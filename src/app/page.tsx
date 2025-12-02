import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { Project } from "./components/ProjectCard";
import styles from "./page.module.css";

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Citizen Sampler",
    description:
      "A creative musical web app that integrates Library of Congress audio samples with a drum-machine UI, allowing users to manipulate sample audio and create multiple loop patterns. Export your end result as per-sample wav files. Create an account to save and recall multiple songs.",
    gifUrl: "/assets/citizen-sampler.gif",
    gifAlt: "Citizen Sampler demonstration",
    websiteUrl: "https://citizensampler.com",
    githubUrl: "https://github.com/bhdoggett/citizen-sampler",
    techStack:
      "Typescript, React, Next.js, Tailwind CSS, Express, Node.js, MongoDB, Tone.js",
  },
  {
    id: "2",
    title: "Git Story",
    description:
      "AI-powered Git repository analyzer that transforms commit history into structured narratives. Connect via GitHub OAuth to automatically organize commits into meaningful chapters or analyze individual commits for detailed summaries of changes made.",
    gifUrl: "/assets/git-story.gif",
    gifAlt: "GitStory demonstration",
    websiteUrl: "https://gitstory.dev",
    githubUrl: "https://github.com/bhdoggett/git-story",
    techStack:
      "Typescript, React, Vite, Tailwind CSS, Express, Node.js, Prisma/PostgreSQL, AI-Gemini",
  },
  {
    id: "3",
    title: "Music Portfolio",
    description:
      "My personal artist website featuring original music with a built-in audio player, streaming platform links, and transposable song resources.",
    gifUrl: "/assets/ben-doggett-music.gif",
    gifAlt: "Music Portfolio demonstration",
    websiteUrl: "https://music.bendoggett.com",
    githubUrl: "https://github.com/bhdoggett/ben-doggett-music",
    techStack: "Typescript, React, Next.js, CSS Modules, Chordpro",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header
        name="Ben Doggett"
        title="{Fullstack Software Engineer}"
        resumeUrl="/assets/ben_doggett_resume.pdf"
      />
      <main id="main-content" className={styles.main}>
        <AboutSection content="I'm a fullstack software developer with a background in leadership, problem-solving, and team collaboration. I'm committed to building intuitive, efficient software solutions that solve real-world problems and enhance user experience. With expertise in JavaScript, TypeScript, React, Next.js, Node.js, and Express, I create modern web applications that are both performant and user-friendly." />
        <ProjectsSection projects={sampleProjects} />
      </main>
      <Footer />
    </div>
  );
}
