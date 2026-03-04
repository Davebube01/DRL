"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Check,
  Eye,
  Target,
  Sprout,
  Award,
  TrendingUp,
  Shield,
  Leaf,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────── helpers ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function useSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

/* ─────────────────────────────── data ────────────────────────────── */
const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Acres Under Cultivation" },
  { value: "50+", label: "Team Members" },
  { value: "5", label: "Business Divisions" },
];

const pillars = [
  {
    icon: Leaf,
    title: "Livestock & Animal Husbandry",
    desc: "Cattle ranching, dairy, poultry, and goat farming managed with responsible animal husbandry practices.",
  },
  {
    icon: Sprout,
    title: "Crop Production",
    desc: "Precision irrigation and modern cultivation techniques for vegetables, grains, and high-value cash crops.",
  },
  {
    icon: TrendingUp,
    title: "Food Processing & Value Addition",
    desc: "Modern processing facilities turn farm output into packaged, market-ready products under private label.",
  },
  {
    icon: Shield,
    title: "Agro-Allied & Support Services",
    desc: "Farm inputs, expert agro consultancy, and equipment partnerships to empower farmers across Nigeria.",
  },
];

const impactStats = [
  {
    stat: "60%",
    label: "Increase in crop yield through modern farming techniques",
  },
  {
    stat: "45%",
    label: "Reduction in post-harvest losses via cold-chain systems",
  },
  {
    stat: "2×",
    label: "Faster time-to-market with integrated supply chains",
  },
  {
    stat: "₦B+",
    label: "Agribusiness value delivered to the Nigerian economy",
  },
];

const operations = [
  {
    label: "Livestock Management",
    sub: "Cattle · Dairy · Poultry",
    image:
      "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80",
    span: "col-span-2 row-span-2",
  },
  {
    label: "Precision Crop Farming",
    sub: "Irrigation · Smart Agriculture",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    span: "col-span-1",
  },
  {
    label: "Food Processing",
    sub: "Processing · Packaging",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    span: "col-span-1",
  },
];

const benefits = [
  "Increase Farm Revenue",
  "Reduce Operational Costs",
  "Improve Soil & Livestock Health",
  "Access Institutional Supply Markets",
  "Expert Agro-Allied Consultancy",
  "Sustainable Farming Practices",
];

/* ─────────────────────────────── component ───────────────────────── */
export default function AboutDetailed() {
  const hero = useSection();
  const statsBar = useSection();
  const story = useSection();
  const visionMission = useSection();
  const pillarsSection = useSection();
  const impact = useSection();
  const showcase = useSection();
  const benefitsSection = useSection();

  return (
    <article id="about" className="bg-white">
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — full-bleed image with overlay
      ═══════════════════════════════════════════════════════════════ */}
      <div
        ref={hero.ref}
        className="relative min-h-[560px] sm:min-h-[640px] flex items-end overflow-hidden"
      >
        {/* bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80')",
          }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071f14]/95 via-[#0a3325]/60 to-transparent" />
        {/* side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f14]/40 to-transparent" />

        {/* floating badge */}
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={hero.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="absolute top-8 left-6 sm:left-10 inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40 text-emerald-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full"
        >
          <Leaf className="w-3.5 h-3.5" />
          About Us
        </motion.span>

        {/* content */}
        <div className="relative z-10 container-custom pb-16 pt-36 sm:pb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={hero.inView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Diversity Resources Limited
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Growing Nigeria&apos;s{" "}
              <em className="not-italic text-emerald-400">Agricultural</em>{" "}
              Future.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-emerald-100/75 text-base sm:text-lg max-w-lg leading-relaxed"
            >
              A fully integrated agribusiness — combining livestock management,
              precision farming, food processing, and supply chain solutions to
              deliver value from farm to table.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="#story"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/30 text-white bg-white/10 hover:bg-white/20 text-sm font-semibold px-6 py-3 rounded-full transition-colors backdrop-blur-sm"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          2. STAT PILLS — four quick metrics
      ═══════════════════════════════════════════════════════════════ */}
      {/* <div ref={statsBar.ref} className="bg-[#0f3f2d]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={statsBar.inView ? "visible" : "hidden"}
          className="container-custom grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex flex-col items-center text-center py-8 px-4"
            >
              <span className="text-3xl sm:text-4xl font-bold text-emerald-300">
                {s.value}
              </span>
              <span className="mt-1.5 text-emerald-100/55 text-xs font-medium uppercase tracking-wider">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div> */}

      {/* ═══════════════════════════════════════════════════════════════
          3. STORY — two-column
      ═══════════════════════════════════════════════════════════════ */}
      <section id="story" ref={story.ref} className="py-24 sm:py-32 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* left — image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={story.inView ? "visible" : "hidden"}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b91?w=800&q=80"
              alt="DRL farm operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            {/* floating badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={story.inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-stone-900 text-sm leading-tight">
                  10+ Years in Agriculture
                </p>
                <p className="text-stone-500 text-xs mt-0.5">
                  Trusted by farms across Nigeria
                </p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* right — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={story.inView ? "visible" : "hidden"}
            className="space-y-6 order-1 lg:order-2"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-200"
            >
              <Sprout className="w-3.5 h-3.5" />
              Our Story
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight"
            >
              Built on the{" "}
              <em className="not-italic text-emerald-600">Soil of Nigeria</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-sm sm:text-base leading-relaxed"
            >
              Diversity Resources Limited was founded with a clear conviction —
              that Nigeria&apos;s agricultural potential, when properly
              harnessed, can feed a continent and power an economy. We started
              with cattle ranching and have since grown into a comprehensive
              agribusiness enterprise.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-sm sm:text-base leading-relaxed"
            >
              Today, we combine livestock management, precision crop production,
              modern food processing, and integrated supply chains to deliver
              real value — from farm to table. We partner with farmers,
              cooperatives, institutions, and investors across Nigeria.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow shadow-emerald-200"
              >
                See Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. VISION & MISSION
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={visionMission.ref} className="py-20 sm:py-24 bg-stone-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionMission.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-200 mb-4">
              Direction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Our Vision &amp;{" "}
              <em className="not-italic text-emerald-600">Mission</em>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={visionMission.inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Vision */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 flex items-start gap-5"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-7 h-7 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-stone-500 leading-relaxed text-sm sm:text-base">
                  To become a leading integrated agricultural enterprise in
                  Nigeria — recognized for excellence in livestock production,
                  crop farming, food processing, and sustainable supply chain
                  management.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 flex items-start gap-5"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-stone-500 leading-relaxed text-sm sm:text-base">
                  To deliver high-quality agricultural and processed food
                  products through sustainable farming practices, innovation,
                  and strong value-chain management — empowering Nigeria&apos;s
                  food economy from the ground up.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. BUSINESS PILLARS — four service areas
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={pillarsSection.ref} className="py-24 sm:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pillarsSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-14"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-200 mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Our Core{" "}
              <em className="not-italic text-emerald-600">Business Pillars</em>
            </h2>
            <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
              From land to last mile — DRL operates across five integrated
              divisions to ensure quality and efficiency at every level.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={pillarsSection.inView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group bg-stone-50 hover:bg-emerald-600 rounded-3xl p-6 transition-all duration-300 cursor-default border border-stone-100 hover:border-transparent hover:shadow-xl hover:shadow-emerald-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors">
                  <p.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[10px] font-bold text-stone-400 group-hover:text-emerald-200 uppercase tracking-widest transition-colors">
                  0{i + 1}
                </span>
                <h3 className="text-base font-bold text-stone-900 group-hover:text-white mt-1 mb-2 transition-colors">
                  {p.title}
                </h3>
                <p className="text-stone-500 group-hover:text-emerald-100 text-sm leading-relaxed transition-colors">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. IMPACT — dark strip with big numbers
      ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={impact.ref}
        className="bg-[#0f3f2d] relative overflow-hidden py-24 sm:py-32"
      >
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
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
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impact.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Driving Results{" "}
              <em className="not-italic text-emerald-400">Through</em> Modern
              Agribusiness
            </h2>
            <p className="mt-5 text-emerald-100/65 text-sm sm:text-base leading-relaxed max-w-md">
              Our investments in technology, training, and infrastructure are
              delivering measurable impact for farmers and communities across
              Nigeria.
            </p>
          </motion.div>

          {/* right — stat cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={impact.inView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {impactStats.map((item) => (
              <motion.div
                key={item.stat}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <span className="block text-5xl font-bold text-emerald-400 mb-3">
                  {item.stat}
                </span>
                <p className="text-emerald-100/70 text-sm leading-relaxed">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. OPERATION SHOWCASE — image grid
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={showcase.ref} className="py-24 sm:py-32 bg-stone-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={showcase.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-12"
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-200 mb-4">
              Our Operations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Explore DRL&apos;s{" "}
              <em className="not-italic text-emerald-600">
                Agricultural Solutions
              </em>
            </h2>
          </motion.div>

          {/* 3-column asymmetric grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={showcase.inView ? "visible" : "hidden"}
            className="grid sm:grid-cols-3 gap-4 auto-rows-[200px]"
          >
            {/* large tile */}
            <motion.div
              variants={fadeUp}
              className="sm:col-span-2 sm:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=900&q=80"
                alt="Livestock Management"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                  01
                </span>
                <p className="text-white font-bold text-xl mt-1">
                  Livestock Management
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Cattle · Dairy · Poultry
                </p>
              </div>
            </motion.div>

            {/* small tile 1 */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=80"
                alt="Precision Crop Farming"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                  02
                </span>
                <p className="text-white font-bold text-sm mt-0.5">
                  Precision Crop Farming
                </p>
              </div>
            </motion.div>

            {/* small tile 2 */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80"
                alt="Food Processing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                  03
                </span>
                <p className="text-white font-bold text-sm mt-0.5">
                  Food Processing
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. BENEFITS + CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={benefitsSection.ref} className="py-24 sm:py-32 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* left — title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-200 mb-5">
              Why Partner With DRL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Discover{" "}
              <em className="not-italic text-emerald-600">
                Modern Farming Solutions
              </em>{" "}
              Built for Nigeria.
            </h2>
            <p className="mt-5 text-stone-500 text-sm sm:text-base leading-relaxed max-w-md">
              Whether you&apos;re a smallholder or institutional investor, our
              integrated approach delivers tangible returns at every stage of
              the agricultural value chain.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow shadow-emerald-200"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-stone-200 hover:border-emerald-300 text-stone-700 hover:text-emerald-700 text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* right — benefit rows */}
          <motion.ul
            variants={stagger}
            initial="hidden"
            animate={benefitsSection.inView ? "visible" : "hidden"}
            className="divide-y divide-stone-100 mt-2"
          >
            {benefits.map((b) => (
              <motion.li
                key={b}
                variants={fadeUp}
                className="group flex items-center justify-between py-5 cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-50 group-hover:bg-emerald-600 border border-emerald-200 group-hover:border-emerald-600 flex items-center justify-center transition-all">
                    <Check className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors" />
                  </span>
                  <span className="text-stone-800 font-semibold text-base sm:text-lg group-hover:text-emerald-700 transition-colors">
                    {b}
                  </span>
                </div>
                <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-stone-200 group-hover:bg-emerald-600 group-hover:border-emerald-600 flex items-center justify-center transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-white transition-colors" />
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </article>
  );
}
