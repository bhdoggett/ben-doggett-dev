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
      "AI-powered Git repository analyzer that transforms commit history into structured narratives. Connect via GitHub OAuth and initiate a story by organizing commits into meaningful chapters. Or analyze individual commits for detailed summaries of changes made.",
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
        title="Fullstack Software Engineer "
        tech={[
          "TypeScript | React | Node.js",
          "Next.js | Express | MongoDB",
          "PostgreSQL | Tailwind | REST APIs",
        ]}
        resumeUrl="/assets/ben_doggett_resume.pdf"
      />
      <main id="main-content" className={styles.main}>
        <AboutSection
          content="I'm a human who writes code for humans. So much modern technology exists to exploit and extract our attention and our dollars. I am committed to tech that will help real people solve real problems and create beautiful things. I would love to build awesome things with you.
      "
        />
        <ProjectsSection projects={sampleProjects} />
      </main>
      <Footer />
    </div>
  );
}
