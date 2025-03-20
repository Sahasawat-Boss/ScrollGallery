import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/Scrolltotop";

import { Geist, Geist_Mono } from "next/font/google";
import "./CSS/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ScrollGallery ",
  description: "ScrollGallery , Gallary Image App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <ScrollToTop/>
        <Footer />
      </body>
    </html>
  );
}
