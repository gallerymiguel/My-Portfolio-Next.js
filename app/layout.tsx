import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation"; 
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Miguel Urdiales Portfolio",
  description: "A showcase of my work and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-950 text-white">
        <Navigation /> 
        <main className="flex-grow">{children}</main> 
        <Footer/> 
      </body>
    </html>
  );
}
