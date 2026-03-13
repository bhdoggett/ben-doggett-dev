import { Project } from "./components/ProjectCard";

export const aboutContent =
  "I'm a human who writes code for humans. I spent years as a professional musician before transitioning to engineering — that background shapes how I think about the people who use the things I build. So much modern technology exists to exploit and extract our attention and our dollars. I am committed to tech that will help real people solve real problems and create beautiful things. I would love to build awesome things with you.";

export const headerData = {
  name: "Ben Doggett",
  title: "Full Stack Software Engineer",
  tech: [
    "TypeScript | React | Node.js",
    "Next.js | Express | MongoDB",
    "PostgreSQL | Tailwind | REST APIs",
  ],
  resumeUrl: "/assets/ben_doggett_resume.pdf",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Citizen Sampler",
    description:
      "Built a custom audio scheduling engine on top of Tone.js to synchronize multi-track loop playback. Integrates the Library of Congress public domain audio clips; users can layer samples into patterns and export per-track WAV files. Accounts persist multiple songs server-side via MongoDB.",
    mediaUrl: "/assets/citizen-sampler.mp4",
    mediaAlt: "Citizen Sampler demonstration",
    mediaType: "video",
    websiteUrl: "https://citizensampler.com",
    githubUrl: "https://github.com/bhdoggett/citizen-sampler",
    techStack:
      "Typescript, React, Next.js, Tailwind CSS, Express, Node.js, MongoDB, Tone.js",
  },
  {
    id: "2",
    title: "Git Story",
    description:
      "Transforms a repository's commit history into structured, readable narratives using the Gemini AI API. GitHub OAuth connects directly to real repos; commits are organized into chapters or analyzed individually for detailed change summaries. Full-stack: Vite/React frontend, Express/Node backend with Prisma/PostgreSQL.",
    mediaUrl: "/assets/git-story.mp4",
    mediaAlt: "GitStory demonstration",
    mediaType: "video",
    websiteUrl: "https://gitstory.dev",
    githubUrl: "https://github.com/bhdoggett/git-story",
    techStack:
      "Typescript, React, Vite, Tailwind CSS, Express, Node.js, Prisma/PostgreSQL, AI-Gemini",
  },
  {
    id: "3",
    title: "Music Portfolio",
    description:
      "Personal artist site with a built-in audio player, streaming platform links, and on-the-fly transposable song sheets. Implemented ChordPro parsing to render chord charts that transpose in the browser without a round-trip to the server.",
    mediaUrl: "/assets/ben-doggett-music.mp4",
    mediaAlt: "Music Portfolio demonstration",
    mediaType: "video",
    websiteUrl: "https://music.bendoggett.com",
    githubUrl: "https://github.com/bhdoggett/ben-doggett-music",
    techStack: "Typescript, React, Next.js, CSS Modules, Chordpro",
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "Dart"],
  },
  {
    label: "Tools & Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Tailwind",
      "Git",
      "Flutter",
      "VS Code",
      "Cursor",
      "Claude Code",
      "Jira",
    ],
  },
  {
    label: "Currently Learning",
    items: ["AWS", "Python", "AI/ML concepts"],
  },
];

export const educationEntries = [
  {
    type: "Bootcamp",
    name: "Parsity",
    role: "Full Stack Web Development",
    dates: "October 2024 - June 2025",
    bullets: [
      "Built full stack applications with React, Node.js, Express, and PostgreSQL",
      "Completed projects end-to-end from design through deployment",
      "Studied data structures, REST API design, and agile workflows",
    ],
  },
  {
    type: "Internship",
    name: "Aypex",
    role: "Software Engineer Intern",
    dates: "September 2025 – October 2025",
    bullets: [
      "Contributed to front end and back end features for an AI-integrated athletics mobile application.",
      "Shipped feature work in a professional codebase with code review and Jira-tracked sprints",
    ],
  },
];
