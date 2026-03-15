"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* Single smooth spring — the only scroll-linked value */
  const smooth = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const bgY = useTransform(smooth, [0, 1], [0, 120]);
  const contentY = useTransform(smooth, [0, 1], [0, 180]);
  const opacity = useTransform(smooth, [0, 0.6], [1, 0]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo — slow parallax */}
      <motion.div
        className="absolute inset-[-5%] will-change-transform"
        style={{ y: bgY }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
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

      {/* Content — faster parallax */}
      <motion.div
        className="relative z-10 text-left px-6 md:px-12 lg:px-20 xl:px-32 w-full max-w-[1400px] mx-auto will-change-transform"
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
