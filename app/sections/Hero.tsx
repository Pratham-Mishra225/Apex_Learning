"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero-space relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%)]" />
      </div>
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="surface-card section-label inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-body">
            Premium coaching in Virar
          </span>
          <h1 className="display-heading mt-3">
            Excel in Boards, JEE, NEET & MHT-CET with Expert Guidance
          </h1>
          <p className="mt-5 text-lg text-body">
            Strong Foundations. Top Results.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white"
            >
              Book Free Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:YOUR_PHONE_NUMBER"
              className="surface-card inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-heading backdrop-blur-md"
            >
              Call Now
            </motion.a>
          </div>
        </motion.div>
        <div className="mt-16 grid gap-5 text-base text-body sm:grid-cols-3">
          {[
            "Small batch focus",
            "Weekly tests & reports",
            "Personalized mentoring",
          ].map((item) => (
            <div
              key={item}
              className="surface-card rounded-2xl px-6 py-5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
