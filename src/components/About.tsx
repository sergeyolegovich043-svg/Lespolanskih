"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "50+", label: "Проектов" },
  { value: "5+", label: "Лет опыта" },
  { value: "30+", label: "Брендов и артистов" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="О себе"
          title="Продюсер, который доводит идею до результата"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text Content */}
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-lg md:text-xl text-dark/80 leading-relaxed">
              <span className="text-accent font-display font-bold">
                Полянских Олеся Юрьевна
              </span>{" "}
              — исполнительный и креативный продюсер с опытом в музыкальных
              клипах, рекламных проектах, digital-контенте, fashion-съемках,
              подкастах и видеопродакшне.
            </p>
            <p className="text-base md:text-lg text-dark/50 leading-relaxed">
              Умею собирать команду под задачу, координировать процесс от первой
              идеи до финального продукта и быть связующим звеном между клиентом
              и исполнителями. Каждый проект — это система, где креатив и
              организация работают вместе.
            </p>
            <p className="text-base md:text-lg text-dark/50 leading-relaxed">
              Работаю на стыке визуального вкуса, логистики и
              продакшн-мышления. Понимаю артистов, бренды и digital-среду.
              Говорю на одном языке с каждой стороной проекта.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted mt-2 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <Image
                src="/images/hero-about.jpg"
                alt="Полянских Олеся Юрьевна — Продюсер"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/10 via-transparent to-transparent" />

              {/* Floating label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4">
                  <p className="text-xs text-muted uppercase tracking-[0.2em] font-display">
                    Executive Producer
                  </p>
                  <p className="text-sm text-dark font-medium mt-1">
                    Музыка · Реклама · Digital · Fashion
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
