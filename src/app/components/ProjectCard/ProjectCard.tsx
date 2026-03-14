"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

export interface Project {
  id: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaAlt: string;
  mediaType?: "gif" | "video";
  websiteUrl?: string;
  githubUrl?: string;
  techStack?: string;
}

interface ProjectCardProps {
  project: Project;
  draggable?: boolean;
  onDragStart?: () => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
}

export function ProjectCard({
  project,
  draggable = false,
  onDragStart,
  onDragOver,
  onDragEnd,
  isDragging = false,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <article
      className={`${styles.card} ${isDragging ? styles.dragging : ""}`}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onMouseEnter={project.mediaType === "video" ? handleMouseEnter : undefined}
      onMouseLeave={project.mediaType === "video" ? handleMouseLeave : undefined}
    >
      <div className={styles.imageContainer}>
        {project.mediaType === "video" ? (
          <>
            <video
              ref={videoRef}
              src={project.mediaUrl}
              aria-label={project.mediaAlt}
              muted
              loop
              playsInline
              preload="metadata"
              className={styles.image}
            />
            <div className={styles.playOverlay} aria-hidden="true">
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.45)" />
                <polygon points="19,14 38,24 19,34" fill="white" />
              </svg>
            </div>
          </>
        ) : (
          <Image
            src={project.mediaUrl}
            alt={project.mediaAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>

        <p className={styles.description}>{project.description}</p>

        {project.techStack && (
          <div className={styles.techStack}>
            <span>{project.techStack}</span>
          </div>
        )}
        {(project.websiteUrl || project.githubUrl) && (
          <div className={styles.links}>
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`Visit ${project.title} website`}
              >
                Website
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`View ${project.title} on GitHub`}
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
