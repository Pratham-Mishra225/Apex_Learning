# Apex Learning Academy

Professional marketing site for Apex Learning Academy, a premium coaching institute in Virar, Mumbai. The experience is a focused, single-page layout with themed styling, animated highlights, and a lead capture flow.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Configuration and Content](#configuration-and-content)
- [Deployment](#deployment)
- [License](#license)

## Overview

- Single-page layout for hero, courses, features, results, testimonials, and contact.
- Local-business SEO with metadata and JSON-LD schema.
- Lead form with a primary endpoint and a fallback Google Form.

## Key Features

- Framer Motion animations for hero and section reveals.
- Light and dark theme toggle using `next-themes`.
- Tailwind CSS v4 tokens and utilities for consistent styling.
- Structured content arrays per section for quick edits.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS v4
- Framer Motion
- lucide-react icons
- next-themes

## Getting Started

### Prerequisites

- Node.js LTS (see Next.js requirements for exact version).
- npm (or your preferred package manager).

### Install and Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

|      Command    |     Description              |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build for production         |
| `npm run start` | Run the production build     |
| `npm run lint`  | Run ESLint                   |

## Project Structure

```
app/
  components/
    ContactForm.tsx
    Footer.tsx
    Navbar.tsx
    ThemeProvider.tsx
  sections/
    Contact.tsx
    Courses.tsx
    Features.tsx
    Hero.tsx
    Results.tsx
    Testimonials.tsx
  globals.css
  layout.tsx
  page.tsx
public/
```

## Configuration and Content

### Branding and Copy

- Hero call-to-action text and phone link: [app/sections/Hero.tsx](app/sections/Hero.tsx)
- Courses, features, results, and testimonials arrays: [app/sections/](app/sections/)
- Contact address, phone, and map: [app/sections/Contact.tsx](app/sections/Contact.tsx)

### Lead Form Integration

- Primary POST endpoint and fallback Google Form: [app/components/ContactForm.tsx](app/components/ContactForm.tsx)
- Replace the Apps Script URL and the Google Form link before launch.

### SEO and Schema

- Metadata defaults: [app/layout.tsx](app/layout.tsx)
- LocalBusiness JSON-LD schema: [app/page.tsx](app/page.tsx)
- Update `YOUR_PHONE_NUMBER` and address details for accuracy.

### Theming

- Theme tokens and utility classes: [app/globals.css](app/globals.css)
- Default theme is light, with a toggle in the navbar.

## Deployment

```bash
npm run build
npm run start
```


