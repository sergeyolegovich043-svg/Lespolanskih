"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"name" | "role" | "exit">("name");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("role"), 500);
    const t2 = setTimeout(() => setPhase("exit"), 1000);
    const t3 = setTimeout(() => onComplete(), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  useEffect(() => {
    document.body.classList.add("loading");
    return () => document.body.classList.remove("loading");
  }, []);

  const nameChars = "ПОЛЯНСКИХ".split("");
  const roleText = "EXECUTIVE PRODUCER";

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          className="fixed inset-0 z-[10000] bg-primary flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Name */}
          <div className="relative flex gap-[2px] md:gap-1 mb-5">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-dark"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Accent line */}
          <motion.div
            className="h-[2px] bg-accent mb-5"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          />

          {/* Role */}
          <motion.span
            className="text-xs md:text-sm tracking-[0.4em] text-muted font-display"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === "role" ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {roleText}
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
