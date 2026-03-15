"use client";

import { motion } from "framer-motion";

export default function NdaBlock() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-dark text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Content */}
          <div className="relative p-10 md:p-16 lg:p-20 text-center">
            {/* Shield icon */}
            <motion.div
              className="mx-auto mb-8 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </motion.div>

            <motion.h3
              className="text-3xl md:text-4xl font-display font-bold mb-5 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Конфиденциальные проекты
            </motion.h3>

            <motion.p
              className="text-white/60 max-w-lg mx-auto leading-relaxed text-base md:text-lg mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Часть проектов не может быть представлена публично в силу
              договоров о неразглашении. Это не ограничение, а{" "}
              <span className="text-accent font-medium">
                показатель уровня доверия
              </span>{" "}
              со стороны клиентов и профессиональной ответственности.
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-6 text-xs text-white/30 tracking-[0.2em] uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <span>NDA Protected</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              <span>Confidential</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              <span>Trust Level</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
