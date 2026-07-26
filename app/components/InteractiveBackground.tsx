"use client";

import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const handleMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        el.style.setProperty("--x", `${(x * 100).toFixed(2)}%`);
        el.style.setProperty("--y", `${(y * 100).toFixed(2)}%`);
        el.style.setProperty("--px", (x - 0.5).toFixed(3));
        el.style.setProperty("--py", (y - 0.5).toFixed(3));
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="cyber-bg" aria-hidden="true">
      <div className="cyber-bg__grid" />
      <div className="cyber-bg__glow" />
      <div className="cyber-bg__vignette" />
    </div>
  );
};

export default InteractiveBackground;
