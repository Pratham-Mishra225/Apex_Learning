"use client";

import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const counters = [
  { label: "Students mentored", value: 500, suffix: "+" },
  { label: "Selections", value: 100, suffix: "+" },
];

const toppers = [
  { name: "Ananya Patel", exam: "NEET", rank: "AIR 312" },
  { name: "Rohan Mehta", exam: "JEE", rank: "AIR 890" },
  { name: "Sana Qureshi", exam: "MHT-CET", rank: "99.2 percentile" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setCurrent(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl font-semibold text-heading">
      {current}
      {suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section id="results" className="section-space">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="section-label">
            Results
          </p>
          <h2 className="section-heading mt-3">
            Proven outcomes that build trust
          </h2>
          <p className="mt-5 text-body">
            Consistent mentoring and testing culture translate into real success.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {counters.map((item) => (
            <div
              key={item.label}
              className="surface-card rounded-2xl p-7"
            >
              <Counter value={item.value} suffix={item.suffix} />
              <p className="mt-2 text-base text-body">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {toppers.map((topper) => (
            <motion.div
              key={topper.name}
              whileHover={{ scale: 1.02 }}
              className="surface-card rounded-2xl p-7"
            >
              <p className="text-base text-body">Topper</p>
              <h3 className="mt-3 text-xl font-semibold text-heading">
                {topper.name}
              </h3>
              <p className="mt-2 text-base text-body">
                {topper.exam} · {topper.rank}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
