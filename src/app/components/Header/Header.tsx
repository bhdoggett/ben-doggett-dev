"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "../ThemeToggle";
import styles from "./Header.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  name: string;
  title: string;
  tech: string[];
  resumeUrl: string;
}

function TechDisplay({ tech }: { tech: string }) {
  // import and use Frame-Motion and Animate FRame

  return <div className={styles.techContainer}>{tech}</div>;
}

export function Header({ name, title, tech, resumeUrl }: HeaderProps) {
  const [showResume, setShowResume] = useState(false);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  // Rotate through tech stack
  useEffect(() => {
    if (tech.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % tech.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tech.length]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showResume) {
        setShowResume(false);
      }
    };

    if (showResume) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showResume]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>
            <span className={styles.titleText}>{title}</span>
            <span className={styles.tech}>
              {"{ "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTechIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {tech[currentTechIndex]}
                </motion.span>
              </AnimatePresence>
              {" }"}
            </span>
          </p>
        </div>
        <div className={styles.rightSection}>
          <button
            onClick={() => setShowResume(true)}
            className={styles.resumeLink}
            aria-label="View resume"
          >
            Resume
          </button>
          <div className={styles.themeToggle}>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {showResume && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowResume(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Resume viewer"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <button
                onClick={() => setShowResume(false)}
                className={styles.closeButton}
                aria-label="Close resume viewer"
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
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
            </div>
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0`}
              className={styles.pdfFrame}
              title="Resume PDF"
            />
          </div>
        </div>
      )}
    </>
  );
}
