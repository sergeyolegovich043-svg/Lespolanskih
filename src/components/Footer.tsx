"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Large brand text */}
        <motion.div
          className="py-16 md:py-20 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-none">
            полянских
            <span className="text-accent">.</span>
          </span>
        </motion.div>

        {/* Footer Grid */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-white/40 leading-relaxed">
              Полянских Олеся Юрьевна
              <br />
              Исполнительный / Креативный продюсер
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs text-white/30 tracking-[0.2em] uppercase font-display font-bold mb-5">
              Навигация
            </h4>
            {[
              { label: "О себе", href: "#about" },
              { label: "Проекты", href: "#projects" },
              { label: "Услуги", href: "#services" },
              { label: "Галерея", href: "#gallery" },
              { label: "Контакт", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-white/50 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Contacts */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs text-white/30 tracking-[0.2em] uppercase font-display font-bold mb-5">
              Связь
            </h4>
            <a
              href={contactInfo.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/50 hover:text-accent transition-colors duration-300"
            >
              Telegram
            </a>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/50 hover:text-accent transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="block text-sm text-white/50 hover:text-accent transition-colors duration-300"
            >
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="block text-sm text-white/50 hover:text-accent transition-colors duration-300"
            >
              {contactInfo.phoneFormatted}
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Полянских Олеся. Все права защищены.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-white/40 hover:text-accent transition-colors duration-300"
          >
            <span>Наверх</span>
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-y-0.5 transition-transform duration-300"
            >
              <path d="M18 15l-6-6-6 6" />
            </motion.svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
