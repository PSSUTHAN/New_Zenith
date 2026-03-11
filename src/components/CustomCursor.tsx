import { useState, useEffect } from "react";
import { motion, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

  // device pixel ratio. we'll use it to render the cursor at
  // device pixels but keep the on‑screen size the same as before.
  const [dpr, setDpr] = useState(() =>
    typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
  );

  // base sizes (in CSS pixels) for the dot and outer ring. bump these up
  // if you want a larger pointer overall.
  const BASE_DOT = 4;      // previously 2
  const BASE_RING = 20;    // previously 8

  useEffect(() => {
    const handleResize = () => {
      setDpr(window.devicePixelRatio || 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Dot */}
      {/* dot: render in device pixels but scale back so physical size stays BASE_DOT */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: BASE_DOT * dpr,
          height: BASE_DOT * dpr,
          scale: 1 / dpr,
        }}
        className="bg-amber-500 rounded-full fixed"
      />
      
      {/* Outer Circle */}
      <motion.div
        animate={{
          scale: (isHovering ? 2.5 : 1) * (1 / dpr),
          opacity: isHovering ? 0.5 : 1,
          borderWidth: isHovering ? "1px" : "2px",
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: BASE_RING * dpr,
          height: BASE_RING * dpr,
        }}
        className="border-amber-500/50 rounded-full fixed transition-colors duration-300"
      />

      {/* Radar Pulse (only on hover) */}
      {isHovering && (
        <motion.div
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            width: BASE_RING * dpr,
            height: BASE_RING * dpr,
            scale: 1 / dpr,
          }}
          className="border-amber-500 rounded-full fixed"
        />
      )}
    </div>
  );
}
