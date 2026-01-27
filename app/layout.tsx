import Header from "../src/components/layout/Header"; 
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camisería Urbana | E-commerce",
  description: "Tu tienda online de camisas con estilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"> {/* Cambié a "es" por el idioma del proyecto */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 1. Insertamos el Header aquí arriba */}
        <Header /> 
        
        {/* 2. Envolvemos el children en un <main> para mejor SEO y estructura */}
        <main>
          {children}
        </main>

        {/* 3. Cuando tengas el Footer, lo importarás y pondrás acá abajo */}
      </body>
    </html>
  );
}