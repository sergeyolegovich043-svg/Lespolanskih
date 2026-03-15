"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "glass-strong py-4" : "py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className={`text-xl md:text-2xl font-display font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-dark' : 'text-white'}`}>
              полянских
              <span className="text-accent">.</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative text-[13px] transition-colors duration-300 font-medium tracking-wide group uppercase ${scrolled ? 'text-muted hover:text-dark' : 'text-white/70 hover:text-white'}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="ml-2 px-6 py-2.5 text-[13px] font-semibold bg-accent text-white rounded-full hover:bg-accent-dark transition-all duration-300 tracking-wide uppercase"
            >
              Связаться
            </button>
          </motion.div>

          {/* Mobile Hamburger */}
          <motion.button
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-[110]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <motion.span
              className={`block w-6 h-[2px] origin-center transition-colors duration-500 ${scrolled || mobileOpen ? 'bg-dark' : 'bg-white'}`}
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 3.5 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`block w-6 h-[2px] origin-center transition-colors duration-500 ${scrolled || mobileOpen ? 'bg-dark' : 'bg-white'}`}
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -3.5 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[105] bg-primary flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-display font-bold tracking-tight text-dark hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="mt-4 px-10 py-4 text-lg font-semibold bg-accent text-white rounded-full hover:bg-accent-dark transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Связаться
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
