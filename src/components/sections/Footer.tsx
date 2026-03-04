"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Team", href: "/team-test" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Livestock Production",
  "Crop Cultivation",
  "Food Processing",
  "Agro-Allied Services",
  "Supply & Distribution",
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (!href.startsWith("#")) return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-stone-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <Leaf className="w-8 h-8 text-emerald-400" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight tracking-wide">
                    DIVERSITY RESOURCES
                  </span>
                  <span className="text-[10px] leading-tight tracking-wider text-emerald-400">
                    Integrated Agribusiness
                  </span>
                </div>
              </motion.div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              A fully integrated agribusiness company engaged in livestock
              production, cattle ranching, crop cultivation, and food processing
              in Nigeria.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center text-stone-400 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#services");
                    }}
                    className="text-stone-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400 text-sm">
                  Plot 12, Cadatral Zone, Newcastle Apartment, 22 Ozubulu
                  Street, FCDA, Kubwa, Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-stone-400 text-sm">
                  +234 817 064 2868
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-stone-400 text-sm">
                  info@diversityresourceslimited.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm text-center md:text-left">
              © 2026 Diversity Resources Limited. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-stone-500 hover:text-emerald-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-stone-500 hover:text-emerald-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
