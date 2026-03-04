"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Livestock & Animal Husbandry",
    subtitle: "Cattle · Dairy · Poultry · Goats",
    image:
      "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80",
  },
  {
    number: "02",
    title: "Crop Production",
    subtitle: "Vegetables · Grains · Cash Crops · Irrigation",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    number: "03",
    title: "Food Processing & Value Addition",
    subtitle: "Processing · Packaging · Private Label",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    number: "04",
    title: "Agro-Allied & Support Services",
    subtitle: "Inputs · Consultancy · Equipment",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  },
  {
    number: "05",
    title: "Supply & Distribution",
    subtitle: "Wholesale · Institutional · Regional Markets",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
];

export default function ServicesScroll() {
  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsLg(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const CARD_WIDTH = 280; // px, matches card min-w-[280px]
  const GAP = 20; // px gap between cards

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, services.length - 1));
    setActiveIndex(clamped);
    scrollRef.current?.scrollTo({
      left: clamped * (CARD_WIDTH + GAP),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services-preview"
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-20 sm:py-28"
    >
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="container-custom mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-200 mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Our Services
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-3 max-w-md">
            End-to-end agricultural solutions — from land to last mile delivery.
          </p>
        </motion.div>

        {/* Nav + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 flex-shrink-0"
        >
          {/* Prev */}
          <button
            onClick={() => scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous service"
            className="w-11 h-11 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 disabled:opacity-30 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={() => scrollTo(activeIndex + 1)}
            disabled={activeIndex === services.length - 1}
            aria-label="Next service"
            className="w-11 h-11 rounded-full bg-stone-900 flex items-center justify-center text-white hover:bg-emerald-700 disabled:opacity-30 transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* "See Our Services" pill CTA */}
          <Link
            href="/services"
            className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-200"
          >
            See Our Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* ── Scrollable Cards ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        ref={scrollRef}
        className="flex items-start gap-5 overflow-x-auto scroll-smooth pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] pr-8 pb-16"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={(e) => {
          const el = e.currentTarget;
          const newIndex = Math.round(el.scrollLeft / (CARD_WIDTH + GAP));
          setActiveIndex(newIndex);
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={
              isInView ? { opacity: 1, y: isLg && i % 2 === 1 ? 40 : 0 } : {}
            }
            transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
            className="relative flex-none rounded-[1.5rem] overflow-hidden bg-stone-900 cursor-pointer group"
            style={{ width: CARD_WIDTH, height: 380 }}
            onClick={() => scrollTo(i)}
          >
            {/* Cover image */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

            {/* Number badge */}
            <span className="absolute top-4 left-5 text-xs font-bold text-white/60 tracking-widest">
              {service.number}
            </span>

            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white/50 text-[11px] font-medium uppercase tracking-widest mb-1">
                {service.subtitle}
              </p>
              <h3 className="text-white font-bold text-lg leading-snug">
                {service.title}
              </h3>
            </div>

            {/* Active ring */}
            {i === activeIndex && (
              <div className="absolute inset-0 ring-2 ring-emerald-400 rounded-[1.5rem] pointer-events-none" />
            )}
          </motion.div>
        ))}

        {/* Trailing spacer */}
        <div className="flex-none w-8" />
      </motion.div>

      {/* ── Dot indicators ─────────────────────────────────────── */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to service ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-emerald-600 w-6"
                : "bg-stone-300 w-1.5 hover:bg-stone-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
