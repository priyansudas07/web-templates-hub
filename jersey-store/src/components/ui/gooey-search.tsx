"use client";

import { useState, useRef, useEffect, useMemo, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Utilities ────────────────────────────────────────────────────────────────

function detectUnsupportedBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  const isSafari =
    ua.includes("safari") &&
    !ua.includes("chrome") &&
    !ua.includes("chromium") &&
    !ua.includes("android") &&
    !ua.includes("firefox");
  return isSafari || ua.includes("crios");
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

// ── Animation variants ───────────────────────────────────────────────────────

const buttonMotionVariants = {
  step1: { x: 0, width: 140 },
  step2: { x: 0, width: 340 },
};

const iconMotionVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const getResultVariants = (index: number, unsupported: boolean) => ({
  initial: { y: 0, scale: 0.3, filter: unsupported ? "none" : "blur(10px)" },
  animate: { y: (index + 1) * 48, scale: 1, filter: "blur(0px)" },
  exit: { y: unsupported ? 0 : -4, scale: 0.8 },
});

const getResultTransition = (index: number) => ({
  duration: 0.5,
  delay: index * 0.08,
  type: "spring" as const,
  bounce: 0.25,
  filter: { ease: "easeInOut" },
});

// ── Private sub-components ───────────────────────────────────────────────────

function SearchSvgIcon({ isUnsupported }: { isUnsupported: boolean }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8, filter: isUnsupported ? "none" : "blur(5px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.8, filter: isUnsupported ? "none" : "blur(5px)" }}
      transition={{ delay: 0.05, duration: 0.5, type: "spring", bounce: 0.15 }}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </motion.svg>
  );
}

function LoadingSvgIcon() {
  const lines: [number, number, number, number][] = [
    [128, 32, 128, 64],
    [195.88, 60.12, 173.25, 82.75],
    [224, 128, 192, 128],
    [195.88, 195.88, 173.25, 173.25],
    [128, 224, 128, 192],
    [60.12, 195.88, 82.75, 173.25],
    [32, 128, 64, 128],
    [60.12, 60.12, 82.75, 82.75],
  ];
  return (
    <svg
      className="gooey-search-loading"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-label="Loading"
      role="status"
      style={{ width: 18, height: 18 }}
    >
      <rect width="256" height="256" fill="none" />
      {lines.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={16}
        />
      ))}
    </svg>
  );
}

function InfoSvgIcon({ index }: { index: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index * 0.08 + 0.15 }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      style={{ width: 16, height: 16, position: "relative", top: 1, flexShrink: 0 }}
    >
      <path
        d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </motion.svg>
  );
}

// ── Public types ─────────────────────────────────────────────────────────────

export interface GooeySearchProps {
  /** Strings to search locally. Ignored when `onSearch` is provided. */
  items?: string[];
  /** Async/sync custom search function for external data sources. */
  onSearch?: (query: string) => Promise<string[]> | string[];
  /** Input placeholder text. */
  placeholder?: string;
  /** Label shown on the collapsed button. */
  buttonLabel?: string;
  /** Called when the user clicks a result item. */
  onSelect?: (item: string) => void;
  /** Called instantly when user types in the input field. */
  onChangeQuery?: (query: string) => void;
  /** Extra class names for the outermost wrapper. */
  className?: string;
  /** Input debounce delay in ms. Defaults to 300. */
  debounceMs?: number;
  /** Maximum number of results to render. Defaults to 5. */
  maxResults?: number;
}

// ── Component ────────────────────────────────────────────────────────────────

export function GooeySearch({
  items = [],
  onSearch,
  placeholder = "Search kits...",
  buttonLabel = "Search Vault",
  onSelect,
  onChangeQuery,
  className,
  debounceMs = 300,
  maxResults = 5,
}: GooeySearchProps) {
  const uid = useId().replace(/:/g, "_");
  const filterId = `gooey-search-${uid}`;

  const inputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const isUnsupported = useMemo(() => detectUnsupportedBrowser(), []);
  const debouncedQuery = useDebounce(searchText, debounceMs);

  useEffect(() => {
    if (step === 2) inputRef.current?.focus();
  }, [step]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!debouncedQuery) {
        setResults([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        let data: string[];
        if (onSearch) {
          data = await onSearch(debouncedQuery);
        } else {
          await new Promise<void>((r) => setTimeout(r, 200));
          data = items.filter((item) =>
            item.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
          );
        }
        if (!cancelled) setResults(data.slice(0, maxResults));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    run();
    return () => { cancelled = true; };
  }, [debouncedQuery, items, onSearch, maxResults]);

  const btnPadding = "8px 16px";
  const resultPadding = "10px 16px";

  return (
    <div className={cn("relative inline-flex items-center justify-start", className)}>
      {/* Keyframe injection for loading spinner */}
      <style>{`
        .gooey-search-loading {
          animation: gooeySearchSpin 0.5s linear infinite;
          transform-origin: center center;
        }
        @keyframes gooeySearchSpin { to { transform: rotate(180deg); } }
        .gooey-search-input::placeholder { color: var(--background); opacity: 0.6; font-size: 13px; }
      `}</style>

      {/* SVG gooey filter — zero size, no layout impact */}
      <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -12"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Gooey container */}
      <div
        style={{
          filter: isUnsupported ? "none" : `url(#${filterId})`,
          cursor: "pointer",
          position: "relative",
          zIndex: 40,
        }}
      >
        {/* Results — absolute dropdown floating */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key="results-wrapper"
            role="listbox"
            aria-label="Search results"
            style={{ position: "relative", zIndex: 30 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: isUnsupported ? 0.3 : 0.8, duration: 0.4 }}
          >
            <AnimatePresence mode="popLayout">
              {results.map((item, index) => (
                <motion.div
                  key={item}
                  role="option"
                  tabIndex={0}
                  onClick={() => onSelect?.(item)}
                  onKeyDown={(e) => e.key === "Enter" && onSelect?.(item)}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  variants={getResultVariants(index, isUnsupported)}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={getResultTransition(index)}
                  style={{
                    backgroundColor: "var(--foreground)",
                    borderRadius: 24,
                    padding: resultPadding,
                    width: "320px",
                    color: "var(--background)",
                    position: "absolute",
                    left: 0,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <InfoSvgIcon index={index} />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.08 + 0.15 }}
                      style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      {item}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Morphing search button */}
        <motion.div
          variants={buttonMotionVariants}
          initial="step1"
          animate={step === 1 ? "step1" : "step2"}
          transition={{ duration: 0.5, type: "spring", bounce: 0.15 }}
          onClick={() => step === 1 && setStep(2)}
          whileHover={{ scale: step === 2 ? 1 : 1.03 }}
          whileTap={{ scale: 0.97 }}
          role={step === 1 ? "button" : undefined}
          aria-label={step === 1 ? "Open search" : undefined}
          style={{
            backgroundColor: "var(--foreground)",
            color: "var(--background)",
            cursor: "pointer",
            outline: "none",
            border: "none",
            borderRadius: 9999,
            padding: btnPadding,
            display: "flex",
            alignItems: "center",
            height: "40px",
            boxSizing: "border-box",
          }}
        >
          {step === 1 ? (
            <span
              style={{
                pointerEvents: "none",
                textAlign: "center",
                width: "100%",
                color: "var(--background)",
                fontWeight: 700,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {buttonLabel}
            </span>
          ) : (
            <input
              ref={inputRef}
              type="text"
              className="gooey-search-input"
              placeholder={placeholder}
              aria-label="Search input"
              onChange={(e) => {
                const val = e.target.value;
                setSearchText(val);
                onChangeQuery?.(val);
              }}
              style={{
                width: "calc(100% - 36px)",
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
                color: "var(--background)",
                fontSize: 13,
                fontWeight: 600,
                paddingRight: "8px",
              }}
            />
          )}
        </motion.div>

        {/* Floating icon bubble */}
        <AnimatePresence mode="wait">
          {step === 2 && (
            <motion.div
              key="icon-bubble"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={iconMotionVariants}
              transition={{ delay: 0.05, duration: 0.5, type: "spring", bounce: 0.15 }}
              style={{
                position: "absolute",
                backgroundColor: "var(--foreground)",
                width: 38,
                height: 38,
                right: 1,
                top: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 9999,
                color: "var(--background)",
              }}
            >
              {isLoading ? <LoadingSvgIcon /> : <SearchSvgIcon isUnsupported={isUnsupported} />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default GooeySearch;
