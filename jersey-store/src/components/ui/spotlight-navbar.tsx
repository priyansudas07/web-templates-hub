import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { animate } from "framer-motion";
import { cn } from "../../lib/utils";

export interface NavItem {
  label: string;
  href: string;
}

export interface SpotlightNavbarProps {
  items: NavItem[];
  className?: string;
  onItemClick?: (item: NavItem, index: number) => void;
}

export function SpotlightNavbar({
  items,
  className,
  onItemClick,
}: SpotlightNavbarProps) {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Compute active index based on current location
  const getActiveIndex = () => {
    const idx = items.findIndex((item) => {
      if (item.href === "/" && location.pathname === "/") return true;
      if (item.href !== "/" && location.pathname.startsWith(item.href)) return true;
      return false;
    });
    return idx >= 0 ? idx : 0;
  };

  const activeIndex = getActiveIndex();
  const [hoverX, setHoverX] = useState<number | null>(null);

  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setHoverX(x);
      spotlightX.current = x;
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightX.current = v;
            nav.style.setProperty("--spotlight-x", `${v}px`);
          },
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  // Handle Ambience movement to active index
  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });
    }
  }, [activeIndex]);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <nav
        ref={navRef}
        className="relative h-10 px-2 flex items-center transition-all duration-300 overflow-hidden"
        style={{
          ['--spotlight-color' as string]: 'rgba(227, 38, 30, 0.25)',
          ['--ambience-color' as string]: '#E3261E',
        }}
      >
        {/* Nav Items List */}
        <ul className="relative flex items-center h-full gap-1 z-10">
          {items.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <li key={item.href} className="relative h-full flex items-center justify-center">
                <Link
                  to={item.href}
                  data-index={idx}
                  onClick={() => onItemClick?.(item, idx)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200 rounded-full flex items-center gap-1.5",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E]",
                    isActive
                      ? "text-[#F3F0E8] font-extrabold"
                      : "text-[#9B9992] hover:text-[#F3F0E8]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Active Crimson Underline Indicator Bar (Animated under active tab) */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-1 shadow-[0_0_8px_#E3261E]"
          style={{
            background: `radial-gradient(55px circle at var(--ambience-x) 0%, #E3261E 0%, transparent 100%)`,
          }}
        />
      </nav>
    </div>
  );
}
