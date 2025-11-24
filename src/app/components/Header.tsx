"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

interface HeaderProps {
  name: string;
  title: string;
  resumeUrl: string;
}

export function Header({ name, title, resumeUrl }: HeaderProps) {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.rightSection}>
          <button
            onClick={() => setShowResume(!showResume)}
            className={styles.resumeLink}
          >
            Resume
          </button>
          <ThemeToggle />
        </div>
      </header>

      {showResume && (
        <div className={styles.resumeViewer}>
          <a
            href={resumeUrl}
            download
            className={styles.downloadButton}
            aria-label="Download resume as PDF"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0`}
            className={styles.pdfFrame}
            title="Resume PDF"
          />
        </div>
      )}
    </>
  );
}
