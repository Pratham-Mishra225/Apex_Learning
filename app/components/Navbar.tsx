"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50">
      <div className="site-container">
        <div className="surface-card mt-4 flex items-center justify-between rounded-2xl px-5 py-3 backdrop-blur-md">
          <a href="#home" className="text-lg font-semibold text-heading">
            Apex Learning Academy
          </a>
          <nav className="hidden items-center gap-6 text-base font-medium text-body md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-heading"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <motion.button
            type="button"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="surface-card inline-flex h-10 w-10 items-center justify-center rounded-full text-heading"
          >
            {!mounted ? (
              <span className="h-5 w-5" />
            ) : resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
