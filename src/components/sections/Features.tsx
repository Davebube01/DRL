"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sprout, ShieldCheck, Tractor, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Tractor,
    title: "Modern Farming",
    description:
      "Utilizing state-of-the-art agricultural technology and machinery to maximize crop yield and efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "Rigorous quality control processes ensure that all our produce and livestock meet the highest standards.",
  },
  {
    icon: Sprout,
    title: "Eco-Friendly",
    description:
      "Committed to sustainable farming practices that protect and enrich the environment for future generations.",
  },
  {
    icon: TrendingUp,
    title: "Economic Growth",
    description:
      "Driving local economic development by providing employment and supporting community agribusiness initiatives.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm uppercase tracking-wider mb-4">
            <TrendingUp className="w-5 h-5" />
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Why Choose{" "}
            <span className="text-emerald-700">Diversity Resources</span>
          </h2>
          <p className="text-stone-600 text-lg">
            We are dedicated to revolutionizing the agribusiness landscape
            through innovation, sustainability, and unparalleled quality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-stone-100 hover:border-emerald-200 transition-colors duration-300 card-lift bg-white/50 backdrop-blur-sm group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-300">
                      <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
