"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────── animation helpers ─────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function useSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

/* ─────────────────────────────── data ──────────────────────────────────── */
const categories = [
  "All",
  "Livestock",
  "Crop Production",
  "Food Processing",
  "Agro-Allied",
  "Supply & Distribution",
];

const featured = [
  {
    tag: "Livestock",
    title: "Livestock & Animal Husbandry Services",
    description:
      "Comprehensive livestock management covering cattle breeding, dairy, poultry, and goat rearing — all managed with responsible animal husbandry practices and veterinary support.",
    items: [
      "Cattle breeding and ranch management",
      "Beef & dairy production and supply",
      "Poultry farming (broilers & layers)",
      "Livestock fattening programs",
      "Animal feed formulation and supply",
      "Veterinary support and herd health management",
    ],
    image:
      "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80",
  },
  {
    tag: "Crop Production",
    title: "Crop Production Services",
    description:
      "Modern cultivation techniques, precision irrigation, and contract farming partnerships that maximize yield and quality across diverse crop categories.",
    items: [
      "Commercial crop farming",
      "Pepper and vegetable cultivation",
      "Grain and staple crop production",
      "Seedling production and nursery management",
      "Irrigation farming systems",
      "Contract farming partnerships",
    ],
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
];

const serviceCards = [
  {
    number: "03",
    tag: "Food Processing",
    title: "Food Processing & Value Addition",
    description:
      "Modern processing facilities transform farm output into packaged, market-ready products — from bulk processing to private-label food production.",
    items: [
      "Processing of farm produce",
      "Packaging and branding",
      "Bulk processing for distributors",
      "Private label food production",
    ],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    number: "04",
    tag: "Agro-Allied",
    title: "Agro-Allied & Support Services",
    description:
      "Farm inputs, expert agro consultancy, and equipment support — empowering farmers and cooperatives to optimize operations and grow profitably.",
    items: [
      "Farm input supply (seeds, feed, fertilizers)",
      "Agricultural consultancy services",
      "Ranch setup and farm management advisory",
      "Farm equipment sourcing support",
    ],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  },
  {
    number: "05",
    tag: "Supply & Distribution",
    title: "Supply & Distribution",
    description:
      "End-to-end distribution connecting our farms to institutional buyers, retailers, and regional markets with reliable, traceable supply chains.",
    items: [
      "Wholesale supply of livestock and farm produce",
      "Institutional supply (hotels, restaurants, supermarkets)",
      "Local and regional market distribution",
      "Partnership supply contracts",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
];

/* ─────────────────────────────── component ─────────────────────────────── */
export default function Services() {
  const header = useSection();
  const featuredSection = useSection();
  const cardsSection = useSection();
  const cta = useSection();

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <article id="services" className="bg-white">
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO HEADER
      ═══════════════════════════════════════════════════════════════ */}
      <div
        ref={header.ref}
        className="relative pt-36 pb-24 sm:pt-40 sm:pb-28 overflow-hidden"
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80"
          alt="Agricultural landscape"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Emerald accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-emerald-600/20 blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={header.inView ? "visible" : "hidden"}
            className="max-w-3xl w-full flex flex-col items-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block bg-white/10 backdrop-blur-sm text-emerald-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 mb-5"
            >
              What We Offer
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Our Comprehensive{" "}
              <em className="not-italic text-emerald-400">Services</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              From farm to table — Diversity Resources Limited provides
              end-to-end agricultural solutions that ensure quality,
              sustainability, and growth across Nigeria.
            </motion.p>

            {/* Category filter tabs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-900/40"
                      : "bg-white/10 backdrop-blur-sm border-white/25 text-white/80 hover:bg-white/20 hover:border-emerald-400 hover:text-emerald-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          2. FEATURED SERVICES — text-left + image-right rows
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={featuredSection.ref} className="py-20 sm:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuredSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="text-stone-900 font-bold text-lg">
              Our Featured Services
            </span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-bold">
              {featured.length}
            </span>
          </motion.div>

          <div className="space-y-16">
            {featured.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 36 }}
                animate={featuredSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`grid md:grid-cols-2 gap-8 lg:gap-14 items-center border-b border-stone-100 pb-16 last:border-0 last:pb-0 ${i % 2 !== 0 ? "md:[&>div:first-child]:order-last" : ""}`}
              >
                {/* left — text */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-200">
                      {item.tag}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5">
                    {item.items.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </span>
                        <span className="text-stone-600 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm hover:text-emerald-900 transition-colors group"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* right — image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. SERVICE CARDS GRID
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={cardsSection.ref} className="py-20 sm:py-24 bg-stone-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={cardsSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-xl mb-12"
          >
            <span className="inline-block bg-white text-emerald-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-200 mb-4">
              More Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Guiding Agribusiness{" "}
              <em className="not-italic text-emerald-600">Toward Growth</em>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={cardsSection.inView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serviceCards.map((card) => (
              <motion.div
                key={card.number}
                variants={fadeUp}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300"
              >
                {/* image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {card.tag}
                  </span>
                  <span className="absolute bottom-3 right-4 text-white/40 text-xs font-bold tracking-widest">
                    {card.number}
                  </span>
                </div>

                {/* body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {card.items.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-emerald-600" />
                        </span>
                        <span className="text-stone-500 text-xs leading-relaxed">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-sm hover:text-emerald-900 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. DARK CTA STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={cta.ref}
        className="bg-[#071f14] py-20 sm:py-24 relative overflow-hidden"
      >
        {/* grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="svc-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={cta.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div className="max-w-xl">
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Ready to grow with us?
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Creating Lasting{" "}
                <em className="not-italic text-emerald-400">
                  Change, Together
                </em>
              </h2>
              <p className="mt-4 text-emerald-100/60 text-sm sm:text-base leading-relaxed max-w-lg">
                Whether you&apos;re a farmer, investor, or institutional buyer —
                Diversity Resources Limited has the expertise and infrastructure
                to deliver value at every point in the agricultural chain.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={cta.inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="flex flex-col xs:flex-row sm:flex-row gap-3 flex-shrink-0 w-full lg:w-auto"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg w-full sm:w-auto"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white bg-white/10 hover:bg-white/20 text-sm font-semibold px-7 py-3.5 rounded-full transition-colors backdrop-blur-sm w-full sm:w-auto"
              >
                Back to Top
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
