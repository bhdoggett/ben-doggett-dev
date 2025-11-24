import Image from "next/image";
import styles from "./ProjectCard.module.css";

export interface Project {
  id: string;
  title: string;
  description: string;
  gifUrl: string;
  gifAlt: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
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
      </div>
    </article>
  );
}
