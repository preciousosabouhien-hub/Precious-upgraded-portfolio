import type { Metadata } from "next";
import { Newsreader, Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// Import the specific icons globally
import { faXmark} from '@fortawesome/free-solid-svg-icons' ;
config.autoAddCss = false
// Add individual icons to the library
library.add( faXmark)

// Configure Orbitron. Orbitron is a variable font, 
// so you don't strictly need to define weights unless you want to limit them.
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron", // Optional: useful if you want to use it in CSS files
  display: "swap",
});


// Serif for headlines — gives the page a voice distinct from the

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

// Sans for body copy and UI text.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Precious Omosefe -- Web Developer",
  description: "Portfolio of Precious Omosefe, a web developer building with modern frameworks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${spaceGrotesk.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
