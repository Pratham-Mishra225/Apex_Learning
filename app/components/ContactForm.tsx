"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type FormState = {
  name: string;
  phone: string;
  classLevel: string;
  course: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  classLevel: "",
  course: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      nextErrors.phone = "Phone must be exactly 10 digits.";
    }

    if (!formData.classLevel) {
      nextErrors.classLevel = "Class is required.";
    }

    if (!formData.course) {
      nextErrors.course = "Course is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    if (!validate()) {
      return;
    }

    setStatus("loading");

    try {
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        class: formData.classLevel,
        course: formData.course,
      };

      const response = await fetch("https://script.google.com/macros/s/AKfycbx3wGPSQPtxRxcKY0cNimMuoWdPQjwGHmou24puN_ABPr_51N6siWPyMqdC_Dw1K50fug/exec", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormData(initialState);
      setErrors({});
    } catch (error) {
      setStatus("error");
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSdU0PmNiMkezSMRfzhs75FMfeZZYdeLZEJog5sGVwSEOw-eGg/viewform?usp=dialog", "_blank");
    }
  };

  return (
    <div className="surface-card rounded-2xl p-8">
      <h3 className="text-2xl font-semibold text-heading">Book a Free Demo</h3>
      <p className="mt-2 text-sm text-body">
        Share your details and our team will reach out shortly.
      </p>
      <form id="lead-form" className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium text-heading" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student name"
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-heading placeholder:text-body/70 focus:border-primary focus:outline-none ${
              errors.name
                ? "border-red-500 bg-surface"
                : "border-primary/15 bg-surface"
            }`}
            required
          />
          {errors.name ? (
            <p className="mt-2 text-xs text-red-400">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm font-medium text-heading" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit number"
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-heading placeholder:text-body/70 focus:border-primary focus:outline-none ${
              errors.phone
                ? "border-red-500 bg-surface"
                : "border-primary/15 bg-surface"
            }`}
            required
          />
          {errors.phone ? (
            <p className="mt-2 text-xs text-red-400">{errors.phone}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm font-medium text-heading" htmlFor="classLevel">
            Class
          </label>
          <select
            id="classLevel"
            name="classLevel"
            value={formData.classLevel}
            onChange={handleChange}
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-heading focus:border-primary focus:outline-none ${
              errors.classLevel
                ? "border-red-500 bg-surface"
                : "border-primary/15 bg-surface"
            }`}
            required
          >
            <option value="">Select class</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
          {errors.classLevel ? (
            <p className="mt-2 text-xs text-red-400">{errors.classLevel}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm font-medium text-heading" htmlFor="course">
            Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-heading focus:border-primary focus:outline-none ${
              errors.course
                ? "border-red-500 bg-surface"
                : "border-primary/15 bg-surface"
            }`}
            required
          >
            <option value="">Select course</option>
            <option value="Boards">Boards</option>
            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
            <option value="MHT-CET">MHT-CET</option>
          </select>
          {errors.course ? (
            <p className="mt-2 text-xs text-red-400">{errors.course}</p>
          ) : null}
        </div>
        {status === "success" ? (
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            Thank you! Your request has been submitted.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
            Submission failed. Please use the backup form.
          </p>
        ) : null}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === "loading"}
          className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Submitting..." : "Submit Inquiry"}
        </motion.button>
        <p className="text-xs text-body">
          Having trouble?{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdU0PmNiMkezSMRfzhs75FMfeZZYdeLZEJog5sGVwSEOw-eGg/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-accent"
          >
            Fill via Google Form
          </a>
        </p>
      </form>
    </div>
  );
}
