"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({
  children,
  y = 16,
  delay = 0,
}: { children: React.ReactNode; y?: number; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
