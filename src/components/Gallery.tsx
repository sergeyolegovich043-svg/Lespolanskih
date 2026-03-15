"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { galleryItems } from "@/lib/constants";

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
        item.span || ""
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <div
        className="w-full h-full min-h-[200px] md:min-h-[250px] relative"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-[10px] tracking-[0.2em] text-accent uppercase block mb-1 font-semibold">
            {item.category}
          </span>
          <span className="text-lg font-display font-bold text-white">
            {item.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Визуальный поток"
          title="Галерея"
          subtitle="Backstage, процесс, команда — атмосфера живого продакшна"
          align="center"
        />

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
