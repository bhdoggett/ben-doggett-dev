"use client";

import { useState } from "react";
import { educationEntries as entries } from "../../data";
import styles from "./EducationSection.module.css";

export function EducationSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className={styles.section}>
      <button
        className={styles.header}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls="education-content"
      >
        <h2 className={styles.title}>Education & Training</h2>
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
        id="education-content"
        className={`${styles.content} ${isExpanded ? styles.contentExpanded : styles.contentCollapsed}`}
      >
        <div className={styles.contentInner}>
          <div className={styles.entries}>
            {entries.map((entry) => (
              <div key={entry.name} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div className={styles.entryMeta}>
                    <span className={styles.entryType}>{entry.type}</span>
                    <div className={styles.entryNameRow}>
                      <span className={styles.entryName}>{entry.name}</span>
                      <span className={styles.entryRole}>{entry.role}</span>
                    </div>
                  </div>
                  <span className={styles.entryDates}>{entry.dates}</span>
                </div>
                <ul className={styles.bullets}>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className={styles.bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
