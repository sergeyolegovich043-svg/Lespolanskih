"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { advantages } from "@/lib/constants";

export default function WhyMe() {
  return (
    <section className="section-padding relative overflow-hidden">
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
