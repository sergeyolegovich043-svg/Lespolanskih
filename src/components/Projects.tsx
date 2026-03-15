"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/lib/constants";

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  return (
    <motion.div
      className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white hover-lift"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      onClick={() => onSelect(project)}
      layout
    >
      {/* Image */}
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category badge */}
        <div className="absolute top-5 left-5 z-10">
          <span className="text-[10px] tracking-[0.15em] text-dark font-semibold uppercase bg-white/90 backdrop-blur-md px-4 py-2 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Photo count */}
        <div className="absolute top-5 right-5 z-10">
          <span className="text-[10px] tracking-wide text-dark/70 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-1.5 font-medium">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21,15 16,10 5,21" />
            </svg>
            {project.images.length}
          </span>
        </div>

        {/* Play icon for video */}
        {project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/30">
              <svg
                width="16"
                height="18"
                viewBox="0 0 10 12"
                fill="none"
                className="ml-1"
              >
                <path d="M0 0L10 6L0 12V0Z" fill="white" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content below image */}
      <div className="p-6 md:p-7">
        <div className="text-[11px] text-accent font-semibold mb-2 tracking-wide uppercase">
          {project.role}
        </div>
        <h3 className="text-lg md:text-xl font-display font-bold leading-tight mb-2 text-dark">
          {project.title}
        </h3>
        <p className="text-sm text-muted line-clamp-2">
          {project.description}
        </p>

        {/* Arrow */}
        <div className="mt-5 flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Подробнее</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () =>
    setActiveImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () =>
    setActiveImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-white/95 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-border shadow-2xl shadow-dark/10 z-10"
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-dark hover:border-accent/30 transition-all duration-300 shadow-sm"
          aria-label="Закрыть"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M1 13L13 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Image Carousel */}
        <div className="relative aspect-video w-full bg-secondary overflow-hidden rounded-t-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.images[activeImage]}
                alt={`${project.title} — фото ${activeImage + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-muted hover:text-dark transition-all duration-300 shadow-sm"
                aria-label="Предыдущее фото"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-muted hover:text-dark transition-all duration-300 shadow-sm"
                aria-label="Следующее фото"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[11px] text-dark/70 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full font-medium">
            {activeImage + 1} / {project.images.length}
          </div>
        </div>

        {/* Thumbnail strip */}
        {project.images.length > 1 && (
          <div className="flex gap-2 p-4 overflow-x-auto bg-secondary/50">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  i === activeImage
                    ? "border-accent opacity-100"
                    : "border-transparent opacity-40 hover:opacity-80"
                }`}
              >
                <Image
                  src={img}
                  alt={`Превью ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="p-7 md:p-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] tracking-[0.15em] text-white uppercase bg-accent px-4 py-1.5 rounded-full font-semibold">
              {project.category}
            </span>
            <span className="text-[10px] tracking-[0.15em] text-muted uppercase bg-secondary px-4 py-1.5 rounded-full font-medium">
              {project.format}
            </span>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-display font-bold mb-3 tracking-tight">
              {project.title}
            </h3>
            <p className="text-accent font-semibold">{project.role}</p>
          </div>

          <p className="text-dark/70 leading-relaxed text-lg">
            {project.description}
          </p>

          <div className="border-t border-border pt-6">
            <h4 className="text-xs font-display font-bold text-dark tracking-[0.15em] uppercase mb-4">
              Что было сделано
            </h4>
            <p className="text-dark/60 leading-relaxed">{project.details}</p>
          </div>

          {project.videoUrl && (
            <div className="pt-2">
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent-dark transition-colors duration-300"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 10 12"
                  fill="none"
                >
                  <path d="M0 0L10 6L0 12V0Z" fill="currentColor" />
                </svg>
                <span>Смотреть видео</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Портфолио"
          title="Избранные проекты"
          subtitle="Музыкальные клипы, рекламные кампании, digital-контент, fashion и кинопроизводство"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {displayedProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelected}
            />
          ))}
        </div>

        {/* Show More */}
        {!showAll && projects.length > 6 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 text-sm font-semibold bg-dark text-white rounded-full hover:bg-dark/80 transition-all duration-300"
            >
              Показать все проекты
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
