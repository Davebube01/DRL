"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Sprout, Award } from "lucide-react";
import processing from "@/assets/processing2.jpg"


const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding bg-emerald-50  relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm uppercase tracking-wider mb-4">
                <Sprout className="w-5 h-5" />
                About Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                Building a Sustainable{" "}
                <span className="text-gradient">Agricultural Future</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-stone-600 text-lg leading-relaxed"
            >
              Diversity Resources Limited is a fully integrated agribusiness
              company engaged in livestock production, cattle ranching, crop
              cultivation, and food processing. Our operations are designed to
              create a sustainable agricultural value chain — from farm
              production to processed food products.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-stone-600 text-lg leading-relaxed"
            >
              We combine modern farming techniques, responsible animal
              husbandry, and efficient processing systems to ensure high-quality
              output, reduced waste, and year-round production.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 pt-4"
            >
              {[
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Acres Farmed" },
                { value: "50+", label: "Team Members" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-700">
                    {stat.value}
                  </div>
                  <div className="text-sm text-stone-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={processing.src}
                alt="Agricultural landscape"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <div className="font-bold text-stone-900">Certified</div>
                <div className="text-sm text-stone-500">Quality Standards</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mt-20"
        >
          {/* Vision Card */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full card-lift border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-7 h-7 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">
                      Our Vision
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      To become a leading integrated agricultural enterprise in
                      Nigeria, recognized for excellence in livestock
                      production, crop farming, and food processing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full card-lift border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">
                      Our Mission
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      To deliver high-quality agricultural and processed food
                      products through sustainable farming practices,
                      innovation, and strong value-chain management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
