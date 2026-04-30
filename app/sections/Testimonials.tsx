"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Priya Shah",
    role: "Parent of Class 10 student",
    quote:
      "The weekly tests and mentoring helped my daughter stay consistent and stress-free.",
  },
  {
    name: "Arjun Kulkarni",
    role: "JEE Aspirant",
    quote:
      "The problem-solving sessions made tough concepts feel simple and doable.",
  },
  {
    name: "Neha Rao",
    role: "NEET Aspirant",
    quote:
      "Doubt clearing is quick and faculty attention is genuinely personal.",
  },
  {
    name: "Irfan Khan",
    role: "Class 12 student",
    quote:
      "Mock tests and feedback gave me clarity on exactly where to improve.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section className="section-space">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="section-label">
            Testimonials
          </p>
          <h2 className="section-heading mt-3">
            Families trust Apex Learning Academy
          </h2>
          <p className="mt-5 text-body">
            Real experiences that reflect our coaching culture.
          </p>
        </div>
        <div className="surface-card mt-12 rounded-2xl p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-heading">"{active.quote}"</p>
              <div>
                <p className="text-base font-semibold text-heading">
                  {active.name}
                </p>
                <p className="text-sm text-body">{active.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex items-center gap-3">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === index
                    ? "bg-accent"
                    : "bg-body/30 hover:bg-body/60"
                }`}
                aria-label={`Show testimonial from ${item.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
