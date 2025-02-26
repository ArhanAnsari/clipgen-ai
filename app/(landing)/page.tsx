"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { WandSparkles } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import FaqItem from "@/components/FaqItem";
import CTA from "@/components/Cta";
import Link from "next/link";
import { PricingCard } from "@/components/PricingCard";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "No, not yet but we hope to offer one soon!",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan anytime. Your new plan will take effect in the next billing cycle.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. You will still have access to all features until the end of your current billing period.",
  },
  {
    question: "Can I add custom info to my invoice?",
    answer:
      "Yes! You can easily add custom details like PO numbers, company info, or additional notes to your invoices.",
  },
  {
    question: "How does billing work?",
    answer:
      "LaunchPro offers monthly billing. Payments are processed securely via our trusted payment partners.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can update your email from your account settings. A confirmation email will be sent to verify the change.",
  },
  {
    question: "Are there any discounts for new users?",
    answer:
      "Yes! We are currently offering 30% off your first 3 months. This deal is limited to the first 20 customers, so act fast!",
  },
  {
    question: "What makes LaunchPro the best tool for SaaS developers?",
    answer:
      "LaunchPro offers a premium dashboard, comprehensive financial reporting, developer tools like source code embeds, and marketing automation—all designed to help you grow your SaaS effortlessly.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for trying out ClipGen AI",
    features: [
      "5 AI generations per month",
      "Basic transcript generation",
      "Standard response time",
      "Community support",
      "Basic analytics",
    ],
  },
  {
    name: "Starter",
    price: "$9",
    description: "Best for content creators just starting out",
    features: [
      "50 AI generations per month",
      "Advanced transcript generation",
      "Priority response time",
      "Email support",
      "Advanced analytics",
      "Custom thumbnails",
      "Title optimization",
      "Content calendar",
    ],
    isPopular: true,
  },
  {
    name: "Creator",
    price: "$15",
    description: "For professional content creators",
    features: [
      "Unlimited AI generations",
      "Premium transcript generation",
      "Instant response time",
      "Priority support",
      "Premium analytics",
      "Custom thumbnails",
      "Title optimization",
      "Content calendar",
      "API access",
      "Team collaboration",
      "Custom branding",
    ],
  },
];

export default function Page() {
  const words = ["Transcript", "Content", "Thumbnail"];
  const [openIndex, setOpenIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const GradientBlob = () => {
    return (
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[800px] h-[500px] opacity-20"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-300 via-rose-200 to-rose-100 blur-3xl" />
      </motion.div>
    );
  };

  const NUM_SHAPES = 15;

  const getRandomPosition = (max: number) => Math.random() * max;
  const getRandomDuration = () => Math.random() * 10 + 20;

  const FloatingShapes = () => {
    const [windowSize, setWindowSize] = useState<{
      width: number;
      height: number;
    }>({ width: 0, height: 0 });

    useEffect(() => {
      const updateSize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      updateSize(); // Set initial size
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    if (!windowSize.width || !windowSize.height) return null; // Prevents rendering before window size is available

    return (
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: NUM_SHAPES }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-rose-100 rounded-full"
            initial={{
              opacity: 0.3,
              x: getRandomPosition(windowSize.width),
              y: getRandomPosition(windowSize.height),
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              x: getRandomPosition(windowSize.width),
              y: getRandomPosition(windowSize.height),
            }}
            transition={{
              duration: getRandomDuration(),
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden bg-white pt-5 pb-12 font-dmSans">
      {/* Subtle grid background */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(244,63,94,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,63,94,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      <GradientBlob />
      <div className="absolute inset-0 overflow-hidden z-10">
        <FloatingShapes />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-rose-50 text-rose-600 border border-rose-100 flex items-center gap-2 mx-auto w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Gemini 2.0 Flash Integration
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 font-spaceGrotesk"
          >
            <span className="text-rose-600">AI</span>{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={words[wordIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="inline-block"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>{" "}
            Creator
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-800 text-xl max-w-3xl mx-auto space-y-2"
          >
            Transform your content creation workflow with our AI agent that will
            save you hours of your time. Spend less time thinking, and more time
            creating!
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
          >
            <Input
              type="url"
              placeholder="Enter YouTube URL..."
              className="w-full sm:w-72 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-full"
            />
            <Button
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white font-medium transition-all duration-200 flex gap-x-2 rounded-full relative z-50"
              asChild
            >
              <Link href="/sign-up">
                <WandSparkles />
                Start creating
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-20"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/hero.webp"
            alt="AI Platform Dashboard"
            width={1920}
            height={1080}
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <hr className="border-gray-100 mb-8" />
      </motion.div>

      <section className="pt-24 pb-8 text-black" id="product">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold tracking-tight font-spaceGrotesk">
                Made by creators,
                <br />
                for creators
              </h2>
            </motion.div>

            <motion.div
              className="self-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-gray-800 text-lg leading-relaxed max-w-xl">
                ClipGen AI was built to allow content creators to focus more
                time on creating, and less time writing. With ClipGen, you can
                just enter an inspirational YouTube video URL and we will create
                all you need to start recording.
                <Link
                  href="/sign-up"
                  className="inline-flex items-center ml-2 text-rose-600 hover:text-rose-500 transition-colors relative z-10"
                >
                  Make the switch <span className="ml-1">→</span>
                </Link>
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              image="/landing/transcript-feature.png"
              title="Transcript generation for any YouTube video"
              index={0}
            />
            <FeatureCard
              image="/landing/thumbnail-feature.png"
              title="Thumbnails and Titles for your own videos"
              index={1}
            />
            <FeatureCard
              image="/landing/analysis-feature.png"
              title="Advanced Content Analysis for more Engagement"
              index={2}
            />
          </div>
        </div>
      </section>

      <section className="py-24" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold font-spaceGrotesk mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Simple, transparent pricing
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Choose the perfect plan for your content creation needs
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="border-gray-100 mb-8 sm:mb-16" />

      <div>
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          id="faq"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        ></motion.div>

        <div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16">
              <motion.div
                className="lg:col-span-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={itemVariants}
                  className="text-sm font-medium text-rose-600 mb-2 sm:mb-4"
                >
                  FAQ
                </motion.div>
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl sm:text-5xl font-semibold text-black mb-6 lg:mb-4 font-spaceGrotesk"
                >
                  Frequently Asked Questions
                </motion.h2>
              </motion.div>

              <motion.div
                className="lg:col-span-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="divide-y divide-gray-200"
                  variants={containerVariants}
                >
                  {faqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={index === openIndex}
                      onClick={() =>
                        setOpenIndex(index === openIndex ? -1 : index)
                      }
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
