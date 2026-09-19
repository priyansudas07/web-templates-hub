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
        className="relative h-10 px-2 sm:px-3 flex items-center transition-all duration-300 overflow-hidden rounded-full bg-[#0c0c0b]/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/[0.09] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.13),inset_0_-1px_0_0_rgba(0,0,0,0.7),0_10px_30px_rgba(0,0,0,0.65)]"
        style={{
          ['--spotlight-color' as string]: 'rgba(227, 38, 30, 0.28)',
          ['--ambience-color' as string]: '#E3261E',
        }}
      >
        {/* Specular Inner Glass Sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-white/[0.01] to-transparent pointer-events-none rounded-full" />

        {/* Nav Items List */}
        <ul className="relative flex items-center h-full gap-1 sm:gap-1.5 z-10">
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
                    "px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-[11.5px] font-sans font-semibold uppercase tracking-[0.16em] transition-colors duration-200 rounded-full flex items-center gap-1.5",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E]",
                    isActive
                      ? "text-[#F3F0E8] font-bold"
                      : "text-[#9B9992]/75 hover:text-[#F3F0E8]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Moving Spotlight (Follows Cursor & Glows) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: hoverX !== null ? 1 : 0,
            background: `radial-gradient(110px circle at var(--spotlight-x) 100%, var(--spotlight-color) 0%, transparent 70%)`,
          }}
        />

        {/* Thinner Precision Active Ambience Glow Bar */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-[1.5px] z-1"
          style={{
            background: `radial-gradient(55px circle at var(--ambience-x) 0%, var(--ambience-color) 0%, rgba(227,38,30,0.5) 50%, transparent 100%)`,
          }}
        />
      </nav>
    </div>
  );
}
