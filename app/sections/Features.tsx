"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  GraduationCap,
  HelpingHand,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Experienced Faculty",
    description: "Mentors with proven results and exam expertise.",
    icon: GraduationCap,
  },
  {
    title: "Small Batch Size",
    description: "Focused attention and faster doubt resolution.",
    icon: Users,
  },
  {
    title: "Weekly Tests",
    description: "Frequent evaluation with performance insights.",
    icon: ClipboardCheck,
  },
  {
    title: "Doubt Solving",
    description: "Dedicated doubt sessions to build confidence.",
    icon: HelpingHand,
  },
  {
    title: "Personalized Mentoring",
    description: "Individual plans based on strengths and goals.",
    icon: Target,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="section-space">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="section-label">
            Why Choose Us
          </p>
          <h2 className="section-heading mt-3">
            A premium learning environment built for results
          </h2>
          <p className="mt-5 text-body">
            We combine structured curriculum with mentoring that keeps students
            confident and focused.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="surface-card rounded-2xl p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-heading">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-body">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
