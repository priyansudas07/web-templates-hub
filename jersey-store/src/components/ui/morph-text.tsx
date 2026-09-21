"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MorphTextProps {
  /**
   * Array of words / phrases to cycle through.
   */
  words?: string[];
  /**
   * Duration (ms) each word is displayed before transitioning.
   * @default 3200
   */
  interval?: number;
  /**
   * Optional subtext rendered beneath the morphing word.
   */
  subtext?: string;
  /**
   * Font size passed as a CSS value.
   */
  fontSize?: string;
  /**
   * Font family. Defaults to `'Bebas Neue', sans-serif`.
   */
  fontFamily?: string;
  /** Extra CSS classes on the root wrapper. */
  className?: string;
  /** Extra CSS classes on the morphing text container. */
  textClassName?: string;
  /** Extra CSS classes on the subtext element. */
  subtextClassName?: string;
}

export function MorphText({
  words = ["THE MEMORY.", "THE GRAIL.", "THE LEGACY.", "THE OBSESSION."],
  interval = 3200,
  subtext,
  fontSize = "inherit",
  fontFamily = "'Bebas Neue', sans-serif",
  className,
  textClassName,
  subtextClassName,
}: MorphTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[index] || "";

  return (
    <div className={cn("morph-text-root relative inline-flex flex-col items-center justify-center", className)}>
      <div
        className={cn(
          "morph-text-container relative select-none leading-none overflow-hidden h-[1.15em] flex items-center justify-center",
          textClassName
        )}
        style={{
          fontSize,
          fontFamily,
          minWidth: "11ch",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord}
            initial={{ 
              opacity: 0, 
              filter: "blur(14px)", 
              scale: 0.94,
              y: 12
            }}
            animate={{ 
              opacity: 1, 
              filter: "blur(0px)", 
              scale: 1,
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              filter: "blur(14px)", 
              scale: 1.06,
              y: -12
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="tracking-tight uppercase will-change-[transform,opacity,filter] whitespace-nowrap block text-[#F3F0E8]"
          >
            {currentWord}
          </motion.span>
        </AnimatePresence>
      </div>

      {subtext && (
        <p
          className={cn(
            "morph-subtext mt-6 uppercase tracking-[0.2em] text-[#8E8C85]",
            subtextClassName
          )}
          style={{
            fontSize: "1.1rem",
            fontFamily,
          }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}

export default MorphText;
