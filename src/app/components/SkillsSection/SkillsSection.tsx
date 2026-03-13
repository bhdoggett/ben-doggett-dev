"use client";

import { useState } from "react";
import { skills } from "../../data";
import styles from "./SkillsSection.module.css";

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.skillsSection}>
      <button
        className={styles.header}
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-controls="skills-content"
      >
        <h2 className={styles.title}>Skills</h2>
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
        id="skills-content"
        className={`${styles.content} ${isExpanded ? styles.contentExpanded : styles.contentCollapsed}`}
      >
        <div className={styles.contentInner}>
          <div className={styles.categories}>
            {skills.map((group) => (
              <div key={group.label} className={styles.category}>
                <span className={styles.categoryLabel}>{group.label}</span>
                <div className={styles.tags}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
