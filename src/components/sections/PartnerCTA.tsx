"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

export default function PartnerCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-24">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden min-h-[400px] flex items-center justify-center p-8 sm:p-16 shadow-2xl"
        >
          {/* Parallax/Fixed Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url('https://picsum.photos/id/292/1920/1080')`,
            }}
          />
          {/* Dark Overlays for Text Readability */}
          <div className="absolute inset-0 z-0 bg-emerald-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-stone-900/60" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
              <Handshake className="w-8 h-8 text-emerald-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to{" "}
              <span className="text-emerald-400">Partner With Us?</span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-50/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join forces with Nigeria's premier integrated agribusiness.
              Whether it's investment, supply chain integration, or sustainable
              farming initiatives, we're ready to grow together.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8 py-6 text-base sm:text-lg rounded-full group transition-all duration-300 shadow-xl shadow-emerald-900/50"
            >
              <Link href="/contact">
                Get in Touch Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
