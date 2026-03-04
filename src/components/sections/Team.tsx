"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Linkedin, Mail, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const teamMembers = [
  {
    name: "Samuel Duru",
    role: "Chairman/Chief Executive Officer",
    bio: "As the Chairman and Chief Executive Officer of Diversity Resources Limited, Samuel Duru provides the overarching vision and strategic direction that has positioned the company as a growing force in Nigeria's agricultural sector. His leadership is defined by a commitment to operational excellence, value chain development, and sustainable agribusiness practices.\n\nWith a career spanning multiple industries, Samuel brings a wealth of experience in corporate strategy, business development, and organizational leadership to the company. His entrepreneurial foresight has been instrumental in guiding Diversity Resources Limited through its expansion into integrated farming and agro-processing, ensuring that the company remains resilient, innovative, and forward-looking in a dynamic economic landscape.\n\nUnder his stewardship, the company has strengthened its focus on agricultural value addition, capacity building, and service delivery excellence. Samuel's leadership philosophy centers on building strong teams, fostering strategic partnerships, and driving long-term value creation for stakeholders.",
    image: "/team/CEO.jpeg",
  },
  {
    name: "Dr. Amarachi Duru",
    role: "Executive Director/Company Secretary",
    bio: "Dr. Amarachi Duru serves as the Executive Director and Company Secretary of Diversity Resources Limited, combining strategic leadership with robust corporate governance to support the company's growing agricultural and agro-processing operations.\n\nIn her dual role, she provides critical oversight in regulatory compliance, board advisory, and legal administration, ensuring that the organization operates within the highest standards of corporate ethics and statutory requirements. Her contributions extend beyond governance into strategic decision-making, where she plays a key role in shaping company policy and operational direction.\n\nDr. Amarachi brings a wealth of experience with rigor and professional discipline to the executive team. Her background equips her with strong analytical, research, and problem-solving capabilities that enhance the company's project execution and institutional frameworks.\n\nAs Executive Director, she is actively involved in driving organizational development, stakeholder engagement, and capacity-building initiatives.",
    image: "/team/ED.jpeg",
  },
  {
    name: "Nyibiam Kwaghshir",
    role: "Managing Director",
    bio: "As the Managing Director of Diversity Resources Limited, Nyibiam Kwaghshir provides strategic vision and leadership that guide the company's ventures in integrated farming and agro-processing. With a career deeply rooted in commercial agriculture since 2011, he has been instrumental in steering the organization toward sustainable growth and operational excellence.\n\nHe holds a degree in Mathematics, which underpins his methodical approach to business strategy, data analysis, and complex project management. Over the years, Nyibiam has successfully overseen numerous agricultural projects, demonstrating a consistent ability to drive initiatives from conception through to profitable execution.\n\nAt the helm of Diversity Resources Limited, he remains focused on strengthening the company's value chain, fostering innovation, and solidifying its position within the agricultural sector.",
    image: "/team/MD.jpeg",
  },
  {
    name: "Kingsley Uchendu",
    role: "Operations Manager",
    bio: "Kingsley Uchendu serves as the Operations Manager of Diversity Resources Limited, bringing with him extensive experience in business management, corporate sales, telecommunications, and financial services. He holds a Bachelor's Degree in Microbiology from the University of Nigeria, Nsukka (UNN), equipping him with strong analytical, scientific, and operational problem-solving skills.\n\nHis background in corporate account management, operations leadership, and strategic business development positions him as a key driver of operational efficiency, growth strategy, and performance management within Diversity Resources Limited.\n\nUnder his leadership, the company continues to strengthen its integrated farming operations, value chain development, and service delivery standards.",
    image: "/team/Operations.jpeg",
  },
  {
    name: "Raymond Elemnwoke",
    role: "Finance Director",
    bio: "Raymond serves as the Finance Director of Diversity Resources Limited, bringing over 12 years of extensive experience in financial management, strategic planning, and corporate advisory to the company's leadership team.\n\nA Chartered Accountant by profession, Raymond has built a distinguished career across audit, corporate finance, business analysis and valuation, investment analysis, and financial due diligence. His expertise extends to mergers and acquisitions (M&A), where he has advised on complex transactions both as a consultant and within the Oil and Gas industry.\n\nIn his role as Finance Director, Raymond oversees the company's financial health, driving sustainable growth, optimizing capital structure, and supporting the organization's expanding agricultural and agro-processing operations with robust financial strategy and governance.",
    image: "/team/Finance.jpeg",
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ceo = teamMembers[0];
  const managementTeam = teamMembers.slice(1);

  return (
    <section
      id="team"
      className="section-padding bg-stone-50 relative overflow-hidden min-h-screen py-24"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-stone-200 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container-custom relative z-10 w-full mt-20 lg:mt-0">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm uppercase tracking-wider mb-4">
            <Users className="w-5 h-5" />
            Our Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Guiding Our <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-stone-600 text-lg">
            Our leadership team brings together decades of experience in
            agriculture, finance, and business management to drive sustainable
            growth.
          </p>
        </motion.div>

        {/* 1. CEO Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-24"
        >
          <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100/50 overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0">
              {/* CEO Image - Left Side */}
              <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-square lg:aspect-auto min-h-[300px] lg:min-h-0 bg-stone-100 group overflow-hidden">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Socials hover */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-11 h-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-emerald-900 hover:bg-emerald-600 hover:text-white transition-colors shadow-lg">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-11 h-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-emerald-900 hover:bg-emerald-600 hover:text-white transition-colors shadow-lg">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* CEO Content - Right Side */}
              <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />

                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-3">
                    {ceo.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-emerald-700 font-semibold text-lg tracking-wide uppercase">
                      {ceo.role}
                    </p>
                  </div>

                  <div className="space-y-5 text-stone-600 leading-relaxed text-lg mb-10">
                    {/* Show first two paragraphs for summary */}
                    {ceo.bio
                      .split("\n\n")
                      .slice(0, 2)
                      .map((paragraph, idx) => (
                        <p key={`ceo-bio-${idx}`}>{paragraph}</p>
                      ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold shadow-lg group">
                        Read Full Profile
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto p-0 rounded-2xl gap-0 border-0">
                      <DialogHeader className="sr-only">
                        <DialogTitle>{ceo.name} Full Profile</DialogTitle>
                        <DialogDescription>
                          Full biography and profile details for {ceo.name}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-stone-100 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-emerald-100">
                          <img
                            src={ceo.image}
                            alt={ceo.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-stone-900">
                            {ceo.name}
                          </div>
                          <div className="text-emerald-700 font-medium tracking-wide">
                            {ceo.role}
                          </div>
                        </div>
                      </div>
                      <div className="p-5 sm:p-8 space-y-4 sm:space-y-5 text-stone-600 leading-relaxed text-base sm:text-lg">
                        {ceo.bio.split("\n\n").map((paragraph, idx) => (
                          <p key={`ceo-full-${idx}`}>{paragraph}</p>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Management Team Grid */}
        <div className="mb-12 border-t border-stone-200 pt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-10 text-center">
            Management Team
          </h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {managementTeam.map((member) => (
              <Dialog key={member.name}>
                <DialogTrigger asChild>
                  <motion.div variants={fadeInUp} className="h-full">
                    <Card className="h-full cursor-pointer group bg-white overflow-hidden border-stone-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 flex flex-col">
                      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                          <div className="bg-white/95 backdrop-blur-sm text-emerald-900 text-sm font-semibold rounded-lg py-3 text-center w-full flex items-center justify-center gap-2 shadow-lg">
                            Read Full Bio <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                        <h4 className="text-xl font-bold text-stone-900 mb-1 group-hover:text-emerald-700 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-emerald-600 font-medium text-sm mb-4">
                          {member.role}
                        </p>
                        <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                          {member.bio.split("\n\n")[0]}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto p-0 rounded-2xl gap-0 border-0">
                  <DialogHeader className="sr-only">
                    <DialogTitle>{member.name} Full Profile</DialogTitle>
                    <DialogDescription>
                      Full biography and profile details for {member.name}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-stone-100 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-emerald-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-stone-900">
                        {member.name}
                      </div>
                      <div className="text-emerald-700 font-medium whitespace-pre-wrap">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-8 space-y-4 sm:space-y-5 text-stone-600 leading-relaxed text-sm sm:text-base">
                    {member.bio.split("\n\n").map((paragraph, idx) => (
                      <p key={`member-bio-${idx}`}>{paragraph}</p>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </motion.div>
        </div>

        {/* Removed Note about photos */}
      </div>
    </section>
  );
}
