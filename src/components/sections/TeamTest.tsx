"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Samuel Duru",
    role: "Chairman/CEO",
    bio: "Leading Diversity Resources Limited with strategic vision and commitment to agricultural excellence.",
    image: "/team/CEO.jpeg",
  },
  {
    name: "Amarachi Duru",
    role: "Director/Secretary",
    bio: "Overseeing corporate governance and administrative operations with dedication and precision.",
    image: "/team/ED.jpeg",
  },
  {
    name: "Raymond Elemnwoke",
    role: "Finance Manager",
    bio: "Raymond is a Chartered Accountant and Finance Professional with over 12 years of experience in fields spanning Audit, Corporate Finance, Business Analysis and Valuation, Investment Analysis, Financial Due Diligence, and M&A, as a Consultant and in the Oil and Gas Industry.",
    image: "/team/Finance.jpeg",
  },
  {
    name: "Kingsley Uchendu",
    role: "Operations Manager",
    bio: "Kingsley Uchendu serves as the Operations Manager of Diversity Resources Limited, bringing with him extensive experience in business management, corporate sales, telecommunications, and financial services. He has built a diverse career spanning multiple industries.",
    image: "/team/Operations.jpeg",
  },
  {
    name: "Nyibiam Kwaghshir",
    role: "Managing Director",
    bio: "Driving the company towards its goals with leadership, operational strategy, and effective implementation frameworks for agricultural success.",
    image: "/team/MD.jpeg",
  },
];

export default function TeamTest() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setActiveIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const activeMember = teamMembers[activeIndex];

  return (
    <section className="section-padding bg-stone-50 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-stone-200 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container-custom relative z-10 flex-1 flex flex-col pb-32">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm uppercase tracking-wider mb-4">
            <Users className="w-5 h-5" />
            Our Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-stone-600 text-lg">
            Our leadership team brings together decades of experience in
            agriculture, finance, and business management to drive sustainable
            growth.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full mt-8">
          {/* Left Arrow (Absolute positioning on large screens) */}
          <button
            onClick={prevMember}
            className="hidden lg:flex absolute -left-4 xl:-left-12 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-full bg-white shadow-md hover:bg-emerald-50 hover:text-emerald-700 text-stone-600 transition-all z-30 border border-stone-100"
            aria-label="Previous team member"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Text Content */}
          <div className="w-full lg:w-[60%] xl:w-[65%] order-2 lg:order-1 relative z-20">
            <div className="min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h3 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-900 mb-4 tracking-tight">
                    {activeMember.name}
                  </h3>
                  <p className="text-2xl sm:text-3xl text-emerald-600 font-medium mb-8">
                    {activeMember.role}
                  </p>
                  <p className="text-stone-600 leading-relaxed text-lg sm:text-xl md:text-2xl w-full">
                    {activeMember.bio}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Arrows */}
            <div className="flex lg:hidden gap-6 mt-12 justify-start">
              <button
                onClick={prevMember}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextMember}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[40%] xl:w-[35%] h-[400px] lg:h-[600px] relative order-1 lg:order-2 flex justify-center lg:justify-end items-end z-10 mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-full max-w-[600px]"
              >
                <Image
                  src={activeMember.image}
                  alt={activeMember.name}
                  fill
                  priority
                  className="object-cover object-top drop-shadow-2xl rounded-2xl"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow (Absolute positioning on large screens) */}
          <button
            onClick={nextMember}
            className="hidden lg:flex absolute -right-4 xl:-right-12 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-full bg-white shadow-md hover:bg-emerald-50 hover:text-emerald-700 text-stone-600 transition-all z-30 border border-stone-100"
            aria-label="Next team member"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Bottom Thumbnail Bar overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-stone-200/50 z-30 py-6 lg:py-8 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="container-custom overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start lg:justify-center min-w-max gap-6 sm:gap-14 mx-auto px-4">
            {teamMembers.map((member, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={member.name}
                  onClick={() => setActiveIndex(index)}
                  className="flex flex-col items-center group min-w-[130px] transition-transform duration-300"
                >
                  <div
                    className={cn(
                      "relative w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-3 sm:mb-4 overflow-hidden transition-all duration-300",
                      isActive
                        ? "ring-[4px] ring-emerald-600 ring-offset-4 ring-offset-white scale-110 shadow-xl grayscale-0 opacity-100"
                        : "ring-1 ring-stone-200 grayscale opacity-60 group-hover:grayscale-[30%] group-hover:opacity-100 blur-[0.5px] group-hover:blur-0",
                    )}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span
                    className={cn(
                      "text-sm sm:text-base font-bold transition-colors duration-300",
                      isActive
                        ? "text-stone-900"
                        : "text-stone-500 group-hover:text-stone-700",
                    )}
                  >
                    {member.name}
                  </span>
                  <span
                    className={cn(
                      "text-xs sm:text-sm transition-colors duration-300 mt-1 font-medium",
                      isActive
                        ? "text-emerald-600"
                        : "text-stone-400 group-hover:text-stone-500",
                    )}
                  >
                    {member.role}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
