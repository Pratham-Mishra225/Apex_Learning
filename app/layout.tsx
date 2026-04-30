import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Apex Learning Academy | Premium Coaching in Virar",
    template: "%s | Apex Learning Academy",
  },
  description:
    "Apex Learning Academy offers premium coaching for Boards, JEE, NEET, and MHT-CET in Virar, Mumbai. Book a free demo and start your success journey.",
  keywords: [
    "Apex Learning Academy",
    "Coaching institute Virar",
    "JEE coaching",
    "NEET coaching",
    "MHT-CET coaching",
    "Board exam coaching",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
