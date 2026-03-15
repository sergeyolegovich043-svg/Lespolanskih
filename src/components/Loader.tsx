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
          className="fixed inset-0 z-[10000] bg-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Logo — top-left, same position as Navbar */}
          <div className="px-6 md:px-12 py-6">
            <motion.span
              className="text-xl md:text-2xl font-display font-bold tracking-tight text-dark"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              х
              <span className="text-accent">.</span>
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
