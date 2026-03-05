"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import bg from "@/assets/bg.jpg";
import { Leaf, ChevronDown, ArrowRight } from "lucide-react";

// Floating leaf component
const FloatingLeaf = ({
  delay,
  duration,
  size,
  className,
}: {
  delay: number;
  duration: number;
  size: number;
  className: string;
}) => (
  <motion.div
    className={`absolute pointer-events-none opacity-20 ${className}`}
    initial={{ y: 0, rotate: 0 }}
    animate={{
      y: [-20, 20, -20],
      rotate: [-10, 10, -10],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Leaf className="text-emerald-300" style={{ width: size, height: size }} />
  </motion.div>
);

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg.src})` }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </motion.div>

      {/* Floating Leaves */}
      <FloatingLeaf
        delay={0}
        duration={6}
        size={40}
        className="top-20 left-[10%]"
      />
      <FloatingLeaf
        delay={1}
        duration={8}
        size={30}
        className="top-40 right-[15%]"
      />
      <FloatingLeaf
        delay={2}
        duration={7}
        size={50}
        className="bottom-40 left-[20%]"
      />
      <FloatingLeaf
        delay={0.5}
        duration={9}
        size={35}
        className="top-1/3 right-[10%]"
      />
      <FloatingLeaf
        delay={1.5}
        duration={6.5}
        size={25}
        className="bottom-1/4 right-[25%]"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container-custom text-center"
        style={{ y: textY, opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-100 text-sm font-medium">
            <Leaf className="w-4 h-4" />
            Nigeria&apos;s Premier Integrated Agribusiness
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          From Farm to Table{" "}
          <span className="block text-emerald-400">— Sustainably</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto"
        >
          Diversity Resources Limited
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-base sm:text-lg text-emerald-200/90 mb-10 max-w-2xl mx-auto"
        >
          Integrated Livestock • Crop Production • Food Processing
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#services")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full group transition-all duration-300 shadow-lg shadow-emerald-900/30"
          >
            Explore Our Operations
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          {/* <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            Partner With Us
          </Button> */}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
