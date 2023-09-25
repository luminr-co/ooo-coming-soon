import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { ToastContainer } from "react-toastify";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-psd",
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "900"],
});

export const metadata: Metadata = {
  title: "Only One Outlier",
  description:
    "Unveiling the Wonders of Data Science: Explore Insights, Discover Patterns, and Shape the Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair_display.variable} ${lato.variable}`}>
        {children}

        <ToastContainer />
      </body>
    </html>
  );
}
