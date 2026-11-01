"use client";

import Image from "next/image";
import { VideoPreview, useHoverPlayback } from "../VideoPreview";
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
  const { videoRef, hoverHandlers } = useHoverPlayback();
  const isVideo = project.mediaType === "video";

  return (
    <article
      className={`${styles.card} ${isDragging ? styles.dragging : ""}`}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      {...(isVideo ? hoverHandlers : {})}
    >
      <div className={styles.imageContainer}>
        {isVideo ? (
          <VideoPreview
            src={project.mediaUrl}
            alt={project.mediaAlt}
            videoRef={videoRef}
          />
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
