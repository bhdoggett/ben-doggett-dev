"use client";

import { useState } from "react";
import { experienceEntries as entries } from "../../data";
import { VideoPreview, useHoverPlayback } from "../VideoPreview";
import styles from "./ExperienceSection.module.css";

type Story = (typeof entries)[number]["stories"][number];

function StoryCard({ story }: { story: Story }) {
  const { videoRef, hoverHandlers } = useHoverPlayback();

  return (
    <article className={styles.story} {...hoverHandlers}>
      <div className={styles.mediaContainer}>
        <VideoPreview
          src={story.mediaUrl}
          alt={story.mediaAlt}
          videoRef={videoRef}
        />
      </div>
      <div className={styles.storyContent}>
        <h3 className={styles.storyTitle}>{story.title}</h3>
        <p className={styles.storyDescription}>{story.description}</p>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className={styles.section}>
      <button
        className={styles.header}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls="experience-content"
      >
        <h2 className={styles.title}>Experience</h2>
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
        id="experience-content"
        className={`${styles.content} ${isExpanded ? styles.contentExpanded : styles.contentCollapsed}`}
      >
        <div className={styles.contentInner}>
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
              <div className={styles.stories}>
                {entry.stories.map((story) => (
                  <StoryCard key={story.title} story={story} />
                ))}
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
    </section>
  );
}
