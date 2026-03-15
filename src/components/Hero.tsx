"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* Parallax layers — each moves at a different speed */
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /* Floating shapes parallax */
  const shape1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const shape2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shape3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const shape4Y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* === LAYER 0: Deepest background — slowest parallax === */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-secondary via-primary to-primary"
        style={{ y: bgY }}
      />

      {/* === LAYER 1: Hero photo — medium parallax + zoom === */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.0, ease: "easeOut" }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Олеся Полянских"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* === LAYER 2: Parallax mid layer === */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: midY }} />

      {/* === LAYER 3: Floating parallax shapes (Red Collar style) === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Accent circle — top right */}
        <motion.div
          className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full opacity-[0.07]"
          style={{
            y: shape1Y,
            background: "radial-gradient(circle, #E84233 0%, transparent 70%)",
          }}
        />
        {/* Large blurred ring — left */}
        <motion.div
          className="absolute top-[30%] -left-32 w-[400px] h-[400px] rounded-full border border-accent/10 opacity-40"
          style={{ y: shape2Y }}
        />
        {/* Small accent dot — bottom right */}
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-3 h-3 rounded-full bg-accent/30"
          style={{ y: shape3Y }}
        />
        {/* Diagonal line accent */}
        <motion.div
          className="absolute top-[60%] left-[10%] w-[1px] h-24 bg-gradient-to-b from-accent/20 to-transparent rotate-[20deg]"
          style={{ y: shape4Y }}
        />
        {/* Large soft circle — center */}
        <motion.div
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            y: shape2Y,
            background: "radial-gradient(circle, #E84233 0%, transparent 60%)",
          }}
        />
      </div>

      {/* === LAYER 4: Content — fastest parallax (foreground) === */}
      <motion.div
        className="relative z-10 text-left px-6 md:px-12 lg:px-20 xl:px-32 w-full max-w-[1400px] mx-auto"
        style={{ y: contentY, opacity }}
      >
        {/* Label */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block text-[10px] md:text-xs tracking-[0.3em] text-white/80 font-display font-medium uppercase">
            Исполнительный / Креативный продюсер
          </span>
        </motion.div>

        {/* Name - Large Red Collar style */}
        <div className="mb-3 md:mb-4">
          <AnimatedText
            text="ПОЛЯНСКИХ"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-none justify-start text-white whitespace-nowrap"
            delay={1.5}
            staggerChildren={0.03}
            duration={0.5}
          />
        </div>

        <div className="mb-8 md:mb-10">
          <AnimatedText
            text="ОЛЕСЯ"
            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-display font-light tracking-[0.15em] text-white/60 justify-start whitespace-nowrap"
            delay={1.8}
            staggerChildren={0.03}
            duration={0.4}
          />
        </div>

        {/* Accent line */}
        <motion.div
          className="h-[3px] w-12 md:w-16 bg-accent mb-8 md:mb-10"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.4 }}
        />

        {/* Tagline */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-white/70 max-w-md mb-10 md:mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5, ease: "easeOut" }}
        >
          Продюсирую визуальные проекты,
          <br className="hidden sm:block" />
          которые запоминаются
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5, ease: "easeOut" }}
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="group px-10 py-4 bg-accent text-white rounded-full font-semibold text-sm tracking-wide hover:bg-accent-dark transition-all duration-400 hover:shadow-lg hover:shadow-accent/20"
          >
            Смотреть проекты
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-10 py-4 text-white/60 hover:text-white border border-white/20 hover:border-white/40 rounded-full font-medium text-sm tracking-wide transition-all duration-400"
          >
            Связаться
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-6 md:left-12 lg:left-20 xl:left-32 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-display">
          Scroll
        </span>
        <motion.div
          className="w-[2px] h-8 bg-gradient-to-b from-accent/60 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
