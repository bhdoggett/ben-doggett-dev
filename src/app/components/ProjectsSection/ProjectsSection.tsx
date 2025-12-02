"use client";

import { useState } from "react";
import { ProjectCard, Project } from "../ProjectCard";
import styles from "./ProjectsSection.module.css";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({
  projects: initialProjects,
}: ProjectsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [projects, setProjects] = useState(initialProjects);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();

    if (draggedIndex === null || draggedIndex === index) return;

    const newProjects = [...projects];
    const draggedProject = newProjects[draggedIndex];

    newProjects.splice(draggedIndex, 1);
    newProjects.splice(index, 0, draggedProject);

    setProjects(newProjects);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
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
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              isDragging={draggedIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
