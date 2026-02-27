// app/layout.tsx
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
  // He actualizado esto para que se vea mejor en Google y pestañas
  title: "CrafterJe | Back End Developer Portfolio",
  description: "Desarrollador de software especializado en aplicaciones web modernas y soluciones escalables.",
  keywords: ["Next.js", "React", "Full Stack", "Software Engineering", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning aquí evita errores por extensiones que traducen la página
    <html lang="es" className="dark" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // suppressHydrationWarning aquí ignora los atributos inyectados por extensiones (como vimos en tu captura)
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}