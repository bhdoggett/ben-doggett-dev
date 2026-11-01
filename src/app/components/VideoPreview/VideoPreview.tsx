"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import styles from "./VideoPreview.module.css";

const VISIBLE_SHARE_TO_PLAY = 0.6;

function canHover() {
  return window.matchMedia("(hover: hover)").matches;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function play(video: HTMLVideoElement | null) {
  // A pause that arrives while play() is pending rejects its promise.
  video?.play().catch(() => {});
}

/** Plays a preview while a pointer is over the element given the handlers. */
export function useHoverPlayback() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const hoverHandlers = {
    onMouseEnter: () => {
      if (canHover()) play(videoRef.current);
    },
    onMouseLeave: () => {
      const video = videoRef.current;
      if (video && canHover()) {
        video.pause();
        video.currentTime = 0;
      }
    },
  };

  return { videoRef, hoverHandlers };
}

interface VideoDialogProps {
  src: string;
  title: string;
  onClose: () => void;
}

function VideoDialog({ src, title, onClose }: VideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={title}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current.close();
      }}
    >
      <button
        className={styles.closeButton}
        onClick={() => dialogRef.current?.close()}
        aria-label="Close video"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <video
        src={src}
        aria-label={title}
        className={styles.player}
        controls
        autoPlay
        playsInline
      />
    </dialog>
  );
}

interface VideoPreviewProps {
  src: string;
  alt: string;
  videoRef: RefObject<HTMLVideoElement | null>;
}

export function VideoPreview({ src, alt, videoRef }: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Without hover, a preview plays while it is on screen instead.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isOpen) {
      video.pause();
      return;
    }
    if (canHover() || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play(video);
        else video.pause();
      },
      { threshold: VISIBLE_SHARE_TO_PLAY },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [isOpen, videoRef]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        aria-label={alt}
        muted
        loop
        playsInline
        preload="metadata"
        className={styles.video}
        onPlay={() => {
          if (isOpen) videoRef.current?.pause();
          else setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
      />
      <button
        className={styles.expandButton}
        onClick={() => setIsOpen(true)}
        aria-label={`Play full size with sound: ${alt}`}
      >
        <span
          className={`${styles.playIcon} ${isPlaying ? styles.playIconHidden : ""}`}
          aria-hidden="true"
        >
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
        </span>
      </button>
      {isOpen &&
        createPortal(
          <VideoDialog
            src={src}
            title={alt}
            onClose={() => setIsOpen(false)}
          />,
          document.body,
        )}
    </>
  );
}
