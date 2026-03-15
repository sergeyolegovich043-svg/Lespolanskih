"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "items-start";

  return (
    <motion.div
      className={`flex flex-col gap-5 mb-16 md:mb-24 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {label && (
        <span className="text-accent text-xs md:text-sm font-medium tracking-[0.3em] uppercase font-display">
          — {label}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[0.95]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
