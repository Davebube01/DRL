"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "@/assets/DRL-logo.png"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const showSolidNav = !isHome || isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidNav
          ? "glass shadow-lg border-b border-stone-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" passHref legacyBehavior>
            <motion.a
              className="flex items-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image src={logo} alt="Logo" width={100} height={100} />
            </motion.a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} passHref legacyBehavior>
                  <motion.a
                    className={`relative text-sm font-medium transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? "text-emerald-600"
                        : showSolidNav
                          ? "text-stone-700 hover:text-emerald-700"
                          : "text-white/90 hover:text-white"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={isActive ? {} : { y: -2 }}
                  >
                    {link.name}
                    {/* Active underline — always visible when active */}
                    {isActive ? (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 rounded-full" />
                    ) : (
                      <motion.span
                        className={`absolute -bottom-1 left-0 h-0.5 rounded-full ${
                          showSolidNav ? "bg-emerald-600" : "bg-white"
                        }`}
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              asChild
              className={`transition-all duration-300 cursor-pointer ${
                showSolidNav
                  ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                  : "bg-white text-emerald-800 hover:bg-emerald-50"
              }`}
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={showSolidNav ? "text-emerald-900" : "text-white"}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-6 h-6 text-emerald-700" />
                    <span className="font-bold text-emerald-900 text-sm">
                      DIVERSITY RESOURCES
                    </span>
                  </div>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className={`text-lg font-medium transition-colors py-2 px-3 rounded-lg block border-b border-stone-100 ${
                              isActive
                                ? "text-emerald-700 bg-emerald-50 border-emerald-100 font-semibold"
                                : "text-stone-700 hover:text-emerald-700 hover:bg-stone-50"
                            }`}
                          >
                            {link.name}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white cursor-pointer"
                    >
                      <Link href="/contact">Get In Touch</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
