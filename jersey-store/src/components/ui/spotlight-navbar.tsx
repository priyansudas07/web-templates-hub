import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <nav className="relative h-10 px-1 flex items-center transition-all duration-300">
        {/* Nav Items List with Floating Active Pill */}
        <ul className="relative flex items-center h-full gap-1 z-10">
          {items.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <li key={item.href} className="relative h-full flex items-center justify-center px-0.5">
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-y-1 inset-x-0 rounded-full bg-[#E3261E]/20 border border-[#E3261E]/40 shadow-[0_0_12px_rgba(227,38,30,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Link
                  to={item.href}
                  onClick={() => onItemClick?.(item, idx)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative z-10 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200 rounded-full flex items-center gap-1.5",
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
      </nav>
    </div>
  );
}
