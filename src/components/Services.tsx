"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/constants";

const serviceIcons: Record<number, React.ReactNode> = {
  // Продюсирование съемок — кинохлопушка
  1: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11v8a1 1 0 001 1h14a1 1 0 001-1v-8" />
      <path d="M4 11l2-6h12l2 6" />
      <path d="M8 5l2 6" />
      <path d="M14 5l2 6" />
      <path d="M12 15v4" />
      <path d="M9 15h6" />
    </svg>
  ),
  // Музыкальные клипы — play в круге
  2: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
    </svg>
  ),
  // Рекламные проекты — мегафон
  3: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 01-6 6" />
      <path d="M18 8V4l-8 4H6a2 2 0 00-2 2v0a2 2 0 002 2h4l8 4V8z" />
      <path d="M7 14v4a1 1 0 001 1h1a1 1 0 001-1v-3" />
    </svg>
  ),
  // Digital-контент — смартфон с play
  4: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <polygon points="11,9 15,12 11,15" fill="currentColor" stroke="none" />
      <line x1="10" y1="19" x2="14" y2="19" />
    </svg>
  ),
  // Fashion и Brand-съемки — диафрагма камеры
  5: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M14.31 8l5.74 9.94" />
      <path d="M9.69 8h11.48" />
      <path d="M7.38 12l5.74-9.94" />
      <path d="M9.69 16L3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="M16.62 12l-5.74 9.94" />
    </svg>
  ),
  // Подкасты и EdTech — микрофон
  6: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0014 0" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  ),
  // Координация команды — узлы-связи
  7: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <line x1="12" y1="8" x2="5" y2="16" />
      <line x1="12" y1="8" x2="19" y2="16" />
      <line x1="5" y1="19" x2="19" y2="19" />
    </svg>
  ),
  // Контроль реализации — прицел
  8: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Компетенции"
          title="Что я делаю"
          subtitle="Полный спектр продюсерских услуг — от идеи до готового продукта"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="group relative bg-white p-7 md:p-8 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              {/* Number */}
              <div className="text-[11px] font-display font-bold text-accent tracking-wider mb-6">
                {String(service.id).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="mb-6 text-dark/20 group-hover:text-accent transition-colors duration-500">
                {serviceIcons[service.id]}
              </div>

              {/* Content */}
              <h3 className="text-base md:text-lg font-display font-bold mb-3 text-dark group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed group-hover:text-dark/60 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
