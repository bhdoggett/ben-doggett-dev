"use client";

import { useState } from "react";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  content: string | React.ReactNode;
}

export function AboutSection({ content }: AboutSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.aboutSection}>
      <button
        className={styles.header}
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-controls="about-content"
      >
        <h2 className={styles.title}>About</h2>
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
        id="about-content"
        className={`${styles.content} ${isExpanded ? styles.contentExpanded : styles.contentCollapsed}`}
      >
        <div className={styles.contentInner}>
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      </div>
    </section>
  );
}
