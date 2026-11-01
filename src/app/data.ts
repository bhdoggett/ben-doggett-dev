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

export const experienceEntries = [
  {
    type: "Contract",
    name: "TheoTech (spf.io)",
    role: "Software Engineer",
    dates: "April 2026 - Present",
    stories: [
      {
        title: "One link for translators",
        description:
          "A subscriber was translating each document in a playlist one by one, then emailing translators a list of URLs. Now they translate a whole playlist at once and send one read-only link.",
        mediaUrl: "/assets/playlist-translation.mp4",
        mediaAlt: "Translating a whole playlist in spf.io",
      },
      {
        title: "Live slide translation",
        description:
          "My own church wanted to offer translated slides to congregants. I built the ProPresenter integration that delivers each slide to phones and projector screens as the operator advances.",
        mediaUrl: "/assets/propresenter-translation.mp4",
        mediaAlt: "ProPresenter slides translated live in spf.io",
      },
    ],
    bullets: [
      "Built Planning Center plan import with a full review screen, from the same subscriber's request",
      "Built a song translation memory that reuses reviewed translations across differing slide line breaks, including right-to-left languages",
      "Built PowerPoint and ProPresenter song import with duplicate detection and an optional AI cleanup step",
      "Added OCR for graphical slides with a tenant-scoped LRU cache, and managed S3 thumbnail delivery through a CDN",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "6",
    title: "Lightz",
    description:
      "macOS desktop app for controlling DMX stage lighting through an Enttec USB interface, built for live production use. Recalls scenes with fade transitions, scales fixture groups in real time with DCA-style faders, and takes show-control triggers from Bitfocus Companion. Released as .dmg installers for Apple Silicon and Intel through versioned GitHub Releases.",
    mediaUrl: "/assets/lightz.mp4",
    mediaAlt: "Lightz web demo recalling lighting scenes",
    mediaType: "video",
    websiteUrl: "https://lightz.benapps.xyz",
    githubUrl: "https://github.com/bhdoggett/lightz",
    techStack: "TypeScript, React, Electron, CSS Modules, Express, serialport",
  },
  {
    id: "5",
    title: "Kraftwerd",
    description:
      "Turn-based word game where players build squares on a shared board. Friends can invite each other to a game, and guests can play the computer without an account. One React codebase runs on the web and in native iOS and Android apps through Capacitor, on a Convex backend.",
    mediaUrl: "/assets/kraftwerd.mp4",
    mediaAlt: "Kraftwerd demonstration",
    mediaType: "video",
    websiteUrl: "https://kraftwerd.benapps.xyz",
    githubUrl: "https://github.com/bhdoggett/kraftwerd",
    techStack: "TypeScript, React, Vite, Convex, Capacitor, CSS Modules",
  },
  {
    id: "1",
    title: "Citizen Sampler",
    description:
      "Built a custom audio scheduling engine on top of Tone.js to synchronize multi-track loop playback. Integrates the Library of Congress public domain audio clips; users can layer samples into patterns and export per-track WAV files. Accounts persist multiple songs server-side via MongoDB.",
    mediaUrl: "/assets/citizen-sampler-2.mp4",
    mediaAlt: "Citizen Sampler demonstration",
    mediaType: "video",
    websiteUrl: "https://citizensampler.com",
    githubUrl: "https://github.com/bhdoggett/citizen-sampler",
    techStack:
      "Typescript, React, Next.js, CSS Modules, Express, Node.js, MongoDB, Tone.js",
  },
  {
    id: "4",
    title: "_apps",
    description:
      "Collection of single-purpose browser tools built with a minimalist design philosophy. Leverages native browser APIs including Web Audio (tuner, metronome, decibel meter) and Canvas (drawing tool with IndexedDB persistence). Designed for open source contribution with an agent-optimized Claude Code slash command for contributors.",
    mediaUrl: "/assets/_apps.mp4",
    mediaAlt: "Underscore Apps demonstration",
    mediaType: "video",
    websiteUrl: "https://underscoreapps.com",
    githubUrl: "https://github.com/bhdoggett/_apps",
    techStack: "React 18, TypeScript, Vite, CSS (custom design system)",
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
      "CSS Modules",
      "Electron",
      "Tauri",
      "Convex",
      "Capacitor",
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
