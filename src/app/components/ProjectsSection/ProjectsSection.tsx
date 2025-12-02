"use client";

import { useState } from "react";
import { ProjectCard, Project } from "../ProjectCard";
import styles from "./ProjectsSection.module.css";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.section}>
      <button
        className={styles.header}
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-controls="projects-content"
      >
        <h2 className={styles.heading}>Projects</h2>
        <svg
          className={`${styles.arrow} ${isExpanded ? styles.expanded : styles.collapsed}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id="projects-content"
        className={`${styles.content} ${isExpanded ? styles.contentExpanded : styles.contentCollapsed}`}
      >
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
