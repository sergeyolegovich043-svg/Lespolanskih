"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { advantages } from "@/lib/constants";

export default function WhyMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const decoY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const decoY2 = useTransform(scrollYProgress, [0, 1], [60, -80]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Parallax decorations */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-[350px] h-[350px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ y: decoY1, background: "radial-gradient(circle, #E84233 0%, transparent 70%)" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[8%] w-[1px] h-20 bg-gradient-to-b from-accent/20 to-transparent pointer-events-none rotate-12"
        style={{ y: decoY2 }}
      />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Преимущества"
          title="Почему работают со мной"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.id}
              className="group relative bg-white p-8 md:p-10 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl font-display font-bold text-secondary group-hover:text-accent/15 transition-colors duration-500 mb-6 leading-none">
                {String(adv.id).padStart(2, "0")}
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-display font-bold mb-3 text-dark group-hover:text-accent transition-colors duration-300">
                {adv.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed group-hover:text-dark/60 transition-colors duration-300">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
