"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"logo" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exit"), 1000);
    const t2 = setTimeout(() => onComplete(), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  useEffect(() => {
    document.body.classList.add("loading");
    return () => document.body.classList.remove("loading");
  }, []);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          className="fixed inset-0 z-[10000] bg-primary flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.span
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            Х
            <span className="text-accent">.</span>
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
