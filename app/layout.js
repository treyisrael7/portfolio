import "./globals.css";
import Navbar from "../components/Navbar.js";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "My Portfolio",
  description: "Created with Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-mono text-white bg-[#1f1f1f] bg-grid`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
