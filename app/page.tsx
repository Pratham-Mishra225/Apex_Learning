import Contact from "./sections/Contact";
import Courses from "./sections/Courses";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Results from "./sections/Results";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Apex Learning Academy",
    description:
      "Premium coaching institute in Virar, Mumbai for Boards, JEE, NEET, and MHT-CET.",
    areaServed: "Virar, Mumbai",
    telephone: "YOUR_PHONE_NUMBER",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Virar",
      addressRegion: "MH",
      addressCountry: "IN",
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Courses />
        <Features />
        <Results />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
