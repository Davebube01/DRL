"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Loader2,
  Building2,
  Users,
} from "lucide-react";

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

// Zod validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Check if EmailJS credentials are configured
      if (
        EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
        EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
        EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
      ) {
        // Demo mode - simulate success
        toast.success("Message sent successfully! We will reply soon.");
        form.reset();
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully! We will reply soon.");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Plot 12, Cadatral Zone, Newcastle Apartment, 22 Ozubulu Street, FCDA, Kubwa, Abuja, Nigeria",
      subContent: "Corporate Headquarters",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+234 817 064  2868",
      subContent: "Mon - Fri, 8am - 6pm",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@diversityresourceslimited.com",
      subContent: "We reply within 24 hours",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-emerald-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-stone-100 rounded-full blur-3xl -translate-x-1/3" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm uppercase tracking-wider mb-4">
            <Mail className="w-5 h-5" />
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-stone-600 text-lg">
            Ready to partner with us? Reach out today and let&apos;s discuss how
            we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="border-stone-100 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">
                  Send us a Message
                </h3>
                <Form {...form}>
                  <form
                    ref={formRef}
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="h-12"
                              name="from_name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                                className="h-12"
                                name="from_email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+234 XXX XXX XXXX"
                                {...field}
                                className="h-12"
                                name="phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company/Organization</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your company name (optional)"
                              {...field}
                              className="h-12"
                              name="company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project or inquiry..."
                              {...field}
                              className="min-h-[120px] resize-none"
                              name="message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-stone-100 hover:border-emerald-200 transition-colors">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-emerald-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-stone-700">{info.content}</p>
                        <p className="text-stone-500 text-sm">
                          {info.subContent}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Partnership Card */}
            {/* <motion.div variants={fadeInUp}>
              <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 mb-2">
                        Partnership Opportunities
                      </h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        We supply to government institutions, hotels,
                        supermarkets, and exporters. Let&apos;s discuss how we can
                        meet your agricultural product needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}

            {/* Client Types */}
            {/* <motion.div variants={fadeInUp}>
              <Card className="border-stone-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-semibold text-stone-900">
                      We Serve
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Government",
                      "Hotels",
                      "Restaurants",
                      "Supermarkets",
                      "Exporters",
                      "Distributors",
                    ].map((client) => (
                      <span
                        key={client}
                        className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
