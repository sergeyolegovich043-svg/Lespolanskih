"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contactInfo, projectTypes } from "@/lib/constants";

interface FormData {
  name: string;
  contact: string;
  projectType: string;
  description: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    contact: "",
    projectType: "",
    description: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const decoY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const decoY2 = useTransform(scrollYProgress, [0, 1], [50, -100]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Укажите имя";
    if (!form.contact.trim()) newErrors.contact = "Укажите контакт";
    if (!form.projectType) newErrors.projectType = "Выберите тип проекта";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", contact: "", projectType: "", description: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = (field: keyof FormData) =>
    `w-full bg-transparent border-b-2 ${
      errors[field] ? "border-accent" : "border-border"
    } py-4 text-dark placeholder:text-dim focus:border-accent transition-colors duration-300 outline-none text-sm md:text-base`;

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Parallax decorations */}
      <motion.div
        className="absolute top-[10%] left-[8%] w-[250px] h-[250px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ y: decoY1, background: "radial-gradient(circle, #E84233 0%, transparent 70%)" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-[1px] h-24 bg-gradient-to-b from-accent/15 to-transparent pointer-events-none rotate-[15deg]"
        style={{ y: decoY2 }}
      />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Контакт"
          title="Давайте обсудим проект"
          subtitle="Расскажите о задаче — и мы найдем лучшее решение"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center text-center py-16 md:py-20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold mb-3">
                    Заявка отправлена
                  </h3>
                  <p className="text-muted text-sm mb-6">
                    Свяжусь с вами в ближайшее время
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm text-accent hover:text-accent-dark font-semibold transition-colors"
                  >
                    Отправить еще →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name */}
                  <div>
                    <label className="text-xs text-muted tracking-[0.15em] uppercase mb-2 block font-display font-semibold">
                      Имя *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={inputClasses("name")}
                      placeholder="Как к вам обращаться"
                    />
                    {errors.name && (
                      <span className="text-accent text-xs mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="text-xs text-muted tracking-[0.15em] uppercase mb-2 block font-display font-semibold">
                      Контакт *
                    </label>
                    <input
                      type="text"
                      value={form.contact}
                      onChange={(e) =>
                        setForm({ ...form, contact: e.target.value })
                      }
                      className={inputClasses("contact")}
                      placeholder="Telegram / Телефон / Email"
                    />
                    {errors.contact && (
                      <span className="text-accent text-xs mt-1 block">
                        {errors.contact}
                      </span>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="text-xs text-muted tracking-[0.15em] uppercase mb-2 block font-display font-semibold">
                      Тип проекта *
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) =>
                        setForm({ ...form, projectType: e.target.value })
                      }
                      className={`${inputClasses("projectType")} appearance-none cursor-pointer bg-transparent`}
                    >
                      <option value="" disabled>
                        Выберите тип проекта
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <span className="text-accent text-xs mt-1 block">
                        {errors.projectType}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <label className="text-xs text-muted tracking-[0.15em] uppercase mb-2 block font-display font-semibold">
                      О проекте
                    </label>
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      className={`${inputClasses("description")} resize-none min-h-[120px]`}
                      placeholder="Коротко опишите задачу или идею"
                      rows={4}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-5 bg-accent text-white rounded-2xl font-bold text-sm tracking-wide hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {status === "sending" ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Отправка...
                      </span>
                    ) : (
                      "Отправить заявку"
                    )}
                  </motion.button>

                  {status === "error" && (
                    <p className="text-accent text-sm text-center">
                      Ошибка отправки. Попробуйте связаться напрямую.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-8">
                Прямой контакт
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted group-hover:text-white transition-colors duration-300"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-muted block uppercase tracking-wider font-medium">
                      Телефон
                    </span>
                    <span className="text-dark font-medium group-hover:text-accent transition-colors duration-300">
                      {contactInfo.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href={contactInfo.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-muted group-hover:text-white transition-colors duration-300"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-muted block uppercase tracking-wider font-medium">
                      Telegram
                    </span>
                    <span className="text-dark font-medium group-hover:text-accent transition-colors duration-300">
                      {contactInfo.telegram}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted group-hover:text-white transition-colors duration-300"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-muted block uppercase tracking-wider font-medium">
                      Instagram
                    </span>
                    <span className="text-dark font-medium group-hover:text-accent transition-colors duration-300">
                      {contactInfo.instagram}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted group-hover:text-white transition-colors duration-300"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-muted block uppercase tracking-wider font-medium">
                      Email
                    </span>
                    <span className="text-dark font-medium group-hover:text-accent transition-colors duration-300">
                      {contactInfo.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional info */}
            <div className="p-7 rounded-2xl bg-secondary">
              <p className="text-sm text-dark/60 leading-relaxed">
                Расскажите о своем проекте, и я свяжусь с вами, чтобы обсудить
                детали. Обычно отвечаю в течение{" "}
                <span className="text-accent font-semibold">24 часов</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
