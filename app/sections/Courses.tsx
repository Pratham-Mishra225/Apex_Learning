"use client";

import { motion } from "framer-motion";

const courses = [
  {
    title: "Classes 8-10",
    description: "Board-ready foundation with conceptual clarity and habits.",
    duration: "12 months",
  },
  {
    title: "Classes 11-12",
    description: "Structured preparation for boards with exam-ready practice.",
    duration: "24 months",
  },
  {
    title: "JEE",
    description: "Advanced problem solving with focused mentorship.",
    duration: "18 months",
  },
  {
    title: "NEET",
    description: "High-yield biology and MCQ mastery for medical aspirants.",
    duration: "18 months",
  },
  {
    title: "MHT-CET",
    description: "Speed, accuracy, and syllabus-smart preparation.",
    duration: "12 months",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section-space">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="section-label">
            Courses
          </p>
          <h2 className="section-heading mt-3">
            Programs crafted for every academic milestone
          </h2>
          <p className="mt-5 text-body">
            Choose the path that matches your goals, with expert-led sessions and
            consistent assessments.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              whileHover={{ scale: 1.02 }}
              className={`surface-card flex min-h-64 flex-col rounded-2xl p-7 ${
                index === courses.length - 1 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-heading">
                  {course.title}
                </h3>
                <span className="rounded-full border border-primary/20 bg-primary/12 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-primary">
                  {course.duration}
                </span>
              </div>
              <p className="mt-4 flex-1 text-base text-body">
                {course.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-between border-t border-primary/15 pt-4 text-base font-semibold text-accent"
              >
                Enroll Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
