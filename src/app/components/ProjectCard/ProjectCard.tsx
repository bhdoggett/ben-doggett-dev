import Image from "next/image";
import styles from "./ProjectCard.module.css";

export interface Project {
  id: string;
  title: string;
  description: string;
  gifUrl: string;
  gifAlt: string;
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
  return (
    <article
      className={`${styles.card} ${isDragging ? styles.dragging : ""}`}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <div className={styles.imageContainer}>
        <Image
          src={project.gifUrl}
          alt={project.gifAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
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
                {/* <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg> */}
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
                {/* <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg> */}
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
