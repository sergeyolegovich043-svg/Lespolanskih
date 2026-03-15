"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  once?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  splitBy?: "char" | "word";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  staggerChildren = 0.03,
  once = true,
  tag = "div",
  splitBy = "char",
}: AnimatedTextProps) {
  const items = splitBy === "char" ? text.split("") : text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const Tag = tag;

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
    >
      <Tag className="flex flex-nowrap" style={{ perspective: "1000px" }}>
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
            style={{ transformOrigin: "bottom" }}
          >
            {item === " " ? "\u00A0" : item}
            {splitBy === "word" && index < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
